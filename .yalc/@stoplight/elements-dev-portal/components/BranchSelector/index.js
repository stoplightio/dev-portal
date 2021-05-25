"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchSelector = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const BranchSelector = ({ branchSlug, branches, onChange }) => {
    const defaultBranch = branches.find(branch => branch.is_default);
    const handleChange = React.useCallback((selectedSlug) => {
        const selectedBranch = branches.find(branch => branch.slug === selectedSlug);
        if (selectedBranch) {
            onChange(selectedBranch);
        }
    }, [onChange, branches]);
    return (React.createElement(mosaic_1.Select, { size: "md", "aria-label": "Branch", value: branchSlug || (defaultBranch === null || defaultBranch === void 0 ? void 0 : defaultBranch.slug), onChange: handleChange, w: "full", renderTrigger: (props, { selectedItem }) => (React.createElement(mosaic_1.FieldButton, Object.assign({}, props, { icon: "layer-group", px: 4, h: "md" }), (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.label) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.value))), options: [
            {
                title: 'Versions',
                options: branches.map(branch => ({
                    label: branch.name || branch.slug,
                    value: branch.slug,
                    meta: branch.is_default ? 'Default' : undefined,
                })),
            },
        ] }));
};
exports.BranchSelector = BranchSelector;
//# sourceMappingURL=index.js.map