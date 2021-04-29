"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiElement = void 0;
const index_1 = require("../index");
const createElementClass_1 = require("./createElementClass");
exports.ApiElement = createElementClass_1.createElementClass(index_1.API, {
    apiDescriptionUrl: { type: 'string', defaultValue: '' },
    apiDescriptionDocument: { type: 'string', defaultValue: '' },
    basePath: { type: 'string' },
    router: { type: 'string' },
    layout: { type: 'string' },
});
//# sourceMappingURL=components.js.map