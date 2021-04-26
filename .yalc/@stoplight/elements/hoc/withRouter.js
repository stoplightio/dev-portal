"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withRouter = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Provider_1 = require("../components/MarkdownViewer/CustomComponents/Provider");
const ReactRouterLink_1 = require("../components/MarkdownViewer/CustomComponents/ReactRouterLink");
const useRouter_1 = require("../hooks/useRouter");
const utils_1 = require("./utils");
function withRouter(WrappedComponent) {
    const WithRouter = (props) => {
        var _a, _b;
        const basePath = (_a = props.basePath) !== null && _a !== void 0 ? _a : '/';
        const { Router, routerProps } = useRouter_1.useRouter((_b = props.router) !== null && _b !== void 0 ? _b : 'history', basePath);
        return (React.createElement(Router, Object.assign({}, routerProps, { key: basePath }),
            React.createElement(react_router_dom_1.Route, { path: "/" },
                React.createElement(Provider_1.MarkdownComponentsProvider, { value: { link: ReactRouterLink_1.ReactRouterMarkdownLink } },
                    React.createElement(WrappedComponent, Object.assign({}, props))))));
    };
    WithRouter.displayName = `WithRouter(${utils_1.getDisplayName(WrappedComponent)})`;
    return WithRouter;
}
exports.withRouter = withRouter;
//# sourceMappingURL=withRouter.js.map