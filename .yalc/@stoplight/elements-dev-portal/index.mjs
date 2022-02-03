import { Menu, FieldButton, Modal, Input, Box, Icon, ListBox, ListBoxItem, Flex, VStack, Heading } from '@stoplight/mosaic';
import * as React from 'react';
import React__default, { useRef, useEffect, useMemo, useCallback, useState } from 'react';
import { withPersistenceBoundary, withQueryClientProvider, withMosaicProvider, MarkdownComponentsProvider, MockingProvider, Docs, withStyles, NodeTypeIconDefs, NodeTypeColors, TableOfContents as TableOfContents$1, PoweredByLink, useRouter, findFirstNode, ReactRouterMarkdownLink, SidebarLayout } from '@stoplight/elements-core';
import { resolve, dirname } from '@stoplight/path';
import { NodeType } from '@stoplight/types';
import { faSpinner, faSearch, faCircleNotch, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import flow from 'lodash/flow.js';
import { Route, useParams, useHistory, Redirect, Link } from 'react-router-dom';
import { useQuery } from 'react-query';

const BranchSelector = ({ branchSlug, branches, onChange }) => {
    const currentBranch = branches.find(branch => (!branchSlug ? branch.is_default : branch.slug === branchSlug));
    const handleChange = React.useCallback((selectedSlug) => {
        const selectedBranch = branches.find(branch => branch.slug === selectedSlug);
        if (selectedBranch) {
            onChange(selectedBranch);
        }
    }, [onChange, branches]);
    return (React.createElement(Menu, { "aria-label": "Versions", placement: "bottom left", closeOnPress: true, matchTriggerWidth: true, renderTrigger: ({ isOpen }) => (React.createElement(FieldButton, { w: "full", icon: "layer-group", px: 4, h: "md", active: isOpen, borderR: 0, roundedR: "none" }, (currentBranch === null || currentBranch === void 0 ? void 0 : currentBranch.name) || (currentBranch === null || currentBranch === void 0 ? void 0 : currentBranch.slug) || 'Choose a version')), items: [
            {
                type: 'option_group',
                title: 'Versions',
                onChange: handleChange,
                value: (currentBranch === null || currentBranch === void 0 ? void 0 : currentBranch.slug) || '',
                children: branches.map(branch => ({
                    label: branch.name || branch.slug,
                    value: branch.slug,
                    meta: branch.is_default ? 'Default' : undefined,
                })),
            },
        ] }));
};

const PlatformContext = React.createContext({ platformUrl: 'https://stoplight.io' });
const PlatformProvider = ({ platformUrl = 'https://stoplight.io', platformAuthToken, children, }) => {
    return React.createElement(PlatformContext.Provider, { value: { platformUrl, platformAuthToken } }, children);
};
const DevPortalProvider = withPersistenceBoundary(withQueryClientProvider(withMosaicProvider(PlatformProvider)));

const NodeContent = ({ node, Link, hideTryIt, hideTryItPanel, hideMocking, hideExport, tryItCredentialsPolicy, tryItCorsProxy, refResolver, }) => {
    return (React.createElement(NodeLinkContext.Provider, { value: [node, Link] },
        React.createElement(MarkdownComponentsProvider, { value: { a: LinkComponent } },
            React.createElement(MockingProvider, { mockUrl: node.links.mock_url, hideMocking: hideMocking },
                React.createElement(Docs, { nodeType: node.type, nodeData: node.data, nodeTitle: node.title, layoutOptions: {
                        hideTryIt: hideTryIt,
                        hideTryItPanel: hideTryItPanel,
                        hideExport: hideExport || node.links.export_url === undefined,
                    }, useNodeForRefResolving: true, refResolver: refResolver, tryItCorsProxy: tryItCorsProxy, exportProps: [NodeType.HttpService, NodeType.Model].includes(node.type)
                        ? {
                            original: {
                                href: node.links.export_url,
                            },
                            bundled: {
                                href: getBundledUrl(node.links.export_url),
                            },
                        }
                        : undefined, tryItCredentialsPolicy: tryItCredentialsPolicy })))));
};
const NodeLinkContext = React.createContext(undefined);
const externalRegex = new RegExp('^(?:[a-z]+:)?//', 'i');
const LinkComponent = ({ children, href }) => {
    const ctx = React.useContext(NodeLinkContext);
    if (href && externalRegex.test(href)) {
        return (React.createElement("a", { href: href, target: "_blank", rel: "noreferrer" }, children));
    }
    if (href && ctx) {
        const [node, Link] = ctx;
        const resolvedUri = resolve(dirname(node.uri), href);
        const [resolvedUriWithoutAnchor, hash] = resolvedUri.split('#');
        const decodedUrl = decodeURIComponent(href);
        const decodedResolvedUriWithoutAnchor = decodeURIComponent(resolvedUriWithoutAnchor);
        const edge = node.outbound_edges.find(edge => edge.uri === decodedUrl || edge.uri === decodedResolvedUriWithoutAnchor);
        if (edge) {
            return React.createElement(Link, { to: `${edge.slug}${hash ? `#${hash}` : ''}` }, children);
        }
    }
    return React.createElement("a", { href: href }, children);
};
function getBundledUrl(url) {
    if (url === undefined)
        return undefined;
    const bundledUrl = new URL(url);
    const searchParams = new URLSearchParams(bundledUrl.search);
    searchParams.append('deref', 'optimizedBundle');
    bundledUrl.search = searchParams.toString();
    return bundledUrl.toString();
}

const SearchImpl = ({ isLoading, search, searchResults, isOpen, onClose, onClick, onSearch }) => {
    const listBoxRef = React.useRef(null);
    const onChange = React.useCallback(e => onSearch(e.currentTarget.value), [onSearch]);
    const onKeyDown = React.useCallback(e => {
        var _a;
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            (_a = listBoxRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, []);
    const onSelectionChange = React.useCallback(keys => {
        const selectedId = keys.values().next().value;
        const selectedResult = searchResults === null || searchResults === void 0 ? void 0 : searchResults.find(searchResult => `${searchResult.id}-${searchResult.project_id}` === selectedId);
        if (selectedResult) {
            onClick(selectedResult);
        }
    }, [searchResults, onClick]);
    return (React.createElement(Modal, { renderHeader: () => (React.createElement(Input, { appearance: "minimal", borderB: true, size: "lg", icon: React.createElement(Box, { as: Icon, ml: 1, icon: isLoading ? faSpinner : faSearch, spin: isLoading }), autoFocus: true, placeholder: "Search...", value: search, onChange: onChange, onKeyDown: onKeyDown })), isOpen: !!isOpen, onClose: onClose }, searchResults && searchResults.length > 0 ? (React.createElement(ListBox, { ref: listBoxRef, "aria-label": "Search", overflowY: "auto", h: 80, m: -5, items: searchResults, selectionMode: "single", onSelectionChange: onSelectionChange }, (searchResult) => {
        var _a, _b;
        return (React.createElement(ListBoxItem, { key: `${searchResult.id}-${searchResult.project_id}`, textValue: searchResult.title },
            React.createElement(Box, { p: 3, borderB: true },
                React.createElement(Flex, { align: "center" },
                    React.createElement(Box, { as: Icon, w: 4, icon: NodeTypeIconDefs[searchResult.type], style: { color: NodeTypeColors[searchResult.type] } }),
                    React.createElement(Box, { flex: 1, fontSize: "lg", dangerouslySetInnerHTML: { __html: (_a = searchResult.highlighted.name) !== null && _a !== void 0 ? _a : '' }, fontWeight: "medium", textOverflow: "text-ellipsis", mx: 2 }),
                    React.createElement(Box, { fontSize: "sm", color: "muted" }, searchResult.project_name)),
                React.createElement(Box, { dangerouslySetInnerHTML: { __html: (_b = searchResult.highlighted.summary) !== null && _b !== void 0 ? _b : '' }, color: "muted", fontSize: "sm", mt: 1, ml: 6 }))));
    })) : (React.createElement(Flex, { w: "full", h: 80, align: "center", justify: "center", m: -5 }, "No search results"))));
};
const Search = flow(withStyles, withPersistenceBoundary, withMosaicProvider, withQueryClientProvider)(SearchImpl);

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const TableOfContents = (_a) => {
    var { tableOfContents, activeId, Link, collapseTableOfContents = false, externalScrollbar, onLinkClick } = _a, boxProps = __rest(_a, ["tableOfContents", "activeId", "Link", "collapseTableOfContents", "externalScrollbar", "onLinkClick"]);
    return (React.createElement(Flex, Object.assign({}, boxProps, { flexDirection: "col", maxH: "full" }),
        React.createElement(Flex, { flexGrow: true, flexShrink: true, overflowY: "auto" },
            React.createElement(TableOfContents$1, { tree: tableOfContents.items, activeId: activeId, Link: Link, maxDepthOpenByDefault: collapseTableOfContents ? 0 : 1, externalScrollbar: externalScrollbar, onLinkClick: onLinkClick })),
        tableOfContents.hide_powered_by ? null : (React.createElement(PoweredByLink, { source: activeId, pathname: typeof window !== 'undefined' ? window.location.pathname : '', packageType: "elements-dev-portal" }))));
};

const Forbidden = () => (React__default.createElement(Flex, { align: "center", justify: "center", flexGrow: true },
    React__default.createElement(VStack, { spacing: 4, align: "center" },
        React__default.createElement(Heading, { size: 1 }, "Forbidden"),
        React__default.createElement(Box, { as: "p" }, "You don't have permission to access this resource"))));

const Loading = () => (React__default.createElement(Flex, { justify: "center", alignItems: "center", w: "full", minH: "screen", color: "muted" },
    React__default.createElement(Icon, { icon: faCircleNotch, size: "3x", spin: true })));

const NotFound = () => (React__default.createElement(Flex, { align: "center", justify: "center", flexGrow: true },
    React__default.createElement(VStack, { spacing: 4, align: "center" },
        React__default.createElement(Heading, { size: 1 }, "Not Found"),
        React__default.createElement(Box, { as: "p" }, "Could not find what you are looking for"))));

const UpgradeToStarter = () => (React__default.createElement(Flex, { as: "a", href: "https://stoplight.io/pricing/", target: "_blank", rel: "noreferrer noopener", justify: "center", alignItems: "center", w: "full", minH: "screen", color: "muted", flexDirection: "col" },
    React__default.createElement(Icon, { icon: faExclamationTriangle, size: "4x" }),
    React__default.createElement(Box, { pt: 3 }, "Please upgrade your Stoplight Workspace to the Starter Plan to use Elements Dev Portal in production.")));

const appVersion = '1.6.8';

class ResponseError extends Error {
    constructor(message, responseCode) {
        super(message);
        this.name = 'ResponseError';
        this.code = responseCode;
    }
}
const getNodeContent = ({ nodeSlug, projectId, branchSlug, platformUrl = 'https://stoplight.io', platformAuthToken, }) => __awaiter(void 0, void 0, void 0, function* () {
    const nodeId = getNodeIdFromSlug(nodeSlug);
    const encodedNodeId = encodeURIComponent(nodeId);
    const encodedProjectId = encodeURIComponent(projectId);
    const encodedBranchSlug = branchSlug ? encodeURIComponent(branchSlug) : '';
    const branchQuery = encodedBranchSlug ? `?branch=${encodedBranchSlug}` : '';
    const response = yield fetch(`${platformUrl}/api/v1/projects/${encodedProjectId}/nodes/${encodedNodeId}${branchQuery}`, {
        headers: Object.assign({ 'Stoplight-Elements-Version': appVersion }, (platformAuthToken && { Authorization: `Bearer ${platformAuthToken}` })),
    });
    const data = yield response.json();
    if (!response.ok) {
        if (response.status === 402) {
            throw new ResponseError('Payment Required', response.status);
        }
        else if (response.status === 403) {
            throw new ResponseError('Forbidden', response.status);
        }
        else {
            throw new ResponseError('Something went wrong', response.status);
        }
    }
    return data;
});
function getNodeIdFromSlug(nodeSlug) {
    return nodeSlug.split('-')[0];
}

const getBranches = ({ projectId, platformUrl = 'https://stoplight.io', platformAuthToken, }) => __awaiter(void 0, void 0, void 0, function* () {
    const encodedProjectId = encodeURIComponent(projectId);
    const response = yield fetch(`${platformUrl}/api/v1/projects/${encodedProjectId}/branches`, {
        headers: Object.assign({ 'Stoplight-Elements-Version': appVersion }, (platformAuthToken && { Authorization: `Bearer ${platformAuthToken}` })),
    });
    const data = yield response.json();
    if (!response.ok) {
        throw new Error(data);
    }
    return data;
});

function useGetBranches({ projectId }) {
    const { platformUrl, platformAuthToken } = React.useContext(PlatformContext);
    return useQuery(['branches', projectId, platformUrl, platformAuthToken], () => getBranches({ projectId, platformUrl, platformAuthToken }), {
        enabled: projectId ? true : false,
    });
}

function useGetNodeContent({ nodeSlug, projectId, branchSlug, }) {
    const { platformUrl, platformAuthToken } = React.useContext(PlatformContext);
    return useQuery(['useNodeContent', nodeSlug, projectId, branchSlug, platformUrl, platformAuthToken], () => getNodeContent({ nodeSlug, projectId, branchSlug, platformUrl, platformAuthToken }), { enabled: nodeSlug && projectId ? true : false });
}

const getTableOfContents = ({ projectId, branchSlug, platformUrl = 'https://stoplight.io', platformAuthToken, }) => __awaiter(void 0, void 0, void 0, function* () {
    const encodedProjectId = encodeURIComponent(projectId);
    const encodedBranchSlug = branchSlug ? encodeURIComponent(branchSlug) : '';
    const branchQuery = encodedBranchSlug ? `?branch=${encodedBranchSlug}` : '';
    const response = yield fetch(`${platformUrl}/api/v1/projects/${encodedProjectId}/table-of-contents${branchQuery}`, {
        headers: Object.assign({ 'Stoplight-Elements-Version': appVersion }, (platformAuthToken && { Authorization: `Bearer ${platformAuthToken}` })),
    });
    const data = yield response.json();
    if (!response.ok) {
        throw new Error(data);
    }
    return data;
});

function useGetTableOfContents({ projectId, branchSlug }) {
    const { platformUrl, platformAuthToken } = React.useContext(PlatformContext);
    return useQuery(['tableOfContents', projectId, branchSlug, platformUrl, platformAuthToken], () => getTableOfContents({ projectId, branchSlug, platformUrl, platformAuthToken }), { enabled: projectId ? true : false });
}

const StoplightProjectImpl = ({ projectId, hideTryIt, hideMocking, hideExport, collapseTableOfContents = false, tryItCredentialsPolicy, tryItCorsProxy, }) => {
    const { branchSlug = '', nodeSlug = '' } = useParams();
    const history = useHistory();
    const { data: tableOfContents, isFetched: isTocFetched } = useGetTableOfContents({ projectId, branchSlug });
    const { data: branches } = useGetBranches({ projectId });
    const { data: node, isLoading: isLoadingNode, isError, error: nodeError, } = useGetNodeContent({
        nodeSlug,
        projectId,
        branchSlug,
    });
    const container = React.useRef(null);
    if (!nodeSlug && isTocFetched && (tableOfContents === null || tableOfContents === void 0 ? void 0 : tableOfContents.items)) {
        const firstNode = findFirstNode(tableOfContents.items);
        if (firstNode) {
            return React.createElement(Redirect, { to: branchSlug ? `/branches/${branchSlug}/${firstNode.slug}` : `/${firstNode.slug}` });
        }
    }
    let elem;
    if (isLoadingNode || !isTocFetched) {
        elem = React.createElement(Loading, null);
    }
    else if (isError) {
        if (nodeError instanceof ResponseError) {
            if (nodeError.code === 402) {
                elem = React.createElement(UpgradeToStarter, null);
            }
            else if (nodeError.code === 403) {
                elem = React.createElement(Forbidden, null);
            }
            else {
                elem = React.createElement(NotFound, null);
            }
        }
        else {
            elem = React.createElement(NotFound, null);
        }
    }
    else if (!node) {
        elem = React.createElement(NotFound, null);
    }
    else {
        elem = (React.createElement(NodeContent, { node: node, Link: ReactRouterMarkdownLink, hideTryIt: hideTryIt, hideMocking: hideMocking, hideExport: hideExport, tryItCredentialsPolicy: tryItCredentialsPolicy, tryItCorsProxy: tryItCorsProxy }));
    }
    const handleTocClick = () => {
        if (container.current) {
            container.current.scrollIntoView();
        }
    };
    return (React.createElement(SidebarLayout, { ref: container, sidebar: React.createElement(React.Fragment, null,
            branches && branches.length > 1 ? (React.createElement(BranchSelector, { branchSlug: branchSlug, branches: branches, onChange: branch => history.push(branch.is_default ? `/${nodeSlug}` : `/branches/${branch.slug}/${nodeSlug}`) })) : null,
            tableOfContents ? (React.createElement(TableOfContents, { activeId: (node === null || node === void 0 ? void 0 : node.id) || (nodeSlug === null || nodeSlug === void 0 ? void 0 : nodeSlug.split('-')[0]) || '', tableOfContents: tableOfContents, Link: Link, collapseTableOfContents: collapseTableOfContents, onLinkClick: handleTocClick })) : null) }, elem));
};
const StoplightProjectRouter = (_a) => {
    var { platformUrl, basePath = '/', staticRouterPath = '', router = 'history' } = _a, props = __rest(_a, ["platformUrl", "basePath", "staticRouterPath", "router"]);
    const { Router, routerProps } = useRouter(router, basePath, staticRouterPath);
    return (React.createElement(DevPortalProvider, { platformUrl: platformUrl },
        React.createElement(Router, Object.assign({}, routerProps, { key: basePath }),
            React.createElement(Route, { path: "/branches/:branchSlug/:nodeSlug", exact: true },
                React.createElement(StoplightProjectImpl, Object.assign({}, props))),
            React.createElement(Route, { path: "/:nodeSlug", exact: true },
                React.createElement(StoplightProjectImpl, Object.assign({}, props))),
            React.createElement(Route, { path: "/", exact: true },
                React.createElement(StoplightProjectImpl, Object.assign({}, props))))));
};
const StoplightProject = withStyles(StoplightProjectRouter);

const getNodes = ({ workspaceId, branchSlug, projectIds, search, platformUrl = 'https://stoplight.io', platformAuthToken, }) => __awaiter(void 0, void 0, void 0, function* () {
    const queryParams = [];
    let fetchedWorkspaceId = workspaceId || '';
    if (!workspaceId && (projectIds === null || projectIds === void 0 ? void 0 : projectIds.length)) {
        const encodedProjectId = encodeURIComponent(projectIds[0]);
        const response = yield fetch(`${platformUrl}/api/v1/projects/${encodedProjectId}`, {
            headers: Object.assign({ 'Stoplight-Elements-Version': appVersion }, (platformAuthToken && { Authorization: `Bearer ${platformAuthToken}` })),
        });
        const data = yield response.json();
        fetchedWorkspaceId = data.workspace.id;
    }
    if (projectIds && projectIds.length) {
        queryParams.push(...projectIds.map((projectId, index) => {
            const encodedProjectId = encodeURIComponent(projectId);
            return `project_ids[${index}]=${encodedProjectId}`;
        }));
    }
    if (search) {
        const encodedSearch = encodeURIComponent(search);
        queryParams.push(`search=${encodedSearch}`);
    }
    if (branchSlug) {
        const encodedBranchSlug = encodeURIComponent(branchSlug);
        queryParams.push(`branchSlug=${encodedBranchSlug}`);
    }
    const query = queryParams.length ? `?${queryParams.join('&')}` : '';
    const encodedWorkspaceId = encodeURIComponent(fetchedWorkspaceId);
    const response = yield fetch(`${platformUrl}/api/v1/workspaces/${encodedWorkspaceId}/nodes${query}`, {
        headers: Object.assign({ 'Stoplight-Elements-Version': appVersion }, (platformAuthToken && { Authorization: `Bearer ${platformAuthToken}` })),
    });
    const data = yield response.json();
    if (!response.ok) {
        throw new Error(data);
    }
    return data;
});

const getWorkspace = ({ projectIds, platformUrl = 'https://stoplight.io', platformAuthToken, }) => __awaiter(void 0, void 0, void 0, function* () {
    const encodedProjectId = encodeURIComponent(projectIds[0]);
    const response = yield fetch(`${platformUrl}/api/v1/projects/${encodedProjectId}`, {
        headers: Object.assign({ 'Stoplight-Elements-Version': appVersion }, (platformAuthToken && { Authorization: `Bearer ${platformAuthToken}` })),
    });
    const data = yield response.json();
    if (!response.ok) {
        throw new Error(data);
    }
    return data;
});

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked, or until the next browser frame is drawn. The debounced function
 * comes with a `cancel` method to cancel delayed `func` invocations and a
 * `flush` method to immediately invoke them. Provide `options` to indicate
 * whether `func` should be invoked on the leading and/or trailing edge of the
 * `wait` timeout. The `func` is invoked with the last arguments provided to the
 * debounced function. Subsequent calls to the debounced function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * If `wait` is omitted in an environment with `requestAnimationFrame`, `func`
 * invocation will be deferred until the next frame is drawn (typically about
 * 16ms).
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `debounce` and `throttle`.
 *
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0]
 *  The number of milliseconds to delay; if omitted, `requestAnimationFrame` is
 *  used (if available, otherwise it will be setTimeout(...,0)).
 * @param {Object} [options={}] The options object.
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.leading=false]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {number} [options.maxWait]
 *  Specify invoking on the trailing edge of the timeout.
 * @param {boolean} [options.trailing=true]
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * const resizeHandler = useDebouncedCallback(calculateLayout, 150);
 * window.addEventListener('resize', resizeHandler)
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * const clickHandler = useDebouncedCallback(sendMail, 300, {
 *   leading: true,
 *   trailing: false,
 * })
 * <button onClick={clickHandler}>click me</button>
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * const debounced = useDebouncedCallback(batchLog, 250, { 'maxWait': 1000 })
 * const source = new EventSource('/stream')
 * source.addEventListener('message', debounced)
 *
 * // Cancel the trailing debounced invocation.
 * window.addEventListener('popstate', debounced.cancel)
 *
 * // Check for pending invocations.
 * const status = debounced.pending() ? "Pending..." : "Ready"
 */
function useDebouncedCallback(func, wait, options) {
    var _this = this;
    var lastCallTime = useRef(null);
    var lastInvokeTime = useRef(0);
    var timerId = useRef(null);
    var lastArgs = useRef([]);
    var lastThis = useRef();
    var result = useRef();
    var funcRef = useRef(func);
    var mounted = useRef(true);
    funcRef.current = func;
    // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.
    var useRAF = !wait && wait !== 0 && typeof window !== 'undefined';
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }
    wait = +wait || 0;
    options = options || {};
    var leading = !!options.leading;
    var trailing = 'trailing' in options ? !!options.trailing : true; // `true` by default
    var maxing = 'maxWait' in options;
    var maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : null;
    useEffect(function () {
        mounted.current = true;
        return function () {
            mounted.current = false;
        };
    }, []);
    // You may have a question, why we have so many code under the useMemo definition.
    //
    // This was made as we want to escape from useCallback hell and
    // not to initialize a number of functions each time useDebouncedCallback is called.
    //
    // It means that we have less garbage for our GC calls which improves performance.
    // Also, it makes this library smaller.
    //
    // And the last reason, that the code without lots of useCallback with deps is easier to read.
    // You have only one place for that.
    var debounced = useMemo(function () {
        var invokeFunc = function (time) {
            var args = lastArgs.current;
            var thisArg = lastThis.current;
            lastArgs.current = lastThis.current = null;
            lastInvokeTime.current = time;
            return (result.current = funcRef.current.apply(thisArg, args));
        };
        var startTimer = function (pendingFunc, wait) {
            if (useRAF)
                cancelAnimationFrame(timerId.current);
            timerId.current = useRAF ? requestAnimationFrame(pendingFunc) : setTimeout(pendingFunc, wait);
        };
        var shouldInvoke = function (time) {
            if (!mounted.current)
                return false;
            var timeSinceLastCall = time - lastCallTime.current;
            var timeSinceLastInvoke = time - lastInvokeTime.current;
            // Either this is the first call, activity has stopped and we're at the
            // trailing edge, the system time has gone backwards and we're treating
            // it as the trailing edge, or we've hit the `maxWait` limit.
            return (!lastCallTime.current ||
                timeSinceLastCall >= wait ||
                timeSinceLastCall < 0 ||
                (maxing && timeSinceLastInvoke >= maxWait));
        };
        var trailingEdge = function (time) {
            timerId.current = null;
            // Only invoke if we have `lastArgs` which means `func` has been
            // debounced at least once.
            if (trailing && lastArgs.current) {
                return invokeFunc(time);
            }
            lastArgs.current = lastThis.current = null;
            return result.current;
        };
        var timerExpired = function () {
            var time = Date.now();
            if (shouldInvoke(time)) {
                return trailingEdge(time);
            }
            // https://github.com/xnimorz/use-debounce/issues/97
            if (!mounted.current) {
                return;
            }
            // Remaining wait calculation
            var timeSinceLastCall = time - lastCallTime.current;
            var timeSinceLastInvoke = time - lastInvokeTime.current;
            var timeWaiting = wait - timeSinceLastCall;
            var remainingWait = maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
            // Restart the timer
            startTimer(timerExpired, remainingWait);
        };
        var func = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var time = Date.now();
            var isInvoking = shouldInvoke(time);
            lastArgs.current = args;
            lastThis.current = _this;
            lastCallTime.current = time;
            if (isInvoking) {
                if (!timerId.current && mounted.current) {
                    // Reset any `maxWait` timer.
                    lastInvokeTime.current = lastCallTime.current;
                    // Start the timer for the trailing edge.
                    startTimer(timerExpired, wait);
                    // Invoke the leading edge.
                    return leading ? invokeFunc(lastCallTime.current) : result.current;
                }
                if (maxing) {
                    // Handle invocations in a tight loop.
                    startTimer(timerExpired, wait);
                    return invokeFunc(lastCallTime.current);
                }
            }
            if (!timerId.current) {
                startTimer(timerExpired, wait);
            }
            return result.current;
        };
        func.cancel = function () {
            if (timerId.current) {
                useRAF ? cancelAnimationFrame(timerId.current) : clearTimeout(timerId.current);
            }
            lastInvokeTime.current = 0;
            lastArgs.current = lastCallTime.current = lastThis.current = timerId.current = null;
        };
        func.isPending = function () {
            return !!timerId.current;
        };
        func.flush = function () {
            return !timerId.current ? result.current : trailingEdge(Date.now());
        };
        return func;
    }, [leading, maxing, wait, maxWait, trailing, useRAF]);
    return debounced;
}

function valueEquality(left, right) {
    return left === right;
}
function adjustFunctionValueOfSetState(value) {
    return typeof value === 'function' ? function () { return value; } : value;
}
function useStateIgnoreCallback(initialState) {
    var _a = useState(adjustFunctionValueOfSetState(initialState)), state = _a[0], setState = _a[1];
    var setStateIgnoreCallback = useCallback(function (value) { return setState(adjustFunctionValueOfSetState(value)); }, []);
    return [state, setStateIgnoreCallback];
}
function useDebounce(value, delay, options) {
    var eq = (options && options.equalityFn) || valueEquality;
    var _a = useStateIgnoreCallback(value), state = _a[0], dispatch = _a[1];
    var debounced = useDebouncedCallback(useCallback(function (value) { return dispatch(value); }, [dispatch]), delay, options);
    var previousValue = useRef(value);
    useEffect(function () {
        // We need to use this condition otherwise we will run debounce timer for the first render (including maxWait option)
        if (!eq(previousValue.current, value)) {
            debounced(value);
            previousValue.current = value;
        }
    }, [value, debounced, eq]);
    return [state, { cancel: debounced.cancel, isPending: debounced.isPending, flush: debounced.flush }];
}

function useGetNodes({ search, workspaceId, branchSlug, projectIds, pause, }) {
    const { platformUrl, platformAuthToken } = React.useContext(PlatformContext);
    const [debounceSearch] = useDebounce(search, 500);
    return useQuery(['workspaceNodes', platformUrl, platformAuthToken, workspaceId, branchSlug, projectIds, debounceSearch], () => getNodes({ workspaceId, branchSlug, projectIds, search: debounceSearch, platformUrl, platformAuthToken }), { enabled: !pause, keepPreviousData: true });
}

function useGetWorkspace({ projectIds }) {
    const { platformUrl, platformAuthToken } = React.useContext(PlatformContext);
    return useQuery(['useWorkspace', projectIds, platformUrl, platformAuthToken], () => getWorkspace({ projectIds, platformUrl, platformAuthToken }));
}

export { BranchSelector, DevPortalProvider, NodeContent, ResponseError, Search, StoplightProject, TableOfContents, getBranches, getNodeContent, getNodes, getTableOfContents, getWorkspace, useGetBranches, useGetNodeContent, useGetNodes, useGetTableOfContents, useGetWorkspace };
