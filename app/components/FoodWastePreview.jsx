import React, { useMemo } from "react";
import CopyLinkButton from "./CopyLinkButton";

function Sparkline({ data = [], color = "#CBD5E1" }) {
    const path = useMemo(() => {
        if (!data.length) return "";
        const max = Math.max(...data, 1);
        const min = Math.min(...data, 0);
        const range = Math.max(max - min, 1);
        const width = 160;
        const height = 40;
        const step = width / (data.length - 1 || 1);
        return data
            .map((v, i) => {
                const x = i * step;
                const y = height - ((v - min) / range) * height;
                return `${i === 0 ? "M" : "L"}${x},${y}`;
            })
            .join(" ");
    }, [data]);
    return (
        <svg width="180" height="44" aria-hidden="true">
            <path d={path} fill="none" stroke={color} strokeWidth="2" />
        </svg>
    );
}

export default function FoodWastePreview({
    weekLabel,
    plateWasteLastWeek,
    plateWasteWeeklyAvg,
    totalWasteLastWeek,
    totalWasteWeeklyAvg,
    plateSeries = [],
    totalSeries = [],
    shareUrl,
}) {
    return (
        <div className="bg-[#E6EFE6] p-6 rounded-md food-waste-hr-bg">
            <div className="grid gap-8">
                <section className="flex gap-4 items-center">
                    <div>
                        <h3 className="text-xl font-semibold text-[#24361F] mb-1">Plate Waste</h3>
                        <p className="text-sm text-[#24361F] opacity-80 mb-4">pr. Guest / Day</p>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="text-center">
                            <div className="w-28 h-28 rounded-full border border-white/60 flex items-center justify-center text-3xl font-semibold text-[#24361F]">
                                {Math.round(plateWasteLastWeek)}
                            </div>
                            <div className="mt-2 text-xs text-[#24361F] opacity-80">grams</div>
                            <div className="mt-1 text-xs text-[#24361F] opacity-70 text-center">Last Week</div>
                        </div>
                        <div className="text-center">
                            <div className="w-28 h-28 rounded-full border border-white/60 flex items-center justify-center text-3xl font-semibold text-[#24361F]">
                                {Math.round(plateWasteWeeklyAvg)}
                            </div>
                            <div className="mt-2 text-xs text-[#24361F] opacity-80">grams</div>
                            <div className="mt-1 text-xs text-[#24361F] opacity-70">Weekly Average*</div>
                        </div>
                        <Sparkline data={plateSeries} />
                    </div>
                </section>
                <section className="flex gap-4 items-center">
                    <div>
                        <h3 className="text-xl font-semibold text-[#24361F] mb-1">Total Waste</h3>
                        <p className="text-sm text-[#24361F] opacity-80 mb-4">pr. Guest / Day</p>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="text-center">
                            <div className="w-28 h-28 rounded-full border border-white/60 flex items-center justify-center text-3xl font-semibold text-[#24361F]">
                                {Math.round(totalWasteLastWeek)}
                            </div>
                            <div className="mt-2 text-xs text-[#24361F] opacity-80">grams</div>
                            <div className="mt-1 text-xs text-[#24361F] opacity-70">Last Week</div>
                        </div>
                        <div className="text-center">
                            <div className="w-28 h-28 rounded-full border border-white/60 flex items-center justify-center text-3xl font-semibold text-[#24361F]">
                                {Math.round(totalWasteWeeklyAvg)}
                            </div>
                            <div className="mt-2 text-xs text-[#24361F] opacity-80">grams</div>
                            <div className="mt-1 text-xs text-[#24361F] opacity-70">Weekly Average*</div>
                        </div>
                        <Sparkline data={totalSeries} />
                    </div>
                    {/* <div className="mt-2 text-[10px] text-[#24361F] opacity-70">*based on last three months</div> */}
                </section>
            </div>
        </div>
    );
}


