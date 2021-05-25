"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpSecuritySchemes = void 0;
const tslib_1 = require("tslib");
const ui_kit_1 = require("@stoplight/ui-kit");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const lodash_1 = require("lodash");
const React = tslib_1.__importStar(require("react"));
const constants_1 = require("../../../constants");
const MarkdownViewer_1 = require("../../MarkdownViewer");
const Sections_1 = require("../Sections");
const HttpSecuritySchemes = ({ securities, title, className }) => {
    if (!securities || !securities.length)
        return null;
    return (React.createElement("div", { className: classnames_1.default('HttpSecuritySchemes', className) },
        title && React.createElement(Sections_1.SectionTitle, { title: title }),
        React.createElement("div", { className: "TreeList" }, lodash_1.flatten(securities).map((security, index) => {
            const securityClassName = classnames_1.default('TreeListItem', {
                'TreeListItem--striped': index % 2 !== 0,
            });
            return React.createElement(SecurityScheme, { key: security.key, className: securityClassName, security: security });
        }))));
};
exports.HttpSecuritySchemes = HttpSecuritySchemes;
exports.HttpSecuritySchemes.displayName = 'HttpSecuritySchemes';
const SecurityScheme = ({ security, className }) => {
    var _a;
    return (React.createElement("div", { className: classnames_1.default(className, 'HttpSecuritySchemes__SecurityScheme px-4 py-3 flex items-start'), style: { alignItems: 'start' } },
        React.createElement("div", { style: { minWidth: '60px' } },
            React.createElement("div", null, security.key),
            React.createElement("div", { className: `text-sm text-${constants_1.HttpSecuritySchemeColors[security.type]}-7 dark:text-${(_a = constants_1.HttpSecuritySchemeColors[security.type]) !== null && _a !== void 0 ? _a : 'gray'}-6` }, security.type)),
        React.createElement("div", { className: "flex-1 ml-4" },
            security.description && (React.createElement(MarkdownViewer_1.MarkdownViewer, { className: "flex-1 text-darken-7 dark:text-lighten-7", markdown: security.description })),
            React.createElement("div", { className: "flex flex-wrap" },
                'scheme' in security && security.scheme && (React.createElement(ui_kit_1.Tag, { className: "mt-2 mr-2", minimal: true },
                    "Scheme: ",
                    security.scheme)),
                'bearerFormat' in security && security.bearerFormat && (React.createElement(ui_kit_1.Tag, { className: "mt-2 mr-2", minimal: true },
                    "Bearer Format: ",
                    security.bearerFormat)),
                'in' in security && security.in && (React.createElement(ui_kit_1.Tag, { className: "mt-2 mr-2", minimal: true },
                    lodash_1.startCase(security.in),
                    " parameter name: ",
                    security.name)),
                'openIdConnectUrl' in security && security.openIdConnectUrl && (React.createElement(ui_kit_1.Tag, { className: "mt-2 mr-2", minimal: true },
                    "OpenId Connect URL: ",
                    security.openIdConnectUrl))),
            security.type === 'oauth2' &&
                lodash_1.map(security.flows, (flowObject, flow) => React.createElement(OAuth2Flow, { key: flow, flow: flow, flowObject: flowObject })))));
};
SecurityScheme.displayName = 'HttpSecuritySchemes.SecurityScheme';
const OAuth2Flow = ({ flow, flowObject, }) => {
    if (!flowObject)
        return null;
    return (React.createElement("div", { className: "py-2 mt-2 border-t HttpSecuritySchemes__OAuth2Flow" },
        React.createElement("div", { className: "py-2 font-semibold" },
            lodash_1.startCase(flow),
            " OAuth Flow"),
        'authorizationUrl' in flowObject && flowObject.authorizationUrl && (React.createElement("div", { className: "flex items-center py-1" },
            React.createElement("div", { className: "mr-1" }, "Authorize URL -"),
            React.createElement("div", null,
                React.createElement("a", { href: flowObject.authorizationUrl, target: "_blank", rel: "noopener noreferrer" }, flowObject.authorizationUrl)))),
        'tokenUrl' in flowObject && flowObject.tokenUrl && (React.createElement("div", { className: "flex items-center py-1" },
            React.createElement("div", { className: "mr-1" }, "Token URL -"),
            React.createElement("div", null,
                React.createElement("a", { href: flowObject.tokenUrl, target: "_blank", rel: "noopener noreferrer" }, flowObject.tokenUrl)))),
        'refreshUrl' in flowObject && flowObject.refreshUrl && (React.createElement("div", { className: "flex items-center py-1" },
            React.createElement("div", { className: "mr-1" }, "Refresh URL -"),
            React.createElement("div", null,
                React.createElement("a", { href: flowObject.refreshUrl, target: "_blank", rel: "noopener noreferrer" }, flowObject.refreshUrl)))),
        !lodash_1.isEmpty(flowObject.scopes) && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "py-1" }, "Scopes"),
            React.createElement("ul", { className: "list-disc", style: { margin: 0 } }, lodash_1.entries(flowObject.scopes).map(([scope, description]) => {
                return (React.createElement("li", { className: "py-1", key: scope },
                    React.createElement(ui_kit_1.Tag, { minimal: true }, scope),
                    " - ",
                    React.createElement("span", { className: "text-darken-7 dark:text-lighten-7" }, description)));
            }))))));
};
OAuth2Flow.displayName = 'HttpSecuritySchemes.OAuth2Flow';
//# sourceMappingURL=index.js.map