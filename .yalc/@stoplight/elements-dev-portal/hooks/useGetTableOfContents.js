"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetTableOfContents = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_query_1 = require("react-query");
const DevPortalProvider_1 = require("../components/DevPortalProvider");
const getTableOfContents_1 = require("../handlers/getTableOfContents");
function useGetTableOfContents({ projectId, branchSlug }) {
    const platformUrl = React.useContext(DevPortalProvider_1.PlatformUrlContext);
    return react_query_1.useQuery(['tableOfContents', projectId, branchSlug, platformUrl], () => getTableOfContents_1.getTableOfContents({ projectId, branchSlug, platformUrl }), { enabled: projectId ? true : false });
}
exports.useGetTableOfContents = useGetTableOfContents;
//# sourceMappingURL=useGetTableOfContents.js.map