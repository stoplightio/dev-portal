"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeContent = void 0;
const tslib_1 = require("tslib");
const elements_core_1 = require("@stoplight/elements-core");
const mosaic_1 = require("@stoplight/mosaic");
const path_1 = require("@stoplight/path");
const React = tslib_1.__importStar(require("react"));
const NodeContent = ({ node, Link, hideTryIt, hideMocking }) => {
    return (React.createElement(elements_core_1.PersistenceContextProvider, null,
        React.createElement(NodeLinkContext.Provider, { value: [node, Link] },
            React.createElement(elements_core_1.MarkdownComponentsProvider, { value: { a: LinkComponent } },
                React.createElement(elements_core_1.MockingProvider, { mockUrl: node.links.mock_url, hideMocking: hideMocking },
                    React.createElement(mosaic_1.Box, { style: { maxWidth: ['model'].includes(node.type) ? 1000 : undefined } },
                        React.createElement(elements_core_1.Docs, { nodeType: node.type, nodeData: node.data, hideTryIt: hideTryIt })))))));
};
exports.NodeContent = NodeContent;
const NodeLinkContext = React.createContext(undefined);
const externalRegex = new RegExp('^(?:[a-z]+:)?//', 'i');
const LinkComponent = ({ children, href, title }) => {
    const ctx = React.useContext(NodeLinkContext);
    if (!href)
        return null;
    if (externalRegex.test(href)) {
        return (React.createElement("a", { href: href, target: "_blank", rel: "noreferrer", title: title }, children));
    }
    if (ctx) {
        const [node, Link] = ctx;
        const resolvedUri = path_1.resolve(path_1.dirname(node.uri), href);
        const [resolvedUriWithoutAnchor, hash] = resolvedUri.split('#');
        const edge = node.outbound_edges.find(edge => edge.uri === href || edge.uri === resolvedUriWithoutAnchor);
        if (edge) {
            return (React.createElement(Link, { to: edge.slug, hash: hash }, children));
        }
    }
    return (React.createElement("a", { href: href, title: title }, children));
};
//# sourceMappingURL=index.js.map