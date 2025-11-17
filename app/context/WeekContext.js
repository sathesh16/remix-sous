import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
dayjs.extend(isoWeek);

import { createContext, useContext, useState } from "react";

const WeekContext = createContext(null);

export function WeekProvider({ children, initialWeek }) {
    const [week, setWeek] = useState(initialWeek ?? dayjs().week());
    return (
        <WeekContext.Provider value={{ week, setWeek }}>
            {children}
        </WeekContext.Provider>
    );
}

export function useWeek() {
    const ctx = useContext(WeekContext);
    if (!ctx) throw new Error("useWeek() must be used within a <WeekProvider>");
    return ctx;
}
