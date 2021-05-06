"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("@testing-library/jest-dom");
const types_1 = require("@stoplight/types");
const dom_1 = require("@testing-library/dom");
const react_1 = require("@testing-library/react");
const user_event_1 = tslib_1.__importDefault(require("@testing-library/user-event"));
const jest_fetch_mock_1 = tslib_1.__importDefault(require("jest-fetch-mock"));
const React = tslib_1.__importStar(require("react"));
const base64_file_upload_1 = require("../../__fixtures__/operations/base64-file-upload");
const examples_request_body_1 = require("../../__fixtures__/operations/examples-request-body");
const head_todos_1 = require("../../__fixtures__/operations/head-todos");
const multipart_formdata_post_1 = require("../../__fixtures__/operations/multipart-formdata-post");
const operation_parameters_1 = require("../../__fixtures__/operations/operation-parameters");
const operation_without_servers_1 = require("../../__fixtures__/operations/operation-without-servers");
const patch_todos_1 = require("../../__fixtures__/operations/patch-todos");
const put_todos_1 = require("../../__fixtures__/operations/put-todos");
const referenced_body_1 = require("../../__fixtures__/operations/referenced-body");
const request_body_1 = require("../../__fixtures__/operations/request-body");
const request_body_empty_schema_1 = require("../../__fixtures__/operations/request-body-empty-schema");
const securedOperation_1 = require("../../__fixtures__/operations/securedOperation");
const simple_get_1 = require("../../__fixtures__/operations/simple-get");
const urlencoded_post_1 = require("../../__fixtures__/operations/urlencoded-post");
const with_url_variables_1 = require("../../__fixtures__/operations/with-url-variables");
const InlineRefResolver_1 = require("../../context/InlineRefResolver");
const Persistence_1 = require("../../context/Persistence");
const withMosaicProvider_1 = require("../../hoc/withMosaicProvider");
const chooseOption_1 = require("../../utils/tests/chooseOption");
const index_1 = require("./index");
function clickSend() {
    const button = dom_1.screen.getByRole('button', { name: /send/i });
    user_event_1.default.click(button);
}
const TryItWithPersistence = withMosaicProvider_1.withMosaicProvider(Persistence_1.withPersistenceBoundary(index_1.TryIt));
describe('TryIt', () => {
    beforeEach(() => {
        jest_fetch_mock_1.default.resetMocks();
        localStorage.clear();
    });
    it("Doesn't crash", () => {
        react_1.render(React.createElement(TryItWithPersistence, { httpOperation: simple_get_1.operation }));
    });
    it('Makes the correct basic request', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        react_1.render(React.createElement(TryItWithPersistence, { httpOperation: simple_get_1.operation }));
        const button = dom_1.screen.getByRole('button', { name: /send/i });
        user_event_1.default.click(button);
        yield dom_1.waitFor(() => expect(jest_fetch_mock_1.default).toHaveBeenCalled());
        expect(jest_fetch_mock_1.default.mock.calls[0][0]).toBe('https://todos.stoplight.io/todos');
        const requestInit = jest_fetch_mock_1.default.mock.calls[0][1];
        expect(requestInit.method).toMatch(/^get$/i);
        const headers = new Headers(requestInit.headers);
        expect(headers.get('Content-Type')).toBe('application/json');
    }));
    it('replaces url variables with default values when making request', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        react_1.render(React.createElement(TryItWithPersistence, { httpOperation: with_url_variables_1.operationWithUrlVariables }));
        const button = dom_1.screen.getByRole('button', { name: /send/i });
        user_event_1.default.click(button);
        yield dom_1.waitFor(() => expect(jest_fetch_mock_1.default).toHaveBeenCalled());
        expect(jest_fetch_mock_1.default.mock.calls[0][0]).toBe('ftp://default-namespace.stoplight.io/todos');
    }));
    it('makes request to origin URL if there is no URL in the document', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        react_1.render(React.createElement(TryItWithPersistence, { httpOperation: operation_without_servers_1.operation }));
        const button = dom_1.screen.getByRole('button', { name: /send/i });
        user_event_1.default.click(button);
        yield dom_1.waitFor(() => expect(jest_fetch_mock_1.default).toHaveBeenCalled());
        expect(jest_fetch_mock_1.default.mock.calls[0][0]).toBe('http://localhost/todos');
    }));
    it('Displays response', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        jest_fetch_mock_1.default.mockResolvedValue(new Response('{}', {
            status: 200,
            statusText: 'OK',
            headers: [],
        }));
        react_1.render(React.createElement(TryItWithPersistence, { httpOperation: simple_get_1.operation }));
        let responseHeader = dom_1.screen.queryByText('Response');
        expect(responseHeader).not.toBeInTheDocument();
        clickSend();
        responseHeader = yield dom_1.screen.findByText('Response');
        expect(responseHeader).toBeVisible();
    }));
    it('displays raw text response', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        jest_fetch_mock_1.default.mockResolvedValue(new Response('awesome response, but hardly a json one', {
            status: 200,
            statusText: 'OK',
            headers: [],
        }));
        const { container } = react_1.render(React.createElement(TryItWithPersistence, { httpOperation: simple_get_1.operation }));
        clickSend();
        yield dom_1.screen.findByText('Response');
        expect(container).toHaveTextContent('awesome response, but hardly a json one');
    }));
    it('Handles error', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        jest_fetch_mock_1.default.mockReject(new Error('sample error'));
        react_1.render(React.createElement(TryItWithPersistence, { httpOperation: simple_get_1.operation }));
        let errorHeader = dom_1.screen.queryByText('Error');
        expect(errorHeader).not.toBeInTheDocument();
        clickSend();
        errorHeader = yield dom_1.screen.findByText('Error');
        expect(errorHeader).toBeVisible();
        const responseHeader = dom_1.screen.queryByText('Response');
        expect(responseHeader).not.toBeInTheDocument();
    }));
    describe('Parameter Handling', () => {
        it('Hides panel when there are no parameters', () => {
            react_1.render(React.createElement(TryItWithPersistence, { httpOperation: simple_get_1.operation }));
            let parametersHeader = dom_1.screen.queryByText('Parameters');
            expect(parametersHeader).not.toBeInTheDocument();
        });
        it('Shows panel when there are parameters', () => {
            react_1.render(React.createElement(TryItWithPersistence, { httpOperation: put_todos_1.httpOperation }));
            let parametersHeader = dom_1.screen.queryByText('Parameters');
            expect(parametersHeader).toBeInTheDocument();
        });
        describe('Sorts parameters alphabetically', () => {
            it('by type and put required one on top for each type', () => {
                const names = [
                    'todoId*',
                    'anotherId',
                    'bAnotherId',
                    'limit*',
                    'super_duper_long_parameter_name_with_unnecessary_text*',
                    'completed',
                    'items',
                    'optional_value_with_default',
                    'type',
                    'value',
                    'message-id*',
                    'account-id',
                    'b-account-id',
                ];
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: operation_parameters_1.httpOperation }));
                const params = dom_1.screen.queryAllByTestId('param-label').map(element => element.textContent);
                expect(params).toEqual(names);
            });
        });
        it('Displays types correctly', () => {
            react_1.render(React.createElement(TryItWithPersistence, { httpOperation: put_todos_1.httpOperation }));
            const todoIdField = dom_1.screen.getByLabelText('todoId');
            expect(todoIdField.placeholder).toMatch(/string/i);
        });
        it('Initializes parameters correctly', () => {
            react_1.render(React.createElement(TryItWithPersistence, { httpOperation: put_todos_1.httpOperation }));
            const completedField = dom_1.screen.getByLabelText('completed');
            expect(completedField).toHaveValue('');
            const limitField = dom_1.screen.getByLabelText('limit');
            expect(limitField).toHaveTextContent('1');
            const typeField = dom_1.screen.getByLabelText('type');
            expect(typeField).toHaveTextContent('something');
            const optionalWithDefaultField = dom_1.screen.getByLabelText('optional_value_with_default');
            expect(optionalWithDefaultField).toHaveValue('');
            expect(optionalWithDefaultField.placeholder).toBe('example: some default value');
            const valueField = dom_1.screen.getByLabelText('value');
            expect(valueField).toHaveTextContent('1');
            const accountIdField = dom_1.screen.getByLabelText('account-id');
            expect(accountIdField).toHaveValue('example id');
            expect(accountIdField.placeholder).toBe('example: example id');
            const messageIdField = dom_1.screen.getByLabelText('message-id');
            expect(messageIdField).toHaveValue('example value');
        });
        it('Passes all parameters to the request', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            react_1.render(React.createElement(TryItWithPersistence, { httpOperation: put_todos_1.httpOperation }));
            const todoIdField = dom_1.screen.getByLabelText('todoId');
            yield user_event_1.default.type(todoIdField, '123');
            const limitField = dom_1.screen.getByLabelText('limit');
            chooseOption_1.chooseOption(limitField, '3');
            const typeField = dom_1.screen.getByLabelText('type');
            chooseOption_1.chooseOption(typeField, 'another');
            const accountIdField = dom_1.screen.getByLabelText('account-id');
            yield user_event_1.default.type(accountIdField, ' 1999');
            const messageIdField = dom_1.screen.getByLabelText('message-id-select');
            chooseOption_1.chooseOption(messageIdField, 'example 2');
            clickSend();
            yield dom_1.waitFor(() => expect(jest_fetch_mock_1.default).toHaveBeenCalled());
            const url = new URL(jest_fetch_mock_1.default.mock.calls[0][0]);
            expect(url.pathname.endsWith('123'));
            const queryParams = url.searchParams;
            expect(queryParams.get('limit')).toBe('3');
            expect(queryParams.get('value')).toBe('1');
            expect(queryParams.get('type')).toBe('another');
            const headers = new Headers(jest_fetch_mock_1.default.mock.calls[0][1].headers);
            expect(headers.get('Content-Type')).toBe('application/json');
            expect(headers.get('account-id')).toBe('example id 1999');
            expect(headers.get('message-id')).toBe('another example');
        }));
        it('Persists parameter values between operations', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const { rerender } = react_1.render(React.createElement(Persistence_1.PersistenceContextProvider, null,
                React.createElement(index_1.TryIt, { httpOperation: put_todos_1.httpOperation })));
            const todoIdField = dom_1.screen.getByLabelText('todoId');
            yield user_event_1.default.type(todoIdField, '123');
            rerender(React.createElement(Persistence_1.PersistenceContextProvider, null,
                React.createElement("div", null)));
            const alternativeSchema = {
                id: 'patch',
                method: 'patch',
                path: '/todos/{todoId}',
                responses: [],
                servers: [
                    {
                        url: 'https://todos.stoplight.io',
                    },
                ],
                request: {
                    path: [
                        {
                            schema: {
                                type: 'string',
                            },
                            name: 'todoId',
                            style: types_1.HttpParamStyles.Simple,
                            required: true,
                        },
                    ],
                },
            };
            rerender(React.createElement(Persistence_1.PersistenceContextProvider, null,
                React.createElement(index_1.TryIt, { httpOperation: alternativeSchema })));
            expect(dom_1.screen.getByLabelText('todoId')).toHaveValue('123');
        }));
    });
    describe('Form Data Body', () => {
        it('Hides panel when there are no parameters', () => {
            react_1.render(React.createElement(TryItWithPersistence, { httpOperation: simple_get_1.operation }));
            let parametersHeader = dom_1.screen.queryByText('Body');
            expect(parametersHeader).not.toBeInTheDocument();
        });
        it('Shows panel when there are parameters', () => {
            react_1.render(React.createElement(TryItWithPersistence, { httpOperation: urlencoded_post_1.httpOperation }));
            let parametersHeader = dom_1.screen.queryByText('Body');
            expect(parametersHeader).toBeInTheDocument();
        });
        it('Displays types correctly', () => {
            react_1.render(React.createElement(TryItWithPersistence, { httpOperation: urlencoded_post_1.httpOperation }));
            const nameField = dom_1.screen.getByRole('textbox', { name: 'name' });
            expect(nameField.placeholder).toMatch(/string/i);
            const completedField = dom_1.screen.getByLabelText('completed');
            expect(completedField).toBeInTheDocument();
        });
        const formDataCases = [
            ['application/x-www-form-urlencoded', URLSearchParams, urlencoded_post_1.httpOperation],
            ['multipart/form-data', FormData, multipart_formdata_post_1.httpOperation],
        ];
        describe.each(formDataCases)('Builds correct %p request', (mimeType, prototype, fixture) => {
            let body;
            let headers;
            beforeAll(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: fixture }));
                const nameField = dom_1.screen.getByRole('textbox', { name: 'name' });
                yield user_event_1.default.type(nameField, 'some-name');
                clickSend();
                yield dom_1.waitFor(() => expect(jest_fetch_mock_1.default).toHaveBeenCalled());
                expect(jest_fetch_mock_1.default).toHaveBeenCalledTimes(1);
                body = jest_fetch_mock_1.default.mock.calls[0][1].body;
                headers = new Headers(jest_fetch_mock_1.default.mock.calls[0][1].headers);
                expect(body).toBeInstanceOf(prototype);
            }));
            it('Sets correct content type', () => {
                expect(headers.get('Content-Type')).toBe(mimeType);
            });
            it('Sends user input', () => {
                expect(body.get('name')).toBe('some-name');
            });
            it('Includes untouched fields', () => {
                expect(body.get('completed')).toBe('');
            });
            it('Sets untouched enums to their first value', () => {
                expect(body.get('someEnum')).toBe('a');
            });
        });
        describe('File Upload', () => {
            it('displays the name of the imported file in the string input', () => {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: multipart_formdata_post_1.httpOperation }));
                user_event_1.default.upload(dom_1.screen.getByLabelText('Upload'), new File(['something'], 'some-file'));
                expect(dom_1.screen.getByLabelText('someFile')).toHaveValue('some-file');
            });
            it('allows to remove file after importing it', () => {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: multipart_formdata_post_1.httpOperation }));
                user_event_1.default.upload(dom_1.screen.getByLabelText('Upload'), new File(['something'], 'some-file'));
                user_event_1.default.click(dom_1.screen.getByLabelText('Remove file'));
                expect(dom_1.screen.getByLabelText('someFile')).not.toHaveValue();
            });
            it('allows to upload file in multipart request', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: multipart_formdata_post_1.httpOperation }));
                user_event_1.default.upload(dom_1.screen.getByLabelText('Upload'), new File(['something'], 'some-file'));
                clickSend();
                yield dom_1.waitFor(() => expect(jest_fetch_mock_1.default).toHaveBeenCalled());
                const body = jest_fetch_mock_1.default.mock.calls[0][1].body;
                expect(body.get('someFile')).toBeInstanceOf(File);
                expect(body.get('someFile').name).toBe('some-file');
            }));
            it('allows to upload file in base64 format in multipart request', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: base64_file_upload_1.httpOperation }));
                user_event_1.default.upload(dom_1.screen.getByLabelText('Upload'), new File(['something'], 'some-file'));
                clickSend();
                yield dom_1.waitFor(() => expect(jest_fetch_mock_1.default).toHaveBeenCalled());
                const body = jest_fetch_mock_1.default.mock.calls[0][1].body;
                expect(body.get('someFile')).toBe('c29tZXRoaW5n');
            }));
        });
    });
    describe('Text Request Body', () => {
        describe('is attached', () => {
            it('to operation with PATCH method', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: patch_todos_1.patchWithRequestBody }));
                clickSend();
                yield dom_1.waitFor(() => expect(jest_fetch_mock_1.default).toHaveBeenCalled());
                expect(jest_fetch_mock_1.default.mock.calls[0][1].body).toEqual(expect.stringMatching(/{.*}/s));
            }));
        });
        describe('is not attached', () => {
            it('to operation with HEAD method', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: head_todos_1.headWithRequestBody }));
                clickSend();
                yield dom_1.waitFor(() => expect(jest_fetch_mock_1.default).toHaveBeenCalled());
                expect(typeof jest_fetch_mock_1.default.mock.calls[0][1].body).not.toBe('string');
            }));
        });
        describe('when no request body examples', () => {
            it('hides panel when there is no schema for request body', () => {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: simple_get_1.operation }));
                let bodyHeader = dom_1.screen.queryByText('Body');
                expect(bodyHeader).not.toBeInTheDocument();
            });
            it('statically generates request body basing on request body schema', () => {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: request_body_1.requestBody }));
                let bodyHeader = dom_1.screen.queryByText('Body');
                expect(bodyHeader).toBeInTheDocument();
                expect(JSON.parse(dom_1.screen.getByRole('textbox').textContent || '')).toEqual({ name: 'string', age: 0 });
            });
            it('does not generate request body from schema when schema is empty', () => {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: request_body_empty_schema_1.requestBodyEmptySchema }));
                let bodyHeader = dom_1.screen.queryByText('Body');
                expect(bodyHeader).toBeInTheDocument();
                expect(dom_1.screen.getByRole('textbox')).toHaveTextContent('');
            });
        });
        describe('when there are request body examples', () => {
            let examplesItems = ['example-1', 'named example', 'example-3'];
            it("is populated to first example if there's one", () => {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: examples_request_body_1.examplesRequestBody }));
                expect(JSON.parse(dom_1.screen.getByRole('textbox').textContent || '')).toEqual({
                    name: 'Andrew',
                    age: 19,
                    trial: true,
                });
            });
            it('resets the textbox after httpOperation change', () => {
                const { rerender } = react_1.render(React.createElement(TryItWithPersistence, { httpOperation: examples_request_body_1.examplesRequestBody }));
                const textbox = dom_1.screen.getByRole('textbox');
                user_event_1.default.type(textbox, 'asd');
                rerender(React.createElement(TryItWithPersistence, { httpOperation: request_body_1.requestBody }));
                dom_1.waitFor(() => expect(textbox).toHaveTextContent('{"name":"string","age":0}'));
            });
            it('allows users to choose request body examples from spec using dropdown menu', () => {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: examples_request_body_1.examplesRequestBody }));
                let examplesButton = dom_1.screen.getByRole('button', { name: 'Examples' });
                user_event_1.default.click(examplesButton);
                let examples = dom_1.screen.getAllByRole('menuitem').map(el => el.textContent);
                expect(examples).toEqual(examplesItems);
                user_event_1.default.click(dom_1.screen.getByRole('menuitem', { name: 'named example' }));
                expect(JSON.parse(dom_1.screen.getByRole('textbox').textContent || '')).toEqual({
                    name: 'Jane',
                    age: 36,
                    trial: false,
                });
            });
            it('restarts modified example in CodeEditor to initial value after choosing it again', () => {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: examples_request_body_1.examplesRequestBody }));
                let examplesButton = dom_1.screen.getByRole('button', { name: 'Examples' });
                const bodyTextBox = dom_1.screen.getByRole('textbox');
                user_event_1.default.type(bodyTextBox, 'I broke the test. Oh noooo... :(');
                expect(bodyTextBox).toHaveTextContent('I broke the test. Oh noooo... :(');
                user_event_1.default.click(examplesButton);
                user_event_1.default.click(dom_1.screen.getByRole('menuitem', { name: 'example-1' }));
                expect(JSON.parse(dom_1.screen.getByRole('textbox').textContent || '')).toEqual({
                    name: 'Andrew',
                    age: 19,
                    trial: true,
                });
            });
            it('sends a request with request body from example', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                const json = {
                    name: 'Andrew',
                    age: 19,
                    trial: true,
                };
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: examples_request_body_1.examplesRequestBody }));
                expect(JSON.parse(dom_1.screen.getByRole('textbox').textContent || '')).toEqual(json);
                clickSend();
                yield dom_1.waitFor(() => expect(jest_fetch_mock_1.default).toHaveBeenCalled());
                expect(JSON.parse(jest_fetch_mock_1.default.mock.calls[0][1].body)).toEqual(json);
            }));
        });
        describe('when there is only one example provided', () => {
            it('displays that only example body', () => {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: examples_request_body_1.singleExampleRequestBody }));
                expect(JSON.parse(dom_1.screen.getByRole('textbox').textContent || '')).toEqual({
                    name: 'Andrew',
                    age: 19,
                    trial: true,
                });
            });
            it('does not display select to choose examples', () => {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: examples_request_body_1.singleExampleRequestBody }));
                let examplesButton = dom_1.screen.queryByRole('button', { name: 'Examples' });
                expect(examplesButton).not.toBeInTheDocument();
            });
        });
    });
    describe('Mocking', () => {
        it('Shows mock button', () => {
            react_1.render(React.createElement(TryItWithPersistence, { httpOperation: simple_get_1.operation, showMocking: true }));
            const mockingButton = dom_1.screen.getByRole('button', { name: /mocking/i });
            expect(mockingButton).toBeInTheDocument();
        });
        it('Invokes request with mocked data', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            react_1.render(React.createElement(TryItWithPersistence, { httpOperation: simple_get_1.operation, showMocking: true, mockUrl: "https://mock-todos.stoplight.io" }));
            const mockingButton = dom_1.screen.getByRole('button', { name: /mocking/i });
            user_event_1.default.click(mockingButton);
            let enableItem = yield dom_1.screen.findByText('Enabled');
            const responseCodeItem = dom_1.screen.getByText('200');
            expect(enableItem).toBeInTheDocument();
            expect(responseCodeItem).toBeInTheDocument();
            user_event_1.default.click(enableItem);
            user_event_1.default.click(responseCodeItem);
            clickSend();
            yield dom_1.waitFor(() => expect(dom_1.screen.getByRole('button', { name: /send/i })).toBeEnabled());
            yield dom_1.waitFor(() => expect(jest_fetch_mock_1.default).toHaveBeenCalledTimes(1));
            user_event_1.default.click(mockingButton);
            enableItem = yield dom_1.screen.findByRole('menuitem', { name: /enabled/i });
            user_event_1.default.click(enableItem);
            clickSend();
            yield dom_1.waitFor(() => expect(jest_fetch_mock_1.default).toHaveBeenCalledTimes(2));
            expect(jest_fetch_mock_1.default).toHaveBeenCalledTimes(2);
            expect(jest_fetch_mock_1.default.mock.calls).toEqual([
                [
                    'https://mock-todos.stoplight.io/todos',
                    expect.objectContaining({
                        method: 'get',
                        headers: {
                            'Content-Type': 'application/json',
                            Prefer: 'code=200',
                        },
                    }),
                ],
                [
                    'https://todos.stoplight.io/todos',
                    expect.objectContaining({
                        method: 'get',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }),
                ],
            ]);
        }));
        it('Persists mocking options between operations', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const { rerender } = react_1.render(React.createElement(Persistence_1.PersistenceContextProvider, null,
                React.createElement(index_1.TryIt, { httpOperation: put_todos_1.httpOperation, showMocking: true, mockUrl: "https://mock-todos.stoplight.io" })));
            const mockingButton = dom_1.screen.getByRole('button', { name: /mocking/i });
            user_event_1.default.click(mockingButton);
            const enableItem = dom_1.screen.getByText('Enabled');
            const responseCodeItem = dom_1.screen.getByText('200');
            user_event_1.default.click(enableItem);
            user_event_1.default.click(responseCodeItem);
            rerender(React.createElement(Persistence_1.PersistenceContextProvider, null,
                React.createElement("div", null)));
            rerender(React.createElement(Persistence_1.PersistenceContextProvider, null,
                React.createElement(index_1.TryIt, { httpOperation: simple_get_1.operation, showMocking: true, mockUrl: "https://mock-todos.stoplight.io" })));
            clickSend();
            yield dom_1.waitFor(() => expect(jest_fetch_mock_1.default).toHaveBeenCalled());
            expect(jest_fetch_mock_1.default).toBeCalledWith('https://mock-todos.stoplight.io/todos', expect.objectContaining({
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    Prefer: 'code=200',
                },
            }));
        }));
    });
    describe('Authentication', () => {
        describe('Panel', () => {
            it('is displayed if operation has a security', () => {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: put_todos_1.httpOperation }));
                let authPanel = dom_1.screen.getByText('Auth');
                expect(authPanel).toBeInTheDocument();
            });
            it('does not crash when operation security section is an empty array', () => {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: securedOperation_1.emptySecurityOperation }));
                let authPanel = dom_1.screen.queryByText('Auth');
                expect(authPanel).not.toBeInTheDocument();
            });
            it("does not show up the Security Schemes select if there's only one schema", () => {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: securedOperation_1.singleSecurityOperation }));
                let securitySchemesMenu = dom_1.screen.queryByText('Security Schemes');
                expect(securitySchemesMenu).not.toBeInTheDocument();
            });
            it('allows to select a security schemes from dropdown menu', () => {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: put_todos_1.httpOperation }));
                const securitySchemesButton = dom_1.screen.getByRole('button', { name: 'API Key' });
                user_event_1.default.click(securitySchemesButton);
                const securitySchemes = dom_1.screen.getByRole('menuitem', { name: 'OAuth 2.0' });
                user_event_1.default.click(securitySchemes);
                const HttpSchemesButton = dom_1.screen.queryByRole('button', { name: 'OAuth 2.0' });
                expect(HttpSchemesButton).toBeInTheDocument();
            });
            it('preserves state when changing schemes', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: put_todos_1.httpOperation }));
                let APIKeyField = dom_1.screen.getByLabelText('API Key');
                yield user_event_1.default.type(APIKeyField, '123');
                let securitySchemesButton = dom_1.screen.getByRole('button', { name: 'API Key' });
                user_event_1.default.click(securitySchemesButton);
                let securitySchemes = dom_1.screen.getByRole('menuitem', { name: 'OAuth 2.0' });
                user_event_1.default.click(securitySchemes);
                securitySchemesButton = dom_1.screen.getByRole('button', { name: 'OAuth 2.0' });
                user_event_1.default.click(securitySchemesButton);
                securitySchemes = dom_1.screen.getByRole('menuitem', { name: 'API Key' });
                user_event_1.default.click(securitySchemes);
                APIKeyField = dom_1.screen.getByLabelText('API Key');
                expect(APIKeyField).toHaveValue('123');
            }));
            it('preserves the state when rerendering component', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: put_todos_1.httpOperation }));
                let APIKeyField = dom_1.screen.getByLabelText('API Key');
                yield user_event_1.default.type(APIKeyField, '123');
                react_1.cleanup();
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: put_todos_1.httpOperation }));
                APIKeyField = dom_1.screen.getByLabelText('API Key');
                expect(APIKeyField).toHaveValue('123');
            }));
        });
        describe('API Key component', () => {
            it('is displayed for security of that type', () => {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: put_todos_1.httpOperation }));
                const APIKeyName = dom_1.screen.getByLabelText('API Key');
                expect(APIKeyName).toBeInTheDocument();
            });
            it('removes duplicated parameters', () => {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: securedOperation_1.duplicatedSecurityScheme }));
                const queryParam = dom_1.screen.queryByLabelText('api-key');
                expect(queryParam).not.toBeInTheDocument();
                const header = dom_1.screen.queryByLabelText('Api-KeY');
                expect(header).not.toBeInTheDocument();
            });
            it('attaches auth token as a query parameter', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: securedOperation_1.duplicatedSecurityScheme }));
                const APIKeyField = dom_1.screen.getByLabelText('API-Key');
                yield user_event_1.default.type(APIKeyField, '123');
                clickSend();
                yield dom_1.waitFor(() => expect(jest_fetch_mock_1.default).toHaveBeenCalled());
                const url = new URL(jest_fetch_mock_1.default.mock.calls[0][0]);
                const queryParams = url.searchParams;
                const headers = new Headers(jest_fetch_mock_1.default.mock.calls[0][1].headers);
                expect(queryParams.get('API-Key')).toBe('123');
                expect(queryParams.get('api-key')).toBeNull();
                expect(headers.get('Api-KeY')).toBeNull();
            }));
            it('attaches auth token as a header', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: securedOperation_1.singleSecurityOperation }));
                const APIKeyField = dom_1.screen.getByLabelText('API-Key');
                yield user_event_1.default.type(APIKeyField, '123');
                clickSend();
                yield dom_1.waitFor(() => expect(jest_fetch_mock_1.default).toHaveBeenCalled());
                const headers = new Headers(jest_fetch_mock_1.default.mock.calls[0][1].headers);
                expect(headers.get('API-Key')).toBe('123');
            }));
        });
        describe('OAuth2 Component', () => {
            it('allows to send a OAuth2 request', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: put_todos_1.httpOperation }));
                const securitySchemesButton = dom_1.screen.getByRole('button', { name: 'API Key' });
                user_event_1.default.click(securitySchemesButton);
                const securitySchemes = dom_1.screen.getByRole('menuitem', { name: 'OAuth 2.0' });
                user_event_1.default.click(securitySchemes);
                const tokenInput = dom_1.screen.getByLabelText('Token');
                yield user_event_1.default.type(tokenInput, 'Bearer 0a1b2c');
                clickSend();
                yield dom_1.waitFor(() => expect(jest_fetch_mock_1.default).toHaveBeenCalled());
                const headers = new Headers(jest_fetch_mock_1.default.mock.calls[0][1].headers);
                expect(headers.get('Authorization')).toBe('Bearer 0a1b2c');
            }));
            it('does not include header parameters conflicting with OAuth2 scheme', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: securedOperation_1.duplicatedSecurityScheme }));
                const header = dom_1.screen.queryByLabelText('authorization');
                expect(header).not.toBeInTheDocument();
            }));
        });
        describe('Basic Auth Component', () => {
            it('allows to send a Basic Auth request', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: put_todos_1.httpOperation }));
                const securitySchemesButton = dom_1.screen.getByRole('button', { name: 'API Key' });
                user_event_1.default.click(securitySchemesButton);
                const securitySchemes = dom_1.screen.getByRole('menuitem', { name: 'Basic Auth' });
                user_event_1.default.click(securitySchemes);
                const usernameInput = dom_1.screen.getByLabelText('Username');
                const passwordInput = dom_1.screen.getByLabelText('Password');
                yield user_event_1.default.type(usernameInput, 'user');
                yield user_event_1.default.type(passwordInput, 'password');
                clickSend();
                yield dom_1.waitFor(() => expect(jest_fetch_mock_1.default).toHaveBeenCalled());
                const headers = new Headers(jest_fetch_mock_1.default.mock.calls[0][1].headers);
                expect(headers.get('Authorization')).toBe('Basic dXNlcjpwYXNzd29yZA==');
            }));
        });
        describe('Bearer Auth Component', () => {
            it('allows to send a Bearer Auth request', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                react_1.render(React.createElement(TryItWithPersistence, { httpOperation: put_todos_1.httpOperation }));
                const securitySchemesButton = dom_1.screen.getByRole('button', { name: 'API Key' });
                user_event_1.default.click(securitySchemesButton);
                const securitySchemes = dom_1.screen.getByRole('menuitem', { name: 'Bearer Auth' });
                user_event_1.default.click(securitySchemes);
                const tokenInput = dom_1.screen.getByLabelText('Token');
                yield user_event_1.default.type(tokenInput, '0a1b2c');
                clickSend();
                yield dom_1.waitFor(() => expect(jest_fetch_mock_1.default).toHaveBeenCalled());
                const headers = new Headers(jest_fetch_mock_1.default.mock.calls[0][1].headers);
                expect(headers.get('Authorization')).toBe('Bearer 0a1b2c');
            }));
        });
    });
    describe('Ref resolving', () => {
        it('generates sample body from refed parameter', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            react_1.render(React.createElement(InlineRefResolver_1.InlineRefResolverProvider, { document: referenced_body_1.httpOperation },
                React.createElement(TryItWithPersistence, { httpOperation: referenced_body_1.httpOperation })));
            clickSend();
            yield dom_1.waitFor(() => expect(jest_fetch_mock_1.default).toHaveBeenCalled());
            expect(JSON.parse(jest_fetch_mock_1.default.mock.calls[0][1].body)).toEqual({ name: 'string', completed: true });
        }));
    });
});
//# sourceMappingURL=TryIt.spec.js.map