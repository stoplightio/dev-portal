"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.highlightText = void 0;
const tslib_1 = require("tslib");
const lodash_1 = require("lodash");
const React = tslib_1.__importStar(require("react"));
function highlightText(text, query) {
    let lastIndex = 0;
    const words = lodash_1.split(query, /\s+/)
        .filter(word => word.length > 0)
        .map(escapeRegExpChars);
    if (words.length === 0) {
        return [text];
    }
    const regexp = new RegExp(words.join('|'), 'gi');
    const tokens = [];
    while (true) {
        const match = regexp.exec(text);
        if (!match) {
            break;
        }
        const length = match[0].length;
        const before = text.slice(lastIndex, regexp.lastIndex - length);
        if (before.length > 0) {
            tokens.push(before);
        }
        lastIndex = regexp.lastIndex;
        tokens.push(React.createElement("strong", { key: lastIndex }, match[0]));
    }
    const rest = text.slice(lastIndex);
    if (rest.length > 0) {
        tokens.push(rest);
    }
    return tokens;
}
exports.highlightText = highlightText;
function escapeRegExpChars(text) {
    return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
}
//# sourceMappingURL=highlightText.js.map