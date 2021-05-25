"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBranches = void 0;
const tslib_1 = require("tslib");
const getBranches = ({ projectId, platformUrl = 'https://stoplight.io', }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${platformUrl}/api/v1/projects/${projectId}/branches`, {
        headers: {
            'Stoplight-Elements-Version': '1.0.0',
        },
    });
    const data = yield response.json();
    if (!response.ok) {
        throw new Error(data);
    }
    return data;
});
exports.getBranches = getBranches;
//# sourceMappingURL=getBranches.js.map