"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTableOfContents = void 0;
const tslib_1 = require("tslib");
const getTableOfContents = ({ projectId, branchSlug, platformUrl = 'https://stoplight.io', }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const branchQuery = branchSlug ? `?branch=${branchSlug}` : '';
    const response = yield fetch(`${platformUrl}/api/v1/projects/${projectId}/table-of-contents${branchQuery}`, {
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
exports.getTableOfContents = getTableOfContents;
//# sourceMappingURL=getTableOfContents.js.map