"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNamedContext = exports.MockingProvider = exports.MockingContext = exports.Provider = exports.ActiveInfoContext = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const defaultInfo = {
    host: '',
    workspace: '',
    project: '',
    branch: '',
    node: '',
    authToken: '',
    showMocking: false,
};
exports.ActiveInfoContext = createNamedContext('ActiveInfoContext', defaultInfo);
const Provider = ({ host, workspace, project, branch, node, children, authToken, showMocking, }) => {
    const info = {
        host,
        workspace,
        project,
        branch,
        node,
        authToken,
        showMocking,
    };
    return React.createElement(exports.ActiveInfoContext.Provider, { value: info }, children);
};
exports.Provider = Provider;
exports.MockingContext = createNamedContext('MockingContext', { mockUrl: undefined });
const MockingProvider = ({ mockUrl, children }) => {
    const info = { mockUrl };
    return React.createElement(exports.MockingContext.Provider, { value: info }, children);
};
exports.MockingProvider = MockingProvider;
function createNamedContext(name, defaultValue) {
    const context = React.createContext(defaultValue);
    context.displayName = name;
    return context;
}
exports.createNamedContext = createNamedContext;
//# sourceMappingURL=Provider.js.map