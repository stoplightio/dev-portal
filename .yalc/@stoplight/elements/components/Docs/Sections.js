"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubSectionPanel = exports.SectionTitle = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const SectionTitle = ({ title, children }) => {
    return (React.createElement(mosaic_1.Flex, { role: "heading", borderB: true, mb: 3, pb: 3, "aria-label": title },
        React.createElement(mosaic_1.Text, { size: "xl", fontWeight: "semibold", mr: 5 }, title),
        children));
};
exports.SectionTitle = SectionTitle;
const SubSectionPanel = ({ title, children, hasContent, rightComponent }) => {
    return (React.createElement(mosaic_1.Panel, { appearance: "minimal", isCollapsible: hasContent, defaultIsOpen: true },
        React.createElement(mosaic_1.Panel.Titlebar, { fontWeight: "medium", rightComponent: rightComponent },
            React.createElement("div", { role: "heading" }, title)),
        hasContent !== false && (React.createElement(mosaic_1.Panel.Content, { pl: 5, pr: 3, className: "sl-py-0" }, children))));
};
exports.SubSectionPanel = SubSectionPanel;
//# sourceMappingURL=Sections.js.map