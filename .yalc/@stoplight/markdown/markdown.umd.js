(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash/get'), require('remark-stringify'), require('unified'), require('tslib'), require('@stoplight/yaml'), require('unist-util-visit'), require('remark-frontmatter'), require('remark-inline-links'), require('remark-parse'), require('remark-slug'), require('@stoplight/json'), require('@stoplight/types'), require('lodash/pullAt'), require('lodash/set'), require('lodash/toPath'), require('lodash/unset'), require('lodash/truncate'), require('unist-util-select')) :
  typeof define === 'function' && define.amd ? define(['exports', 'lodash/get', 'remark-stringify', 'unified', 'tslib', '@stoplight/yaml', 'unist-util-visit', 'remark-frontmatter', 'remark-inline-links', 'remark-parse', 'remark-slug', '@stoplight/json', '@stoplight/types', 'lodash/pullAt', 'lodash/set', 'lodash/toPath', 'lodash/unset', 'lodash/truncate', 'unist-util-select'], factory) :
  (global = global || self, factory(global.Markdown = {}, global._get, global.remarkStringify, global.unified, global.tslib, global.yaml, global.visit, global.frontmatter$1, global.inlineLinks, global.remarkParse, global.remarkSlug, global.json, global.types, global.pullAt, global.set, global.toPath, global.unset, global.truncate, global.unistUtilSelect));
}(this, (function (exports, _get, remarkStringify, unified, tslib, yaml, visit, frontmatter$1, inlineLinks, remarkParse, remarkSlug, json, types, pullAt, set, toPath, unset, truncate, unistUtilSelect) { 'use strict';

  _get = _get && _get.hasOwnProperty('default') ? _get['default'] : _get;
  remarkStringify = remarkStringify && remarkStringify.hasOwnProperty('default') ? remarkStringify['default'] : remarkStringify;
  unified = unified && unified.hasOwnProperty('default') ? unified['default'] : unified;
  visit = visit && visit.hasOwnProperty('default') ? visit['default'] : visit;
  frontmatter$1 = frontmatter$1 && frontmatter$1.hasOwnProperty('default') ? frontmatter$1['default'] : frontmatter$1;
  inlineLinks = inlineLinks && inlineLinks.hasOwnProperty('default') ? inlineLinks['default'] : inlineLinks;
  remarkParse = remarkParse && remarkParse.hasOwnProperty('default') ? remarkParse['default'] : remarkParse;
  remarkSlug = remarkSlug && remarkSlug.hasOwnProperty('default') ? remarkSlug['default'] : remarkSlug;
  pullAt = pullAt && pullAt.hasOwnProperty('default') ? pullAt['default'] : pullAt;
  set = set && set.hasOwnProperty('default') ? set['default'] : set;
  toPath = toPath && toPath.hasOwnProperty('default') ? toPath['default'] : toPath;
  unset = unset && unset.hasOwnProperty('default') ? unset['default'] : unset;
  truncate = truncate && truncate.hasOwnProperty('default') ? truncate['default'] : truncate;

  var getJsonPathForPosition = function getJsonPathForPosition(_a, position) {
    var ast = _a.ast;
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

  var getLocationForJsonPath = function getLocationForJsonPath(_a, path) {
    var ast = _a.ast;
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
    var _a = this,
        Compiler = _a.Compiler,
        Parser = _a.Parser;

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
    return "[block:" + node.code + "]\n" + node.value + "\n[/block]";
  }

  function resolver (opts) {
    var _this = this;

    var Compiler = this.Compiler;

    if (Compiler !== void 0) {
      Compiler.prototype.visitors.code = createCompiler(Compiler.prototype.visitors.code);
    }

    if (opts === null || opts === void 0 ? void 0 : opts.resolver) {
      return function (tree) {
        return tslib.__awaiter(_this, void 0, void 0, function () {
          var promises;
          return tslib.__generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                promises = [];
                visit(tree, 'code', createVisitor(opts.resolver, promises));
                return [4
                /*yield*/
                , Promise.all(promises)];

              case 1:
                _a.sent();

                return [2
                /*return*/
                ];
            }
          });
        });
      };
    }
  }

  var createVisitor = function createVisitor(resolver, promises) {
    return function (node) {
      if (typeof node.value !== 'string') return;
      if (node.meta !== 'json_schema' && node.meta !== 'http') return;

      try {
        promises.push(resolver(node, yaml.parse(node.value)).then(function (resolved) {
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
        return fn.call(this, tslib.__assign(tslib.__assign({}, node), {
          value: node.lang === 'json' ? JSON.stringify(node.resolved, null, 2) : yaml.safeStringify(node.resolved, {
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
      value: "<!--" + (propCount > 1 ? '\n' : ' ') + yaml.safeStringify(node.annotations).trim() + (propCount > 1 ? '\n' : ' ') + "-->"
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

    res.push.apply(res, tslib.__spreadArray([], tslib.__read(transform(node.children)))); // follow with 'tab-end' annotation type, marking the end of the tab container

    res.push({
      type: 'html',
      value: "<!-- " + yaml.safeStringify({
        type: 'tab-end'
      }).trim() + " -->"
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
        processed.push.apply(processed, tslib.__spreadArray([], tslib.__read(transformBlockquote(node))));
      } else if (type === 'tabs') {
        // nothing needs to be done for tabContainers apart from processing the child tabs
        processed.push.apply(processed, tslib.__spreadArray([], tslib.__read(transformTabs(node))));
      } else if (type === 'tab') {
        processed.push.apply(processed, tslib.__spreadArray([], tslib.__read(transformTab(node))));
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
  var stringify = function stringify(tree, opts, processor) {
    if (opts === void 0) {
      opts = defaultOpts;
    }

    if (processor === void 0) {
      processor = defaultProcessor;
    }

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
      var _a = parse(node.value),
          tagName = _a.tagName,
          attributes = _a.attributes,
          selfClosing = _a.selfClosing;

      if (selfClosing) {
        return;
      }

      var newNode = tslib.__assign({
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
    var e_1, _a, e_2, _b;

    var props = {};
    if (!metastring) return props;
    var metaWithoutKeyValPairs = metastring;
    var keyValPairs = metastring.matchAll(metaKeyValPairMatcher);

    try {
      for (var keyValPairs_1 = tslib.__values(keyValPairs), keyValPairs_1_1 = keyValPairs_1.next(); !keyValPairs_1_1.done; keyValPairs_1_1 = keyValPairs_1.next()) {
        var keyValPair = keyValPairs_1_1.value;
        props[keyValPair[1]] = keyValPair[3];
        metaWithoutKeyValPairs = metaWithoutKeyValPairs.replace(keyValPair[0], '');
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (keyValPairs_1_1 && !keyValPairs_1_1.done && (_a = keyValPairs_1["return"])) _a.call(keyValPairs_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    var booleanProps = metaWithoutKeyValPairs.split(' ');

    try {
      for (var booleanProps_1 = tslib.__values(booleanProps), booleanProps_1_1 = booleanProps_1.next(); !booleanProps_1_1.done; booleanProps_1_1 = booleanProps_1.next()) {
        var booleanProp = booleanProps_1_1.value;

        if (booleanProp) {
          props[booleanProp] = 'true';
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (booleanProps_1_1 && !booleanProps_1_1.done && (_b = booleanProps_1["return"])) _b.call(booleanProps_1);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    return props;
  }

  function codeMdast2Hast() {
    return function transform(root) {
      visit(root, 'code', function (node) {
        var _a = parseMeta(node.meta),
            metaTitle = _a.title,
            metaProps = tslib.__rest(_a, ["title"]);

        var annotations = node.annotations || {};
        var title = annotations.title || metaTitle;
        node.annotations = tslib.__assign(tslib.__assign(tslib.__assign({}, annotations), metaProps), {
          title: title,
          lineNumbers: annotations.lineNumbers,
          highlightLines: annotations.highlightLines ? json.safeStringify(annotations.highlightLines) : undefined,
          lang: node.lang
        });

        if (node.meta) {
          // babel will crap out if certain characters, like ", are not escaped
          // don't need meta anymore
          delete node.meta;
        }

        var data = node.data || (node.data = {});
        data.hProperties = tslib.__assign(tslib.__assign({}, data.hProperties || {}), annotations);
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
        var contents = yaml.parse(raw);

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
      var raw = node.value.substr('<!--'.length, node.value.length - '-->'.length - '<!--'.length).trim(); // load contents of annotation into yaml

      try {
        var contents = yaml.parse(raw);

        if (typeof contents === 'object') {
          // annotations must be objects, otherwise it's just a regular ol html comment
          return contents;
        }
      } catch (error) {// ignore invalid YAML
      }
    }

    return {};
  }

  function processNode(node, annotations) {
    if (annotations) {
      var data = node.data || {};
      return tslib.__assign(tslib.__assign({}, node), {
        annotations: annotations,
        data: tslib.__assign(tslib.__assign({}, data), {
          hName: node.type,
          hProperties: tslib.__assign(tslib.__assign({}, data.hProperties || {}), annotations)
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
          var children = tabPlaceholder.children;

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
  var parse$1 = function parse(input, opts, processor) {
    if (opts === void 0) {
      opts = defaultOpts$1;
    }

    if (processor === void 0) {
      processor = defaultProcessor$1;
    } // return the parsed remark ast


    return processor().data('settings', opts).parse(input);
  };
  var run = function run(input, opts, processor) {
    if (opts === void 0) {
      opts = defaultOpts$1;
    }

    if (processor === void 0) {
      processor = defaultProcessor$1;
    } // return the parsed remark ast


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

  var isError = function isError(_a) {
    var severity = _a.severity;
    return severity === types.DiagnosticSeverity.Error;
  };

  var safeParse = function safeParse(value) {
    try {
      var _a = yaml.parseWithPointers(String(value)),
          data = _a.data,
          diagnostics = _a.diagnostics;

      if (data === void 0 || diagnostics.length > 0 && diagnostics.some(isError)) {
        return {};
      }

      return data;
    } catch (_b) {
      return {};
    }
  };

  var Frontmatter =
  /** @class */
  function () {
    function Frontmatter(data, mutate) {
      if (mutate === void 0) {
        mutate = false;
      }

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

    Object.defineProperty(Frontmatter.prototype, "isEmpty", {
      get: function get() {
        for (var _ in this.properties) {
          if (Object.hasOwnProperty.call(this.properties, _)) {
            return false;
          }
        }

        return true;
      },
      enumerable: false,
      configurable: true
    });

    Frontmatter.prototype.getAll = function () {
      if (this.properties !== null) {
        return this.properties;
      }
    };

    Frontmatter.prototype.get = function (prop) {
      if (this.properties !== null) {
        return _get(this.properties, prop);
      }
    };

    Frontmatter.prototype.set = function (prop, value) {
      if (this.properties === null) {
        this.properties = {};
      }

      set(this.properties, prop, value);
      this.updateDocument();
    };

    Frontmatter.prototype.unset = function (prop) {
      if (this.properties !== null) {
        var path = toPath(prop);
        var lastSegment = Number(path[path.length - 1]);

        if (!Number.isNaN(lastSegment)) {
          var baseObj = path.length > 1 ? this.get(path.slice(0, path.length - 1)) : this.getAll();

          if (Array.isArray(baseObj)) {
            if (baseObj.length < lastSegment) return;
            pullAt(baseObj, lastSegment);
          } else {
            unset(this.properties, prop);
          }
        } else {
          unset(this.properties, prop);
        }

        this.updateDocument();
      }
    };

    Frontmatter.prototype.stringify = function () {
      return stringify(this.document);
    };

    Frontmatter.getFrontmatterBlock = function (value) {
      var match = value.match(/^(\s*\n)?---(?:.|[\n\r\u2028\u2029])*?\n---/);
      return match === null ? void 0 : match[0];
    };

    Frontmatter.prototype.updateDocument = function () {
      var children = this.document.children;
      if (!children) return;
      var index = children.indexOf(this.node);
      this.node.value = this.isEmpty ? '' : yaml.safeStringify(this.properties, {
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
    };

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
          var elem = unistUtilSelect.select(element, data);

          if (elem) {
            target = toString(elem);
          }
        }
      } catch (e) {
        console.warn("Error getting " + propName + " from markdown document", e);
      }
    }

    return target;
  };

  var getSummary = function getSummary(data, opts) {
    if (opts === void 0) {
      opts = {};
    }

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

  var Reader =
  /** @class */
  function () {
    function Reader() {
      this.fromSpec = fromSpec;
      this.toSpec = toSpec;
    }

    Reader.prototype.fromLang = function (raw) {
      return parse$1(raw);
    };

    Reader.prototype.toLang = function (data) {
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
    };

    Reader.prototype.read = function (raw) {
      return this.fromSpec(this.fromLang(raw));
    };

    return Reader;
  }();



  var mdast = /*#__PURE__*/Object.freeze({
    __proto__: null
  });



  var index = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  exports.Frontmatter = Frontmatter;
  exports.MDAST = mdast;
  exports.Reader = Reader;
  exports.SELF_CLOSING_HTML_TAGS = SELF_CLOSING_HTML_TAGS;
  exports.SMDAST = index;
  exports.getJsonPathForPosition = getJsonPathForPosition;
  exports.getLocationForJsonPath = getLocationForJsonPath;
  exports.getProperty = getProperty;
  exports.getSummary = getSummary;
  exports.getTags = getTags;
  exports.getTitle = getTitle;
  exports.hasJavascriptProtocol = hasJavascriptProtocol;
  exports.mergeHtml = mergeHtml;
  exports.parse = parse$1;
  exports.parseWithPointers = parseWithPointers;
  exports.remarkPreset = remarkPreset;
  exports.run = run;
  exports.stringify = stringify;
  exports.stripJsProtocol = stripJsProtocol;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
