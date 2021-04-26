"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRouter = void 0;
const react_router_dom_1 = require("react-router-dom");
const RouterComponent = {
    history: react_router_dom_1.BrowserRouter,
    memory: react_router_dom_1.MemoryRouter,
    hash: react_router_dom_1.HashRouter,
};
const useRouter = (router, basePath) => {
    const Router = RouterComponent[router];
    const routerProps = Object.assign({}, (router !== 'memory' && { basename: basePath }));
    return {
        Router,
        routerProps,
    };
};
exports.useRouter = useRouter;
//# sourceMappingURL=useRouter.js.map