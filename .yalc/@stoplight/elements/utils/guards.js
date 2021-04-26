"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProperUrl = exports.isHttpRequest = exports.isHttpOperation = exports.isHttpService = exports.isJSONSchema = exports.isSMDASTRoot = void 0;
const mosaic_1 = require("@stoplight/mosaic");
const lodash_1 = require("lodash");
function isSMDASTRoot(maybeAst) {
    return lodash_1.isObject(maybeAst) && maybeAst['type'] === 'root' && mosaic_1.isArray(maybeAst['children']);
}
exports.isSMDASTRoot = isSMDASTRoot;
function isJSONSchema(maybeSchema) {
    return lodash_1.isPlainObject(maybeSchema);
}
exports.isJSONSchema = isJSONSchema;
function isStoplightNode(maybeNode) {
    return lodash_1.isObject(maybeNode) && 'id' in maybeNode;
}
function isHttpService(maybeHttpService) {
    return isStoplightNode(maybeHttpService) && 'name' in maybeHttpService && 'version' in maybeHttpService;
}
exports.isHttpService = isHttpService;
function isHttpOperation(maybeHttpOperation) {
    return isStoplightNode(maybeHttpOperation) && 'method' in maybeHttpOperation && 'path' in maybeHttpOperation;
}
exports.isHttpOperation = isHttpOperation;
function isHttpRequest(maybeHttpRequest) {
    return lodash_1.isObject(maybeHttpRequest) && 'method' in maybeHttpRequest && 'url' in maybeHttpRequest;
}
exports.isHttpRequest = isHttpRequest;
function isProperUrl(url) {
    const properUrl = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/);
    return url.match(properUrl);
}
exports.isProperUrl = isProperUrl;
//# sourceMappingURL=guards.js.map