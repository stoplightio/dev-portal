"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBar = void 0;
const tslib_1 = require("tslib");
const ui_kit_1 = require("@stoplight/ui-kit");
const React = tslib_1.__importStar(require("react"));
const SearchBar = ({ placeholder = 'What are you looking for?', query, onChange, onReset, onClose, }) => {
    return (React.createElement("div", { className: "Search__bar flex items-center h-20 px-3 py-6 border-b dark:border-lighten-4" },
        React.createElement(ui_kit_1.FormInput, { className: "flex-1 mr-3 Search__input", large: true, autoFocus: true, leftIcon: "search", placeholder: placeholder, value: query, onChange: onChange, rightElement: query ? React.createElement(ui_kit_1.Button, { minimal: true, icon: "cross", onClick: onReset }) : undefined }),
        React.createElement(ui_kit_1.Button, { className: "Search__button", icon: "arrow-right", minimal: true, onClick: onClose })));
};
exports.SearchBar = SearchBar;
//# sourceMappingURL=SearchBar.js.map