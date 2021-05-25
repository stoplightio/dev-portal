"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playground = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const useGetTableOfContents_1 = require("../../hooks/useGetTableOfContents");
const _1 = require("./");
const TableOfContentsWrapper = ({ projectId, branchSlug }) => {
    const { data } = useGetTableOfContents_1.useGetTableOfContents({ projectId, branchSlug });
    return data ? (React.createElement(_1.TableOfContents, { activeId: "b3A6MTE0", tableOfContents: data, Link: (_a) => {
            var { children } = _a, props = tslib_1.__rest(_a, ["children"]);
            return (React.createElement("a", { onClick: () => {
                    console.log('Link clicked!', props);
                } }, children));
        }, style: {
            width: '300px',
        } })) : (React.createElement(React.Fragment, null, "Loading"));
};
exports.default = {
    title: 'Public/TableOfContents',
    component: TableOfContentsWrapper,
    argTypes: {
        projectId: { table: { category: 'Input' } },
        branchSlug: { table: { category: 'Input' } },
        platformUrl: { table: { category: 'Input' } },
    },
    args: {
        projectId: 'cHJqOjExOTY',
        branchSlug: '',
        platformUrl: 'https://stoplight.io',
    },
};
const Playground = args => (React.createElement(TableOfContentsWrapper, Object.assign({}, args)));
exports.Playground = Playground;
exports.Playground.storyName = 'Studio Demo';
//# sourceMappingURL=TableOfContents.stories.js.map