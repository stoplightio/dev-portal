"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapSchemaPropertiesToParameters = exports.initialParameterValues = exports.getPlaceholderForParameter = exports.parameterSupportsFileUpload = exports.exampleOptions = exports.selectExampleOption = exports.parameterOptions = void 0;
const json_1 = require("@stoplight/json");
const lodash_1 = require("lodash");
const fp_1 = require("lodash/fp");
const booleanOptions = [
    { label: 'Not Set', value: '' },
    { label: 'False', value: 'false' },
    { label: 'True', value: 'true' },
];
function parameterOptions(parameter) {
    var _a, _b;
    return ((_a = parameter.schema) === null || _a === void 0 ? void 0 : _a.type) === 'boolean'
        ? booleanOptions
        : ((_b = parameter.schema) === null || _b === void 0 ? void 0 : _b.enum) !== undefined
            ? lodash_1.map(parameter.schema.enum, v => ({ value: Number.isNaN(Number(v)) ? String(v) : Number(v) }))
            : null;
}
exports.parameterOptions = parameterOptions;
exports.selectExampleOption = { value: '', label: 'Pick an example' };
function exampleOptions(parameter) {
    var _a;
    return ((_a = parameter.examples) === null || _a === void 0 ? void 0 : _a.length) && parameter.examples.length > 1
        ? [
            exports.selectExampleOption,
            ...parameter.examples.map(example => ({ label: example.key, value: exampleValue(example) })),
        ]
        : null;
}
exports.exampleOptions = exampleOptions;
function parameterSupportsFileUpload(parameter) {
    var _a;
    return (((_a = parameter.schema) === null || _a === void 0 ? void 0 : _a.type) === 'string' &&
        parameter.schema.format !== undefined &&
        ['binary', 'base64'].includes(parameter.schema.format));
}
exports.parameterSupportsFileUpload = parameterSupportsFileUpload;
function exampleValue(example) {
    return 'value' in example ? String(example.value) : String(example.externalValue);
}
function getPlaceholderForParameter(parameter) {
    var _a, _b;
    const parameterValue = getValueForParameter(parameter);
    if (parameterValue)
        return `example: ${parameterValue}`;
    return parameterValue || String((_b = (_a = parameter.schema) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : '');
}
exports.getPlaceholderForParameter = getPlaceholderForParameter;
function retrieveDefaultFromSchema(parameter) {
    var _a;
    const defaultValue = (_a = parameter.schema) === null || _a === void 0 ? void 0 : _a.default;
    return lodash_1.isObject(defaultValue) ? json_1.safeStringify(defaultValue) : defaultValue;
}
const getValueForParameter = (parameter) => {
    var _a, _b, _c;
    const examples = (_a = parameter.examples) !== null && _a !== void 0 ? _a : [];
    if (examples.length > 0)
        return exampleValue(examples[0]);
    const defaultValue = retrieveDefaultFromSchema(parameter);
    if (defaultValue)
        return String(defaultValue);
    const enums = (_c = (_b = parameter.schema) === null || _b === void 0 ? void 0 : _b.enum) !== null && _c !== void 0 ? _c : [];
    if (enums.length > 0)
        return String(enums[0]);
    return '';
};
const getInitialValueForParameter = (parameter) => {
    var _a;
    const isRequired = !!parameter.required;
    const isEnum = !!((_a = parameter.schema) === null || _a === void 0 ? void 0 : _a.enum);
    if (!isEnum && !isRequired)
        return '';
    return getValueForParameter(parameter);
};
exports.initialParameterValues = fp_1.pipe(fp_1.keyBy((param) => param.name), fp_1.mapValues(getInitialValueForParameter));
function mapSchemaPropertiesToParameters(properties) {
    return Object.entries(properties).map(([name, schema]) => ({
        name,
        schema: typeof schema !== 'boolean' ? schema : undefined,
        examples: typeof schema !== 'boolean' && schema.examples ? [{ key: 'example', value: schema.examples }] : undefined,
    }));
}
exports.mapSchemaPropertiesToParameters = mapSchemaPropertiesToParameters;
//# sourceMappingURL=parameter-utils.js.map