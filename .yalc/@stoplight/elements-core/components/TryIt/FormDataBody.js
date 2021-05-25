"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormDataBody = void 0;
const tslib_1 = require("tslib");
const json_1 = require("@stoplight/json");
const mosaic_1 = require("@stoplight/mosaic");
const lodash_1 = require("lodash");
const React = tslib_1.__importStar(require("react"));
const FileUploadParameterEditors_1 = require("./FileUploadParameterEditors");
const parameter_utils_1 = require("./parameter-utils");
const ParameterEditor_1 = require("./ParameterEditor");
const FormDataBody = ({ specification, values, onChangeValues }) => {
    const schema = specification.schema;
    const parameters = schema === null || schema === void 0 ? void 0 : schema.properties;
    React.useEffect(() => {
        if (parameters === undefined) {
            console.warn(`Invalid schema in form data spec: ${json_1.safeStringify(schema)}`);
        }
    }, [parameters, schema]);
    if (parameters === undefined) {
        return null;
    }
    return (React.createElement(mosaic_1.Panel, { defaultIsOpen: true },
        React.createElement(mosaic_1.Panel.Titlebar, null, "Body"),
        React.createElement(mosaic_1.Panel.Content, { className: "sl-overflow-y-auto ParameterGrid OperationParametersContent" }, parameter_utils_1.mapSchemaPropertiesToParameters(parameters).map(parameter => {
            const supportsFileUpload = parameter_utils_1.parameterSupportsFileUpload(parameter);
            const value = values[parameter.name];
            if (supportsFileUpload) {
                return (React.createElement(FileUploadParameterEditors_1.FileUploadParameterEditor, { key: parameter.name, parameter: parameter, value: value instanceof File ? value : undefined, onChange: newValue => newValue
                        ? onChangeValues(Object.assign(Object.assign({}, values), { [parameter.name]: newValue }))
                        : onChangeValues(lodash_1.omit(values, parameter.name)) }));
            }
            return (React.createElement(ParameterEditor_1.ParameterEditor, { key: parameter.name, parameter: parameter, value: typeof value === 'string' ? value : undefined, onChange: (value) => onChangeValues(Object.assign(Object.assign({}, values), { [parameter.name]: typeof value === 'number' ? String(value) : value })) }));
        }))));
};
exports.FormDataBody = FormDataBody;
//# sourceMappingURL=FormDataBody.js.map