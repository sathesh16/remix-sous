import React, { lazy, Suspense, useMemo } from "react";
import CopyLinkButton from "./CopyLinkButton";
import ClientApexChart from "./ApexChart";
import { ArrowBigDown, } from "lucide-react";
import clsx from "clsx";
import useClipboard from "../hooks/useClipboard";
import buildAbsoluteUrl from "../utils/url";
import WeeklyAreaChart from "./WeeklyAreaChart";



// import TestChart from "./ApexChart";
// const TestChart = lazy(() => import("./ApexChart"));

export default function FoodWastePreview({
    currentWeek,
    orientation,
    plateWasteCurrentWeek,
    plateWasteWeeklyAvg,
    totalWasteCurrentWeek,
    totalWasteWeeklyAvg,
    plateSeries = [],
    totalSeries = [],
    isIncreasePlate,
    isIncreaseTotal,
    selectedLocation

}) {

    // const isIncreasePlate = isIncreasePlate; // condition
    const textColorPlate = isIncreasePlate ? "text-[#8B4513]" : "text-[#24361F]"; // brown if higher, dark green otherwise
    const arrowIconPlate = isIncreasePlate ? "/images/arrow-up.svg" : "/images/arrow-down.svg"; // path to public folder svg

    // const isIncraeseTotalAvg = totalWasteLastWeek >= totalWasteWeeklyAvg;
    const textColorAvg = isIncreaseTotal ? "text-[#8B4513]" : "text-[#24361F]"; // brown if higher, dark green otherwise
    const arrowIconAvg = isIncreaseTotal ? "/images/arrow-up.svg" : "/images/arrow-down.svg"; // path to public folder svg

    //for copy btn
    const clipboard = useClipboard({ resetDelay: 2000 });

    // build link dynamically (you can modify this route pattern as needed)
    const linkToCopy = useMemo(() => {
        if (!selectedLocation) return "";
        const { origin } = window.location;
        return buildAbsoluteUrl(`/banner/foodwaste/${selectedLocation}`, origin);
    }, [selectedLocation]);

    const label = clipboard.status === "success"
        ? "Copied!"
        : clipboard.status === "error"
            ? "Failed to copy"
            : "Copy Link";

    const handleCopy = () => clipboard.copy(linkToCopy);

    return (
        <div className={clsx("bg-[#E6EFE6] py-8 px-12 rounded-md h-full overflow-y-auto", orientation === "landscape" ? "food-waste-hr-bg" : "food-waste-vr-bg")}>
            <h1 className={clsx("mb-10 font-semibold text-3xl", orientation === "landscape" ? "text-[#24361F]" : "text-black")}>Food Waste</h1>
            {plateWasteCurrentWeek === 0 ? (
                <div></div>
            ) : (<div className="grid gap-12">
                <section className={clsx("flex", orientation === "landscape" ? "gap-12 items-center" : "flex-col items-start gap-4")}>
                    <div className={clsx(orientation === "landscape" ? "basis-[200px] text-[#24361F]" : "basis-auto text-black")}>
                        <h3 className="text-xl font-semibold mb-1">
                            Plate Waste
                        </h3>
                        <p className="text-sm font-semibold opacity-80 mb-4">
                            pr. Guest / Day
                        </p>
                        <p className="text-sm opacity-80 mb-4">
                            Good food thrown in the trash
                        </p>
                    </div>

                    <div className="flex items-center gap-12">
                        <div className="text-center">
                            <div className={clsx("mb-4 text-xs font-semibold", orientation === "landscape" ? "text-[#24361F]" : "text-black")}>
                                Last Week
                            </div>
                            <div className={`w-28 h-28 rounded-full border border-white/60 flex flex-col items-center justify-center text-3xl font-semibold ${textColorPlate}`}>
                                <div className="flex gap-2">
                                    {Math.round(plateWasteCurrentWeek)}
                                    <img src={arrowIconPlate} width="20px" height="20px" />
                                </div>

                                <div className="mt-2 text-xs opacity-80">grams</div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className={clsx("mb-4 text-xs font-semibold", orientation === "landscape" ? "text-[#24361F]" : "text-black")}>
                                Weekly Average*
                            </div>
                            <div className="w-28 h-28 rounded-full border border-white/60 flex flex-col items-center justify-center text-3xl font-semibold text-white">

                                {Math.round(plateWasteWeeklyAvg)}

                                <div className="mt-2 text-xs text-white opacity-80">grams</div>
                            </div>
                        </div>

                        <div className={clsx("flex flex-col gap-2", orientation === "landscape" ? "text-[#24361F]" : "text-black")}>
                            {/* 👇 Replaced chart */}
                            <WeeklyAreaChart series={plateSeries} color="#CBD5E1" />
                            Weekly Average *
                            <br />
                            (Based on last three months *)
                        </div>


                    </div>
                </section>

                {totalWasteCurrentWeek === 0 ? (<div></div>) : (<section className={clsx("flex", orientation === "landscape" ? "gap-12 items-center" : "flex-col items-start gap-4")}>
                    <div className={clsx(orientation === "landscape" ? "basis-[200px] text-[#24361F]" : "basis-auto text-black")}>
                        <h3 className="text-xl font-semibold mb-1">
                            Total Waste
                        </h3>
                        <p className="text-sm  font-semibold opacity-80 mb-4">
                            pr. Guest / Day
                        </p>
                        <p className="text-sm opacity-80 mb-4">
                            Plate Waste + Production Waste + Buffet waste
                        </p>
                    </div>

                    <div className="flex items-center gap-12">
                        <div className="text-center">
                            <div className={clsx("mb-4 text-xs font-semibold", orientation === "landscape" ? "text-[#24361F]" : "text-black")}>
                                Last Week
                            </div>
                            <div className={`w-28 h-28 rounded-full border border-white/60 flex flex-col items-center justify-center text-3xl font-semibold ${textColorAvg}`}>
                                <div className="flex gap-2">
                                    {Math.round(totalWasteCurrentWeek)}
                                    <img src={arrowIconAvg} width="20px" height="20px" />
                                </div>
                                <div className="mt-2 text-xs opacity-80">grams</div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className={clsx("mb-4 text-xs font-semibold", orientation === "landscape" ? "text-[#24361F]" : "text-black")}>
                                Weekly Average*
                            </div>
                            <div className="w-28 h-28 rounded-full border border-white/60 flex flex-col items-center justify-center text-3xl font-semibold text-white">
                                {Math.round(totalWasteWeeklyAvg)}
                                <div className="mt-2 text-xs text-white opacity-80">grams</div>
                            </div>
                        </div>

                        <div className={clsx("flex flex-col gap-2 ", orientation === "landscape" ? "text-[#24361F]" : "text-black")}>
                            {/* 👇 Replaced graph */}
                            <WeeklyAreaChart series={totalSeries} color="#CBD5E1" />
                            Weekly Average *
                            <br />
                            (Based on last three months *)
                        </div>


                    </div>
                </section>)}


            </div>)}

            <div className="flex justify-start mt-4">
                <button
                    onClick={handleCopy}
                    disabled={clipboard.status === "success"}
                    className={clsx(
                        "px-4 py-2 text-sm rounded-md transition-colors duration-200",
                        "border border-[#24361F]",
                        orientation === "landscape"
                            ? "text-[#24361F] hover:bg-[#24361F] hover:text-white"
                            : "text-black hover:bg-black hover:text-white"
                    )}
                >
                    {label}
                </button>
            </div>
        </div>
    );
}


