"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTextRequestBodyState = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const exampleGeneration_1 = require("../../utils/exampleGeneration");
const useTextRequestBodyState = (mediaTypeContent) => {
    const initialRequestBody = exampleGeneration_1.useGenerateExampleFromMediaTypeContent(mediaTypeContent);
    const [textRequestBody, setTextRequestBody] = React.useState(initialRequestBody);
    React.useEffect(() => {
        setTextRequestBody(initialRequestBody);
    }, [initialRequestBody]);
    return [textRequestBody, setTextRequestBody];
};
exports.useTextRequestBodyState = useTextRequestBodyState;
//# sourceMappingURL=useTextRequestBodyState.js.map