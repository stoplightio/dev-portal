"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchesNodeFilter = void 0;
function matchesNodeFilter(branchNode, filter) {
    if (!filter)
        return true;
    let isMatch = false;
    if (filter.nodeType) {
        isMatch = filter.nodeType === branchNode.snapshot.type;
    }
    if (filter.nodeUri) {
        const uri = branchNode.node.uri;
        isMatch = uri.startsWith(filter.nodeUri);
    }
    return isMatch;
}
exports.matchesNodeFilter = matchesNodeFilter;
//# sourceMappingURL=node.js.map