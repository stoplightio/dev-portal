"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeToStarter = void 0;
const tslib_1 = require("tslib");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const mosaic_1 = require("@stoplight/mosaic");
const react_1 = tslib_1.__importDefault(require("react"));
const UpgradeToStarter = () => (react_1.default.createElement(mosaic_1.Flex, { as: "a", href: "https://stoplight.io/pricing/", target: "_blank", rel: "noreferrer noopener", justify: "center", alignItems: "center", w: "full", minH: "screen", color: "muted", flexDirection: "col" },
    react_1.default.createElement(mosaic_1.Icon, { icon: free_solid_svg_icons_1.faExclamationTriangle, size: "4x" }),
    react_1.default.createElement(mosaic_1.Box, { pt: 3 }, "Please upgrade your Stoplight Workspace to the Starter Plan to use Elements Dev Portal in production.")));
exports.UpgradeToStarter = UpgradeToStarter;
//# sourceMappingURL=index.js.map