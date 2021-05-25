"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFirstNodeSlug = exports.computeAPITree = exports.computeTagGroups = void 0;
const types_1 = require("@stoplight/types");
const computeTagGroups = (serviceNode) => {
    const groupsByTagId = {};
    const ungrouped = [];
    const lowerCaseServiceTags = serviceNode.tags.map(tn => tn.toLowerCase());
    for (const node of serviceNode.children) {
        if (node.type !== types_1.NodeType.HttpOperation)
            continue;
        const tagName = node.tags[0];
        if (tagName) {
            const tagId = tagName.toLowerCase();
            if (groupsByTagId[tagId]) {
                groupsByTagId[tagId].items.push(node);
            }
            else {
                const serviceTagName = lowerCaseServiceTags.find(tn => tn === tagId);
                groupsByTagId[tagId] = {
                    title: serviceTagName || tagName,
                    items: [node],
                };
            }
        }
        else {
            ungrouped.push(node);
        }
    }
    const orderedTagGroups = Object.entries(groupsByTagId)
        .sort(([g1], [g2]) => {
        const g1LC = g1.toLowerCase();
        const g2LC = g2.toLowerCase();
        const g1Idx = lowerCaseServiceTags.findIndex(tn => tn === g1LC);
        const g2Idx = lowerCaseServiceTags.findIndex(tn => tn === g2LC);
        if (g1Idx < 0 && g2Idx < 0)
            return 0;
        if (g1Idx < 0)
            return 1;
        if (g2Idx < 0)
            return -1;
        return g1Idx - g2Idx;
    })
        .map(([, tagGroup]) => tagGroup);
    return { groups: orderedTagGroups, ungrouped };
};
exports.computeTagGroups = computeTagGroups;
const computeAPITree = (serviceNode) => {
    const tree = [];
    if (serviceNode.data.description) {
        tree.push({
            id: '/',
            slug: '/',
            title: 'Overview',
            type: 'overview',
            meta: '',
        });
    }
    const operationNodes = serviceNode.children.filter(node => node.type === types_1.NodeType.HttpOperation);
    if (operationNodes.length) {
        tree.push({
            title: 'Endpoints',
        });
        const { groups, ungrouped } = exports.computeTagGroups(serviceNode);
        ungrouped.forEach(operationNode => {
            tree.push({
                id: operationNode.uri,
                slug: operationNode.uri,
                title: operationNode.name,
                type: operationNode.type,
                meta: operationNode.data.method,
            });
        });
        groups.forEach(group => {
            tree.push({
                title: group.title,
                items: group.items.map(operationNode => {
                    return {
                        id: operationNode.uri,
                        slug: operationNode.uri,
                        title: operationNode.name,
                        type: operationNode.type,
                        meta: operationNode.data.method,
                    };
                }),
            });
        });
    }
    const schemaNodes = serviceNode.children.filter(node => node.type === types_1.NodeType.Model);
    if (schemaNodes.length) {
        tree.push({
            title: 'Schemas',
        });
        schemaNodes.forEach(node => {
            tree.push({
                id: node.uri,
                slug: node.uri,
                title: node.name,
                type: node.type,
                meta: '',
            });
        });
    }
    return tree;
};
exports.computeAPITree = computeAPITree;
const findFirstNodeSlug = (tree) => {
    for (const item of tree) {
        if ('slug' in item) {
            return item.slug;
        }
        if ('items' in item) {
            const slug = exports.findFirstNodeSlug(item.items);
            if (slug) {
                return slug;
            }
        }
    }
    return;
};
exports.findFirstNodeSlug = findFirstNodeSlug;
//# sourceMappingURL=utils.js.map