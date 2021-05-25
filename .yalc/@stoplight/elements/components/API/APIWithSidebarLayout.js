"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIWithSidebarLayout = void 0;
const tslib_1 = require("tslib");
const elements_core_1 = require("@stoplight/elements-core");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const utils_1 = require("./utils");
const APIWithSidebarLayout = ({ serviceNode, logo, hideTryIt }) => {
    const tree = React.useMemo(() => utils_1.computeAPITree(serviceNode), [serviceNode]);
    const location = react_router_dom_1.useLocation();
    const { pathname } = location;
    const hasOverview = !!serviceNode.data.description;
    const isRootPath = !pathname || pathname === '/';
    const node = isRootPath ? serviceNode : serviceNode.children.find(child => child.uri === pathname);
    if ((isRootPath && !hasOverview) || !node) {
        const firstSlug = utils_1.findFirstNodeSlug(tree);
        if (firstSlug) {
            return React.createElement(react_router_dom_1.Redirect, { to: firstSlug });
        }
    }
    const sidebar = (React.createElement(React.Fragment, null,
        React.createElement(mosaic_1.Flex, { ml: 4, mb: 5, alignItems: "center" },
            logo ? (React.createElement(elements_core_1.Logo, { logo: { url: logo, altText: 'logo' } })) : (serviceNode.data.logo && React.createElement(elements_core_1.Logo, { logo: serviceNode.data.logo })),
            React.createElement(mosaic_1.Heading, { size: 4 }, serviceNode.name)),
        React.createElement(mosaic_1.Flex, { flexGrow: true, flexShrink: true, overflowY: "auto", direction: "col" },
            React.createElement(elements_core_1.TableOfContents, { tree: tree, activeId: pathname, Link: react_router_dom_1.Link })),
        React.createElement(elements_core_1.PoweredByLink, { source: serviceNode.name, pathname: pathname, packageType: "elements" })));
    return (React.createElement(elements_core_1.SidebarLayout, { sidebar: sidebar }, node && (React.createElement(mosaic_1.Box, { as: elements_core_1.ParsedDocs, key: pathname, uri: hasOverview ? pathname : undefined, node: node, hideTryIt: hideTryIt, location: location }))));
};
exports.APIWithSidebarLayout = APIWithSidebarLayout;
//# sourceMappingURL=APIWithSidebarLayout.js.map