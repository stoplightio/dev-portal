"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const tslib_1 = require("tslib");
const markdown_viewer_1 = require("@stoplight/markdown-viewer");
const react_error_boundary_1 = require("@stoplight/react-error-boundary");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const React = tslib_1.__importStar(require("react"));
const MarkdownViewer_1 = require("../../MarkdownViewer");
const Headings_1 = require("./Headings");
const ArticleComponent = React.memo(({ data, className }) => {
    const [container, setContainer] = React.useState(null);
    const tree = React.useMemo(() => (typeof data === 'object' ? data : markdown_viewer_1.processMarkdown(data)), [data]);
    if (tree === null)
        return null;
    return (React.createElement("div", { className: classnames_1.default(className, 'flex w-full relative'), ref: setContainer },
        React.createElement(MarkdownViewer_1.MarkdownViewer, { className: "flex-1", markdown: tree }),
        React.createElement(Headings_1.ArticleHeadings, { tree: tree, container: container })));
});
exports.Article = react_error_boundary_1.withErrorBoundary(ArticleComponent, { recoverableProps: ['data'] });
//# sourceMappingURL=index.js.map