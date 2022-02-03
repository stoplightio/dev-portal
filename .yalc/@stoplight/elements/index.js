'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var elementsCore = require('@stoplight/elements-core');
var mosaic = require('@stoplight/mosaic');
var flow = require('lodash/flow.js');
var React = require('react');
var reactQuery = require('react-query');
var types = require('@stoplight/types');
var reactRouterDom = require('react-router-dom');
var defaults = require('lodash/defaults.js');
var cn = require('classnames');
var yaml = require('@stoplight/yaml');
var fileSaver = require('file-saver');
var oas2 = require('@stoplight/http-spec/oas2');
var oas3 = require('@stoplight/http-spec/oas3');
var json = require('@stoplight/json');
var get = require('lodash/get.js');
var isObject = require('lodash/isObject.js');
var last = require('lodash/last.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var flow__default = /*#__PURE__*/_interopDefaultLegacy(flow);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var defaults__default = /*#__PURE__*/_interopDefaultLegacy(defaults);
var cn__default = /*#__PURE__*/_interopDefaultLegacy(cn);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var isObject__default = /*#__PURE__*/_interopDefaultLegacy(isObject);
var last__default = /*#__PURE__*/_interopDefaultLegacy(last);

const computeTagGroups = (serviceNode) => {
    const groupsByTagId = {};
    const ungrouped = [];
    const lowerCaseServiceTags = serviceNode.tags.map(tn => tn.toLowerCase());
    for (const node of serviceNode.children) {
        if (node.type !== types.NodeType.HttpOperation)
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
const defaultComputerAPITreeConfig = {
    hideSchemas: false,
    hideInternal: false,
};
const computeAPITree = (serviceNode, config = {}) => {
    const mergedConfig = defaults__default["default"](config, defaultComputerAPITreeConfig);
    const tree = [];
    tree.push({
        id: '/',
        slug: '/',
        title: 'Overview',
        type: 'overview',
        meta: '',
    });
    const operationNodes = serviceNode.children.filter(node => node.type === types.NodeType.HttpOperation);
    if (operationNodes.length) {
        tree.push({
            title: 'Endpoints',
        });
        const { groups, ungrouped } = computeTagGroups(serviceNode);
        ungrouped.forEach(operationNode => {
            if (mergedConfig.hideInternal && operationNode.data.internal) {
                return;
            }
            tree.push({
                id: operationNode.uri,
                slug: operationNode.uri,
                title: operationNode.name,
                type: operationNode.type,
                meta: operationNode.data.method,
            });
        });
        groups.forEach(group => {
            const items = group.items.flatMap(operationNode => {
                if (mergedConfig.hideInternal && operationNode.data.internal) {
                    return [];
                }
                return {
                    id: operationNode.uri,
                    slug: operationNode.uri,
                    title: operationNode.name,
                    type: operationNode.type,
                    meta: operationNode.data.method,
                };
            });
            if (items.length > 0) {
                tree.push({
                    title: group.title,
                    items,
                });
            }
        });
    }
    let schemaNodes = serviceNode.children.filter(node => node.type === types.NodeType.Model);
    if (mergedConfig.hideInternal) {
        schemaNodes = schemaNodes.filter(node => !node.data['x-internal']);
    }
    if (!mergedConfig.hideSchemas && schemaNodes.length) {
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
const findFirstNodeSlug = (tree) => {
    for (const item of tree) {
        if ('slug' in item) {
            return item.slug;
        }
        if ('items' in item) {
            const slug = findFirstNodeSlug(item.items);
            if (slug) {
                return slug;
            }
        }
    }
    return;
};
const isInternal = (node) => {
    const data = node.data;
    if (elementsCore.isHttpOperation(data)) {
        return !!data.internal;
    }
    if (elementsCore.isHttpService(data)) {
        return false;
    }
    return !!data['x-internal'];
};

const APIWithSidebarLayout = ({ serviceNode, logo, hideTryIt, hideSchemas, hideInternal, hideExport, exportProps, tryItCredentialsPolicy, tryItCorsProxy, }) => {
    const container = React__namespace.useRef(null);
    const tree = React__namespace.useMemo(() => computeAPITree(serviceNode, { hideSchemas, hideInternal }), [serviceNode, hideSchemas, hideInternal]);
    const location = reactRouterDom.useLocation();
    const { pathname } = location;
    const isRootPath = !pathname || pathname === '/';
    const node = isRootPath ? serviceNode : serviceNode.children.find(child => child.uri === pathname);
    const layoutOptions = React__namespace.useMemo(() => ({ hideTryIt: hideTryIt, hideExport: hideExport || (node === null || node === void 0 ? void 0 : node.type) !== types.NodeType.HttpService }), [hideTryIt, hideExport, node]);
    if (!node) {
        const firstSlug = findFirstNodeSlug(tree);
        if (firstSlug) {
            return React__namespace.createElement(reactRouterDom.Redirect, { to: firstSlug });
        }
    }
    if (hideInternal && node && isInternal(node)) {
        return React__namespace.createElement(reactRouterDom.Redirect, { to: "/" });
    }
    const handleTocClick = () => {
        if (container.current) {
            container.current.scrollIntoView();
        }
    };
    const sidebar = (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(mosaic.Flex, { ml: 4, mb: 5, alignItems: "center" },
            logo ? (React__namespace.createElement(elementsCore.Logo, { logo: { url: logo, altText: 'logo' } })) : (serviceNode.data.logo && React__namespace.createElement(elementsCore.Logo, { logo: serviceNode.data.logo })),
            React__namespace.createElement(mosaic.Heading, { size: 4 }, serviceNode.name)),
        React__namespace.createElement(mosaic.Flex, { flexGrow: true, flexShrink: true, overflowY: "auto", direction: "col" },
            React__namespace.createElement(elementsCore.TableOfContents, { tree: tree, activeId: pathname, Link: reactRouterDom.Link, onLinkClick: handleTocClick })),
        React__namespace.createElement(elementsCore.PoweredByLink, { source: serviceNode.name, pathname: pathname, packageType: "elements" })));
    return (React__namespace.createElement(elementsCore.SidebarLayout, { ref: container, sidebar: sidebar }, node && (React__namespace.createElement(elementsCore.ParsedDocs, { key: pathname, uri: pathname, node: node, nodeTitle: node.name, layoutOptions: layoutOptions, location: location, exportProps: exportProps, tryItCredentialsPolicy: tryItCredentialsPolicy, tryItCorsProxy: tryItCorsProxy }))));
};

const itemMatchesHash = (hash, item) => {
    return hash.substr(1) === `${item.name}-${item.data.method}`;
};
const TryItContext = React__namespace.createContext({
    hideTryIt: false,
    tryItCredentialsPolicy: 'omit',
});
TryItContext.displayName = 'TryItContext';
const APIWithStackedLayout = ({ serviceNode, hideTryIt, hideExport, exportProps, tryItCredentialsPolicy, tryItCorsProxy, }) => {
    const location = reactRouterDom.useLocation();
    const { groups } = computeTagGroups(serviceNode);
    return (React__namespace.createElement(TryItContext.Provider, { value: { hideTryIt, tryItCredentialsPolicy, corsProxy: tryItCorsProxy } },
        React__namespace.createElement(mosaic.Flex, { w: "full", flexDirection: "col", m: "auto", className: "sl-max-w-4xl" },
            React__namespace.createElement(mosaic.Box, { w: "full", borderB: true },
                React__namespace.createElement(elementsCore.Docs, { className: "sl-mx-auto", nodeData: serviceNode.data, nodeTitle: serviceNode.name, nodeType: types.NodeType.HttpService, location: location, layoutOptions: { showPoweredByLink: true, hideExport }, exportProps: exportProps, tryItCredentialsPolicy: tryItCredentialsPolicy })),
            groups.map(group => (React__namespace.createElement(Group, { key: group.title, group: group }))))));
};
const Group = React__namespace.memo(({ group }) => {
    const [isExpanded, setIsExpanded] = React__namespace.useState(false);
    const { hash } = reactRouterDom.useLocation();
    const scrollRef = React__namespace.useRef(null);
    const urlHashMatches = hash.substr(1) === group.title;
    const onClick = React__namespace.useCallback(() => setIsExpanded(!isExpanded), [isExpanded]);
    const shouldExpand = React__namespace.useMemo(() => {
        return urlHashMatches || group.items.some(item => itemMatchesHash(hash, item));
    }, [group, hash, urlHashMatches]);
    React__namespace.useEffect(() => {
        var _a;
        if (shouldExpand) {
            setIsExpanded(true);
            if (urlHashMatches && ((_a = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _a === void 0 ? void 0 : _a.offsetTop)) {
                window.scrollTo(0, scrollRef.current.offsetTop);
            }
        }
    }, [shouldExpand, urlHashMatches, group, hash]);
    return (React__namespace.createElement(mosaic.Box, null,
        React__namespace.createElement(mosaic.Flex, { ref: scrollRef, onClick: onClick, mx: "auto", justifyContent: "between", alignItems: "center", borderB: true, px: 2, py: 4, cursor: "pointer", color: { default: 'current', hover: 'muted' } },
            React__namespace.createElement(mosaic.Box, { fontSize: "lg", fontWeight: "medium" }, group.title),
            React__namespace.createElement(mosaic.Icon, { className: "sl-mr-2", icon: isExpanded ? 'chevron-down' : 'chevron-right', size: "sm" })),
        React__namespace.createElement(Collapse, { isOpen: isExpanded }, group.items.map(item => {
            return React__namespace.createElement(Item, { key: item.uri, item: item });
        }))));
});
const Item = React__namespace.memo(({ item }) => {
    const location = reactRouterDom.useLocation();
    const { hash } = location;
    const [isExpanded, setIsExpanded] = React__namespace.useState(false);
    const scrollRef = React__namespace.useRef(null);
    const color = elementsCore.HttpMethodColors[item.data.method] || 'gray';
    const isDeprecated = !!item.data.deprecated;
    const { hideTryIt, tryItCredentialsPolicy, corsProxy } = React__namespace.useContext(TryItContext);
    const onClick = React__namespace.useCallback(() => setIsExpanded(!isExpanded), [isExpanded]);
    React__namespace.useEffect(() => {
        var _a;
        if (itemMatchesHash(hash, item)) {
            setIsExpanded(true);
            if ((_a = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _a === void 0 ? void 0 : _a.offsetTop) {
                window.scrollTo(0, scrollRef.current.offsetTop);
            }
        }
    }, [hash, item]);
    return (React__namespace.createElement(mosaic.Box, { ref: scrollRef, w: "full", my: 2, border: true, borderColor: { default: isExpanded ? 'light' : 'transparent', hover: 'light' }, bg: { default: isExpanded ? 'code' : 'transparent', hover: 'code' } },
        React__namespace.createElement(mosaic.Flex, { mx: "auto", alignItems: "center", cursor: "pointer", fontSize: "lg", p: 2, onClick: onClick, color: "current" },
            React__namespace.createElement(mosaic.Box, { w: 24, textTransform: "uppercase", textAlign: "center", fontWeight: "semibold", border: true, rounded: true, px: 2, bg: "canvas", className: cn__default["default"](`sl-mr-5 sl-text-base`, `sl-text-${color}`, `sl-border-${color}`) }, item.data.method || 'UNKNOWN'),
            React__namespace.createElement(mosaic.Box, { flex: 1, fontWeight: "medium", wordBreak: "all" }, item.name),
            isDeprecated && React__namespace.createElement(elementsCore.DeprecatedBadge, null)),
        React__namespace.createElement(Collapse, { isOpen: isExpanded }, hideTryIt ? (React__namespace.createElement(mosaic.Box, { as: elementsCore.ParsedDocs, layoutOptions: { noHeading: true, hideTryItPanel: true }, node: item, p: 4 })) : (React__namespace.createElement(mosaic.Tabs, { appearance: "line" },
            React__namespace.createElement(mosaic.TabList, null,
                React__namespace.createElement(mosaic.Tab, null, "Docs"),
                React__namespace.createElement(mosaic.Tab, null, "TryIt")),
            React__namespace.createElement(mosaic.TabPanels, null,
                React__namespace.createElement(mosaic.TabPanel, null,
                    React__namespace.createElement(elementsCore.ParsedDocs, { className: "sl-px-4", node: item, location: location, layoutOptions: { noHeading: true, hideTryItPanel: true } })),
                React__namespace.createElement(mosaic.TabPanel, null,
                    React__namespace.createElement(elementsCore.TryItWithRequestSamples, { httpOperation: item.data, tryItCredentialsPolicy: tryItCredentialsPolicy, corsProxy: corsProxy }))))))));
});
const Collapse = ({ isOpen, children }) => {
    if (!isOpen)
        return null;
    return React__namespace.createElement(mosaic.Box, null, children);
};

var NodeTypes;
(function (NodeTypes) {
    NodeTypes["Paths"] = "paths";
    NodeTypes["Path"] = "path";
    NodeTypes["Operation"] = "operation";
    NodeTypes["Components"] = "components";
    NodeTypes["Models"] = "models";
    NodeTypes["Model"] = "model";
})(NodeTypes || (NodeTypes = {}));

const oas2SourceMap = [
    {
        match: 'paths',
        type: NodeTypes.Paths,
        children: [
            {
                notMatch: '^x-',
                type: NodeTypes.Path,
                children: [
                    {
                        match: 'get|post|put|delete|options|head|patch|trace',
                        type: NodeTypes.Operation,
                    },
                ],
            },
        ],
    },
    {
        match: 'definitions',
        type: NodeTypes.Models,
        children: [
            {
                notMatch: '^x-',
                type: NodeTypes.Model,
            },
        ],
    },
];

const oas3SourceMap = [
    {
        match: 'paths',
        type: NodeTypes.Paths,
        children: [
            {
                notMatch: '^x-',
                type: NodeTypes.Path,
                children: [
                    {
                        match: 'get|post|put|delete|options|head|patch|trace',
                        type: NodeTypes.Operation,
                    },
                ],
            },
        ],
    },
    {
        match: 'components',
        type: NodeTypes.Components,
        children: [
            {
                match: 'schemas',
                type: NodeTypes.Models,
                children: [
                    {
                        notMatch: '^x-',
                        type: NodeTypes.Model,
                    },
                ],
            },
        ],
    },
];

const isOas2 = (parsed) => isObject__default["default"](parsed) &&
    'swagger' in parsed &&
    Number.parseInt(String(parsed.swagger)) === 2;
const isOas3 = (parsed) => isObject__default["default"](parsed) &&
    'openapi' in parsed &&
    Number.parseFloat(String(parsed.openapi)) >= 3;
const isOas31 = (parsed) => isObject__default["default"](parsed) &&
    'openapi' in parsed &&
    Number.parseFloat(String(parsed.openapi)) === 3.1;
const OAS_MODEL_REGEXP = /((definitions|components)\/?(schemas)?)\//;
function transformOasToServiceNode(apiDescriptionDocument) {
    if (isOas31(apiDescriptionDocument)) {
        return computeServiceNode(Object.assign(Object.assign({}, apiDescriptionDocument), { jsonSchemaDialect: 'http://json-schema.org/draft-07/schema#' }), oas3SourceMap, oas3.transformOas3Service, oas3.transformOas3Operation);
    }
    if (isOas3(apiDescriptionDocument)) {
        return computeServiceNode(apiDescriptionDocument, oas3SourceMap, oas3.transformOas3Service, oas3.transformOas3Operation);
    }
    else if (isOas2(apiDescriptionDocument)) {
        return computeServiceNode(apiDescriptionDocument, oas2SourceMap, oas2.transformOas2Service, oas2.transformOas2Operation);
    }
    return null;
}
function computeServiceNode(document, map, transformService, transformOperation) {
    var _a;
    const serviceDocument = transformService({ document });
    const serviceNode = {
        type: types.NodeType.HttpService,
        uri: '/',
        name: serviceDocument.name,
        data: serviceDocument,
        tags: ((_a = serviceDocument.tags) === null || _a === void 0 ? void 0 : _a.map(tag => tag.name)) || [],
        children: computeChildNodes(document, document, map, transformOperation),
    };
    return serviceNode;
}
function computeChildNodes(document, data, map, transformer, parentUri = '') {
    var _a;
    const nodes = [];
    if (!isObject__default["default"](data))
        return nodes;
    for (const key of Object.keys(data)) {
        const sanitizedKey = json.encodePointerFragment(key);
        const match = findMapMatch(sanitizedKey, map);
        if (match) {
            const uri = `${parentUri}/${sanitizedKey}`;
            const jsonPath = json.pointerToPath(`#${uri}`);
            if (match.type === NodeTypes.Operation && jsonPath.length === 3) {
                const path = String(jsonPath[1]);
                const method = String(jsonPath[2]);
                const operationDocument = transformer({ document, path, method });
                let parsedUri;
                const encodedPath = String(json.encodePointerFragment(path));
                if (operationDocument.iid) {
                    parsedUri = `/operations/${operationDocument.iid}`;
                }
                else {
                    parsedUri = uri.replace(encodedPath, elementsCore.slugify(path));
                }
                nodes.push({
                    type: types.NodeType.HttpOperation,
                    uri: parsedUri,
                    data: operationDocument,
                    name: operationDocument.summary || operationDocument.iid || operationDocument.path,
                    tags: ((_a = operationDocument.tags) === null || _a === void 0 ? void 0 : _a.map(tag => tag.name)) || [],
                });
            }
            else if (match.type === NodeTypes.Model) {
                const schemaDocument = get__default["default"](document, jsonPath);
                const parsedUri = uri.replace(OAS_MODEL_REGEXP, 'schemas/');
                nodes.push({
                    type: types.NodeType.Model,
                    uri: parsedUri,
                    data: schemaDocument,
                    name: schemaDocument.title || last__default["default"](uri.split('/')) || '',
                    tags: schemaDocument['x-tags'] || [],
                });
            }
            if (match.children) {
                nodes.push(...computeChildNodes(document, data[key], match.children, transformer, uri));
            }
        }
    }
    return nodes;
}
function findMapMatch(key, map) {
    var _a;
    if (typeof key === 'number')
        return;
    for (const entry of map) {
        if (!!((_a = entry.match) === null || _a === void 0 ? void 0 : _a.match(key)) || (entry.notMatch !== void 0 && !entry.notMatch.match(key))) {
            return entry;
        }
    }
}
function isJson(value) {
    try {
        JSON.parse(value);
    }
    catch (e) {
        return false;
    }
    return true;
}

function useExportDocumentProps({ originalDocument, bundledDocument, }) {
    const isJsonDocument = typeof originalDocument === 'object' || (!!originalDocument && isJson(originalDocument));
    const exportDocument = React__namespace.useCallback((document) => {
        const type = isJsonDocument ? 'json' : 'yaml';
        const blob = new Blob([document], {
            type: `application/${type}`,
        });
        fileSaver.saveAs(blob, `document.${type}`);
    }, [isJsonDocument]);
    const exportOriginalDocument = React__namespace.useCallback(() => {
        const stringifiedDocument = typeof originalDocument === 'object' ? JSON.stringify(originalDocument, null, 2) : originalDocument || '';
        exportDocument(stringifiedDocument);
    }, [originalDocument, exportDocument]);
    const exportBundledDocument = React__namespace.useCallback(() => {
        const stringifiedDocument = isJsonDocument
            ? JSON.stringify(bundledDocument, null, 2)
            : yaml.safeStringify(bundledDocument);
        exportDocument(stringifiedDocument);
    }, [bundledDocument, isJsonDocument, exportDocument]);
    return {
        original: {
            onPress: exportOriginalDocument,
        },
        bundled: {
            onPress: exportBundledDocument,
        },
    };
}

const propsAreWithDocument = (props) => {
    return props.hasOwnProperty('apiDescriptionDocument');
};
const APIImpl = props => {
    const { layout, apiDescriptionUrl = '', logo, hideTryIt, hideSchemas, hideInternal, hideExport, tryItCredentialsPolicy, tryItCorsProxy, } = props;
    const apiDescriptionDocument = propsAreWithDocument(props) ? props.apiDescriptionDocument : undefined;
    const { data: fetchedDocument, error } = reactQuery.useQuery([apiDescriptionUrl], () => fetch(apiDescriptionUrl).then(res => {
        if (res.ok) {
            return res.text();
        }
        throw new Error(`Unable to load description document, status code: ${res.status}`);
    }), {
        enabled: apiDescriptionUrl !== '' && !apiDescriptionDocument,
    });
    const document = apiDescriptionDocument || fetchedDocument || '';
    const parsedDocument = elementsCore.useParsedValue(document);
    const bundledDocument = elementsCore.useBundleRefsIntoDocument(parsedDocument, { baseUrl: apiDescriptionUrl });
    const serviceNode = React__namespace.useMemo(() => transformOasToServiceNode(bundledDocument), [bundledDocument]);
    const exportProps = useExportDocumentProps({ originalDocument: document, bundledDocument });
    if (error) {
        return (React__namespace.createElement(mosaic.Flex, { justify: "center", alignItems: "center", w: "full", minH: "screen" },
            React__namespace.createElement(elementsCore.NonIdealState, { title: "Document could not be loaded", description: "The API description document could not be fetched. This could indicate connectivity problems, or issues with the server hosting the spec.", icon: "exclamation-triangle" })));
    }
    if (!bundledDocument) {
        return (React__namespace.createElement(mosaic.Flex, { justify: "center", alignItems: "center", w: "full", minH: "screen", color: "light" },
            React__namespace.createElement(mosaic.Box, { as: mosaic.Icon, icon: ['fal', 'circle-notch'], size: "3x", spin: true })));
    }
    if (!serviceNode) {
        return (React__namespace.createElement(mosaic.Flex, { justify: "center", alignItems: "center", w: "full", minH: "screen" },
            React__namespace.createElement(elementsCore.NonIdealState, { title: "Failed to parse OpenAPI file", description: "Please make sure your OpenAPI file is valid and try again" })));
    }
    return (React__namespace.createElement(elementsCore.InlineRefResolverProvider, { document: parsedDocument }, layout === 'stacked' ? (React__namespace.createElement(APIWithStackedLayout, { serviceNode: serviceNode, hideTryIt: hideTryIt, hideExport: hideExport, exportProps: exportProps, tryItCredentialsPolicy: tryItCredentialsPolicy, tryItCorsProxy: tryItCorsProxy })) : (React__namespace.createElement(APIWithSidebarLayout, { logo: logo, serviceNode: serviceNode, hideTryIt: hideTryIt, hideSchemas: hideSchemas, hideInternal: hideInternal, hideExport: hideExport, exportProps: exportProps, tryItCredentialsPolicy: tryItCredentialsPolicy, tryItCorsProxy: tryItCorsProxy }))));
};
const API = flow__default["default"](elementsCore.withRouter, elementsCore.withStyles, elementsCore.withPersistenceBoundary, elementsCore.withMosaicProvider, elementsCore.withQueryClientProvider)(APIImpl);

exports.API = API;
