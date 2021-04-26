"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicatedSecurityScheme = exports.emptySecurityOperation = exports.singleSecurityOperation = void 0;
const types_1 = require("@stoplight/types");
exports.singleSecurityOperation = {
    id: '?http-operation-id?',
    iid: 'GET-simple',
    method: 'get',
    path: '/todos',
    summary: 'Get 200',
    responses: [
        {
            code: '200',
            description: 'OK',
        },
    ],
    servers: [{ url: 'https://todos.stoplight.io' }],
    security: [
        [
            {
                key: 'api_key',
                type: 'apiKey',
                name: 'API-Key',
                in: 'header',
                description: "Use `?apikey=123` to authenticate requests. It's super secure.",
            },
        ],
    ],
};
exports.emptySecurityOperation = {
    id: '?http-operation-id?',
    iid: 'GET-simple',
    method: 'get',
    path: '/todos',
    summary: 'Get 200',
    responses: [
        {
            code: '200',
            description: 'OK',
        },
    ],
    servers: [{ url: 'https://todos.stoplight.io' }],
    security: [[]],
};
exports.duplicatedSecurityScheme = {
    id: '?http-operation-id?',
    iid: 'GET-simple',
    method: 'get',
    path: '/todos',
    summary: 'Get 200',
    responses: [
        {
            code: '200',
            description: 'OK',
        },
    ],
    servers: [{ url: 'https://todos.stoplight.io' }],
    security: [
        [
            {
                key: 'api_key',
                type: 'apiKey',
                name: 'API-Key',
                in: 'query',
                description: "Use `?apikey=123` to authenticate requests. It's super secure.",
            },
            {
                type: 'oauth2',
                key: 'oauth2',
                flows: {},
            },
        ],
    ],
    request: {
        query: [
            {
                schema: {
                    type: 'number',
                    default: 1,
                    enum: [0, 1, 3],
                    exclusiveMinimum: 0,
                    exclusiveMaximum: 10,
                    minimum: 5,
                    maximum: 10,
                },
                deprecated: true,
                description: 'How many todos to limit?',
                name: 'api-key',
                style: types_1.HttpParamStyles.Form,
            },
        ],
        headers: [
            {
                schema: {
                    type: 'string',
                    description: 'Your Stoplight account id',
                    default: 'account-id-default',
                },
                name: 'Api-KeY',
                style: types_1.HttpParamStyles.Simple,
                required: true,
                examples: [
                    {
                        value: 'example id',
                        key: 'example',
                    },
                ],
            },
            {
                name: 'authorization',
                style: types_1.HttpParamStyles.Simple,
                schema: {
                    type: 'string',
                },
            },
        ],
    },
};
//# sourceMappingURL=securedOperation.js.map