"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBundleRefsIntoDocument = void 0;
const tslib_1 = require("tslib");
const json_schema_ref_parser_1 = tslib_1.__importDefault(require("@stoplight/json-schema-ref-parser"));
const lodash_1 = require("lodash");
const React = tslib_1.__importStar(require("react"));
function useBundleRefsIntoDocument(document, options) {
    const [bundledData, setBundledData] = React.useState(document);
    const baseUrl = options === null || options === void 0 ? void 0 : options.baseUrl;
    React.useEffect(() => {
        if (!lodash_1.isObject(document)) {
            setBundledData(document);
            return;
        }
        let isActive = true;
        doBundle(document, baseUrl)
            .then(res => {
            if (isActive) {
                setBundledData(Object.assign({}, res));
            }
        })
            .catch(reason => {
            var _a;
            if (typeof reason === 'object' && reason !== null && 'files' in reason) {
                setBundledData(Object.assign({}, reason.files.schema));
            }
            else {
                console.warn(`Could bundle: ${(_a = reason === null || reason === void 0 ? void 0 : reason.message) !== null && _a !== void 0 ? _a : 'Unknown error'}`);
            }
        });
        return () => {
            isActive = false;
        };
    }, [document, baseUrl]);
    return bundledData;
}
exports.useBundleRefsIntoDocument = useBundleRefsIntoDocument;
const commonBundleOptions = { continueOnError: true };
const doBundle = (data, baseUrl) => {
    if (!baseUrl) {
        return json_schema_ref_parser_1.default.bundle(data, commonBundleOptions);
    }
    else {
        return json_schema_ref_parser_1.default.bundle(baseUrl, data, commonBundleOptions);
    }
};
//# sourceMappingURL=useBundleRefsIntoDocument.js.map