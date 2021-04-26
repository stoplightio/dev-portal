"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const types_1 = require("@stoplight/types");
const react_hooks_1 = require("@testing-library/react-hooks");
const useDereferencedHttpOperation_1 = require("./useDereferencedHttpOperation");
jest.mock('@stoplight/json-schema-ref-parser', () => ({
    __esModule: true,
    default: {
        dereference: (input) => new Promise((resolve, reject) => {
            setTimeout(() => {
                if ('__error' in input) {
                    reject({
                        files: {
                            schema: Object.assign(Object.assign({}, input), { __errored: true }),
                        },
                    });
                }
                else {
                    resolve(Object.assign(Object.assign({}, input), { __dereferenced: true }));
                }
            }, 100);
        }),
    },
}));
const simpleHttpOperation = { method: 'get', path: '/', id: 'abc', responses: [] };
const simpleParsedNode = { type: types_1.NodeType.HttpOperation, data: simpleHttpOperation };
describe('useDereferencedData', () => {
    it('provides the input value before dereferencing happens', () => {
        var _a;
        const input = simpleParsedNode;
        const { result } = react_hooks_1.renderHook(() => useDereferencedHttpOperation_1.useDereferencedHttpOperation(input));
        expect((_a = result.current) === null || _a === void 0 ? void 0 : _a.data).toEqual(input.data);
    });
    it('uses ref parser correctly', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const input = simpleParsedNode;
        const { result, waitForNextUpdate } = react_hooks_1.renderHook(() => useDereferencedHttpOperation_1.useDereferencedHttpOperation(simpleParsedNode));
        yield waitForNextUpdate({ timeout: 300 });
        expect((_a = result.current) === null || _a === void 0 ? void 0 : _a.data).toEqual(Object.assign(Object.assign({}, input.data), { __dereferenced: true }));
    }));
    it('handles dereferencing errors', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        var _b;
        const input = { type: types_1.NodeType.HttpOperation, data: Object.assign(Object.assign({}, simpleHttpOperation), { __error: true }) };
        const { result, waitForNextUpdate } = react_hooks_1.renderHook(() => useDereferencedHttpOperation_1.useDereferencedHttpOperation(input));
        yield waitForNextUpdate({ timeout: 300 });
        expect((_b = result.current) === null || _b === void 0 ? void 0 : _b.data).toEqual(Object.assign(Object.assign({}, input.data), { __errored: true }));
    }));
    it('is not prone to race conditions', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        let input = simpleParsedNode;
        const { result, waitForNextUpdate, rerender } = react_hooks_1.renderHook(() => useDereferencedHttpOperation_1.useDereferencedHttpOperation(input));
        input = { type: types_1.NodeType.Article, data: 'Some **markdown**' };
        rerender();
        expect(result.current).toMatchObject({ type: 'article' });
        yield expect(waitForNextUpdate({ timeout: 300 })).rejects.toBeInstanceOf(Error);
    }));
});
//# sourceMappingURL=useDereferencedHttpOperation.spec.js.map