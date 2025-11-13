import { useLoaderData } from '@remix-run/react'
import React from 'react'
import { fetchFoodWaste } from '../lib/foodWaste';
import clsx from 'clsx';
import { json } from '@remix-run/node';
import dayjs from 'dayjs';
import ClientApexChart from '../components/ApexChart';

export async function loader({ params }) {
    const { weekno, orientation = "landscape" } = params;


    const allRecords = await fetchFoodWaste();

    // helper
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
        const avg = (arr) =>
            arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
        return { plateAvg: avg(plate), totalAvg: avg(total) };
    }

    const lastWeek = weeklyPerGuestAverages(Number(weekno));

    const plateSeries = [];
    const totalSeries = [];
    for (let i = 12; i >= 1; i--) {
        const wn = dayjs().week(Number(weekno) - i).week();
        const { plateAvg, totalAvg } = weeklyPerGuestAverages(wn);
        plateSeries.push(Math.round(plateAvg));
        totalSeries.push(Math.round(totalAvg));
    }
    const avg = (arr) =>
        arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

    const data = {
        weekLabel: `Week ${weekno}`,
        plateWasteLastWeek: lastWeek.plateAvg,
        totalWasteLastWeek: lastWeek.totalAvg,
        plateWasteWeeklyAvg: avg(plateSeries),
        totalWasteWeeklyAvg: avg(totalSeries),
        plateSeries,
        totalSeries,
        orientation,
    };

    return json(data);
}


export default function FoodWasteBanner() {
    const {
        weekLabel,
        plateWasteLastWeek,
        totalWasteLastWeek,
        plateWasteWeeklyAvg,
        totalWasteWeeklyAvg,
        plateSeries,
        totalSeries,
        orientation,
    } = useLoaderData();

    // conditions & styles
    const isIncreasePlate = plateWasteLastWeek >= plateWasteWeeklyAvg;
    const textColorPlate = isIncreasePlate ? "text-[#8B4513]" : "text-[#24361F]";
    const arrowIconPlate = isIncreasePlate
        ? "/images/arrow-up.svg"
        : "/images/arrow-down.svg";

    const isIncreaseTotal = totalWasteLastWeek >= totalWasteWeeklyAvg;
    const textColorTotal = isIncreaseTotal ? "text-[#8B4513]" : "text-[#24361F]";
    const arrowIconTotal = isIncreaseTotal
        ? "/images/arrow-up.svg"
        : "/images/arrow-down.svg";
    console.log(orientation + "Our orientation")

    return (
        <div
            className={clsx(
                "flex items-center justify-center mx-auto regular-text",
            )}
        >
            <div
                className={clsx(
                    "bg-[#E6EFE6] py-8 px-12 rounded-md mx-auto flex items-center",
                    orientation === "landscape"
                        ? "food-waste-hr-bg w-[1920px] h-[1080px]"
                        : "food-waste-vr-bg w-[1080px] h-[1920px]"
                )}
            >
                <div>
                    <h1
                        className={clsx(
                            "mb-10 font-semibold  bold-text",
                            orientation === "landscape" ? "text-[#24361F] text-6xl" : "text-black text-5xl"
                        )}
                    >
                        Food Waste
                    </h1>

                    <div className="grid gap-24">
                        {/* --- Plate Waste --- */}
                        <section
                            className={clsx(
                                "flex",
                                orientation === "landscape"
                                    ? "gap-24 items-center"
                                    : "flex-col items-start gap-12"
                            )}
                        >
                            <div
                                className={clsx(
                                    orientation === "landscape"
                                        ? "basis-[200px] text-[#24361F]"
                                        : "basis-auto text-black"
                                )}
                            >
                                <h3 className="text-xl font-semibold mb-1">Plate Waste</h3>
                                <p className="text-xl font-semibold opacity-80 mb-4">
                                    pr. Guest / Day
                                </p>
                                <p className="text-xl opacity-80 mb-4">
                                    Good food thrown in the trash
                                </p>
                            </div>

                            <div className="flex items-center gap-24">
                                <div className="text-center">
                                    <div
                                        className={clsx(
                                            "mb-2 text-lg font-semibold",
                                            orientation === "landscape" ? "text-[#24361F]" : "text-black"
                                        )}
                                    >
                                        Last Week
                                    </div>
                                    <div
                                        className={`w-28 h-28 rounded-full border border-white/60 flex flex-col items-center justify-center text-3xl font-semibold ${textColorPlate}`}
                                    >
                                        <div className="flex gap-2">
                                            {Math.round(plateWasteLastWeek)}
                                            <img src={arrowIconPlate} width="20" height="20" />
                                        </div>
                                        <div className="mt-2 text-lg opacity-80">grams</div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div
                                        className={clsx(
                                            "mb-2 text-lg font-semibold",
                                            orientation === "landscape" ? "text-[#24361F]" : "text-black"
                                        )}
                                    >
                                        Weekly Average*
                                    </div>
                                    <div className="w-28 h-28 rounded-full border border-white/60 flex flex-col items-center justify-center text-3xl font-semibold text-white">
                                        {Math.round(plateWasteWeeklyAvg)}
                                        <div className="mt-2 text-lg text-white opacity-80">grams</div>
                                    </div>
                                </div>

                                <div
                                    className={clsx(
                                        "flex flex-col gap-2",
                                        orientation === "landscape" ? "text-[#24361F]" : "text-black"
                                    )}
                                >
                                    <ClientApexChart data={plateSeries} color="#CBD5E1" />
                                    Weekly Average *
                                    <br />
                                    (Based on last three months *)
                                </div>
                            </div>
                        </section>

                        {/* --- Total Waste --- */}
                        <section
                            className={clsx(
                                "flex",
                                orientation === "landscape"
                                    ? "gap-24 items-center"
                                    : "flex-col items-start gap-12"
                            )}
                        >
                            <div
                                className={clsx(
                                    orientation === "landscape"
                                        ? "basis-[200px] text-[#24361F]"
                                        : "basis-auto text-black"
                                )}
                            >
                                <h3 className="text-xl font-semibold mb-1">Total Waste</h3>
                                <p className="text-xl font-semibold opacity-80 mb-4">
                                    pr. Guest / Day
                                </p>
                                <p className="text-xl opacity-80 mb-4">
                                    Plate Waste + Production Waste + Buffet Waste
                                </p>
                            </div>

                            <div className="flex items-center gap-24">
                                <div className="text-center">
                                    <div
                                        className={clsx(
                                            "mb-2 text-lg font-semibold",
                                            orientation === "landscape" ? "text-[#24361F]" : "text-black"
                                        )}
                                    >
                                        Last Week
                                    </div>
                                    <div
                                        className={`w-28 h-28 rounded-full border border-white/60 flex flex-col items-center justify-center text-3xl font-semibold ${textColorTotal}`}
                                    >
                                        <div className="flex gap-2">
                                            {Math.round(totalWasteLastWeek)}
                                            <img src={arrowIconTotal} width="20" height="20" />
                                        </div>
                                        <div className="mt-2 text-lg opacity-80">grams</div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div
                                        className={clsx(
                                            "mb-2 text-lg font-semibold",
                                            orientation === "landscape" ? "text-[#24361F]" : "text-black"
                                        )}
                                    >
                                        Weekly Average*
                                    </div>
                                    <div className="w-28 h-28 rounded-full border border-white/60 flex flex-col items-center justify-center text-3xl font-semibold text-white">
                                        {Math.round(totalWasteWeeklyAvg)}
                                        <div className="mt-2 text-lg text-white opacity-80">grams</div>
                                    </div>
                                </div>

                                <div
                                    className={clsx(
                                        "flex flex-col gap-2",
                                        orientation === "landscape" ? "text-[#24361F]" : "text-black"
                                    )}
                                >
                                    <ClientApexChart data={totalSeries} color="#CBD5E1" />
                                    Weekly Average *
                                    <br />
                                    (Based on last three months *)
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </div>
        </div>

    );
}