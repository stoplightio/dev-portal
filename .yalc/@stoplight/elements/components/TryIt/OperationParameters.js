"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationParameters = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const ParameterEditor_1 = require("./ParameterEditor");
const OperationParameters = ({ parameters, values, onChangeValue }) => {
    return (React.createElement(mosaic_1.Panel, { defaultIsOpen: true },
        React.createElement(mosaic_1.Panel.Titlebar, null, "Parameters"),
        React.createElement(mosaic_1.Panel.Content, { className: "sl-overflow-y-auto ParameterGrid OperationParametersContent" }, parameters.map(parameter => (React.createElement(ParameterEditor_1.ParameterEditor, { key: parameter.name, parameter: parameter, value: values[parameter.name], onChange: (value) => onChangeValue(parameter.name, String(value)) }))))));
};
exports.OperationParameters = OperationParameters;
//# sourceMappingURL=OperationParameters.js.map