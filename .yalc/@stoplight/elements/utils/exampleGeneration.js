"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateExampleFromMediaTypeContent = exports.useGenerateExampleFromMediaTypeContent = void 0;
const tslib_1 = require("tslib");
const json_1 = require("@stoplight/json");
const Sampler = tslib_1.__importStar(require("@stoplight/json-schema-sampler"));
const react_1 = tslib_1.__importDefault(require("react"));
const InlineRefResolver_1 = require("../context/InlineRefResolver");
const useGenerateExampleFromMediaTypeContent = (mediaTypeContent, chosenExampleIndex) => {
    const document = InlineRefResolver_1.useDocument();
    return react_1.default.useMemo(() => exports.generateExampleFromMediaTypeContent(mediaTypeContent, document, chosenExampleIndex), [
        mediaTypeContent,
        document,
        chosenExampleIndex,
    ]);
};
exports.useGenerateExampleFromMediaTypeContent = useGenerateExampleFromMediaTypeContent;
const generateExampleFromMediaTypeContent = (mediaTypeContent, document, chosenExampleIndex = 0) => {
    var _a, _b;
    const textRequestBodySchema = mediaTypeContent === null || mediaTypeContent === void 0 ? void 0 : mediaTypeContent.schema;
    const textRequestBodyExamples = mediaTypeContent === null || mediaTypeContent === void 0 ? void 0 : mediaTypeContent.examples;
    try {
        if (textRequestBodyExamples === null || textRequestBodyExamples === void 0 ? void 0 : textRequestBodyExamples.length) {
            return (_a = json_1.safeStringify(textRequestBodyExamples === null || textRequestBodyExamples === void 0 ? void 0 : textRequestBodyExamples[chosenExampleIndex]['value'], undefined, 2)) !== null && _a !== void 0 ? _a : '';
        }
        else if (textRequestBodySchema) {
            const generated = Sampler.sample(textRequestBodySchema, { skipReadOnly: true }, document);
            return generated !== null ? (_b = json_1.safeStringify(generated, undefined, 2)) !== null && _b !== void 0 ? _b : '' : '';
        }
    }
    catch (e) {
        console.warn(e);
    }
    return '';
};
exports.generateExampleFromMediaTypeContent = generateExampleFromMediaTypeContent;
//# sourceMappingURL=exampleGeneration.js.map