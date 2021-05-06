"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpOperation = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const react_error_boundary_1 = require("@stoplight/react-error-boundary");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const lodash_1 = require("lodash");
const React = tslib_1.__importStar(require("react"));
const Provider_1 = require("../../../containers/Provider");
const security_1 = require("../../../utils/oas/security");
const MarkdownViewer_1 = require("../../MarkdownViewer");
const TryIt_1 = require("../../TryIt");
const Badges_1 = require("./Badges");
const Request_1 = require("./Request");
const Responses_1 = require("./Responses");
const HttpOperationComponent = React.memo(({ className, data, headless, uri }) => {
    var _a;
    const info = React.useContext(Provider_1.ActiveInfoContext);
    const mocking = React.useContext(Provider_1.MockingContext);
    const isDeprecated = !!data.deprecated;
    const [responseMediaType, setResponseMediaType] = React.useState('');
    const [responseStatusCode, setResponseStatusCode] = React.useState('');
    const [requestBodyIndex, setTextRequestBodyIndex] = React.useState(0);
    const httpServiceUri = uri && security_1.getServiceUriFromOperation(uri);
    const securitySchemes = lodash_1.flatten(data.security);
    const hasBadges = isDeprecated || securitySchemes.length > 0;
    if (!headless)
        return (React.createElement(mosaic_1.Box, { bg: "transparent", className: classnames_1.default('HttpOperation', className), w: "full" },
            React.createElement(mosaic_1.Heading, { size: 1, fontWeight: "semibold" }, data.summary || data.iid || `${data.method} ${data.path}`),
            hasBadges && (React.createElement(mosaic_1.HStack, { spacing: 2, mt: 3 },
                isDeprecated && React.createElement(Badges_1.DeprecatedBadge, null),
                lodash_1.sortBy(securitySchemes, 'type').map((scheme, i) => (React.createElement(Badges_1.SecurityBadge, { key: i, scheme: scheme, httpServiceUri: httpServiceUri }))))),
            React.createElement(mosaic_1.Flex, { mt: 12 },
                React.createElement(mosaic_1.Box, { flex: 1 },
                    data.description && (React.createElement(MarkdownViewer_1.MarkdownViewer, { className: "HttpOperation__Description mb-10", markdown: data.description })),
                    React.createElement(Request_1.Request, { onChange: setTextRequestBodyIndex, operation: data }),
                    data.responses && (React.createElement(Responses_1.Responses, { responses: data.responses, onMediaTypeChange: setResponseMediaType, onStatusCodeChange: setResponseStatusCode }))),
                React.createElement(mosaic_1.Box, { ml: 16, pos: "relative", w: "2/5", style: { maxWidth: 500 } },
                    React.createElement(mosaic_1.Box, { className: "HttpOperation__gutter" },
                        React.createElement(TryIt_1.TryItWithRequestSamples, { httpOperation: data, responseMediaType: responseMediaType, responseStatusCode: responseStatusCode, requestBodyIndex: requestBodyIndex, showMocking: info.showMocking, mockUrl: info.showMocking ? (_a = mocking.mockUrl) === null || _a === void 0 ? void 0 : _a.servicePath : undefined }))))));
    return (React.createElement("div", { className: classnames_1.default('HttpOperation px-5', className) },
        data.description && (React.createElement(MarkdownViewer_1.MarkdownViewer, { className: "HttpOperation__Description mb-10 ml-1", markdown: data.description })),
        React.createElement(Request_1.Request, { onChange: setTextRequestBodyIndex, operation: data }),
        data.responses && (React.createElement(Responses_1.Responses, { responses: data.responses, onMediaTypeChange: setResponseMediaType, onStatusCodeChange: setResponseStatusCode }))));
});
HttpOperationComponent.displayName = 'HttpOperation.Component';
exports.HttpOperation = react_error_boundary_1.withErrorBoundary(HttpOperationComponent, {
    recoverableProps: ['data'],
});
//# sourceMappingURL=HttpOperation.js.map