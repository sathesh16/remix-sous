import dayjs from "dayjs";
import { fetchFoodWaste, patchFoodWaste, createFoodWaste } from "../lib/foodWaste";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { useCallback, useEffect, useMemo, useState } from "react";

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

export default function useFoodWasteTable() {
    const [records, setRecords] = useState([]);
    const [updates, setUpdates] = useState({});
    const [week, setWeek] = useState(dayjs().week());
    const [loading, setLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [toast, setToast] = useState(null);

    // Load data
    useEffect(() => {
        async function load() {
            setLoading(true);
            try {
                const data = await fetchFoodWaste();
                setRecords(data);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    // Filter records by selected week
    const filteredRecords = useMemo(() => {
        return records.filter((r) => dayjs(r.date).week() === Number(week));
    }, [records, week]);

    // Toast
    const showToast = useCallback((message, type = "success") => {
        setToast({ message, type });
    }, []);

    const dismissToast = useCallback(() => setToast(null), []);

    // Update fields live
    const handleUpdate = useCallback((id, updatedFields) => {
        setRecords((prev) =>
            prev.map((rec) => (rec.id === id ? { ...rec, ...updatedFields } : rec))
        );

        setUpdates((prev) => ({
            ...prev,
            [id]: { ...(prev[id] || {}), ...updatedFields },
        }));
    }, []);

    // Read a pending update value for controlled inputs
    const getPendingValue = useCallback(
        (id, field, fallback) => {
            const pending = updates[id];
            if (pending && Object.prototype.hasOwnProperty.call(pending, field)) {
                return pending[field];
            }
            return fallback;
        },
        [updates]
    );

    // Save changes
    const saveUpdates = useCallback(async () => {
        if (!Object.keys(updates).length) return;

        const toUpdate = [];
        const toCreate = [];

        Object.entries(updates).forEach(([key, data]) => {
            if (Number(key)) {
                // Existing record → update
                toUpdate.push({ id: Number(key), ...data });
            } else {
                // New record (no id) → create
                toCreate.push(data); // MUST contain date before saving
            }
        });

        setIsSaving(true);
        try {
            if (toUpdate.length > 0) await patchFoodWaste(toUpdate);
            if (toCreate.length > 0) await createFoodWaste(toCreate);

            showToast("✅ Saved successfully!");
            setUpdates({});
        } catch (err) {
            console.error(err);
            showToast("❌ Failed to save.", "error");
        } finally {
            setIsSaving(false);
        }
    }, [updates, showToast]);


    return {
        week,
        setWeek,
        allRecords: records,
        filteredRecords,
        handleUpdate,
        getPendingValue,
        saveUpdates,
        loading,
        isSaving,
        hasPendingUpdates: Object.keys(updates).length > 0,
        toast,
        dismissToast,
    };
}
