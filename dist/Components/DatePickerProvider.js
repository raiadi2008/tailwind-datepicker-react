var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { createContext, useState } from "react";
import defaultOptions from "../Options";
import { getFormattedDate as formatDate } from "../Utils/date";
export var DatePickerContext = createContext({
    options: defaultOptions,
    view: "days",
    setView: function () { },
    show: false,
    setShow: function () { },
    selectedDate: new Date(),
    changeSelectedDate: function () { },
    showSelectedDate: true,
    setShowSelectedDate: function () { },
    selectedMonth: 0,
    selectedYear: 0,
    getFormattedDate: function () { return ""; },
});
var DatePickerProvider = function (_a) {
    var children = _a.children, customOptions = _a.options, onChange = _a.onChange, show = _a.show, setShow = _a.setShow, selectedDateState = _a.selectedDateState;
    var options = __assign(__assign({}, defaultOptions), customOptions);
    var _b = useState("days"), view = _b[0], setView = _b[1];
    var _c = selectedDateState || useState((options === null || options === void 0 ? void 0 : options.defaultDate) || new Date()), selectedDate = _c[0], setSelectedDate = _c[1];
    var _d = useState((options === null || options === void 0 ? void 0 : options.defaultDate) !== null), showSelectedDate = _d[0], setShowSelectedDate = _d[1];
    var selectedMonth = selectedDate.getMonth();
    var selectedYear = selectedDate.getFullYear();
    var changeSelectedDate = function (action, date) {
        if ((options === null || options === void 0 ? void 0 : options.maxDate) && date > options.maxDate)
            return;
        if ((options === null || options === void 0 ? void 0 : options.minDate) && date < options.minDate)
            return;
        if ((options === null || options === void 0 ? void 0 : options.disabledDates) && options.disabledDates.indexOf(date) >= 0)
            return;
        setSelectedDate(date);
        setShowSelectedDate(true);
        if ((options === null || options === void 0 ? void 0 : options.autoHide) && view === "days" && action === "date")
            setShow(false);
        if (onChange)
            onChange(date);
    };
    var getFormattedDate = function (date, formatOptions) { return formatDate((options === null || options === void 0 ? void 0 : options.language) ? options === null || options === void 0 ? void 0 : options.language : "en", date, formatOptions); };
    return (React.createElement(DatePickerContext.Provider, { value: { options: options, view: view, setView: setView, show: show, setShow: setShow, selectedDate: selectedDate, changeSelectedDate: changeSelectedDate, showSelectedDate: showSelectedDate, setShowSelectedDate: setShowSelectedDate, selectedMonth: selectedMonth, selectedYear: selectedYear, getFormattedDate: getFormattedDate } }, children));
};
export default DatePickerProvider;
//# sourceMappingURL=DatePickerProvider.js.map