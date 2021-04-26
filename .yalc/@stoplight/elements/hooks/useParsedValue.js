"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useParsedValue = void 0;
const tslib_1 = require("tslib");
const yaml_1 = require("@stoplight/yaml");
const React = tslib_1.__importStar(require("react"));
function useParsedValue(value) {
    return React.useMemo(() => {
        let parsedValue = value;
        if (typeof value === 'string') {
            try {
                parsedValue = yaml_1.parse(value);
            }
            catch (error) {
            }
        }
        return parsedValue;
    }, [value]);
}
exports.useParsedValue = useParsedValue;
//# sourceMappingURL=useParsedValue.js.map