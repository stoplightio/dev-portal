"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableOfContents = void 0;
const tslib_1 = require("tslib");
const ui_kit_1 = require("@stoplight/ui-kit");
const React = tslib_1.__importStar(require("react"));
const Skeleton_1 = require("../components/TableOfContents/Skeleton");
const usePlatformApi_1 = require("../hooks/usePlatformApi");
const useTocContents_1 = require("../hooks/useTocContents");
const tocUri = 'api/v1/projects/{workspaceSlug}/{projectSlug}/table-of-contents';
function TableOfContents(_a) {
    var { workspaceSlug, platformUrl, projectSlug, branchSlug, nodeUri, onData, className, authToken } = _a, extra = tslib_1.__rest(_a, ["workspaceSlug", "platformUrl", "projectSlug", "branchSlug", "nodeUri", "onData", "className", "authToken"]);
    const { data: tocData, error } = usePlatformApi_1.usePlatformApi(tocUri, {
        platformUrl,
        workspaceSlug,
        projectSlug,
        branchSlug,
        authToken,
    }, {
        type: 'custom',
    });
    React.useEffect(() => {
        if (tocData) {
            onData === null || onData === void 0 ? void 0 : onData(tocData);
        }
    }, [onData, tocData]);
    const tree = tocData !== null && tocData !== void 0 ? tocData : { items: [] };
    const contents = useTocContents_1.useTocContents(tree).map(item => {
        return Object.assign(Object.assign({}, item), { isActive: item.type === 'item' && nodeUri !== void 0 ? item.to === nodeUri : false });
    });
    if (!tocData && !error) {
        return React.createElement(Skeleton_1.TableOfContentsSkeleton, { className: className });
    }
    return React.createElement(ui_kit_1.TableOfContents, Object.assign({ className: className, contents: contents }, extra));
}
exports.TableOfContents = TableOfContents;
//# sourceMappingURL=TableOfContents.js.map