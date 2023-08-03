export var firstDateOfMonth = function (selectedYear, selectedMonth, date) {
    var newDate = new Date(0);
    newDate.setFullYear(selectedYear, selectedMonth, date);
    return newDate.setHours(0, 0, 0, 0);
};
export var addDays = function (date, amount) {
    var newDate = new Date(date);
    return newDate.setDate(newDate.getDate() + amount);
};
export var dayDiff = function (day, from) {
    return (day - from + 7) % 7;
};
export var dayOfTheWeekOf = function (baseDate, dayOfWeek, weekStart) {
    if (weekStart === void 0) { weekStart = 0; }
    var baseDay = new Date(baseDate).getDay();
    return addDays(baseDate, dayDiff(dayOfWeek, weekStart) - dayDiff(baseDay, weekStart));
};
export var addMonths = function (date, amount) {
    var newDate = date;
    var monthsToSet = newDate.getMonth() + amount;
    var expectedMonth = monthsToSet % 12;
    if (expectedMonth < 0) {
        expectedMonth += 12;
    }
    var time = newDate.setMonth(monthsToSet);
    return newDate.getMonth() !== expectedMonth ? newDate.setDate(0) : time;
};
export var addYears = function (date, amount) {
    var newDate = date;
    var expectedMonth = newDate.getMonth();
    var time = newDate.setFullYear(newDate.getFullYear() + amount);
    return expectedMonth === 1 && newDate.getMonth() === 2 ? newDate.setDate(0) : time;
};
export var getFormattedDate = function (language, date, options) {
    var defaultOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    if (options)
        defaultOptions = options;
    return new Intl.DateTimeFormat(language, defaultOptions).format(date);
};
export var goToPrevNext = function (view, date, direction) {
    switch (view) {
        case "days":
            return addMonths(date, direction);
        case "months":
            return addYears(date, direction);
        case "years":
            return addYears(date, direction * 10);
        case "decades":
            return addYears(date, direction * 100);
        default:
            return addYears(date, direction * 10);
    }
};
export var startOfYearPeriod = function (date, years) {
    var year = date.getFullYear();
    return Math.floor(year / years) * years;
};
//# sourceMappingURL=date.js.map