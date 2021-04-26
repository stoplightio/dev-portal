"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Story = void 0;
const petstore_1 = require("../../../__fixtures__/services/petstore");
const story_helper_1 = require("../story-helper");
const HttpService_1 = require("./HttpService");
const { meta, createHoistedStory } = story_helper_1.createStoriesForDocsComponent(HttpService_1.HttpService);
exports.default = meta;
exports.Story = createHoistedStory({ data: petstore_1.httpService });
//# sourceMappingURL=HttpService.stories.js.map