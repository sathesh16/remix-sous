function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function getWeekDateRange(weekNumber, year = new Date().getFullYear()) {
    const firstDayOfYear = new Date(year, 0, 1);
    const daysOffset = (weekNumber - 1) * 7;
    const startDate = new Date(firstDayOfYear.getTime() + daysOffset * 86400000);

    // Adjust to Monday
    const day = startDate.getDay();
    const diff = (day === 0 ? -6 : 1) - day;
    startDate.setDate(startDate.getDate() + diff);

    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 4); // Friday

    const startDay = getOrdinal(startDate.getDate());
    const endDay = getOrdinal(endDate.getDate());

    const startMonth = startDate.toLocaleString("en-GB", { month: "short" });
    const endMonth = endDate.toLocaleString("en-GB", { month: "short" });

    return {
        start: `${startDay} ${startMonth}`,
        end: `${endDay} ${endMonth}`,
    };
}
