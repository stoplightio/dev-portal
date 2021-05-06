"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarLayout = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const MAX_CONTENT_WIDTH = 1800;
const SIDEBAR_WIDTH = 300;
const SidebarLayout = ({ sidebar, children, maxContentWidth = MAX_CONTENT_WIDTH, sidebarWidth = SIDEBAR_WIDTH, }) => {
    const scrollRef = React.useRef(null);
    const { pathname } = react_router_dom_1.useLocation();
    React.useEffect(() => {
        var _a;
        (_a = scrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo(0, 0);
    }, [pathname]);
    return (React.createElement(mosaic_1.Flex, { className: "sl-elements-api", pin: true, h: "full" },
        React.createElement(mosaic_1.Flex, { direction: "col", bg: "canvas-100", borderR: true, pt: 5, pos: "sticky", pinY: true, overflowY: "auto", style: {
                width: `calc((100% - ${maxContentWidth}px) / 2 + ${sidebarWidth}px)`,
                paddingLeft: `calc((100% - ${maxContentWidth}px) / 2)`,
                minWidth: `${sidebarWidth}px`,
            } }, sidebar),
        React.createElement(mosaic_1.Box, { ref: scrollRef, px: 24, flex: 1, overflowY: "auto", overflowX: "hidden", w: "full" },
            React.createElement(mosaic_1.Box, { style: { maxWidth: `${maxContentWidth - sidebarWidth}px` }, pt: 4, pb: 8 }, children))));
};
exports.SidebarLayout = SidebarLayout;
//# sourceMappingURL=SidebarLayout.js.map