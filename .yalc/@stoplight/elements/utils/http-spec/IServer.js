"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerUrlWithDefaultValues = void 0;
const getServerUrlWithDefaultValues = (server) => {
    var _a;
    let url = server.url;
    const variables = Object.entries((_a = server.variables) !== null && _a !== void 0 ? _a : {});
    variables.forEach(([variableName, variableInfo]) => {
        url = url.replace(`{${variableName}}`, variableInfo.default);
    });
    return url;
};
exports.getServerUrlWithDefaultValues = getServerUrlWithDefaultValues;
//# sourceMappingURL=IServer.js.map