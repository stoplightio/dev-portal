"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instagram = exports.Github = exports.DigitalOcean = exports.Box = exports.StackedLayout = exports.APIWithoutDescription = exports.APIWithJSONProvidedDirectly = exports.APIWithYamlProvidedDirectly = void 0;
const tslib_1 = require("tslib");
const yaml_1 = require("@stoplight/yaml");
const React = tslib_1.__importStar(require("react"));
const simpleApiWithoutDescription_1 = require("../__fixtures__/api-descriptions/simpleApiWithoutDescription");
const zoomApiYaml_1 = require("../__fixtures__/api-descriptions/zoomApiYaml");
const API_1 = require("./API");
exports.default = {
    title: 'Public/API',
    component: API_1.API,
    argTypes: {
        apiDescriptionDocument: { control: 'text', type: { required: false }, table: { category: 'Input' } },
        apiDescriptionUrl: { control: 'text', table: { category: 'Input' } },
        layout: {
            control: { type: 'inline-radio' },
            table: { category: 'UI' },
        },
        basePath: { table: { category: 'Routing' } },
        router: { table: { category: 'Routing' } },
    },
    args: {
        router: 'memory',
    },
};
const Template = args => React.createElement(API_1.API, Object.assign({}, args));
exports.APIWithYamlProvidedDirectly = Template.bind({});
exports.APIWithYamlProvidedDirectly.args = {
    apiDescriptionDocument: zoomApiYaml_1.zoomApiYaml,
};
exports.APIWithYamlProvidedDirectly.storyName = 'Direct YAML Input (Zoom)';
exports.APIWithJSONProvidedDirectly = Template.bind({});
exports.APIWithJSONProvidedDirectly.args = {
    apiDescriptionDocument: JSON.stringify(yaml_1.parse(zoomApiYaml_1.zoomApiYaml), null, '  '),
};
exports.APIWithJSONProvidedDirectly.storyName = 'Direct JSON Input (Zoom)';
exports.APIWithoutDescription = Template.bind({});
exports.APIWithoutDescription.args = {
    apiDescriptionDocument: simpleApiWithoutDescription_1.simpleApiWithoutDescription,
};
exports.APIWithoutDescription.storyName = 'API Without Description';
exports.StackedLayout = Template.bind({});
exports.StackedLayout.args = {
    apiDescriptionDocument: JSON.stringify(yaml_1.parse(zoomApiYaml_1.zoomApiYaml), null, '  '),
    layout: 'stacked',
};
exports.StackedLayout.storyName = 'Stacked Layout (Zoom)';
exports.Box = Template.bind({});
exports.Box.args = {
    apiDescriptionUrl: 'https://raw.githubusercontent.com/box/box-openapi/main/content/openapi.yml',
};
exports.Box.storyName = 'Box';
exports.DigitalOcean = Template.bind({});
exports.DigitalOcean.args = {
    apiDescriptionUrl: 'https://raw.githubusercontent.com/digitalocean/openapi/main/specification/DigitalOcean-public.v2.yaml',
};
exports.DigitalOcean.storyName = 'DigitalOcean';
exports.Github = Template.bind({});
exports.Github.args = {
    apiDescriptionUrl: 'https://raw.githubusercontent.com/github/rest-api-description/main/descriptions/ghes-3.0/ghes-3.0.json',
};
exports.Github.storyName = 'GitHub';
exports.Instagram = Template.bind({});
exports.Instagram.args = {
    apiDescriptionUrl: 'https://api.apis.guru/v2/specs/instagram.com/1.0.0/swagger.yaml',
};
exports.Instagram.storyName = 'Instagram';
//# sourceMappingURL=API.stories.js.map