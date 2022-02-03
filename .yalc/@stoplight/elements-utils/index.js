'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var path = require('@stoplight/path');
var types = require('@stoplight/types');
var escapeRegExp = require('lodash/escapeRegExp.js');
var flow = require('lodash/flow.js');
var partial = require('lodash/partial.js');
var sortBy = require('lodash/sortBy.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var escapeRegExp__default = /*#__PURE__*/_interopDefaultLegacy(escapeRegExp);
var flow__default = /*#__PURE__*/_interopDefaultLegacy(flow);
var partial__default = /*#__PURE__*/_interopDefaultLegacy(partial);
var sortBy__default = /*#__PURE__*/_interopDefaultLegacy(sortBy);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function isItem(item) {
    return item.type === 'item';
}
function isGroup(item) {
    return item.type === 'group';
}
function isDivider(item) {
    return item.type === 'divider';
}

function generateProjectToC(searchResults) {
    return flow__default["default"](() => searchResults, groupNodesByType, ({ articles, models, httpServices, httpOperations }) => {
        const toc = { items: [] };
        flow__default["default"](() => articles, sortArticlesByTypeAndPath, appendArticlesToToC(toc))();
        if (httpServices.length > 0) {
            toc.items.push({ type: 'divider', title: 'APIS' });
        }
        flow__default["default"](() => httpServices, httpServices => appendHttpServicesToToC(toc)({
            httpServices,
            models,
            httpOperations,
        }), appendModelsToToc(toc, 'divider'))();
        return toc;
    })();
}
function generateTocSkeleton(searchResults) {
    return flow__default["default"](() => searchResults, groupNodesByType, ({ articles, models, httpServices }) => {
        const toc = { items: [] };
        flow__default["default"](() => articles, sortArticlesByTypeAndPath, appendArticlesToToC(toc))();
        toc.items.push({ type: 'divider', title: 'APIS' });
        flow__default["default"](() => httpServices, appendHttpServicesItemsToToC(toc))();
        flow__default["default"](() => models, appendModelsToToc(toc))();
        return toc;
    })();
}
function modifyEach(items, apply, shouldReplace) {
    for (let i = items.length - 1; i > -1; i--) {
        const item = items[i];
        if (isItem(item)) {
            if (shouldReplace === null || shouldReplace === void 0 ? void 0 : shouldReplace(item)) {
                items.splice(i, 1, ...apply(item));
            }
            else {
                items.splice(i + 1, 0, ...apply(item));
            }
        }
        if (isGroup(item)) {
            modifyEach(item.items, apply, shouldReplace);
        }
    }
}
function cleanDividers(group) {
    group.items = group.items.filter(item => !isDivider(item));
    group.items.filter(isGroup).forEach(cleanDividers);
}
function cleanToc(toc) {
    toc.items.filter(isGroup).forEach(cleanDividers);
}
function resolveHttpServices(searchResults, toc) {
    cleanToc(toc);
    flow__default["default"](() => searchResults, groupNodesByType, ({ models, httpServices, httpOperations }) => {
        modifyEach(toc.items, item => {
            const httpService = httpServices.find(matchesUri(item.uri));
            if (!httpService)
                return [];
            const _a = filterByUriRegexpAndCheckTags([])({
                httpOperations,
                models,
                regexp: new RegExp(`^${escapeRegExp__default["default"](httpService.uri)}\/`, 'i'),
            }), subNodes = __rest(_a, ["hasTags"]);
            const items = [];
            appendHttpServiceItemsToToC({ items })(subNodes, httpService.tags || []);
            return [{ type: 'group', title: item.title, items, uri: httpService.uri }];
        }, item => httpServices.some(matchesUri(item.uri)));
    })();
}
function matchesUri(uri) {
    return (item) => item.uri.replace(/^\//, '') === uri.replace(/^\//, '');
}
function groupNodesByType(searchResults) {
    return searchResults.reduce((results, searchResult) => {
        switch (searchResult.type) {
            case types.NodeType.Article:
                results.articles.push(searchResult);
                break;
            case types.NodeType.HttpOperation:
                results.httpOperations.push(searchResult);
                break;
            case types.NodeType.HttpService:
                results.httpServices.push(searchResult);
                break;
            case types.NodeType.Model:
                results.models.push(searchResult);
                break;
        }
        return results;
    }, { articles: [], models: [], httpServices: [], httpOperations: [] });
}
function sortArticlesByTypeAndPath(articles) {
    return articles.sort((a1, a2) => {
        const rootDirs = ['/', '.', '/docs', 'docs'];
        const a1DirPath = path.dirname(a1.uri);
        const a2DirPath = path.dirname(a2.uri);
        const dirOrder = rootDirs.includes(a1DirPath) || rootDirs.includes(a2DirPath) ? a1DirPath.localeCompare(a2DirPath) : 0;
        return dirOrder === 0 ? a1.uri.localeCompare(a2.uri) : dirOrder;
    });
}
function findOrCreateArticleGroup(toc) {
    return (dirs) => {
        return dirs.reduce((group, dir, i) => {
            if (i === 0) {
                const divider = group.items.filter(isDivider).find(item => item.title === dir);
                if (!divider) {
                    group.items.push({ type: 'divider', title: dir });
                }
                return group;
            }
            else {
                const childGroup = group.items.filter(isGroup).find(item => item.title === dir);
                if (!childGroup) {
                    const newGroup = { type: 'group', title: dir, items: [] };
                    group.items.push(newGroup);
                    return newGroup;
                }
                return childGroup;
            }
        }, toc);
    };
}
function appendArticlesToToC(toc) {
    return (articles) => {
        return articles.reduce((toc, article) => flow__default["default"](partial__default["default"](getDirsFromUri, article.uri), findOrCreateArticleGroup(toc), group => {
            group.items.push({ type: 'item', title: article.name, uri: article.uri });
            return toc;
        })(), toc);
    };
}
function filterByUriRegexpAndCheckTags(standaloneModels) {
    return ({ regexp, httpOperations, models }) => {
        let hasTags = false;
        return {
            httpOperations: httpOperations.filter(n => {
                var _a;
                const isRelevant = regexp.test(n.uri);
                if (isRelevant && ((_a = n.tags) === null || _a === void 0 ? void 0 : _a.length)) {
                    hasTags = true;
                }
                return isRelevant;
            }),
            models: models.filter(n => {
                var _a;
                const isRelevant = regexp.test(n.uri);
                if (isRelevant) {
                    if ((_a = n.tags) === null || _a === void 0 ? void 0 : _a.length) {
                        hasTags = true;
                    }
                    standaloneModels.splice(standaloneModels.findIndex(m => m === n), 1);
                }
                return isRelevant;
            }),
            hasTags,
        };
    };
}
function appendHttpServiceItemsToToC(toc) {
    return ({ httpOperations, models }, serviceTagNames) => {
        const operationsAndModels = [
            ...httpOperations.map(i => (Object.assign(Object.assign({}, i), { nodeType: types.NodeType.HttpOperation }))),
            ...models.map(i => (Object.assign(Object.assign({}, i), { nodeType: types.NodeType.Model }))),
        ];
        const { groups, ungroupedModels, ungroupedOperations } = operationsAndModels.reduce((result, subNode) => {
            const [tagName] = subNode.tags || [];
            const item = {
                type: 'item',
                title: subNode.name,
                uri: subNode.uri,
            };
            if (tagName) {
                if (result.groups[tagName.toLowerCase()]) {
                    result.groups[tagName.toLowerCase()].items.push(item);
                }
                else {
                    const serviceTagName = serviceTagNames.find(tn => tn.toLowerCase() === tagName.toLowerCase());
                    result.groups[tagName.toLowerCase()] = {
                        type: 'group',
                        title: serviceTagName || tagName,
                        items: [item],
                    };
                }
            }
            else {
                if (subNode.nodeType === types.NodeType.HttpOperation) {
                    result.ungroupedOperations.push(item);
                }
                else {
                    result.ungroupedModels.push(subNode);
                }
            }
            return result;
        }, { groups: {}, ungroupedOperations: [], ungroupedModels: [] });
        ungroupedOperations.forEach(item => toc.items.push(item));
        const tagNamesLC = serviceTagNames.map(tn => tn.toLowerCase());
        Object.entries(groups)
            .sort(([g1], [g2]) => {
            const g1LC = g1.toLowerCase();
            const g2LC = g2.toLowerCase();
            const g1Idx = tagNamesLC.findIndex(tn => tn === g1LC);
            const g2Idx = tagNamesLC.findIndex(tn => tn === g2LC);
            if (g1Idx < 0 && g2Idx < 0)
                return 0;
            if (g1Idx < 0)
                return 1;
            if (g2Idx < 0)
                return -1;
            return g1Idx - g2Idx;
        })
            .forEach(([, group]) => toc.items.push(group));
        appendModelsToToc(toc, 'group')(ungroupedModels);
    };
}
function appendHttpServicesItemsToToC(toc) {
    return (httpServices) => {
        if (httpServices.length) {
            httpServices.forEach(httpService => toc.items.push({ type: 'item', title: httpService.name, uri: httpService.uri }));
        }
    };
}
function appendHttpServicesToToC(toc) {
    return ({ httpServices, httpOperations, models, }) => {
        const standaloneModels = models.slice();
        sortBy__default["default"](httpServices, 'name').forEach(httpService => {
            let tocNode;
            tocNode = { type: 'group', title: httpService.name, items: [], uri: httpService.uri };
            toc.items.push(tocNode);
            flow__default["default"](() => ({
                httpOperations,
                models,
                regexp: new RegExp(`^${escapeRegExp__default["default"](httpService.uri)}${httpService.uri.endsWith('/') ? '' : '/'}`, 'i'),
            }), filterByUriRegexpAndCheckTags(standaloneModels), (_a) => {
                var subNodes = __rest(_a, ["hasTags"]);
                return appendHttpServiceItemsToToC(tocNode)(subNodes, httpService.tags || []);
            })();
        });
        return standaloneModels;
    };
}
function appendModelsToToc(toc, schemaType = 'divider') {
    return (models) => {
        if (models.length) {
            const { others, groups } = models.reduce((result, model) => {
                const [tagName] = model.tags || [];
                const item = { type: 'item', title: model.name, uri: model.uri };
                if (tagName) {
                    if (result.groups[tagName.toLowerCase()]) {
                        result.groups[tagName.toLowerCase()].items.push(item);
                    }
                    else {
                        result.groups[tagName.toLowerCase()] = {
                            type: 'group',
                            title: tagName,
                            items: [item],
                        };
                    }
                }
                else {
                    result.others.push(item);
                }
                return result;
            }, { groups: {}, others: [] });
            const childItems = [];
            Object.entries(groups).forEach(([, group]) => childItems.push(group));
            others.forEach(item => childItems.push(item));
            if (schemaType === 'divider') {
                toc.items.push({ type: 'divider', title: 'Schemas' });
                toc.items.push(...childItems);
            }
            else {
                toc.items.push({ type: 'group', title: 'Schemas', items: childItems });
            }
        }
    };
}
function getDirsFromUri(uri) {
    const strippedUri = uri.replace(/^\/?(?:docs\/)?/, '');
    return strippedUri.split(path.sep).slice(0, -1);
}

exports.generateProjectToC = generateProjectToC;
exports.generateTocSkeleton = generateTocSkeleton;
exports.isDivider = isDivider;
exports.isGroup = isGroup;
exports.isItem = isItem;
exports.resolveHttpServices = resolveHttpServices;
