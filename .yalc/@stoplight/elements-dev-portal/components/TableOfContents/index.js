"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableOfContents = void 0;
const tslib_1 = require("tslib");
const elements_core_1 = require("@stoplight/elements-core");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const TableOfContents = (_a) => {
    var { tableOfContents, activeId, Link } = _a, boxProps = tslib_1.__rest(_a, ["tableOfContents", "activeId", "Link"]);
    return (React.createElement(mosaic_1.Box, Object.assign({ bg: "canvas-100" }, boxProps),
        React.createElement(elements_core_1.TableOfContents, { tree: tableOfContents.items, activeId: activeId, Link: Link, maxDepthOpenByDefault: 1 }),
        tableOfContents.hide_powered_by ? null : (React.createElement(elements_core_1.PoweredByLink, { source: activeId, pathname: typeof window !== 'undefined' ? window.location.pathname : '', packageType: "elements-dev-portal" }))));
};
exports.TableOfContents = TableOfContents;
//# sourceMappingURL=index.js.map