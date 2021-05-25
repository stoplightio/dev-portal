"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
const tslib_1 = require("tslib");
const elements_core_1 = require("@stoplight/elements-core");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const Search = ({ search, searchResults, isOpen, onClose, onClick, onSearch }) => {
    const listBoxRef = React.useRef(null);
    const onChange = React.useCallback(e => onSearch(e.currentTarget.value), [onSearch]);
    const onKeyDown = React.useCallback(e => {
        var _a;
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            (_a = listBoxRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, []);
    const onSelectionChange = React.useCallback(keys => {
        const selectedId = keys.values().next().value;
        const selectedResult = searchResults === null || searchResults === void 0 ? void 0 : searchResults.find(searchResult => `${searchResult.id}-${searchResult.project_id}` === selectedId);
        if (selectedResult) {
            onClick(selectedResult);
        }
    }, [searchResults, onClick]);
    return (React.createElement(mosaic_1.Modal, { renderHeader: () => (React.createElement(mosaic_1.Input, { appearance: "minimal", borderB: true, size: "lg", icon: "search", autoFocus: true, placeholder: "Search...", value: search, onChange: onChange, onKeyDown: onKeyDown })), isOpen: !!isOpen, onClose: onClose }, searchResults && searchResults.length > 0 ? (React.createElement(mosaic_1.ListBox, { ref: listBoxRef, "aria-label": "Search", overflowY: "auto", h: 80, m: -5, items: searchResults, selectionMode: "single", onSelectionChange: onSelectionChange }, searchResult => {
        return (React.createElement(mosaic_1.ListBoxItem, { key: `${searchResult.id}-${searchResult.project_id}`, textValue: searchResult.title },
            React.createElement(mosaic_1.Box, { p: 3, borderB: true },
                React.createElement(mosaic_1.Flex, { align: "center" },
                    React.createElement(mosaic_1.Box, { as: mosaic_1.Icon, w: 4, icon: elements_core_1.NodeTypeIconDefs[searchResult.type], style: { color: elements_core_1.NodeTypeColors[searchResult.type] } }),
                    React.createElement(mosaic_1.Box, { flex: 1, fontSize: "lg", dangerouslySetInnerHTML: { __html: searchResult.highlighted.name }, fontWeight: "medium", textOverflow: "overflow-ellipsis", mx: 2 }),
                    React.createElement(mosaic_1.Box, { fontSize: "sm", color: "muted" }, searchResult.project_name)),
                React.createElement(mosaic_1.Box, { dangerouslySetInnerHTML: { __html: searchResult.highlighted.summary }, color: "muted", fontSize: "sm", mt: 1, ml: 6 }))));
    })) : (React.createElement(mosaic_1.Flex, { w: "full", h: 80, align: "center", justify: "center", m: -5 }, "No search results"))));
};
exports.Search = Search;
//# sourceMappingURL=index.js.map