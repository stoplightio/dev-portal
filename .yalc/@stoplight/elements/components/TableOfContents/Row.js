"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Row = void 0;
const tslib_1 = require("tslib");
const ui_kit_1 = require("@stoplight/ui-kit");
const React = tslib_1.__importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Row = props => {
    var _a;
    if (!props.item.to) {
        return React.createElement(ui_kit_1.DefaultRow, Object.assign({}, props));
    }
    const item = Object.assign(Object.assign({}, props.item), { isSelected: props.item.to === props.extra.pathname, to: (_a = props.item.to) !== null && _a !== void 0 ? _a : '' });
    const handleClick = () => {
        var _a, _b;
        (_b = (_a = props.extra.scrollRef) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.scrollIntoView({
            behavior: 'smooth',
        });
    };
    return (React.createElement(react_router_dom_1.Link, { onClick: handleClick, to: item.to, className: "no-underline block" },
        React.createElement(ui_kit_1.DefaultRow, Object.assign({}, props, { item: item }))));
};
exports.Row = Row;
//# sourceMappingURL=Row.js.map