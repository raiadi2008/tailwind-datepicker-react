import React, { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { goToPrevNext, startOfYearPeriod } from "../Utils/date";
import { DatePickerContext } from "./DatePickerProvider";
export var ButtonPrevMonth = function () {
    var _a, _b, _c;
    var _d = useContext(DatePickerContext), selectedDate = _d.selectedDate, changeSelectedDate = _d.changeSelectedDate, view = _d.view, options = _d.options;
    return (React.createElement("button", { type: "button", className: twMerge("bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200", (_a = options === null || options === void 0 ? void 0 : options.theme) === null || _a === void 0 ? void 0 : _a.icons), onClick: function () { return changeSelectedDate("prev", new Date(goToPrevNext(view, selectedDate, -1))); } }, ((_b = options === null || options === void 0 ? void 0 : options.icons) === null || _b === void 0 ? void 0 : _b.prev) ? ((_c = options === null || options === void 0 ? void 0 : options.icons) === null || _c === void 0 ? void 0 : _c.prev()) : (React.createElement("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z", clipRule: "evenodd" })))));
};
export var ButtonSelectMonth = function () {
    var _a;
    var _b = useContext(DatePickerContext), selectedDate = _b.selectedDate, view = _b.view, setView = _b.setView, options = _b.options, getFormattedDate = _b.getFormattedDate;
    var calculateView = function () {
        if (view === "days")
            return "months";
        if (view === "months")
            return "years";
        if (view === "years")
            return "decades";
        return view;
    };
    return (React.createElement("button", { type: "button", className: twMerge("text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200", (_a = options === null || options === void 0 ? void 0 : options.theme) === null || _a === void 0 ? void 0 : _a.icons), onClick: function () { return setView(calculateView()); } },
        view === "days" && getFormattedDate(selectedDate, { month: "long", year: "numeric" }),
        view === "months" && getFormattedDate(selectedDate, { year: "numeric" }),
        view === "years" && "".concat(startOfYearPeriod(selectedDate, 10), "-").concat(startOfYearPeriod(selectedDate, 10) + 9),
        view === "decades" && "".concat(startOfYearPeriod(selectedDate, 100), "-").concat(startOfYearPeriod(selectedDate, 100) + 90)));
};
export var ButtonNextMonth = function () {
    var _a, _b, _c;
    var _d = useContext(DatePickerContext), selectedDate = _d.selectedDate, changeSelectedDate = _d.changeSelectedDate, view = _d.view, options = _d.options;
    return (React.createElement("button", { type: "button", className: twMerge("bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200", (_a = options === null || options === void 0 ? void 0 : options.theme) === null || _a === void 0 ? void 0 : _a.icons), onClick: function () { return changeSelectedDate("next", new Date(goToPrevNext(view, selectedDate, 1))); } }, ((_b = options === null || options === void 0 ? void 0 : options.icons) === null || _b === void 0 ? void 0 : _b.next) ? ((_c = options === null || options === void 0 ? void 0 : options.icons) === null || _c === void 0 ? void 0 : _c.next()) : (React.createElement("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z", clipRule: "evenodd" })))));
};
export var ButtonToday = function () {
    var _a;
    var _b = useContext(DatePickerContext), changeSelectedDate = _b.changeSelectedDate, setView = _b.setView, options = _b.options;
    return (React.createElement("button", { type: "button", className: twMerge("w-full px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300", (_a = options === null || options === void 0 ? void 0 : options.theme) === null || _a === void 0 ? void 0 : _a.todayBtn), onClick: function () {
            changeSelectedDate("today", new Date());
            setView("days");
        } }, options === null || options === void 0 ? void 0 : options.todayBtnText));
};
export var ButtonClear = function () {
    var _a;
    var _b = useContext(DatePickerContext), setShowSelectedDate = _b.setShowSelectedDate, options = _b.options;
    return (React.createElement("button", { type: "button", className: twMerge("w-full px-5 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg dark:text-white dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-4 focus:ring-blue-300", (_a = options === null || options === void 0 ? void 0 : options.theme) === null || _a === void 0 ? void 0 : _a.clearBtn), onClick: function () { return setShowSelectedDate(false); } }, options === null || options === void 0 ? void 0 : options.clearBtnText));
};
//# sourceMappingURL=Buttons.js.map