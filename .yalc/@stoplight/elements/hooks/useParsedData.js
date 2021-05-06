"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useParsedData = void 0;
const tslib_1 = require("tslib");
const markdown_viewer_1 = require("@stoplight/markdown-viewer");
const types_1 = require("@stoplight/types");
const yaml_1 = require("@stoplight/yaml");
const React = tslib_1.__importStar(require("react"));
const guards_1 = require("../utils/guards");
function useParsedData(nodeType, data) {
    return React.useMemo(() => { var _a; return (_a = parserMap[nodeType]) === null || _a === void 0 ? void 0 : _a.call(parserMap, data); }, [nodeType, data]);
}
exports.useParsedData = useParsedData;
const parserMap = {
    [types_1.NodeType.Article]: parseArticleData,
    [types_1.NodeType.HttpOperation]: parseHttpOperation,
    [types_1.NodeType.HttpService]: parseHttpService,
    [types_1.NodeType.Model]: parseModel,
    [types_1.NodeType.HttpServer]: parseUnknown,
    [types_1.NodeType.Generic]: parseUnknown,
    [types_1.NodeType.TableOfContents]: parseUnknown,
    [types_1.NodeType.SpectralRuleset]: parseUnknown,
    [types_1.NodeType.Unknown]: parseUnknown,
};
function parseArticleData(rawData) {
    if (typeof rawData === 'string') {
        return {
            type: types_1.NodeType.Article,
            data: markdown_viewer_1.processMarkdown(rawData),
        };
    }
    if (guards_1.isSMDASTRoot(rawData)) {
        return {
            type: types_1.NodeType.Article,
            data: rawData,
        };
    }
    return undefined;
}
function parseHttpOperation(rawData) {
    const data = tryParseYamlOrObject(rawData);
    if (guards_1.isHttpOperation(data)) {
        return {
            type: types_1.NodeType.HttpOperation,
            data: data,
        };
    }
    return undefined;
}
function parseHttpService(rawData) {
    const data = tryParseYamlOrObject(rawData);
    if (guards_1.isHttpService(data)) {
        return {
            type: types_1.NodeType.HttpService,
            data: data,
        };
    }
    return undefined;
}
function parseModel(rawData) {
    const data = tryParseYamlOrObject(rawData);
    if (guards_1.isJSONSchema(data)) {
        return {
            type: types_1.NodeType.Model,
            data: data,
        };
    }
    return undefined;
}
function tryParseYamlOrObject(yamlOrObject) {
    if (typeof yamlOrObject === 'object' && yamlOrObject !== null)
        return yamlOrObject;
    if (typeof yamlOrObject === 'string') {
        try {
            return yaml_1.parse(yamlOrObject);
        }
        catch (e) { }
    }
    return undefined;
}
function parseUnknown() {
    return undefined;
}
//# sourceMappingURL=useParsedData.js.map