"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withMosaicProvider = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("./utils");
function withMosaicProvider(WrappedComponent) {
    const WithMosaicProvider = (props) => {
        return (react_1.default.createElement(mosaic_1.Provider, { style: { height: '100%' } },
            react_1.default.createElement(WrappedComponent, Object.assign({}, props))));
    };
    WithMosaicProvider.displayName = `WithMosaicProvider(${utils_1.getDisplayName(WrappedComponent)})`;
    return WithMosaicProvider;
}
exports.withMosaicProvider = withMosaicProvider;
//# sourceMappingURL=withMosaicProvider.js.map