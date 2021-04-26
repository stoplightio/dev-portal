"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Story = void 0;
const tslib_1 = require("tslib");
const contact_json_1 = tslib_1.__importDefault(require("../../../__fixtures__/schemas/contact.json"));
const story_helper_1 = require("../story-helper");
const Model_1 = require("./Model");
const { meta, createHoistedStory } = story_helper_1.createStoriesForDocsComponent(Model_1.Model);
exports.default = meta;
exports.Story = createHoistedStory({ data: contact_json_1.default });
//# sourceMappingURL=Model.stories.js.map