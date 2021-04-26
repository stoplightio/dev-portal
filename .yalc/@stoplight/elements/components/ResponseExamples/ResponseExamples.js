"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseExamples = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const mosaic_code_viewer_1 = require("@stoplight/mosaic-code-viewer");
const react_1 = tslib_1.__importDefault(require("react"));
const exampleGeneration_1 = require("../../utils/exampleGeneration");
const ResponseExamples = ({ httpOperation, responseMediaType, responseStatusCode }) => {
    var _a;
    const [chosenExampleIndex, setChosenExampleIndex] = react_1.default.useState(0);
    const response = httpOperation.responses.find(response => response.code === responseStatusCode);
    const responseContents = (_a = response === null || response === void 0 ? void 0 : response.contents) === null || _a === void 0 ? void 0 : _a.find(content => content.mediaType === responseMediaType);
    let userDefinedExamples;
    if ((responseContents === null || responseContents === void 0 ? void 0 : responseContents.examples) && (responseContents === null || responseContents === void 0 ? void 0 : responseContents.examples.length) > 0) {
        userDefinedExamples = responseContents === null || responseContents === void 0 ? void 0 : responseContents.examples;
    }
    const responseExample = exampleGeneration_1.useGenerateExampleFromMediaTypeContent(responseContents, chosenExampleIndex);
    if (!userDefinedExamples && responseMediaType !== 'application/json')
        return null;
    if (!responseExample)
        return null;
    const examplesSelect = userDefinedExamples && userDefinedExamples.length > 1 && (react_1.default.createElement(mosaic_1.Select, { "aria-label": "Response Example", value: String(chosenExampleIndex), options: userDefinedExamples.map((example, index) => ({ value: index, label: example.key })), onChange: (value) => setChosenExampleIndex(parseInt(String(value), 10)), size: "sm", triggerTextPrefix: "Response Example: " }));
    return (react_1.default.createElement(mosaic_1.Panel, { rounded: true, isCollapsible: false },
        react_1.default.createElement(mosaic_1.Panel.Titlebar, null, examplesSelect || react_1.default.createElement(mosaic_1.Text, { color: "body" }, "Response Example")),
        react_1.default.createElement(mosaic_1.Panel.Content, { p: 0 },
            react_1.default.createElement(mosaic_code_viewer_1.CodeViewer, { "aria-label": responseExample, noCopyButton: true, maxHeight: "400px", language: "json", value: responseExample, showLineNumbers: true }))));
};
exports.ResponseExamples = ResponseExamples;
//# sourceMappingURL=ResponseExamples.js.map