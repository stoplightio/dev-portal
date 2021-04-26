"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicApis = exports.Playground = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const StoplightProject_1 = require("./StoplightProject");
exports.default = {
    title: 'Public/StoplightProject',
    component: StoplightProject_1.StoplightProject,
    argTypes: {
        workspaceSlug: { table: { category: 'Input' } },
        projectSlug: { table: { category: 'Input' } },
        branchSlug: { table: { category: 'Input' } },
        authToken: { table: { category: 'Input' } },
        basePath: { table: { category: 'Routing' } },
        router: { table: { category: 'Routing' } },
        platformUrl: { table: { category: 'Advanced' } },
    },
    args: {
        router: 'memory',
    },
};
const Playground = args => React.createElement(StoplightProject_1.StoplightProject, Object.assign({}, args));
exports.Playground = Playground;
exports.Playground.storyName = 'Studio Demo';
exports.Playground.args = {
    workspaceSlug: 'elements',
    projectSlug: 'studio-demo',
};
const PublicApis = args => React.createElement(StoplightProject_1.StoplightProject, Object.assign({}, args));
exports.PublicApis = PublicApis;
exports.PublicApis.storyName = 'Public APIs';
exports.PublicApis.args = {
    workspaceSlug: 'elements',
    projectSlug: 'public-apis',
};
//# sourceMappingURL=StoplightProject.stories.js.map