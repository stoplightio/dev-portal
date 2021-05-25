"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetNodes = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_query_1 = require("react-query");
const use_debounce_1 = require("use-debounce");
const DevPortalProvider_1 = require("../components/DevPortalProvider");
const getNodes_1 = require("../handlers/getNodes");
function useGetNodes({ search, workspaceId, projectIds, }) {
    const platformUrl = React.useContext(DevPortalProvider_1.PlatformUrlContext);
    const [debounceSearch] = use_debounce_1.useDebounce(search, 500);
    return react_query_1.useQuery(['workspaceNodes', workspaceId, projectIds, debounceSearch, platformUrl], () => getNodes_1.getNodes({ workspaceId, projectIds, search: debounceSearch, platformUrl }));
}
exports.useGetNodes = useGetNodes;
//# sourceMappingURL=useGetNodes.js.map