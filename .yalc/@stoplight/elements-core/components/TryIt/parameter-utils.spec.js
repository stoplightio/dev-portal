"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const put_todos_1 = require("../../__fixtures__/operations/put-todos");
const parameter_utils_1 = require("./parameter-utils");
describe('Parameter Utils', () => {
    describe(parameter_utils_1.initialParameterValues.name, () => {
        it('should fill initial parameters', () => {
            var _a, _b, _c, _d, _e, _f;
            const allParameters = [
                ...((_b = (_a = put_todos_1.httpOperation.request) === null || _a === void 0 ? void 0 : _a.path) !== null && _b !== void 0 ? _b : []),
                ...((_d = (_c = put_todos_1.httpOperation.request) === null || _c === void 0 ? void 0 : _c.query) !== null && _d !== void 0 ? _d : []),
                ...((_f = (_e = put_todos_1.httpOperation.request) === null || _e === void 0 ? void 0 : _e.headers) !== null && _f !== void 0 ? _f : []),
            ];
            const parameters = parameter_utils_1.initialParameterValues(allParameters);
            expect(parameters).toMatchObject({
                limit: '1',
                type: 'something',
                value: '1',
                'account-id': 'example id',
                'message-id': 'example value',
            });
        });
    });
});
//# sourceMappingURL=parameter-utils.spec.js.map