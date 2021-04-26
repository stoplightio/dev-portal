"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TocStory = void 0;
const tslib_1 = require("tslib");
const ui_kit_1 = require("@stoplight/ui-kit");
const React = tslib_1.__importStar(require("react"));
const TableOfContents_1 = require("./TableOfContents");
exports.default = {
    title: 'Internal/TableOfContents',
    component: TableOfContents_1.TableOfContents,
    argTypes: {
        rowComponentExtraProps: { table: { disable: true } },
    },
};
const TocStoryContainer = props => {
    const [node, setNode] = React.useState('');
    return (React.createElement("div", { className: "flex flex-row" },
        React.createElement("div", { style: {
                height: '100%',
                borderRight: '1px solid #E6ECF1',
                backgroundColor: '#F5F7F9',
                paddingTop: 24,
                paddingLeft: 24,
                width: 350,
            } },
            React.createElement(TableOfContents_1.TableOfContents, Object.assign({ className: "h-full" }, props, { rowComponent: (_a) => {
                    var { item } = _a, rest = tslib_1.__rest(_a, ["item"]);
                    return (React.createElement(ui_kit_1.DefaultRow, Object.assign({ item: Object.assign(Object.assign({}, item), { isSelected: item.to === node, onClick: () => {
                                var _a;
                                setNode((_a = item.to) !== null && _a !== void 0 ? _a : '');
                            } }) }, rest)));
                } }))),
        React.createElement("div", { className: "flex-grow p-5" },
            React.createElement("h2", null, "Docs will be displayed here"),
            React.createElement("p", null,
                "Current path: ",
                React.createElement("em", null, node)))));
};
const TocStory = args => React.createElement(TocStoryContainer, Object.assign({}, args));
exports.TocStory = TocStory;
exports.TocStory.storyName = 'TableOfContents';
exports.TocStory.args = {
    workspaceSlug: 'elements',
    projectSlug: 'studio-demo',
};
//# sourceMappingURL=TableOfContents.stories.js.map