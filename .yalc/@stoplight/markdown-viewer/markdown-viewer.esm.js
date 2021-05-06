import { Flex, Box, Icon, Code as Code$1, InvertTheme, Link as Link$1, LinkHeading, Heading as Heading$1, Tabs as Tabs$1, TabList, Tab as Tab$1, TabPanels, TabPanel, Prose } from '@stoplight/mosaic';
import React__default, { createElement, useMemo, useRef, useLayoutEffect, Children, Fragment } from 'react';
import { __rest } from 'tslib';
import { ErrorBoundary } from '@stoplight/react-error-boundary';
import cn from 'clsx';
import { run, hasJavascriptProtocol } from '@stoplight/markdown';
import { JsonSchemaViewer } from '@stoplight/json-schema-viewer';
import { CodeViewer } from '@stoplight/mosaic-code-viewer';
import { parse } from '@stoplight/yaml';
import pick from 'lodash/pick';
import DOMPurify from 'isomorphic-dompurify';

var BlockHeader = function BlockHeader(_ref) {
  var icon = _ref.icon,
      iconColor = _ref.iconColor,
      children = _ref.children;
  return createElement(Flex, {
    alignItems: "center",
    pl: 1.5,
    pb: 2
  }, icon && createElement(Box, {
    mr: 2.5
  }, createElement(Icon, {
    icon: icon,
    color: iconColor,
    size: "sm"
  })), createElement(Box, {
    color: "muted"
  }, children));
};

var processMarkdown = function processMarkdown(markdown) {
  return run(markdown);
};

var useMarkdownTree = function useMarkdownTree(markdownOrTree) {
  return useMemo(function () {
    return typeof markdownOrTree === 'string' ? processMarkdown(markdownOrTree) : markdownOrTree;
  }, [markdownOrTree]);
};

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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

var useHtmlAttributes = function useHtmlAttributes(attributes) {
  var nodeRef = useRef();
  useLayoutEffect(function () {
    var node = nodeRef.current;
    if (node === void 0) return;
    var toAdd = Object.keys(attributes);

    for (var i = 0; i < node.attributes.length; i++) {
      var _node$attributes$i = node.attributes[i],
          name = _node$attributes$i.name,
          value = _node$attributes$i.value;

      if (!(name in attributes)) {
        var length = node.attributes.length;
        node.removeAttribute(name);
        i -= length - node.attributes.length;
      } else if (attributes[name] === value) {
        toAdd.splice(toAdd.indexOf(name), 1);
      }
    }

    for (var _i = 0, _toAdd = toAdd; _i < _toAdd.length; _i++) {
      var attribute = _toAdd[_i];
      node.setAttribute(attribute, String(attributes[attribute]));
    }
  }, [nodeRef, attributes]);
  return nodeRef;
};

function useSanitizeAttributes(attributes) {
  return React__default.useMemo(function () {
    var pickedAttributes = pick(attributes, ALLOWED_ATTRIBUTES);

    if (typeof pickedAttributes.href === 'string' && hasJavascriptProtocol(pickedAttributes.href)) {
      pickedAttributes.href = '';
    }

    return pickedAttributes;
  }, [attributes]);
} // based on https://github.com/cure53/DOMPurify/blob/57ba81537f1f8e68b921405b97c701a67be36fd5/src/attrs.js#L3

var ALLOWED_ATTRIBUTES = Object.freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns']);

// DOMPurify.addHook('beforeSanitizeElements', node => {
//   const sanitized = DOMPurify.sanitize(node.outerHTML, { ...config });
//   const isAllowedElement = node.nodeType === 1 && ALLOWED_TAGS.includes(node.tagName.toLowerCase());
//   if (sanitized.trim().length === 0 && node.parentElement && node.ownerDocument && !isAllowedElement) {
//     node.parentElement.insertBefore(node.ownerDocument.createTextNode(node.outerHTML || ''), node);
//   }
// });

function useSanitizeHtml(value) {
  return useMemo(function () {
    return DOMPurify.sanitize(value, config);
  }, [value]);
}
var ALLOWED_TAGS = Object.freeze(['dl', 'dt', 'dd', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 's', 'strike', 'code', 'hr', 'br', 'div', 'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'pre', 'iframe', 'img', 'summary', 'details', 'caption', 'figure', 'figcaption', 'span']);
var config = {
  ALLOWED_TAGS: ALLOWED_TAGS
};

var CLASSNAMES = {
  padded: 'MV_padded',
  bordered: 'MV_bordered',
  pulled: 'MV_pulled',
  raised: 'MV_raised',
  block: 'MV_block',
  tabContainer: 'MV_tab_container',
  blockHeader: 'MV_block_header',
  blockTitle: 'MV_block_title',
  html: 'MV_raw'
};

var getCodeLanguage = function getCodeLanguage(lang) {
  switch (lang) {
    case 'http':
      return 'yaml';

    default:
      return lang;
  }
};

var Strong = function Strong(_ref) {
  var children = _ref.children;
  return createElement("strong", null, children);
};

var Emphasis = function Emphasis(_ref2) {
  var children = _ref2.children;
  return createElement("em", null, children);
};

var Strikethrough = function Strikethrough(_ref3) {
  var children = _ref3.children;
  return createElement("s", null, children);
};

var Paragraph = function Paragraph(_ref4) {
  var children = _ref4.children;
  return createElement("p", null, children);
};

var BlockQuote = function BlockQuote(_ref5) {
  var node = _ref5.node,
      children = _ref5.children;
  var annotations = node.annotations;
  return createElement(Box, {
    className: "sl-blockquote--".concat((annotations === null || annotations === void 0 ? void 0 : annotations.theme) || 'default'),
    as: "blockquote"
  }, children);
};

var InlineCode = function InlineCode(_ref6) {
  var node = _ref6.node;
  return createElement(Code$1, null, String(node.value));
};

var Code = function Code(_ref7) {
  var node = _ref7.node;
  var lang = node.lang,
      value = node.value,
      _node$annotations = node.annotations,
      annotations = _node$annotations === void 0 ? {} : _node$annotations;
  var language = getCodeLanguage(lang);
  var showLineNumbers = annotations !== undefined && 'lineNumbers' in annotations ? !!annotations.lineNumbers : false;
  var title = node.annotations && node.annotations.title;
  var elem;

  if (language === 'json_schema' || annotations.json_schema) {
    elem = createElement(JsonSchemaViewer, {
      schema: parse(String(value))
    });
  } else {
    elem = createElement(InvertTheme, null, createElement(CodeViewer, {
      bg: "canvas",
      value: String(value),
      language: language,
      rounded: "lg",
      ring: {
        focus: true
      },
      ringColor: "primary",
      ringOpacity: 50,
      showLineNumbers: showLineNumbers,
      title: title
    }));
  }

  return createElement(ErrorBoundary, null, createElement("div", {
    className: "sl-code-block-container"
  }, elem));
};

var Image = function Image(_ref8) {
  var node = _ref8.node;
  return createElement("img", {
    src: node.url,
    title: node.title,
    alt: node.alt
  });
};

var ImageReference = function ImageReference(_ref9) {
  var node = _ref9.node;
  return createElement("span", null, String(node.label));
};

var Link = function Link(_ref10) {
  var node = _ref10.node,
      children = _ref10.children;
  var href = hasJavascriptProtocol(node.url) ? undefined : node.url;
  if (!href) return null; // If it's relative, regular link

  if (href.startsWith('/')) {
    return createElement(Link$1, {
      href: href,
      title: node.title
    }, children);
  } // Otherwise open in a new tab


  return createElement(Link$1, {
    href: href,
    title: node.title,
    target: "_blank",
    rel: "noopener"
  }, children);
};

var LinkReference = function LinkReference(_ref11) {
  var node = _ref11.node;
  return createElement("span", null, String(node.label));
};

var Heading = function Heading(_ref12) {
  var node = _ref12.node,
      children = _ref12.children;

  var _a;

  if (node.depth >= 2 || node.depth <= 4) {
    return createElement(LinkHeading, {
      size: node.depth,
      id: ((_a = node.data) === null || _a === void 0 ? void 0 : _a.id) || '#'
    }, children);
  }

  return createElement(Heading$1, {
    size: Math.min(node.depth, 4)
  }, children);
};

var HTML = function HTML(_ref13) {
  var node = _ref13.node;
  var sanitizedHtml = useSanitizeHtml(typeof node.value === 'string' ? node.value : '');
  return createElement("div", {
    className: CLASSNAMES.html,
    dangerouslySetInnerHTML: {
      __html: sanitizedHtml
    }
  });
};

var InlineHTML = function InlineHTML(_ref14) {
  var node = _ref14.node,
      children = _ref14.children;
  var attributes = useSanitizeAttributes(node.attributes);
  var nodeRef = useHtmlAttributes(attributes);
  if (!ALLOWED_TAGS.includes(node.tagName)) return null;
  return createElement(node.tagName, {
    ref: nodeRef
  }, children);
};

var List = function List(_ref15) {
  var node = _ref15.node,
      children = _ref15.children;

  var _a, _b, _c;

  var isTaskList = ((_c = (_b = (_a = children[0]) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.node) === null || _c === void 0 ? void 0 : _c.checked) !== null;

  if (node.ordered) {
    return createElement("ol", {
      start: node.start
    }, children);
  } else {
    return createElement("ul", {
      className: cn({
        'contains-task-list': isTaskList
      })
    }, children);
  }
};

var ListItem = function ListItem(_ref16) {
  var node = _ref16.node,
      children = _ref16.children;
  return node.checked !== null ? createElement("li", {
    className: "task-list-item"
  }, createElement(Flex, {
    alignItems: "center"
  }, createElement("input", {
    type: "checkbox",
    checked: node.checked,
    disabled: true
  }), " ", children)) : createElement("li", null, children);
};

var Table = function Table(_ref17) {
  var children = _ref17.children;

  var _React$Children$toArr = Children.toArray(children),
      _React$Children$toArr2 = _toArray(_React$Children$toArr),
      headerRow = _React$Children$toArr2[0],
      bodyRows = _React$Children$toArr2.slice(1);

  return createElement("table", null, createElement("thead", null, headerRow), createElement("tbody", null, bodyRows));
};

var TableRow = function TableRow(_ref18) {
  var children = _ref18.children;
  return createElement("tr", null, children);
};

var TableCell = function TableCell(_ref19) {
  var parent = _ref19.parent,
      children = _ref19.children,
      index = _ref19.index;
  var align = parent.parent.align;
  return createElement(Box, {
    as: "td",
    align: align[index]
  }, children);
};

var Tabs = function Tabs(_ref20) {
  var node = _ref20.node,
      children = _ref20.children;
  var panelChildren = [];
  Children.map(children, function (child) {
    panelChildren.push(child);
  });
  return createElement(Tabs$1, {
    appearance: "line"
  }, createElement(TabList, null, node.children.map(function (child, i) {
    return createElement(Tab$1, {
      key: i
    }, child.annotations.title);
  })), createElement(TabPanels, null, panelChildren.map(function (child, i) {
    return createElement(TabPanel, {
      key: i
    }, child);
  })));
};

var Tab = function Tab(_ref21) {
  var children = _ref21.children;
  return createElement(Fragment, null, children);
};

var Text = function Text(_ref22) {
  var node = _ref22.node;
  return createElement(Fragment, null, String(node.value));
};

var Jira = function Jira(_ref23) {
  var node = _ref23.node;
  return createElement(Fragment, null, String(node.value));
};

var ThematicBreak = function ThematicBreak() {
  return createElement("hr", null);
};

var DefaultSMDComponents = {
  strong: Strong,
  emphasis: Emphasis,
  "delete": Strikethrough,
  paragraph: Paragraph,
  blockquote: BlockQuote,
  inlineCode: InlineCode,
  code: Code,
  image: Image,
  imageReference: ImageReference,
  link: Link,
  heading: Heading,
  html: HTML,
  inlineHtml: InlineHTML,
  linkReference: LinkReference,
  list: List,
  listItem: ListItem,
  table: Table,
  tableRow: TableRow,
  tableCell: TableCell,
  tabs: Tabs,
  tab: Tab,
  text: Text,
  jira: Jira,
  thematicBreak: ThematicBreak,
  yaml: function yaml() {
    return null;
  },
  definition: function definition() {
    return null;
  } // TODO (CL): We don't support definition right now

};

var renderNodeChildren = function renderNodeChildren(node) {
  var components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DefaultSMDComponents;
  var parentPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (!Array.isArray(node.children) || node.children.length <= 0) return [];
  var parent = Object.assign({}, node); // Don't pass position or children to child

  delete parent.position;
  delete parent.children;
  return node.children.map(function (child, key) {
    var Component = components[child.type];

    if (!Component) {
      // eslint-disable-next-line no-console
      console.warn('No component mapping for', child.type, child);
      return null;
    }

    var path = parentPath.concat('children', key);
    return createElement(Component, {
      key: key,
      index: key,
      path: path,
      node: child,
      parent: parent
    }, renderNodeChildren(Object.assign(Object.assign({}, child), {
      parent: parent
    }), components, path));
  });
};

/**
 * MARKDOWN VIEWER
 */

var MarkdownViewerComponent = function MarkdownViewerComponent(_ref) {
  var markdownOrTree = _ref.markdown,
      className = _ref.className,
      components = _ref.components;
  var tree = useMarkdownTree(markdownOrTree);
  var componentMapping = useMemo(function () {
    return Object.assign(Object.assign({}, DefaultSMDComponents), components);
  }, [components]);
  return createElement(Prose, {
    className: cn('MarkdownViewer', className)
  }, renderNodeChildren(tree, componentMapping));
};

MarkdownViewerComponent.displayName = 'MarkdownViewer.Component';

var MarkdownViewerFallbackComponent = function MarkdownViewerFallbackComponent(_ref2) {
  var error = _ref2.error;
  return createElement(Box, {
    p: 4
  }, createElement("b", null, "Error"), error && ": ".concat(error.message));
};

var MarkdownViewer = function MarkdownViewer(_a) {
  var onError = _a.onError,
      _a$FallbackComponent = _a.FallbackComponent,
      FallbackComponent = _a$FallbackComponent === void 0 ? MarkdownViewerFallbackComponent : _a$FallbackComponent,
      props = __rest(_a, ["onError", "FallbackComponent"]);

  return createElement(ErrorBoundary, {
    onError: onError,
    FallbackComponent: FallbackComponent
  }, createElement(MarkdownViewerComponent, Object.assign({}, props)));
};
MarkdownViewer.displayName = 'MarkdownViewer';

export { ALLOWED_TAGS, BlockHeader, CLASSNAMES, DefaultSMDComponents, MarkdownViewer, processMarkdown, useMarkdownTree, useSanitizeHtml };
