"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useActionsApi = exports.usePlatformApi = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const React = tslib_1.__importStar(require("react"));
const swr_1 = tslib_1.__importDefault(require("swr"));
const urijs_1 = tslib_1.__importDefault(require("urijs"));
const URITemplate_1 = tslib_1.__importDefault(require("urijs/src/URITemplate"));
const constants_1 = require("../constants");
const fetcher = (url, method, authToken, data) => {
    return axios_1.default.request(Object.assign({ url,
        method,
        data }, (authToken && {
        headers: {
            authorization: `Bearer ${authToken}`,
        },
    })))
        .then(res => res.data)
        .then(res => {
        if (typeof res !== 'object') {
            throw new Error('Invalid response received');
        }
        return res;
    });
};
function usePlatformApi(uriTemplate, { platformUrl, workspaceSlug, projectSlug, branchSlug, nodeUri, authToken }, queryParams) {
    const template = new URITemplate_1.default(uriTemplate);
    const uri = new urijs_1.default(platformUrl !== null && platformUrl !== void 0 ? platformUrl : constants_1.defaultPlatformUrl).path(template.expand({ workspaceSlug, projectSlug, uri: nodeUri === null || nodeUri === void 0 ? void 0 : nodeUri.substr(1) }).toString());
    if (branchSlug) {
        uri.setQuery('branch', branchSlug);
    }
    if (queryParams) {
        uri.setQuery(queryParams);
    }
    return swr_1.default([uri.toString(), 'get', authToken], fetcher, {
        shouldRetryOnError: false,
        revalidateOnFocus: false,
    });
}
exports.usePlatformApi = usePlatformApi;
function useActionsApi(path, { platformUrl, projectSlug, workspaceSlug, branchSlug, nodeUri, authToken }) {
    const url = new urijs_1.default(platformUrl !== null && platformUrl !== void 0 ? platformUrl : constants_1.defaultPlatformUrl).path(path).toString();
    const data = React.useMemo(() => ({
        input: {
            projectSlug,
            workspaceSlug,
            branchSlug,
            uri: nodeUri,
        },
    }), [nodeUri, projectSlug, workspaceSlug, branchSlug]);
    return swr_1.default([url, 'post', authToken, data], fetcher, {
        shouldRetryOnError: false,
        revalidateOnFocus: false,
    });
}
exports.useActionsApi = useActionsApi;
//# sourceMappingURL=usePlatformApi.js.map