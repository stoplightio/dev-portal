"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaAndDescription = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@blueprintjs/core");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const json_schema_viewer_1 = require("@stoplight/json-schema-viewer");
const markdown_viewer_1 = require("@stoplight/markdown-viewer");
const types_1 = require("@stoplight/types");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const React = tslib_1.__importStar(require("react"));
const constants_1 = require("../../constants");
const InlineRefResolver_1 = require("../../context/InlineRefResolver");
const MarkdownViewer_1 = require("../MarkdownViewer");
const SchemaAndDescription = ({ className, title, description, schema, errors, viewMode, }) => {
    const resolveRef = InlineRefResolver_1.useInlineRefResolver();
    return (React.createElement(React.Fragment, null,
        React.createElement(SchemaTitle, { title: title, errors: errors }),
        description && React.createElement(MarkdownViewer_1.MarkdownViewer, { markdown: description }),
        React.createElement(json_schema_viewer_1.JsonSchemaViewer, { resolveRef: resolveRef, className: classnames_1.default(className, markdown_viewer_1.CLASSNAMES.block), schema: schema, viewMode: viewMode })));
};
exports.SchemaAndDescription = SchemaAndDescription;
const SchemaTitle = ({ title, errors }) => {
    const hasErrors = errors && errors.length;
    if (!title && !hasErrors) {
        return null;
    }
    return (React.createElement("div", { className: classnames_1.default('MV_block_header flex items-center p-2'), style: { height: 30 } },
        title && (React.createElement("div", { className: "flex items-center flex-1" },
            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: constants_1.NodeTypeIconDefs[types_1.NodeType.Model], color: constants_1.NodeTypeColors[types_1.NodeType.Model] }),
            React.createElement("div", { className: classnames_1.default(core_1.Classes.TEXT_MUTED, 'px-2'), style: { fontSize: 12 } }, title))),
        React.createElement("div", { className: "flex-1" }),
        errors && React.createElement(Errors, { errors: errors })));
};
const Errors = ({ errors }) => {
    if (!errors || !errors.length) {
        return null;
    }
    return (React.createElement(core_1.Popover, { interactionKind: core_1.PopoverInteractionKind.HOVER, target: React.createElement(core_1.Tag, { intent: core_1.Intent.DANGER },
            errors.length,
            " Error",
            errors.length > 1 && 's'), content: React.createElement("div", { className: classnames_1.default('p-6 max-w-md break-all', {
                'list-none': errors.length === 1,
            }) }, errors.map((error, index) => {
            return (React.createElement("li", { key: index, className: index > 1 ? 'mt-3' : '' }, error));
        })) }));
};
//# sourceMappingURL=index.js.map