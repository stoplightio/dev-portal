"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withQueryClientProvider = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_query_1 = require("react-query");
const utils_1 = require("./utils");
const queryClient = new react_query_1.QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
        },
    },
});
function withQueryClientProvider(WrappedComponent) {
    const WithQueryClientProvider = (props) => {
        return (react_1.default.createElement(react_query_1.QueryClientProvider, { client: queryClient },
            react_1.default.createElement(WrappedComponent, Object.assign({}, props))));
    };
    WithQueryClientProvider.displayName = `WithQueryClientProvider(${utils_1.getDisplayName(WrappedComponent)})`;
    return WithQueryClientProvider;
}
exports.withQueryClientProvider = withQueryClientProvider;
//# sourceMappingURL=withQueryClientProvider.js.map