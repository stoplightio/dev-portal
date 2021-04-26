"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("@testing-library/react");
const user_event_1 = tslib_1.__importDefault(require("@testing-library/user-event"));
const React = tslib_1.__importStar(require("react"));
const put_todos_1 = require("../../__fixtures__/operations/put-todos");
const Persistence_1 = require("../../context/Persistence");
const TryItWithRequestSamples_1 = require("./TryItWithRequestSamples");
const TryItWithRequestSamples = Persistence_1.withPersistenceBoundary(TryItWithRequestSamples_1.TryItWithRequestSamples);
describe('TryItWithRequestSamples', () => {
    it('displays RequestSamples', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        react_1.render(React.createElement(TryItWithRequestSamples, { httpOperation: put_todos_1.httpOperation }));
        expect(yield react_1.screen.findByText('Request Sample: Shell / cURL')).toBeVisible();
        const codeViewer = yield react_1.screen.findByLabelText(/curl/);
        expect(codeViewer).toHaveTextContent(/PUT/i);
    }));
    it('reacts to parameter input', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        react_1.render(React.createElement(TryItWithRequestSamples, { httpOperation: put_todos_1.httpOperation }));
        const todoIdField = yield react_1.screen.findByLabelText('todoId');
        user_event_1.default.type(todoIdField, '123456789');
        const codeViewer = yield react_1.screen.findByLabelText(/curl/);
        yield react_1.waitFor(() => expect(codeViewer).toHaveTextContent(/todos\/123456789/));
    }));
    it('includes authentication data in request sample', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        react_1.render(React.createElement(TryItWithRequestSamples, { httpOperation: put_todos_1.httpOperation }));
        const apiKeyField = yield react_1.screen.findByLabelText('API Key');
        user_event_1.default.type(apiKeyField, '123456789');
        const codeViewer = yield react_1.screen.findByLabelText(/curl/);
        yield react_1.waitFor(() => expect(codeViewer).toHaveTextContent(/123456789/));
    }));
    it('displays parameter name for empty path parameter', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        react_1.render(React.createElement(TryItWithRequestSamples, { httpOperation: put_todos_1.httpOperation }));
        const codeViewer = yield react_1.screen.findByLabelText(/curl/);
        yield react_1.waitFor(() => expect(codeViewer).toHaveTextContent(/todos\/todoId/));
    }));
});
//# sourceMappingURL=TryItWithRequestSamples.spec.js.map