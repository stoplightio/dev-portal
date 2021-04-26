"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUniqueId = void 0;
const tslib_1 = require("tslib");
const nanoid_1 = require("nanoid");
const React = tslib_1.__importStar(require("react"));
const useUniqueId = (prefix = 'id_') => React.useRef(`${prefix}${nanoid_1.nanoid(8)}`).current;
exports.useUniqueId = useUniqueId;
//# sourceMappingURL=useUniqueId.js.map