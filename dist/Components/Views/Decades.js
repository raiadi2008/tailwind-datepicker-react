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
import { addYears, startOfYearPeriod } from "../../Utils/date";
import { DatePickerContext } from "../DatePickerProvider";
import { twMerge } from "tailwind-merge";
var Decades = function () {
    var _a = useContext(DatePickerContext), selectedDate = _a.selectedDate, showSelectedDate = _a.showSelectedDate, changeSelectedDate = _a.changeSelectedDate, setView = _a.setView, getFormattedDate = _a.getFormattedDate, options = _a.options;
    return (React.createElement("div", { className: "grid w-64 grid-cols-4" }, __spreadArray([], Array(12), true).map(function (_year, index) {
        var _a, _b, _c, _d, _e;
        var first = startOfYearPeriod(selectedDate, 100);
        var year = first - 10 + index * 10;
        return (React.createElement("span", { key: index, className: "hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  dark:text-white font-semibold text-sm ".concat(showSelectedDate && selectedDate.getTime() > 0 && Number(getFormattedDate(selectedDate, { year: "numeric" })) === year
                ? twMerge("bg-blue-700 text-white hover:bg-blue-600", (_a = options === null || options === void 0 ? void 0 : options.theme) === null || _a === void 0 ? void 0 : _a.selected)
                : "", " ").concat(index == 0 || index == 11 ? twMerge("text-gray-500", (_b = options === null || options === void 0 ? void 0 : options.theme) === null || _b === void 0 ? void 0 : _b.disabledText) : twMerge("text-gray-900", (_c = options === null || options === void 0 ? void 0 : options.theme) === null || _c === void 0 ? void 0 : _c.text), "\n                            ").concat((options === null || options === void 0 ? void 0 : options.minDate) && year < Number(getFormattedDate(options === null || options === void 0 ? void 0 : options.minDate, { year: "numeric" })) ? twMerge("text-gray-500", (_d = options === null || options === void 0 ? void 0 : options.theme) === null || _d === void 0 ? void 0 : _d.disabledText) : "", "\n                            ").concat((options === null || options === void 0 ? void 0 : options.maxDate) && year > Number(getFormattedDate(options === null || options === void 0 ? void 0 : options.maxDate, { year: "numeric" })) ? twMerge("text-gray-500", (_e = options === null || options === void 0 ? void 0 : options.theme) === null || _e === void 0 ? void 0 : _e.disabledText) : "", "\n                            "), onClick: function () {
                changeSelectedDate("date", new Date(addYears(selectedDate, year - selectedDate.getFullYear())));
                setView("years");
            } }, year));
    })));
};
export default Decades;
//# sourceMappingURL=Decades.js.map