"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = exports.Responses = exports.HttpCodeColor = void 0;
const tslib_1 = require("tslib");
const json_schema_viewer_1 = require("@stoplight/json-schema-viewer");
const mosaic_1 = require("@stoplight/mosaic");
const lodash_1 = require("lodash");
const React = tslib_1.__importStar(require("react"));
const InlineRefResolver_1 = require("../../../context/InlineRefResolver");
const MarkdownViewer_1 = require("../../MarkdownViewer");
const Sections_1 = require("../Sections");
const Parameters_1 = require("./Parameters");
exports.HttpCodeColor = {
    1: 'gray',
    2: 'green',
    3: 'yellow',
    4: 'orange',
    5: 'red',
};
const Responses = ({ responses: unsortedResponses, onStatusCodeChange, onMediaTypeChange }) => {
    var _a, _b;
    const responses = lodash_1.sortBy(lodash_1.uniqBy(unsortedResponses, r => r.code), r => r.code);
    const [activeResponseId, setActiveResponseId] = React.useState((_b = (_a = responses[0]) === null || _a === void 0 ? void 0 : _a.code) !== null && _b !== void 0 ? _b : '');
    React.useEffect(() => {
        onStatusCodeChange(activeResponseId);
    }, [activeResponseId]);
    if (!responses.length)
        return null;
    return (React.createElement(mosaic_1.Tabs, { selectedId: activeResponseId, onChange: setActiveResponseId },
        React.createElement(Sections_1.SectionTitle, { title: "Responses" },
            React.createElement(mosaic_1.TabList, null, responses.map(({ code }) => (React.createElement(mosaic_1.Tab, { key: code, id: code }, code))))),
        React.createElement(mosaic_1.TabPanels, null, responses.map(response => (React.createElement(mosaic_1.TabPanel, { key: response.code, id: response.code },
            React.createElement(exports.Response, { response: response, onMediaTypeChange: onMediaTypeChange })))))));
};
exports.Responses = Responses;
exports.Responses.displayName = 'HttpOperation.Responses';
const Response = ({ response: { contents = [], headers = [], description }, onMediaTypeChange, }) => {
    const [chosenContent, setChosenContent] = React.useState(0);
    const refResolver = InlineRefResolver_1.useInlineRefResolver();
    const responseContent = contents[chosenContent];
    const schema = responseContent === null || responseContent === void 0 ? void 0 : responseContent.schema;
    React.useEffect(() => {
        responseContent && onMediaTypeChange(responseContent.mediaType);
    }, [responseContent]);
    return (React.createElement(mosaic_1.Box, null,
        description && (React.createElement(mosaic_1.Box, { ml: 1, mb: 6 },
            React.createElement(MarkdownViewer_1.MarkdownViewer, { markdown: description }))),
        headers.length > 0 && (React.createElement(Sections_1.SubSectionPanel, { title: "Headers" },
            React.createElement(Parameters_1.Parameters, { parameterType: "header", parameters: headers }))),
        contents.length > 0 && (React.createElement(Sections_1.SubSectionPanel, { title: "Body", rightComponent: React.createElement(mosaic_1.Select, { "aria-label": "Response Body Content Type", value: String(chosenContent), onChange: (value) => setChosenContent(parseInt(String(value), 10)), options: contents.map((content, index) => ({ label: content.mediaType, value: index })), size: "sm" }) }, schema && (React.createElement(mosaic_1.Box, null,
            React.createElement(json_schema_viewer_1.JsonSchemaViewer, { schema: schema, resolveRef: refResolver, viewMode: "read", hideExamples: true })))))));
};
exports.Response = Response;
exports.Response.displayName = 'HttpOperation.Response';
//# sourceMappingURL=Responses.js.map