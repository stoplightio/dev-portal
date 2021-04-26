"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownViewer = void 0;
const tslib_1 = require("tslib");
const markdown_viewer_1 = require("@stoplight/markdown-viewer");
const React = tslib_1.__importStar(require("react"));
const Provider_1 = require("./CustomComponents/Provider");
const MarkdownViewer = (props) => {
    const components = Provider_1.useMarkdownComponents();
    return React.createElement(markdown_viewer_1.MarkdownViewer, Object.assign({}, props, { components: components }));
};
exports.MarkdownViewer = MarkdownViewer;
exports.MarkdownViewer.displayName = 'MarkdownViewer';
//# sourceMappingURL=index.js.map