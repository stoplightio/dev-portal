"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TryIt = void 0;
const tslib_1 = require("tslib");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const json_1 = require("@stoplight/json");
const mosaic_1 = require("@stoplight/mosaic");
const mosaic_code_viewer_1 = require("@stoplight/mosaic-code-viewer");
const React = tslib_1.__importStar(require("react"));
const constants_1 = require("../../constants");
const http_1 = require("../../utils/http");
const Auth_1 = require("./Auth");
const authentication_utils_1 = require("./authentication-utils");
const build_request_1 = require("./build-request");
const FormDataBody_1 = require("./FormDataBody");
const mocking_utils_1 = require("./mocking-utils");
const MockingButton_1 = require("./MockingButton");
const OperationParameters_1 = require("./OperationParameters");
const request_body_utils_1 = require("./request-body-utils");
const RequestBody_1 = require("./RequestBody");
const useMockingOptions_1 = require("./useMockingOptions");
const useOperationParameters_1 = require("./useOperationParameters");
const useTextRequestBodyState_1 = require("./useTextRequestBodyState");
const TryIt = ({ httpOperation, showMocking, mockUrl, onRequestChange, requestBodyIndex, }) => {
    var _a, _b, _c, _d, _e;
    const isDark = mosaic_1.useThemeIsDark();
    const [response, setResponse] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const mediaTypeContent = (_c = (_b = (_a = httpOperation.request) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.contents) === null || _c === void 0 ? void 0 : _c[requestBodyIndex !== null && requestBodyIndex !== void 0 ? requestBodyIndex : 0];
    const { allParameters, updateParameterValue, parameterValuesWithDefaults } = useOperationParameters_1.useRequestParameters(httpOperation);
    const [mockingOptions, setMockingOptions] = useMockingOptions_1.useMockingOptions();
    const [bodyParameterValues, setBodyParameterValues, formDataState] = request_body_utils_1.useBodyParameterState(mediaTypeContent);
    const [textRequestBody, setTextRequestBody] = useTextRequestBodyState_1.useTextRequestBodyState(mediaTypeContent);
    const [operationAuthValue, setOperationAuthValue] = authentication_utils_1.usePersistedSecuritySchemeWithValues();
    React.useEffect(() => {
        let isActive = true;
        if (onRequestChange) {
            build_request_1.buildHarRequest({
                mediaTypeContent,
                parameterValues: parameterValuesWithDefaults,
                httpOperation,
                bodyInput: formDataState.isFormDataBody ? bodyParameterValues : textRequestBody,
                auth: operationAuthValue,
            }).then(request => {
                if (isActive)
                    onRequestChange(request);
            });
        }
        return () => {
            isActive = false;
        };
    }, [
        httpOperation,
        parameterValuesWithDefaults,
        formDataState.isFormDataBody,
        bodyParameterValues,
        textRequestBody,
        operationAuthValue,
    ]);
    const handleClick = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            setLoading(true);
            const mockData = mocking_utils_1.getMockData(mockUrl, httpOperation, mockingOptions);
            const request = yield build_request_1.buildFetchRequest({
                parameterValues: parameterValuesWithDefaults,
                httpOperation,
                mediaTypeContent,
                bodyInput: formDataState.isFormDataBody ? bodyParameterValues : textRequestBody,
                mockData,
                auth: operationAuthValue,
            });
            let response;
            try {
                response = yield fetch(...request);
            }
            catch (e) {
                setResponse({ error: new NetworkError(e.message) });
            }
            response &&
                setResponse({
                    status: response.status,
                    bodyText: yield response.text(),
                });
        }
        catch (e) {
            setResponse({ error: e });
        }
        finally {
            setLoading(false);
        }
    });
    return (React.createElement(mosaic_1.Box, { rounded: "lg", overflowY: "hidden" },
        React.createElement(mosaic_1.Panel, { isCollapsible: false, className: "p-0 TryItPanel" },
            React.createElement(mosaic_1.Panel.Titlebar, { bg: "canvas-300" },
                React.createElement("div", { role: "heading", className: "sl-font-bold" },
                    React.createElement(mosaic_1.Text, { color: !isDark ? constants_1.HttpMethodColors[httpOperation.method] : undefined }, httpOperation.method.toUpperCase()),
                    React.createElement(mosaic_1.Text, { ml: 2 }, httpOperation.path))),
            React.createElement(Auth_1.TryItAuth, { onChange: setOperationAuthValue, operationSecurityScheme: (_d = httpOperation.security) !== null && _d !== void 0 ? _d : [], value: operationAuthValue }),
            allParameters.length > 0 && (React.createElement(OperationParameters_1.OperationParameters, { parameters: allParameters, values: parameterValuesWithDefaults, onChangeValue: updateParameterValue })),
            formDataState.isFormDataBody ? (React.createElement(FormDataBody_1.FormDataBody, { specification: formDataState.bodySpecification, values: bodyParameterValues, onChangeValues: setBodyParameterValues })) : mediaTypeContent ? (React.createElement(RequestBody_1.RequestBody, { examples: (_e = mediaTypeContent.examples) !== null && _e !== void 0 ? _e : [], requestBody: textRequestBody, onChange: setTextRequestBody })) : null,
            React.createElement(mosaic_1.Panel.Content, { className: "SendButtonHolder" },
                React.createElement(mosaic_1.Flex, null,
                    React.createElement(mosaic_1.Button, { appearance: "primary", loading: loading, disabled: loading, onPress: handleClick, size: "sm" }, "Send Request"),
                    showMocking && (React.createElement(MockingButton_1.MockingButton, { options: mockingOptions, onOptionsChange: setMockingOptions, operation: httpOperation }))))),
        response && !('error' in response) && React.createElement(TryItResponse, { response: response }),
        response && 'error' in response && React.createElement(ResponseError, { state: response })));
};
exports.TryIt = TryIt;
const TryItResponse = ({ response }) => {
    var _a;
    return (React.createElement(mosaic_1.Panel, { defaultIsOpen: true },
        React.createElement(mosaic_1.Panel.Titlebar, null, "Response"),
        React.createElement(mosaic_1.Panel.Content, null,
            React.createElement("div", null,
                React.createElement("div", { className: `mb-3 text-${http_1.getHttpCodeColor(response.status)}` }, `${response.status} ${(_a = constants_1.HttpCodeDescriptions[response.status]) !== null && _a !== void 0 ? _a : ''}`),
                response.bodyText ? (React.createElement(mosaic_code_viewer_1.CodeViewer, { language: "json", value: json_1.safeStringify(json_1.safeParse(response.bodyText), undefined, 2) || response.bodyText })) : (React.createElement("p", null,
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faExclamationCircle, className: "mr-2" }),
                    "No response body returned"))))));
};
const ResponseError = ({ state: { error } }) => (React.createElement(mosaic_1.Panel, { defaultIsOpen: true },
    React.createElement(mosaic_1.Panel.Titlebar, null, "Error"),
    React.createElement(mosaic_1.Panel.Content, null, isNetworkError(error) ? React.createElement(NetworkErrorMessage, null) : React.createElement("p", null, error.message))));
const NetworkErrorMessage = () => (React.createElement(React.Fragment, null,
    React.createElement("p", { className: "sl-pb-2" },
        React.createElement("strong", null, "Network Error occured.")),
    React.createElement("p", { className: "sl-pb-2" }, "1. Double check that your computer is connected to the internet."),
    React.createElement("p", { className: "sl-pb-2" }, "2. Make sure the API is actually running and available under the specified URL."),
    React.createElement("p", null,
        "3. If you've checked all of the above and still experiencing issues, check if the API supports",
        ' ',
        React.createElement("a", { target: "_blank", rel: "noopener noreferrer", className: "font-semibold text-darken-7 dark:text-gray-6", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" }, "CORS"),
        ".")));
class NetworkError extends Error {
}
const isNetworkError = (error) => error instanceof NetworkError;
//# sourceMappingURL=TryIt.js.map