"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operationWithUrlVariables = void 0;
exports.operationWithUrlVariables = {
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
    servers: [
        {
            url: '{protocol}://{namespace}.stoplight.io',
            variables: {
                protocol: {
                    default: 'ftp',
                },
                namespace: {
                    default: 'default-namespace',
                },
            },
        },
    ],
};
//# sourceMappingURL=with-url-variables.js.map