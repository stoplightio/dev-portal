"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Path = void 0;
const tslib_1 = require("tslib");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const React = tslib_1.__importStar(require("react"));
const Path = ({ className, host, path }) => {
    if (!host && !path)
        return null;
    return (React.createElement("div", { className: classnames_1.default('HttpOperation__Path', className, 'inline-flex items-center bg-darken-2 py-2 px-3 rounded select-all') },
        host && React.createElement("div", { className: "text-darken-7 dark:text-gray-6 mr-1" }, host),
        React.createElement("div", { className: "font-semibold" }, path)));
};
exports.Path = Path;
//# sourceMappingURL=Path.js.map