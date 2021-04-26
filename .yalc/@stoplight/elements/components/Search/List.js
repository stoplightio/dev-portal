"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeList = void 0;
const tslib_1 = require("tslib");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const path_1 = require("@stoplight/path");
const ui_kit_1 = require("@stoplight/ui-kit");
const ScrollContainer_1 = require("@stoplight/ui-kit/ScrollContainer");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const React = tslib_1.__importStar(require("react"));
const constants_1 = require("../../constants");
const Provider_1 = require("../MarkdownViewer/CustomComponents/Provider");
const NodeList = ({ isLoading, error, nodes, onReset, onClose }) => {
    if (error) {
        return (React.createElement(ui_kit_1.NonIdealState, { title: "An error has occured!", description: "Try refreshing the page. If the error persists, please reach out to us at support@stoplight.io.", icon: "error", action: React.createElement(ui_kit_1.Button, { text: "Reload the Page", onClick: () => {
                    window.location.reload();
                } }) }));
    }
    if (!nodes || !nodes.length) {
        if (!nodes && isLoading) {
            return React.createElement(ui_kit_1.Spinner, { className: "mt-32" });
        }
        else {
            return (React.createElement(ui_kit_1.NonIdealState, { title: "No Results", description: "Try tweaking your filters or search term.", icon: "zoom-out", action: React.createElement(ui_kit_1.Button, { text: "Clear Search & Filters", onClick: onReset }) }));
        }
    }
    return (React.createElement(ScrollContainer_1.ScrollContainer, { className: "NodeList" },
        nodes.map(item => (React.createElement(NodeListItem, { key: item.id, item: item, isLoading: isLoading, onClose: onClose, onReset: onReset }))),
        isLoading && (React.createElement("div", { className: "mt-2 mb-8" },
            React.createElement(ui_kit_1.Spinner, { className: "mt-2" })))));
};
exports.NodeList = NodeList;
const NodeListItem = ({ isLoading, item, onReset, onClose }) => {
    const components = Provider_1.useMarkdownComponents();
    const { orgSlug, projectSlug } = path_1.deserializeSrn(item.node.uri);
    const onClick = React.useCallback(e => {
        if (onReset) {
            onReset(e);
        }
        if (onClose) {
            onClose();
        }
    }, [onClose, onReset]);
    let dataContext = null;
    if (typeof item.snapshot.data === 'string' && item.snapshot.data.match('<em>')) {
        dataContext = (React.createElement(ui_kit_1.Callout, { style: { maxHeight: 150 }, className: classnames_1.default('mt-4 -mb-1 -mx-1 overflow-auto', {
                [ui_kit_1.Classes.SKELETON]: isLoading,
            }) },
            React.createElement(HighlightSearchContext, { markup: item.snapshot.data })));
    }
    const elem = (React.createElement("div", { key: "1", className: "flex px-6 py-8 border-b cursor-pointer NodeList__item dark:border-lighten-4 hover:bg-gray-1 dark-hover:bg-lighten-3", onClick: onClick },
        React.createElement("div", { className: "mr-4" },
            React.createElement(ui_kit_1.Tag, { icon: constants_1.NodeTypeIconDefs[item.snapshot.type] && React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: constants_1.NodeTypeIconDefs[item.snapshot.type] }), style: { backgroundColor: constants_1.NodeTypeColors[item.snapshot.type] || undefined }, title: constants_1.NodeTypePrettyName[item.snapshot.type] || item.snapshot.type, className: "py-1 dark:text-white" })),
        React.createElement("div", { className: "flex-1" },
            React.createElement("div", { className: "flex items-center" },
                React.createElement("div", { className: classnames_1.default(ui_kit_1.Classes.HEADING, 'inline-block flex items-center m-0', {
                        [ui_kit_1.Classes.SKELETON]: isLoading,
                    }) },
                    React.createElement(HighlightSearchContext, { markup: item.snapshot.name || 'No Name...' })),
                React.createElement("div", { className: "flex-1" }),
                React.createElement("div", { className: classnames_1.default(ui_kit_1.Classes.TEXT_MUTED, 'flex text-sm', {
                        [ui_kit_1.Classes.SKELETON]: isLoading,
                    }) },
                    React.createElement("div", null, orgSlug),
                    React.createElement("div", { className: "px-1" }, "/"),
                    React.createElement("div", null, projectSlug))),
            item.snapshot.summary && (React.createElement("div", { className: "flex" },
                React.createElement("div", { className: classnames_1.default('flex-1 mt-2', {
                        [ui_kit_1.Classes.SKELETON]: isLoading,
                    }) },
                    React.createElement(HighlightSearchContext, { markup: item.snapshot.summary })))),
            dataContext)));
    if (components.link) {
        const Link = components.link;
        return (React.createElement(Link, { index: 0, node: { type: 'link', className: 'reset', url: item.node.uri, children: [] }, parent: null, path: [] }, elem));
    }
    return elem;
};
const HighlightSearchContext = ({ markup, className }) => {
    return (React.createElement("div", { className: classnames_1.default('Search__highlight whitespace-pre-wrap', className), dangerouslySetInnerHTML: { __html: markup } }));
};
//# sourceMappingURL=List.js.map