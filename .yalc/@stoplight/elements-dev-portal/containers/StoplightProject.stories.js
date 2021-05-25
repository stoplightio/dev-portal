"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playground = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const StoplightProject_1 = require("./StoplightProject");
exports.default = {
    title: 'Public/StoplightProject',
    component: StoplightProject_1.StoplightProject,
    argTypes: {
        projectId: { table: { category: 'Input' } },
        hideTryIt: { table: { category: 'Input' } },
        hideMocking: { table: { category: 'Input' } },
        basePath: { table: { category: 'Routing' } },
        router: { table: { category: 'Routing' } },
        platformUrl: { table: { category: 'Advanced' } },
    },
    args: {
        router: 'memory',
        platformUrl: 'https://stoplight.io',
    },
};
const Playground = args => React.createElement(StoplightProject_1.StoplightProject, Object.assign({}, args));
exports.Playground = Playground;
exports.Playground.storyName = 'Studio Demo';
exports.Playground.args = {
    projectId: 'cHJqOjExOTY',
    platformUrl: 'https://stoplight.io',
};
//# sourceMappingURL=StoplightProject.stories.js.map