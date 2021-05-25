"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetBranches = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_query_1 = require("react-query");
const DevPortalProvider_1 = require("../components/DevPortalProvider");
const getBranches_1 = require("../handlers/getBranches");
function useGetBranches({ projectId }) {
    const platformUrl = React.useContext(DevPortalProvider_1.PlatformUrlContext);
    return react_query_1.useQuery(['branches', projectId, platformUrl], () => getBranches_1.getBranches({ projectId, platformUrl }), {
        enabled: projectId ? true : false,
    });
}
exports.useGetBranches = useGetBranches;
//# sourceMappingURL=useGetBranches.js.map