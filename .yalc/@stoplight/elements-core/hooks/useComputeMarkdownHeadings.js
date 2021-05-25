"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeMarkdownHeadings = exports.useComputeMarkdownHeadings = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const selectAll = require('unist-util-select').selectAll;
function useComputeMarkdownHeadings(tree) {
    return React.useMemo(() => computeMarkdownHeadings(tree), [tree]);
}
exports.useComputeMarkdownHeadings = useComputeMarkdownHeadings;
function computeMarkdownHeadings(tree) {
    return selectAll(':root > [type=heading]', tree)
        .map((heading) => ({
        title: findTitle(heading),
        id: heading.data && heading.data.id,
        depth: heading.depth - 1,
    }))
        .filter((item) => item.depth >= 1 && item.depth <= 2);
}
exports.computeMarkdownHeadings = computeMarkdownHeadings;
const findTitle = (parent) => {
    return selectAll('[type=text]', parent).map(textNode => String(textNode.value)).join(' ');
};
//# sourceMappingURL=useComputeMarkdownHeadings.js.map