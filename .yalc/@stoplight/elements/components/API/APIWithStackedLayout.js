"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIWithStackedLayout = void 0;
const tslib_1 = require("tslib");
const types_1 = require("@stoplight/types");
const ui_kit_1 = require("@stoplight/ui-kit");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const React = tslib_1.__importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const constants_1 = require("../../constants");
const Docs_1 = require("../Docs");
const Badges_1 = require("../Docs/HttpOperation/Badges");
const TryIt_1 = require("../TryIt");
const utils_1 = require("./utils");
const itemMatchesHash = (hash, item) => {
    return hash.substr(1) === `${item.name}-${item.data.method}`;
};
const APIWithStackedLayout = ({ serviceNode }) => {
    const { groups } = utils_1.computeTagGroups(serviceNode);
    return (React.createElement("div", { className: "w-full flex flex-col m-auto max-w-4xl" },
        React.createElement("div", { className: "w-full border-b dark:border-gray-6" },
            React.createElement(Docs_1.Docs, { className: "mx-auto", nodeData: serviceNode.data, nodeType: types_1.NodeType.HttpService, headless: true })),
        groups.map(group => (React.createElement(Group, { key: group.title, group: group })))));
};
exports.APIWithStackedLayout = APIWithStackedLayout;
const Group = React.memo(({ group }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const { hash } = react_router_dom_1.useLocation();
    const scrollRef = React.useRef(null);
    const urlHashMatches = hash.substr(1) === group.title;
    const onClick = React.useCallback(() => setIsExpanded(!isExpanded), [isExpanded]);
    const shouldExpand = React.useMemo(() => {
        return urlHashMatches || group.items.some(item => itemMatchesHash(hash, item));
    }, [group, hash, urlHashMatches]);
    React.useEffect(() => {
        var _a;
        if (shouldExpand) {
            setIsExpanded(true);
            if (urlHashMatches && ((_a = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _a === void 0 ? void 0 : _a.offsetTop)) {
                window.scrollTo(0, scrollRef.current.offsetTop);
            }
        }
    }, [shouldExpand, urlHashMatches, group, hash]);
    return (React.createElement("div", null,
        React.createElement("div", { ref: scrollRef, onClick: onClick, className: "mx-auto flex justify-between items-center border-b dark:border-gray-6 text-gray-7 dark:text-gray-7 hover:text-gray-6 px-2 py-4 cursor-pointer" },
            React.createElement("div", { className: "text-lg font-medium" }, group.title),
            React.createElement(ui_kit_1.Icon, { className: "mr-2", icon: isExpanded ? 'chevron-down' : 'chevron-right', iconSize: 14 })),
        React.createElement(ui_kit_1.Collapse, { isOpen: isExpanded }, group.items.map(item => {
            return React.createElement(Item, { key: item.uri, item: item });
        }))));
});
const Item = React.memo(({ item }) => {
    const { hash } = react_router_dom_1.useLocation();
    const [isExpanded, setIsExpanded] = React.useState(false);
    const scrollRef = React.useRef(null);
    const [tabId, setTabId] = React.useState('docs');
    const color = constants_1.HttpMethodColors[item.data.method] || 'gray';
    const isDeprecated = !!item.data.deprecated;
    const onClick = React.useCallback(() => setIsExpanded(!isExpanded), [isExpanded]);
    React.useEffect(() => {
        var _a;
        if (itemMatchesHash(hash, item)) {
            setIsExpanded(true);
            if ((_a = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _a === void 0 ? void 0 : _a.offsetTop) {
                window.scrollTo(0, scrollRef.current.offsetTop);
            }
        }
    }, [hash, item]);
    return (React.createElement("div", { ref: scrollRef, className: classnames_1.default('w-full my-2 border border-transparent hover:border-gray-2 hover:bg-darken-1', {
            'border-gray-2 bg-darken-1': isExpanded,
        }) },
        React.createElement("div", { onClick: onClick, className: "mx-auto flex items-center text-gray-7 dark:text-gray-3 hover:text-gray-8 p-2 cursor-pointer text-lg" },
            React.createElement("div", { className: classnames_1.default(`w-24 uppercase mr-5 text-center text-base font-semibold border rounded px-2 bg-white`, `text-${color}`, `border-${color}`) }, item.data.method || 'UNKNOWN'),
            React.createElement("div", { className: "flex-1 font-medium break-all" }, item.name),
            isDeprecated && React.createElement(Badges_1.DeprecatedBadge, null)),
        React.createElement(ui_kit_1.Collapse, { isOpen: isExpanded },
            React.createElement(ui_kit_1.Tabs, { className: "PreviewTabs mx-auto", selectedTabId: tabId, onChange: (tabId) => setTabId(tabId), renderActiveTabPanelOnly: true },
                React.createElement(ui_kit_1.Tab, { id: "docs", title: "Docs", className: "p-4", panel: React.createElement(Docs_1.ParsedDocs, { node: item, headless: true }) }),
                React.createElement(ui_kit_1.Tab, { id: "tryit", title: "Try It", className: "p-4", panel: React.createElement(TryIt_1.TryItWithRequestSamples, { httpOperation: item.data }) })))));
});
//# sourceMappingURL=APIWithStackedLayout.js.map