"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playground = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const useGetNodeContent_1 = require("../../hooks/useGetNodeContent");
const _1 = require("./");
const NodeContentWrapper = ({ nodeSlug, projectId, branchSlug, }) => {
    const { data } = useGetNodeContent_1.useGetNodeContent({ nodeSlug, projectId, branchSlug });
    return data ? (React.createElement(_1.NodeContent, { node: data, Link: (_a) => {
            var { children } = _a, props = tslib_1.__rest(_a, ["children"]);
            return (React.createElement("a", { onClick: () => {
                    console.log('Link clicked!', props);
                } }, children));
        } })) : (React.createElement(React.Fragment, null, "Loading"));
};
exports.default = {
    title: 'Public/NodeContent',
    component: NodeContentWrapper,
    argTypes: {
        nodeSlug: { table: { category: 'Input' } },
        projectId: { table: { category: 'Input' } },
        branchSlug: { table: { category: 'Input' } },
        platformUrl: { table: { category: 'Input' } },
    },
    args: {
        nodeSlug: 'b3A6Mzg5NDM2-create-todo',
        projectId: 'cHJqOjExOTY',
        branchSlug: '',
        platformUrl: 'https://stoplight.io',
    },
};
const Playground = args => (React.createElement(NodeContentWrapper, Object.assign({}, args)));
exports.Playground = Playground;
exports.Playground.storyName = 'Create Todo';
//# sourceMappingURL=NodeContent.stories.js.map