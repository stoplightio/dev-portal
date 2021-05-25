"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const constants_1 = require("../../../constants");
const Sections_1 = require("../Sections");
const Body_1 = require("./Body");
const Parameters_1 = require("./Parameters");
const Request = ({ operation: { path, method, request, request: { path: pathParams = [], headers: headerParams = [], cookie: cookieParams = [], body, query: queryParams = [], } = {}, security, }, onChange, }) => {
    if (!request || typeof request !== 'object')
        return null;
    const pathParamBlock = (React.createElement("div", null,
        React.createElement(mosaic_1.Text, { textTransform: "uppercase", mr: 1, color: constants_1.HttpMethodColors[method] }, method),
        ' ',
        path));
    return (React.createElement(mosaic_1.Box, { mb: 10 },
        React.createElement(Sections_1.SectionTitle, { title: "Request" }),
        React.createElement(Sections_1.SubSectionPanel, { title: pathParamBlock, hasContent: pathParams.length > 0 },
            React.createElement(Parameters_1.Parameters, { parameterType: "path", parameters: pathParams })),
        queryParams.length > 0 && (React.createElement(Sections_1.SubSectionPanel, { title: "Query" },
            React.createElement(Parameters_1.Parameters, { parameterType: "query", parameters: queryParams }))),
        headerParams.length > 0 && (React.createElement(Sections_1.SubSectionPanel, { title: "Headers" },
            React.createElement(Parameters_1.Parameters, { parameterType: "header", parameters: headerParams }))),
        cookieParams.length > 0 && (React.createElement(Sections_1.SubSectionPanel, { title: "Cookie" },
            React.createElement(Parameters_1.Parameters, { parameterType: "cookie", parameters: cookieParams }))),
        body && React.createElement(Body_1.Body, { onChange: onChange, body: body })));
};
exports.Request = Request;
exports.Request.displayName = 'HttpOperation.Request';
//# sourceMappingURL=Request.js.map