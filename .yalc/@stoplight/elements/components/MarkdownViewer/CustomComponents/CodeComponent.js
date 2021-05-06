"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHttpRequest = exports.CodeComponent = void 0;
const tslib_1 = require("tslib");
const markdown_viewer_1 = require("@stoplight/markdown-viewer");
const types_1 = require("@stoplight/types");
const lodash_1 = require("lodash");
const react_1 = tslib_1.__importDefault(require("react"));
const urijs_1 = tslib_1.__importDefault(require("urijs"));
const useParsedValue_1 = require("../../../hooks/useParsedValue");
const guards_1 = require("../../../utils/guards");
const SchemaAndDescription_1 = require("../../SchemaAndDescription");
const TryIt_1 = require("../../TryIt");
function isPartialHttpRequest(maybeHttpRequest) {
    return (lodash_1.isObject(maybeHttpRequest) &&
        'method' in maybeHttpRequest &&
        typeof maybeHttpRequest['method'] === 'string' &&
        'url' in maybeHttpRequest &&
        typeof maybeHttpRequest['url'] === 'string');
}
const CodeComponent = (props) => {
    const { node: { annotations, value, resolved, meta }, } = props;
    const nodeType = lodash_1.get(annotations, 'type') || meta;
    const parsedValue = useParsedValue_1.useParsedValue(resolved !== null && resolved !== void 0 ? resolved : value);
    if (nodeType === 'json_schema') {
        if (!guards_1.isJSONSchema(parsedValue)) {
            return null;
        }
        return react_1.default.createElement(SchemaAndDescription_1.SchemaAndDescription, { title: annotations === null || annotations === void 0 ? void 0 : annotations.title, schema: parsedValue });
    }
    if (nodeType === 'http') {
        if (!lodash_1.isObject(parsedValue) || (!isPartialHttpRequest(parsedValue) && !guards_1.isHttpOperation(parsedValue))) {
            return null;
        }
        return react_1.default.createElement(TryIt_1.TryIt, { httpOperation: guards_1.isHttpOperation(parsedValue) ? parsedValue : parseHttpRequest(parsedValue) });
    }
    const DefaultCode = markdown_viewer_1.DefaultSMDComponents.code;
    return react_1.default.createElement(DefaultCode, Object.assign({}, props));
};
exports.CodeComponent = CodeComponent;
function parseHttpRequest(data) {
    const uri = urijs_1.default(data.url);
    return {
        id: '?http-operation-id?',
        method: data.method,
        path: uri.is('absolute') ? uri.path() : data.url,
        servers: [{ url: uri.is('absolute') ? uri.origin() : data.baseUrl || '' }],
        request: Object.assign({ query: Object.entries(data.query || {}).map(([key, value]) => ({
                name: key,
                style: types_1.HttpParamStyles.Form,
                schema: { default: Array.isArray(value) && value.length > 0 ? value[0] : value },
            })), headers: Object.entries(data.headers || {}).map(([key, value]) => ({
                name: key,
                style: types_1.HttpParamStyles.Simple,
                schema: { default: value },
            })) }, (data.body
            ? { body: { contents: [{ mediaType: 'application/json', schema: { default: data.body } }] } }
            : null)),
        responses: [],
    };
}
exports.parseHttpRequest = parseHttpRequest;
//# sourceMappingURL=CodeComponent.js.map