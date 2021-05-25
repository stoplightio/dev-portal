"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodeContent = exports.ResponseError = void 0;
const tslib_1 = require("tslib");
class ResponseError extends Error {
    constructor(message, responseCode) {
        super(message);
        this.name = 'ResponseError';
        this.code = responseCode;
    }
}
exports.ResponseError = ResponseError;
const getNodeContent = ({ nodeSlug, projectId, branchSlug, platformUrl = 'https://stoplight.io', }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const nodeId = getNodeIdFromSlug(nodeSlug);
    const branchQuery = branchSlug ? `?branch=${branchSlug}` : '';
    const response = yield fetch(`${platformUrl}/api/v1/projects/${projectId}/nodes/${nodeId}${branchQuery}`, {
        headers: {
            'Stoplight-Elements-Version': '1.0.0',
        },
    });
    const data = yield response.json();
    if (!response.ok) {
        throw new ResponseError('Payment Required', response.status);
    }
    return data;
});
exports.getNodeContent = getNodeContent;
function getNodeIdFromSlug(nodeSlug) {
    return nodeSlug.split('-')[0];
}
//# sourceMappingURL=getNodeContent.js.map