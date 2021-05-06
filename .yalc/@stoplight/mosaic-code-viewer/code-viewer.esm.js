import { __rest } from 'tslib';
import ReactRendererPrism from 'prism-react-renderer/prism';
import { InvertThemeContext, useThemeStore, Box, NoSsr, CopyButton } from '@stoplight/mosaic';
import cn from 'clsx';
import PrismHighlight from 'prism-react-renderer';
import React, { useContext, memo } from 'react';
import shallow from 'zustand/shallow';

/**
 * Sets the global prism instance to the one included in prism-react-renderer if not already set on global scope
 */

var g = typeof global !== 'undefined' ? global : window; // @ts-expect-error

if (!g.Prism) {
  // @ts-expect-error
  g.Prism = ReactRendererPrism;
} // @ts-expect-error


var Prism = g.Prism;

/**
 * The extra languages we load in by default that prism-react-renderer does not include
 * Note that adding languages doesn't come cheap - the below adds around 6kb (+25%) to the minified + brotli package size
 */

require('prismjs/components/prism-clojure');

require('prismjs/components/prism-csharp');

require('prismjs/components/prism-http');

require('prismjs/components/prism-java');

require('prismjs/components/prism-kotlin');

require('prismjs/components/prism-php');

require('prismjs/components/prism-powershell');

require('prismjs/components/prism-r');

require('prismjs/components/prism-ruby');

require('prismjs/components/prism-swift');
/**
 * cURL
 */


Prism.languages.curl = {
  curl: /\bcurl\b/,
  url: /https?:[a-zA-Z0-9:.?=\/\-_{}]*/,
  parameter: {
    pattern: /[A-Za-z0-9\[\]-_]+ *(?=[=])/
  },
  value: [{
    pattern: /([=])([A-Za-z0-9-_.]*)/,
    lookbehind: true
  }, {
    pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/
  }, {
    pattern: /(\-u )([A-Za-z0-9-_.{}]*)/,
    lookbehind: true
  }],
  option: / *-[a-zA-Z]*\b/
};

// adapted from https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/themes/nightOwl.js
var darkTheme = {
  mode: 'dark',
  plain: {// color: '#d6deeb',
    // backgroundColor: '#011627',
  },
  styles: [{
    types: ['changed'],
    style: {
      color: 'rgb(162, 191, 252)',
      fontStyle: 'italic'
    }
  }, {
    types: ['deleted'],
    style: {
      color: 'rgba(239, 83, 80, 0.56)',
      fontStyle: 'italic'
    }
  }, {
    types: ['inserted', 'attr-name', 'function', 'url'],
    style: {
      color: '#d2a8ff'
    }
  }, {
    types: ['string', 'attr-value'],
    style: {
      color: '#a5d6ff'
    }
  }, {
    types: ['punctuation'],
    style: {
      color: 'inherit'
    }
  }, {
    types: ['comment'],
    style: {
      color: '#8b949e'
    }
  }, {
    types: ['variable'],
    style: {
      color: 'rgb(214, 222, 235)'
    }
  }, {
    types: ['number'],
    style: {
      color: 'rgb(247, 140, 108)'
    }
  }, {
    types: ['builtin', 'char', 'constant'],
    style: {
      color: 'rgb(130, 170, 255)'
    }
  }, {
    types: ['selector', 'doctype', 'value'],
    style: {
      color: 'rgb(199, 146, 234)',
      fontStyle: 'italic'
    }
  }, {
    types: ['class-name'],
    style: {
      color: '#7ee787'
    }
  }, {
    types: ['operator', 'keyword'],
    style: {
      color: '#ff7b72'
    }
  }, {
    types: ['boolean'],
    style: {
      color: '#79c0ff'
    }
  }, {
    types: ['property'],
    style: {
      color: 'rgb(128, 203, 196)'
    }
  }, {
    types: ['namespace', 'option'],
    style: {
      color: 'rgb(178, 204, 214)'
    }
  }]
};

// adapted from https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/themes/github.js
var lightTheme = {
  mode: 'light',
  plain: {// color: '#393A34',
    // backgroundColor: '#f6f8fa',
  },
  styles: [{
    types: ['comment', 'blockquote'],
    style: {
      color: '#969896',
      fontStyle: 'italic'
    }
  }, {
    types: ['cdata'],
    style: {
      color: '#183691'
    }
  }, {
    types: ['doctype', 'punctuation', 'variable', 'macro property'],
    style: {
      color: '#333'
    }
  }, {
    types: ['important', 'rule', 'builtin'],
    style: {
      color: '#a71d5d'
    }
  }, {
    types: ['keyword', 'operator'],
    style: {
      color: '#d73a49'
    }
  }, {
    types: ['string', 'url', 'regex', 'attr-value'],
    style: {
      color: '#032f62'
    }
  }, {
    types: ['property', 'number', 'boolean', 'entity', 'atrule', 'constant', 'symbol', 'command', 'code'],
    style: {
      color: '#005cc5'
    }
  }, {
    types: ['attr-name', 'function'],
    style: {
      color: '#6f42c1'
    }
  }, {
    types: ['selector', 'prolog'],
    style: {
      color: '#63a35c'
    }
  }, {
    types: ['namespace', 'pseudo-element', 'class', 'class-name', 'pseudo-class', 'id', 'url-reference'],
    style: {
      color: '#22863a'
    }
  }, {
    types: ['title'],
    style: {
      color: '#1d3e81',
      fontWeight: 'bold'
    }
  }, {
    types: ['list'],
    style: {
      color: '#ed6a43'
    }
  }, {
    types: ['inserted'],
    style: {
      color: '#55a532',
      backgroundColor: '#eaffea'
    }
  }, {
    types: ['deleted'],
    style: {
      color: '#bd2c00',
      backgroundColor: '#ffecec'
    }
  }, {
    types: ['bold'],
    style: {
      fontWeight: 'bold'
    }
  }, {
    types: ['italic'],
    style: {
      fontStyle: 'italic'
    }
  }, {
    languages: ['json'],
    types: ['property'],
    style: {
      color: '#183691'
    }
  }, {
    languages: ['markup'],
    types: ['tag punctuation'],
    style: {
      color: '#333'
    }
  }, {
    languages: ['css'],
    types: ['function'],
    style: {
      color: '#0086b3'
    }
  }, {
    languages: ['yaml'],
    types: ['atrule'],
    style: {
      color: '#63a35c'
    }
  }, {
    languages: ['markdown'],
    types: ['url'],
    style: {
      color: '#795da3'
    }
  }, {
    languages: ['bash'],
    types: ['keyword'],
    style: {
      color: '#0086b3'
    }
  }, {
    types: ['option'],
    style: {
      opacity: 0.7
    }
  }, {
    types: ['value'],
    style: {
      color: '#e3116c'
    }
  }, {
    types: ['function-variable'],
    style: {
      color: '#6f42c1'
    }
  }]
};

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var useCodeTheme = function useCodeTheme() {
  var _useContext = useContext(InvertThemeContext),
      inverted = _useContext.inverted;

  var _useThemeStore = useThemeStore(function (s) {
    return [s.colorValues.light, s.invertedColorValues.light];
  }, shallow),
      _useThemeStore2 = _slicedToArray(_useThemeStore, 2),
      isLightBg = _useThemeStore2[0],
      isLightInvertedBg = _useThemeStore2[1];

  if (inverted) {
    return isLightInvertedBg ? lightTheme : darkTheme;
  }

  return isLightBg ? lightTheme : darkTheme;
};

var DEFAULT_HIGHLIGHT_PADDING = {
  x: 15,
  y: 12
};
var CODE_LINE_HEIGHT = 21;
var CodeViewer = memo(function (_a) {
  var value = _a.value,
      className = _a.className,
      language = _a.language,
      customLanguage = _a.customLanguage,
      showLineNumbers = _a.showLineNumbers,
      title = _a.title,
      noCopyButton = _a.noCopyButton,
      _a$highlightPadding = _a.highlightPadding,
      highlightPadding = _a$highlightPadding === void 0 ? DEFAULT_HIGHLIGHT_PADDING : _a$highlightPadding,
      props = __rest(_a, ["value", "className", "language", "customLanguage", "showLineNumbers", "title", "noCopyButton", "highlightPadding"]);

  var code = (value || '').trim();

  var _useHighlight = useHighlight({
    value: code,
    language: language || customLanguage,
    showLineNumbers: showLineNumbers,
    style: {
      padding: highlightPadding.y === highlightPadding.x ? "".concat(highlightPadding.y, "px") : "".concat(highlightPadding.y, "px ").concat(highlightPadding.x, "px"),
      fontFamily: 'var(--font-code)',
      fontSize: 'var(--fs-code)',
      lineHeight: 'var(--lh-code)'
    }
  }),
      renderHighlight = _useHighlight.renderHighlight,
      lines = _useHighlight.lines;

  var _className = cn('sl-code-viewer', className);

  return React.createElement(CodeContainer, Object.assign({
    pos: "relative",
    role: "group",
    title: title,
    className: _className,
    tabIndex: 0,
    outline: "none",
    renderHighlight: renderHighlight,
    lines: lines,
    copyValue: noCopyButton ? undefined : code,
    highlightPadding: highlightPadding
  }, props));
});
var lineNoWidths = {
  1: 28,
  2: 28,
  3: 36,
  4: 42,
  5: 50,
  6: 58
};
var useHighlight = function useHighlight(_ref) {
  var value = _ref.value,
      language = _ref.language,
      showLineNumbers = _ref.showLineNumbers,
      _ref$style = _ref.style,
      propStyle = _ref$style === void 0 ? {} : _ref$style;
  var theme = useCodeTheme();
  var code = value || ''; // Count newlines and pad to match actual line numbers

  var lines = (code.match(/\n/g) || []).length + 1; // Determine padding needed (length of line number length)

  var pad = String(lines).length;
  var gutterWidth = lineNoWidths[pad];
  return {
    pad: pad,
    lines: lines,
    gutterWidth: showLineNumbers ? gutterWidth : 0,
    renderHighlight: function renderHighlight() {
      return React.createElement(PrismHighlight, {
        code: code,
        language: language === null || language === void 0 ? void 0 : language.toLowerCase(),
        theme: theme,
        Prism: Prism
      }, function (_ref2) {
        var className = _ref2.className,
            style = _ref2.style,
            tokens = _ref2.tokens,
            getLineProps = _ref2.getLineProps,
            getTokenProps = _ref2.getTokenProps;
        return React.createElement(Box, {
          className: cn('sl-code-highlight', className),
          style: Object.assign(Object.assign({}, style), propStyle)
        }, tokens.map(function (line, i) {
          var _a;

          return React.createElement("div", Object.assign({
            key: i
          }, getLineProps({
            line: line,
            key: i
          }), {
            className: "sl-flex"
          }), showLineNumbers ? React.createElement(Box, {
            className: "sl-code-highlight__ln",
            userSelect: "none",
            flexShrink: 0,
            opacity: 50,
            style: {
              width: gutterWidth,
              fontSize: '0.9em',
              paddingTop: '0.1em',
              lineHeight: (_a = propStyle.lineHeight) !== null && _a !== void 0 ? _a : 'var(--lh-code)'
            }
          }, i + 1) : null, React.createElement("div", {
            className: "sl-flex-1 sl-break-all"
          }, line.map(function (token, key) {
            return React.createElement("span", Object.assign({
              key: key
            }, getTokenProps({
              token: token,
              key: key
            })));
          })));
        }));
      });
    }
  };
};
var HighlightCodeFallback = function HighlightCodeFallback(_ref3) {
  var lines = _ref3.lines,
      _ref3$highlightPaddin = _ref3.highlightPadding,
      highlightPadding = _ref3$highlightPaddin === void 0 ? DEFAULT_HIGHLIGHT_PADDING : _ref3$highlightPaddin;
  return React.createElement(Box, {
    className: "sl-highlight-code__fallback",
    fontSize: "sm",
    color: "muted",
    style: {
      /**
       * These values are important! They must result in fallback being the same height as rendered code viewer
       * so that there is not jumpyness in article on initial load
       */
      padding: highlightPadding.y === highlightPadding.x ? "".concat(highlightPadding.y, "px") : "".concat(highlightPadding.y, "px ").concat(highlightPadding.x, "px"),
      // could pull this from theme in future if we get --fs-code and --ln-code accessible via js in ssr
      minHeight: lines ? "".concat(lines * CODE_LINE_HEIGHT + DEFAULT_HIGHLIGHT_PADDING.y * 2, "px") : undefined
    }
  }, "preparing...");
};
var CodeContainer = memo(function CodeContainer(_a) {
  var title = _a.title,
      children = _a.children,
      _a$maxHeight = _a.maxHeight,
      maxHeight = _a$maxHeight === void 0 ? 500 : _a$maxHeight,
      _a$innerProps = _a.innerProps,
      innerProps = _a$innerProps === void 0 ? {} : _a$innerProps,
      renderHighlight = _a.renderHighlight,
      lines = _a.lines,
      copyValue = _a.copyValue,
      _a$highlightPadding2 = _a.highlightPadding,
      highlightPadding = _a$highlightPadding2 === void 0 ? DEFAULT_HIGHLIGHT_PADDING : _a$highlightPadding2,
      props = __rest(_a, ["title", "children", "maxHeight", "innerProps", "renderHighlight", "lines", "copyValue", "highlightPadding"]);

  return React.createElement(Box, Object.assign({
    as: "pre",
    overflowY: "hidden",
    overflowX: "hidden"
  }, props), title && React.createElement(Box, {
    className: "sl-code-viewer__title",
    py: 2.5,
    px: 4,
    fontFamily: "ui",
    pointerEvents: "none",
    bg: "canvas-50",
    fontWeight: "medium",
    borderB: true
  }, title.replace(/__/g, ' ')), React.createElement(Box, Object.assign({
    className: "sl-code-viewer__scroller",
    overflowY: "auto",
    overflowX: "auto",
    style: {
      maxHeight: maxHeight
    }
  }, innerProps), React.createElement(NoSsr, {
    fallback: React.createElement(HighlightCodeFallback, {
      lines: lines,
      highlightPadding: highlightPadding
    })
  }, React.createElement(CodeContainerRenderHighlight, {
    renderHighlight: renderHighlight
  }))), copyValue ? React.createElement(NoSsr, null, React.createElement(CornerCopyButton, {
    copyValue: copyValue
  })) : null);
});
var CornerCopyButton = function CornerCopyButton(props) {
  return React.createElement(Box, {
    pos: "absolute",
    right: 0,
    pr: 2,
    zIndex: 20,
    style: {
      top: 9
    },
    visibility: {
      "default": 'invisible',
      groupHover: 'visible'
    },
    "data-testid": "copy-button"
  }, React.createElement(CopyButton, Object.assign({}, props)));
};

function CodeContainerRenderHighlight(_ref4) {
  var renderHighlight = _ref4.renderHighlight;
  return renderHighlight ? renderHighlight() : null;
}

export { CODE_LINE_HEIGHT, CodeContainer, CodeViewer, CornerCopyButton, DEFAULT_HIGHLIGHT_PADDING, HighlightCodeFallback, Prism, darkTheme, lightTheme, useCodeTheme, useHighlight };
