"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Method = void 0;
const tslib_1 = require("tslib");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const React = tslib_1.__importStar(require("react"));
const constants_1 = require("../../../constants");
const Method = ({ className, method }) => {
    return (React.createElement("span", { className: classnames_1.default('HttpOperation__Method flex h-8 items-center mr-6 px-3 rounded text-white uppercase', `bg-${constants_1.HttpMethodColors[method] || 'gray'} dark:bg-${constants_1.HttpMethodColors[method]}`, className) }, method));
};
exports.Method = Method;
//# sourceMappingURL=Method.js.map