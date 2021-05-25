"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loading = void 0;
const tslib_1 = require("tslib");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const mosaic_1 = require("@stoplight/mosaic");
const react_1 = tslib_1.__importDefault(require("react"));
const Loading = () => (react_1.default.createElement(mosaic_1.Flex, { justify: "center", alignItems: "center", w: "full", minH: "screen", color: "muted" },
    react_1.default.createElement(mosaic_1.Icon, { icon: free_solid_svg_icons_1.faCircleNotch, size: "3x", spin: true })));
exports.Loading = Loading;
//# sourceMappingURL=index.js.map