"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiElement = exports.StoplightProjectElement = void 0;
const index_1 = require("../index");
const createElementClass_1 = require("./createElementClass");
exports.StoplightProjectElement = createElementClass_1.createElementClass(index_1.StoplightProject, {
    workspaceSlug: { type: 'string', defaultValue: '' },
    projectSlug: { type: 'string', defaultValue: '' },
    branchSlug: { type: 'string' },
    authToken: { type: 'string' },
    basePath: { type: 'string' },
    router: { type: 'string' },
    platformUrl: { type: 'string' },
});
exports.ApiElement = createElementClass_1.createElementClass(index_1.API, {
    apiDescriptionUrl: { type: 'string', defaultValue: '' },
    apiDescriptionDocument: { type: 'string', defaultValue: '' },
    basePath: { type: 'string' },
    router: { type: 'string' },
    layout: { type: 'string' },
});
//# sourceMappingURL=components.js.map