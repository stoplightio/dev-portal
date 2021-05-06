"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpOperation = void 0;
exports.httpOperation = {
    id: '?http-operation-id?',
    iid: 'POST_todos',
    description: 'This creates a Todo object.\n\nTesting `inline code`.',
    method: 'post',
    path: '/todos',
    summary: 'Create Todo',
    responses: [
        {
            code: '201',
            description: '',
            headers: [],
            contents: [
                {
                    mediaType: 'application/json',
                    schema: {
                        title: 'Todo Partial',
                        type: 'object',
                        properties: { name: { type: 'string' }, completed: { type: ['boolean', 'null'] } },
                        required: ['name', 'completed'],
                    },
                },
            ],
        },
    ],
    servers: [{ url: 'https://todos.stoplight.io' }, { url: 'http://todos.stoplight.io' }],
    request: {
        body: {
            contents: [
                {
                    mediaType: 'application/json',
                    schema: {
                        $ref: '#/__bundled__/schema',
                    },
                },
            ],
        },
    },
    tags: [{ name: 'Todos' }],
    __bundled__: {
        schema: {
            title: 'Todo Partial',
            type: 'object',
            properties: { name: { type: 'string' }, completed: { type: ['boolean', 'null'] } },
            required: ['name', 'completed'],
        },
    },
};
//# sourceMappingURL=referenced-body.js.map