"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableOfContentsSkeleton = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@blueprintjs/core");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const React = tslib_1.__importStar(require("react"));
const TableOfContentsSkeleton = ({ className, padding = '12', }) => {
    return (React.createElement("div", { className: classnames_1.default('TableOfContentsSkeleton bg-gray-1 dark:bg-transparent flex justify-end', className, `py-${padding}`) },
        React.createElement("div", { className: "TableOfContentsSkeleton__inner" },
            React.createElement(SkeletonRow, null),
            React.createElement(SkeletonRow, null),
            React.createElement("div", { className: "pl-4" },
                React.createElement(SkeletonRow, null),
                React.createElement("div", { className: "pl-6" },
                    React.createElement(SkeletonRow, null),
                    React.createElement(SkeletonRow, null),
                    React.createElement(SkeletonRow, null))),
            React.createElement(SkeletonRow, null),
            React.createElement(SkeletonRow, null),
            React.createElement(SkeletonRow, null),
            React.createElement("div", { className: "pl-4" },
                React.createElement(SkeletonRow, null),
                React.createElement("div", { className: "pl-6" },
                    React.createElement(SkeletonRow, null),
                    React.createElement(SkeletonRow, null),
                    React.createElement(SkeletonRow, null))),
            React.createElement(SkeletonRow, null),
            React.createElement(SkeletonRow, null),
            React.createElement(SkeletonRow, null),
            React.createElement("div", { className: "pl-4" },
                React.createElement(SkeletonRow, null),
                React.createElement("div", { className: "pl-6" },
                    React.createElement(SkeletonRow, null),
                    React.createElement(SkeletonRow, null),
                    React.createElement(SkeletonRow, null))),
            React.createElement(SkeletonRow, null))));
};
exports.TableOfContentsSkeleton = TableOfContentsSkeleton;
const SkeletonRow = () => (React.createElement("div", { className: "flex items-center mt-2 h-10" },
    React.createElement("div", { className: classnames_1.default(core_1.Classes.SKELETON, 'py-4') })));
//# sourceMappingURL=Skeleton.js.map