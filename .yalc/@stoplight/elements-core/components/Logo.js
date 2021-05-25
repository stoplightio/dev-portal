"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const Logo = ({ logo }) => {
    var _a;
    return (React.createElement(mosaic_1.Box, { display: "inline", mr: 3, rounded: "lg", overflowY: "hidden", overflowX: "hidden", style: { backgroundColor: (_a = logo.backgroundColor) !== null && _a !== void 0 ? _a : 'transparent' } }, logo.href ? (React.createElement("a", { href: logo.href, target: "_blank", rel: "noopener noreferrer" },
        React.createElement("img", { src: logo.url, height: "30px", width: "30px", alt: logo.altText }))) : (React.createElement("img", { src: logo.url, height: "30px", width: "30px", alt: logo.altText }))));
};
exports.Logo = Logo;
//# sourceMappingURL=Logo.js.map