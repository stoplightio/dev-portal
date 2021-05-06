import _get from 'lodash/get';
import remarkStringify from 'remark-stringify';
import unified from 'unified';
import { safeStringify, parse as parse$2, parseWithPointers as parseWithPointers$1 } from '@stoplight/yaml';
import visit from 'unist-util-visit';
import frontmatter$1 from 'remark-frontmatter';
import inlineLinks from 'remark-inline-links';
import remarkParse from 'remark-parse';
import remarkSlug from 'remark-slug';
import { __rest } from 'tslib';
import { safeStringify as safeStringify$1 } from '@stoplight/json';
import { DiagnosticSeverity } from '@stoplight/types';
import pullAt from 'lodash/pullAt';
import _set from 'lodash/set';
import toPath from 'lodash/toPath';
import _unset from 'lodash/unset';
import truncate from 'lodash/truncate';
import { select } from 'unist-util-select';

var getJsonPathForPosition = function getJsonPathForPosition(_ref, position) {
  var ast = _ref.ast;
  var path = [];
  findNodeAtPosition(ast, position, path);
  return path;
};

function findNodeAtPosition(node, position, path) {
  if (position.line >= node.position.start.line - 1 && position.line <= node.position.end.line - 1) {
    var children = node.children;

    if (Array.isArray(children)) {
      for (var i = children.length - 1; i >= 0; i--) {
        var item = findNodeAtPosition(children[i], position, path);

        if (item && (item.position.start.line !== item.position.end.line || position.character >= item.position.start.column - 1 && position.character <= item.position.end.column - 1)) {
          path.unshift('children', i);
          return findNodeAtPosition(item, position, path);
        }
      }
    }

    return node;
  }

  return;
}

var getLocationForJsonPath = function getLocationForJsonPath(_ref, path) {
  var ast = _ref.ast;
  var data = path.length === 0 ? ast : _get(ast, path);
  if (data === void 0) return;
  return {
    range: {
      start: {
        character: data.position.start.column - 1,
        line: data.position.start.line - 1
      },
      end: {
        character: data.position.end.column - 1,
        line: data.position.end.line - 1
      }
    }
  };
};

function jiraBlocks () {
  var Compiler = this.Compiler,
      Parser = this.Parser;

  if (Compiler !== void 0) {
    Compiler.prototype.visitors.jira = compileJiraBlock;
  } else if (Parser !== void 0) {
    Parser.prototype.blockTokenizers.jira = tokenizeJiraBlock;
    Parser.prototype.interruptParagraph.push(['jira']);
    var methods = Parser.prototype.blockMethods;
    methods.splice(methods.indexOf('fencedCode') + 1, 0, 'jira');
  }
}
var blockStart = /^\[block:([A-Za-z]+)\][^\S\n]*(?=\n)/;
var blockEnd = /\[\/block\][^\S\n]*(?=\n|$)/;

function tokenizeJiraBlock(eat, value, silent) {
  var blockStartMatch = blockStart.exec(value);
  var blockEndMatch = blockEnd.exec(value); // let's naively assume block cannot be placed in any node besides content

  if (blockStartMatch !== null && blockEndMatch !== null) {
    if (silent) {
      return true;
    }

    var node = {
      type: 'jira',
      code: blockStartMatch[1],
      value: value.slice(blockStartMatch[0].length + 1, blockEndMatch.index - 1)
    };
    return eat(value.slice(0, blockEndMatch.index + blockEndMatch[0].length))(node);
  }

  return false;
}

function compileJiraBlock(node) {
  return "[block:".concat(node.code, "]\n").concat(node.value, "\n[/block]");
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function resolver (opts) {
  var Compiler = this.Compiler;

  if (Compiler !== void 0) {
    Compiler.prototype.visitors.code = createCompiler(Compiler.prototype.visitors.code);
  }

  if (opts === null || opts === void 0 ? void 0 : opts.resolver) {
    return /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(tree) {
        var promises;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                promises = [];
                visit(tree, 'code', createVisitor(opts.resolver, promises));
                _context.next = 4;
                return Promise.all(promises);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }
}

var createVisitor = function createVisitor(resolver, promises) {
  return function (node) {
    if (typeof node.value !== 'string') return;
    if (node.meta !== 'json_schema' && node.meta !== 'http') return;

    try {
      promises.push(resolver(node, parse$2(node.value)).then(function (resolved) {
        node.resolved = resolved;
      })["catch"](function () {
        node.resolved = null;
      }));
    } catch (_a) {
      node.resolved = null;
    }
  };
};

function createCompiler(fn) {
  return function (node, parent) {
    if (node.type === 'code' && 'resolved' in node && node.resolved !== null) {
      return fn.call(this, Object.assign(Object.assign({}, node), {
        value: node.lang === 'json' ? JSON.stringify(node.resolved, null, 2) : safeStringify(node.resolved, {
          indent: 2
        })
      }), parent);
    }

    return fn.call(this, node, parent);
  };
}

function transformAnnotations(node) {
  if (!node.annotations) return null;
  var propCount = Object.keys(node.annotations).length;
  if (propCount === 0) return null;
  return {
    type: 'html',
    value: "<!--".concat(propCount > 1 ? '\n' : ' ').concat(safeStringify(node.annotations).trim()).concat(propCount > 1 ? '\n' : ' ', "-->")
  };
}

function transformBlockquote(node) {
  return [{
    type: 'blockquote',
    children: node.children
  }];
}

function transformTabs(node) {
  var res = []; // push transformed children

  res.push.apply(res, _toConsumableArray(transform(node.children))); // follow with 'tab-end' annotation type, marking the end of the tab container

  res.push({
    type: 'html',
    value: "<!-- ".concat(safeStringify({
      type: 'tab-end'
    }).trim(), " -->")
  });
  return res;
}

function transformTab(node) {
  return transform(node.children);
}

function transform(nodes) {
  var processed = [];

  for (var i in nodes) {
    if (!nodes[i]) continue;
    var node = nodes[i];
    var anno = transformAnnotations(node);

    if (anno) {
      processed.push(anno);
    }

    var type = node.type;

    if (type === 'blockquote') {
      processed.push.apply(processed, _toConsumableArray(transformBlockquote(node)));
    } else if (type === 'tabs') {
      // nothing needs to be done for tabContainers apart from processing the child tabs
      processed.push.apply(processed, _toConsumableArray(transformTabs(node)));
    } else if (type === 'tab') {
      processed.push.apply(processed, _toConsumableArray(transformTab(node)));
    } else {
      processed.push(node);
    }
  }

  return processed;
}

var fromSpec = function fromSpec(root) {
  var nodes = root.children;
  return {
    type: 'root',
    children: transform(nodes),
    position: root.position
  };
};

var frontmatter = require('remark-frontmatter');

var defaultOpts = {
  commonmark: true,
  gfm: true,
  listItemIndent: 'mixed' // this is needed to preserve the original indentation

};
var defaultProcessor = unified().use(remarkStringify).use(jiraBlocks).use(frontmatter, ['yaml']).use(function () {
  return fromSpec;
}).use(resolver);
var stringify = function stringify(tree) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOpts;
  var processor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProcessor;
  return processor().data('settings', opts).stringify(tree);
};

var Source = require('source-component');

var SELF_CLOSING_HTML_TAGS = Object.freeze(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr', 'command', 'keygen', 'menuitem']);
var mergeHtml = function mergeHtml() {
  return function (tree) {
    visit(tree, 'html', onVisit);
  };
};

function isHtmlNode(node) {
  return node.type === 'html';
}

function isParentNode(node) {
  return 'children' in node;
}

var HTML_TAG_REGEXP = /^<[^>]*>$/;

function isValueHtmlTag(value) {
  return HTML_TAG_REGEXP.test(value);
}

function locateNextHtmlNode(parent, index) {
  if (index > parent.children.length) {
    // out-of-bounds access check
    return -1;
  } // eslint-disable-next-line no-param-reassign


  index++; // eslint-disable-next-line no-param-reassign

  for (; index < parent.children.length; index++) {
    if (isHtmlNode(parent.children[index])) {
      return index;
    }
  }

  return -1;
}

function mergeSiblingsHtml(left, right) {
  if (typeof left.value !== 'string' || typeof right.value !== 'string') return;
  left.value += right.value;

  if (left.position !== void 0 && right.position !== void 0) {
    left.position.end = right.position.end;
  }
}

var onVisit = function onVisit(node, index, parent) {
  // isParentNode is unlikely to be needed, but let's trust typings
  if (!isParentNode(parent)) return;
  var nextHtmlNodeIndex = locateNextHtmlNode(parent, index);
  if (nextHtmlNodeIndex === -1 || typeof node.value !== 'string') return;
  if (!isValueHtmlTag(node.value) && nextHtmlNodeIndex !== index + 1) return;
  var nextHtmlNode = parent.children[nextHtmlNodeIndex];

  if (index + 1 === nextHtmlNodeIndex) {
    mergeSiblingsHtml(node, nextHtmlNode);
    parent.children.splice(nextHtmlNodeIndex, 1);
    return [visit.SKIP, nextHtmlNodeIndex];
  }

  try {
    var _parse = parse(node.value),
        tagName = _parse.tagName,
        attributes = _parse.attributes,
        selfClosing = _parse.selfClosing;

    if (selfClosing) {
      return;
    }

    var newNode = Object.assign({
      type: 'inlineHtml',
      children: parent.children.slice(index + 1, nextHtmlNodeIndex),
      attributes: attributes,
      tagName: tagName
    }, node.position !== void 0 && nextHtmlNode.position !== void 0 && {
      position: {
        end: nextHtmlNode.position.end,
        start: node.position.start,
        indent: node.position.indent
      }
    });
    parent.children[index] = newNode;
    parent.children.splice(index + 1, newNode.children.length + 1);
    return [visit.SKIP, nextHtmlNodeIndex];
  } catch (ex) {
    // parsing failed, let's go with default nodes
    return;
  }
};
/**
 * tweaked version of https://github.com/nghiattran/html-attribute-parser
 */


function stringParser(source) {
  var stringSym = source.currentChar();

  var _char = source.nextChar();

  var string = '';

  while (_char) {
    if (_char === stringSym && source.peek(-1) !== '\\') {
      source.nextChar();
      return string;
    } else {
      string += _char;
    }

    _char = source.nextChar();
  }

  return;
} // the vast chunk of parsing is already done on the remark side of things, but let's have our own simple logic here as well to make sure React can render the element without any problems


function isASCIIAlpha(charCode) {
  return (// https://infra.spec.whatwg.org/#ascii-upper-alpha
    charCode >= 65 && charCode <= 90 || // https://infra.spec.whatwg.org/#ascii-lower-alpha
    charCode >= 97 && charCode <= 122
  );
}

function isASCIIDigit(charCode) {
  return (// https://infra.spec.whatwg.org/#ascii-digit
    charCode >= 48 && charCode <= 57
  );
} // https://html.spec.whatwg.org/multipage/syntax.html#syntax-tag-name


function isValidTagIdentifierCharCode(charCode) {
  return isASCIIAlpha(charCode) || isASCIIDigit(charCode) || // dash for web-components
  charCode === 45;
}

function parseName(source) {
  var _char2 = source.nextChar();

  var name = _char2;

  if (!isASCIIAlpha(_char2.charCodeAt(0))) {
    throw new SyntaxError('tagName has to start with ascii alpha char');
  } // tslint:disable-next-line:no-conditional-assignment


  while ((_char2 = source.nextChar()) && isValidTagIdentifierCharCode(_char2.charCodeAt(0))) {
    name += _char2;
  }

  if (name === '') {
    throw new SyntaxError('No valid tagName found');
  }

  source.nextChar(); // this is to scan `>`

  return name.toLowerCase();
}

function parseAttributes(source) {
  var field = '';

  var _char3 = source.currentChar();

  var attributes = {};

  while (_char3 && _char3 !== '>') {
    if (_char3 === ' ') {
      if (!attributes[field]) {
        attributes[field] = true;
      }

      field = '';
    } else {
      if (_char3 === '=') {
        source.nextChar();
        attributes[field] = stringParser(source);
        _char3 = source.currentChar();
        continue;
      } else {
        field += _char3;
      }
    }

    _char3 = source.nextChar();
  }

  return attributes;
}

function parse(text) {
  var source = new Source(text);
  var tagName = parseName(source);
  return {
    tagName: tagName,
    attributes: parseAttributes(source),
    selfClosing: SELF_CLOSING_HTML_TAGS.includes(tagName)
  };
}

var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
function hasJavascriptProtocol(url) {
  return isJavaScriptProtocol.test(url);
}
var stripJsProtocol = function stripJsProtocol() {
  return function (tree) {
    visit(tree, 'link', onVisit$1);
  };
};

var onVisit$1 = function onVisit(node) {
  if (hasJavascriptProtocol(node.url)) {
    node.url = '';
  }
};

var metaKeyValPairMatcher = /(\S+)\s*=\s*(\"?)([^"]*)(\2|\s|$)/g;

function parseMeta(metastring) {
  var props = {};
  if (!metastring) return props;
  var metaWithoutKeyValPairs = metastring;
  var keyValPairs = metastring.matchAll(metaKeyValPairMatcher);

  var _iterator = _createForOfIteratorHelper(keyValPairs),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var keyValPair = _step.value;
      props[keyValPair[1]] = keyValPair[3];
      metaWithoutKeyValPairs = metaWithoutKeyValPairs.replace(keyValPair[0], '');
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var booleanProps = metaWithoutKeyValPairs.split(' ');

  var _iterator2 = _createForOfIteratorHelper(booleanProps),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var booleanProp = _step2.value;

      if (booleanProp) {
        props[booleanProp] = 'true';
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return props;
}

function codeMdast2Hast() {
  return function transform(root) {
    visit(root, 'code', function (node) {
      var _a = parseMeta(node.meta),
          metaTitle = _a.title,
          metaProps = __rest(_a, ["title"]);

      var annotations = node.annotations || {};
      var title = annotations.title || metaTitle;
      var data = node.data || (node.data = {});

      if (node.meta) {
        // babel will crap out if certain characters, like ", are not escaped
        // don't need meta anymore
        delete node.meta;
      }

      data.hProperties = Object.assign(Object.assign({}, metaProps), {
        title: title,
        lineNumbers: annotations.lineNumbers,
        highlightLines: annotations.highlightLines ? safeStringify$1(annotations.highlightLines) : undefined,
        lang: node.lang
      });
    });
  };
}

function captureAnnotations(node) {
  if (!node || !node.value) {
    return {};
  } // this mdxFlowExpression block is required when in mdx > next.9 context


  if (node.type === 'mdxFlowExpression' && node.value.startsWith('/*') && node.value.endsWith('*/')) {
    // remove comments and whitespace
    var raw = node.value.substr('/*'.length, node.value.length - '*/'.length - '/*'.length).trim(); // load contents of annotation into yaml

    try {
      var contents = parse$2(raw);

      if (typeof contents === 'object') {
        for (var key in contents) {
          if (typeof contents[key] === 'string') {
            // babel will crap out if certain characters, like ", are not escaped
            var escapedContent = contents[key].replace('"', '%22');
            contents[key] = escapedContent;
          }
        } // annotations must be objects, otherwise it's just a regular ol html comment


        return contents;
      }
    } catch (error) {// ignore invalid YAML
    }
  } else if (node.type === 'html' && node.value.startsWith('<!--') && node.value.endsWith('-->')) {
    // remove comments and whitespace
    var _raw = node.value.substr('<!--'.length, node.value.length - '-->'.length - '<!--'.length).trim(); // load contents of annotation into yaml


    try {
      var _contents = parse$2(_raw);

      if (typeof _contents === 'object') {
        // annotations must be objects, otherwise it's just a regular ol html comment
        return _contents;
      }
    } catch (error) {// ignore invalid YAML
    }
  }

  return {};
}

function processNode(node, annotations) {
  if (annotations) {
    return Object.assign(Object.assign({}, node), {
      annotations: annotations,
      data: Object.assign(Object.assign({}, node.data || {}), {
        hProperties: annotations
      })
    });
  }

  return node;
}

var toSpec = function toSpec(root) {
  var nodes = root.children;
  var processed = [];
  var inTab = false;
  var skipNext = false; // temporary variable for storing current tabs

  var tabPlaceholder = {
    type: 'tabs',
    data: {
      hName: 'tabs'
    },
    children: [{
      type: 'tab',
      data: {
        hName: 'tab'
      },
      children: []
    }]
  };

  for (var i in nodes) {
    if (!nodes[i]) continue;

    if (skipNext) {
      skipNext = false;
      continue;
    } // this node


    var node = nodes[i]; // next node

    var next = nodes[+i + 1] ? nodes[+i + 1] : null; // collect annotations, if this is an html node

    var anno = captureAnnotations(node);

    if ('type' in anno) {
      var type = anno.type;

      if (type === 'tab') {
        var _tabPlaceholder = tabPlaceholder,
            children = _tabPlaceholder.children;

        if (inTab && tabPlaceholder) {
          // already inside of a tab, so this is a new one
          children.push({
            type: 'tab',
            data: {
              hName: 'tab'
            },
            children: []
          });
        } else {
          // not inside a tab already
          inTab = true;
        } // set annotations if present


        if (Object.keys(anno).length > 0) {
          children[children.length - 1].annotations = anno; // for mdx and when we upgrade to micromark ecosystem

          Object.assign(children[children.length - 1].data, {
            hProperties: anno
          });
        }

        tabPlaceholder.children = children;
        continue;
      } else if (type === 'tab-end') {
        // finalize tabs
        processed.push(tabPlaceholder); // reset tabPlaceholder

        inTab = false;
        tabPlaceholder = {
          type: 'tabs',
          data: {
            hName: 'tabs'
          },
          children: [{
            type: 'tab',
            data: {
              hName: 'tab'
            },
            children: []
          }]
        };
        continue;
      }
    }

    if (inTab) {
      // if we're in a tab, push this node as a child of the last tab
      var size = tabPlaceholder.children.length;

      if (tabPlaceholder.children[size - 1]) {
        tabPlaceholder.children[size - 1].children.push(processNode(node, anno));
      }
    } else if (Object.keys(anno).length > 0 && next) {
      // annotations apply to next node, process next node now and skip next iteration
      processed.push(processNode(next, anno));
      skipNext = true;
    } else {
      processed.push(processNode(node));
    }
  }

  return {
    type: 'root',
    children: processed
  };
};

var defaultOpts$1 = {
  commonmark: true,
  gfm: true
};
var remarkPreset = [remarkParse, jiraBlocks, [frontmatter$1, ['yaml']], function () {
  return toSpec;
}, codeMdast2Hast, remarkSlug, [inlineLinks, {
  commonmark: true
}], mergeHtml, stripJsProtocol]; // @ts-expect-error

var defaultProcessor$1 = unified().use(remarkPreset);
var parse$1 = function parse(input) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOpts$1;
  var processor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProcessor$1;
  // return the parsed remark ast
  return processor().data('settings', opts).parse(input);
};
var run = function run(input) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOpts$1;
  var processor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProcessor$1;
  // return the parsed remark ast
  return processor().runSync(parse$1(input, opts, processor));
};

var parseWithPointers = function parseWithPointers(value, opts, processor) {
  var tree = parse$1(value, opts, processor);
  return {
    data: tree,
    diagnostics: [],
    ast: tree,
    lineMap: undefined
  };
};

var isError = function isError(_ref) {
  var severity = _ref.severity;
  return severity === DiagnosticSeverity.Error;
};

var safeParse = function safeParse(value) {
  try {
    var _parseYaml = parseWithPointers$1(String(value)),
        data = _parseYaml.data,
        diagnostics = _parseYaml.diagnostics;

    if (data === void 0 || diagnostics.length > 0 && diagnostics.some(isError)) {
      return {};
    }

    return data;
  } catch (_a) {
    return {};
  }
};

var Frontmatter = /*#__PURE__*/function () {
  function Frontmatter(data) {
    var mutate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, Frontmatter);

    var root = typeof data === 'string' ? parseWithPointers(data).data : mutate ? data : JSON.parse(JSON.stringify(data));

    if (root.type !== 'root') {
      throw new TypeError('Malformed yaml was provided');
    }

    this.document = root;

    if (root.children.length > 0 && root.children[0].type === 'yaml') {
      this.node = root.children[0]; // typings are a bit tricked, but let's move the burden of validation to consumer

      this.properties = safeParse(this.node.value);
    } else {
      this.node = {
        type: 'yaml',
        value: ''
      };
      this.properties = null;
    }
  }

  _createClass(Frontmatter, [{
    key: "isEmpty",
    get: function get() {
      for (var _ in this.properties) {
        if (Object.hasOwnProperty.call(this.properties, _)) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "getAll",
    value: function getAll() {
      if (this.properties !== null) {
        return this.properties;
      }
    }
  }, {
    key: "get",
    value: function get(prop) {
      if (this.properties !== null) {
        return _get(this.properties, prop);
      }
    }
  }, {
    key: "set",
    value: function set(prop, value) {
      if (this.properties === null) {
        this.properties = {};
      }

      _set(this.properties, prop, value);

      this.updateDocument();
    }
  }, {
    key: "unset",
    value: function unset(prop) {
      if (this.properties !== null) {
        var path = toPath(prop);
        var lastSegment = Number(path[path.length - 1]);

        if (!Number.isNaN(lastSegment)) {
          var baseObj = path.length > 1 ? this.get(path.slice(0, path.length - 1)) : this.getAll();

          if (Array.isArray(baseObj)) {
            if (baseObj.length < lastSegment) return;
            pullAt(baseObj, lastSegment);
          } else {
            _unset(this.properties, prop);
          }
        } else {
          _unset(this.properties, prop);
        }

        this.updateDocument();
      }
    }
  }, {
    key: "stringify",
    value: function stringify$1() {
      return stringify(this.document);
    }
  }, {
    key: "updateDocument",
    value: function updateDocument() {
      var children = this.document.children;
      if (!children) return;
      var index = children.indexOf(this.node);
      this.node.value = this.isEmpty ? '' : safeStringify(this.properties, {
        flowLevel: 1,
        indent: 2
      }).trim();

      if (this.isEmpty) {
        if (index !== -1) {
          children.splice(index, 1);
        }
      } else if (index === -1) {
        children.unshift(this.node);
      }
    }
  }], [{
    key: "getFrontmatterBlock",
    value: function getFrontmatterBlock(value) {
      var match = value.match(/^(\s*\n)?---(?:.|[\n\r\u2028\u2029])*?\n---/);
      return match === null ? void 0 : match[0];
    }
  }]);

  return Frontmatter;
}();

var toString = require('mdast-util-to-string'); // Priority: yaml title, then first heading


var getProperty = function getProperty(propName, element, data) {
  var target;

  if (data) {
    try {
      var frontmatter = new Frontmatter(data, true);
      target = frontmatter.get(propName);

      if (element && !target) {
        var elem = select(element, data);

        if (elem) {
          target = toString(elem);
        }
      }
    } catch (e) {
      console.warn("Error getting ".concat(propName, " from markdown document"), e);
    }
  }

  return target;
};

var getSummary = function getSummary(data) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var summary = getProperty('summary', 'paragraph', data);

  if (summary && opts.truncate) {
    // +3 to account for ellipsis
    summary = truncate(summary, {
      length: opts.truncate + 3
    });
  }

  return summary;
};

var getTags = function getTags(data) {
  var tags = [];

  if (data) {
    try {
      var frontmatter = new Frontmatter(data, true);
      var dataTags = frontmatter.get('tags');

      if (dataTags && Array.isArray(dataTags)) {
        return dataTags.reduce(function (filteredTags, tag) {
          if (tag && typeof tag === 'string' && tag !== 'undefined' && tag !== 'null') {
            filteredTags.push(String(tag));
          }

          return filteredTags;
        }, []);
      }
    } catch (e) {
      console.warn('Error getting tags from markdown document', e);
    }
  }

  return tags;
};

var getTitle = function getTitle(data) {
  return getProperty('title', 'heading', data);
};

var Reader = /*#__PURE__*/function () {
  function Reader() {
    _classCallCheck(this, Reader);

    this.fromSpec = fromSpec;
    this.toSpec = toSpec;
  }

  _createClass(Reader, [{
    key: "fromLang",
    value: function fromLang(raw) {
      return parse$1(raw);
    }
  }, {
    key: "toLang",
    value: function toLang(data) {
      return stringify(data, {
        // https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#options
        commonmark: true,
        gfm: true,
        bullet: '*',
        fence: '`',
        fences: true,
        incrementListMarker: true,
        listItemIndent: '1'
      });
    }
  }, {
    key: "read",
    value: function read(raw) {
      return this.fromSpec(this.fromLang(raw));
    }
  }]);

  return Reader;
}();



var mdast = /*#__PURE__*/Object.freeze({
  __proto__: null
});



var index = /*#__PURE__*/Object.freeze({
  __proto__: null
});

export { Frontmatter, mdast as MDAST, Reader, SELF_CLOSING_HTML_TAGS, index as SMDAST, getJsonPathForPosition, getLocationForJsonPath, getProperty, getSummary, getTags, getTitle, hasJavascriptProtocol, mergeHtml, parse$1 as parse, parseWithPointers, remarkPreset, run, stringify, stripJsProtocol };
