"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoistedStory = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const RequestSamples_1 = require("./RequestSamples");
exports.default = {
    title: 'Internal/RequestSamples',
    component: RequestSamples_1.RequestSamples,
};
const Template = args => React.createElement(RequestSamples_1.RequestSamples, Object.assign({}, args));
exports.HoistedStory = Template.bind({});
exports.HoistedStory.args = {
    request: {
        url: 'https://google.com',
        method: 'post',
        bodySize: -1,
        cookies: [],
        headers: [],
        headersSize: -1,
        httpVersion: '1.1',
        queryString: [],
    },
};
exports.HoistedStory.storyName = 'RequestSamples';
//# sourceMappingURL=RequestSamples.stories.js.map