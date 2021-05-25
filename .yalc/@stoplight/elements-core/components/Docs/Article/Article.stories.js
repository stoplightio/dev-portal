"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KitchenSink = exports.Basic = void 0;
const tslib_1 = require("tslib");
const basic_md_1 = tslib_1.__importDefault(require("../../../__fixtures__/articles/basic.md"));
const kitchen_sink_md_1 = tslib_1.__importDefault(require("../../../__fixtures__/articles/kitchen-sink.md"));
const story_helper_1 = require("../story-helper");
const index_1 = require("./index");
const { meta, createStory } = story_helper_1.createStoriesForDocsComponent(index_1.Article);
exports.default = meta;
exports.Basic = createStory('Basic', { data: basic_md_1.default });
exports.KitchenSink = createStory('Kitchen Sink', { data: kitchen_sink_md_1.default });
//# sourceMappingURL=Article.stories.js.map