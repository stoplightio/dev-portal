(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@stoplight/mosaic'), require('react'), require('tslib'), require('@stoplight/react-error-boundary'), require('clsx'), require('@stoplight/markdown'), require('@stoplight/json-schema-viewer'), require('@stoplight/mosaic-code-viewer'), require('@stoplight/yaml'), require('lodash/pick'), require('isomorphic-dompurify')) :
  typeof define === 'function' && define.amd ? define(['exports', '@stoplight/mosaic', 'react', 'tslib', '@stoplight/react-error-boundary', 'clsx', '@stoplight/markdown', '@stoplight/json-schema-viewer', '@stoplight/mosaic-code-viewer', '@stoplight/yaml', 'lodash/pick', 'isomorphic-dompurify'], factory) :
  (global = global || self, factory(global.MarkdownViewer = {}, global.mosaic, global.React, global.tslib, global.reactErrorBoundary, global.cn, global.markdown, global.jsonSchemaViewer, global.mosaicCodeViewer, global.yaml, global.pick, global.DOMPurify));
}(this, (function (exports, mosaic, React, tslib, reactErrorBoundary, cn, markdown, jsonSchemaViewer, mosaicCodeViewer, yaml, pick, DOMPurify) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  cn = cn && cn.hasOwnProperty('default') ? cn['default'] : cn;
  pick = pick && pick.hasOwnProperty('default') ? pick['default'] : pick;
  DOMPurify = DOMPurify && DOMPurify.hasOwnProperty('default') ? DOMPurify['default'] : DOMPurify;

  var BlockHeader = function BlockHeader(_a) {
    var icon = _a.icon,
        iconColor = _a.iconColor,
        children = _a.children;
    return React.createElement(mosaic.Flex, {
      alignItems: "center",
      pl: 1.5,
      pb: 2
    }, icon && React.createElement(mosaic.Box, {
      mr: 2.5
    }, React.createElement(mosaic.Icon, {
      icon: icon,
      color: iconColor,
      size: "sm"
    })), React.createElement(mosaic.Box, {
      color: "muted"
    }, children));
  };

  var processMarkdown = function processMarkdown(markdown$1) {
    return markdown.run(markdown$1);
  };

  var useMarkdownTree = function useMarkdownTree(markdownOrTree) {
    return React.useMemo(function () {
      return typeof markdownOrTree === 'string' ? processMarkdown(markdownOrTree) : markdownOrTree;
    }, [markdownOrTree]);
  };

  var useHtmlAttributes = function useHtmlAttributes(attributes) {
    var nodeRef = React.useRef();
    React.useLayoutEffect(function () {
      var node = nodeRef.current;
      if (node === void 0) return;
      var toAdd = Object.keys(attributes);

      for (var i = 0; i < node.attributes.length; i++) {
        var _a = node.attributes[i],
            name_1 = _a.name,
            value = _a.value;

        if (!(name_1 in attributes)) {
          var length_1 = node.attributes.length;
          node.removeAttribute(name_1);
          i -= length_1 - node.attributes.length;
        } else if (attributes[name_1] === value) {
          toAdd.splice(toAdd.indexOf(name_1), 1);
        }
      }

      for (var _i = 0, toAdd_1 = toAdd; _i < toAdd_1.length; _i++) {
        var attribute = toAdd_1[_i];
        node.setAttribute(attribute, String(attributes[attribute]));
      }
    }, [nodeRef, attributes]);
    return nodeRef;
  };

  function useSanitizeAttributes(attributes) {
    return React__default.useMemo(function () {
      var pickedAttributes = pick(attributes, ALLOWED_ATTRIBUTES);

      if (typeof pickedAttributes.href === 'string' && markdown.hasJavascriptProtocol(pickedAttributes.href)) {
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
    return React.useMemo(function () {
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

  var Strong = function Strong(_a) {
    var children = _a.children;
    return React.createElement("strong", null, children);
  };

  var Emphasis = function Emphasis(_a) {
    var children = _a.children;
    return React.createElement("em", null, children);
  };

  var Strikethrough = function Strikethrough(_a) {
    var children = _a.children;
    return React.createElement("s", null, children);
  };

  var Paragraph = function Paragraph(_a) {
    var children = _a.children;
    return React.createElement("p", null, children);
  };

  var BlockQuote = function BlockQuote(_a) {
    var node = _a.node,
        children = _a.children;
    var annotations = node.annotations;
    return React.createElement(mosaic.Box, {
      className: "sl-blockquote--" + ((annotations === null || annotations === void 0 ? void 0 : annotations.theme) || 'default'),
      as: "blockquote"
    }, children);
  };

  var InlineCode = function InlineCode(_a) {
    var node = _a.node;
    return React.createElement(mosaic.Code, null, String(node.value));
  };

  var Code = function Code(_a) {
    var node = _a.node;
    var lang = node.lang,
        value = node.value,
        _b = node.annotations,
        annotations = _b === void 0 ? {} : _b;
    var language = getCodeLanguage(lang);
    var showLineNumbers = annotations !== undefined && 'lineNumbers' in annotations ? !!annotations.lineNumbers : false;
    var title = node.annotations && node.annotations.title;
    var elem;

    if (language === 'json_schema' || annotations.json_schema) {
      elem = React.createElement(jsonSchemaViewer.JsonSchemaViewer, {
        schema: yaml.parse(String(value))
      });
    } else {
      elem = React.createElement(mosaic.InvertTheme, null, React.createElement(mosaicCodeViewer.CodeViewer, {
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

    return React.createElement(reactErrorBoundary.ErrorBoundary, null, React.createElement("div", {
      className: "sl-code-block-container"
    }, elem));
  };

  var Image = function Image(_a) {
    var node = _a.node;
    return React.createElement("img", {
      src: node.url,
      title: node.title,
      alt: node.alt
    });
  };

  var ImageReference = function ImageReference(_a) {
    var node = _a.node;
    return React.createElement("span", null, String(node.label));
  };

  var Link = function Link(_a) {
    var node = _a.node,
        children = _a.children;
    var href = markdown.hasJavascriptProtocol(node.url) ? undefined : node.url;
    if (!href) return null; // If it's relative, regular link

    if (href.startsWith('/')) {
      return React.createElement(mosaic.Link, {
        href: href,
        title: node.title
      }, children);
    } // Otherwise open in a new tab


    return React.createElement(mosaic.Link, {
      href: href,
      title: node.title,
      target: "_blank",
      rel: "noopener"
    }, children);
  };

  var LinkReference = function LinkReference(_a) {
    var node = _a.node;
    return React.createElement("span", null, String(node.label));
  };

  var Heading = function Heading(_a) {
    var _b;

    var node = _a.node,
        children = _a.children;

    if (node.depth >= 2 || node.depth <= 4) {
      return React.createElement(mosaic.LinkHeading, {
        size: node.depth,
        id: ((_b = node.data) === null || _b === void 0 ? void 0 : _b.id) || '#'
      }, children);
    }

    return React.createElement(mosaic.Heading, {
      size: Math.min(node.depth, 4)
    }, children);
  };

  var HTML = function HTML(_a) {
    var node = _a.node;
    var sanitizedHtml = useSanitizeHtml(typeof node.value === 'string' ? node.value : '');
    return React.createElement("div", {
      className: CLASSNAMES.html,
      dangerouslySetInnerHTML: {
        __html: sanitizedHtml
      }
    });
  };

  var InlineHTML = function InlineHTML(_a) {
    var node = _a.node,
        children = _a.children;
    var attributes = useSanitizeAttributes(node.attributes);
    var nodeRef = useHtmlAttributes(attributes);
    if (!ALLOWED_TAGS.includes(node.tagName)) return null;
    return React.createElement(node.tagName, {
      ref: nodeRef
    }, children);
  };

  var List = function List(_a) {
    var _b, _c, _d;

    var node = _a.node,
        children = _a.children;
    var isTaskList = ((_d = (_c = (_b = children[0]) === null || _b === void 0 ? void 0 : _b.props) === null || _c === void 0 ? void 0 : _c.node) === null || _d === void 0 ? void 0 : _d.checked) !== null;

    if (node.ordered) {
      return React.createElement("ol", {
        start: node.start
      }, children);
    } else {
      return React.createElement("ul", {
        className: cn({
          'contains-task-list': isTaskList
        })
      }, children);
    }
  };

  var ListItem = function ListItem(_a) {
    var node = _a.node,
        children = _a.children;
    return node.checked !== null ? React.createElement("li", {
      className: "task-list-item"
    }, React.createElement(mosaic.Flex, {
      alignItems: "center"
    }, React.createElement("input", {
      type: "checkbox",
      checked: node.checked,
      disabled: true
    }), " ", children)) : React.createElement("li", null, children);
  };

  var Table = function Table(_a) {
    var children = _a.children;

    var _b = React.Children.toArray(children),
        headerRow = _b[0],
        bodyRows = _b.slice(1);

    return React.createElement("table", null, React.createElement("thead", null, headerRow), React.createElement("tbody", null, bodyRows));
  };

  var TableRow = function TableRow(_a) {
    var children = _a.children;
    return React.createElement("tr", null, children);
  };

  var TableCell = function TableCell(_a) {
    var parent = _a.parent,
        children = _a.children,
        index = _a.index;
    var align = parent.parent.align;
    return React.createElement(mosaic.Box, {
      as: "td",
      align: align[index]
    }, children);
  };

  var Tabs = function Tabs(_a) {
    var node = _a.node,
        children = _a.children;
    var panelChildren = [];
    React.Children.map(children, function (child) {
      panelChildren.push(child);
    });
    return React.createElement(mosaic.Tabs, {
      appearance: "line"
    }, React.createElement(mosaic.TabList, null, node.children.map(function (child, i) {
      return React.createElement(mosaic.Tab, {
        key: i
      }, child.annotations.title);
    })), React.createElement(mosaic.TabPanels, null, panelChildren.map(function (child, i) {
      return React.createElement(mosaic.TabPanel, {
        key: i
      }, child);
    })));
  };

  var Tab = function Tab(_a) {
    var children = _a.children;
    return React.createElement(React.Fragment, null, children);
  };

  var Text = function Text(_a) {
    var node = _a.node;
    return React.createElement(React.Fragment, null, String(node.value));
  };

  var Jira = function Jira(_a) {
    var node = _a.node;
    return React.createElement(React.Fragment, null, String(node.value));
  };

  var ThematicBreak = function ThematicBreak() {
    return React.createElement("hr", null);
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

  var renderNodeChildren = function renderNodeChildren(node, components, parentPath) {
    if (components === void 0) {
      components = DefaultSMDComponents;
    }

    if (parentPath === void 0) {
      parentPath = [];
    }

    if (!Array.isArray(node.children) || node.children.length <= 0) return [];

    var parent = tslib.__assign({}, node); // Don't pass position or children to child


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
      return React.createElement(Component, {
        key: key,
        index: key,
        path: path,
        node: child,
        parent: parent
      }, renderNodeChildren(tslib.__assign(tslib.__assign({}, child), {
        parent: parent
      }), components, path));
    });
  };

  /**
   * MARKDOWN VIEWER
   */

  var MarkdownViewerComponent = function MarkdownViewerComponent(_a) {
    var markdownOrTree = _a.markdown,
        className = _a.className,
        components = _a.components;
    var tree = useMarkdownTree(markdownOrTree);
    var componentMapping = React.useMemo(function () {
      return tslib.__assign(tslib.__assign({}, DefaultSMDComponents), components);
    }, [components]);
    return React.createElement(mosaic.Prose, {
      className: cn('MarkdownViewer', className)
    }, renderNodeChildren(tree, componentMapping));
  };

  MarkdownViewerComponent.displayName = 'MarkdownViewer.Component';

  var MarkdownViewerFallbackComponent = function MarkdownViewerFallbackComponent(_a) {
    var error = _a.error;
    return React.createElement(mosaic.Box, {
      p: 4
    }, React.createElement("b", null, "Error"), error && ": " + error.message);
  };

  var MarkdownViewer = function MarkdownViewer(_a) {
    var onError = _a.onError,
        _b = _a.FallbackComponent,
        FallbackComponent = _b === void 0 ? MarkdownViewerFallbackComponent : _b,
        props = tslib.__rest(_a, ["onError", "FallbackComponent"]);

    return React.createElement(reactErrorBoundary.ErrorBoundary, {
      onError: onError,
      FallbackComponent: FallbackComponent
    }, React.createElement(MarkdownViewerComponent, tslib.__assign({}, props)));
  };
  MarkdownViewer.displayName = 'MarkdownViewer';

  exports.ALLOWED_TAGS = ALLOWED_TAGS;
  exports.BlockHeader = BlockHeader;
  exports.CLASSNAMES = CLASSNAMES;
  exports.DefaultSMDComponents = DefaultSMDComponents;
  exports.MarkdownViewer = MarkdownViewer;
  exports.processMarkdown = processMarkdown;
  exports.useMarkdownTree = useMarkdownTree;
  exports.useSanitizeHtml = useSanitizeHtml;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
