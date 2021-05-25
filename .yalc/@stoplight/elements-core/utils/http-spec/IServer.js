"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerUrlWithDefaultValues = void 0;
const tslib_1 = require("tslib");
const urijs_1 = tslib_1.__importDefault(require("urijs"));
const getServerUrlWithDefaultValues = (server) => {
    var _a;
    let urlString = server.url;
    const variables = Object.entries((_a = server.variables) !== null && _a !== void 0 ? _a : {});
    variables.forEach(([variableName, variableInfo]) => {
        urlString = urlString.replace(`{${variableName}}`, variableInfo.default);
    });
    let url = urijs_1.default(urlString);
    if (url.is('relative') && typeof window !== 'undefined') {
        url = url.absoluteTo(window.location.origin);
    }
    return url.toString();
};
exports.getServerUrlWithDefaultValues = getServerUrlWithDefaultValues;
//# sourceMappingURL=IServer.js.map