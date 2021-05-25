"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_META_COLOR = exports.NODE_TYPE_ICON_COLOR = exports.NODE_TYPE_META_ICON = exports.NODE_TYPE_TITLE_ICON = void 0;
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
exports.NODE_TYPE_TITLE_ICON = {
    http_service: free_solid_svg_icons_1.faCloud,
};
exports.NODE_TYPE_META_ICON = {
    model: free_solid_svg_icons_1.faCube,
};
exports.NODE_TYPE_ICON_COLOR = {
    model: 'warning',
};
exports.NODE_META_COLOR = {
    get: 'success',
    post: 'primary',
    put: 'warning',
    patch: 'warning',
    delete: 'danger',
};
//# sourceMappingURL=constants.js.map