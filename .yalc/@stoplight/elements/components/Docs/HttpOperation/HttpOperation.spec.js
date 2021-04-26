"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const types_1 = require("@stoplight/types");
const dom_1 = require("@testing-library/dom");
const react_1 = require("@testing-library/react");
const React = tslib_1.__importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const put_todos_1 = tslib_1.__importDefault(require("../../../__fixtures__/operations/put-todos"));
const request_body_1 = tslib_1.__importDefault(require("../../../__fixtures__/operations/request-body"));
const Persistence_1 = require("../../../context/Persistence");
const withMosaicProvider_1 = require("../../../hoc/withMosaicProvider");
const chooseOption_1 = require("../../../utils/tests/chooseOption");
const index_1 = require("./index");
const HttpOperation = withMosaicProvider_1.withMosaicProvider(Persistence_1.withPersistenceBoundary(index_1.HttpOperation));
describe('HttpOperation', () => {
    describe('Header', () => {
        it('should display "Deprecated" badge for deprecated http operation', () => {
            const { unmount } = react_1.render(React.createElement(HttpOperation, { data: Object.assign(Object.assign({}, put_todos_1.default), { deprecated: true }) }));
            const badge = getDeprecatedBadge();
            expect(badge).toBeInTheDocument();
            unmount();
        });
        it('should not display "Deprecated" badge for http operation that is not deprecated', () => {
            const { unmount } = react_1.render(React.createElement(HttpOperation, { data: Object.assign(Object.assign({}, put_todos_1.default), { deprecated: false }) }));
            const deprecatedBadge = getDeprecatedBadge();
            expect(deprecatedBadge).not.toBeInTheDocument();
            unmount();
        });
        it('should display auth badges for operation security schemas', () => {
            const { unmount } = react_1.render(React.createElement(HttpOperation, { data: Object.assign({}, put_todos_1.default) }));
            const apikeyBadge = getSecurityBadge(/API Key/i);
            const basicBadge = getSecurityBadge(/Basic Auth/i);
            const bearerBadge = getSecurityBadge(/Bearer Auth/i);
            const oidcBadge = getSecurityBadge(/OpenID Connect/i);
            const oauthBadge = getSecurityBadge(/OAuth 2.0 \(write:pets, read:pets\)/i);
            expect(apikeyBadge).toBeInTheDocument();
            expect(basicBadge).toBeInTheDocument();
            expect(bearerBadge).toBeInTheDocument();
            expect(oidcBadge).toBeInTheDocument();
            expect(oauthBadge).toBeInTheDocument();
            unmount();
        });
        it('should contain link to Overview for operation with uri', () => {
            const { unmount } = react_1.render(React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement(HttpOperation, { data: Object.assign({}, put_todos_1.default), uri: "/reference/todos/openapi.v1.json/paths/~1todos/post" })));
            const apikeyBadge = getSecurityBadge(/API Key/i);
            expect(apikeyBadge === null || apikeyBadge === void 0 ? void 0 : apikeyBadge.closest('a')).toHaveAttribute('href', '/reference/todos/openapi.v1.json?security=api_key');
            unmount();
        });
    });
    describe('Query Parameters', () => {
        it('should render correct validations', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const data = {
                id: 'get',
                method: 'get',
                path: '/path',
                responses: [],
                request: {
                    query: [
                        {
                            name: 'parameter name',
                            description: 'a parameter description',
                            schema: {
                                type: 'string',
                            },
                            allowEmptyValue: true,
                            allowReserved: true,
                            deprecated: true,
                            explode: true,
                            required: true,
                            style: types_1.HttpParamStyles.Form,
                            examples: [
                                {
                                    value: 'example value',
                                    key: 'example',
                                },
                            ],
                        },
                    ],
                },
            };
            react_1.render(React.createElement(HttpOperation, { data: data }));
            const queryParametersPanel = dom_1.screen.queryByRole('heading', { name: 'Query' });
            expect(queryParametersPanel).toBeInTheDocument();
            expect(queryParametersPanel).toBeVisible();
            expect(queryParametersPanel).toBeEnabled();
            expect(yield dom_1.screen.findByText(/parameter name$/)).toBeInTheDocument();
            expect(yield dom_1.screen.findByText(/required/)).toBeInTheDocument();
            expect(yield dom_1.screen.findByText(/deprecated/)).toBeInTheDocument();
        }));
        it('should not render default styles', () => {
            const operationData = {
                id: 'get',
                method: 'get',
                path: '/path',
                responses: [],
                request: {
                    query: [
                        {
                            name: 'default style param',
                            schema: {
                                type: 'string',
                            },
                            style: types_1.HttpParamStyles.Form,
                        },
                        {
                            name: 'different style param',
                            schema: {
                                type: 'string',
                            },
                            style: types_1.HttpParamStyles.SpaceDelimited,
                        },
                    ],
                },
            };
            const { unmount } = react_1.render(React.createElement(HttpOperation, { data: operationData }));
            expect(dom_1.screen.queryByText(/Space separated values/)).toBeInTheDocument();
            expect(dom_1.screen.queryByText(/Form style values/)).not.toBeInTheDocument();
            unmount();
        });
    });
    describe('Header Parameters', () => {
        it('should render panel when there are header parameters', () => {
            const data = {
                id: 'get',
                method: 'get',
                path: '/path',
                responses: [],
                request: {
                    headers: [
                        {
                            name: 'parameter name',
                            description: 'a parameter description',
                            schema: {
                                type: 'string',
                            },
                            deprecated: true,
                            explode: true,
                            required: true,
                            style: types_1.HttpParamStyles.Simple,
                            examples: [
                                {
                                    key: 'example',
                                    value: 'example value',
                                },
                            ],
                        },
                    ],
                },
            };
            const { unmount } = react_1.render(React.createElement(HttpOperation, { data: data }));
            const headersPanel = dom_1.screen.queryByRole('heading', { name: 'Headers' });
            expect(headersPanel).toBeInTheDocument();
            expect(headersPanel).toBeVisible();
            expect(headersPanel).toBeEnabled();
            expect(dom_1.screen.queryByText('parameter name')).toBeInTheDocument();
            unmount();
        });
        it('should not render panel when there are no header parameters', () => {
            const data = {
                id: 'get',
                method: 'get',
                path: '/path',
                responses: [],
                request: {
                    headers: [],
                },
            };
            const { unmount } = react_1.render(React.createElement(HttpOperation, { data: data }));
            const headersPanel = dom_1.screen.queryByRole('heading', { name: 'Headers' });
            expect(headersPanel).not.toBeInTheDocument();
            unmount();
        });
    });
    describe('Path Parameters', () => {
        it('should render correct validations', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const data = {
                id: 'get',
                method: 'get',
                path: '/path',
                summary: 'Some endpoint',
                responses: [],
                request: {
                    path: [
                        {
                            name: 'parameter name',
                            description: 'a parameter description',
                            schema: {
                                type: 'string',
                            },
                            deprecated: true,
                            explode: true,
                            required: true,
                            style: types_1.HttpParamStyles.Simple,
                            examples: [
                                {
                                    key: 'example',
                                    value: 'example value',
                                },
                            ],
                        },
                    ],
                },
            };
            react_1.render(React.createElement(HttpOperation, { data: data }));
            const pathParametersPanel = dom_1.screen.getByRole('button', { name: /GET.*\/path/i });
            expect(pathParametersPanel).toBeInTheDocument();
            expect(pathParametersPanel).toBeVisible();
            expect(pathParametersPanel).toBeEnabled();
            expect(yield dom_1.screen.findByText('parameter name')).toBeInTheDocument();
        }));
        it('should still show path parameters panel when there are no parameters', () => {
            const data = {
                id: 'get',
                summary: 'Some endpoint',
                method: 'get',
                path: '/path',
                responses: [],
                request: {},
            };
            const { unmount } = react_1.render(React.createElement(HttpOperation, { data: data }));
            const pathParametersPanel = dom_1.screen.queryAllByRole('heading', { name: /GET.*\/path/i });
            expect(pathParametersPanel).toHaveLength(2);
            expect(pathParametersPanel[0]).toBeVisible();
            expect(pathParametersPanel[1]).toBeVisible();
            unmount();
        });
    });
    describe('Request Body', () => {
        const httpOperationWithRequestBodyContents = {
            path: '/',
            id: 'some_id',
            method: 'get',
            request: {
                body: {
                    contents: [
                        {
                            mediaType: 'application/json',
                            schema: {
                                type: 'object',
                                properties: {
                                    some_property: { type: 'string' },
                                },
                            },
                        },
                        { mediaType: 'application/xml' },
                    ],
                },
            },
            responses: [
                {
                    code: '200',
                    description: 'Hello world!',
                },
            ],
        };
        const httpOperationWithoutRequestBodyContents = {
            path: '/',
            id: 'some_id',
            method: 'get',
            request: {
                body: {
                    description: 'Some body description',
                    contents: [],
                },
            },
            responses: [
                {
                    code: '200',
                    description: 'Hello world!',
                },
            ],
        };
        it('should render select for content type', () => {
            const { unmount } = react_1.render(React.createElement(HttpOperation, { data: httpOperationWithRequestBodyContents }));
            const select = dom_1.screen.queryByLabelText('Request Body Content Type');
            expect(select).not.toBeNull();
            unmount();
        });
        it('should allow to select different content type', () => {
            const { unmount } = react_1.render(React.createElement(HttpOperation, { data: httpOperationWithRequestBodyContents }));
            const select = dom_1.screen.getByLabelText('Request Body Content Type');
            expect(select).toHaveTextContent('application/json');
            chooseOption_1.chooseOption(select, 'application/xml');
            expect(select).toHaveTextContent('application/xml');
            unmount();
        });
        it('should not render select if there are no contents', () => {
            const { unmount } = react_1.render(React.createElement(HttpOperation, { data: httpOperationWithoutRequestBodyContents }));
            const select = dom_1.screen.queryByLabelText('Request Body Content Type');
            expect(select).toBeNull();
            unmount();
        });
        it('should display description even if there are no contents', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            react_1.render(React.createElement(HttpOperation, { data: httpOperationWithoutRequestBodyContents }));
            expect(yield dom_1.screen.findByText('Some body description')).toBeInTheDocument();
        }));
        it('should display schema for content type', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            react_1.render(React.createElement(HttpOperation, { data: httpOperationWithRequestBodyContents }));
            expect(yield dom_1.screen.findByText('some_property')).toBeInTheDocument();
        }));
        it('request body selection in Docs should update TryIt', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            react_1.render(React.createElement(HttpOperation, { data: request_body_1.default }));
            const body = dom_1.screen.getByRole('textbox');
            const requestSample = yield dom_1.screen.findByLabelText('curl --request POST \\ --url https://todos.stoplight.io/users \\ --header \'Content-Type: application/json\' \\ --data \'{ "name": "string", "age": 0 }\'');
            expect(body).toHaveTextContent('{ "name": "string", "age": 0 }');
            expect(requestSample).toBeInTheDocument();
            const select = dom_1.screen.getByLabelText('Request Body Content Type');
            chooseOption_1.chooseOption(select, 'application/x-www-form-urlencoded');
            const secondRequestSample = yield dom_1.screen.findByLabelText("curl --request POST \\ --url https://todos.stoplight.io/users \\ --header 'Content-Type: application/x-www-form-urlencoded' \\ --data name= \\ --data completed= \\ --data someEnum=a");
            expect(dom_1.screen.getByLabelText('someEnum')).toBeInTheDocument();
            expect(secondRequestSample).toBeInTheDocument();
        }));
    });
    describe('Response', () => {
        const httpOperationWithResponseBodyContents = {
            path: '/',
            id: 'some_id',
            method: 'get',
            responses: [
                {
                    code: '200',
                    description: 'Hello world!',
                    contents: [
                        {
                            mediaType: 'application/json',
                            schema: {
                                type: 'object',
                                properties: {
                                    some_property: { type: 'string' },
                                },
                            },
                        },
                        { mediaType: 'application/xml' },
                    ],
                },
            ],
        };
        const httpOperationWithoutResponseBodyContents = {
            path: '/',
            id: 'some_id',
            method: 'get',
            responses: [
                {
                    code: '200',
                    description: 'Hello world!',
                },
            ],
        };
        it('should render the MarkdownViewer with description', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            react_1.render(React.createElement(HttpOperation, { data: httpOperationWithoutResponseBodyContents }));
            expect(yield dom_1.screen.findByText('Hello world!')).toBeInTheDocument();
        }));
        it('should render select for content types', () => {
            const { unmount } = react_1.render(React.createElement(HttpOperation, { data: httpOperationWithResponseBodyContents }));
            const select = dom_1.screen.queryByLabelText('Response Body Content Type');
            expect(select).not.toBeNull();
            unmount();
        });
        it('should allow changing content type', () => {
            const { unmount } = react_1.render(React.createElement(HttpOperation, { data: httpOperationWithResponseBodyContents }));
            const select = dom_1.screen.getByLabelText('Response Body Content Type');
            expect(select).toHaveTextContent('application/json');
            chooseOption_1.chooseOption(select, 'application/xml');
            expect(select).toHaveTextContent('application/xml');
            unmount();
        });
        it('should not render select when there are no contents', () => {
            const { unmount } = react_1.render(React.createElement(HttpOperation, { data: httpOperationWithoutResponseBodyContents }));
            const select = dom_1.screen.queryByLabelText('Response Body Content Type');
            expect(select).toBeNull();
            unmount();
        });
        it('should display schema for chosen content type', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            react_1.render(React.createElement(HttpOperation, { data: httpOperationWithResponseBodyContents }));
            const property = yield dom_1.screen.findByText('some_property');
            expect(property).toBeInTheDocument();
            const select = dom_1.screen.getByLabelText('Response Body Content Type');
            chooseOption_1.chooseOption(select, 'application/xml');
            expect(dom_1.screen.queryByText('some_property')).not.toBeInTheDocument();
        }));
    });
});
function getDeprecatedBadge() {
    return dom_1.screen.queryByRole('badge', { name: /Deprecated/i });
}
function getSecurityBadge(re) {
    return dom_1.screen.queryByRole('badge', { name: re });
}
//# sourceMappingURL=HttpOperation.spec.js.map