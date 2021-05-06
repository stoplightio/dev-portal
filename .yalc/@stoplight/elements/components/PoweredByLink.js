"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoweredByLink = void 0;
const tslib_1 = require("tslib");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const React = tslib_1.__importStar(require("react"));
const PoweredByLink = ({ headless, source, pathname, packageType }) => {
    return (React.createElement("a", { className: !headless ? 'border-t flex items-center px-5 py-3 reset' : 'flex items-center px-1 py-3 reset justify-end', href: `https://stoplight.io/?utm_source=elements${packageType === 'elements-dev-portal' ? '-dev-portal' : ''}&utm_medium=${source}&utm_campaign=powered_by&utm_content=${pathname}`, target: "_blank", rel: "noopener noreferrer" },
        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBolt, className: !headless ? 'mr-1 fa-fw' : 'mr-1 fa-fw', style: { color: 'rgba(144, 97, 249, 1)' } }),
        React.createElement("div", null,
            "powered by\u00A0",
            React.createElement("strong", null, "Stoplight"))));
};
exports.PoweredByLink = PoweredByLink;
//# sourceMappingURL=PoweredByLink.js.map