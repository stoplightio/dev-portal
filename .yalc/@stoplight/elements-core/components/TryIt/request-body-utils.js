"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBodyParameterState = exports.createRequestBody = exports.isFormDataContent = void 0;
const tslib_1 = require("tslib");
const lodash_1 = require("lodash");
const React = tslib_1.__importStar(require("react"));
const fileToBase64_1 = require("../../utils/fileToBase64");
const parameter_utils_1 = require("./parameter-utils");
const isFormDataContent = (content) => isUrlEncodedContent(content) || isMultipartContent(content);
exports.isFormDataContent = isFormDataContent;
function isUrlEncodedContent(content) {
    return content.mediaType.toLowerCase() === 'application/x-www-form-urlencoded';
}
function isMultipartContent(content) {
    return content.mediaType.toLowerCase() === 'multipart/form-data';
}
function createRequestBody(mediaTypeContent, bodyParameterValues) {
    var _a;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!mediaTypeContent)
            return undefined;
        const creator = (_a = (yield requestBodyCreators[mediaTypeContent.mediaType.toLowerCase()])) !== null && _a !== void 0 ? _a : createRawRequestBody;
        return creator({ mediaTypeContent, bodyParameterValues, rawBodyValue: '' });
    });
}
exports.createRequestBody = createRequestBody;
const createUrlEncodedRequestBody = ({ bodyParameterValues = {} }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const filteredValues = lodash_1.pickBy(bodyParameterValues, lodash_1.isString);
    return new URLSearchParams(filteredValues);
});
const createMultipartRequestBody = ({ mediaTypeContent, bodyParameterValues = {} }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const formData = new FormData();
    for (const [key, value] of Object.entries(bodyParameterValues)) {
        const schema = (_b = (_a = mediaTypeContent.schema) === null || _a === void 0 ? void 0 : _a.properties) === null || _b === void 0 ? void 0 : _b[key];
        if (typeof schema !== 'object')
            continue;
        if (parameter_utils_1.parameterSupportsFileUpload({ schema }) && schema.format === 'base64' && value instanceof File) {
            try {
                formData.append(key, yield fileToBase64_1.fileToBase64(value));
            }
            catch (_c) {
                continue;
            }
        }
        else {
            formData.append(key, value);
        }
    }
    return formData;
});
const createRawRequestBody = ({ rawBodyValue = '' }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return rawBodyValue; });
const requestBodyCreators = {
    'application/x-www-form-urlencoded': createUrlEncodedRequestBody,
    'multipart/form-data': createMultipartRequestBody,
};
const useBodyParameterState = (mediaTypeContent) => {
    const isFormDataBody = mediaTypeContent && exports.isFormDataContent(mediaTypeContent);
    const initialState = React.useMemo(() => {
        var _a, _b;
        if (!isFormDataBody) {
            return {};
        }
        const properties = (_b = (_a = mediaTypeContent === null || mediaTypeContent === void 0 ? void 0 : mediaTypeContent.schema) === null || _a === void 0 ? void 0 : _a.properties) !== null && _b !== void 0 ? _b : {};
        const parameters = parameter_utils_1.mapSchemaPropertiesToParameters(properties);
        return parameter_utils_1.initialParameterValues(parameters);
    }, [isFormDataBody, mediaTypeContent]);
    const [bodyParameterValues, setBodyParameterValues] = React.useState(initialState);
    React.useEffect(() => {
        setBodyParameterValues(initialState);
    }, [initialState]);
    if (isFormDataBody) {
        return [
            bodyParameterValues,
            setBodyParameterValues,
            { isFormDataBody: true, bodySpecification: mediaTypeContent },
        ];
    }
    else {
        return [
            bodyParameterValues,
            setBodyParameterValues,
            { isFormDataBody: false, bodySpecification: undefined },
        ];
    }
};
exports.useBodyParameterState = useBodyParameterState;
//# sourceMappingURL=request-body-utils.js.map