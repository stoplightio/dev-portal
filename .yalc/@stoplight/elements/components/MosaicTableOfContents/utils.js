"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExternalLink = exports.isNode = exports.isNodeGroup = exports.isGroup = exports.isDivider = exports.findFirstNode = exports.isGroupOpenByDefault = exports.getHtmlIdFromItemId = void 0;
function getHtmlIdFromItemId(id) {
    return `sl-toc-${id}`;
}
exports.getHtmlIdFromItemId = getHtmlIdFromItemId;
const MAX_DEPTH_OPEN_BY_DEFAULT = 0;
function isGroupOpenByDefault(depth, item, activeId) {
    return (depth < MAX_DEPTH_OPEN_BY_DEFAULT ||
        (activeId && (('id' in item && activeId === item.id) || hasActiveItem(item.items, activeId))));
}
exports.isGroupOpenByDefault = isGroupOpenByDefault;
function hasActiveItem(items, activeId) {
    return items.some(item => {
        if ('id' in item && activeId === item.id) {
            return true;
        }
        if ('items' in item) {
            return hasActiveItem(item.items, activeId);
        }
        return false;
    });
}
function findFirstNode(items) {
    for (const item of items) {
        if (isNode(item)) {
            return item;
        }
        if (isNodeGroup(item)) {
            return item;
        }
        if (isGroup(item)) {
            const firstNode = findFirstNode(item.items);
            if (firstNode) {
                return firstNode;
            }
        }
        continue;
    }
    return;
}
exports.findFirstNode = findFirstNode;
function isDivider(item) {
    return Object.keys(item).length === 1 && 'title' in item;
}
exports.isDivider = isDivider;
function isGroup(item) {
    return Object.keys(item).length === 2 && 'title' in item && 'items' in item;
}
exports.isGroup = isGroup;
function isNodeGroup(item) {
    return (Object.keys(item).length === 6 &&
        'title' in item &&
        'items' in item &&
        'slug' in item &&
        'id' in item &&
        'meta' in item &&
        'type' in item);
}
exports.isNodeGroup = isNodeGroup;
function isNode(item) {
    return (Object.keys(item).length === 5 &&
        'title' in item &&
        'slug' in item &&
        'id' in item &&
        'meta' in item &&
        'type' in item);
}
exports.isNode = isNode;
function isExternalLink(item) {
    return Object.keys(item).length === 2 && 'title' in item && 'url' in item;
}
exports.isExternalLink = isExternalLink;
//# sourceMappingURL=utils.js.map