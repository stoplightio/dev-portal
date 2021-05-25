"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playground = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const useGetBranches_1 = require("../../hooks/useGetBranches");
const _1 = require("./");
const BranchSelectorWrapper = ({ projectId }) => {
    const [branchSlug, setBranchSlug] = React.useState('master');
    const { data } = useGetBranches_1.useGetBranches({ projectId });
    if (data) {
        return (React.createElement(mosaic_1.Box, { mt: 10, w: 40 },
            React.createElement(_1.BranchSelector, { branchSlug: branchSlug, branches: data, onChange: branch => setBranchSlug(branch.slug) })));
    }
    return React.createElement(mosaic_1.Box, null, "Loading");
};
exports.default = {
    title: 'Public/BranchSelector',
    component: BranchSelectorWrapper,
    argTypes: {
        projectId: { table: { category: 'Input' } },
        platformUrl: { table: { category: 'Input' } },
    },
    args: {
        projectId: 'cHJqOjExOTY',
        platformUrl: 'https://stoplight.io',
    },
};
const Playground = args => (React.createElement(BranchSelectorWrapper, Object.assign({}, args)));
exports.Playground = Playground;
exports.Playground.storyName = 'Studio Demo';
//# sourceMappingURL=BranchSelector.stories.js.map