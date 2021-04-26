"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleExampleRequestBody = exports.examplesRequestBody = void 0;
exports.examplesRequestBody = {
    id: '?http-operation-id?',
    iid: 'PUT_USERS',
    method: 'put',
    path: '/users',
    summary: 'Put Users',
    responses: [
        {
            code: '200',
        },
    ],
    servers: [
        {
            url: 'https://todos.stoplight.io',
        },
    ],
    request: {
        body: {
            contents: [
                {
                    mediaType: 'application/json',
                    schema: {
                        type: 'object',
                        properties: {
                            name: {
                                type: 'string',
                            },
                            age: {
                                type: 'number',
                            },
                            trial: {
                                type: 'boolean',
                                readOnly: true,
                            },
                        },
                    },
                    examples: [
                        {
                            key: 'example-1',
                            value: {
                                name: 'Andrew',
                                age: 19,
                                trial: true,
                            },
                        },
                        {
                            key: 'named example',
                            value: {
                                name: 'Jane',
                                age: 36,
                                trial: false,
                            },
                        },
                        {
                            key: 'example-3',
                            value: {
                                name: 'Max',
                                age: 23,
                                trial: true,
                            },
                        },
                    ],
                },
            ],
        },
    },
};
exports.singleExampleRequestBody = {
    id: '?http-operation-id?',
    iid: 'PUT_USERS',
    method: 'put',
    path: '/users',
    summary: 'Put Users',
    responses: [
        {
            code: '200',
        },
    ],
    servers: [
        {
            url: 'https://todos.stoplight.io',
        },
    ],
    request: {
        body: {
            contents: [
                {
                    mediaType: 'application/json',
                    schema: {
                        type: 'object',
                        properties: {
                            name: {
                                type: 'string',
                            },
                            age: {
                                type: 'number',
                            },
                            trial: {
                                type: 'boolean',
                                readOnly: true,
                            },
                        },
                    },
                    examples: [
                        {
                            key: 'example-1',
                            value: {
                                name: 'Andrew',
                                age: 19,
                                trial: true,
                            },
                        },
                    ],
                },
            ],
        },
    },
};
exports.default = exports.examplesRequestBody;
//# sourceMappingURL=examples-request-body.js.map