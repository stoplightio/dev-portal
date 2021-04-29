"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownComponentsProvider = exports.useMarkdownComponents = void 0;
const tslib_1 = require("tslib");
const lodash_1 = require("lodash");
const React = tslib_1.__importStar(require("react"));
const CodeComponent_1 = require("./CodeComponent");
const MarkdownComponentsContext = React.createContext(undefined);
MarkdownComponentsContext.displayName = 'MarkdownComponentsContext';
const useMarkdownComponents = () => { var _a; return (_a = React.useContext(MarkdownComponentsContext)) !== null && _a !== void 0 ? _a : defaultComponents; };
exports.useMarkdownComponents = useMarkdownComponents;
const defaultComponents = {
    code: CodeComponent_1.CodeComponent,
};
const MarkdownComponentsProvider = ({ value, children }) => {
    const currentComponents = exports.useMarkdownComponents();
    const newComponents = lodash_1.defaults({}, value, currentComponents);
    return React.createElement(MarkdownComponentsContext.Provider, { value: newComponents }, children);
};
exports.MarkdownComponentsProvider = MarkdownComponentsProvider;
//# sourceMappingURL=Provider.js.map