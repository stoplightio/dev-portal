"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestBody = void 0;
exports.requestBody = {
    id: '?http-operation-id?',
    iid: 'POST_USERS',
    method: 'POST',
    path: '/users',
    summary: 'Post Users',
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
                },
                {
                    mediaType: 'application/x-www-form-urlencoded',
                    schema: {
                        type: 'object',
                        properties: {
                            name: { type: 'string' },
                            completed: { type: 'boolean' },
                            someEnum: { type: 'string', enum: ['a', 'b', 'c'] },
                        },
                        required: ['name', 'completed'],
                    },
                },
            ],
        },
    },
};
exports.default = exports.requestBody;
//# sourceMappingURL=request-body.js.map