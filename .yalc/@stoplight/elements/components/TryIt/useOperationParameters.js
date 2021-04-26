"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRequestParameters = void 0;
const tslib_1 = require("tslib");
const jotai_1 = require("jotai");
const lodash_1 = require("lodash");
const React = tslib_1.__importStar(require("react"));
const authentication_utils_1 = require("./authentication-utils");
const parameter_utils_1 = require("./parameter-utils");
const persistedParameterValuesAtom = jotai_1.atom({});
const useRequestParameters = (httpOperation) => {
    const [persistedParameterValues, setPersistedParameterValues] = jotai_1.useAtom(persistedParameterValuesAtom);
    const allParameters = React.useMemo(() => extractAllParameters(httpOperation), [httpOperation]);
    const parameterDefaultValues = React.useMemo(() => parameter_utils_1.initialParameterValues(allParameters), [allParameters]);
    const updateParameterValue = (name, value) => {
        const defaultValue = parameterDefaultValues[name];
        setPersistedParameterValues(prevState => {
            const valueToSave = value === defaultValue ? undefined : value;
            if (prevState[name] !== valueToSave) {
                return Object.assign(Object.assign({}, prevState), { [name]: valueToSave });
            }
            return prevState;
        });
    };
    const parameterValuesWithDefaults = React.useMemo(() => Object.fromEntries(allParameters.map(parameter => {
        var _a;
        return [
            parameter.name,
            (_a = persistedParameterValues[parameter.name]) !== null && _a !== void 0 ? _a : parameterDefaultValues[parameter.name],
        ];
    })), [allParameters, persistedParameterValues, parameterDefaultValues]);
    return {
        allParameters,
        parameterValuesWithDefaults,
        updateParameterValue,
    };
};
exports.useRequestParameters = useRequestParameters;
function extractAllParameters(httpOperation) {
    var _a, _b, _c, _d, _e, _f;
    const getRequired = (obj) => { var _a; return (_a = obj.required) !== null && _a !== void 0 ? _a : false; };
    const pathParameters = lodash_1.orderBy((_b = (_a = httpOperation.request) === null || _a === void 0 ? void 0 : _a.path) !== null && _b !== void 0 ? _b : [], [getRequired, 'name'], ['desc', 'asc']);
    const queryParameters = authentication_utils_1.filterOutAuthorizationParams(lodash_1.orderBy((_d = (_c = httpOperation.request) === null || _c === void 0 ? void 0 : _c.query) !== null && _d !== void 0 ? _d : [], [getRequired, 'name'], ['desc', 'asc']), httpOperation.security);
    const headerParameters = authentication_utils_1.filterOutAuthorizationParams(lodash_1.orderBy((_f = (_e = httpOperation.request) === null || _e === void 0 ? void 0 : _e.headers) !== null && _f !== void 0 ? _f : [], [getRequired, 'name'], ['desc', 'asc']), httpOperation.security);
    return lodash_1.uniqBy([...pathParameters, ...queryParameters, ...headerParameters], p => p.name);
}
//# sourceMappingURL=useOperationParameters.js.map