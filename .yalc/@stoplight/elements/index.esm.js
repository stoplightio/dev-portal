import { isHttpOperation, isHttpService, Logo, TableOfContents, PoweredByLink, SidebarLayout, ParsedDocs, HttpMethodColors, DeprecatedBadge, TryItWithRequestSamples, Docs, slugify, withRouter, withStyles, withPersistenceBoundary, withMosaicProvider, withQueryClientProvider, useParsedValue, useBundleRefsIntoDocument, NonIdealState, InlineRefResolverProvider } from '@stoplight/elements-core';
import { Flex, Heading, Box, Icon, Tabs, TabList, Tab, TabPanels, TabPanel } from '@stoplight/mosaic';
import flow from 'lodash/flow.js';
import * as React from 'react';
import { useQuery } from 'react-query';
import { NodeType } from '@stoplight/types';
import { useLocation, Redirect, Link } from 'react-router-dom';
import defaults from 'lodash/defaults.js';
import cn from 'classnames';
import { safeStringify } from '@stoplight/yaml';
import { saveAs } from 'file-saver';
import { transformOas2Service, transformOas2Operation } from '@stoplight/http-spec/oas2';
import { transformOas3Service, transformOas3Operation } from '@stoplight/http-spec/oas3';
import { encodePointerFragment, pointerToPath } from '@stoplight/json';
import get from 'lodash/get.js';
import isObject from 'lodash/isObject.js';
import last from 'lodash/last.js';

const computeTagGroups = (serviceNode) => {
    const groupsByTagId = {};
    const ungrouped = [];
    const lowerCaseServiceTags = serviceNode.tags.map(tn => tn.toLowerCase());
    for (const node of serviceNode.children) {
        if (node.type !== NodeType.HttpOperation)
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
    const mergedConfig = defaults(config, defaultComputerAPITreeConfig);
    const tree = [];
    tree.push({
        id: '/',
        slug: '/',
        title: 'Overview',
        type: 'overview',
        meta: '',
    });
    const operationNodes = serviceNode.children.filter(node => node.type === NodeType.HttpOperation);
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
    let schemaNodes = serviceNode.children.filter(node => node.type === NodeType.Model);
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
    if (isHttpOperation(data)) {
        return !!data.internal;
    }
    if (isHttpService(data)) {
        return false;
    }
    return !!data['x-internal'];
};

const APIWithSidebarLayout = ({ serviceNode, logo, hideTryIt, hideSchemas, hideInternal, hideExport, exportProps, tryItCredentialsPolicy, tryItCorsProxy, }) => {
    const container = React.useRef(null);
    const tree = React.useMemo(() => computeAPITree(serviceNode, { hideSchemas, hideInternal }), [serviceNode, hideSchemas, hideInternal]);
    const location = useLocation();
    const { pathname } = location;
    const isRootPath = !pathname || pathname === '/';
    const node = isRootPath ? serviceNode : serviceNode.children.find(child => child.uri === pathname);
    const layoutOptions = React.useMemo(() => ({ hideTryIt: hideTryIt, hideExport: hideExport || (node === null || node === void 0 ? void 0 : node.type) !== NodeType.HttpService }), [hideTryIt, hideExport, node]);
    if (!node) {
        const firstSlug = findFirstNodeSlug(tree);
        if (firstSlug) {
            return React.createElement(Redirect, { to: firstSlug });
        }
    }
    if (hideInternal && node && isInternal(node)) {
        return React.createElement(Redirect, { to: "/" });
    }
    const handleTocClick = () => {
        if (container.current) {
            container.current.scrollIntoView();
        }
    };
    const sidebar = (React.createElement(React.Fragment, null,
        React.createElement(Flex, { ml: 4, mb: 5, alignItems: "center" },
            logo ? (React.createElement(Logo, { logo: { url: logo, altText: 'logo' } })) : (serviceNode.data.logo && React.createElement(Logo, { logo: serviceNode.data.logo })),
            React.createElement(Heading, { size: 4 }, serviceNode.name)),
        React.createElement(Flex, { flexGrow: true, flexShrink: true, overflowY: "auto", direction: "col" },
            React.createElement(TableOfContents, { tree: tree, activeId: pathname, Link: Link, onLinkClick: handleTocClick })),
        React.createElement(PoweredByLink, { source: serviceNode.name, pathname: pathname, packageType: "elements" })));
    return (React.createElement(SidebarLayout, { ref: container, sidebar: sidebar }, node && (React.createElement(ParsedDocs, { key: pathname, uri: pathname, node: node, nodeTitle: node.name, layoutOptions: layoutOptions, location: location, exportProps: exportProps, tryItCredentialsPolicy: tryItCredentialsPolicy, tryItCorsProxy: tryItCorsProxy }))));
};

const itemMatchesHash = (hash, item) => {
    return hash.substr(1) === `${item.name}-${item.data.method}`;
};
const TryItContext = React.createContext({
    hideTryIt: false,
    tryItCredentialsPolicy: 'omit',
});
TryItContext.displayName = 'TryItContext';
const APIWithStackedLayout = ({ serviceNode, hideTryIt, hideExport, exportProps, tryItCredentialsPolicy, tryItCorsProxy, }) => {
    const location = useLocation();
    const { groups } = computeTagGroups(serviceNode);
    return (React.createElement(TryItContext.Provider, { value: { hideTryIt, tryItCredentialsPolicy, corsProxy: tryItCorsProxy } },
        React.createElement(Flex, { w: "full", flexDirection: "col", m: "auto", className: "sl-max-w-4xl" },
            React.createElement(Box, { w: "full", borderB: true },
                React.createElement(Docs, { className: "sl-mx-auto", nodeData: serviceNode.data, nodeTitle: serviceNode.name, nodeType: NodeType.HttpService, location: location, layoutOptions: { showPoweredByLink: true, hideExport }, exportProps: exportProps, tryItCredentialsPolicy: tryItCredentialsPolicy })),
            groups.map(group => (React.createElement(Group, { key: group.title, group: group }))))));
};
const Group = React.memo(({ group }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const { hash } = useLocation();
    const scrollRef = React.useRef(null);
    const urlHashMatches = hash.substr(1) === group.title;
    const onClick = React.useCallback(() => setIsExpanded(!isExpanded), [isExpanded]);
    const shouldExpand = React.useMemo(() => {
        return urlHashMatches || group.items.some(item => itemMatchesHash(hash, item));
    }, [group, hash, urlHashMatches]);
    React.useEffect(() => {
        var _a;
        if (shouldExpand) {
            setIsExpanded(true);
            if (urlHashMatches && ((_a = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _a === void 0 ? void 0 : _a.offsetTop)) {
                window.scrollTo(0, scrollRef.current.offsetTop);
            }
        }
    }, [shouldExpand, urlHashMatches, group, hash]);
    return (React.createElement(Box, null,
        React.createElement(Flex, { ref: scrollRef, onClick: onClick, mx: "auto", justifyContent: "between", alignItems: "center", borderB: true, px: 2, py: 4, cursor: "pointer", color: { default: 'current', hover: 'muted' } },
            React.createElement(Box, { fontSize: "lg", fontWeight: "medium" }, group.title),
            React.createElement(Icon, { className: "sl-mr-2", icon: isExpanded ? 'chevron-down' : 'chevron-right', size: "sm" })),
        React.createElement(Collapse, { isOpen: isExpanded }, group.items.map(item => {
            return React.createElement(Item, { key: item.uri, item: item });
        }))));
});
const Item = React.memo(({ item }) => {
    const location = useLocation();
    const { hash } = location;
    const [isExpanded, setIsExpanded] = React.useState(false);
    const scrollRef = React.useRef(null);
    const color = HttpMethodColors[item.data.method] || 'gray';
    const isDeprecated = !!item.data.deprecated;
    const { hideTryIt, tryItCredentialsPolicy, corsProxy } = React.useContext(TryItContext);
    const onClick = React.useCallback(() => setIsExpanded(!isExpanded), [isExpanded]);
    React.useEffect(() => {
        var _a;
        if (itemMatchesHash(hash, item)) {
            setIsExpanded(true);
            if ((_a = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _a === void 0 ? void 0 : _a.offsetTop) {
                window.scrollTo(0, scrollRef.current.offsetTop);
            }
        }
    }, [hash, item]);
    return (React.createElement(Box, { ref: scrollRef, w: "full", my: 2, border: true, borderColor: { default: isExpanded ? 'light' : 'transparent', hover: 'light' }, bg: { default: isExpanded ? 'code' : 'transparent', hover: 'code' } },
        React.createElement(Flex, { mx: "auto", alignItems: "center", cursor: "pointer", fontSize: "lg", p: 2, onClick: onClick, color: "current" },
            React.createElement(Box, { w: 24, textTransform: "uppercase", textAlign: "center", fontWeight: "semibold", border: true, rounded: true, px: 2, bg: "canvas", className: cn(`sl-mr-5 sl-text-base`, `sl-text-${color}`, `sl-border-${color}`) }, item.data.method || 'UNKNOWN'),
            React.createElement(Box, { flex: 1, fontWeight: "medium", wordBreak: "all" }, item.name),
            isDeprecated && React.createElement(DeprecatedBadge, null)),
        React.createElement(Collapse, { isOpen: isExpanded }, hideTryIt ? (React.createElement(Box, { as: ParsedDocs, layoutOptions: { noHeading: true, hideTryItPanel: true }, node: item, p: 4 })) : (React.createElement(Tabs, { appearance: "line" },
            React.createElement(TabList, null,
                React.createElement(Tab, null, "Docs"),
                React.createElement(Tab, null, "TryIt")),
            React.createElement(TabPanels, null,
                React.createElement(TabPanel, null,
                    React.createElement(ParsedDocs, { className: "sl-px-4", node: item, location: location, layoutOptions: { noHeading: true, hideTryItPanel: true } })),
                React.createElement(TabPanel, null,
                    React.createElement(TryItWithRequestSamples, { httpOperation: item.data, tryItCredentialsPolicy: tryItCredentialsPolicy, corsProxy: corsProxy }))))))));
});
const Collapse = ({ isOpen, children }) => {
    if (!isOpen)
        return null;
    return React.createElement(Box, null, children);
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

const isOas2 = (parsed) => isObject(parsed) &&
    'swagger' in parsed &&
    Number.parseInt(String(parsed.swagger)) === 2;
const isOas3 = (parsed) => isObject(parsed) &&
    'openapi' in parsed &&
    Number.parseFloat(String(parsed.openapi)) >= 3;
const isOas31 = (parsed) => isObject(parsed) &&
    'openapi' in parsed &&
    Number.parseFloat(String(parsed.openapi)) === 3.1;
const OAS_MODEL_REGEXP = /((definitions|components)\/?(schemas)?)\//;
function transformOasToServiceNode(apiDescriptionDocument) {
    if (isOas31(apiDescriptionDocument)) {
        return computeServiceNode(Object.assign(Object.assign({}, apiDescriptionDocument), { jsonSchemaDialect: 'http://json-schema.org/draft-07/schema#' }), oas3SourceMap, transformOas3Service, transformOas3Operation);
    }
    if (isOas3(apiDescriptionDocument)) {
        return computeServiceNode(apiDescriptionDocument, oas3SourceMap, transformOas3Service, transformOas3Operation);
    }
    else if (isOas2(apiDescriptionDocument)) {
        return computeServiceNode(apiDescriptionDocument, oas2SourceMap, transformOas2Service, transformOas2Operation);
    }
    return null;
}
function computeServiceNode(document, map, transformService, transformOperation) {
    var _a;
    const serviceDocument = transformService({ document });
    const serviceNode = {
        type: NodeType.HttpService,
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
    if (!isObject(data))
        return nodes;
    for (const key of Object.keys(data)) {
        const sanitizedKey = encodePointerFragment(key);
        const match = findMapMatch(sanitizedKey, map);
        if (match) {
            const uri = `${parentUri}/${sanitizedKey}`;
            const jsonPath = pointerToPath(`#${uri}`);
            if (match.type === NodeTypes.Operation && jsonPath.length === 3) {
                const path = String(jsonPath[1]);
                const method = String(jsonPath[2]);
                const operationDocument = transformer({ document, path, method });
                let parsedUri;
                const encodedPath = String(encodePointerFragment(path));
                if (operationDocument.iid) {
                    parsedUri = `/operations/${operationDocument.iid}`;
                }
                else {
                    parsedUri = uri.replace(encodedPath, slugify(path));
                }
                nodes.push({
                    type: NodeType.HttpOperation,
                    uri: parsedUri,
                    data: operationDocument,
                    name: operationDocument.summary || operationDocument.iid || operationDocument.path,
                    tags: ((_a = operationDocument.tags) === null || _a === void 0 ? void 0 : _a.map(tag => tag.name)) || [],
                });
            }
            else if (match.type === NodeTypes.Model) {
                const schemaDocument = get(document, jsonPath);
                const parsedUri = uri.replace(OAS_MODEL_REGEXP, 'schemas/');
                nodes.push({
                    type: NodeType.Model,
                    uri: parsedUri,
                    data: schemaDocument,
                    name: schemaDocument.title || last(uri.split('/')) || '',
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
    const exportDocument = React.useCallback((document) => {
        const type = isJsonDocument ? 'json' : 'yaml';
        const blob = new Blob([document], {
            type: `application/${type}`,
        });
        saveAs(blob, `document.${type}`);
    }, [isJsonDocument]);
    const exportOriginalDocument = React.useCallback(() => {
        const stringifiedDocument = typeof originalDocument === 'object' ? JSON.stringify(originalDocument, null, 2) : originalDocument || '';
        exportDocument(stringifiedDocument);
    }, [originalDocument, exportDocument]);
    const exportBundledDocument = React.useCallback(() => {
        const stringifiedDocument = isJsonDocument
            ? JSON.stringify(bundledDocument, null, 2)
            : safeStringify(bundledDocument);
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
    const { data: fetchedDocument, error } = useQuery([apiDescriptionUrl], () => fetch(apiDescriptionUrl).then(res => {
        if (res.ok) {
            return res.text();
        }
        throw new Error(`Unable to load description document, status code: ${res.status}`);
    }), {
        enabled: apiDescriptionUrl !== '' && !apiDescriptionDocument,
    });
    const document = apiDescriptionDocument || fetchedDocument || '';
    const parsedDocument = useParsedValue(document);
    const bundledDocument = useBundleRefsIntoDocument(parsedDocument, { baseUrl: apiDescriptionUrl });
    const serviceNode = React.useMemo(() => transformOasToServiceNode(bundledDocument), [bundledDocument]);
    const exportProps = useExportDocumentProps({ originalDocument: document, bundledDocument });
    if (error) {
        return (React.createElement(Flex, { justify: "center", alignItems: "center", w: "full", minH: "screen" },
            React.createElement(NonIdealState, { title: "Document could not be loaded", description: "The API description document could not be fetched. This could indicate connectivity problems, or issues with the server hosting the spec.", icon: "exclamation-triangle" })));
    }
    if (!bundledDocument) {
        return (React.createElement(Flex, { justify: "center", alignItems: "center", w: "full", minH: "screen", color: "light" },
            React.createElement(Box, { as: Icon, icon: ['fal', 'circle-notch'], size: "3x", spin: true })));
    }
    if (!serviceNode) {
        return (React.createElement(Flex, { justify: "center", alignItems: "center", w: "full", minH: "screen" },
            React.createElement(NonIdealState, { title: "Failed to parse OpenAPI file", description: "Please make sure your OpenAPI file is valid and try again" })));
    }
    return (React.createElement(InlineRefResolverProvider, { document: parsedDocument }, layout === 'stacked' ? (React.createElement(APIWithStackedLayout, { serviceNode: serviceNode, hideTryIt: hideTryIt, hideExport: hideExport, exportProps: exportProps, tryItCredentialsPolicy: tryItCredentialsPolicy, tryItCorsProxy: tryItCorsProxy })) : (React.createElement(APIWithSidebarLayout, { logo: logo, serviceNode: serviceNode, hideTryIt: hideTryIt, hideSchemas: hideSchemas, hideInternal: hideInternal, hideExport: hideExport, exportProps: exportProps, tryItCredentialsPolicy: tryItCredentialsPolicy, tryItCorsProxy: tryItCorsProxy }))));
};
const API = flow(withRouter, withStyles, withPersistenceBoundary, withMosaicProvider, withQueryClientProvider)(APIImpl);

export { API };
