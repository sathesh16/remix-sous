import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function AreaChartExample() {
    // Example chart data
    const data = [
        { name: "Mon", value: 30 },
        { name: "Tue", value: 45 },
        { name: "Wed", value: 35 },
        { name: "Thu", value: 50 },
        { name: "Fri", value: 55 },
        { name: "Sat", value: 40 },
        { name: "Sun", value: 60 },
    ];

    return (
        <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="name" stroke="#aaa" />
                    <YAxis stroke="#aaa" />
                    <Tooltip />

                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.5}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}