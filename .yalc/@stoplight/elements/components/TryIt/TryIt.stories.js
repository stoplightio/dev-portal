"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TryItAuthDuplicated = exports.TryItAuth = exports.RequestBodyExamples = exports.RequestBodySchema = exports.Multipart = exports.UrlEncoded = exports.WithParameters = exports.SimpleGET = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const examples_request_body_1 = require("../../__fixtures__/operations/examples-request-body");
const multipart_formdata_post_1 = require("../../__fixtures__/operations/multipart-formdata-post");
const put_todos_1 = require("../../__fixtures__/operations/put-todos");
const request_body_1 = require("../../__fixtures__/operations/request-body");
const securedOperation_1 = require("../../__fixtures__/operations/securedOperation");
const simple_get_1 = require("../../__fixtures__/operations/simple-get");
const urlencoded_post_1 = require("../../__fixtures__/operations/urlencoded-post");
const TryIt_1 = require("./TryIt");
exports.default = {
    title: 'Internal/TryIt Component',
    component: TryIt_1.TryIt,
};
const Template = args => React.createElement(TryIt_1.TryIt, Object.assign({}, args));
exports.SimpleGET = Template.bind({});
exports.SimpleGET.args = {
    httpOperation: simple_get_1.operation,
};
exports.WithParameters = Template.bind({});
exports.WithParameters.args = {
    httpOperation: put_todos_1.httpOperation,
};
exports.UrlEncoded = Template.bind({});
exports.UrlEncoded.args = {
    httpOperation: urlencoded_post_1.httpOperation,
};
exports.UrlEncoded.storyName = 'application/x-www-form-urlencoded';
exports.Multipart = Template.bind({});
exports.Multipart.args = {
    httpOperation: multipart_formdata_post_1.httpOperation,
};
exports.Multipart.storyName = 'multipart/form-data (with file upload)';
exports.RequestBodySchema = Template.bind({});
exports.RequestBodySchema.args = {
    httpOperation: request_body_1.requestBody,
};
exports.RequestBodySchema.storyName = 'Request Body From Schema';
exports.RequestBodyExamples = Template.bind({});
exports.RequestBodyExamples.args = {
    httpOperation: examples_request_body_1.examplesRequestBody,
};
exports.RequestBodyExamples.storyName = 'Request Body from Examples';
exports.TryItAuth = Template.bind({});
exports.TryItAuth.args = {
    httpOperation: put_todos_1.httpOperation,
};
exports.TryItAuth.storyName = 'TryIt Auth';
exports.TryItAuthDuplicated = Template.bind({});
exports.TryItAuthDuplicated.args = {
    httpOperation: securedOperation_1.duplicatedSecurityScheme,
};
exports.TryItAuthDuplicated.storyName = 'TryIt Auth (Duplicated Parameters)';
//# sourceMappingURL=TryIt.stories.js.map