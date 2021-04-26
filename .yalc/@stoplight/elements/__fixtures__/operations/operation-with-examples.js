"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpOperation = void 0;
exports.httpOperation = {
    method: 'GET',
    path: 'some/path',
    id: 'some-id',
    responses: [
        {
            code: '200',
            contents: [
                {
                    mediaType: 'application/json',
                    examples: [
                        {
                            key: 'First Example',
                            value: { some: 'example' },
                        },
                        {
                            key: 'Second Example',
                            value: '{ "another": "example" }',
                        },
                    ],
                },
            ],
        },
        {
            code: '201',
            contents: [
                {
                    mediaType: 'application/json',
                    schema: {
                        properties: {
                            someParameter: {
                                type: 'string',
                            },
                        },
                    },
                },
            ],
        },
        {
            code: '202',
            contents: [
                {
                    mediaType: 'application/json',
                    examples: [
                        {
                            key: 'Only one example',
                            value: { this: 'is an example' },
                        },
                    ],
                },
            ],
        },
        {
            code: '203',
            contents: [
                {
                    mediaType: 'application/xml',
                    schema: {
                        properties: {
                            someParameter: {
                                type: 'string',
                            },
                        },
                    },
                },
            ],
        },
        {
            code: '404',
            contents: [
                {
                    mediaType: 'application/json',
                },
            ],
        },
    ],
};
//# sourceMappingURL=operation-with-examples.js.map