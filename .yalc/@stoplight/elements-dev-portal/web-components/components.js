"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoplightProjectElement = void 0;
const createElementClass_1 = require("@stoplight/elements-core/web-components/createElementClass");
const StoplightProject_1 = require("../containers/StoplightProject");
exports.StoplightProjectElement = createElementClass_1.createElementClass(StoplightProject_1.StoplightProject, {
    projectId: { type: 'string', defaultValue: '' },
    hideTryIt: { type: 'boolean' },
    hideMocking: { type: 'boolean' },
    basePath: { type: 'string' },
    router: { type: 'string' },
    platformUrl: { type: 'string' },
});
//# sourceMappingURL=components.js.map