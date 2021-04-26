"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
const tslib_1 = require("tslib");
const ui_kit_1 = require("@stoplight/ui-kit");
const React = tslib_1.__importStar(require("react"));
const List_1 = require("./List");
const SearchBar_1 = require("./SearchBar");
const Search = ({ query, placeholder, onChange, nodes, isLoading, isOpen, onClose, onReset, error, }) => {
    return (React.createElement(ui_kit_1.Drawer, { className: "Search__drawer", backdropClassName: "Search__backdrop", isOpen: isOpen, onClose: onClose },
        React.createElement(SearchBar_1.SearchBar, { placeholder: placeholder, query: query, onChange: onChange, onReset: onReset, onClose: onClose }),
        React.createElement(List_1.NodeList, { isLoading: isLoading, error: error, nodes: nodes, onReset: onReset, onClose: onClose })));
};
exports.Search = Search;
//# sourceMappingURL=index.js.map