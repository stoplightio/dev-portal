"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformOasToServiceNode = exports.OPERATION_REGEXP = exports.MODEL_REGEXP = void 0;
const oas2_1 = require("@stoplight/http-spec/oas2");
const oas3_1 = require("@stoplight/http-spec/oas3");
const json_1 = require("@stoplight/json");
const types_1 = require("@stoplight/types");
const lodash_1 = require("lodash");
const oas2_2 = require("./oas2");
const oas3_2 = require("./oas3");
const types_2 = require("./types");
const isOas2 = (parsed) => lodash_1.isObject(parsed) &&
    'swagger' in parsed &&
    Number.parseInt(String(parsed.swagger)) === 2;
const isOas3 = (parsed) => lodash_1.isObject(parsed) &&
    'openapi' in parsed &&
    Number.parseFloat(String(parsed.openapi)) >= 3;
const isOas31 = (parsed) => lodash_1.isObject(parsed) &&
    'openapi' in parsed &&
    Number.parseFloat(String(parsed.openapi)) === 3.1;
const OAS_MODEL_REGEXP = /((definitions|components)\/?(schemas)?)\//;
exports.MODEL_REGEXP = /schemas\//;
exports.OPERATION_REGEXP = /\/operations\/.+|paths\/.+\/(get|post|put|patch|delete|head|options|trace)$/;
function transformOasToServiceNode(apiDescriptionDocument) {
    if (isOas31(apiDescriptionDocument)) {
        return computeServiceNode(Object.assign(Object.assign({}, apiDescriptionDocument), { jsonSchemaDialect: 'http://json-schema.org/draft-07/schema#' }), oas3_2.oas3SourceMap, oas3_1.transformOas3Service, oas3_1.transformOas3Operation);
    }
    if (isOas3(apiDescriptionDocument)) {
        return computeServiceNode(apiDescriptionDocument, oas3_2.oas3SourceMap, oas3_1.transformOas3Service, oas3_1.transformOas3Operation);
    }
    else if (isOas2(apiDescriptionDocument)) {
        return computeServiceNode(apiDescriptionDocument, oas2_2.oas2SourceMap, oas2_1.transformOas2Service, oas2_1.transformOas2Operation);
    }
    return null;
}
exports.transformOasToServiceNode = transformOasToServiceNode;
function computeServiceNode(document, map, transformService, transformOperation) {
    var _a;
    const serviceDocument = transformService({ document });
    const serviceNode = {
        type: types_1.NodeType.HttpService,
        uri: '/',
        name: serviceDocument.name,
        data: serviceDocument,
        tags: ((_a = serviceDocument.tags) === null || _a === void 0 ? void 0 : _a.map(tag => tag.name)) || [],
        children: computeChildNodes(document, document, map, transformOperation),
    };
    return serviceNode;
}
function computeChildNodes(document, data, map, transformer, parentUri = '') {
    var _a;
    const nodes = [];
    if (!lodash_1.isObject(data))
        return nodes;
    for (const key of Object.keys(data)) {
        const sanitizedKey = json_1.encodePointerFragment(key);
        const match = findMapMatch(sanitizedKey, map);
        if (match) {
            const uri = `${parentUri}/${sanitizedKey}`;
            const jsonPath = json_1.pointerToPath(`#${uri}`);
            if (match.type === types_2.NodeTypes.Operation && jsonPath.length === 3) {
                const path = String(jsonPath[1]);
                const method = String(jsonPath[2]);
                const operationDocument = transformer({ document, path, method });
                let parsedUri;
                const encodedPath = String(json_1.encodePointerFragment(path));
                if (operationDocument.iid) {
                    parsedUri = `/operations/${operationDocument.iid}`;
                }
                else {
                    parsedUri = uri.replace(encodedPath, slugify(path));
                }
                nodes.push({
                    type: types_1.NodeType.HttpOperation,
                    uri: parsedUri,
                    data: operationDocument,
                    name: operationDocument.summary || operationDocument.iid || operationDocument.path,
                    tags: ((_a = operationDocument.tags) === null || _a === void 0 ? void 0 : _a.map(tag => tag.name)) || [],
                });
            }
            else if (match.type === types_2.NodeTypes.Model) {
                const schemaDocument = lodash_1.get(document, jsonPath);
                const parsedUri = uri.replace(OAS_MODEL_REGEXP, 'schemas/');
                nodes.push({
                    type: types_1.NodeType.Model,
                    uri: parsedUri,
                    data: schemaDocument,
                    name: schemaDocument.title || lodash_1.last(uri.split('/')) || '',
                    tags: schemaDocument['x-tags'] || [],
                });
            }
            if (match.children) {
                nodes.push(...computeChildNodes(document, data[key], match.children, transformer, uri));
            }
        }
    }
    return nodes;
}
function slugify(name) {
    return name
        .replace(/\/|{|}|\s/g, '-')
        .replace(/-{2,}/, '-')
        .replace(/^-/, '')
        .replace(/-$/, '');
}
function findMapMatch(key, map) {
    var _a;
    if (typeof key === 'number')
        return;
    for (const entry of map) {
        if (!!((_a = entry.match) === null || _a === void 0 ? void 0 : _a.match(key)) || (entry.notMatch !== void 0 && !entry.notMatch.match(key))) {
            return entry;
        }
    }
}
//# sourceMappingURL=index.js.map