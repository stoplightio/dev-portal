"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@stoplight/types");
const CodeComponent_1 = require("./CodeComponent");
describe('parseHttpRequest', () => {
    it('parses HttpRequest with relative url', () => {
        const request = {
            method: 'get',
            url: '/todos',
            baseUrl: 'http://test',
            query: {},
            headers: {},
        };
        const httpOperation = CodeComponent_1.parseHttpRequest(request);
        expect(httpOperation).toEqual({
            id: '?http-operation-id?',
            method: 'get',
            path: '/todos',
            servers: [{ url: 'http://test' }],
            request: {
                headers: [],
                query: [],
            },
            responses: [],
        });
    });
    it('parses HttpRequest with absolute url', () => {
        const request = {
            method: 'get',
            url: 'http://test/todos',
            baseUrl: '',
            query: {},
            headers: {},
        };
        const httpOperation = CodeComponent_1.parseHttpRequest(request);
        expect(httpOperation).toEqual({
            id: '?http-operation-id?',
            method: 'get',
            path: '/todos',
            servers: [{ url: 'http://test' }],
            request: {
                headers: [],
                query: [],
            },
            responses: [],
        });
    });
    it('parses HttpRequest parameters', () => {
        const request = {
            method: 'post',
            url: '/todos',
            baseUrl: 'http://test',
            query: {
                limit: ['10'],
            },
            headers: {
                apikey: '123',
            },
            body: '{}',
        };
        const httpOperation = CodeComponent_1.parseHttpRequest(request);
        expect(httpOperation).toMatchObject({
            id: '?http-operation-id?',
            method: 'post',
            path: '/todos',
            servers: [{ url: 'http://test' }],
            request: {
                query: [{ name: 'limit', style: types_1.HttpParamStyles.Form, schema: { default: '10' } }],
                headers: [{ name: 'apikey', style: types_1.HttpParamStyles.Simple, schema: { default: '123' } }],
                body: { contents: [{ mediaType: 'application/json', schema: { default: '{}' } }] },
            },
        });
    });
});
//# sourceMappingURL=CodeComponent.spec.js.map