"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TryItWithRequestSamples = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const RequestSamples_1 = require("../RequestSamples");
const ResponseExamples_1 = require("../ResponseExamples/ResponseExamples");
const TryIt_1 = require("./TryIt");
const TryItWithRequestSamples = (_a) => {
    var { hideTryIt } = _a, props = tslib_1.__rest(_a, ["hideTryIt"]);
    const [requestData, setRequestData] = React.useState();
    return (React.createElement(mosaic_1.VStack, { spacing: 6 },
        !hideTryIt && (React.createElement(mosaic_1.InvertTheme, null,
            React.createElement(mosaic_1.Box, null,
                React.createElement(TryIt_1.TryIt, Object.assign({}, props, { onRequestChange: setRequestData }))))),
        requestData && React.createElement(RequestSamples_1.RequestSamples, { request: requestData }),
        React.createElement(ResponseExamples_1.ResponseExamples, Object.assign({}, props))));
};
exports.TryItWithRequestSamples = TryItWithRequestSamples;
//# sourceMappingURL=TryItWithRequestSamples.js.map