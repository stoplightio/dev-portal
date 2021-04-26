"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMockUrl = exports.buildPreferHeader = exports.getMockData = void 0;
const lodash_1 = require("lodash");
const usePlatformApi_1 = require("../../hooks/usePlatformApi");
const headers_1 = require("../../utils/headers");
function getMockData(url, httpOperation, { isEnabled, code, dynamic, example }) {
    return isEnabled && url ? { url, header: buildPreferHeader({ code, dynamic, example }, httpOperation) } : undefined;
}
exports.getMockData = getMockData;
function buildPreferHeader({ code, example, dynamic }, httpOperation) {
    const isCodeSupported = supportsResponseCode(httpOperation, code);
    const isExampleSupported = isCodeSupported && supportsExample(httpOperation, code, example);
    const args = lodash_1.compact([
        code && isCodeSupported ? ['code', code] : undefined,
        dynamic ? ['dynamic', String(dynamic)] : undefined,
        example && isExampleSupported ? ['example', example] : undefined,
    ]);
    const headerValue = headers_1.formatMultiValueHeader(...args);
    return {
        Prefer: headerValue,
    };
}
exports.buildPreferHeader = buildPreferHeader;
function supportsResponseCode(httpOperation, code) {
    var _a;
    return ((_a = httpOperation.responses) === null || _a === void 0 ? void 0 : _a.find(response => response.code === code)) !== undefined;
}
function supportsExample(httpOperation, code, exampleKey) {
    var _a, _b;
    if (!exampleKey)
        return false;
    const response = (_a = httpOperation.responses) === null || _a === void 0 ? void 0 : _a.find(response => response.code === code);
    if (!response)
        return false;
    const exampleKeys = lodash_1.uniq((_b = response.contents) === null || _b === void 0 ? void 0 : _b.flatMap(c => c.examples || []).map(example => example.key));
    return exampleKeys.includes(exampleKey);
}
function useMockUrl(info, nodeUri) {
    const mockActionsUrl = 'api/actions/branchNodeMockUrl';
    const { data: mockUrlResult } = usePlatformApi_1.useActionsApi(mockActionsUrl, {
        platformUrl: info.host,
        workspaceSlug: info.workspace,
        projectSlug: info.project,
        branchSlug: info.branch,
        nodeUri,
        authToken: info.authToken,
    });
    return mockUrlResult;
}
exports.useMockUrl = useMockUrl;
//# sourceMappingURL=mocking-utils.js.map