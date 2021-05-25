"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleHeadings = void 0;
const tslib_1 = require("tslib");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const ui_kit_1 = require("@stoplight/ui-kit");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const React = tslib_1.__importStar(require("react"));
const useComponentSize_1 = require("../../../hooks/useComponentSize");
const useComputeMarkdownHeadings_1 = require("../../../hooks/useComputeMarkdownHeadings");
const useLocationHash_1 = require("../../../hooks/useLocationHash");
const ArticleHeadings = ({ tree, container }) => {
    const { width } = useComponentSize_1.useComponentSize(container);
    const showHeadings = width >= 768;
    const headings = useComputeMarkdownHeadings_1.useComputeMarkdownHeadings(tree);
    return React.createElement(Headings, { className: "ArticleHeadings", headings: headings, minimal: !showHeadings });
};
exports.ArticleHeadings = ArticleHeadings;
const Headings = ({ headings, className, title = 'On This Page', minimal }) => {
    const locationHash = useLocationHash_1.useLocationHash();
    if (!headings || !headings.length)
        return null;
    const component = (React.createElement("div", { style: { maxHeight: '85vh', overflow: 'auto' } },
        title && (React.createElement("div", { className: "py-2 text-gray-5 dark:text-gray-4 font-medium text-sm flex items-center", style: { paddingLeft: 18 } },
            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faStream, className: "mr-2" }),
            title)),
        headings.map((heading, i) => (React.createElement(Heading, { key: i, item: heading, isSelected: locationHash === `#${heading.id}` })))));
    if (minimal) {
        return (React.createElement("div", { className: "absolute top-0 right-0", style: { top: 10 } },
            React.createElement(ui_kit_1.Popover, { target: React.createElement(ui_kit_1.Button, { outlined: true, small: true, icon: React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faStream }) }), content: React.createElement("div", { className: classnames_1.default('py-2', className) }, component), position: ui_kit_1.Position.TOP_RIGHT, boundary: "scrollParent" })));
    }
    return (React.createElement("div", { className: classnames_1.default(`sticky pr-4 pl-18 h-full overflow-auto`, className), style: { top: 30 } },
        React.createElement("div", { className: "border-l border-gray-2 dark:border-lighten-4" }, component)));
};
const Heading = ({ item, isSelected }) => {
    return (React.createElement("a", { href: `#${item.id}`, className: classnames_1.default('truncate block py-2 pr-8 font-medium font-medium hover:text-blue-6 hover:no-underline text-sm', isSelected ? 'text-blue-6 dark:text-blue-2' : 'text-gray-6 dark:text-gray-4'), style: { paddingLeft: `${3 + item.depth * 15}px` } }, item.title));
};
//# sourceMappingURL=Headings.js.map