"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parameter = exports.Parameters = void 0;
const tslib_1 = require("tslib");
const json_schema_viewer_1 = require("@stoplight/json-schema-viewer");
const mosaic_1 = require("@stoplight/mosaic");
const types_1 = require("@stoplight/types");
const lodash_1 = require("lodash");
const React = tslib_1.__importStar(require("react"));
const InlineRefResolver_1 = require("../../../context/InlineRefResolver");
const readableStyles = {
    [types_1.HttpParamStyles.PipeDelimited]: 'Pipe separated values',
    [types_1.HttpParamStyles.SpaceDelimited]: 'Space separated values',
    [types_1.HttpParamStyles.CommaDelimited]: 'Comma separated values',
    [types_1.HttpParamStyles.Simple]: 'Comma separated values',
    [types_1.HttpParamStyles.Matrix]: 'Path style values',
    [types_1.HttpParamStyles.Label]: 'Label style values',
    [types_1.HttpParamStyles.Form]: 'Form style values',
};
const defaultStyle = {
    query: types_1.HttpParamStyles.Form,
    header: types_1.HttpParamStyles.Simple,
    path: types_1.HttpParamStyles.Simple,
    cookie: types_1.HttpParamStyles.Form,
};
const Parameters = ({ parameters, parameterType }) => {
    const resolveRef = InlineRefResolver_1.useInlineRefResolver();
    if (!parameters || !parameters.length)
        return null;
    return (React.createElement(mosaic_1.VStack, { spacing: 2, divider: React.createElement(mosaic_1.Box, { borderT: true, borderColor: "light", w: "full" }) }, lodash_1.sortBy(parameters, ['required', 'name']).map(parameter => {
        var _a;
        const resolvedSchema = ((_a = parameter.schema) === null || _a === void 0 ? void 0 : _a.$ref) && resolveRef
            ? resolveRef({ pointer: parameter.schema.$ref, source: null }, null, {})
            : null;
        return (React.createElement(exports.Parameter, { key: parameter.name, parameter: resolvedSchema ? Object.assign(Object.assign({}, parameter), { schema: resolvedSchema }) : parameter, parameterType: parameterType }));
    })));
};
exports.Parameters = Parameters;
exports.Parameters.displayName = 'HttpOperation.Parameters';
const Parameter = ({ parameter, parameterType }) => {
    var _a;
    if (!parameter)
        return null;
    const description = lodash_1.get(parameter, 'description') || lodash_1.get(parameter, 'schema.description');
    const type = lodash_1.get(parameter, 'schema.type', 'unknown');
    const format = (_a = parameter.schema) === null || _a === void 0 ? void 0 : _a.format;
    const deprecated = lodash_1.get(parameter, 'deprecated') || lodash_1.get(parameter, 'schema.deprecated', false);
    const validations = lodash_1.omitBy(Object.assign(Object.assign({}, lodash_1.omit(parameter, ['name', 'required', 'deprecated', 'description', 'schema', 'style'])), lodash_1.omit(lodash_1.get(parameter, 'schema'), ['description', 'type', 'deprecated'])), value => typeof value === 'object' && lodash_1.isEmpty(value));
    return (React.createElement("div", { className: "HttpOperation__Parameters" },
        React.createElement("div", { className: "sl-flex sl-items-center sl-my-2" },
            React.createElement("div", { className: "sl-flex sl-items-baseline sl-text-base sl-flex-1" },
                React.createElement("div", { className: "sl-font-mono sl-font-bold" }, parameter.name),
                React.createElement("div", { className: 'ml-2 sl-text-muted' }, format ? `${type}<${format}>` : type)),
            React.createElement("div", { className: "sl-text-sm sl-text-warning" },
                deprecated && React.createElement("span", { className: "sl-ml-2" }, "deprecated"),
                parameter.required && React.createElement("span", { className: "sl-ml-2" }, "required"))),
        description && React.createElement("div", { className: "sl-w-full sl-text-muted sl-text-sm sl-my-2" }, description),
        React.createElement("div", { className: "sl-text-sm" },
            React.createElement(json_schema_viewer_1.Validations, { validations: validations })),
        parameter.style && defaultStyle[parameterType] !== parameter.style && (React.createElement("div", { className: "sl-flex sl-my-2" },
            React.createElement("span", { className: "sl-px-1 sl-text-muted sl-font-mono sl-border sl-rounded-lg sl-text-sm sl-capitalize", style: { backgroundColor: '#EDF2F7' } }, readableStyles[parameter.style] || parameter.style)))));
};
exports.Parameter = Parameter;
exports.Parameter.displayName = 'HttpOperation.Parameter';
//# sourceMappingURL=Parameters.js.map