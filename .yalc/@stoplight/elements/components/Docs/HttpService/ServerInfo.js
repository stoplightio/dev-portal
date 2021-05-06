"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerInfo = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const Provider_1 = require("../../../containers/Provider");
const guards_1 = require("../../../utils/guards");
const IServer_1 = require("../../../utils/http-spec/IServer");
const ServerInfo = ({ servers, mockUrl }) => {
    const info = React.useContext(Provider_1.ActiveInfoContext);
    const productionServer = servers === null || servers === void 0 ? void 0 : servers[0];
    const productionUrl = productionServer && IServer_1.getServerUrlWithDefaultValues(productionServer);
    return (React.createElement(mosaic_1.InvertTheme, null,
        React.createElement(mosaic_1.Panel, { rounded: true, isCollapsible: false, className: "BaseURLContent", w: "full" },
            React.createElement(mosaic_1.Panel.Titlebar, { whitespace: "nowrap" }, "API Base URL"),
            React.createElement("div", { className: "overflow-x-auto" },
                React.createElement(mosaic_1.Panel.Content, { w: "max", className: "flex flex-col" },
                    productionUrl && guards_1.isProperUrl(productionUrl) && (React.createElement("div", { className: "whitespace-nowrap" },
                        info.showMocking && (React.createElement(mosaic_1.Text, { pr: 2, fontWeight: "bold" }, "Production:")),
                        React.createElement(mosaic_1.Text, { "aria-label": "production-server" }, productionUrl))),
                    info.showMocking && mockUrl && guards_1.isProperUrl(mockUrl) && (React.createElement("div", { className: "flex flex-row" },
                        React.createElement(mosaic_1.Text, { fontWeight: "bold" }, "Mock Server:"),
                        React.createElement(mosaic_1.Text, { "aria-label": "mock-server", pl: 2 }, mockUrl))))))));
};
exports.ServerInfo = ServerInfo;
//# sourceMappingURL=ServerInfo.js.map