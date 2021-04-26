"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDisplayName = void 0;
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
exports.getDisplayName = getDisplayName;
//# sourceMappingURL=utils.js.map