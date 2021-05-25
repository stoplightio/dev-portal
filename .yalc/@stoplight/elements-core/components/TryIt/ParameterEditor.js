"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterEditor = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const useUniqueId_1 = require("../../hooks/useUniqueId");
const parameter_utils_1 = require("./parameter-utils");
const ParameterEditor = ({ parameter, value, onChange }) => {
    var _a, _b;
    const inputId = useUniqueId_1.useUniqueId(`id_${parameter.name}_`);
    const parameterValueOptions = parameter_utils_1.parameterOptions(parameter);
    const examples = parameter_utils_1.exampleOptions(parameter);
    const selectedExample = (_a = examples === null || examples === void 0 ? void 0 : examples.find(e => e.value === value)) !== null && _a !== void 0 ? _a : parameter_utils_1.selectExampleOption;
    const parameterDisplayName = `${parameter.name}${parameter.required ? '*' : ''}`;
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { "aria-hidden": "true", "data-testid": "param-label", htmlFor: inputId }, parameterDisplayName),
        React.createElement(mosaic_1.Text, { mx: 3 }, ":"),
        React.createElement("div", null, parameterValueOptions ? (React.createElement(mosaic_1.Select, { flex: 1, "aria-label": parameter.name, options: parameterValueOptions, value: value || '', onChange: onChange })) : (React.createElement(mosaic_1.Flex, { flex: 1 },
            React.createElement(mosaic_1.Input, { id: inputId, "aria-label": parameter.name, appearance: "minimal", flex: 1, placeholder: parameter_utils_1.getPlaceholderForParameter(parameter), type: ((_b = parameter.schema) === null || _b === void 0 ? void 0 : _b.type) === 'number' ? 'number' : 'text', required: true, value: value || '', onChange: e => onChange && onChange(e.currentTarget.value) }),
            examples && (React.createElement(mosaic_1.Select, { "aria-label": `${parameter.name}-select`, flex: 1, value: selectedExample.value, options: examples, onChange: onChange })))))));
};
exports.ParameterEditor = ParameterEditor;
//# sourceMappingURL=ParameterEditor.js.map