"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpService = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const react_error_boundary_1 = require("@stoplight/react-error-boundary");
const React = tslib_1.__importStar(require("react"));
const MockingProvider_1 = require("../../../containers/MockingProvider");
const MarkdownViewer_1 = require("../../MarkdownViewer");
const PoweredByLink_1 = require("../../PoweredByLink");
const Badges_1 = require("../HttpOperation/Badges");
const SecuritySchemes_1 = require("./SecuritySchemes");
const ServerInfo_1 = require("./ServerInfo");
const enhanceVersionString = (version) => {
    if (version[0] === 'v')
        return version;
    return `v${version}`;
};
const HttpServiceComponent = React.memo(({ className, data, headless, location = {} }) => {
    var _a, _b, _c;
    const { search, pathname } = location;
    const mocking = React.useContext(MockingProvider_1.MockingContext);
    const query = new URLSearchParams(search);
    const description = data.description && React.createElement(MarkdownViewer_1.MarkdownViewer, { className: "sl-mb-10", markdown: data.description });
    const dataPanel = (React.createElement(mosaic_1.VStack, { spacing: 6 },
        ((_a = data.servers) !== null && _a !== void 0 ? _a : mocking.mockUrl) && React.createElement(ServerInfo_1.ServerInfo, { servers: data.servers, mockUrl: mocking.mockUrl }),
        React.createElement(mosaic_1.Box, null, ((_b = data.securitySchemes) === null || _b === void 0 ? void 0 : _b.length) && (React.createElement(SecuritySchemes_1.SecuritySchemes, { schemes: data.securitySchemes, defaultScheme: query.get('security') || undefined })))));
    return (React.createElement(mosaic_1.Box, { className: className, w: "full" },
        data.name && (React.createElement(mosaic_1.Heading, { size: 1, fontWeight: "semibold" }, data.name)),
        data.version && (React.createElement(mosaic_1.Box, { mt: 3 },
            React.createElement(Badges_1.Badge, { className: "sl-bg-gray-6" }, enhanceVersionString(data.version)))),
        !headless ? (React.createElement(mosaic_1.Flex, { mt: 12 },
            React.createElement(mosaic_1.Box, { flex: 1 }, description),
            React.createElement(mosaic_1.Box, { ml: 16, pos: "relative", w: "2/5", style: { maxWidth: 500 } }, dataPanel))) : (React.createElement(mosaic_1.Box, { mb: 10 },
            description,
            pathname && (React.createElement(PoweredByLink_1.PoweredByLink, { source: (_c = data.name) !== null && _c !== void 0 ? _c : 'no-title', pathname: pathname, packageType: "elements", headless: true })),
            dataPanel))));
});
HttpServiceComponent.displayName = 'HttpService.Component';
exports.HttpService = react_error_boundary_1.withErrorBoundary(HttpServiceComponent, { recoverableProps: ['data'] });
//# sourceMappingURL=HttpService.js.map