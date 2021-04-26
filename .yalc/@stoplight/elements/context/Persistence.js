"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withPersistenceBoundary = exports.PersistenceContextProvider = void 0;
const tslib_1 = require("tslib");
const jotai_1 = require("jotai");
const React = tslib_1.__importStar(require("react"));
const utils_1 = require("../hoc/utils");
exports.PersistenceContextProvider = jotai_1.Provider;
function withPersistenceBoundary(WrappedComponent) {
    const WithPersistenceBoundary = props => {
        return (React.createElement(exports.PersistenceContextProvider, null,
            React.createElement(WrappedComponent, Object.assign({}, props))));
    };
    WithPersistenceBoundary.displayName = `withPersistenceBoundary(${utils_1.getDisplayName(WrappedComponent)})`;
    return WithPersistenceBoundary;
}
exports.withPersistenceBoundary = withPersistenceBoundary;
//# sourceMappingURL=Persistence.js.map