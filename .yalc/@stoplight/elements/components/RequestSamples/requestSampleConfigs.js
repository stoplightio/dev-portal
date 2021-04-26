"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectOptions = exports.getConfigFor = void 0;
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
exports.getConfigFor = getConfigFor;
exports.selectOptions = Object.entries(requestSampleConfigs).flatMap(([language, { libraries }]) => {
    if (!libraries) {
        return [{ value: language }];
    }
    else {
        return Object.keys(libraries).map(library => ({
            value: `${language} / ${library}`,
        }));
    }
});
//# sourceMappingURL=requestSampleConfigs.js.map