"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyHTML = void 0;
const stringifyHTML = html => {
    if (typeof html === 'object' && html[Symbol.toStringTag] === 'HTMLDocument') {
        return html.documentElement.outerHTML;
    }
    return String(html);
};
exports.stringifyHTML = stringifyHTML;
//# sourceMappingURL=html.js.map