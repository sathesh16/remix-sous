import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function WeeklyAreaChart({ series, color = "#CBD5E1" }) {
    // Convert array → recharts format
    const chartData = series.map((value, index) => ({
        name: `W${index + 1}`,
        value
    }));

    return (
        <div style={{ width: 300, height: 300 }}>
            <ResponsiveContainer>
                <AreaChart data={chartData}>

                    {/* X-axis: line only (no tick, no label) */}
                    <XAxis
                        dataKey="name"
                        axisLine={true}
                        tickLine={false}
                        tick={false}
                        stroke="#ccc"
                    />

                    {/* Y-axis: line only (no tick, no label) */}
                    <YAxis
                        axisLine={true}
                        tickLine={false}
                        tick={false}
                        stroke="#ccc"
                    />

                    {chartData.length > 0 && (
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke={color}
                            fill={color}
                            fillOpacity={0.4}
                        />
                    )}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}