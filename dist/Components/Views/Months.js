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
import { addMonths } from "../../Utils/date";
import { DatePickerContext } from "../DatePickerProvider";
import { twMerge } from "tailwind-merge";
var Months = function () {
    var _a = useContext(DatePickerContext), selectedDate = _a.selectedDate, showSelectedDate = _a.showSelectedDate, changeSelectedDate = _a.changeSelectedDate, getFormattedDate = _a.getFormattedDate, setView = _a.setView, options = _a.options;
    return (React.createElement("div", { className: "grid w-64 grid-cols-4" }, __spreadArray([], Array(12), true).map(function (_month, index) {
        var _a, _b;
        var month = getFormattedDate(new Date(selectedDate.getFullYear(), index), { month: "short" });
        return (React.createElement("span", { key: index, className: "hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  dark:text-white font-semibold text-sm text-gray-900 ".concat(showSelectedDate && selectedDate.getTime() > 0 && getFormattedDate(selectedDate, { month: "short" }) === month
                ? twMerge("bg-blue-700 text-white hover:bg-blue-600", (_a = options === null || options === void 0 ? void 0 : options.theme) === null || _a === void 0 ? void 0 : _a.selected)
                : "", " ").concat(twMerge((_b = options === null || options === void 0 ? void 0 : options.theme) === null || _b === void 0 ? void 0 : _b.text)), onClick: function () {
                changeSelectedDate("date", new Date(addMonths(selectedDate, index - selectedDate.getMonth())));
                setView("days");
            } }, month));
    })));
};
export default Months;
//# sourceMappingURL=Months.js.map