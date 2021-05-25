"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodes = void 0;
const tslib_1 = require("tslib");
const getNodes = ({ workspaceId, projectIds, search, platformUrl = 'https://stoplight.io', }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const queryParams = [];
    if (projectIds && projectIds.length) {
        queryParams.push(...projectIds.map((projectId, index) => `project_ids[${index}]=${projectId}`));
    }
    if (search) {
        queryParams.push(`search=${search}`);
    }
    const query = queryParams.length ? `?${queryParams.join('&')}` : '';
    const response = yield fetch(`${platformUrl}/api/v1/workspaces/${workspaceId}/nodes${query}`, {
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
exports.getNodes = getNodes;
//# sourceMappingURL=getNodes.js.map