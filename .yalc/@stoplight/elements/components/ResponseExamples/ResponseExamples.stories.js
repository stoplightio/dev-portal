"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoistedStory = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const operation_with_examples_1 = require("../../__fixtures__/operations/operation-with-examples");
const ResponseExamples_1 = require("./ResponseExamples");
exports.default = {
    title: 'Internal/ResponseExamples',
    component: ResponseExamples_1.ResponseExamples,
};
const Template = args => React.createElement(ResponseExamples_1.ResponseExamples, Object.assign({}, args));
exports.HoistedStory = Template.bind({});
exports.HoistedStory.args = {
    httpOperation: operation_with_examples_1.httpOperation,
    responseStatusCode: '200',
    responseMediaType: 'application/json',
};
exports.HoistedStory.storyName = 'ResponseExamples';
//# sourceMappingURL=ResponseExamples.stories.js.map