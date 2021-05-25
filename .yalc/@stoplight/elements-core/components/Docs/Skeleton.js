"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsSkeleton = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@blueprintjs/core");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const React = tslib_1.__importStar(require("react"));
const DocsSkeleton = ({ className, padding = '12' }) => {
    return (React.createElement("div", { className: classnames_1.default('PageSkeleton', className, `p-${padding}`, 'flex flex-col h-full') },
        React.createElement("div", { className: classnames_1.default(core_1.Classes.SKELETON, 'h-12 w-1/5') }),
        React.createElement("div", { className: classnames_1.default(core_1.Classes.SKELETON, 'h-12 my-6') }),
        React.createElement("div", { className: classnames_1.default(core_1.Classes.SKELETON, 'flex-1 my-6') })));
};
exports.DocsSkeleton = DocsSkeleton;
//# sourceMappingURL=Skeleton.js.map