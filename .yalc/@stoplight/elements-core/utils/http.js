"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHttpCodeColor = void 0;
const constants_1 = require("../constants");
function getHttpCodeColor(code) {
    return constants_1.HttpCodeColor[`${code}`[0]] || 'gray';
}
exports.getHttpCodeColor = getHttpCodeColor;
//# sourceMappingURL=http.js.map