"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsStory = void 0;
const tslib_1 = require("tslib");
const types_1 = require("@stoplight/types");
const React = tslib_1.__importStar(require("react"));
const contact_json_1 = tslib_1.__importDefault(require("../../__fixtures__/schemas/contact.json"));
const Docs_1 = require("./Docs");
exports.default = {
    title: 'Internal/Docs',
    component: Docs_1.Docs,
    argTypes: {
        nodeData: {
            control: { type: 'object' },
        },
        nodeType: {
            control: {
                type: 'select',
                options: Object.values(types_1.NodeType),
            },
        },
    },
};
const DocsStory = args => React.createElement(Docs_1.Docs, Object.assign({}, args));
exports.DocsStory = DocsStory;
exports.DocsStory.args = {
    nodeType: types_1.NodeType.Model,
    nodeData: contact_json_1.default,
};
exports.DocsStory.storyName = 'Docs Playground';
//# sourceMappingURL=Docs.stories.js.map