"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentTab = exports.Content = void 0;
const tslib_1 = require("tslib");
const SimpleTabs_1 = require("@stoplight/ui-kit/SimpleTabs");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const React = tslib_1.__importStar(require("react"));
const node_1 = require("../../utils/node");
const Content = ({ node, children }) => {
    const [selectedTab, setSelectedTab] = React.useState(0);
    const onSelect = React.useCallback((i) => setSelectedTab(i), [setSelectedTab]);
    const tabTitles = [];
    const tabPanels = [];
    React.Children.forEach(children, (child, index) => {
        if (isElementOfType(child, exports.ContentTab)) {
            if (node_1.matchesNodeFilter(node, child.props.filter)) {
                tabTitles.push(React.createElement(SimpleTabs_1.SimpleTab, { key: index, id: `content-${child.props.title}`, className: "ContentTabs-tab" }, child.props.title));
                tabPanels.push(child);
            }
        }
        else {
            tabTitles.push(child);
        }
    });
    return (React.createElement(SimpleTabs_1.SimpleTabs, { id: "ContentTabs", className: "flex flex-col flex-1 ContentTabs", selectedIndex: selectedTab >= tabPanels.length ? tabPanels.length - 1 : selectedTab, onSelect: onSelect },
        React.createElement(SimpleTabs_1.SimpleTabList, { className: classnames_1.default('ContentTabs-list mt-6') }, tabTitles),
        tabPanels));
};
exports.Content = Content;
const ContentTab = ({ children }) => {
    return React.createElement(SimpleTabs_1.SimpleTabPanel, { className: "ContentTabs-panel" }, children);
};
exports.ContentTab = ContentTab;
function isElementOfType(element, ComponentType) {
    return (element != null &&
        element.type != null &&
        element.type.displayName != null &&
        element.type.displayName === ComponentType.displayName);
}
//# sourceMappingURL=index.js.map