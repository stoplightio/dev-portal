"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Story = void 0;
const put_todos_1 = require("../../../__fixtures__/operations/put-todos");
const story_helper_1 = require("../story-helper");
const HttpOperation_1 = require("./HttpOperation");
const { meta, createHoistedStory } = story_helper_1.createStoriesForDocsComponent(HttpOperation_1.HttpOperation);
exports.default = meta;
exports.Story = createHoistedStory({ data: put_todos_1.httpOperation });
//# sourceMappingURL=HttpOperation.stories.js.map