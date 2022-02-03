'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var React = require('react');
var json = require('@stoplight/json');
var isArray = require('lodash/isArray.js');
var isObject = require('lodash/isObject.js');
var isPlainObject = require('lodash/isPlainObject.js');
var markdown = require('@stoplight/markdown');
var types = require('@stoplight/types');
var yaml = require('@stoplight/yaml');
var mosaic = require('@stoplight/mosaic');
var reactErrorBoundary = require('@stoplight/react-error-boundary');
var markdownViewer = require('@stoplight/markdown-viewer');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var throttle = require('lodash/throttle.js');
var unistUtilSelect = require('unist-util-select');
var cn = require('classnames');
var utils = require('jotai/utils');
var jotai = require('jotai');
var URI = require('urijs');
var mosaicCodeViewer = require('@stoplight/mosaic-code-viewer');
var HTTPSnippet = require('httpsnippet');
var flatten = require('lodash/flatten.js');
var capitalize = require('lodash/capitalize.js');
var filter = require('lodash/filter.js');
var nanoid = require('nanoid');
var curry = require('lodash/curry.js');
var omit = require('lodash/omit.js');
var keyBy = require('lodash/keyBy.js');
var map = require('lodash/map.js');
var mapValues = require('lodash/mapValues.js');
var isString = require('lodash/isString.js');
var pickBy = require('lodash/pickBy.js');
var mosaicCodeEditor = require('@stoplight/mosaic-code-editor');
var Sampler = require('@stoplight/json-schema-sampler');
var compact = require('lodash/compact.js');
var uniq = require('lodash/uniq.js');
var orderBy = require('lodash/orderBy.js');
var uniqBy = require('lodash/uniqBy.js');
var formatXml = require('xml-formatter');
var entries = require('lodash/entries.js');
var keys = require('lodash/keys.js');
var jsonSchemaViewer = require('@stoplight/json-schema-viewer');
var sortBy = require('lodash/sortBy.js');
var reactRouterDom = require('react-router-dom');
var reactRouterHashLink = require('react-router-hash-link');
var reactQuery = require('react-query');
var $RefParser = require('@stoplight/json-schema-ref-parser');
var PropTypes = require('prop-types');
var isEqual = require('lodash/isEqual.js');
var ReactDOM = require('react-dom');

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

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var isArray__default = /*#__PURE__*/_interopDefaultLegacy(isArray);
var isObject__default = /*#__PURE__*/_interopDefaultLegacy(isObject);
var isPlainObject__default = /*#__PURE__*/_interopDefaultLegacy(isPlainObject);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);
var cn__default = /*#__PURE__*/_interopDefaultLegacy(cn);
var URI__default = /*#__PURE__*/_interopDefaultLegacy(URI);
var HTTPSnippet__default = /*#__PURE__*/_interopDefaultLegacy(HTTPSnippet);
var flatten__default = /*#__PURE__*/_interopDefaultLegacy(flatten);
var capitalize__default = /*#__PURE__*/_interopDefaultLegacy(capitalize);
var filter__default = /*#__PURE__*/_interopDefaultLegacy(filter);
var curry__default = /*#__PURE__*/_interopDefaultLegacy(curry);
var omit__default = /*#__PURE__*/_interopDefaultLegacy(omit);
var keyBy__default = /*#__PURE__*/_interopDefaultLegacy(keyBy);
var map__default = /*#__PURE__*/_interopDefaultLegacy(map);
var mapValues__default = /*#__PURE__*/_interopDefaultLegacy(mapValues);
var isString__default = /*#__PURE__*/_interopDefaultLegacy(isString);
var pickBy__default = /*#__PURE__*/_interopDefaultLegacy(pickBy);
var Sampler__namespace = /*#__PURE__*/_interopNamespace(Sampler);
var compact__default = /*#__PURE__*/_interopDefaultLegacy(compact);
var uniq__default = /*#__PURE__*/_interopDefaultLegacy(uniq);
var orderBy__default = /*#__PURE__*/_interopDefaultLegacy(orderBy);
var uniqBy__default = /*#__PURE__*/_interopDefaultLegacy(uniqBy);
var formatXml__default = /*#__PURE__*/_interopDefaultLegacy(formatXml);
var entries__default = /*#__PURE__*/_interopDefaultLegacy(entries);
var keys__default = /*#__PURE__*/_interopDefaultLegacy(keys);
var sortBy__default = /*#__PURE__*/_interopDefaultLegacy(sortBy);
var $RefParser__default = /*#__PURE__*/_interopDefaultLegacy($RefParser);
var PropTypes__namespace = /*#__PURE__*/_interopNamespace(PropTypes);
var isEqual__default = /*#__PURE__*/_interopDefaultLegacy(isEqual);
var ReactDOM__namespace = /*#__PURE__*/_interopNamespace(ReactDOM);

const defaultResolver = (contextObject) => ({ pointer }, _, currentObject) => {
    const activeObject = contextObject !== null && contextObject !== void 0 ? contextObject : currentObject;
    if (pointer === null) {
        return null;
    }
    if (pointer === '#') {
        return activeObject;
    }
    const resolved = json.resolveInlineRef(activeObject, pointer);
    if (resolved)
        return resolved;
    throw new ReferenceError(`Could not resolve '${pointer}`);
};

const originalObjectSymbol = Symbol('OriginalObject');
const createResolvedObject = (currentObject, options = {}) => recursivelyCreateResolvedObject(currentObject, currentObject, [], new Map(), options);
const recursivelyCreateResolvedObject = (currentObject, rootCurrentObject, propertyPath, objectToProxiedObjectCache, options = {}) => {
    if (isResolvedObjectProxy(currentObject))
        return currentObject;
    if (objectToProxiedObjectCache.has(currentObject))
        return objectToProxiedObjectCache.get(currentObject);
    const mergedOptions = {
        contextObject: options.contextObject || currentObject,
        resolver: options.resolver || defaultResolver(options.contextObject || currentObject),
    };
    const resolvedObjectProxy = new Proxy(currentObject, {
        get(target, name) {
            if (name === originalObjectSymbol)
                return currentObject;
            const value = target[name];
            const newPropertyPath = [...propertyPath, name.toString()];
            let resolvedValue;
            if (isReference(value)) {
                try {
                    resolvedValue = mergedOptions.resolver({ pointer: value.$ref, source: null }, newPropertyPath, rootCurrentObject);
                }
                catch (e) {
                    resolvedValue = Object.assign(Object.assign({}, value), { $error: e.message });
                }
            }
            else {
                resolvedValue = value;
            }
            if (isPlainObject__default["default"](resolvedValue) || isArray__default["default"](resolvedValue)) {
                return recursivelyCreateResolvedObject(resolvedValue, rootCurrentObject, newPropertyPath, objectToProxiedObjectCache, mergedOptions);
            }
            return resolvedValue;
        },
    });
    objectToProxiedObjectCache.set(currentObject, resolvedObjectProxy);
    return resolvedObjectProxy;
};
const isResolvedObjectProxy = (someObject) => {
    return !!someObject[originalObjectSymbol];
};
const getOriginalObject = (resolvedObject) => {
    return resolvedObject[originalObjectSymbol] || resolvedObject;
};
const isReference = (value) => isObject__default["default"](value) && typeof value['$ref'] === 'string';

const InlineRefResolverContext = React__namespace.createContext(undefined);
InlineRefResolverContext.displayName = 'InlineRefResolverContext';
const DocumentContext = React__namespace.createContext(undefined);
DocumentContext.displayName = 'DocumentContext';
const InlineRefResolverProvider = ({ children, document: maybeDocument, resolver, }) => {
    const document = json.isPlainObject(maybeDocument) ? maybeDocument : undefined;
    const computedResolver = React__namespace.useMemo(() => resolver || (document !== undefined ? defaultResolver(document) : undefined), [document, resolver]);
    return (React__namespace.createElement(InlineRefResolverContext.Provider, { value: computedResolver },
        React__namespace.createElement(DocumentContext.Provider, { value: document }, children)));
};
const useInlineRefResolver = () => React.useContext(InlineRefResolverContext);
const useDocument = () => React.useContext(DocumentContext);
const useResolvedObject = (currentObject) => {
    const document = useDocument();
    const resolver = useInlineRefResolver();
    return React__namespace.useMemo(() => createResolvedObject(currentObject, { contextObject: document, resolver }), [currentObject, document, resolver]);
};

function isSMDASTRoot(maybeAst) {
    return isObject__default["default"](maybeAst) && maybeAst['type'] === 'root' && mosaic.isArray(maybeAst['children']);
}
function isJSONSchema(maybeSchema) {
    return isPlainObject__default["default"](maybeSchema);
}
function isStoplightNode(maybeNode) {
    return isObject__default["default"](maybeNode) && 'id' in maybeNode;
}
function isHttpService(maybeHttpService) {
    return isStoplightNode(maybeHttpService) && 'name' in maybeHttpService && 'version' in maybeHttpService;
}
function isHttpOperation(maybeHttpOperation) {
    return isStoplightNode(maybeHttpOperation) && 'method' in maybeHttpOperation && 'path' in maybeHttpOperation;
}
function isProperUrl(url) {
    const properUrl = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/);
    return url.match(properUrl);
}

function useParsedData(nodeType, data) {
    return React__namespace.useMemo(() => { var _a; return (_a = parserMap[nodeType]) === null || _a === void 0 ? void 0 : _a.call(parserMap, data); }, [nodeType, data]);
}
const parserMap = {
    [types.NodeType.Article]: parseArticleData,
    [types.NodeType.HttpOperation]: parseHttpOperation,
    [types.NodeType.HttpService]: parseHttpService,
    [types.NodeType.Model]: parseModel,
    [types.NodeType.HttpServer]: parseUnknown,
    [types.NodeType.Generic]: parseUnknown,
    [types.NodeType.TableOfContents]: parseUnknown,
    [types.NodeType.SpectralRuleset]: parseUnknown,
    [types.NodeType.Unknown]: parseUnknown,
};
function parseArticleData(rawData) {
    if (typeof rawData === 'string') {
        return {
            type: types.NodeType.Article,
            data: markdown.parse(rawData),
        };
    }
    if (isSMDASTRoot(rawData)) {
        return {
            type: types.NodeType.Article,
            data: rawData,
        };
    }
    return undefined;
}
function parseHttpOperation(rawData) {
    const data = tryParseYamlOrObject(rawData);
    if (isHttpOperation(data)) {
        return {
            type: types.NodeType.HttpOperation,
            data: data,
        };
    }
    return undefined;
}
function parseHttpService(rawData) {
    const data = tryParseYamlOrObject(rawData);
    if (isHttpService(data)) {
        return {
            type: types.NodeType.HttpService,
            data: data,
        };
    }
    return undefined;
}
function parseModel(rawData) {
    const data = tryParseYamlOrObject(rawData);
    if (isJSONSchema(data)) {
        return {
            type: types.NodeType.Model,
            data: data,
        };
    }
    return undefined;
}
function tryParseYamlOrObject(yamlOrObject) {
    if (typeof yamlOrObject === 'object' && yamlOrObject !== null)
        return yamlOrObject;
    if (typeof yamlOrObject === 'string') {
        try {
            return yaml.parse(yamlOrObject);
        }
        catch (e) { }
    }
    return undefined;
}
function parseUnknown() {
    return undefined;
}

const MarkdownViewer = (props) => {
    return React__namespace.createElement(markdownViewer.MarkdownViewer, Object.assign({}, props));
};
MarkdownViewer.displayName = 'MarkdownViewer';

function useComponentSize(container) {
    const [componentSize, setComponentSize] = React__namespace.useState({ width: 0, height: 0 });
    React__namespace.useEffect(() => {
        if (!container) {
            return;
        }
        const updateComponentSize = throttle__default["default"](() => (container ? setComponentSize(container.getBoundingClientRect()) : { width: 0, height: 0 }), 1000, {
            trailing: true,
        });
        updateComponentSize();
        window.addEventListener('resize', updateComponentSize);
        return () => {
            updateComponentSize.cancel();
            window.removeEventListener('resize', updateComponentSize);
        };
    }, [container]);
    return componentSize;
}

function useComputeMarkdownHeadings(tree) {
    return React__namespace.useMemo(() => computeMarkdownHeadings(tree), [tree]);
}
function computeMarkdownHeadings(tree) {
    return unistUtilSelect.selectAll(':root > [type=heading]', tree)
        .map((heading) => {
        var _a;
        return ({
            title: findTitle(heading),
            id: ((_a = heading.data) === null || _a === void 0 ? void 0 : _a.id) || '',
            depth: heading.depth - 1,
        });
    })
        .filter((item) => item.depth >= 1 && item.depth <= 2);
}
const findTitle = (parent) => {
    return unistUtilSelect.selectAll('[type=text]', parent).map(textNode => String(textNode.value)).join(' ');
};

function useLocationHash() {
    const isBrowser = typeof window !== 'undefined';
    const [locationHash, setLocationHash] = React__namespace.useState(isBrowser && window.location.hash);
    React__namespace.useEffect(() => {
        if (!isBrowser)
            return;
        const hashChange = () => setLocationHash(window.location.hash);
        window.addEventListener('hashchange', hashChange, false);
        return () => window.removeEventListener('hashchange', hashChange);
    }, [isBrowser]);
    return locationHash;
}

const ArticleHeadings = ({ tree, container }) => {
    const { width } = useComponentSize(container);
    const showHeadings = width >= 768;
    const headings = useComputeMarkdownHeadings(tree);
    return React__namespace.createElement(Headings, { className: "ArticleHeadings", headings: headings, minimal: !showHeadings, maxWidth: 300 });
};
const Headings = ({ headings, className, title = 'On This Page', minimal, maxWidth }) => {
    const locationHash = useLocationHash();
    if (!headings || !headings.length)
        return null;
    const component = (React__namespace.createElement(mosaic.Box, { overflowY: "auto", style: { maxHeight: '85vh', maxWidth } },
        title && (React__namespace.createElement(mosaic.Flex, { py: 2, alignItems: "center", fontSize: "sm", fontWeight: "medium", color: "muted", style: { paddingLeft: 18 } },
            React__namespace.createElement(mosaic.Box, { as: mosaic.Icon, icon: freeSolidSvgIcons.faStream, mr: 2 }),
            title)),
        headings.map((heading, i) => (React__namespace.createElement(Heading, { key: i, item: heading, isSelected: locationHash === `#${heading.id}` })))));
    const button = React__namespace.createElement(mosaic.Button, { pos: "sticky", size: "sm", borderColor: "light", icon: freeSolidSvgIcons.faStream, style: { top: 10 } });
    if (minimal) {
        return (React__namespace.createElement(mosaic.Box, { pos: "sticky", top: 0, right: 0, style: { top: 10 } },
            React__namespace.createElement(mosaic.Popover, { renderTrigger: button, placement: "bottom" },
                React__namespace.createElement(mosaic.Box, { className: className }, component))));
    }
    return (React__namespace.createElement(mosaic.Box, { pos: "sticky", pr: 4, pl: 16, h: "full", overflowX: "auto", overflowY: "auto", className: className, style: { top: 30 } },
        React__namespace.createElement(mosaic.Box, { borderL: true, borderColor: "light" }, component)));
};
const Heading = ({ item, isSelected }) => {
    return (React__namespace.createElement(mosaic.Box, { as: "a", href: `#${item.id}`, textOverflow: "truncate", display: "block", py: 2, pr: 8, fontWeight: "medium", fontSize: "sm", color: isSelected ? 'primary' : 'muted', style: { paddingLeft: `${3 + item.depth * 15}px` } }, item.title));
};

const ArticleComponent = React__namespace.memo(({ data }) => {
    const [container, setContainer] = React__namespace.useState(null);
    const tree = React__namespace.useMemo(() => (typeof data === 'object' ? data : markdown.parse(data)), [data]);
    if (tree === null)
        return null;
    return (React__namespace.createElement(mosaic.Flex, { className: "sl-elements-article", justifyContent: "evenly", w: "full", pos: "relative", ref: setContainer },
        React__namespace.createElement(mosaic.Box, { className: "sl-elements-article-content", style: { width: 0 }, flex: 1 },
            React__namespace.createElement(MarkdownViewer, { markdown: tree })),
        React__namespace.createElement(ArticleHeadings, { tree: tree, container: container })));
});
const Article = reactErrorBoundary.withErrorBoundary(ArticleComponent, { recoverableProps: ['data'] });

const NodeTypeColors = {
    http_operation: '#6a6acb',
    http_service: '#e056fd',
    article: '#399da6',
    model: '#ef932b',
    http_server: '',
    generic: '',
    unknown: '',
    table_of_contents: '',
    spectral_ruleset: '',
};
const NodeTypePrettyName = {
    http_operation: 'Endpoint',
    http_service: 'API',
    article: 'Article',
    model: 'Model',
    http_server: 'Server',
    generic: '',
    unknown: '',
    table_of_contents: '',
    spectral_ruleset: '',
};
const NodeTypeIconDefs = {
    http_operation: freeSolidSvgIcons.faCrosshairs,
    http_service: freeSolidSvgIcons.faCloud,
    article: freeSolidSvgIcons.faBookOpen,
    model: freeSolidSvgIcons.faCube,
    http_server: freeSolidSvgIcons.faDatabase,
    unknown: freeSolidSvgIcons.faQuestionCircle,
    generic: freeSolidSvgIcons.faQuestionCircle,
    table_of_contents: freeSolidSvgIcons.faQuestionCircle,
    spectral_ruleset: freeSolidSvgIcons.faQuestionCircle,
};
const HttpMethodColors = {
    get: 'success',
    post: 'primary',
    put: 'warning',
    patch: 'warning',
    delete: 'danger',
};
const HttpCodeColor = {
    0: 'red',
    1: 'gray',
    2: 'green',
    3: 'yellow',
    4: 'orange',
    5: 'red',
};
const HttpCodeDescriptions = {
    100: 'Continue',
    101: 'Switching Protocols',
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    422: 'Unprocessable Entity',
    226: 'IM Used',
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    306: '(Unused)',
    307: 'Temporary Redirect',
    308: 'Permanent Redirect (experiemental)',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Request Entity Too Large',
    414: 'Request-URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Requested Range Not Satisfiable',
    417: 'Expectation Failed',
    418: "I'm a teapot (RFC 2324)",
    420: 'Enhance Your Calm (Twitter)',
    426: 'Upgrade Required',
    428: 'Precondition Required',
    429: 'Too Many Requests',
    431: 'Request Header Fields Too Large',
    444: 'No Response (Nginx)',
    449: 'Retry With (Microsoft)',
    450: 'Blocked by Windows Parental Controls (Microsoft)',
    451: 'Unavailable For Legal Reasons',
    499: 'Client Closed Request (Nginx)',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates (Experimental)',
    507: 'Insufficient Storage (WebDAV)',
    508: 'Loop Detected (WebDAV)',
    509: 'Bandwidth Limit Exceeded (Apache)',
    510: 'Not Extended',
    511: 'Network Authentication Required',
    598: 'Network read timeout error',
    599: 'Network connect timeout error',
};

const MockingContext = createNamedContext('MockingContext', { mockUrl: undefined, hideMocking: undefined });
const MockingProvider = ({ mockUrl, hideMocking, children }) => {
    const info = {
        mockUrl,
        hideMocking: hideMocking || !mockUrl,
    };
    return React__namespace.createElement(MockingContext.Provider, { value: info }, children);
};
function createNamedContext(name, defaultValue) {
    const context = React__namespace.createContext(defaultValue);
    context.displayName = name;
    return context;
}

const chosenServerAtom = jotai.atom(undefined);

const getServersToDisplay = (originalServers, mockUrl) => {
    const servers = originalServers
        .map((server, i) => {
        const fallbackDescription = originalServers.length === 1 ? 'Live Server' : `Server ${i + 1}`;
        return Object.assign(Object.assign({}, server), { url: getServerUrlWithDefaultValues(server), description: server.description || fallbackDescription });
    })
        .filter(server => isProperUrl(server.url));
    if (mockUrl) {
        servers.push({
            description: 'Mock Server',
            url: mockUrl,
        });
    }
    return servers;
};
const getServerUrlWithDefaultValues = (server) => {
    var _a;
    let urlString = server.url;
    const variables = Object.entries((_a = server.variables) !== null && _a !== void 0 ? _a : {});
    variables.forEach(([variableName, variableInfo]) => {
        urlString = urlString.replace(`{${variableName}}`, variableInfo.default);
    });
    let url = URI__default["default"](urlString);
    if (url.is('relative') && typeof window !== 'undefined') {
        url = url.absoluteTo(window.location.origin);
    }
    const stringifiedUrl = url.toString();
    return stringifiedUrl.endsWith('/') ? stringifiedUrl.slice(0, -1) : stringifiedUrl;
};

const persistAtom = (key, atomInstance) => {
    if (typeof window === 'undefined' || window.localStorage === undefined) {
        return atomInstance;
    }
    return jotai.atom(get => {
        var _a;
        const localStorageValue = window.localStorage.getItem(key);
        const atomValue = get(atomInstance);
        if (localStorageValue === null)
            return atomValue;
        return (_a = json.safeParse(localStorageValue)) !== null && _a !== void 0 ? _a : atomValue;
    }, (_, set, update) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(update));
        }
        catch (error) {
            console.error(error);
        }
        set(atomInstance, update);
    });
};

const convertRequestToSample = (language, library, request) => {
    try {
        const snippet = new HTTPSnippet__default["default"](request);
        return snippet.convert(language, library) || null;
    }
    catch (err) {
        console.error(err);
        return null;
    }
};

const requestSampleConfigs = {
    Shell: {
        mosaicCodeViewerLanguage: 'bash',
        httpSnippetLanguage: 'shell',
        libraries: {
            cURL: {
                httpSnippetLibrary: 'curl',
            },
            HTTPie: {
                httpSnippetLibrary: 'httpie',
            },
            Wget: {
                httpSnippetLibrary: 'wget',
            },
        },
    },
    JavaScript: {
        mosaicCodeViewerLanguage: 'javascript',
        httpSnippetLanguage: 'javascript',
        libraries: {
            Fetch: {
                httpSnippetLibrary: 'fetch',
            },
            XMLHttpRequest: {
                httpSnippetLibrary: 'xmlhttprequest',
            },
            jQuery: {
                httpSnippetLibrary: 'jquery',
            },
            Axios: {
                httpSnippetLibrary: 'axios',
            },
        },
    },
    Node: {
        mosaicCodeViewerLanguage: 'javascript',
        httpSnippetLanguage: 'node',
        libraries: {
            Native: {
                httpSnippetLibrary: 'native',
            },
            Request: {
                httpSnippetLibrary: 'request',
            },
            Unirest: {
                httpSnippetLibrary: 'unirest',
            },
            Fetch: {
                httpSnippetLibrary: 'fetch',
            },
            Axios: {
                httpSnippetLibrary: 'axios',
            },
        },
    },
    Python: {
        mosaicCodeViewerLanguage: 'python',
        httpSnippetLanguage: 'python',
        libraries: {
            'Python 3': {
                httpSnippetLibrary: 'python3',
            },
            Requests: {
                httpSnippetLibrary: 'requests',
            },
        },
    },
    Go: {
        mosaicCodeViewerLanguage: 'go',
        httpSnippetLanguage: 'go',
    },
    C: {
        mosaicCodeViewerLanguage: 'c',
        httpSnippetLanguage: 'c',
    },
    'Obj-C': {
        mosaicCodeViewerLanguage: 'objectivec',
        httpSnippetLanguage: 'objc',
    },
    OCaml: {
        mosaicCodeViewerLanguage: 'ocaml',
        httpSnippetLanguage: 'ocaml',
    },
    'C#': {
        mosaicCodeViewerLanguage: 'csharp',
        httpSnippetLanguage: 'csharp',
        libraries: {
            HttpClient: {
                httpSnippetLibrary: 'httpclient',
            },
            RestSharp: {
                httpSnippetLibrary: 'restsharp',
            },
        },
    },
    Java: {
        mosaicCodeViewerLanguage: 'java',
        httpSnippetLanguage: 'java',
        libraries: {
            AsyncHttp: {
                httpSnippetLibrary: 'asynchttp',
            },
            NetHttp: {
                httpSnippetLibrary: 'nethttp',
            },
            OkHttp: {
                httpSnippetLibrary: 'okhttp',
            },
            Unirest: {
                httpSnippetLibrary: 'unirest',
            },
        },
    },
    Http: {
        mosaicCodeViewerLanguage: 'http',
        httpSnippetLanguage: 'http',
    },
    Clojure: {
        mosaicCodeViewerLanguage: 'clojure',
        httpSnippetLanguage: 'clojure',
    },
    Kotlin: {
        mosaicCodeViewerLanguage: 'kotlin',
        httpSnippetLanguage: 'kotlin',
    },
    PHP: {
        mosaicCodeViewerLanguage: 'php',
        httpSnippetLanguage: 'php',
        libraries: {
            'pecl/http 1': {
                httpSnippetLibrary: 'http1',
            },
            'pecl/http 2': {
                httpSnippetLibrary: 'http2',
            },
            cURL: {
                httpSnippetLibrary: 'curl',
            },
        },
    },
    Powershell: {
        mosaicCodeViewerLanguage: 'powershell',
        httpSnippetLanguage: 'powershell',
        libraries: {
            WebRequest: {
                httpSnippetLibrary: 'webrequest',
            },
            RestMethod: {
                httpSnippetLibrary: 'restmethod',
            },
        },
    },
    R: {
        mosaicCodeViewerLanguage: 'r',
        httpSnippetLanguage: 'r',
    },
    Ruby: {
        mosaicCodeViewerLanguage: 'ruby',
        httpSnippetLanguage: 'ruby',
    },
    Swift: {
        mosaicCodeViewerLanguage: 'swift',
        httpSnippetLanguage: 'swift',
    },
};
const getConfigFor = (language, library) => {
    var _a;
    const languageConfig = requestSampleConfigs[language];
    const libraryConfig = ((_a = languageConfig.libraries) === null || _a === void 0 ? void 0 : _a[library]) || {};
    return Object.assign(Object.assign({}, languageConfig), libraryConfig);
};

const selectedLanguageAtom = persistAtom('RequestSamples_selectedLanguage', jotai.atom('Shell'));
const selectedLibraryAtom = persistAtom('RequestSamples_selectedLibrary', jotai.atom('cURL'));
const fallbackText = 'Unable to generate code example';
const RequestSamples = React__default["default"].memo(({ request, embeddedInMd = false }) => {
    const [selectedLanguage, setSelectedLanguage] = jotai.useAtom(selectedLanguageAtom);
    const [selectedLibrary, setSelectedLibrary] = jotai.useAtom(selectedLibraryAtom);
    const { httpSnippetLanguage, httpSnippetLibrary, mosaicCodeViewerLanguage } = getConfigFor(selectedLanguage, selectedLibrary);
    const requestSample = convertRequestToSample(httpSnippetLanguage, httpSnippetLibrary, request);
    const menuItems = React.useMemo(() => {
        const items = Object.entries(requestSampleConfigs).map(([language, config]) => {
            const hasLibraries = config.libraries && Object.keys(config.libraries).length > 0;
            return {
                id: language,
                title: language,
                isChecked: selectedLanguage === language,
                onPress: hasLibraries
                    ? undefined
                    : () => {
                        setSelectedLanguage(language);
                        setSelectedLibrary('');
                    },
                children: config.libraries
                    ? Object.keys(config.libraries).map(library => ({
                        id: `${language}-${library}`,
                        title: library,
                        isChecked: selectedLanguage === language && selectedLibrary === library,
                        onPress: () => {
                            setSelectedLanguage(language);
                            setSelectedLibrary(library);
                        },
                    }))
                    : undefined,
            };
        });
        return items;
    }, [selectedLanguage, selectedLibrary, setSelectedLanguage, setSelectedLibrary]);
    return (React__default["default"].createElement(mosaic.Panel, { rounded: embeddedInMd ? undefined : true, isCollapsible: embeddedInMd },
        React__default["default"].createElement(mosaic.Panel.Titlebar, { rightComponent: React__default["default"].createElement(mosaic.CopyButton, { size: "sm", copyValue: requestSample || '' }) },
            React__default["default"].createElement(mosaic.Box, { ml: -2 },
                React__default["default"].createElement(mosaic.Menu, { "aria-label": "Request Sample Language", closeOnPress: true, items: menuItems, renderTrigger: ({ isOpen }) => (React__default["default"].createElement(mosaic.Button, { size: "sm", iconRight: "chevron-down", appearance: "minimal", active: isOpen },
                        "Request Sample: ",
                        selectedLanguage,
                        " ",
                        selectedLibrary ? ` / ${selectedLibrary}` : '')) }))),
        React__default["default"].createElement(mosaic.Panel.Content, { p: 0 },
            React__default["default"].createElement(mosaicCodeViewer.CodeViewer, { "aria-label": requestSample !== null && requestSample !== void 0 ? requestSample : fallbackText, noCopyButton: true, maxHeight: "400px", language: mosaicCodeViewerLanguage, value: requestSample || fallbackText, style: embeddedInMd
                    ? undefined
                    :
                        {
                            '--fs-code': 12,
                        } }))));
});

function getReadableSecurityName(securityScheme, includeKey = false) {
    let name = '';
    switch (securityScheme.type) {
        case 'apiKey':
            name = 'API Key';
            break;
        case 'http':
            name = `${capitalize__default["default"](securityScheme.scheme)} Auth`;
            break;
        case 'oauth2':
            name = 'OAuth 2.0';
            break;
        case 'openIdConnect':
            name = 'OpenID Connect';
            break;
        case 'mutualTLS':
            name = 'Mutual TLS';
            break;
    }
    return includeKey ? `${name} (${securityScheme.key})` : name;
}
const isOAuth2ImplicitFlow = (maybeFlow) => isObject__default["default"](maybeFlow) && 'authorizationUrl' in maybeFlow && !('tokenUrl' in maybeFlow);
const isOauth2AuthorizationCodeFlow = (maybeFlow) => isObject__default["default"](maybeFlow) && 'authorizationUrl' in maybeFlow && 'tokenUrl' in maybeFlow;
const isOauth2ClientCredentialsOrPasswordFlow = (maybeFlow) => isObject__default["default"](maybeFlow) && !('authorizationUrl' in maybeFlow) && 'tokenUrl' in maybeFlow;
function shouldIncludeKey(schemes, type) {
    return filter__default["default"](schemes, { type }).length > 1;
}

const ParameterGridCSS = mosaic.twCss({
    '@apply': mosaic.CX('grid', 'gap-1.5', 'items-center', 'pb-4', 'max-h-40', 'overflow-y-auto'),
    'grid-template-columns': 'fit-content(120px) 20px auto',
});

const useUniqueId = (prefix = 'id_') => React__namespace.useRef(`${prefix}${nanoid.nanoid(8)}`).current;

const AuthTokenInput = ({ type, name, value, onChange }) => {
    const inputId = useUniqueId(`id_auth_${name}_`);
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement("label", { "aria-hidden": "true", htmlFor: inputId }, name),
        React__namespace.createElement(mosaic.Text, { mx: 3 }, ":"),
        React__namespace.createElement(mosaic.Flex, { flex: 1 },
            React__namespace.createElement(mosaic.Input, { id: inputId, "aria-label": name, appearance: "minimal", flex: 1, placeholder: type === 'oauth2' ? 'Bearer 123' : '123', value: value, type: "text", required: true, onChange: e => onChange(e.currentTarget.value) }))));
};

const APIKeyAuth = ({ scheme, onChange, value }) => {
    return (React__namespace.createElement(mosaic.Panel.Content, { className: ParameterGridCSS },
        React__namespace.createElement(AuthTokenInput, { type: "apiKey", name: scheme.name, value: value, onChange: onChange })));
};

const BasicAuth = ({ onChange, value }) => {
    const [username = '', password = ''] = decode(value).split(':');
    const onCredentialsChange = (username, password) => {
        onChange(encode(`${username}:${password}`));
    };
    return (React__namespace.createElement(mosaic.Panel.Content, { className: ParameterGridCSS },
        React__namespace.createElement("div", null, "Username"),
        React__namespace.createElement(mosaic.Text, { mx: 3 }, ":"),
        React__namespace.createElement(mosaic.Flex, { flex: 1 },
            React__namespace.createElement(mosaic.Input, { style: { paddingLeft: 15 }, "aria-label": "Username", appearance: "minimal", flex: 1, placeholder: "username", value: username, type: "text", required: true, onChange: e => onCredentialsChange(e.currentTarget.value, password) })),
        React__namespace.createElement("div", null, "Password"),
        React__namespace.createElement(mosaic.Text, { mx: 3 }, ":"),
        React__namespace.createElement(mosaic.Flex, { flex: 1 },
            React__namespace.createElement(mosaic.Input, { style: { paddingLeft: 15 }, "aria-label": "Password", appearance: "minimal", flex: 1, placeholder: "password", value: password, type: "password", required: true, onChange: e => onCredentialsChange(username, e.currentTarget.value) }))));
};
function encode(value) {
    return btoa(value);
}
function decode(encoded) {
    try {
        return atob(encoded);
    }
    catch (_a) {
        return '';
    }
}

const BearerAuth = ({ value, onChange }) => {
    return (React__namespace.createElement(mosaic.Panel.Content, { className: ParameterGridCSS },
        React__namespace.createElement(AuthTokenInput, { type: "http", name: "Token", value: value, onChange: onChange })));
};

const digestPlaceholder = `Digest username="User Name",
            realm="testrealm@host.com",
            nonce="dcd98b7102dd2f0e8b11d0f600bfb0c093",
            uri="/dir/index.html",
            qop=auth,
            nc=00000001,
            cnonce="0a4f113b",
            response="6629fae49393a05397450978507c4ef1",
            opaque="5ccc069c403ebaf9f0171e9517f40e41"
`;
const DigestAuth = ({ onChange, value }) => {
    return (React__namespace.createElement(mosaic.Panel.Content, { className: ParameterGridCSS },
        React__namespace.createElement("div", null, "Authorization"),
        React__namespace.createElement(mosaic.Text, { mx: 3 }, ":"),
        React__namespace.createElement("textarea", { className: "sl-relative sl-z-10 sl-w-full sl-text-base sl-bg-canvas-100 sl-p-1 sl-pr-2.5 sl-pl-2.5 sl-rounded sl-border-transparent hover:sl-border-input focus:sl-border-primary sl-border", "aria-label": "Authorization", placeholder: digestPlaceholder, value: value, onChange: e => onChange(e.currentTarget.value), rows: 9 })));
};

const OAuth2Auth = ({ value, onChange }) => {
    return (React__namespace.createElement(mosaic.Panel.Content, { className: ParameterGridCSS },
        React__namespace.createElement(AuthTokenInput, { type: "oauth2", name: "Token", value: value, onChange: onChange })));
};

const TryItAuth = ({ operationSecurityScheme: operationAuth, onChange, value }) => {
    var _a;
    const operationSecurityArray = flatten__default["default"](operationAuth);
    const filteredSecurityItems = operationSecurityArray.filter(scheme => securitySchemeKeys.includes(scheme === null || scheme === void 0 ? void 0 : scheme.type));
    const securityScheme = value ? value.scheme : filteredSecurityItems[0];
    const menuName = securityScheme ? getReadableSecurityName(securityScheme) : 'Security Scheme';
    const handleChange = (authValue) => {
        onChange(securityScheme && { scheme: securityScheme, authValue: authValue });
    };
    React__namespace.useEffect(() => {
        handleChange();
    }, []);
    const menuItems = React__namespace.useMemo(() => {
        const items = [
            {
                type: 'group',
                title: 'Security Schemes',
                children: filteredSecurityItems.map(auth => ({
                    id: `security-scheme-${auth.key}`,
                    title: getReadableSecurityName(auth, shouldIncludeKey(filteredSecurityItems, auth.type)),
                    isChecked: auth.key === (securityScheme === null || securityScheme === void 0 ? void 0 : securityScheme.key),
                    onPress: () => {
                        onChange({ scheme: auth, authValue: undefined });
                    },
                })),
            },
        ];
        return items;
    }, [filteredSecurityItems, onChange, securityScheme]);
    if (filteredSecurityItems.length === 0)
        return null;
    return (React__namespace.createElement(mosaic.Panel, { defaultIsOpen: true },
        React__namespace.createElement(mosaic.Panel.Titlebar, { rightComponent: filteredSecurityItems.length > 1 && (React__namespace.createElement(mosaic.Menu, { "aria-label": "security-schemes", items: menuItems, closeOnPress: true, renderTrigger: ({ isOpen }) => (React__namespace.createElement(mosaic.Button, { appearance: "minimal", size: "sm", iconRight: ['fas', 'sort'], active: isOpen }, menuName)) })) }, "Auth"),
        React__namespace.createElement(SecuritySchemeComponent, { scheme: value ? value.scheme : filteredSecurityItems[0], onChange: handleChange, value: (_a = (value && value.authValue)) !== null && _a !== void 0 ? _a : '' })));
};
const GenericMessageContainer = ({ scheme }) => {
    return React__namespace.createElement(mosaic.Panel.Content, null,
        "Coming Soon: ",
        getReadableSecurityName(scheme));
};
const SecuritySchemeComponent = (_a) => {
    var { scheme } = _a, rest = tslib.__rest(_a, ["scheme"]);
    switch (scheme.type) {
        case 'apiKey':
            return React__namespace.createElement(APIKeyAuth, Object.assign({ scheme: scheme }, rest));
        case 'oauth2':
            return React__namespace.createElement(OAuth2Auth, Object.assign({ scheme: scheme }, rest));
        case 'http':
            switch (scheme.scheme) {
                case 'basic':
                    return React__namespace.createElement(BasicAuth, Object.assign({}, rest));
                case 'digest':
                    return React__namespace.createElement(DigestAuth, Object.assign({}, rest));
                case 'bearer':
                    return React__namespace.createElement(BearerAuth, Object.assign({ scheme: scheme }, rest));
                default:
                    return React__namespace.createElement(GenericMessageContainer, Object.assign({ scheme: scheme }, rest));
            }
        default:
            return React__namespace.createElement(GenericMessageContainer, Object.assign({ scheme: scheme }, rest));
    }
};
const securitySchemeKeys = ['apiKey', 'http', 'oauth2', 'openIdConnect'];

const caseInsensitivelyEquals = curry__default["default"]((a, b) => a.toUpperCase() === b.toUpperCase());
function slugify(name) {
    return name
        .replace(/\/|{|}|\s/g, '-')
        .replace(/-{2,}/, '-')
        .replace(/^-/, '')
        .replace(/-$/, '');
}

const isApiKeySecurityScheme = (maybeIApiKey) => isObject__default["default"](maybeIApiKey) && maybeIApiKey.type === 'apiKey';
const isOAuth2SecurityScheme = (maybeIOAuth2) => isObject__default["default"](maybeIOAuth2) && maybeIOAuth2.type === 'oauth2';
const isBasicSecurityScheme = (maybeIBasic) => isObject__default["default"](maybeIBasic) && maybeIBasic.type === 'http' && maybeIBasic.scheme === 'basic';
const isBearerSecurityScheme = (maybeIBearer) => isObject__default["default"](maybeIBearer) && maybeIBearer.type === 'http' && maybeIBearer.scheme === 'bearer';
const isDigestSecurityScheme = (maybeIBearer) => isObject__default["default"](maybeIBearer) && maybeIBearer.type === 'http' && maybeIBearer.scheme === 'digest';
function filterOutAuthorizationParams(queryParams, securitySchemes = []) {
    const flattenedSecuritySchemes = flatten__default["default"](securitySchemes);
    const securitySchemeNames = getSecuritySchemeNames(flattenedSecuritySchemes);
    return queryParams.filter(queryParam => !securitySchemeNames.some(caseInsensitivelyEquals(queryParam.name)));
}
const getSecuritySchemeNames = (securitySchemes) => securitySchemes.flatMap(scheme => {
    if (isApiKeySecurityScheme(scheme)) {
        return scheme.name;
    }
    if (isOAuth2SecurityScheme(scheme)) {
        return 'Authorization';
    }
    return [];
});
const securitySchemeValuesAtom = persistAtom('TryIt_securitySchemeValues', jotai.atom({}));
const usePersistedSecuritySchemeWithValues = () => {
    const [currentScheme, setCurrentScheme] = React__default["default"].useState();
    const [securitySchemeValues, setSecuritySchemeValues] = jotai.useAtom(securitySchemeValuesAtom);
    const setPersistedAuthenticationSettings = (securitySchemeWithValues) => {
        setCurrentScheme(securitySchemeWithValues);
        if (securitySchemeWithValues) {
            const key = securitySchemeWithValues.scheme.key;
            const value = securitySchemeWithValues.authValue;
            if (value !== undefined) {
                setSecuritySchemeValues(Object.assign(Object.assign({}, securitySchemeValues), { [key]: value }));
            }
        }
    };
    const persistedSecuritySchemeValue = currentScheme && securitySchemeValues[currentScheme.scheme.key];
    const schemeWithPersistedValue = React__default["default"].useMemo(() => {
        if (!currentScheme)
            return undefined;
        if (currentScheme.authValue)
            return currentScheme;
        return Object.assign(Object.assign({}, currentScheme), { authValue: persistedSecuritySchemeValue });
    }, [currentScheme, persistedSecuritySchemeValue]);
    return [schemeWithPersistedValue, setPersistedAuthenticationSettings];
};

const FileUploadParameterEditor = ({ parameter, value, onChange }) => {
    var _a;
    const parameterDisplayName = `${parameter.name}${parameter.required ? '*' : ''}`;
    const handleFileChange = (event) => {
        var _a;
        const file = (_a = event.currentTarget.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file === undefined)
            return;
        onChange(file);
    };
    const clearFile = () => {
        onChange(undefined);
    };
    const parameterInputId = useUniqueId(`id_${parameter.name}_`);
    const fileUploadInputId = `${parameterInputId}-file-input`;
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement("label", { "aria-hidden": "true", "data-testid": "param-label", htmlFor: parameterInputId }, parameterDisplayName),
        React__namespace.createElement(mosaic.Text, { mx: 3 }, ":"),
        React__namespace.createElement(mosaic.Flex, { flex: 1, alignItems: "center" },
            React__namespace.createElement(mosaic.Input, { id: parameterInputId, style: { paddingLeft: 15 }, "aria-label": parameter.name, appearance: "minimal", flex: 1, placeholder: "pick a file", type: "text", required: true, value: (_a = value === null || value === void 0 ? void 0 : value.name) !== null && _a !== void 0 ? _a : '', disabled: true }),
            value && (React__namespace.createElement("button", { className: "sl-mr-3 sl-p-2", "aria-label": "Remove file", onClick: clearFile },
                React__namespace.createElement(mosaic.Icon, { icon: "times" }))),
            React__namespace.createElement("div", null,
                React__namespace.createElement("label", { role: "button", htmlFor: fileUploadInputId }, "Upload"),
                React__namespace.createElement("input", { onChange: handleFileChange, type: "file", hidden: true, id: fileUploadInputId })))));
};

const booleanOptions = [
    { label: 'Not Set', value: '' },
    { label: 'False', value: 'false' },
    { label: 'True', value: 'true' },
];
function enumOptions(enumValues, required) {
    const options = map__default["default"](enumValues, v => ({ value: typeof v === 'number' ? v : String(v) }));
    return required ? options : [{ label: 'Not Set', value: '' }, ...options];
}
function parameterOptions(parameter) {
    var _a, _b;
    return ((_a = parameter.schema) === null || _a === void 0 ? void 0 : _a.type) === 'boolean'
        ? booleanOptions
        : ((_b = parameter.schema) === null || _b === void 0 ? void 0 : _b.enum) !== undefined
            ? enumOptions(parameter.schema.enum, parameter.required)
            : null;
}
const selectExampleOption = { value: '', label: 'Pick an example' };
function exampleOptions(parameter) {
    var _a;
    return ((_a = parameter.examples) === null || _a === void 0 ? void 0 : _a.length) && parameter.examples.length > 1
        ? [
            selectExampleOption,
            ...parameter.examples.map(example => ({ label: example.key, value: exampleValue(example) })),
        ]
        : null;
}
function parameterSupportsFileUpload(parameter) {
    var _a, _b, _c;
    return (((_a = parameter.schema) === null || _a === void 0 ? void 0 : _a.type) === 'string' &&
        (((_b = parameter.schema) === null || _b === void 0 ? void 0 : _b.contentEncoding) === 'base64' ||
            ((_c = parameter.schema) === null || _c === void 0 ? void 0 : _c.contentMediaType) === 'application/octet-stream'));
}
function exampleValue(example) {
    const value = 'value' in example ? example.value : example.externalValue;
    return escapeQuotes(String(value));
}
function escapeQuotes(value) {
    return value.replace(/"/g, '\\"');
}
function getPlaceholderForParameter(parameter) {
    var _a, _b;
    const { value: parameterValue, isDefault } = getValueForParameter(parameter);
    if (parameterValue)
        return `${isDefault ? 'defaults to' : 'example'}: ${parameterValue}`;
    return String((_b = (_a = parameter.schema) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : '');
}
function retrieveDefaultFromSchema(parameter) {
    var _a;
    const defaultValue = (_a = parameter.schema) === null || _a === void 0 ? void 0 : _a.default;
    return isObject__default["default"](defaultValue) ? json.safeStringify(defaultValue) : defaultValue;
}
const getValueForParameter = (parameter) => {
    var _a, _b, _c;
    const defaultValue = retrieveDefaultFromSchema(parameter);
    if (typeof defaultValue !== 'undefined') {
        return { value: String(defaultValue), isDefault: true };
    }
    const examples = (_a = parameter.examples) !== null && _a !== void 0 ? _a : [];
    if (examples.length > 0) {
        return { value: exampleValue(examples[0]) };
    }
    const enums = (_c = (_b = parameter.schema) === null || _b === void 0 ? void 0 : _b.enum) !== null && _c !== void 0 ? _c : [];
    if (enums.length > 0) {
        return { value: String(enums[0]) };
    }
    return { value: '' };
};
const getInitialValueForParameter = (parameter) => {
    const isRequired = !!parameter.required;
    if (!isRequired)
        return '';
    return getValueForParameter(parameter).value;
};
const initialParameterValues = params => {
    const paramsByName = keyBy__default["default"](params, (param) => param.name);
    return mapValues__default["default"](paramsByName, param => getInitialValueForParameter(param));
};
function mapSchemaPropertiesToParameters(properties, required) {
    return Object.entries(properties).map(([name, schema]) => (Object.assign({ name, schema: typeof schema !== 'boolean' ? schema : undefined, examples: typeof schema !== 'boolean' && schema.examples ? [{ key: 'example', value: schema.examples }] : undefined }, ((required === null || required === void 0 ? void 0 : required.includes(name)) && { required: true }))));
}

const ParameterEditor = ({ parameter, value, onChange, validate }) => {
    var _a, _b;
    const inputId = useUniqueId(`id_${parameter.name}_`);
    const parameterValueOptions = parameterOptions(parameter);
    const examples = exampleOptions(parameter);
    const selectedExample = (_a = examples === null || examples === void 0 ? void 0 : examples.find(e => e.value === value)) !== null && _a !== void 0 ? _a : selectExampleOption;
    const parameterDisplayName = `${parameter.name}${parameter.required ? '*' : ''}`;
    const requiredButEmpty = validate && parameter.required && !value;
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(mosaic.Text, { as: "label", "aria-hidden": "true", "data-testid": "param-label", htmlFor: inputId, fontSize: "base" }, parameterDisplayName),
        React__namespace.createElement(mosaic.Text, { mx: 3 }, ":"),
        React__namespace.createElement("div", null, parameterValueOptions ? (React__namespace.createElement(mosaic.Select, { flex: 1, "aria-label": parameter.name, options: parameterValueOptions, value: value || '', onChange: onChange })) : (React__namespace.createElement(mosaic.Flex, { flex: 1 },
            React__namespace.createElement(mosaic.Input, { id: inputId, "aria-label": parameter.name, appearance: requiredButEmpty ? 'default' : 'minimal', flex: 1, placeholder: getPlaceholderForParameter(parameter), type: ((_b = parameter.schema) === null || _b === void 0 ? void 0 : _b.type) === 'number' ? 'number' : 'text', required: true, intent: requiredButEmpty ? 'danger' : 'default', value: value || '', onChange: e => onChange && onChange(e.currentTarget.value) }),
            examples && (React__namespace.createElement(mosaic.Select, { "aria-label": `${parameter.name}-select`, flex: 1, value: selectedExample.value, options: examples, onChange: onChange })))))));
};

const FormDataBody = ({ specification, values, onChangeValues }) => {
    const schema = specification.schema;
    const parameters = schema === null || schema === void 0 ? void 0 : schema.properties;
    const required = schema === null || schema === void 0 ? void 0 : schema.required;
    React__namespace.useEffect(() => {
        if (parameters === undefined) {
            console.warn(`Invalid schema in form data spec: ${json.safeStringify(schema)}`);
        }
    }, [parameters, schema]);
    if (parameters === undefined) {
        return null;
    }
    return (React__namespace.createElement(mosaic.Panel, { defaultIsOpen: true },
        React__namespace.createElement(mosaic.Panel.Titlebar, null, "Body"),
        React__namespace.createElement(mosaic.Panel.Content, { className: ParameterGridCSS }, mapSchemaPropertiesToParameters(parameters, required).map(parameter => {
            const supportsFileUpload = parameterSupportsFileUpload(parameter);
            const value = values[parameter.name];
            if (supportsFileUpload) {
                return (React__namespace.createElement(FileUploadParameterEditor, { key: parameter.name, parameter: parameter, value: value instanceof File ? value : undefined, onChange: newValue => newValue
                        ? onChangeValues(Object.assign(Object.assign({}, values), { [parameter.name]: newValue }))
                        : onChangeValues(omit__default["default"](values, parameter.name)) }));
            }
            return (React__namespace.createElement(ParameterEditor, { key: parameter.name, parameter: parameter, value: typeof value === 'string' ? value : undefined, onChange: (value) => onChangeValues(Object.assign(Object.assign({}, values), { [parameter.name]: typeof value === 'number' ? String(value) : value })) }));
        }))));
};

const fileToBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const result = reader.result;
        const base64String = result.replace(/data:.*\/.*;base64,/g, '');
        resolve(base64String);
    };
    reader.onerror = () => reject(reader.error);
});

const isFormDataContent = (content) => isUrlEncodedContent(content) || isMultipartContent(content);
function isUrlEncodedContent(content) {
    return content.mediaType.toLowerCase() === 'application/x-www-form-urlencoded';
}
function isMultipartContent(content) {
    return content.mediaType.toLowerCase() === 'multipart/form-data';
}
function createRequestBody(mediaTypeContent, bodyParameterValues) {
    var _a;
    return tslib.__awaiter(this, void 0, void 0, function* () {
        if (!mediaTypeContent)
            return undefined;
        const creator = (_a = (yield requestBodyCreators[mediaTypeContent.mediaType.toLowerCase()])) !== null && _a !== void 0 ? _a : createRawRequestBody;
        return creator({ mediaTypeContent, bodyParameterValues, rawBodyValue: '' });
    });
}
const createUrlEncodedRequestBody = ({ bodyParameterValues = {} }) => tslib.__awaiter(void 0, void 0, void 0, function* () {
    const filteredValues = pickBy__default["default"](bodyParameterValues, isString__default["default"]);
    return new URLSearchParams(filteredValues);
});
const createMultipartRequestBody = ({ mediaTypeContent, bodyParameterValues = {} }) => tslib.__awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const formData = new FormData();
    for (const [key, value] of Object.entries(bodyParameterValues)) {
        const schema = (_b = (_a = mediaTypeContent.schema) === null || _a === void 0 ? void 0 : _a.properties) === null || _b === void 0 ? void 0 : _b[key];
        if (typeof schema !== 'object')
            continue;
        if (parameterSupportsFileUpload({ schema }) && schema.contentEncoding === 'base64' && value instanceof File) {
            try {
                formData.append(key, yield fileToBase64(value));
            }
            catch (_c) {
                continue;
            }
        }
        else {
            formData.append(key, value);
        }
    }
    return formData;
});
const createRawRequestBody = ({ rawBodyValue = '' }) => tslib.__awaiter(void 0, void 0, void 0, function* () { return rawBodyValue; });
const requestBodyCreators = {
    'application/x-www-form-urlencoded': createUrlEncodedRequestBody,
    'multipart/form-data': createMultipartRequestBody,
};
const useBodyParameterState = (mediaTypeContent) => {
    const isFormDataBody = mediaTypeContent && isFormDataContent(mediaTypeContent);
    const initialState = React__namespace.useMemo(() => {
        var _a, _b, _c;
        if (!isFormDataBody) {
            return {};
        }
        const properties = (_b = (_a = mediaTypeContent === null || mediaTypeContent === void 0 ? void 0 : mediaTypeContent.schema) === null || _a === void 0 ? void 0 : _a.properties) !== null && _b !== void 0 ? _b : {};
        const required = (_c = mediaTypeContent === null || mediaTypeContent === void 0 ? void 0 : mediaTypeContent.schema) === null || _c === void 0 ? void 0 : _c.required;
        const parameters = mapSchemaPropertiesToParameters(properties, required);
        return initialParameterValues(parameters);
    }, [isFormDataBody, mediaTypeContent]);
    const [bodyParameterValues, setBodyParameterValues] = React__namespace.useState(initialState);
    React__namespace.useEffect(() => {
        setBodyParameterValues(initialState);
    }, [initialState]);
    if (isFormDataBody) {
        return [
            bodyParameterValues,
            setBodyParameterValues,
            { isFormDataBody: true, bodySpecification: mediaTypeContent },
        ];
    }
    else {
        return [
            bodyParameterValues,
            setBodyParameterValues,
            { isFormDataBody: false, bodySpecification: undefined },
        ];
    }
};

const RequestBody = ({ examples, requestBody, onChange }) => {
    return (React__namespace.createElement(mosaic.Panel, { defaultIsOpen: true },
        React__namespace.createElement(mosaic.Panel.Titlebar, { rightComponent: examples.length > 1 && React__namespace.createElement(ExampleMenu, { examples: examples, requestBody: requestBody, onChange: onChange }) }, "Body"),
        React__namespace.createElement(mosaic.Panel.Content, { pb: 4, maxH: 48, overflowY: "auto" },
            React__namespace.createElement(mosaicCodeEditor.CodeEditor, { onChange: onChange, language: "json", value: requestBody, showLineNumbers: true, padding: 0, style: {
                    fontSize: 12,
                } }))));
};
function ExampleMenu({ examples, requestBody, onChange }) {
    const handleClick = React__namespace.useCallback((example) => {
        var _a;
        onChange((_a = json.safeStringify('value' in example ? example.value : example.externalValue, undefined, 2)) !== null && _a !== void 0 ? _a : requestBody);
    }, [onChange, requestBody]);
    const menuItems = React__namespace.useMemo(() => {
        const items = examples.map(example => ({
            id: `request-example-${example.key}`,
            title: example.key,
            onPress: () => handleClick(example),
        }));
        return items;
    }, [examples, handleClick]);
    return (React__namespace.createElement(mosaic.Menu, { "aria-label": "Examples", items: menuItems, renderTrigger: ({ isOpen }) => (React__namespace.createElement(mosaic.Button, { appearance: "minimal", size: "sm", iconRight: ['fas', 'sort'], active: isOpen }, "Examples")) }));
}

const useGenerateExampleFromMediaTypeContent = (mediaTypeContent, chosenExampleIndex, { skipReadOnly, skipWriteOnly, skipNonRequired } = {}) => {
    const document = useDocument();
    return React__default["default"].useMemo(() => generateExampleFromMediaTypeContent(mediaTypeContent, document, chosenExampleIndex, {
        skipNonRequired,
        skipWriteOnly,
        skipReadOnly,
    }), [mediaTypeContent, document, chosenExampleIndex, skipNonRequired, skipReadOnly, skipWriteOnly]);
};
const generateExampleFromMediaTypeContent = (mediaTypeContent, document, chosenExampleIndex = 0, options) => {
    var _a, _b;
    const textRequestBodySchema = mediaTypeContent === null || mediaTypeContent === void 0 ? void 0 : mediaTypeContent.schema;
    const textRequestBodyExamples = mediaTypeContent === null || mediaTypeContent === void 0 ? void 0 : mediaTypeContent.examples;
    try {
        if (textRequestBodyExamples === null || textRequestBodyExamples === void 0 ? void 0 : textRequestBodyExamples.length) {
            return (_a = json.safeStringify(textRequestBodyExamples === null || textRequestBodyExamples === void 0 ? void 0 : textRequestBodyExamples[chosenExampleIndex]['value'], undefined, 2)) !== null && _a !== void 0 ? _a : '';
        }
        else if (textRequestBodySchema) {
            const generated = Sampler__namespace.sample(textRequestBodySchema, options, document);
            return generated !== null ? (_b = json.safeStringify(generated, undefined, 2)) !== null && _b !== void 0 ? _b : '' : '';
        }
    }
    catch (e) {
        console.warn(e);
        return `Example cannot be created for this schema\n${e}`;
    }
    return '';
};
const generateExamplesFromJsonSchema = (schema) => {
    var _a, _b;
    const examples = [];
    if (Array.isArray(schema === null || schema === void 0 ? void 0 : schema.examples)) {
        schema.examples.forEach((example, index) => {
            var _a;
            examples.push({
                data: (_a = json.safeStringify(example, undefined, 2)) !== null && _a !== void 0 ? _a : '',
                label: index === 0 ? 'default' : `example-${index}`,
            });
        });
    }
    else if (json.isPlainObject(schema === null || schema === void 0 ? void 0 : schema['x-examples'])) {
        for (const [label, example] of Object.entries(schema['x-examples'])) {
            if (json.isPlainObject(example)) {
                const val = example.hasOwnProperty('value') && Object.keys(example).length === 1 ? example.value : example;
                examples.push({
                    label,
                    data: (_a = json.safeStringify(val, undefined, 2)) !== null && _a !== void 0 ? _a : '',
                });
            }
        }
    }
    if (examples.length) {
        return examples;
    }
    try {
        const generated = Sampler__namespace.sample(schema, {
            maxSampleDepth: 4,
        });
        return generated !== null
            ? [
                {
                    label: 'default',
                    data: (_b = json.safeStringify(generated, undefined, 2)) !== null && _b !== void 0 ? _b : '',
                },
            ]
            : [{ label: 'default', data: '' }];
    }
    catch (e) {
        return [{ label: '', data: `Example cannot be created for this schema\n${e}` }];
    }
};
const exceedsSize = (example, size = 500) => {
    return example.split(/\r\n|\r|\n/).length > size;
};

const useTextRequestBodyState = (mediaTypeContent) => {
    const initialRequestBody = useGenerateExampleFromMediaTypeContent(mediaTypeContent, undefined, {
        skipReadOnly: true,
    });
    const [textRequestBody, setTextRequestBody] = React__namespace.useState(initialRequestBody);
    React__namespace.useEffect(() => {
        setTextRequestBody(initialRequestBody);
    }, [initialRequestBody]);
    return [textRequestBody, setTextRequestBody];
};

const nameAndValueObjectToPair = ({ name, value }) => [name, value];
const getServerUrl = ({ chosenServer, httpOperation, mockData, corsProxy, }) => {
    var _a;
    const server = chosenServer || ((_a = httpOperation.servers) === null || _a === void 0 ? void 0 : _a[0]);
    const chosenServerUrl = server && getServerUrlWithDefaultValues(server);
    const serverUrl = (mockData === null || mockData === void 0 ? void 0 : mockData.url) || chosenServerUrl || window.location.origin;
    if (corsProxy && !mockData) {
        return `${corsProxy}${serverUrl}`;
    }
    return serverUrl;
};
function buildFetchRequest({ httpOperation, mediaTypeContent, bodyInput, parameterValues, mockData, auth, chosenServer, credentials = 'omit', corsProxy, }) {
    var _a, _b, _c, _d, _e, _f;
    return tslib.__awaiter(this, void 0, void 0, function* () {
        const serverUrl = getServerUrl({ httpOperation, mockData, chosenServer, corsProxy });
        const shouldIncludeBody = ['PUT', 'POST', 'PATCH'].includes(httpOperation.method.toUpperCase());
        const queryParams = (_c = (_b = (_a = httpOperation.request) === null || _a === void 0 ? void 0 : _a.query) === null || _b === void 0 ? void 0 : _b.map(param => { var _a; return ({ name: param.name, value: (_a = parameterValues[param.name]) !== null && _a !== void 0 ? _a : '' }); }).filter(({ value }) => value.length > 0)) !== null && _c !== void 0 ? _c : [];
        const rawHeaders = filterOutAuthorizationParams((_e = (_d = httpOperation.request) === null || _d === void 0 ? void 0 : _d.headers) !== null && _e !== void 0 ? _e : [], httpOperation.security)
            .map(header => { var _a; return ({ name: header.name, value: (_a = parameterValues[header.name]) !== null && _a !== void 0 ? _a : '' }); })
            .filter(({ value }) => value.length > 0);
        const [queryParamsWithAuth, headersWithAuth] = runAuthRequestEhancements(auth, queryParams, rawHeaders);
        const expandedPath = uriExpand(httpOperation.path, parameterValues);
        const url = new URL(URI__default["default"](serverUrl).segment(expandedPath).toString());
        url.search = new URLSearchParams(queryParamsWithAuth.map(nameAndValueObjectToPair)).toString();
        const body = typeof bodyInput === 'object' ? yield createRequestBody(mediaTypeContent, bodyInput) : bodyInput;
        const headers = Object.assign(Object.assign(Object.assign({}, ((mediaTypeContent === null || mediaTypeContent === void 0 ? void 0 : mediaTypeContent.mediaType) !== 'multipart/form-data' && {
            'Content-Type': (_f = mediaTypeContent === null || mediaTypeContent === void 0 ? void 0 : mediaTypeContent.mediaType) !== null && _f !== void 0 ? _f : 'application/json',
        })), Object.fromEntries(headersWithAuth.map(nameAndValueObjectToPair))), mockData === null || mockData === void 0 ? void 0 : mockData.header);
        return [
            url.toString(),
            {
                credentials,
                method: httpOperation.method.toUpperCase(),
                headers,
                body: shouldIncludeBody ? body : undefined,
            },
        ];
    });
}
const runAuthRequestEhancements = (auth, queryParams, headers) => {
    var _a, _b, _c, _d, _e;
    if (!auth)
        return [queryParams, headers];
    const newQueryParams = [...queryParams];
    const newHeaders = [...headers];
    if (isApiKeySecurityScheme(auth.scheme)) {
        if (auth.scheme.in === 'query') {
            newQueryParams.push({
                name: auth.scheme.name,
                value: (_a = auth.authValue) !== null && _a !== void 0 ? _a : '',
            });
        }
        if (auth.scheme.in === 'header') {
            newHeaders.push({
                name: auth.scheme.name,
                value: (_b = auth.authValue) !== null && _b !== void 0 ? _b : '',
            });
        }
    }
    if (isOAuth2SecurityScheme(auth.scheme)) {
        newHeaders.push({
            name: 'Authorization',
            value: (_c = auth.authValue) !== null && _c !== void 0 ? _c : '',
        });
    }
    if (isBearerSecurityScheme(auth.scheme)) {
        newHeaders.push({
            name: 'Authorization',
            value: `Bearer ${auth.authValue}`,
        });
    }
    if (isDigestSecurityScheme(auth.scheme)) {
        newHeaders.push({
            name: 'Authorization',
            value: (_e = (_d = auth.authValue) === null || _d === void 0 ? void 0 : _d.replace(/\s\s+/g, ' ').trim()) !== null && _e !== void 0 ? _e : '',
        });
    }
    if (isBasicSecurityScheme(auth.scheme)) {
        newHeaders.push({
            name: 'Authorization',
            value: `Basic ${auth.authValue}`,
        });
    }
    return [newQueryParams, newHeaders];
};
function buildHarRequest({ httpOperation, bodyInput, parameterValues, mediaTypeContent, auth, mockData, chosenServer, corsProxy, }) {
    var _a, _b, _c, _d, _e, _f, _g;
    return tslib.__awaiter(this, void 0, void 0, function* () {
        const serverUrl = getServerUrl({ httpOperation, mockData, chosenServer, corsProxy });
        const mimeType = (_a = mediaTypeContent === null || mediaTypeContent === void 0 ? void 0 : mediaTypeContent.mediaType) !== null && _a !== void 0 ? _a : 'application/json';
        const shouldIncludeBody = ['PUT', 'POST', 'PATCH'].includes(httpOperation.method.toUpperCase());
        const queryParams = (_d = (_c = (_b = httpOperation.request) === null || _b === void 0 ? void 0 : _b.query) === null || _c === void 0 ? void 0 : _c.map(param => { var _a; return ({ name: param.name, value: (_a = parameterValues[param.name]) !== null && _a !== void 0 ? _a : '' }); }).filter(({ value }) => value.length > 0)) !== null && _d !== void 0 ? _d : [];
        const headerParams = (_g = (_f = (_e = httpOperation.request) === null || _e === void 0 ? void 0 : _e.headers) === null || _f === void 0 ? void 0 : _f.map(header => { var _a; return ({ name: header.name, value: (_a = parameterValues[header.name]) !== null && _a !== void 0 ? _a : '' }); })) !== null && _g !== void 0 ? _g : [];
        if (mockData === null || mockData === void 0 ? void 0 : mockData.header) {
            headerParams.push({ name: 'Prefer', value: mockData.header.Prefer });
        }
        const [queryParamsWithAuth, headerParamsWithAuth] = runAuthRequestEhancements(auth, queryParams, headerParams);
        const extendedPath = uriExpand(httpOperation.path, parameterValues);
        let postData = undefined;
        if (shouldIncludeBody && typeof bodyInput === 'string') {
            postData = { mimeType, text: bodyInput };
        }
        if (shouldIncludeBody && typeof bodyInput === 'object') {
            postData = {
                mimeType,
                params: Object.entries(bodyInput).map(([name, value]) => {
                    if (value instanceof File) {
                        return {
                            name,
                            fileName: value.name,
                            contentType: value.type,
                        };
                    }
                    return {
                        name,
                        value,
                    };
                }),
            };
        }
        return {
            method: httpOperation.method.toUpperCase(),
            url: URI__default["default"](serverUrl).segment(extendedPath).toString(),
            httpVersion: 'HTTP/1.1',
            cookies: [],
            headers: [{ name: 'Content-Type', value: mimeType }, ...headerParamsWithAuth],
            queryString: queryParamsWithAuth,
            postData: postData,
            headersSize: -1,
            bodySize: -1,
        };
    });
}
function uriExpand(uri, data) {
    if (!data) {
        return uri;
    }
    return uri.replace(/{([^#?]+?)}/g, (match, value) => {
        return data[value] || value;
    });
}

const formatMultiValueHeader = (...keyValuePairs) => {
    return keyValuePairs
        .map(item => {
        if (typeof item === 'string')
            return item;
        const [key, rawValue] = item;
        if (!rawValue)
            return key;
        const needsQuotes = rawValue.indexOf(',') > -1;
        const value = needsQuotes ? `"${rawValue}"` : rawValue;
        return `${key}=${value}`;
    })
        .join(', ');
};

function getMockData(url, httpOperation, { code, dynamic, example }) {
    return url ? { url, header: buildPreferHeader({ code, dynamic, example }, httpOperation) } : undefined;
}
function buildPreferHeader({ code, example, dynamic }, httpOperation) {
    if (!code) {
        return undefined;
    }
    const isCodeSupported = supportsResponseCode(httpOperation, code);
    const isExampleSupported = isCodeSupported && supportsExample(httpOperation, code, example);
    const args = compact__default["default"]([
        code && isCodeSupported ? ['code', code] : undefined,
        dynamic ? ['dynamic', String(dynamic)] : undefined,
        example && isExampleSupported ? ['example', example] : undefined,
    ]);
    const headerValue = formatMultiValueHeader(...args);
    return {
        Prefer: headerValue,
    };
}
function supportsResponseCode(httpOperation, code) {
    var _a;
    return ((_a = httpOperation.responses) === null || _a === void 0 ? void 0 : _a.find(response => response.code === code)) !== undefined;
}
function supportsExample(httpOperation, code, exampleKey) {
    var _a, _b;
    if (!exampleKey)
        return false;
    const response = (_a = httpOperation.responses) === null || _a === void 0 ? void 0 : _a.find(response => response.code === code);
    if (!response)
        return false;
    const exampleKeys = uniq__default["default"]((_b = response.contents) === null || _b === void 0 ? void 0 : _b.flatMap(c => c.examples || []).map(example => example.key));
    return exampleKeys.includes(exampleKey);
}

const MockingButton = ({ operation, options: { code, example, dynamic }, onOptionsChange, }) => {
    const operationResponses = operation.responses;
    const setMockingOptions = React__namespace.useCallback(({ code, example, dynamic }) => {
        onOptionsChange({ code, example, dynamic });
    }, [onOptionsChange]);
    const menuItems = React__namespace.useMemo(() => {
        var _a;
        const items = (_a = operationResponses === null || operationResponses === void 0 ? void 0 : operationResponses.filter(operationResponse => Number.isInteger(parseFloat(operationResponse.code)))) === null || _a === void 0 ? void 0 : _a.map(generateOperationResponseMenu);
        function generateOperationResponseMenu(operationResponse) {
            var _a;
            const menuId = `response-${operationResponse.code}`;
            const isActive = operationResponse.code === code;
            const exampleKeys = uniq__default["default"]((_a = operationResponse.contents) === null || _a === void 0 ? void 0 : _a.flatMap(c => c.examples || []).map(example => example.key));
            const exampleChildren = exampleKeys === null || exampleKeys === void 0 ? void 0 : exampleKeys.map(exampleKey => ({
                id: `${menuId}-example-${exampleKey}`,
                title: exampleKey,
                isChecked: isActive && exampleKey === example,
                onPress: () => {
                    setMockingOptions({ code: operationResponse.code, example: exampleKey });
                },
            }));
            const generationModeItems = [
                {
                    id: `${menuId}-gen-static`,
                    title: 'Statically Generated',
                    isChecked: isActive && dynamic === false,
                    onPress: () => {
                        setMockingOptions({ code: operationResponse.code, dynamic: false });
                    },
                },
                {
                    id: `${menuId}-gen-dynamic`,
                    title: 'Dynamically Generated',
                    isChecked: isActive && dynamic === true,
                    onPress: () => {
                        setMockingOptions({ code: operationResponse.code, dynamic: true });
                    },
                },
            ];
            const menuItem = {
                id: menuId,
                isChecked: isActive,
                title: operationResponse.code,
                onPress: () => {
                    setMockingOptions({ code: operationResponse.code, dynamic: false });
                },
                children: [
                    { type: 'group', children: generationModeItems },
                    { type: 'group', title: 'Examples', children: exampleChildren },
                ],
            };
            return menuItem;
        }
        return items;
    }, [code, dynamic, example, operationResponses, setMockingOptions]);
    return (React__namespace.createElement(mosaic.Box, null,
        React__namespace.createElement(mosaic.Menu, { "aria-label": "Mock settings", items: menuItems, renderTrigger: ({ isOpen }) => (React__namespace.createElement(mosaic.FieldButton, { active: isOpen, size: "sm" }, "Mock Settings")) })));
};

const mockingOptionsAtom = jotai.atom({});
const useMockingOptions = () => jotai.useAtom(mockingOptionsAtom);

const OperationParameters = ({ parameters, values, onChangeValue, validate, }) => {
    return (React__namespace.createElement(mosaic.Panel, { defaultIsOpen: true },
        React__namespace.createElement(mosaic.Panel.Titlebar, null, "Parameters"),
        React__namespace.createElement(mosaic.Panel.Content, { className: ParameterGridCSS }, parameters.map(parameter => (React__namespace.createElement(ParameterEditor, { key: parameter.name, parameter: parameter, value: values[parameter.name], onChange: (value) => onChangeValue(parameter.name, String(value)), validate: validate }))))));
};

const persistedParameterValuesAtom = jotai.atom({});
const useRequestParameters = (httpOperation) => {
    const [persistedParameterValues, setPersistedParameterValues] = jotai.useAtom(persistedParameterValuesAtom);
    const allParameters = React__namespace.useMemo(() => extractAllParameters(httpOperation), [httpOperation]);
    const parameterDefaultValues = React__namespace.useMemo(() => initialParameterValues(allParameters), [allParameters]);
    const updateParameterValue = (name, value) => {
        const defaultValue = parameterDefaultValues[name];
        setPersistedParameterValues(prevState => {
            const valueToSave = value === defaultValue ? undefined : value;
            if (prevState[name] !== valueToSave) {
                return Object.assign(Object.assign({}, prevState), { [name]: valueToSave });
            }
            return prevState;
        });
    };
    const parameterValuesWithDefaults = React__namespace.useMemo(() => Object.fromEntries(allParameters.map(parameter => {
        var _a;
        return [
            parameter.name,
            (_a = persistedParameterValues[parameter.name]) !== null && _a !== void 0 ? _a : parameterDefaultValues[parameter.name],
        ];
    })), [allParameters, persistedParameterValues, parameterDefaultValues]);
    return {
        allParameters,
        parameterValuesWithDefaults,
        updateParameterValue,
    };
};
function extractAllParameters(httpOperation) {
    var _a, _b, _c, _d, _e, _f;
    const getRequired = (obj) => { var _a; return (_a = obj.required) !== null && _a !== void 0 ? _a : false; };
    const pathParameters = orderBy__default["default"]((_b = (_a = httpOperation.request) === null || _a === void 0 ? void 0 : _a.path) !== null && _b !== void 0 ? _b : [], [getRequired, 'name'], ['desc', 'asc']);
    const queryParameters = filterOutAuthorizationParams(orderBy__default["default"]((_d = (_c = httpOperation.request) === null || _c === void 0 ? void 0 : _c.query) !== null && _d !== void 0 ? _d : [], [getRequired, 'name'], ['desc', 'asc']), httpOperation.security);
    const headerParameters = filterOutAuthorizationParams(orderBy__default["default"]((_f = (_e = httpOperation.request) === null || _e === void 0 ? void 0 : _e.headers) !== null && _f !== void 0 ? _f : [], [getRequired, 'name'], ['desc', 'asc']), httpOperation.security);
    return uniqBy__default["default"]([...pathParameters, ...queryParameters, ...headerParameters], p => p.name);
}

function getHttpCodeColor(code) {
    return HttpCodeColor[`${code}`[0]] || 'gray';
}

const bodyFormatMap = {
    image: ['preview'],
    json: ['preview', 'raw'],
    xml: ['preview', 'raw'],
    text: ['raw'],
};
const regex = {
    image: /image\/(.?)*(jpeg|gif|png|svg)/,
    json: /application\/(.?)*json/,
    xml: /(text|application)\/(.?)*(xml|html)/,
    text: /text\/.*/,
};
function getResponseType(contentType) {
    return Object.keys(regex).find(type => {
        const reg = regex[type];
        return reg.test(contentType);
    });
}
function parseBody(body, type) {
    switch (type) {
        case 'json':
            return json.safeStringify(json.safeParse(body), undefined, 2) || body;
        case 'xml':
            try {
                return formatXml__default["default"](body);
            }
            catch (_a) {
                return body;
            }
        default:
            return body;
    }
}
const TryItResponse = ({ response }) => {
    var _a;
    const contentType = response.contentType;
    const responseType = contentType ? getResponseType(contentType) : undefined;
    const bodyFormats = responseType ? bodyFormatMap[responseType] : [];
    const [bodyFormat, setBodyFormat] = React__namespace.useState(bodyFormats.length ? bodyFormats[0] : undefined);
    return (React__namespace.createElement(mosaic.Panel, { defaultIsOpen: true },
        React__namespace.createElement(mosaic.Panel.Titlebar, { rightComponent: bodyFormat &&
                bodyFormats.length > 1 && React__namespace.createElement(ResponseMenu, { types: bodyFormats, type: bodyFormat, onChange: setBodyFormat }) }, "Response"),
        React__namespace.createElement(mosaic.Panel.Content, null,
            React__namespace.createElement("div", null,
                React__namespace.createElement("div", { className: `sl-mb-3 sl-text-${getHttpCodeColor(response.status)}` }, `${response.status} ${(_a = HttpCodeDescriptions[response.status]) !== null && _a !== void 0 ? _a : ''}`),
                response.bodyText && responseType && ['json', 'xml', 'text'].includes(responseType) ? (React__namespace.createElement(mosaicCodeViewer.CodeViewer, { language: "json", value: responseType && bodyFormat === 'preview'
                        ? parseBody(response.bodyText, responseType)
                        : response.bodyText })) : response.blob && responseType === 'image' ? (React__namespace.createElement(mosaic.Flex, { justifyContent: "center" },
                    React__namespace.createElement(mosaic.Image, { src: URL.createObjectURL(response.blob), alt: "response image" }))) : (React__namespace.createElement("p", null,
                    React__namespace.createElement(mosaic.Box, { as: mosaic.Icon, icon: freeSolidSvgIcons.faExclamationCircle, mr: 2 }),
                    "No supported response body returned"))))));
};
const ResponseMenu = ({ types, type, onChange }) => {
    const menuItems = React__namespace.useMemo(() => {
        const items = types.map(type => ({
            id: type,
            title: capitalize__default["default"](type),
            onPress: () => onChange(type),
        }));
        return items;
    }, [types, onChange]);
    return (React__namespace.createElement(mosaic.Menu, { "aria-label": "Body Format", items: menuItems, renderTrigger: ({ isOpen }) => (React__namespace.createElement(mosaic.Button, { appearance: "minimal", size: "sm", iconRight: ['fas', 'sort'], active: isOpen }, capitalize__default["default"](type))) }));
};
const ResponseError = ({ state: { error } }) => (React__namespace.createElement(mosaic.Panel, { defaultIsOpen: true },
    React__namespace.createElement(mosaic.Panel.Titlebar, null, "Error"),
    React__namespace.createElement(mosaic.Panel.Content, null, isNetworkError(error) ? React__namespace.createElement(NetworkErrorMessage, null) : React__namespace.createElement("p", null, error.message))));
const NetworkErrorMessage = () => (React__namespace.createElement(React__namespace.Fragment, null,
    React__namespace.createElement("p", { className: "sl-pb-2" },
        React__namespace.createElement("strong", null, "Network Error occured.")),
    React__namespace.createElement("p", { className: "sl-pb-2" }, "1. Double check that your computer is connected to the internet."),
    React__namespace.createElement("p", { className: "sl-pb-2" }, "2. Make sure the API is actually running and available under the specified URL."),
    React__namespace.createElement("p", null,
        "3. If you've checked all of the above and still experiencing issues, check if the API supports",
        ' ',
        React__namespace.createElement(mosaic.Link, { target: "_blank", rel: "noopener noreferrer", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS", fontWeight: "semibold" }, "CORS"),
        ".")));
class NetworkError extends Error {
}
const isNetworkError = (error) => error instanceof NetworkError;

const ServersDropdown = ({ servers }) => {
    const [chosenServer, setChosenServer] = jotai.useAtom(chosenServerAtom);
    const serverItems = [
        {
            type: 'option_group',
            title: 'Servers',
            value: (chosenServer === null || chosenServer === void 0 ? void 0 : chosenServer.url) || '',
            onChange: url => {
                const server = servers.find(server => server.url === url);
                setChosenServer(server);
            },
            children: [
                ...servers.map((server, i) => ({
                    id: server.url,
                    title: server.name || server.description,
                    description: server.name ? server.description || server.url : server.description ? server.url : undefined,
                    value: server.url,
                })),
            ],
        },
    ];
    return (React__namespace.createElement(mosaic.Menu, { "aria-label": "Server", items: serverItems, closeOnPress: true, renderTrigger: ({ isOpen }) => (React__namespace.createElement(mosaic.FieldButton, { icon: freeSolidSvgIcons.faServer, size: "sm", active: isOpen }, (chosenServer === null || chosenServer === void 0 ? void 0 : chosenServer.name) || (chosenServer === null || chosenServer === void 0 ? void 0 : chosenServer.description) || 'Server')) }));
};
ServersDropdown.displayName = 'ServersDropdown';

const defaultServers = [];
const TryIt = ({ httpOperation, mockUrl, onRequestChange, requestBodyIndex, embeddedInMd = false, tryItCredentialsPolicy, corsProxy, className, }) => {
    var _a, _b, _c, _d, _e, _f;
    const isDark = mosaic.useThemeIsDark();
    const [response, setResponse] = React__namespace.useState();
    const [requestData, setRequestData] = React__namespace.useState();
    const [loading, setLoading] = React__namespace.useState(false);
    const [validateParameters, setValidateParameters] = React__namespace.useState(false);
    const mediaTypeContent = (_c = (_b = (_a = httpOperation.request) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.contents) === null || _c === void 0 ? void 0 : _c[requestBodyIndex !== null && requestBodyIndex !== void 0 ? requestBodyIndex : 0];
    const { allParameters, updateParameterValue, parameterValuesWithDefaults } = useRequestParameters(httpOperation);
    const [mockingOptions, setMockingOptions] = useMockingOptions();
    const [bodyParameterValues, setBodyParameterValues, formDataState] = useBodyParameterState(mediaTypeContent);
    const [textRequestBody, setTextRequestBody] = useTextRequestBodyState(mediaTypeContent);
    const [operationAuthValue, setOperationAuthValue] = usePersistedSecuritySchemeWithValues();
    const servers = React__namespace.useMemo(() => {
        const toDisplay = getServersToDisplay(httpOperation.servers || defaultServers, mockUrl);
        return toDisplay;
    }, [httpOperation.servers, mockUrl]);
    const firstServer = servers[0] || null;
    const [chosenServer, setChosenServer] = jotai.useAtom(chosenServerAtom);
    const isMockingEnabled = mockUrl && (chosenServer === null || chosenServer === void 0 ? void 0 : chosenServer.url) === mockUrl;
    const hasRequiredButEmptyParameters = allParameters.some(parameter => parameter.required && !parameterValuesWithDefaults[parameter.name]);
    React__namespace.useEffect(() => {
        const currentUrl = chosenServer === null || chosenServer === void 0 ? void 0 : chosenServer.url;
        const exists = currentUrl && servers.find(s => s.url === currentUrl);
        if (!exists) {
            setChosenServer(firstServer);
        }
        else if (exists !== chosenServer) {
            setChosenServer(exists);
        }
    }, [servers, firstServer, chosenServer, setChosenServer]);
    React__namespace.useEffect(() => {
        let isMounted = true;
        if (onRequestChange || embeddedInMd) {
            buildHarRequest(Object.assign(Object.assign({ mediaTypeContent, parameterValues: parameterValuesWithDefaults, httpOperation, bodyInput: formDataState.isFormDataBody ? bodyParameterValues : textRequestBody, auth: operationAuthValue }, (isMockingEnabled && { mockData: getMockData(mockUrl, httpOperation, mockingOptions) })), { chosenServer,
                corsProxy })).then(request => {
                if (isMounted) {
                    if (onRequestChange) {
                        onRequestChange(request);
                    }
                    if (embeddedInMd) {
                        setRequestData(request);
                    }
                }
            });
        }
        return () => {
            isMounted = false;
        };
    }, [
        httpOperation,
        parameterValuesWithDefaults,
        formDataState.isFormDataBody,
        bodyParameterValues,
        textRequestBody,
        operationAuthValue,
        mockingOptions,
        chosenServer,
        corsProxy,
        embeddedInMd,
    ]);
    const handleSendRequest = () => tslib.__awaiter(void 0, void 0, void 0, function* () {
        setValidateParameters(true);
        if (hasRequiredButEmptyParameters)
            return;
        try {
            setLoading(true);
            const mockData = isMockingEnabled ? getMockData(mockUrl, httpOperation, mockingOptions) : undefined;
            const request = yield buildFetchRequest({
                parameterValues: parameterValuesWithDefaults,
                httpOperation,
                mediaTypeContent,
                bodyInput: formDataState.isFormDataBody ? bodyParameterValues : textRequestBody,
                mockData,
                auth: operationAuthValue,
                chosenServer,
                credentials: tryItCredentialsPolicy,
                corsProxy,
            });
            let response;
            try {
                response = yield fetch(...request);
            }
            catch (e) {
                setResponse({ error: new NetworkError(e.message) });
            }
            if (response) {
                const contentType = response.headers.get('Content-Type');
                const type = contentType ? getResponseType(contentType) : undefined;
                setResponse({
                    status: response.status,
                    bodyText: type !== 'image' ? yield response.text() : undefined,
                    blob: type === 'image' ? yield response.blob() : undefined,
                    contentType,
                });
            }
        }
        catch (e) {
            setResponse({ error: e });
        }
        finally {
            setLoading(false);
        }
    });
    const tryItPanelContents = (React__namespace.createElement(React__namespace.Fragment, null,
        ((_d = httpOperation.security) === null || _d === void 0 ? void 0 : _d.length) ? (React__namespace.createElement(TryItAuth, { onChange: setOperationAuthValue, operationSecurityScheme: (_e = httpOperation.security) !== null && _e !== void 0 ? _e : [], value: operationAuthValue })) : null,
        allParameters.length > 0 && (React__namespace.createElement(OperationParameters, { parameters: allParameters, values: parameterValuesWithDefaults, onChangeValue: updateParameterValue, validate: validateParameters })),
        formDataState.isFormDataBody ? (React__namespace.createElement(FormDataBody, { specification: formDataState.bodySpecification, values: bodyParameterValues, onChangeValues: setBodyParameterValues })) : mediaTypeContent ? (React__namespace.createElement(RequestBody, { examples: (_f = mediaTypeContent.examples) !== null && _f !== void 0 ? _f : [], requestBody: textRequestBody, onChange: setTextRequestBody })) : null,
        React__namespace.createElement(mosaic.Box, { className: "SendButtonHolder", p: 4, bg: { default: 'canvas-tint', inverted: 'transparent' } },
            React__namespace.createElement(mosaic.HStack, { alignItems: "center", spacing: 2 },
                React__namespace.createElement(mosaic.Button, { appearance: "primary", loading: loading, disabled: loading, onPress: handleSendRequest, size: "sm" }, "Send API Request"),
                servers.length > 1 && React__namespace.createElement(ServersDropdown, { servers: servers }),
                isMockingEnabled && (React__namespace.createElement(MockingButton, { options: mockingOptions, onOptionsChange: setMockingOptions, operation: httpOperation }))),
            validateParameters && hasRequiredButEmptyParameters && (React__namespace.createElement(mosaic.Box, { mt: 4, color: "danger-light", fontSize: "sm" },
                React__namespace.createElement(mosaic.Icon, { icon: freeSolidSvgIcons.faExclamationTriangle, className: "sl-mr-1" }),
                "You didn't provide all of the required parameters!")))));
    let tryItPanelElem;
    if (embeddedInMd) {
        tryItPanelElem = (React__namespace.createElement(mosaic.Panel, { hasChildPanels: true, isCollapsible: false, p: 0, className: "TryItPanel", rounded: true },
            React__namespace.createElement(mosaic.Panel.Titlebar, { bg: "canvas-200" },
                React__namespace.createElement(mosaic.Box, { fontWeight: "bold", color: !isDark ? HttpMethodColors[httpOperation.method] : undefined }, httpOperation.method.toUpperCase()),
                React__namespace.createElement(mosaic.Box, { fontWeight: "medium", ml: 2, textOverflow: "truncate", overflowX: "hidden" }, `${(chosenServer === null || chosenServer === void 0 ? void 0 : chosenServer.url) || ''}${httpOperation.path}`)),
            tryItPanelContents));
    }
    else {
        tryItPanelElem = (React__namespace.createElement(mosaic.Box, { className: "TryItPanel", rounded: "lg" }, tryItPanelContents));
    }
    return (React__namespace.createElement(mosaic.Box, { rounded: "lg", overflowY: "hidden", className: className },
        tryItPanelElem,
        requestData && embeddedInMd && React__namespace.createElement(RequestSamples, { request: requestData, embeddedInMd: true }),
        response && !('error' in response) && React__namespace.createElement(TryItResponse, { response: response }),
        response && 'error' in response && React__namespace.createElement(ResponseError, { state: response })));
};

const LoadMore = ({ loading, onClick }) => {
    return (React__namespace.createElement(mosaic.Flex, { flexDirection: "col", justifyContent: "center", alignItems: "center", style: { height: '400px' } },
        React__namespace.createElement(mosaic.Button, { "aria-label": "load-example", onPress: onClick, appearance: "minimal", loading: loading, disabled: loading }, loading ? 'Loading...' : 'Load examples'),
        React__namespace.createElement(mosaic.Text, { fontSize: "base", textAlign: "center" }, "Large examples are not rendered by default.")));
};

const ResponseExamples = ({ httpOperation, responseMediaType, responseStatusCode }) => {
    var _a;
    const [chosenExampleIndex, setChosenExampleIndex] = React__default["default"].useState(0);
    const [show, setShow] = React__default["default"].useState(false);
    const [loading, setLoading] = React__default["default"].useState(false);
    const response = httpOperation.responses.find(response => response.code === responseStatusCode);
    const responseContents = (_a = response === null || response === void 0 ? void 0 : response.contents) === null || _a === void 0 ? void 0 : _a.find(content => content.mediaType === responseMediaType);
    let userDefinedExamples;
    if ((responseContents === null || responseContents === void 0 ? void 0 : responseContents.examples) && (responseContents === null || responseContents === void 0 ? void 0 : responseContents.examples.length) > 0) {
        userDefinedExamples = responseContents === null || responseContents === void 0 ? void 0 : responseContents.examples;
    }
    const responseExample = useGenerateExampleFromMediaTypeContent(responseContents, chosenExampleIndex, {
        skipWriteOnly: true,
    });
    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => setShow(true), 50);
    };
    if (!userDefinedExamples && responseMediaType !== 'application/json')
        return null;
    if (!responseExample)
        return null;
    const examplesSelect = userDefinedExamples && userDefinedExamples.length > 1 && (React__default["default"].createElement(mosaic.Select, { "aria-label": "Response Example", value: String(chosenExampleIndex), options: userDefinedExamples.map((example, index) => ({ value: index, label: example.key })), onChange: (value) => setChosenExampleIndex(parseInt(String(value), 10)), size: "sm", triggerTextPrefix: "Response Example: " }));
    return (React__default["default"].createElement(mosaic.Panel, { rounded: true, isCollapsible: false },
        React__default["default"].createElement(mosaic.Panel.Titlebar, null, examplesSelect || React__default["default"].createElement(mosaic.Text, { color: "body" }, "Response Example")),
        React__default["default"].createElement(mosaic.Panel.Content, { p: 0 }, show || !exceedsSize(responseExample) ? (React__default["default"].createElement(mosaicCodeViewer.CodeViewer, { "aria-label": responseExample, noCopyButton: true, maxHeight: "500px", language: "json", value: responseExample, showLineNumbers: true, style: {
                '--fs-code': 12,
            } })) : (React__default["default"].createElement(LoadMore, { loading: loading, onClick: handleLoadMore })))));
};

const TryItWithRequestSamples = (_a) => {
    var { hideTryIt } = _a, props = tslib.__rest(_a, ["hideTryIt"]);
    const [requestData, setRequestData] = React__namespace.useState();
    return (React__namespace.createElement(mosaic.VStack, { spacing: 6 },
        !hideTryIt && (React__namespace.createElement(mosaic.InvertTheme, null,
            React__namespace.createElement(TryIt, Object.assign({}, props, { onRequestChange: setRequestData })))),
        requestData && React__namespace.createElement(RequestSamples, { request: requestData }),
        React__namespace.createElement(ResponseExamples, Object.assign({}, props))));
};

const TwoColumnLayout = ({ header, right, left, className }) => (React__default["default"].createElement(mosaic.VStack, { w: "full", className: className, spacing: 8 },
    header,
    React__default["default"].createElement(mosaic.Flex, null,
        React__default["default"].createElement(mosaic.Box, { w: 0, flex: 1 }, left),
        right && (React__default["default"].createElement(mosaic.Box, { ml: 16, pos: "relative", w: "2/5", style: { maxWidth: 500 } }, right)))));

const DeprecatedBadge = () => (React__default["default"].createElement(mosaic.Tooltip, { renderTrigger: React__default["default"].createElement(mosaic.Badge, { intent: "warning", icon: freeSolidSvgIcons.faExclamationCircle, "data-testid": "badge-deprecated" }, "Deprecated") }, "This operation has been marked as deprecated, which means it could be removed at some point in the future."));
const InternalBadge = ({ isHttpService }) => (React__default["default"].createElement(mosaic.Tooltip, { renderTrigger: React__default["default"].createElement(mosaic.Badge, { icon: freeSolidSvgIcons.faEye, "data-testid": "badge-internal", bg: "danger" }, "Internal") }, `This ${isHttpService ? 'operation' : 'model'} is marked as internal and won't be visible in public docs.`));
const VersionBadge = ({ value }) => (React__default["default"].createElement(mosaic.Badge, { appearance: "solid", size: "sm" }, enhanceVersionString(value)));
const enhanceVersionString = (version) => {
    if (version[0] === 'v')
        return version;
    return `v${version}`;
};

const oauthFlowNames = {
    implicit: 'Implicit',
    authorizationCode: 'Authorization Code',
    clientCredentials: 'Client Credentials',
    password: 'Password',
};
function getDefaultDescription(scheme) {
    switch (scheme.type) {
        case 'apiKey':
            return getApiKeyDescription(scheme.in, scheme.name);
        case 'http':
            switch (scheme.scheme) {
                case 'basic':
                    return getBasicAuthDescription();
                case 'bearer':
                    return getBearerAuthDescription();
                case 'digest':
                    return getDigestAuthDescription();
            }
        case 'oauth2':
            return getOAuthDescription(scheme);
    }
    return '';
}
function getApiKeyDescription(inProperty, name) {
    return `An API key is a token that you provide when making API calls. Include the token in a ${inProperty} parameter called \`${name}\`.

  Example: ${inProperty === 'query' ? `\`?${name}=123\`` : `\`${name}: 123\``}`;
}
function getBasicAuthDescription() {
    return `Basic authentication is a simple authentication scheme built into the HTTP protocol.
  To use it, send your HTTP requests with an Authorization header that contains the word Basic
  followed by a space and a base64-encoded string \`username:password\`.

  Example: \`Authorization: Basic ZGVtbzpwQDU1dzByZA==\``;
}
function getBearerAuthDescription() {
    return `Provide your bearer token in the Authorization header when making requests to protected resources.

  Example: \`Authorization: Bearer 123\``;
}
function getDigestAuthDescription() {
    return `Provide your encrypted digest scheme data in the Authorization header when making requests to protected resources.

  Example: \`Authorization: Digest username=guest, realm="test", nonce="2", uri="/uri", response="123"\``;
}
function getOAuthDescription(scheme) {
    const flows = keys__default["default"](scheme.flows);
    return flows.map(flow => getOAuthFlowDescription(oauthFlowNames[flow], scheme.flows[flow])).join('\n\n');
}
function getOAuthFlowDescription(title, flow) {
    let description = `**${title} OAuth Flow**`;
    description +=
        isOAuth2ImplicitFlow(flow) || isOauth2AuthorizationCodeFlow(flow)
            ? `\n\nAuthorize URL: ${flow.authorizationUrl}`
            : '';
    description +=
        isOauth2AuthorizationCodeFlow(flow) || isOauth2ClientCredentialsOrPasswordFlow(flow)
            ? `\n\nToken URL: ${flow.tokenUrl}`
            : '';
    description += flow.refreshUrl ? `\n\nRefresh URL: ${flow.refreshUrl}` : '';
    const scopes = entries__default["default"](flow.scopes);
    if (scopes.length) {
        description += `\n\nScopes:
${scopes.map(([key, value]) => `- \`${key}\` - ${value}`).join('\n')}`;
    }
    return description;
}

const SectionTitle = ({ title, id, size = 2, children }) => {
    return (React__namespace.createElement(mosaic.HStack, { spacing: 6 },
        React__namespace.createElement(mosaic.Box, { as: mosaic.LinkHeading, size: size, "aria-label": title, id: id || slugify(title) }, title),
        children));
};
const SectionSubtitle = props => {
    return React__namespace.createElement(SectionTitle, Object.assign({}, props, { size: 3 }));
};
const SubSectionPanel = ({ title, children, hasContent, rightComponent, defaultIsOpen = true, onChange, }) => {
    return (React__namespace.createElement(mosaic.Panel, { isCollapsible: hasContent, defaultIsOpen: defaultIsOpen, onChange: onChange, appearance: "outlined" },
        React__namespace.createElement(mosaic.Panel.Titlebar, { fontWeight: "medium", rightComponent: rightComponent },
            React__namespace.createElement("div", { role: "heading" }, title)),
        hasContent !== false && React__namespace.createElement(mosaic.Panel.Content, null, children)));
};

const isBodyEmpty = (body) => {
    if (!body)
        return true;
    const { contents = [], description } = body;
    return contents.length === 0 && !(description === null || description === void 0 ? void 0 : description.trim());
};
const Body = ({ body, onChange }) => {
    var _a;
    const refResolver = useInlineRefResolver();
    const [chosenContent, setChosenContent] = React__namespace.useState(0);
    React__namespace.useEffect(() => {
        onChange(chosenContent);
    }, [chosenContent]);
    if (isBodyEmpty(body))
        return null;
    const { contents = [], description } = body;
    const schema = (_a = contents[chosenContent]) === null || _a === void 0 ? void 0 : _a.schema;
    return (React__namespace.createElement(mosaic.VStack, { spacing: 6 },
        React__namespace.createElement(SectionSubtitle, { title: "Body", id: "request-body" }, contents.length > 0 && (React__namespace.createElement(mosaic.Flex, { flex: 1, justify: "end" },
            React__namespace.createElement(mosaic.Select, { "aria-label": "Request Body Content Type", value: String(chosenContent), onChange: (value) => setChosenContent(parseInt(String(value), 10)), options: contents.map((content, index) => ({ label: content.mediaType, value: index })), size: "sm" })))),
        description && React__namespace.createElement(MarkdownViewer, { markdown: description }),
        isJSONSchema(schema) && (React__namespace.createElement(jsonSchemaViewer.JsonSchemaViewer, { resolveRef: refResolver, schema: getOriginalObject(schema), viewMode: "write", renderRootTreeLines: true }))));
};
Body.displayName = 'HttpOperation.Body';

const isNodeExample = (example) => {
    return example.hasOwnProperty('value');
};

const readableStyles = {
    [types.HttpParamStyles.PipeDelimited]: 'Pipe separated values',
    [types.HttpParamStyles.SpaceDelimited]: 'Space separated values',
    [types.HttpParamStyles.CommaDelimited]: 'Comma separated values',
    [types.HttpParamStyles.Simple]: 'Comma separated values',
    [types.HttpParamStyles.Matrix]: 'Path style values',
    [types.HttpParamStyles.Label]: 'Label style values',
    [types.HttpParamStyles.Form]: 'Form style values',
};
const defaultStyle = {
    query: types.HttpParamStyles.Form,
    header: types.HttpParamStyles.Simple,
    path: types.HttpParamStyles.Simple,
    cookie: types.HttpParamStyles.Form,
};
const Parameters = ({ parameters, parameterType }) => {
    const schema = React__namespace.useMemo(() => httpOperationParamsToSchema({ parameters, parameterType }), [parameters, parameterType]);
    if (!schema)
        return null;
    return React__namespace.createElement(jsonSchemaViewer.JsonSchemaViewer, { schema: schema, disableCrumbs: true });
};
Parameters.displayName = 'HttpOperation.Parameters';
const httpOperationParamsToSchema = ({ parameters, parameterType }) => {
    var _a;
    if (!parameters || !parameters.length)
        return null;
    const schema = {
        properties: {},
        required: [],
    };
    const sortedParams = sortBy__default["default"](parameters, ['required', 'name']);
    for (const p of sortedParams) {
        if (!p.schema)
            continue;
        const { name, description, required, deprecated, examples, style } = p;
        const paramExamples = (examples === null || examples === void 0 ? void 0 : examples.map(example => {
            if (isNodeExample(example)) {
                return example.value;
            }
            return example.externalValue;
        })) || [];
        const schemaExamples = (_a = p.schema) === null || _a === void 0 ? void 0 : _a.examples;
        const schemaExamplesArray = Array.isArray(schemaExamples) ? schemaExamples : [];
        const paramDescription = description || p.schema.description;
        const paramDeprecated = deprecated || p.schema.deprecated;
        const paramStyle = style && defaultStyle[parameterType] !== style ? readableStyles[style] || style : undefined;
        schema.properties[p.name] = Object.assign(Object.assign({}, p.schema), { description: paramDescription, examples: [...paramExamples, ...schemaExamplesArray], deprecated: paramDeprecated, style: paramStyle });
        if (required) {
            schema.required.push(name);
        }
    }
    return schema;
};

const Request = ({ operation: { request, request: { path: pathParams = [], headers: headerParams = [], cookie: cookieParams = [], body, query: queryParams = [], } = {}, security, }, onChange, }) => {
    if (!request || typeof request !== 'object')
        return null;
    const bodyIsEmpty = isBodyEmpty(body);
    const securitySchemes = flatten__default["default"](security);
    const hasRequestData = Boolean(securitySchemes.length ||
        pathParams.length ||
        queryParams.length ||
        headerParams.length ||
        cookieParams.length ||
        !bodyIsEmpty);
    if (!hasRequestData)
        return null;
    return (React__namespace.createElement(mosaic.VStack, { spacing: 8 },
        React__namespace.createElement(SectionTitle, { title: "Request" }),
        securitySchemes.length > 0 && (React__namespace.createElement(mosaic.VStack, { spacing: 3 }, securitySchemes.map((scheme, i) => (React__namespace.createElement(SecurityPanel, { key: i, scheme: scheme, includeKey: shouldIncludeKey(securitySchemes, scheme.type) }))))),
        pathParams.length > 0 && (React__namespace.createElement(mosaic.VStack, { spacing: 5 },
            React__namespace.createElement(SectionSubtitle, { title: "Path Parameters" }),
            React__namespace.createElement(Parameters, { parameterType: "path", parameters: pathParams }))),
        queryParams.length > 0 && (React__namespace.createElement(mosaic.VStack, { spacing: 5 },
            React__namespace.createElement(SectionSubtitle, { title: "Query Parameters" }),
            React__namespace.createElement(Parameters, { parameterType: "query", parameters: queryParams }))),
        headerParams.length > 0 && (React__namespace.createElement(mosaic.VStack, { spacing: 5 },
            React__namespace.createElement(SectionSubtitle, { title: "Headers", id: "request-headers" }),
            React__namespace.createElement(Parameters, { parameterType: "header", parameters: headerParams }))),
        cookieParams.length > 0 && (React__namespace.createElement(mosaic.VStack, { spacing: 5 },
            React__namespace.createElement(SectionSubtitle, { title: "Cookies", id: "request-cookies" }),
            React__namespace.createElement(Parameters, { parameterType: "cookie", parameters: cookieParams }))),
        body && React__namespace.createElement(Body, { onChange: onChange, body: body })));
};
Request.displayName = 'HttpOperation.Request';
const schemeExpandedState = utils.atomWithStorage('HttpOperation_security_expanded', {});
const SecurityPanel = ({ scheme, includeKey }) => {
    const [expandedState, setExpanded] = jotai.useAtom(schemeExpandedState);
    return (React__namespace.createElement(SubSectionPanel, { title: `Security: ${getReadableSecurityName(scheme, includeKey)}`, defaultIsOpen: !!expandedState[scheme.key], onChange: isOpen => setExpanded(Object.assign(Object.assign({}, expandedState), { [scheme.key]: isOpen })) },
        React__namespace.createElement(MarkdownViewer, { style: { fontSize: 12 }, markdown: `${scheme.description || ''}\n\n` + getDefaultDescription(scheme) })));
};

const Responses = ({ responses: unsortedResponses, onStatusCodeChange, onMediaTypeChange }) => {
    var _a, _b;
    const responses = sortBy__default["default"](uniqBy__default["default"](unsortedResponses, r => r.code), r => r.code);
    const [activeResponseId, setActiveResponseId] = React__namespace.useState((_b = (_a = responses[0]) === null || _a === void 0 ? void 0 : _a.code) !== null && _b !== void 0 ? _b : '');
    React__namespace.useEffect(() => {
        onStatusCodeChange(activeResponseId);
    }, [activeResponseId]);
    if (!responses.length)
        return null;
    return (React__namespace.createElement(mosaic.VStack, { spacing: 8, as: mosaic.Tabs, selectedId: activeResponseId, onChange: setActiveResponseId, appearance: "pill" },
        React__namespace.createElement(SectionTitle, { title: "Responses" },
            React__namespace.createElement(mosaic.TabList, { density: "compact" }, responses.map(({ code }) => (React__namespace.createElement(mosaic.Tab, { key: code, id: code, intent: codeToIntentVal(code) }, code))))),
        React__namespace.createElement(mosaic.TabPanels, { p: 0 }, responses.map(response => (React__namespace.createElement(mosaic.TabPanel, { key: response.code, id: response.code },
            React__namespace.createElement(Response, { response: response, onMediaTypeChange: onMediaTypeChange })))))));
};
Responses.displayName = 'HttpOperation.Responses';
const Response = ({ response, onMediaTypeChange }) => {
    const { contents = [], headers = [], description } = response;
    const [chosenContent, setChosenContent] = React__namespace.useState(0);
    const refResolver = useInlineRefResolver();
    const responseContent = contents[chosenContent];
    const schema = responseContent === null || responseContent === void 0 ? void 0 : responseContent.schema;
    React__namespace.useEffect(() => {
        responseContent && onMediaTypeChange(responseContent.mediaType);
    }, [responseContent]);
    return (React__namespace.createElement(mosaic.VStack, { spacing: 8, pt: 8 },
        description && React__namespace.createElement(MarkdownViewer, { markdown: description }),
        headers.length > 0 && (React__namespace.createElement(mosaic.VStack, { spacing: 5 },
            React__namespace.createElement(SectionSubtitle, { title: "Headers", id: "response-headers" }),
            React__namespace.createElement(Parameters, { parameterType: "header", parameters: headers }))),
        contents.length > 0 && (React__namespace.createElement(React__namespace.Fragment, null,
            React__namespace.createElement(SectionSubtitle, { title: "Body", id: "response-body" },
                React__namespace.createElement(mosaic.Flex, { flex: 1, justify: "end" },
                    React__namespace.createElement(mosaic.Select, { "aria-label": "Response Body Content Type", value: String(chosenContent), onChange: (value) => setChosenContent(parseInt(String(value), 10)), options: contents.map((content, index) => ({ label: content.mediaType, value: index })), size: "sm" }))),
            schema && (React__namespace.createElement(jsonSchemaViewer.JsonSchemaViewer, { schema: getOriginalObject(schema), resolveRef: refResolver, viewMode: "read", parentCrumbs: ['responses', response.code], renderRootTreeLines: true }))))));
};
Response.displayName = 'HttpOperation.Response';
const codeToIntentVal = (code) => {
    const firstChar = code.charAt(0);
    switch (firstChar) {
        case '2':
            return 'success';
        case '4':
            return 'warning';
        case '5':
            return 'danger';
        default:
            return 'default';
    }
};

const HttpOperationComponent = React__namespace.memo(({ className, data: unresolvedData, layoutOptions, tryItCredentialsPolicy, tryItCorsProxy }) => {
    const data = useResolvedObject(unresolvedData);
    const mocking = React__namespace.useContext(MockingContext);
    const isDeprecated = !!data.deprecated;
    const isInternal = !!data.internal;
    const [responseMediaType, setResponseMediaType] = React__namespace.useState('');
    const [responseStatusCode, setResponseStatusCode] = React__namespace.useState('');
    const [requestBodyIndex, setTextRequestBodyIndex] = React__namespace.useState(0);
    const prettyName = (data.summary || data.iid || '').trim();
    const hasBadges = isDeprecated || isInternal;
    const header = (!(layoutOptions === null || layoutOptions === void 0 ? void 0 : layoutOptions.noHeading) || hasBadges) && (React__namespace.createElement(mosaic.VStack, { spacing: 5 },
        React__namespace.createElement(mosaic.HStack, { spacing: 5 },
            !(layoutOptions === null || layoutOptions === void 0 ? void 0 : layoutOptions.noHeading) && prettyName ? (React__namespace.createElement(mosaic.Heading, { size: 1, fontWeight: "semibold" }, prettyName)) : null,
            React__namespace.createElement(mosaic.HStack, { spacing: 2 },
                isDeprecated && React__namespace.createElement(DeprecatedBadge, null),
                isInternal && React__namespace.createElement(InternalBadge, { isHttpService: true }))),
        React__namespace.createElement(MethodPath, { method: data.method, path: data.path })));
    const description = (React__namespace.createElement(mosaic.VStack, { spacing: 10 },
        data.description && React__namespace.createElement(MarkdownViewer, { className: "HttpOperation__Description", markdown: data.description }),
        React__namespace.createElement(Request, { onChange: setTextRequestBodyIndex, operation: data }),
        data.responses && (React__namespace.createElement(Responses, { responses: data.responses, onMediaTypeChange: setResponseMediaType, onStatusCodeChange: setResponseStatusCode }))));
    const tryItPanel = !(layoutOptions === null || layoutOptions === void 0 ? void 0 : layoutOptions.hideTryItPanel) && (React__namespace.createElement(TryItWithRequestSamples, { httpOperation: data, responseMediaType: responseMediaType, responseStatusCode: responseStatusCode, requestBodyIndex: requestBodyIndex, hideTryIt: layoutOptions === null || layoutOptions === void 0 ? void 0 : layoutOptions.hideTryIt, tryItCredentialsPolicy: tryItCredentialsPolicy, mockUrl: mocking.hideMocking ? undefined : mocking.mockUrl, corsProxy: tryItCorsProxy }));
    return (React__namespace.createElement(TwoColumnLayout, { className: cn__default["default"]('HttpOperation', className), header: header, left: description, right: tryItPanel }));
});
HttpOperationComponent.displayName = 'HttpOperation.Component';
const HttpOperation = reactErrorBoundary.withErrorBoundary(HttpOperationComponent, {
    recoverableProps: ['data'],
});
function MethodPath({ method, path }) {
    const chosenServer = utils.useAtomValue(chosenServerAtom);
    let chosenServerUrl = '';
    if (chosenServer) {
        chosenServerUrl = chosenServer.url.endsWith('/') ? chosenServer.url.slice(0, -1) : chosenServer.url;
    }
    return (React__namespace.createElement(mosaic.Box, null,
        React__namespace.createElement(MethodPathInner, { method: method, path: path, chosenServerUrl: chosenServerUrl })));
}
function MethodPathInner({ method, path, chosenServerUrl }) {
    const isDark = mosaic.useThemeIsDark();
    const fullUrl = `${chosenServerUrl}${path}`;
    const pathElem = (React__namespace.createElement(mosaic.Flex, { overflowX: "hidden" },
        chosenServerUrl ? (React__namespace.createElement(mosaic.Box, { dir: "rtl", color: "muted", fontSize: "lg", textOverflow: "truncate", overflowX: "hidden" }, chosenServerUrl)) : null,
        React__namespace.createElement(mosaic.Box, { fontSize: "lg", fontWeight: "semibold", flex: 1 }, path)));
    return (React__namespace.createElement(mosaic.HStack, { spacing: 3, pl: 2.5, pr: 4, py: 2, bg: "canvas-50", rounded: "lg", fontFamily: "mono", display: "inline-flex", maxW: "full", title: fullUrl },
        React__namespace.createElement(mosaic.Box, { py: 1, px: 2.5, rounded: "lg", bg: !isDark ? HttpMethodColors[method] : 'canvas-100', color: !isDark ? 'on-primary' : 'body', fontSize: "lg", fontWeight: "semibold", textTransform: "uppercase" }, method),
        pathElem));
}

const PoweredByLink = ({ source, pathname, packageType, layout = 'sidebar' }) => {
    return (React__namespace.createElement(mosaic.Flex, { as: "a", align: "center", borderT: layout === 'stacked' ? undefined : true, px: layout === 'stacked' ? 1 : 4, py: 3, justify: layout === 'stacked' ? 'end' : undefined, href: `https://stoplight.io/?utm_source=${packageType}&utm_medium=${source}&utm_campaign=powered_by&utm_content=${pathname}`, target: "_blank", rel: "noopener noreferrer" },
        React__namespace.createElement(mosaic.Box, { as: mosaic.Icon, icon: freeSolidSvgIcons.faBolt, mr: 1, className: "fa-fw", style: { color: 'rgba(144, 97, 249, 1)' } }),
        React__namespace.createElement(mosaic.Box, null,
            "powered by\u00A0",
            React__namespace.createElement("strong", null, "Stoplight"))));
};

const AdditionalInfo = ({ termsOfService, contact, license }) => {
    const contactLink = (contact === null || contact === void 0 ? void 0 : contact.name) && (contact === null || contact === void 0 ? void 0 : contact.url)
        ? `[Contact ${contact.name}](${contact.url})`
        : (contact === null || contact === void 0 ? void 0 : contact.email)
            ? `[Contact ${contact.name || contact.email}](mailto:${contact.email})`
            : '';
    const licenseUrl = (license === null || license === void 0 ? void 0 : license.url) || `https://spdx.org/licenses/${license === null || license === void 0 ? void 0 : license.identifier}.html`;
    const licenseLink = (license === null || license === void 0 ? void 0 : license.name) && licenseUrl ? `[${license.name} License](${licenseUrl})` : '';
    const tosLink = termsOfService ? `[Terms of Service](${termsOfService})` : '';
    return contactLink || licenseLink || tosLink ? (React__default["default"].createElement(mosaic.Panel, { rounded: true, isCollapsible: false },
        React__default["default"].createElement(mosaic.Panel.Titlebar, { bg: "canvas-300" },
            React__default["default"].createElement("span", { role: "heading" }, "Additional Information")),
        React__default["default"].createElement(mosaic.Panel.Content, { p: 0 },
            React__default["default"].createElement(mosaic.Panel.Content, null,
                React__default["default"].createElement(MarkdownViewer, { style: { fontSize: 12 }, markdown: `${contactLink}\n \n${licenseLink}\n \n ${tosLink}` }))))) : null;
};

const ExportButton = ({ original, bundled }) => {
    const menuItems = React__namespace.useMemo(() => {
        const items = [
            Object.assign({ id: 'original', title: 'Original' }, original),
            Object.assign({ id: 'bundled', title: 'Bundled References' }, bundled),
        ];
        return items;
    }, [original, bundled]);
    return (React__namespace.createElement(mosaic.Box, null,
        React__namespace.createElement(mosaic.Menu, { "aria-label": "Export", items: menuItems, placement: "bottom right", renderTrigger: ({ isOpen }) => (React__namespace.createElement(mosaic.Button, { iconRight: "chevron-down", appearance: "default", ml: 2, active: isOpen, size: "sm" }, "Export")) })));
};

const SecuritySchemes = ({ schemes, defaultScheme, defaultCollapsed = false, }) => {
    return (React__default["default"].createElement(mosaic.Panel, { rounded: true, isCollapsible: defaultCollapsed },
        React__default["default"].createElement(mosaic.Panel.Titlebar, { bg: "canvas-300" },
            React__default["default"].createElement(mosaic.Box, { as: "span", role: "heading" }, "Security")),
        React__default["default"].createElement(mosaic.Panel.Content, { p: 0 }, sortBy__default["default"](schemes, 'type').map((scheme, i) => (React__default["default"].createElement(SecurityScheme, { key: i, scheme: scheme, defaultIsOpen: defaultScheme ? scheme.key === defaultScheme : i === 0, isCollapsible: schemes.length > 1, showSchemeKey: shouldIncludeKey(schemes, scheme.type) }))))));
};
const SecurityScheme = ({ scheme, defaultIsOpen, isCollapsible, showSchemeKey }) => {
    return (React__default["default"].createElement(mosaic.Panel, { defaultIsOpen: defaultIsOpen, isCollapsible: isCollapsible },
        React__default["default"].createElement(mosaic.Panel.Titlebar, null,
            React__default["default"].createElement(mosaic.Box, { as: "span", role: "heading" }, getReadableSecurityName(scheme, showSchemeKey))),
        React__default["default"].createElement(mosaic.Panel.Content, null,
            React__default["default"].createElement(MarkdownViewer, { style: { fontSize: 12 }, markdown: `${scheme.description || ''}\n\n` + getDefaultDescription(scheme) }))));
};

const ServerInfo = ({ servers, mockUrl }) => {
    const mocking = React__namespace.useContext(MockingContext);
    const showMocking = !mocking.hideMocking && mockUrl && isProperUrl(mockUrl);
    const $mockUrl = showMocking ? mockUrl || mocking.mockUrl : undefined;
    const serversToDisplay = getServersToDisplay(servers, $mockUrl);
    if (!showMocking && serversToDisplay.length === 0) {
        return null;
    }
    return (React__namespace.createElement(mosaic.InvertTheme, null,
        React__namespace.createElement(mosaic.Panel, { rounded: true, isCollapsible: false, className: "BaseURLContent", w: "full" },
            React__namespace.createElement(mosaic.Panel.Titlebar, { whitespace: "nowrap" }, "API Base URL"),
            React__namespace.createElement(mosaic.Box, { overflowX: "auto" },
                React__namespace.createElement(mosaic.Panel.Content, { w: "full", className: "sl-flex sl-flex-col" },
                    React__namespace.createElement(mosaic.VStack, { spacing: 1, divider: true }, serversToDisplay.map((server, index) => (React__namespace.createElement(ServerUrl, Object.assign({}, server, { key: index }))))))))));
};
const ServerUrl = ({ description, url, marginBottom = true }) => {
    const { onCopy, hasCopied } = mosaic.useClipboard(url);
    return (React__namespace.createElement(mosaic.Box, { whitespace: "nowrap" },
        React__namespace.createElement(mosaic.Text, { pr: 2, fontWeight: "bold" },
            description,
            ":"),
        React__namespace.createElement(mosaic.Tooltip, { placement: "right", renderTrigger: () => React__namespace.createElement(mosaic.Text, { "aria-label": description }, url) },
            !hasCopied && (React__namespace.createElement(mosaic.Box, { p: 1, onClick: onCopy, cursor: "pointer" },
                "Copy Server URL ",
                React__namespace.createElement(mosaic.Icon, { className: "sl-ml-1", icon: freeSolidSvgIcons.faCopy }))),
            hasCopied && (React__namespace.createElement(mosaic.Box, { p: 1 },
                "Copied Server URL ",
                React__namespace.createElement(mosaic.Icon, { className: "sl-ml-1", icon: freeSolidSvgIcons.faCheck }))))));
};

const HttpServiceComponent = React__namespace.memo(({ data, location = {}, layoutOptions, exportProps }) => {
    var _a, _b, _c, _d;
    const { search, pathname } = location;
    const mocking = React__namespace.useContext(MockingContext);
    const query = new URLSearchParams(search);
    return (React__namespace.createElement(mosaic.Box, { mb: 10 },
        data.name && !(layoutOptions === null || layoutOptions === void 0 ? void 0 : layoutOptions.noHeading) && (React__namespace.createElement(mosaic.Flex, { justifyContent: "between", alignItems: "center" },
            React__namespace.createElement(mosaic.Heading, { size: 1, mb: 4, fontWeight: "semibold" }, data.name),
            exportProps && !(layoutOptions === null || layoutOptions === void 0 ? void 0 : layoutOptions.hideExport) && React__namespace.createElement(ExportButton, Object.assign({}, exportProps)))),
        data.version && (React__namespace.createElement(mosaic.Box, { mb: 5 },
            React__namespace.createElement(VersionBadge, { value: data.version }))),
        pathname && (layoutOptions === null || layoutOptions === void 0 ? void 0 : layoutOptions.showPoweredByLink) && (React__namespace.createElement(PoweredByLink, { source: (_a = data.name) !== null && _a !== void 0 ? _a : 'no-title', pathname: pathname, packageType: "elements", layout: "stacked" })),
        React__namespace.createElement(mosaic.VStack, { spacing: 6 },
            React__namespace.createElement(ServerInfo, { servers: (_b = data.servers) !== null && _b !== void 0 ? _b : [], mockUrl: mocking.mockUrl }),
            React__namespace.createElement(mosaic.Box, null, ((_c = data.securitySchemes) === null || _c === void 0 ? void 0 : _c.length) && (React__namespace.createElement(SecuritySchemes, { schemes: data.securitySchemes, defaultScheme: query.get('security') || undefined }))),
            React__namespace.createElement(mosaic.Box, null, (((_d = data.contact) === null || _d === void 0 ? void 0 : _d.email) || data.license || data.termsOfService) && (React__namespace.createElement(AdditionalInfo, { contact: data.contact, license: data.license, termsOfService: data.termsOfService })))),
        data.description && React__namespace.createElement(MarkdownViewer, { className: "sl-my-5", markdown: data.description })));
});
HttpServiceComponent.displayName = 'HttpService.Component';
const HttpService = reactErrorBoundary.withErrorBoundary(HttpServiceComponent, { recoverableProps: ['data'] });

const ModelComponent = ({ data: unresolvedData, className, nodeTitle, layoutOptions, exportProps, }) => {
    var _a;
    const [chosenExampleIndex, setChosenExampleIndex] = React__namespace.useState(0);
    const [show, setShow] = React__namespace.useState(false);
    const [loading, setLoading] = React__namespace.useState(false);
    const resolveRef = useInlineRefResolver();
    const data = useResolvedObject(unresolvedData);
    const title = (_a = data.title) !== null && _a !== void 0 ? _a : nodeTitle;
    const isInternal = !!data['x-internal'];
    const handleLoadMorePress = () => {
        setLoading(true);
        setTimeout(() => setShow(true), 50);
    };
    const examples = React__namespace.useMemo(() => generateExamplesFromJsonSchema(data), [data]);
    const shouldDisplayHeader = !(layoutOptions === null || layoutOptions === void 0 ? void 0 : layoutOptions.noHeading) && (title !== undefined || (exportProps && !(layoutOptions === null || layoutOptions === void 0 ? void 0 : layoutOptions.hideExport)));
    const header = (shouldDisplayHeader || isInternal) && (React__namespace.createElement(mosaic.Flex, { justifyContent: "between", alignItems: "center" },
        React__namespace.createElement(mosaic.HStack, { spacing: 5 },
            title && (React__namespace.createElement(mosaic.Heading, { size: 1, fontWeight: "semibold" }, title)),
            React__namespace.createElement(mosaic.HStack, { spacing: 2 }, isInternal && React__namespace.createElement(InternalBadge, null))),
        exportProps && !(layoutOptions === null || layoutOptions === void 0 ? void 0 : layoutOptions.hideExport) && React__namespace.createElement(ExportButton, Object.assign({}, exportProps))));
    const description = (React__namespace.createElement(mosaic.VStack, { spacing: 10 },
        data.description && data.type === 'object' && React__namespace.createElement(MarkdownViewer, { role: "textbox", markdown: data.description }),
        React__namespace.createElement(jsonSchemaViewer.JsonSchemaViewer, { resolveRef: resolveRef, schema: getOriginalObject(data) })));
    const examplesSelect = examples.length > 1 && (React__namespace.createElement(mosaic.Select, { "aria-label": "Example", value: String(chosenExampleIndex), options: examples.map(({ label }, index) => ({ value: index, label })), onChange: (value) => setChosenExampleIndex(parseInt(String(value), 10)), size: "sm", triggerTextPrefix: "Example: " }));
    const modelExamples = !(layoutOptions === null || layoutOptions === void 0 ? void 0 : layoutOptions.hideModelExamples) && (React__namespace.createElement(mosaic.Panel, { rounded: true, isCollapsible: false },
        React__namespace.createElement(mosaic.Panel.Titlebar, null, examplesSelect || (React__namespace.createElement(mosaic.Text, { color: "body", role: "heading" }, "Example"))),
        React__namespace.createElement(mosaic.Panel.Content, { p: 0 }, show || !exceedsSize(examples[chosenExampleIndex].data) ? (React__namespace.createElement(mosaicCodeViewer.CodeViewer, { "aria-label": examples[chosenExampleIndex].data, noCopyButton: true, maxHeight: "500px", language: "json", value: examples[chosenExampleIndex].data, showLineNumbers: true })) : (React__namespace.createElement(LoadMore, { loading: loading, onClick: handleLoadMorePress })))));
    return (React__namespace.createElement(TwoColumnLayout, { className: cn__default["default"]('Model', className), header: header, left: description, right: modelExamples }));
};
const Model = reactErrorBoundary.withErrorBoundary(ModelComponent, { recoverableProps: ['data'] });

const Docs = React__namespace.memo((_a) => {
    var { nodeType, nodeData, useNodeForRefResolving = false, refResolver } = _a, commonProps = tslib.__rest(_a, ["nodeType", "nodeData", "useNodeForRefResolving", "refResolver"]);
    const parsedNode = useParsedData(nodeType, nodeData);
    if (!parsedNode) {
        return null;
    }
    const parsedDocs = React__namespace.createElement(ParsedDocs, Object.assign({ node: parsedNode }, commonProps));
    if (useNodeForRefResolving) {
        return (React__namespace.createElement(InlineRefResolverProvider, { document: parsedNode.data, resolver: refResolver }, parsedDocs));
    }
    return parsedDocs;
});
const ParsedDocs = (_a) => {
    var { node } = _a, commonProps = tslib.__rest(_a, ["node"]);
    switch (node.type) {
        case 'article':
            return React__namespace.createElement(Article, Object.assign({ data: node.data }, commonProps));
        case 'http_operation':
            return React__namespace.createElement(HttpOperation, Object.assign({ data: node.data }, commonProps));
        case 'http_service':
            return React__namespace.createElement(HttpService, Object.assign({ data: node.data }, commonProps));
        case 'model':
            return React__namespace.createElement(Model, Object.assign({ data: node.data }, commonProps));
        default:
            return null;
    }
};

const MAX_CONTENT_WIDTH = 1800;
const SIDEBAR_WIDTH = 300;
const SidebarLayout = React__namespace.forwardRef(({ sidebar, children, maxContentWidth = MAX_CONTENT_WIDTH, sidebarWidth = SIDEBAR_WIDTH }, ref) => {
    const scrollRef = React__namespace.useRef(null);
    const { pathname } = reactRouterDom.useLocation();
    React__namespace.useEffect(() => {
        var _a;
        (_a = scrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo(0, 0);
    }, [pathname]);
    return (React__namespace.createElement(mosaic.Flex, { ref: ref, className: "sl-elements-api", pin: true, h: "full" },
        React__namespace.createElement(mosaic.Flex, { direction: "col", bg: { default: 'canvas-50', dark: 'transparent' }, borderR: true, pt: 8, pos: "sticky", pinY: true, overflowY: "auto", style: {
                width: `calc((100% - ${maxContentWidth}px) / 2 + ${sidebarWidth}px)`,
                paddingLeft: `calc((100% - ${maxContentWidth}px) / 2)`,
                minWidth: `${sidebarWidth}px`,
            } }, sidebar),
        React__namespace.createElement(mosaic.Box, { ref: scrollRef, bg: "canvas", px: 24, flex: 1, overflowY: "auto", overflowX: "hidden", w: "full" },
            React__namespace.createElement(mosaic.Box, { style: { maxWidth: `${maxContentWidth - sidebarWidth}px` }, py: 16 }, children))));
});

const Logo = ({ logo }) => {
    var _a;
    return (React__namespace.createElement(mosaic.Box, { display: "inline", mr: 3, rounded: "lg", overflowY: "hidden", overflowX: "hidden", style: { backgroundColor: (_a = logo.backgroundColor) !== null && _a !== void 0 ? _a : 'transparent' } }, logo.href ? (React__namespace.createElement("a", { href: logo.href, target: "_blank", rel: "noopener noreferrer" },
        React__namespace.createElement("img", { src: logo.url, height: "30px", width: "30px", alt: logo.altText }))) : (React__namespace.createElement("img", { src: logo.url, height: "30px", width: "30px", alt: logo.altText }))));
};

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const PersistenceContextProvider = jotai.Provider;
function withPersistenceBoundary(WrappedComponent) {
    const WithPersistenceBoundary = props => {
        return (React__namespace.createElement(PersistenceContextProvider, null,
            React__namespace.createElement(WrappedComponent, Object.assign({}, props))));
    };
    WithPersistenceBoundary.displayName = `withPersistenceBoundary(${getDisplayName(WrappedComponent)})`;
    return WithPersistenceBoundary;
}

function useParsedValue(value) {
    return React__namespace.useMemo(() => {
        let parsedValue = value;
        if (typeof value === 'string') {
            try {
                parsedValue = yaml.parse(value);
            }
            catch (error) {
            }
        }
        return parsedValue;
    }, [value]);
}

function isPartialHttpRequest(maybeHttpRequest) {
    return (isObject__default["default"](maybeHttpRequest) &&
        'method' in maybeHttpRequest &&
        typeof maybeHttpRequest['method'] === 'string' &&
        'url' in maybeHttpRequest &&
        typeof maybeHttpRequest['url'] === 'string');
}
const SchemaAndDescription = ({ title: titleProp, schema }) => {
    const resolveRef = useInlineRefResolver();
    const title = titleProp !== null && titleProp !== void 0 ? titleProp : schema.title;
    return (React__default["default"].createElement(mosaic.Box, { py: 2 },
        title && (React__default["default"].createElement(mosaic.Flex, { alignItems: "center", p: 2 },
            React__default["default"].createElement(mosaic.Icon, { icon: NodeTypeIconDefs[types.NodeType.Model], color: NodeTypeColors[types.NodeType.Model] }),
            React__default["default"].createElement(mosaic.Box, { color: "muted", px: 2 }, title))),
        React__default["default"].createElement(jsonSchemaViewer.JsonSchemaViewer, { resolveRef: resolveRef, schema: getOriginalObject(schema) })));
};
const CodeComponent = props => {
    const { title, jsonSchema, http, children } = props;
    const value = String(Array.isArray(children) ? children[0] : children);
    const parsedValue = useParsedValue(value);
    if (jsonSchema) {
        if (!isJSONSchema(parsedValue)) {
            return null;
        }
        return React__default["default"].createElement(SchemaAndDescription, { title: title, schema: parsedValue });
    }
    if (http) {
        if (!isObject__default["default"](parsedValue) || (!isPartialHttpRequest(parsedValue) && !isHttpOperation(parsedValue))) {
            return null;
        }
        return (React__default["default"].createElement(PersistenceContextProvider, null,
            React__default["default"].createElement(TryIt, { httpOperation: isHttpOperation(parsedValue) ? parsedValue : parseHttpRequest(parsedValue), embeddedInMd: true })));
    }
    const DefaultCode = markdownViewer.DefaultSMDComponents.code;
    return React__default["default"].createElement(DefaultCode, Object.assign({}, props));
};
function parseHttpRequest(data) {
    const uri = URI__default["default"](data.url);
    const pathParam = data.url.match(/[^{\}]+(?=})/g);
    return {
        id: '?http-operation-id?',
        method: data.method,
        path: uri.is('absolute') ? uri.path() : data.url,
        servers: [{ url: uri.is('absolute') ? uri.origin() : data.baseUrl || '' }],
        request: Object.assign({ query: Object.entries(data.query || {}).map(([key, value]) => {
                const defaultVal = Array.isArray(value) ? value[0] : value;
                return {
                    name: key,
                    style: types.HttpParamStyles.Form,
                    schema: { default: defaultVal },
                    required: isHttpRequestParamRequired(defaultVal),
                };
            }), headers: Object.entries(data.headers || {}).map(([key, value]) => ({
                name: key,
                style: types.HttpParamStyles.Simple,
                schema: { default: value },
                required: isHttpRequestParamRequired(value),
            })), path: pathParam === null || pathParam === void 0 ? void 0 : pathParam.map(name => ({
                name,
                style: types.HttpParamStyles.Simple,
                required: true,
            })) }, (data.body
            ? {
                body: {
                    contents: [
                        {
                            mediaType: 'application/json',
                            schema: { default: data.body },
                        },
                    ],
                },
            }
            : null)),
        responses: [],
    };
}
function isHttpRequestParamRequired(value) {
    return typeof value !== 'undefined';
}

const MarkdownComponentsProvider = ({ value, children }) => {
    return React__namespace.createElement(markdownViewer.MarkdownViewerProvider, { components: Object.assign({ code: CodeComponent }, value) }, children);
};

const externalRegex = new RegExp('^(?:[a-z]+:)?//', 'i');
const ReactRouterMarkdownLink = ({ title, to, href: _href, children, }) => {
    const href = to || _href;
    const isExternal = href !== undefined && externalRegex.test(href);
    if (isExternal) {
        return (React__default["default"].createElement("a", { target: "_blank", rel: "noreferrer noopener", href: href, title: title }, children));
    }
    return (React__default["default"].createElement(reactRouterHashLink.HashLink, { to: href, title: title }, children));
};

const NODE_TYPE_TITLE_ICON = {
    http_service: freeSolidSvgIcons.faCloud,
};
const NODE_TYPE_META_ICON = {
    model: freeSolidSvgIcons.faCube,
};
const NODE_TYPE_ICON_COLOR = {
    model: 'warning',
};
const NODE_META_COLOR = {
    get: 'success',
    post: 'primary',
    put: 'warning',
    patch: 'warning',
    delete: 'danger',
};

function getHtmlIdFromItemId(id) {
    return `sl-toc-${id}`;
}
function isGroupOpenByDefault(depth, item, activeId, maxDepthOpenByDefault = 0) {
    return (depth < maxDepthOpenByDefault ||
        (activeId && (('id' in item && activeId === item.id) || hasActiveItem(item.items, activeId))));
}
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
        if ((isNode(item) || isNodeGroup(item)) && item.slug) {
            return item;
        }
        if (isGroup(item) || isNodeGroup(item)) {
            const firstNode = findFirstNode(item.items);
            if (firstNode) {
                return firstNode;
            }
        }
        continue;
    }
    return;
}
function isDivider(item) {
    return Object.keys(item).length === 1 && 'title' in item;
}
function isGroup(item) {
    return Object.keys(item).length === 2 && 'title' in item && 'items' in item;
}
function isNodeGroup(item) {
    return 'title' in item && 'items' in item && 'slug' in item && 'id' in item && 'meta' in item && 'type' in item;
}
function isNode(item) {
    return 'title' in item && 'slug' in item && 'id' in item && 'meta' in item && 'type' in item;
}
function isExternalLink(item) {
    return Object.keys(item).length === 2 && 'title' in item && 'url' in item;
}

const ActiveIdContext = React__namespace.createContext(undefined);
const LinkContext = React__namespace.createContext(undefined);
const TableOfContents = React__namespace.memo(({ tree, activeId, Link, maxDepthOpenByDefault, externalScrollbar = false, onLinkClick }) => {
    const container = React__namespace.useRef(null);
    const child = React__namespace.useRef(null);
    React__namespace.useEffect(() => {
        const tocHasScrollbar = externalScrollbar ||
            (container.current && child.current && container.current.offsetHeight < child.current.offsetHeight);
        if (activeId && typeof window !== 'undefined' && tocHasScrollbar) {
            const elem = window.document.getElementById(getHtmlIdFromItemId(activeId));
            if (elem && 'scrollIntoView' in elem) {
                elem.scrollIntoView({ block: 'center' });
            }
        }
    }, []);
    return (React__namespace.createElement(mosaic.Box, { ref: container, w: "full", overflowY: "auto" },
        React__namespace.createElement(mosaic.Box, { ref: child, my: 3 },
            React__namespace.createElement(LinkContext.Provider, { value: Link },
                React__namespace.createElement(ActiveIdContext.Provider, { value: activeId }, tree.map((item, key) => {
                    if (isDivider(item)) {
                        return React__namespace.createElement(Divider, { key: key, item: item });
                    }
                    return (React__namespace.createElement(GroupItem, { key: key, item: item, depth: 0, maxDepthOpenByDefault: maxDepthOpenByDefault, onLinkClick: onLinkClick }));
                }))))));
});
const Divider = React__namespace.memo(({ item }) => {
    return (React__namespace.createElement(mosaic.Box, { pl: 4, mb: 2, mt: 6, textTransform: "uppercase", fontSize: "sm", lineHeight: "relaxed", letterSpacing: "wide", fontWeight: "bold" }, item.title));
});
const GroupItem = React__namespace.memo(({ item, depth, maxDepthOpenByDefault, onLinkClick }) => {
    if (isExternalLink(item)) {
        return (React__namespace.createElement(mosaic.Box, { as: "a", href: item.url, target: "_blank", rel: "noopener noreferrer", display: "block" },
            React__namespace.createElement(Item, { depth: depth, title: item.title, meta: React__namespace.createElement(mosaic.Box, { as: mosaic.Icon, icon: ['fas', 'external-link'] }) })));
    }
    else if (isGroup(item) || isNodeGroup(item)) {
        return React__namespace.createElement(Group, { depth: depth, item: item, maxDepthOpenByDefault: maxDepthOpenByDefault, onLinkClick: onLinkClick });
    }
    else if (isNode(item)) {
        return (React__namespace.createElement(Node, { depth: depth, item: item, onLinkClick: onLinkClick, meta: item.meta ? (React__namespace.createElement(mosaic.Box, { color: NODE_META_COLOR[item.meta], textTransform: "uppercase", fontWeight: "medium" }, item.meta)) : (NODE_TYPE_META_ICON[item.type] && (React__namespace.createElement(mosaic.Flex, { alignItems: "center" },
                item.version && React__namespace.createElement(Version, { value: item.version }),
                React__namespace.createElement(mosaic.Box, { as: mosaic.Icon, color: NODE_TYPE_ICON_COLOR[item.type], icon: NODE_TYPE_META_ICON[item.type] })))) }));
    }
    return null;
});
const Group = React__namespace.memo(({ depth, item, maxDepthOpenByDefault, onLinkClick = () => { } }) => {
    const activeId = React__namespace.useContext(ActiveIdContext);
    const [isOpen, setIsOpen] = React__namespace.useState(() => {
        return isGroupOpenByDefault(depth, item, activeId, maxDepthOpenByDefault);
    });
    const handleClick = (e, forceOpen) => {
        setIsOpen(forceOpen ? true : !isOpen);
    };
    const meta = (React__namespace.createElement(mosaic.Flex, { alignItems: "center" },
        isNodeGroup(item) && item.version && React__namespace.createElement(Version, { value: item.version }),
        React__namespace.createElement(mosaic.Box, { as: mosaic.Icon, icon: ['fas', isOpen ? 'chevron-down' : 'chevron-right'], color: "muted", fixedWidth: true, onClick: (e) => {
                e.stopPropagation();
                e.preventDefault();
                handleClick();
            } })));
    let elem;
    if (isNodeGroup(item)) {
        elem = React__namespace.createElement(Node, { depth: depth, item: item, meta: meta, onClick: handleClick, onLinkClick: onLinkClick });
    }
    else {
        elem = React__namespace.createElement(Item, { title: item.title, meta: meta, onClick: handleClick, depth: depth });
    }
    return (React__namespace.createElement(React__namespace.Fragment, null,
        elem,
        isOpen &&
            item.items.map((groupItem, key) => {
                return React__namespace.createElement(GroupItem, { key: key, item: groupItem, depth: depth + 1, onLinkClick: onLinkClick });
            })));
});
const Item = React__namespace.memo(({ depth, isActive, id, title, meta, icon, onClick }) => {
    return (React__namespace.createElement(mosaic.Flex, { id: id, bg: isActive ? 'primary-tint' : { hover: 'primary-tint' }, cursor: "pointer", pl: 4 + depth * 4, pr: 4, h: "md", align: "center", userSelect: "none", onClick: onClick, title: title },
        icon,
        React__namespace.createElement(mosaic.Box, { alignItems: "center", flex: 1, mr: meta ? 1.5 : undefined, ml: icon && 1.5, textOverflow: "truncate" }, title),
        React__namespace.createElement(mosaic.Flex, { alignItems: "center", fontSize: "xs" }, meta)));
});
const Node = React__namespace.memo(({ item, depth, meta, onClick, onLinkClick = () => { } }) => {
    const activeId = React__namespace.useContext(ActiveIdContext);
    const isActive = activeId === item.id;
    const LinkComponent = React__namespace.useContext(LinkContext);
    const handleClick = (e) => {
        if (isActive) {
            e.stopPropagation();
            e.preventDefault();
        }
        else {
            onLinkClick();
        }
        if (onClick) {
            onClick(e, isActive ? undefined : true);
        }
    };
    return (React__namespace.createElement(mosaic.Box, { as: LinkComponent, to: item.slug, display: "block", textDecoration: "no-underline", className: "ElementsTableOfContentsItem" },
        React__namespace.createElement(Item, { id: getHtmlIdFromItemId(item.id), isActive: isActive, depth: depth, title: item.title, icon: NODE_TYPE_TITLE_ICON[item.type] && (React__namespace.createElement(mosaic.Box, { as: mosaic.Icon, color: NODE_TYPE_ICON_COLOR[item.type], icon: NODE_TYPE_TITLE_ICON[item.type] })), meta: meta, onClick: handleClick })));
});
const Version = ({ value }) => {
    return (React__namespace.createElement(mosaic.Box, { mr: 2 },
        React__namespace.createElement(VersionBadge, { value: value })));
};

const NonIdealState = ({ description, icon, title }) => {
    return (React__namespace.createElement(mosaic.Flex, { flexDirection: "col", alignItems: "center", justifyContent: "center", textAlign: "center", w: "full", h: "full" },
        React__namespace.createElement(mosaic.Box, { as: mosaic.Icon, icon: icon || freeSolidSvgIcons.faExclamationTriangle, color: "light", fontSize: "6xl", mb: 4 }),
        React__namespace.createElement(mosaic.Heading, { size: 4, mb: 4 }, title),
        React__namespace.createElement(mosaic.Text, null, description)));
};

function withMosaicProvider(WrappedComponent) {
    const WithMosaicProvider = (props) => {
        try {
            const mosaicContext = mosaic.useMosaicContext();
            if (mosaicContext === null || mosaicContext === void 0 ? void 0 : mosaicContext.providerId) {
                return React__default["default"].createElement(WrappedComponent, Object.assign({}, props));
            }
        }
        catch (_a) {
        }
        return (React__default["default"].createElement(mosaic.Provider, { style: { height: '100%' } },
            React__default["default"].createElement(WrappedComponent, Object.assign({}, props))));
    };
    WithMosaicProvider.displayName = `WithMosaicProvider(${getDisplayName(WrappedComponent)})`;
    return WithMosaicProvider;
}

const queryClient = new reactQuery.QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            staleTime: 15 * 1000,
        },
    },
});
function withQueryClientProvider(WrappedComponent) {
    const WithQueryClientProvider = (props) => {
        try {
            reactQuery.useQueryClient();
            return React__default["default"].createElement(WrappedComponent, Object.assign({}, props));
        }
        catch (_a) {
        }
        return (React__default["default"].createElement(reactQuery.QueryClientProvider, { client: queryClient },
            React__default["default"].createElement(WrappedComponent, Object.assign({}, props))));
    };
    WithQueryClientProvider.displayName = `WithQueryClientProvider(${getDisplayName(WrappedComponent)})`;
    return WithQueryClientProvider;
}

const RouterComponent = {
    history: reactRouterDom.BrowserRouter,
    memory: reactRouterDom.MemoryRouter,
    hash: reactRouterDom.HashRouter,
    static: reactRouterDom.StaticRouter,
};
const useRouter = (router, basePath, staticRouterPath) => {
    const Router = RouterComponent[router];
    const routerProps = Object.assign(Object.assign({}, (router !== 'memory' && { basename: basePath })), (router === 'static' && { location: staticRouterPath }));
    return {
        Router,
        routerProps,
    };
};

function withRouter(WrappedComponent) {
    const WithRouter = (props) => {
        var _a, _b, _c;
        const basePath = (_a = props.basePath) !== null && _a !== void 0 ? _a : '/';
        const staticRouterPath = (_b = props.staticRouterPath) !== null && _b !== void 0 ? _b : '';
        const { Router, routerProps } = useRouter((_c = props.router) !== null && _c !== void 0 ? _c : 'history', basePath, staticRouterPath);
        return (React__namespace.createElement(Router, Object.assign({}, routerProps, { key: basePath }),
            React__namespace.createElement(reactRouterDom.Route, { path: "/" },
                React__namespace.createElement(MarkdownComponentsProvider, { value: { a: ReactRouterMarkdownLink } },
                    React__namespace.createElement(WrappedComponent, Object.assign({}, props))))));
    };
    WithRouter.displayName = `WithRouter(${getDisplayName(WrappedComponent)})`;
    return WithRouter;
}

function useBundleRefsIntoDocument(document, options) {
    const [bundledData, setBundledData] = React__namespace.useState(document);
    const baseUrl = options === null || options === void 0 ? void 0 : options.baseUrl;
    React__namespace.useEffect(() => {
        if (!isObject__default["default"](document)) {
            setBundledData(document);
            return;
        }
        let isMounted = true;
        doBundle(document, baseUrl)
            .then(res => {
            if (isMounted) {
                setBundledData(Object.assign({}, res));
            }
        })
            .catch(reason => {
            var _a;
            if (typeof reason === 'object' && reason !== null && 'files' in reason) {
                if (isMounted) {
                    setBundledData(Object.assign({}, reason.files.schema));
                }
            }
            else {
                console.warn(`Could bundle: ${(_a = reason === null || reason === void 0 ? void 0 : reason.message) !== null && _a !== void 0 ? _a : 'Unknown error'}`);
            }
        });
        return () => {
            isMounted = false;
        };
    }, [document, baseUrl]);
    return bundledData;
}
const commonBundleOptions = { continueOnError: true };
const doBundle = (data, baseUrl) => {
    if (!baseUrl) {
        return $RefParser__default["default"].bundle(data, commonBundleOptions);
    }
    else {
        return $RefParser__default["default"].bundle(baseUrl, data, commonBundleOptions);
    }
};

const scopeClassName = 'sl-elements';
class Styled extends React__namespace.Component {
    getChildContext() {
        return {
            blueprintPortalClassName: scopeClassName,
        };
    }
    render() {
        return (React__namespace.createElement(mosaic.Box, { className: "sl-elements sl-antialiased", fontFamily: "ui", fontSize: "base", color: "body", h: "full" }, this.props.children));
    }
}
Styled.childContextTypes = {
    blueprintPortalClassName: PropTypes__namespace.string,
};
function withStyles(Component) {
    const Inner = props => {
        return (React__namespace.createElement(Styled, null,
            React__namespace.createElement(Component, Object.assign({}, props))));
    };
    Inner.displayName = `withStyles(${getDisplayName(Component)})`;
    return Inner;
}

const createElementClass = (Component, propDescriptors) => {
    return class extends HTMLElement {
        constructor() {
            super();
            this._props = {};
            Object.defineProperties(this, mapValues__default["default"](propDescriptors, (_, key) => ({
                get: () => {
                    return this._props[key];
                },
                set: (newValue) => {
                    if (this._props[key] === newValue) {
                        return;
                    }
                    this._props[key] = newValue;
                    this._renderComponent();
                    this._safeWriteAttribute(key, newValue);
                },
                enumerable: true,
            })));
        }
        static get observedAttributes() {
            return Object.keys(propDescriptors);
        }
        attributeChangedCallback(name, oldValue, newValue) {
            if (propDescriptors[name]) {
                const newPropValue = this._safeReadAttribute(name);
                if (!isEqual__default["default"](this._props[name], newPropValue)) {
                    this._props[name] = newPropValue;
                    this._renderComponent();
                }
            }
        }
        connectedCallback() {
            this._mountPoint = document.createElement('div');
            this._mountPoint.style.height = '100%';
            this.appendChild(this._mountPoint);
            for (const key in propDescriptors) {
                if (propDescriptors.hasOwnProperty(key)) {
                    this._props[key] = this._safeReadAttribute(key);
                }
            }
            this._renderComponent();
        }
        disconnectedCallback() {
            if (this._mountPoint) {
                ReactDOM__namespace.unmountComponentAtNode(this._mountPoint);
                this.removeChild(this._mountPoint);
                this._mountPoint = undefined;
            }
        }
        _safeReadAttribute(attrName) {
            if (!this.hasAttribute(attrName) || !propDescriptors[attrName]) {
                return undefined;
            }
            const attrValue = this.getAttribute(attrName);
            const type = propDescriptors[attrName].type;
            if (type === 'string') {
                return (attrValue !== null && attrValue !== void 0 ? attrValue : undefined);
            }
            if (type === 'number') {
                return (attrValue ? Number(attrValue) : undefined);
            }
            if (type === 'boolean') {
                return (attrValue ? Boolean(attrValue) : undefined);
            }
            if (type === 'object') {
                return json.safeParse(attrValue !== null && attrValue !== void 0 ? attrValue : '');
            }
            return undefined;
        }
        _safeWriteAttribute(attrName, newValue) {
            if (!propDescriptors[attrName]) {
                return;
            }
            if (!newValue) {
                this.removeAttribute(attrName);
                return;
            }
            const type = propDescriptors[attrName].type;
            this.setAttribute(attrName, stringifyValue(newValue));
            function stringifyValue(val) {
                if (type === 'string' || type === 'number' || type === 'boolean') {
                    return String(val);
                }
                if (type === 'object') {
                    return json.safeStringify(val) || '';
                }
                return '';
            }
        }
        _renderComponent() {
            if (this._mountPoint) {
                const props = mapValues__default["default"](propDescriptors, (descriptor, key) => { var _a; return (_a = this._props[key]) !== null && _a !== void 0 ? _a : descriptor.defaultValue; });
                ReactDOM__namespace.render(React__namespace.createElement(Component, props), this._mountPoint);
            }
        }
    };
};

Object.defineProperty(exports, 'DefaultSMDComponents', {
  enumerable: true,
  get: function () { return markdownViewer.DefaultSMDComponents; }
});
exports.DeprecatedBadge = DeprecatedBadge;
exports.Docs = Docs;
exports.ExportButton = ExportButton;
exports.HttpMethodColors = HttpMethodColors;
exports.InlineRefResolverProvider = InlineRefResolverProvider;
exports.Logo = Logo;
exports.MarkdownComponentsProvider = MarkdownComponentsProvider;
exports.MockingProvider = MockingProvider;
exports.NodeTypeColors = NodeTypeColors;
exports.NodeTypeIconDefs = NodeTypeIconDefs;
exports.NodeTypePrettyName = NodeTypePrettyName;
exports.NonIdealState = NonIdealState;
exports.ParsedDocs = ParsedDocs;
exports.PersistenceContextProvider = PersistenceContextProvider;
exports.PoweredByLink = PoweredByLink;
exports.ReactRouterMarkdownLink = ReactRouterMarkdownLink;
exports.SidebarLayout = SidebarLayout;
exports.Styled = Styled;
exports.TableOfContents = TableOfContents;
exports.TryIt = TryIt;
exports.TryItWithRequestSamples = TryItWithRequestSamples;
exports.createElementClass = createElementClass;
exports.createResolvedObject = createResolvedObject;
exports.findFirstNode = findFirstNode;
exports.isHttpOperation = isHttpOperation;
exports.isHttpService = isHttpService;
exports.slugify = slugify;
exports.useBundleRefsIntoDocument = useBundleRefsIntoDocument;
exports.useParsedData = useParsedData;
exports.useParsedValue = useParsedValue;
exports.useRouter = useRouter;
exports.withMosaicProvider = withMosaicProvider;
exports.withPersistenceBoundary = withPersistenceBoundary;
exports.withQueryClientProvider = withQueryClientProvider;
exports.withRouter = withRouter;
exports.withStyles = withStyles;
