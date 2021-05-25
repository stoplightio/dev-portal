"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStoriesForDocsComponent = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const createStoriesForDocsComponent = (Component) => {
    const createStory = (name, input) => {
        const story = args => React.createElement(Component, args);
        story.args = input;
        story.storyName = name;
        return story;
    };
    return {
        meta: {
            title: `Internal/Docs/${Component.displayName}`,
            component: Component,
            argTypes: {
                data: {
                    control: { type: 'object' },
                },
                FallbackComponent: { table: { disable: true } },
                recoverableProps: { table: { disable: true } },
            },
        },
        createStory: createStory,
        createHoistedStory: input => { var _a, _b; return createStory((_b = (_a = Component.displayName) !== null && _a !== void 0 ? _a : Component.name) !== null && _b !== void 0 ? _b : '_unknown_', input); },
    };
};
exports.createStoriesForDocsComponent = createStoriesForDocsComponent;
//# sourceMappingURL=story-helper.js.map