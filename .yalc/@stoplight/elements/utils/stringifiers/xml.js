"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyXML = void 0;
const stringifyXML = xml => {
    if (typeof xml === 'object' && xml[Symbol.toStringTag] === 'XMLDocument') {
        return new XMLSerializer().serializeToString(xml.documentElement);
    }
    return String(xml);
};
exports.stringifyXML = stringifyXML;
//# sourceMappingURL=xml.js.map