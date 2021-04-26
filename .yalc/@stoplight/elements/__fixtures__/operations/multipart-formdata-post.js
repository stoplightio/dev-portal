"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpOperation = void 0;
exports.httpOperation = {
    id: '?http-operation-id?',
    iid: 'POST_todos',
    method: 'post',
    path: '/todos',
    summary: 'Create Todo',
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
                    mediaType: 'multipart/form-data',
                    schema: {
                        type: 'object',
                        properties: {
                            name: {
                                type: 'string',
                            },
                            completed: {
                                type: 'boolean',
                            },
                            someEnum: {
                                type: 'string',
                                enum: ['a', 'b', 'c'],
                            },
                            someFile: {
                                type: 'string',
                                format: 'binary',
                            },
                        },
                        required: ['name', 'completed'],
                    },
                },
            ],
        },
    },
};
exports.default = exports.httpOperation;
//# sourceMappingURL=multipart-formdata-post.js.map