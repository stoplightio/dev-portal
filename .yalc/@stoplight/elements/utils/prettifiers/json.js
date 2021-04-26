"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prettifyJSON = void 0;
const prettifyJSON = json => {
    try {
        let parsedJson = json;
        if (typeof json === 'string') {
            parsedJson = JSON.parse(json);
        }
        return JSON.stringify(parsedJson, null, 2);
    }
    catch (_a) {
        return String(json);
    }
};
exports.prettifyJSON = prettifyJSON;
//# sourceMappingURL=json.js.map