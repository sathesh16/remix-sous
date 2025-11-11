import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useFoodWasteTable from '../../hooks/useFoodWasteTable';
import { getWeekDateRange } from '../../utils/date';
import Toast from '../../components/Toast';
import Button from '../../components/Button';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import FoodWastePreview from '../../components/FoodWastePreview';
import CopyLinkButton from '../../components/CopyLinkButton';
import { Eye } from 'lucide-react';


dayjs.extend(weekday);
dayjs.extend(weekOfYear);

const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const NUMERIC_FIELD_KEYS = ["number_of_users", "food_waste", "total_waste"];

export function links() {
    return [
        { rel: "stylesheet", href: "https://unpkg.com/react-spreadsheet@0.9.7/dist/react-spreadsheet.css" },
    ];
}

function coerceDisplayValue(value) {
    return value === null || value === undefined ? "" : value;
}

function FoodWaste() {
    const {
        week,
        setWeek,
        allRecords,
        filteredRecords,
        handleUpdate,
        getPendingValue,
        saveUpdates,
        loading,
        isSaving,
        hasPendingUpdates,
        toast,
        dismissToast
    } = useFoodWasteTable();

    const [isClient, setIsClient] = useState(false);
    const [Spreadsheet, setSpreadsheet] = useState(null);
    const [sheetData, setSheetData] = useState([]);
    const [showPreview, setShowPreview] = useState(false);
    const [previewData, setPreviewData] = useState(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        let mounted = true;
        import('react-spreadsheet').then((mod) => {
            if (!mounted) return;
            setSpreadsheet(() => mod.default || null);
        }).catch(() => {
            // no-op
        });
        return () => { mounted = false; };
    }, []);

    const { start, end } = getWeekDateRange(week);

    // Map records by ISO date (YYYY-MM-DD)
    const recordsByDate = useMemo(() => {
        const map = new Map();
        filteredRecords.forEach((item) => {
            const iso = dayjs(item.date).format('YYYY-MM-DD');
            map.set(iso, item);
        });
        return map;
    }, [filteredRecords]);

    // Compute Monday of selected ISO week reliably with dayjs
    const mondayOfWeek = useMemo(() => dayjs().week(Number(week)).weekday(1), [week]);

    const rowModels = useMemo(() => {
        return WEEKDAYS.map((_, idx) => {
            const dateIso = mondayOfWeek.add(idx, 'day').format('YYYY-MM-DD');
            const record = recordsByDate.get(dateIso);
            const key = record?.id ?? dateIso;
            return {
                key,
                date: dateIso,
                number_of_users: coerceDisplayValue(getPendingValue(key, "number_of_users", record?.number_of_users ?? "")),
                food_waste: coerceDisplayValue(getPendingValue(key, "food_waste", record?.food_waste ?? "")),
                total_waste: coerceDisplayValue(getPendingValue(key, "total_waste", record?.total_waste ?? "")),
            };
        });
    }, [week, mondayOfWeek, recordsByDate, getPendingValue]);

    // Sync sheetData from rowModels
    useEffect(() => {
        const next = rowModels.map((r) => [
            { value: r.number_of_users },
            { value: r.food_waste },
            { value: r.total_waste },
        ]);
        setSheetData(next);
    }, [rowModels]);

    const columnLabels = useMemo(() => ["No of Users this Day", "Plate Waste", "Total Waste"], []);
    const rowLabels = useMemo(() => WEEKDAYS.map((d, idx) => `${d} ${mondayOfWeek.add(idx, 'day').format('DD/MM/YYYY')}`), [mondayOfWeek]);

    const handleSheetChange = useCallback((newData) => {
        const maxRows = Math.min(newData.length, rowModels.length);
        for (let r = 0; r < maxRows; r++) {
            const prevRow = sheetData[r] || [];
            const nextRow = newData[r] || [];
            const model = rowModels[r];
            for (let c = 0; c < NUMERIC_FIELD_KEYS.length; c++) {
                const prevVal = prevRow[c]?.value ?? "";
                const nextVal = nextRow[c]?.value ?? "";
                if (prevVal !== nextVal) {
                    const field = NUMERIC_FIELD_KEYS[c];
                    const parsed = Number(nextVal);
                    const normalized = nextVal === '' || nextVal === null || nextVal === undefined || Number.isNaN(parsed) ? null : parsed;
                    handleUpdate(model.key, { date: model.date, [field]: normalized });
                }
            }
        }
        setSheetData(newData);
    }, [sheetData, rowModels, handleUpdate]);

    // Build preview dataset from last week and last 12 weeks
    const buildPreviewData = useCallback(() => {
        const targetWeek = dayjs().week(Number(week) - 1);
        const targetWeekNum = targetWeek.week();
        const isWeek = (r, wn) => dayjs(r.date).week() === wn;

        function weeklyPerGuestAverages(weekNum) {
            const days = allRecords.filter((r) => isWeek(r, weekNum));
            const plate = [];
            const total = [];
            days.forEach((d) => {
                const users = Number(d.number_of_users) || 0;
                if (users > 0) {
                    if (d.food_waste != null) plate.push(Number(d.food_waste) / users);
                    if (d.total_waste != null) total.push(Number(d.total_waste) / users);
                }
            });
            const avg = (arr) => (arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0);
            return { plateAvg: avg(plate), totalAvg: avg(total) };
        }

        const lastWeek = weeklyPerGuestAverages(targetWeekNum);

        const plateSeries = [];
        const totalSeries = [];
        for (let i = 12; i >= 1; i--) {
            const wn = dayjs().week(Number(week) - i).week();
            const { plateAvg, totalAvg } = weeklyPerGuestAverages(wn);
            plateSeries.push(Math.round(plateAvg));
            totalSeries.push(Math.round(totalAvg));
        }
        const avg = (arr) => (arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0);

        return {
            weekLabel: `Week ${targetWeekNum}`,
            plateWasteLastWeek: lastWeek.plateAvg,
            totalWasteLastWeek: lastWeek.totalAvg,
            plateWasteWeeklyAvg: avg(plateSeries),
            totalWasteWeeklyAvg: avg(totalSeries),
            plateSeries,
            totalSeries,
        };
    }, [allRecords, week]);

    return (
        <div className="p-6">
            <div className="flex justify-between gap-4 mb-4">
                <div className="flex gap-4 items-center">
                    <h3>
                        <span className='text-[var(--primary-color)] text-2xl'>Week {week} /</span> {start} - {end}
                    </h3>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setWeek((prev) => Math.max(prev - 1, 1))}
                            className="px-3 py-1 border rounded hover:bg-gray-100"
                        >
                            ←
                        </button>

                        <button
                            onClick={() => setWeek((prev) => prev + 1)}
                            className="px-3 py-1 border rounded hover:bg-gray-100"
                        >
                            →
                        </button>
                    </div>

                </div>
                <div className="flex gap-2">



                    <Button
                        variant="secondary"
                        onClick={() => {
                            const data = buildPreviewData();
                            setPreviewData(data);
                            setShowPreview(true);
                        }}
                        className="flex gap-[10px] items-center"
                    >
                        <Eye size={20} /> Preview
                    </Button>
                </div>


                <div className="flex justify-end items-center mb-6 pos-top">
                    <p className="mr-4">Remember to update before leaving</p>
                    <Button onClick={saveUpdates} variant="primary" disabled={isSaving || !hasPendingUpdates}>
                        Update
                    </Button>
                </div>
            </div>

            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={dismissToast}
                />
            )}

            {loading ? (
                <p>Loading…</p>
            ) : isClient && Spreadsheet ? (
                <div className="rounded overflow-hidden w-full" style={{ width: '100%' }}>
                    <Spreadsheet
                        data={sheetData}
                        onChange={handleSheetChange}
                        columnLabels={columnLabels}
                        rowLabels={rowLabels}
                        className="w-full foodwaste-sheet"
                        style={{ width: '100%' }}
                    />
                </div>
            ) : null}
            {showPreview && previewData && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowPreview(false)}>
                    <div className="bg-white rounded-md w-[960px]" onClick={(e) => e.stopPropagation()}>
                        <FoodWastePreview
                            weekLabel={previewData.weekLabel}
                            plateWasteLastWeek={previewData.plateWasteLastWeek}
                            plateWasteWeeklyAvg={previewData.plateWasteWeeklyAvg}
                            totalWasteLastWeek={previewData.totalWasteLastWeek}
                            totalWasteWeeklyAvg={previewData.totalWasteWeeklyAvg}
                            plateSeries={previewData.plateSeries}
                            totalSeries={previewData.totalSeries}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default FoodWaste;
