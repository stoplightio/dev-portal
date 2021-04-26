"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playground = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const TableOfContents_1 = require("./TableOfContents");
exports.default = {
    title: 'Internal/MosaicTableOfContents',
    component: TableOfContents_1.TableOfContents,
    argTypes: {
        tree: { table: { category: 'Input' } },
    },
};
const Playground = args => (React.createElement(mosaic_1.Flex, { justifyContent: "center", style: { width: '300px' } },
    React.createElement(TableOfContents_1.TableOfContents, Object.assign({}, args))));
exports.Playground = Playground;
exports.Playground.storyName = 'Todo API';
exports.Playground.args = {
    tree: [
        {
            id: '/',
            slug: '/',
            title: 'Overview',
            type: 'overview',
            meta: '',
        },
        {
            title: 'Endpoints',
        },
        {
            id: '/operations/get-todos',
            slug: '/operations/get-todos',
            title: 'List Todos',
            type: 'http_operation',
            meta: 'get',
        },
        {
            id: '/operations/post-todos',
            slug: '/operations/post-todos',
            title: 'Create Todo',
            type: 'http_operation',
            meta: 'post',
        },
        {
            id: '/operations/get-todos-id',
            slug: '/operations/get-todos-id',
            title: 'Get Todo',
            type: 'http_operation',
            meta: 'get',
        },
        {
            id: '/operations/put-todos-id',
            slug: '/operations/put-todos-id',
            title: 'Replace Todo',
            type: 'http_operation',
            meta: 'put',
        },
        {
            id: '/operations/delete-todos-id',
            slug: '/operations/delete-todos-id',
            title: 'Delete Todo',
            type: 'http_operation',
            meta: 'delete',
        },
        {
            id: '/operations/patch-todos-id',
            slug: '/operations/patch-todos-id',
            title: 'Update Todo',
            type: 'http_operation',
            meta: 'patch',
        },
        {
            title: 'Users',
            items: [
                {
                    id: '/operations/get-users',
                    slug: '/operations/get-users',
                    title: 'Get User',
                    type: 'http_operation',
                    meta: 'get',
                },
                {
                    id: '/operations/delete-users-userID',
                    slug: '/operations/delete-users-userID',
                    title: 'Delete User',
                    type: 'http_operation',
                    meta: 'delete',
                },
                {
                    id: '/operations/post-users-userID',
                    slug: '/operations/post-users-userID',
                    title: 'Create User',
                    type: 'http_operation',
                    meta: 'post',
                },
            ],
        },
        {
            title: 'Schemas',
        },
        {
            id: '/schemas/Todos',
            slug: '/schemas/Todos',
            title: 'Todo',
            type: 'model',
            meta: '',
        },
        {
            id: '/schemas/User',
            slug: '/schemas/User',
            title: 'User',
            type: 'model',
            meta: '',
        },
    ],
};
//# sourceMappingURL=TableOfContents.stories.js.map