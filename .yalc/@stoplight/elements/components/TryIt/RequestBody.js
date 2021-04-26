"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestBody = void 0;
const tslib_1 = require("tslib");
const json_1 = require("@stoplight/json");
const mosaic_1 = require("@stoplight/mosaic");
const mosaic_code_editor_1 = require("@stoplight/mosaic-code-editor");
const React = tslib_1.__importStar(require("react"));
const RequestBody = ({ examples, requestBody, onChange }) => {
    const handleClick = (example) => {
        var _a;
        onChange((_a = json_1.safeStringify('value' in example ? example.value : example.externalValue, undefined, 2)) !== null && _a !== void 0 ? _a : requestBody);
    };
    return (React.createElement(mosaic_1.Panel, { defaultIsOpen: true },
        React.createElement(mosaic_1.Panel.Titlebar, { rightComponent: examples.length > 1 && (React.createElement(mosaic_1.Menu, { label: "Examples", trigger: React.createElement(mosaic_1.Button, { appearance: "minimal", iconRight: "caret-down" }, "Examples") }, examples.map(example => (React.createElement(mosaic_1.MenuItem, { key: example.key, text: example.key, onClick: () => handleClick(example) }))))) }, "Body"),
        React.createElement(mosaic_1.Panel.Content, { className: "TextRequestBody" },
            React.createElement(mosaic_code_editor_1.CodeEditor, { onChange: onChange, language: "json", value: requestBody, showLineNumbers: true, padding: 0 }))));
};
exports.RequestBody = RequestBody;
//# sourceMappingURL=RequestBody.js.map