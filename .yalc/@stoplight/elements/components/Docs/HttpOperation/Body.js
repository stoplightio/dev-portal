"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Body = void 0;
const tslib_1 = require("tslib");
const json_schema_viewer_1 = require("@stoplight/json-schema-viewer");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const InlineRefResolver_1 = require("../../../context/InlineRefResolver");
const guards_1 = require("../../../utils/guards");
const MarkdownViewer_1 = require("../../MarkdownViewer");
const Sections_1 = require("../Sections");
const Body = ({ body: { contents = [], description }, onChange }) => {
    var _a;
    const refResolver = InlineRefResolver_1.useInlineRefResolver();
    const [chosenContent, setChosenContent] = React.useState(0);
    React.useEffect(() => {
        onChange(chosenContent);
    }, [chosenContent]);
    if (contents.length === 0 && !description)
        return null;
    const schema = (_a = contents[chosenContent]) === null || _a === void 0 ? void 0 : _a.schema;
    return (React.createElement(Sections_1.SubSectionPanel, { title: "Body", rightComponent: contents.length > 0 && (React.createElement(mosaic_1.Select, { "aria-label": "Request Body Content Type", value: String(chosenContent), onChange: (value) => setChosenContent(parseInt(String(value), 10)), options: contents.map((content, index) => ({ label: content.mediaType, value: index })), size: "sm" })) },
        description && React.createElement(MarkdownViewer_1.MarkdownViewer, { className: "sl-my-2", markdown: description }),
        guards_1.isJSONSchema(schema) && (React.createElement(mosaic_1.Box, null,
            React.createElement(json_schema_viewer_1.JsonSchemaViewer, { resolveRef: refResolver, schema: schema, viewMode: "write", hideExamples: true })))));
};
exports.Body = Body;
exports.Body.displayName = 'HttpOperation.Body';
//# sourceMappingURL=Body.js.map