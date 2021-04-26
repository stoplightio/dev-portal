"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDocument = exports.useInlineRefResolver = exports.InlineRefResolverProvider = exports.DocumentContext = void 0;
const tslib_1 = require("tslib");
const json_1 = require("@stoplight/json");
const lodash_1 = require("lodash");
const React = tslib_1.__importStar(require("react"));
const react_1 = require("react");
const InlineRefResolverContext = React.createContext(undefined);
InlineRefResolverContext.displayName = 'InlineRefResolverContext';
exports.DocumentContext = React.createContext(undefined);
const InlineRefResolverProvider = (_a) => {
    var { children } = _a, props = tslib_1.__rest(_a, ["children"]);
    const document = 'document' in props && lodash_1.isPlainObject(props.document) ? Object(props.document) : undefined;
    const documentBasedRefResolver = React.useCallback(({ pointer }, _, schema) => {
        const activeSchema = document !== null && document !== void 0 ? document : schema;
        if (pointer === null) {
            return null;
        }
        if (pointer === '#') {
            return activeSchema;
        }
        const resolved = json_1.resolveInlineRef(activeSchema, pointer);
        if (lodash_1.isPlainObject(resolved)) {
            return resolved;
        }
        throw new ReferenceError(`Could not resolve '${pointer}`);
    }, [document]);
    return (React.createElement(InlineRefResolverContext.Provider, { value: 'resolver' in props ? props.resolver : documentBasedRefResolver },
        React.createElement(exports.DocumentContext.Provider, { value: document }, children)));
};
exports.InlineRefResolverProvider = InlineRefResolverProvider;
const useInlineRefResolver = () => react_1.useContext(InlineRefResolverContext);
exports.useInlineRefResolver = useInlineRefResolver;
const useDocument = () => react_1.useContext(exports.DocumentContext);
exports.useDocument = useDocument;
//# sourceMappingURL=InlineRefResolver.js.map