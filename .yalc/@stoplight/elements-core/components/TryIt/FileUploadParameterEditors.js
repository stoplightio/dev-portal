"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadParameterEditor = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const useUniqueId_1 = require("../../hooks/useUniqueId");
const FileUploadParameterEditor = ({ parameter, value, onChange }) => {
    var _a;
    const parameterDisplayName = `${parameter.name}${parameter.required ? '*' : ''}`;
    const handleFileChange = (event) => {
        var _a;
        const file = (_a = event.currentTarget.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file === undefined)
            return;
        onChange(file);
    };
    const clearFile = () => {
        onChange(undefined);
    };
    const parameterInputId = useUniqueId_1.useUniqueId(`id_${parameter.name}_`);
    const fileUploadInputId = `${parameterInputId}-file-input`;
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { "aria-hidden": "true", "data-testid": "param-label", htmlFor: parameterInputId }, parameterDisplayName),
        React.createElement(mosaic_1.Text, { mx: 3 }, ":"),
        React.createElement(mosaic_1.Flex, { flex: 1, alignItems: "center" },
            React.createElement(mosaic_1.Input, { id: parameterInputId, style: { paddingLeft: 15 }, "aria-label": parameter.name, appearance: "minimal", flex: 1, placeholder: "pick a file", type: "text", required: true, value: (_a = value === null || value === void 0 ? void 0 : value.name) !== null && _a !== void 0 ? _a : '', disabled: true }),
            value && (React.createElement("button", { className: "mr-3 p-2", "aria-label": "Remove file", onClick: clearFile },
                React.createElement(mosaic_1.Icon, { icon: "times" }))),
            React.createElement("div", null,
                React.createElement("label", { role: "button", htmlFor: fileUploadInputId }, "Upload"),
                React.createElement("input", { onChange: handleFileChange, type: "file", hidden: true, id: fileUploadInputId })))));
};
exports.FileUploadParameterEditor = FileUploadParameterEditor;
//# sourceMappingURL=FileUploadParameterEditors.js.map