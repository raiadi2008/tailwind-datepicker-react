var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useContext } from "react";
import { addDays } from "../../Utils/date";
import { DatePickerContext } from "../DatePickerProvider";
import { twMerge } from "tailwind-merge";
var Days = function (_a) {
    var start = _a.start;
    var _b = useContext(DatePickerContext), selectedDate = _b.selectedDate, changeSelectedDate = _b.changeSelectedDate, showSelectedDate = _b.showSelectedDate, getFormattedDate = _b.getFormattedDate, options = _b.options;
    var startOfWeek = (new Date(start).getDay() + 6) % 7;
    var weekDays = options.weekDays || [];
    var sortedWeekDays = weekDays.slice(startOfWeek).concat(weekDays.slice(0, startOfWeek));
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "grid grid-cols-7 mb-1" }, sortedWeekDays.map(function (day, index) { return (React.createElement("span", { key: index, className: "h-6 text-sm font-medium leading-6 text-center text-gray-500 dow dark:text-gray-400" }, day)); })),
        React.createElement("div", { className: "grid w-64 grid-cols-7" }, __spreadArray([], Array(42), true).map(function (_date, index) {
            var _a, _b, _c, _d, _e;
            var current = addDays(start, index);
            var day = getFormattedDate(current, { day: "numeric" });
            var month = getFormattedDate(current, { month: "long" });
            var year = getFormattedDate(current, { year: "numeric" });
            return (React.createElement("span", { key: index, className: "hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  dark:text-white font-semibold text-sm ".concat(showSelectedDate && selectedDate.getTime() > 0 && getFormattedDate(selectedDate) === getFormattedDate(current)
                    ? twMerge("bg-blue-700 text-white hover:bg-blue-600", (_a = options === null || options === void 0 ? void 0 : options.theme) === null || _a === void 0 ? void 0 : _a.selected)
                    : "", " ").concat(month == getFormattedDate(selectedDate, { month: "long" }) && year == getFormattedDate(selectedDate, { year: "numeric" })
                    ? twMerge("text-gray-900", (_b = options === null || options === void 0 ? void 0 : options.theme) === null || _b === void 0 ? void 0 : _b.text)
                    : twMerge("text-gray-500", (_c = options === null || options === void 0 ? void 0 : options.theme) === null || _c === void 0 ? void 0 : _c.disabledText), " ").concat(((options === null || options === void 0 ? void 0 : options.minDate) && new Date(current) < (options === null || options === void 0 ? void 0 : options.minDate)) || ((options === null || options === void 0 ? void 0 : options.disabledDates) && options.disabledDates.indexOf(new Date(current)) >= 0) ? twMerge("text-gray-500", (_d = options === null || options === void 0 ? void 0 : options.theme) === null || _d === void 0 ? void 0 : _d.disabledText) : "", " ").concat(((options === null || options === void 0 ? void 0 : options.maxDate) && new Date(current) > (options === null || options === void 0 ? void 0 : options.maxDate)) || ((options === null || options === void 0 ? void 0 : options.disabledDates) && options.disabledDates.indexOf(new Date(current)) >= 0) ? twMerge("text-gray-500", (_e = options === null || options === void 0 ? void 0 : options.theme) === null || _e === void 0 ? void 0 : _e.disabledText) : "", "\n                            "), onClick: function () {
                    changeSelectedDate("date", new Date(current));
                } }, day));
        }))));
};
export default Days;
//# sourceMappingURL=Days.js.map