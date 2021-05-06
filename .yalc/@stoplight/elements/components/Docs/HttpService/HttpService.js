"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpService = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const react_error_boundary_1 = require("@stoplight/react-error-boundary");
const React = tslib_1.__importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Provider_1 = require("../../../containers/Provider");
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
const HttpServiceComponent = React.memo(({ className, data, headless }) => {
    var _a, _b, _c, _d, _e;
    const { search, pathname } = react_router_dom_1.useLocation();
    const mocking = React.useContext(Provider_1.MockingContext);
    const query = new URLSearchParams(search);
    const description = data.description && React.createElement(MarkdownViewer_1.MarkdownViewer, { className: "sl-mb-10", markdown: data.description });
    const dataPanel = (React.createElement(mosaic_1.VStack, { spacing: 6 },
        ((_a = data.servers) !== null && _a !== void 0 ? _a : (_b = mocking.mockUrl) === null || _b === void 0 ? void 0 : _b.servicePath) && (React.createElement(ServerInfo_1.ServerInfo, { servers: data.servers, mockUrl: (_c = mocking.mockUrl) === null || _c === void 0 ? void 0 : _c.servicePath })),
        React.createElement(mosaic_1.Box, null, ((_d = data.securitySchemes) === null || _d === void 0 ? void 0 : _d.length) && (React.createElement(SecuritySchemes_1.SecuritySchemes, { schemes: data.securitySchemes, defaultScheme: query.get('security') || undefined })))));
    return (React.createElement(mosaic_1.Box, { className: className, w: "full" },
        data.name && (React.createElement(mosaic_1.Heading, { size: 1, fontWeight: "semibold" }, data.name)),
        data.version && (React.createElement(mosaic_1.Box, { mt: 3 },
            React.createElement(Badges_1.Badge, { className: "sl-bg-gray-6" }, enhanceVersionString(data.version)))),
        !headless ? (React.createElement(mosaic_1.Flex, { mt: 12 },
            React.createElement(mosaic_1.Box, { flex: 1 }, description),
            React.createElement(mosaic_1.Box, { ml: 16, pos: "relative", w: "2/5", style: { maxWidth: 500 } }, dataPanel))) : (React.createElement(mosaic_1.Box, { mb: 10 },
            description,
            React.createElement(PoweredByLink_1.PoweredByLink, { source: (_e = data.name) !== null && _e !== void 0 ? _e : 'no-title', pathname: pathname, packageType: "elements", headless: true }),
            dataPanel))));
});
HttpServiceComponent.displayName = 'HttpService.Component';
exports.HttpService = react_error_boundary_1.withErrorBoundary(HttpServiceComponent, { recoverableProps: ['data'] });
//# sourceMappingURL=HttpService.js.map