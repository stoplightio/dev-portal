"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithParameters = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const put_todos_1 = require("../../__fixtures__/operations/put-todos");
const TryItWithRequestSamples_1 = require("./TryItWithRequestSamples");
exports.default = {
    title: 'Internal/TryItWithRequestSamples',
    component: TryItWithRequestSamples_1.TryItWithRequestSamples,
};
const Template = args => React.createElement(TryItWithRequestSamples_1.TryItWithRequestSamples, Object.assign({}, args));
exports.WithParameters = Template.bind({});
exports.WithParameters.args = {
    httpOperation: put_todos_1.httpOperation,
};
exports.WithParameters.storyName = 'TryItWithRequestSamples';
//# sourceMappingURL=TryItWithRequestSamples.stories.js.map