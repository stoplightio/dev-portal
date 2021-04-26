"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildHarRequest = exports.buildFetchRequest = void 0;
const tslib_1 = require("tslib");
const IServer_1 = require("../../utils/http-spec/IServer");
const authentication_utils_1 = require("./authentication-utils");
const request_body_utils_1 = require("./request-body-utils");
const nameAndValueObjectToPair = ({ name, value }) => [name, value];
function buildFetchRequest({ httpOperation, mediaTypeContent, bodyInput, parameterValues, mockData, auth, }) {
    var _a, _b, _c, _d, _e, _f, _g;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const firstServer = (_a = httpOperation.servers) === null || _a === void 0 ? void 0 : _a[0];
        const firstServerUrl = firstServer && IServer_1.getServerUrlWithDefaultValues(firstServer);
        const serverUrl = (mockData === null || mockData === void 0 ? void 0 : mockData.url) || firstServerUrl || window.location.origin;
        const shouldIncludeBody = ['PUT', 'POST', 'PATCH'].includes(httpOperation.method.toUpperCase());
        const queryParams = (_d = (_c = (_b = httpOperation.request) === null || _b === void 0 ? void 0 : _b.query) === null || _c === void 0 ? void 0 : _c.map(param => { var _a; return ({ name: param.name, value: (_a = parameterValues[param.name]) !== null && _a !== void 0 ? _a : '' }); }).filter(({ value }) => value.length > 0)) !== null && _d !== void 0 ? _d : [];
        const rawHeaders = authentication_utils_1.filterOutAuthorizationParams((_f = (_e = httpOperation.request) === null || _e === void 0 ? void 0 : _e.headers) !== null && _f !== void 0 ? _f : [], httpOperation.security).map(header => { var _a; return ({ name: header.name, value: (_a = parameterValues[header.name]) !== null && _a !== void 0 ? _a : '' }); });
        const [queryParamsWithAuth, headersWithAuth] = runAuthRequestEhancements(auth, queryParams, rawHeaders);
        const expandedPath = uriExpand(httpOperation.path, parameterValues);
        const url = new URL(serverUrl + expandedPath);
        url.search = new URLSearchParams(queryParamsWithAuth.map(nameAndValueObjectToPair)).toString();
        const body = typeof bodyInput === 'object' ? yield request_body_utils_1.createRequestBody(mediaTypeContent, bodyInput) : bodyInput;
        const headers = Object.assign(Object.assign({ 'Content-Type': (_g = mediaTypeContent === null || mediaTypeContent === void 0 ? void 0 : mediaTypeContent.mediaType) !== null && _g !== void 0 ? _g : 'application/json' }, Object.fromEntries(headersWithAuth.map(nameAndValueObjectToPair))), mockData === null || mockData === void 0 ? void 0 : mockData.header);
        return [
            url.toString(),
            {
                credentials: 'omit',
                method: httpOperation.method,
                headers,
                body: shouldIncludeBody ? body : undefined,
            },
        ];
    });
}
exports.buildFetchRequest = buildFetchRequest;
const runAuthRequestEhancements = (auth, queryParams, headers) => {
    var _a, _b, _c;
    if (!auth)
        return [queryParams, headers];
    const newQueryParams = [...queryParams];
    const newHeaders = [...headers];
    if (authentication_utils_1.isApiKeySecurityScheme(auth.scheme)) {
        if (auth.scheme.in === 'query') {
            newQueryParams.push({
                name: auth.scheme.name,
                value: (_a = auth.authValue) !== null && _a !== void 0 ? _a : '',
            });
        }
        if (auth.scheme.in === 'header') {
            newHeaders.push({
                name: auth.scheme.name,
                value: (_b = auth.authValue) !== null && _b !== void 0 ? _b : '',
            });
        }
    }
    if (authentication_utils_1.isOAuth2SecurityScheme(auth.scheme)) {
        newHeaders.push({
            name: 'Authorization',
            value: (_c = auth.authValue) !== null && _c !== void 0 ? _c : '',
        });
    }
    if (authentication_utils_1.isBearerSecurityScheme(auth.scheme)) {
        newHeaders.push({
            name: 'Authorization',
            value: `Bearer ${auth.authValue}`,
        });
    }
    if (authentication_utils_1.isBasicSecurityScheme(auth.scheme)) {
        newHeaders.push({
            name: 'Authorization',
            value: `Basic ${auth.authValue}`,
        });
    }
    return [newQueryParams, newHeaders];
};
function buildHarRequest({ httpOperation, bodyInput, parameterValues, mediaTypeContent, auth, }) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const firstServer = (_a = httpOperation.servers) === null || _a === void 0 ? void 0 : _a[0];
        const firstServerUrl = firstServer && IServer_1.getServerUrlWithDefaultValues(firstServer);
        const serverUrl = firstServerUrl || window.location.origin;
        const mimeType = (_b = mediaTypeContent === null || mediaTypeContent === void 0 ? void 0 : mediaTypeContent.mediaType) !== null && _b !== void 0 ? _b : 'application/json';
        const shouldIncludeBody = ['PUT', 'POST', 'PATCH'].includes(httpOperation.method.toUpperCase());
        const queryParams = (_e = (_d = (_c = httpOperation.request) === null || _c === void 0 ? void 0 : _c.query) === null || _d === void 0 ? void 0 : _d.map(param => { var _a; return ({ name: param.name, value: (_a = parameterValues[param.name]) !== null && _a !== void 0 ? _a : '' }); }).filter(({ value }) => value.length > 0)) !== null && _e !== void 0 ? _e : [];
        const headerParams = (_h = (_g = (_f = httpOperation.request) === null || _f === void 0 ? void 0 : _f.headers) === null || _g === void 0 ? void 0 : _g.map(header => { var _a; return ({ name: header.name, value: (_a = parameterValues[header.name]) !== null && _a !== void 0 ? _a : '' }); })) !== null && _h !== void 0 ? _h : [];
        const [queryParamsWithAuth, headerParamsWithAuth] = runAuthRequestEhancements(auth, queryParams, headerParams);
        let postData = undefined;
        if (shouldIncludeBody && typeof bodyInput === 'string') {
            postData = { mimeType, text: bodyInput };
        }
        if (shouldIncludeBody && typeof bodyInput === 'object') {
            postData = {
                mimeType,
                params: Object.entries(bodyInput).map(([name, value]) => {
                    if (value instanceof File) {
                        return {
                            name,
                            fileName: value.name,
                            contentType: value.type,
                        };
                    }
                    return {
                        name,
                        value,
                    };
                }),
            };
        }
        return {
            method: httpOperation.method.toUpperCase(),
            url: serverUrl + uriExpand(httpOperation.path, parameterValues),
            httpVersion: 'HTTP/1.1',
            cookies: [],
            headers: [{ name: 'Content-Type', value: mimeType }, ...headerParamsWithAuth],
            queryString: queryParamsWithAuth,
            postData: postData,
            headersSize: -1,
            bodySize: -1,
        };
    });
}
exports.buildHarRequest = buildHarRequest;
function uriExpand(uri, data) {
    if (!data) {
        return uri;
    }
    return uri.replace(/{([^#?]+?)}/g, (match, value) => {
        return data[value] || value;
    });
}
//# sourceMappingURL=build-request.js.map