"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityBadge = exports.DeprecatedBadge = exports.Badge = void 0;
const tslib_1 = require("tslib");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const ui_kit_1 = require("@stoplight/ui-kit");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const react_1 = tslib_1.__importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const security_1 = require("../../../utils/oas/security");
const Badge = ({ icon, className, children }) => (react_1.default.createElement(ui_kit_1.Tag, { role: "badge", className: classnames_1.default('sl-text-md p-1 sl-font-semibold sl-mt-1 sl-mr-1', className), round: true, "aria-label": children },
    icon && react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "mr-2", icon: icon }),
    react_1.default.createElement("span", null, children)));
exports.Badge = Badge;
const DeprecatedBadge = () => (react_1.default.createElement(ui_kit_1.Tooltip, { position: ui_kit_1.Position.BOTTOM_LEFT, content: "This operation has been marked as deprecated, which means it could be removed at some point in the future." },
    react_1.default.createElement(exports.Badge, { icon: free_solid_svg_icons_1.faExclamationCircle, className: "sl-bg-warning sl-ml-0" }, "Deprecated")));
exports.DeprecatedBadge = DeprecatedBadge;
const SecurityBadge = ({ scheme, httpServiceUri, }) => {
    const badge = (react_1.default.createElement(exports.Badge, { icon: free_solid_svg_icons_1.faLock, className: "sl-bg-gray-6 sl-max-w-xs sl-truncate" }, security_1.getReadableSecurityName(scheme, true)));
    return httpServiceUri ? (react_1.default.createElement(react_router_dom_1.Link, { to: `${httpServiceUri}?security=${scheme.key}`, className: "sl-no-underline sl-block" }, badge)) : (badge);
};
exports.SecurityBadge = SecurityBadge;
//# sourceMappingURL=Badges.js.map