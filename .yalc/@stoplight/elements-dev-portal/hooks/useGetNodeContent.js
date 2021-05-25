"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetNodeContent = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_query_1 = require("react-query");
const DevPortalProvider_1 = require("../components/DevPortalProvider");
const getNodeContent_1 = require("../handlers/getNodeContent");
function useGetNodeContent({ nodeSlug, projectId, branchSlug, }) {
    const platformUrl = React.useContext(DevPortalProvider_1.PlatformUrlContext);
    return react_query_1.useQuery(['useNodeContent', nodeSlug, projectId, branchSlug, platformUrl], () => getNodeContent_1.getNodeContent({ nodeSlug, projectId, branchSlug, platformUrl }), { enabled: nodeSlug && projectId ? true : false });
}
exports.useGetNodeContent = useGetNodeContent;
//# sourceMappingURL=useGetNodeContent.js.map