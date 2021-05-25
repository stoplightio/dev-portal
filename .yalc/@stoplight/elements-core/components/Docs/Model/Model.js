"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
const tslib_1 = require("tslib");
const react_error_boundary_1 = require("@stoplight/react-error-boundary");
const ui_kit_1 = require("@stoplight/ui-kit");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const React = tslib_1.__importStar(require("react"));
const SchemaAndDescription_1 = require("../../SchemaAndDescription");
const ModelComponent = ({ data, className, headless }) => {
    return (React.createElement("div", { className: classnames_1.default('Model MarkdownViewer', className) },
        !headless && data.title !== void 0 && React.createElement("h1", { className: ui_kit_1.Classes.HEADING }, data.title),
        React.createElement(SchemaAndDescription_1.SchemaAndDescription, { schema: data, description: data.description })));
};
exports.Model = react_error_boundary_1.withErrorBoundary(ModelComponent, { recoverableProps: ['data'] });
//# sourceMappingURL=Model.js.map