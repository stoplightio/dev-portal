"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeWithSchemaViewer = void 0;
const tslib_1 = require("tslib");
const markdown_viewer_1 = require("@stoplight/markdown-viewer");
const lodash_1 = require("lodash");
const react_1 = tslib_1.__importDefault(require("react"));
const useParsedValue_1 = require("../../../hooks/useParsedValue");
const guards_1 = require("../../../utils/guards");
const SchemaAndDescription_1 = require("../../SchemaAndDescription");
const CodeWithSchemaViewer = (props) => {
    const { node: { annotations, value, resolved, meta }, } = props;
    const nodeType = lodash_1.get(annotations, 'type') || meta;
    const parsedValue = useParsedValue_1.useParsedValue(resolved !== null && resolved !== void 0 ? resolved : value);
    if (nodeType === 'json_schema') {
        if (!guards_1.isJSONSchema(parsedValue)) {
            return null;
        }
        return react_1.default.createElement(SchemaAndDescription_1.SchemaAndDescription, { title: annotations === null || annotations === void 0 ? void 0 : annotations.title, schema: parsedValue });
    }
    const DefaultCode = markdown_viewer_1.defaultComponentMapping.code;
    return react_1.default.createElement(DefaultCode, Object.assign({}, props));
};
exports.CodeWithSchemaViewer = CodeWithSchemaViewer;
//# sourceMappingURL=CodeWithSchemaViewer.js.map