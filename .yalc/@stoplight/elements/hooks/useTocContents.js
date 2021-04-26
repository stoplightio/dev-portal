"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTocContents = exports.MARKDOWN_REGEXP = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const constants_1 = require("../constants");
const oas_1 = require("../utils/oas");
exports.MARKDOWN_REGEXP = /\/?\w+\.md$/;
function useTocContents(tree, operationMap) {
    return React.useMemo(() => computeToc(tree.items, { operationMap }), [tree, operationMap]);
}
exports.useTocContents = useTocContents;
function computeToc(items, { operationMap, parentId, depth = 0, }) {
    if (!items.length)
        return [];
    let contents = [];
    for (const nodeIndex in items) {
        if (!items[nodeIndex])
            continue;
        const tocNode = items[nodeIndex];
        const id = parentId ? `${parentId}-${nodeIndex}` : nodeIndex;
        if (tocNode.type === 'divider') {
            contents.push({
                id,
                name: tocNode.title,
                depth,
                type: tocNode.type,
            });
        }
        if (tocNode.type === 'group') {
            contents.push(Object.assign({ id, name: tocNode.title, depth, type: tocNode.type }, (tocNode.uri && { icon: 'cloud', to: tocNode.uri, startExpanded: true })));
            if (tocNode.items.length) {
                contents.push(...computeToc(tocNode.items, { operationMap, parentId: id, depth: depth + 1 }));
            }
        }
        if (tocNode.type === 'item') {
            const operation = getOperationForUri(tocNode.uri, operationMap);
            const isModel = oas_1.MODEL_REGEXP.test(tocNode.uri) ||
                (!exports.MARKDOWN_REGEXP.test(tocNode.uri) && !operation && tocNode.title !== 'Overview');
            contents.push(Object.assign(Object.assign(Object.assign({ id, name: tocNode.title, depth: depth, type: tocNode.type, iconPosition: 'right' }, (operation && {
                textIcon: operation.toUpperCase(),
                iconColor: constants_1.HttpMethodColors[operation],
            })), (isModel && { icon: 'cube', iconColor: 'orange' })), { to: tocNode.uri }));
        }
    }
    return contents;
}
function getOperationForUri(uri, operationMap) {
    if (operationMap) {
        return operationMap[uri];
    }
    else {
        const match = oas_1.OPERATION_REGEXP.exec(uri);
        return match && match.length === 2 ? match[1] : undefined;
    }
}
//# sourceMappingURL=useTocContents.js.map