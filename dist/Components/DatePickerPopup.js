import React, { forwardRef, useContext } from "react";
import { twMerge } from "tailwind-merge";
import { dayOfTheWeekOf, firstDateOfMonth } from "../Utils/date";
import { ButtonClear, ButtonNextMonth, ButtonPrevMonth, ButtonSelectMonth, ButtonToday } from "./Buttons";
import { DatePickerContext } from "./DatePickerProvider";
import Days from "./Views/Days";
import Decades from "./Views/Decades";
import Months from "./Views/Months";
import Years from "./Views/Years";
var DatePickerPopup = forwardRef(function (_props, ref) {
    var _a, _b;
    var _c = useContext(DatePickerContext), selectedMonth = _c.selectedMonth, selectedYear = _c.selectedYear, view = _c.view, options = _c.options;
    var language = (options === null || options === void 0 ? void 0 : options.language) ? options === null || options === void 0 ? void 0 : options.language : "en";
    var locale = new Intl.Locale(language);
    var formatter = new Intl.DateTimeFormat(language, { weekday: "long" });
    var weekdays = Array.from({ length: 7 }, function (_, i) { return formatter.format(new Date(Date.UTC(2023, 0, i + 1))); });
    var weekStart = weekdays.indexOf("Monday");
    var firstOfMonth = firstDateOfMonth(selectedYear, selectedMonth, 1);
    var start = dayOfTheWeekOf(firstOfMonth, weekStart, weekStart);
    return (React.createElement("div", { ref: ref, className: twMerge("absolute z-50 block pt-2 top-10", options === null || options === void 0 ? void 0 : options.datepickerClassNames) },
        React.createElement("div", { className: twMerge("inline-block p-4 bg-white rounded-lg shadow-lg dark:bg-gray-700", (_a = options === null || options === void 0 ? void 0 : options.theme) === null || _a === void 0 ? void 0 : _a.background) },
            React.createElement("div", null,
                (options === null || options === void 0 ? void 0 : options.title) && React.createElement("div", { className: twMerge("px-2 py-3 font-semibold text-center text-gray-900 dark:text-white", (_b = options === null || options === void 0 ? void 0 : options.theme) === null || _b === void 0 ? void 0 : _b.text) }, options === null || options === void 0 ? void 0 : options.title),
                React.createElement("div", { className: "flex justify-between mb-2" },
                    React.createElement(ButtonPrevMonth, null),
                    React.createElement(ButtonSelectMonth, null),
                    React.createElement(ButtonNextMonth, null))),
            React.createElement("div", { className: "p-1" },
                view === "days" && React.createElement(Days, { start: start }),
                view === "months" && React.createElement(Months, null),
                view === "years" && React.createElement(Years, null),
                view === "decades" && React.createElement(Decades, null)),
            ((options === null || options === void 0 ? void 0 : options.todayBtn) || (options === null || options === void 0 ? void 0 : options.clearBtn)) && (React.createElement("div", { className: "flex mt-2 space-x-2" },
                (options === null || options === void 0 ? void 0 : options.todayBtn) && React.createElement(ButtonToday, null),
                (options === null || options === void 0 ? void 0 : options.clearBtn) && React.createElement(ButtonClear, null))))));
});
DatePickerPopup.displayName = "DatePickerPopup";
export default DatePickerPopup;
//# sourceMappingURL=DatePickerPopup.js.map