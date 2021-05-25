"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestBodyEmptySchema = void 0;
exports.requestBodyEmptySchema = {
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
                    schema: {},
                },
            ],
        },
    },
};
exports.default = exports.requestBodyEmptySchema;
//# sourceMappingURL=request-body-empty-schema.js.map