"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarLayout = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Docs_1 = require("../Docs");
const MosaicTableOfContents_1 = require("../MosaicTableOfContents");
const utils_1 = require("./utils");
const MAX_CONTENT_WIDTH = 1800;
const SIDEBAR_WIDTH = 300;
const SidebarLayout = ({ serviceNode }) => {
    const scrollRef = React.useRef(null);
    const tree = React.useMemo(() => utils_1.computeAPITree(serviceNode), [serviceNode]);
    const { pathname } = react_router_dom_1.useLocation();
    React.useEffect(() => {
        var _a;
        (_a = scrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo(0, 0);
    }, [pathname]);
    const uriMap = React.useMemo(() => serviceNode.children.reduce((prev, current) => {
        prev[current.uri] = current;
        return prev;
    }, {}), [serviceNode.children]);
    const hasOverview = !!serviceNode.data.description;
    const isRootPath = !pathname || pathname === '/';
    const node = isRootPath ? serviceNode : uriMap[pathname];
    if ((isRootPath && !hasOverview) || !node) {
        const firstSlug = utils_1.findFirstNodeSlug(tree);
        if (firstSlug) {
            return React.createElement(react_router_dom_1.Redirect, { to: firstSlug });
        }
    }
    return (React.createElement(mosaic_1.Flex, { className: "sl-elements-api", pin: true, h: "full" },
        React.createElement(mosaic_1.Box, { bg: "canvas-100", borderR: true, pt: 5, pos: "sticky", pinY: true, overflowY: "auto", style: {
                width: `calc((100% - ${MAX_CONTENT_WIDTH}px) / 2 + ${SIDEBAR_WIDTH}px)`,
                paddingLeft: `calc((100% - ${MAX_CONTENT_WIDTH}px) / 2)`,
                minWidth: `${SIDEBAR_WIDTH}px`,
            } },
            React.createElement(mosaic_1.Heading, { ml: 4, mb: 5, size: 4 }, serviceNode.name),
            React.createElement(MosaicTableOfContents_1.TableOfContents, { tree: tree, activeId: pathname, Link: react_router_dom_1.Link })),
        React.createElement(mosaic_1.Box, { ref: scrollRef, px: 24, flex: 1, overflowY: "auto", overflowX: "hidden", w: "full" },
            React.createElement(mosaic_1.Box, { style: { maxWidth: `${MAX_CONTENT_WIDTH - SIDEBAR_WIDTH}px` } }, node && (React.createElement(mosaic_1.Box, { as: Docs_1.ParsedDocs, pt: 4, pb: 8, key: pathname, uri: hasOverview ? pathname : undefined, node: node }))))));
};
exports.SidebarLayout = SidebarLayout;
//# sourceMappingURL=SidebarLayout.js.map