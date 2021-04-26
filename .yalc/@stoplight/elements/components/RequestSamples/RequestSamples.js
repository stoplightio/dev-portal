"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestSamples = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const mosaic_code_viewer_1 = require("@stoplight/mosaic-code-viewer");
const jotai_1 = require("jotai");
const react_1 = tslib_1.__importDefault(require("react"));
const persistAtom_1 = require("../../utils/jotai/persistAtom");
const convertRequestToSample_1 = require("./convertRequestToSample");
const requestSampleConfigs_1 = require("./requestSampleConfigs");
const selectedLanguageAtom = persistAtom_1.persistAtom('RequestSamples_selectedLanguage', jotai_1.atom('Shell'));
const selectedLibraryAtom = persistAtom_1.persistAtom('RequestSamples_selectedLibrary', jotai_1.atom('cURL'));
const fallbackText = 'Unable to generate code example';
exports.RequestSamples = react_1.default.memo(({ request }) => {
    const [selectedLanguage, setSelectedLanguage] = jotai_1.useAtom(selectedLanguageAtom);
    const [selectedLibrary, setSelectedLibrary] = jotai_1.useAtom(selectedLibraryAtom);
    const { httpSnippetLanguage, httpSnippetLibrary, mosaicCodeViewerLanguage } = requestSampleConfigs_1.getConfigFor(selectedLanguage, selectedLibrary);
    const requestSample = convertRequestToSample_1.convertRequestToSample(httpSnippetLanguage, httpSnippetLibrary, request);
    const handleSelectClick = (value) => {
        const [language, library] = String(value).split(' / ');
        setSelectedLanguage(language);
        setSelectedLibrary(library || '');
    };
    return (react_1.default.createElement(mosaic_1.Panel, { rounded: true, isCollapsible: false },
        react_1.default.createElement(mosaic_1.Panel.Titlebar, { rightComponent: react_1.default.createElement(mosaic_1.CopyButton, { size: "sm", copyValue: requestSample || '' }) },
            react_1.default.createElement(mosaic_1.Box, { ml: -2 },
                react_1.default.createElement(mosaic_1.Select, { "aria-label": "Request Sample Language", onChange: handleSelectClick, options: requestSampleConfigs_1.selectOptions, value: selectedLibrary ? `${selectedLanguage} / ${selectedLibrary}` : selectedLanguage, triggerTextPrefix: "Request Sample: ", size: "sm" }))),
        react_1.default.createElement(mosaic_1.Panel.Content, { p: 0 },
            react_1.default.createElement(mosaic_code_viewer_1.CodeViewer, { "aria-label": requestSample !== null && requestSample !== void 0 ? requestSample : fallbackText, noCopyButton: true, maxHeight: "510", language: mosaicCodeViewerLanguage, value: requestSample || fallbackText }))));
});
//# sourceMappingURL=RequestSamples.js.map