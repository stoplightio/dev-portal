"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoplightProject = void 0;
const tslib_1 = require("tslib");
const elements_core_1 = require("@stoplight/elements-core");
const fp_1 = require("lodash/fp");
const React = tslib_1.__importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const BranchSelector_1 = require("../components/BranchSelector");
const DevPortalProvider_1 = require("../components/DevPortalProvider");
const Loading_1 = require("../components/Loading");
const NodeContent_1 = require("../components/NodeContent");
const NotFound_1 = require("../components/NotFound");
const TableOfContents_1 = require("../components/TableOfContents");
const UpgradeToStarter_1 = require("../components/UpgradeToStarter");
const getNodeContent_1 = require("../handlers/getNodeContent");
const useGetBranches_1 = require("../hooks/useGetBranches");
const useGetNodeContent_1 = require("../hooks/useGetNodeContent");
const useGetTableOfContents_1 = require("../hooks/useGetTableOfContents");
const StoplightProjectImpl = ({ projectId, hideTryIt, hideMocking }) => {
    const { branchSlug = '', nodeSlug = '' } = react_router_dom_1.useParams();
    const history = react_router_dom_1.useHistory();
    const { data: tableOfContents, isFetched: isTocFetched } = useGetTableOfContents_1.useGetTableOfContents({ projectId, branchSlug });
    const { data: branches } = useGetBranches_1.useGetBranches({ projectId });
    const { data: node, isLoading: isLoadingNode, isError, error: nodeError, } = useGetNodeContent_1.useGetNodeContent({
        nodeSlug,
        projectId,
        branchSlug,
    });
    if (!nodeSlug && isTocFetched && (tableOfContents === null || tableOfContents === void 0 ? void 0 : tableOfContents.items)) {
        const firstNode = elements_core_1.findFirstNode(tableOfContents.items);
        if (firstNode) {
            return React.createElement(react_router_dom_1.Redirect, { to: branchSlug ? `/branches/${branchSlug}/${firstNode.slug}` : `/${firstNode.slug}` });
        }
    }
    let elem;
    if (isLoadingNode || !isTocFetched) {
        elem = React.createElement(Loading_1.Loading, null);
    }
    else if (isError) {
        if (nodeError instanceof getNodeContent_1.ResponseError && nodeError.code === 402) {
            elem = React.createElement(UpgradeToStarter_1.UpgradeToStarter, null);
        }
        else {
            elem = React.createElement(NotFound_1.NotFound, null);
        }
    }
    else if (!node) {
        elem = React.createElement(NotFound_1.NotFound, null);
    }
    else {
        elem = React.createElement(NodeContent_1.NodeContent, { node: node, Link: react_router_dom_1.Link, hideTryIt: hideTryIt, hideMocking: hideMocking });
    }
    return (React.createElement(elements_core_1.SidebarLayout, { sidebar: React.createElement(React.Fragment, null,
            branches && branches.length > 1 ? (React.createElement(BranchSelector_1.BranchSelector, { branchSlug: branchSlug, branches: branches, onChange: branch => history.push(branch.is_default ? `/${nodeSlug}` : `/branches/${branch.slug}/${nodeSlug}`) })) : null,
            tableOfContents ? (React.createElement(TableOfContents_1.TableOfContents, { activeId: (node === null || node === void 0 ? void 0 : node.id) || '', tableOfContents: tableOfContents, Link: react_router_dom_1.Link })) : null) }, elem));
};
const StoplightProjectRouter = (_a) => {
    var { platformUrl, basePath = '/', router } = _a, props = tslib_1.__rest(_a, ["platformUrl", "basePath", "router"]);
    const { Router, routerProps } = elements_core_1.useRouter(router !== null && router !== void 0 ? router : 'history', basePath);
    return (React.createElement(DevPortalProvider_1.DevPortalProvider, { platformUrl: platformUrl },
        React.createElement(Router, Object.assign({}, routerProps, { key: basePath }),
            React.createElement(react_router_dom_1.Route, { path: "/branches/:branchSlug/:nodeSlug", exact: true },
                React.createElement(StoplightProjectImpl, Object.assign({}, props))),
            React.createElement(react_router_dom_1.Route, { path: "/:nodeSlug", exact: true },
                React.createElement(StoplightProjectImpl, Object.assign({}, props))),
            React.createElement(react_router_dom_1.Route, { path: "/", exact: true },
                React.createElement(StoplightProjectImpl, Object.assign({}, props))))));
};
exports.StoplightProject = fp_1.pipe(elements_core_1.withStyles, elements_core_1.withPersistenceBoundary, elements_core_1.withMosaicProvider, elements_core_1.withQueryClientProvider)(StoplightProjectRouter);
//# sourceMappingURL=StoplightProject.js.map