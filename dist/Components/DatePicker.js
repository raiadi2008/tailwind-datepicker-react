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
import React, { forwardRef, useContext, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import defaultOptions from "../Options";
import DatePickerPopup from "./DatePickerPopup";
import DatePickerProvider, { DatePickerContext } from "./DatePickerProvider";
var DatePicker = function (_a) {
    var children = _a.children, options = _a.options, onChange = _a.onChange, classNames = _a.classNames, show = _a.show, setShow = _a.setShow, selectedDateState = _a.selectedDateState;
    return (React.createElement("div", { className: twMerge("w-full", classNames) },
        React.createElement(DatePickerProvider, { options: options, onChange: onChange, show: show, setShow: setShow, selectedDateState: selectedDateState },
            React.createElement(DatePickerMain, { options: options }, children))));
};
var DatePickerMain = function (_a) {
    var customOptions = _a.options, children = _a.children;
    var options = __assign(__assign({}, defaultOptions), customOptions);
    var _b = useContext(DatePickerContext), setShow = _b.setShow, show = _b.show;
    var InputRef = useRef(null);
    var DatePickerRef = useRef(null);
    useEffect(function () {
        var handleClickOutside = function (event) {
            if (!((InputRef === null || InputRef === void 0 ? void 0 : InputRef.current) && (DatePickerRef === null || DatePickerRef === void 0 ? void 0 : DatePickerRef.current)))
                return;
            if (!InputRef.current.contains(event.target) && !DatePickerRef.current.contains(event.target)) {
                setShow(false);
            }
        };
        document.addEventListener("mousedown", function (event) { return handleClickOutside(event); });
        return function () {
            document.removeEventListener("mousedown", function (event) { return handleClickOutside(event); });
        };
    }, [DatePickerRef, InputRef, setShow]);
    return (React.createElement(React.Fragment, null,
        children ? (children) : (React.createElement("div", { className: "relative" },
            React.createElement("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" },
                React.createElement(CalendarIcon, null)),
            React.createElement(Input, { ref: InputRef, idProp: options === null || options === void 0 ? void 0 : options.inputIdProp, nameProp: options === null || options === void 0 ? void 0 : options.inputNameProp, placeholderProp: options === null || options === void 0 ? void 0 : options.inputPlaceholderProp, dateFormat: options === null || options === void 0 ? void 0 : options.inputDateFormatProp }))),
        show && React.createElement(DatePickerPopup, { ref: DatePickerRef })));
};
var Input = forwardRef(function (props, ref) {
    var _a;
    var _b = useContext(DatePickerContext), setShow = _b.setShow, selectedDate = _b.selectedDate, showSelectedDate = _b.showSelectedDate, options = _b.options, getFormattedDate = _b.getFormattedDate;
    var nameProp = props.nameProp || "date";
    var idProp = props.idProp || nameProp;
    var placeholderProp = props.placeholderProp || "Select Date";
    var format = props.dateFormat || null;
    return (React.createElement("input", { ref: ref, type: "text", name: nameProp, id: idProp, className: twMerge("pl-9 pr-2.5 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", (_a = options === null || options === void 0 ? void 0 : options.theme) === null || _a === void 0 ? void 0 : _a.input), placeholder: placeholderProp, value: selectedDate && showSelectedDate ? getFormattedDate(selectedDate, format) : "", onFocus: function () { return setShow(true); }, readOnly: true }));
});
Input.displayName = "Input";
var CalendarIcon = function () {
    var _a;
    var options = useContext(DatePickerContext).options;
    return (React.createElement("svg", { "aria-hidden": "true", className: twMerge("w-5 h-5 text-gray-500 dark:text-gray-400", (_a = options === null || options === void 0 ? void 0 : options.theme) === null || _a === void 0 ? void 0 : _a.inputIcon), fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z", clipRule: "evenodd" })));
};
export default DatePicker;
//# sourceMappingURL=DatePicker.js.map