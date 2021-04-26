"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNamedContext = exports.StoplightComponentProvider = exports.StoplightProjectContext = exports.Provider = exports.ActiveInfoContext = exports.IconsContext = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const defaultIcons = {};
exports.IconsContext = createNamedContext('IconsContext', defaultIcons);
const defaultInfo = {
    host: '',
    workspace: '',
    project: '',
    branch: '',
    node: '',
    authToken: '',
    isStoplightProjectComponent: false,
};
exports.ActiveInfoContext = createNamedContext('ActiveInfoContext', defaultInfo);
const Provider = ({ host, workspace, project, branch, node, children, authToken, isStoplightProjectComponent, }) => {
    const info = {
        host,
        workspace,
        project,
        branch,
        node,
        authToken,
        isStoplightProjectComponent,
    };
    return (React.createElement(exports.IconsContext.Provider, { value: defaultIcons },
        React.createElement(exports.ActiveInfoContext.Provider, { value: info }, children)));
};
exports.Provider = Provider;
exports.StoplightProjectContext = createNamedContext('mockUrlValue', { mockUrl: undefined });
const StoplightComponentProvider = ({ mockUrl, children }) => {
    const info = { mockUrl };
    return React.createElement(exports.StoplightProjectContext.Provider, { value: info }, children);
};
exports.StoplightComponentProvider = StoplightComponentProvider;
function createNamedContext(name, defaultValue) {
    const context = React.createContext(defaultValue);
    context.displayName = name;
    return context;
}
exports.createNamedContext = createNamedContext;
//# sourceMappingURL=Provider.js.map