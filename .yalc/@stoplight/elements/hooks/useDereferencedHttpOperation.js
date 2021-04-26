"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDereferencedHttpOperation = void 0;
const tslib_1 = require("tslib");
const json_schema_ref_parser_1 = tslib_1.__importDefault(require("@stoplight/json-schema-ref-parser"));
const types_1 = require("@stoplight/types");
const React = tslib_1.__importStar(require("react"));
function useDereferencedHttpOperation(parsedData) {
    const [dereferencedData, setDereferencedData] = React.useState(parsedData);
    React.useEffect(() => {
        if ((parsedData === null || parsedData === void 0 ? void 0 : parsedData.type) !== types_1.NodeType.HttpOperation) {
            setDereferencedData(parsedData);
            return;
        }
        let isActive = true;
        json_schema_ref_parser_1.default
            .dereference(parsedData.data, { continueOnError: true })
            .then(res => {
            if (isActive)
                setDereferencedData({ type: parsedData.type, data: res });
        })
            .catch(reason => {
            var _a;
            if (typeof reason === 'object' && reason !== null && 'files' in reason) {
                setDereferencedData({ type: parsedData.type, data: reason.files.schema });
            }
            else {
                console.warn(`Could not dereference operation: ${(_a = reason === null || reason === void 0 ? void 0 : reason.message) !== null && _a !== void 0 ? _a : 'Unknown error'}`);
            }
        });
        return () => {
            isActive = false;
        };
    }, [parsedData]);
    return dereferencedData;
}
exports.useDereferencedHttpOperation = useDereferencedHttpOperation;
//# sourceMappingURL=useDereferencedHttpOperation.js.map