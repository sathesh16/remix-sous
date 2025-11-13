import React, { useEffect, useState, useMemo } from "react";

export default function ClientApexChart({ data = [], color = "#CBD5E1", width = 180, height = 44 }) {
    const [chartModule, setChartModule] = useState(null);

    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                // Dynamically import only on client
                await import("apexcharts");
                const mod = await import("react-apexcharts");
                if (mounted) setChartModule(mod);
            } catch (err) {
                console.error("Failed loading apexcharts modules", err);
                if (mounted) setChartModule({ __error: err });
            }
        })();
        return () => {
            mounted = false;
        };
    }, []);

    const ResolvedComponent = useMemo(() => {
        if (!chartModule || chartModule.__error) return null;
        const extract = (m) => {
            if (!m) return m;
            if (typeof m === "function") return m;
            if (m.default && typeof m.default === "function") return m.default;
            if (m.ReactApexChart && typeof m.ReactApexChart === "function") return m.ReactApexChart;
            if (m.ApexChart && typeof m.ApexChart === "function") return m.ApexChart;
            if (m.default && typeof m.default === "object") return extract(m.default);
            if (typeof m === "object") {
                for (const key of ["reactApexCharts", "ReactApexCharts", "ReactApexChart", "ApexChart", "default"]) {
                    if (m[key]) {
                        const candidate = extract(m[key]);
                        if (candidate) return candidate;
                    }
                }
            }
            return null;
        };
        return extract(chartModule);
    }, [chartModule]);

    if (!ResolvedComponent) {
        return <div style={{ width, height }}>Loading chart…</div>;
    }

    const options = {
        chart: {
            type: "line",
            sparkline: { enabled: true },
            toolbar: { show: false },
            animations: { enabled: false },
        },
        stroke: { curve: "smooth", width: 2 },
        colors: [color],
        tooltip: { enabled: false },
        grid: { show: false },
        xaxis: { labels: { show: false }, axisBorder: { show: false }, axisTicks: { show: false } },
        yaxis: { show: false },
    };

    const series = [{ data }];

    return (
        <div style={{ width, height }}>
            {React.createElement(ResolvedComponent, {
                options,
                series,
                type: "line",
                height,
                width,
            })}
        </div>
    );
}
