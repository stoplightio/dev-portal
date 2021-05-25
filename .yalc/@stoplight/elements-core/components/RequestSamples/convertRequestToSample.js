"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertRequestToSample = void 0;
const tslib_1 = require("tslib");
const httpsnippet_1 = tslib_1.__importDefault(require("httpsnippet"));
const convertRequestToSample = (language, library, request) => {
    try {
        const snippet = new httpsnippet_1.default(request);
        return snippet.convert(language, library) || null;
    }
    catch (err) {
        console.error(err);
        return null;
    }
};
exports.convertRequestToSample = convertRequestToSample;
//# sourceMappingURL=convertRequestToSample.js.map