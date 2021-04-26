"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caseInsensitivelyEquals = void 0;
const lodash_1 = require("lodash");
exports.caseInsensitivelyEquals = lodash_1.curry((a, b) => a.toUpperCase() === b.toUpperCase());
//# sourceMappingURL=string.js.map