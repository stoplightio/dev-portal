"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("@testing-library/jest-dom");
const types_1 = require("@stoplight/types");
const react_1 = require("@testing-library/react");
const React = tslib_1.__importStar(require("react"));
const Persistence_1 = require("../../context/Persistence");
const types_2 = require("../../types");
const _1 = require(".");
const CodeComponent_1 = require("./CustomComponents/CodeComponent");
const Provider_1 = require("./CustomComponents/Provider");
const ResolvedImage_1 = require("./CustomComponents/ResolvedImage");
describe('MarkdownViewer', () => {
    describe('with ResolvedImage', () => {
        const common = {
            id: 54234624,
            data: 'some data',
            type: types_1.NodeType.Article,
            name: 'Some Article',
            uri: '/docs/some-article.md',
            summary: 'some summary',
            branchSlug: 'master',
            workspaceIntegration: {
                kind: types_2.IntegrationKind.Github,
                apiUrl: 'https://api.github.com',
                hostUrl: 'https://github.com',
            },
            externalOrgSlug: 'organisation',
            externalSlug: 'project',
        };
        it.each([
            [
                types_2.IntegrationKind.Github,
                Object.assign(Object.assign({}, common), { workspaceIntegration: {
                        kind: types_2.IntegrationKind.Github,
                        apiUrl: 'https://api.github.com',
                        hostUrl: 'https://github.com',
                    } }),
                'https://raw.github.com/organisation/project/master/common/images/icon48.png',
            ],
            [
                types_2.IntegrationKind.Gitlab,
                Object.assign(Object.assign({}, common), { workspaceIntegration: {
                        kind: types_2.IntegrationKind.Gitlab,
                        apiUrl: 'https://api.gitlab.com',
                        hostUrl: 'https://gitlab.com',
                    } }),
                'https://gitlab.com/organisation/project/raw/master/common/images/icon48.png',
            ],
            [
                types_2.IntegrationKind.Gitea,
                Object.assign(Object.assign({}, common), { workspaceIntegration: {
                        kind: types_2.IntegrationKind.Gitea,
                        apiUrl: 'https://api.gitea.com',
                        hostUrl: 'https://gitea.com',
                    } }),
                'https://gitea.com/organisation/project/raw/branch/master/common/images/icon48.png',
            ],
            [
                types_2.IntegrationKind.BitbucketServer,
                Object.assign(Object.assign({}, common), { workspaceIntegration: {
                        kind: types_2.IntegrationKind.BitbucketServer,
                        apiUrl: 'https://api.bitbucket.com',
                        hostUrl: 'https://bitbucket.com',
                    } }),
                'https://api.bitbucket.com/projects/organisation/repos/project/browse/common/images/icon48.png?raw=',
            ],
            [
                types_2.IntegrationKind.BitbucketCloud,
                Object.assign(Object.assign({}, common), { workspaceIntegration: {
                        kind: types_2.IntegrationKind.BitbucketCloud,
                        apiUrl: 'https://api.bitbucket.com',
                        hostUrl: 'https://bitbucket.com',
                    } }),
                'https://bitbucket.com/organisation/project/raw/master/common/images/icon48.png',
            ],
        ])('resolves relative image url for integration with %s', (_, branchNode, expectedUrl) => {
            react_1.render(React.createElement(Provider_1.MarkdownComponentsProvider, { value: { image: ResolvedImage_1.createResolvedImageComponent(branchNode) } },
                React.createElement(_1.MarkdownViewer, { markdown: `![alt text](../../common/images/icon48.png "Logo Title Text 1")` })));
            const image = react_1.screen.getByTitle('Logo Title Text 1');
            expect(image).toHaveAttribute('src', expectedUrl);
        });
    });
    describe('CodeComponent', () => {
        it('Should render TryIt correctly', () => {
            const MarkdownViewerWithTryIt = Persistence_1.withPersistenceBoundary(_1.MarkdownViewer);
            const markdown = `### Raw Http Request

<!-- type: http -->

\`\`\`json
{
  "method": "get",
  "url": "/gifs/search",
  "baseUrl": "http://api.giphy.com/v1",
  "headers": {},
  "query": {
    "api_key": ["dc6zaTOxFJmzC"],
    "limit": ["1"],
    "q": ["cats"]
  }
}
\`\`\`
`;
            react_1.render(React.createElement(Provider_1.MarkdownComponentsProvider, { value: { code: CodeComponent_1.CodeComponent } },
                React.createElement(MarkdownViewerWithTryIt, { markdown: markdown })));
            expect(react_1.screen.getByRole('heading', { name: 'GET /gifs/search' })).toBeInTheDocument();
            expect(react_1.screen.getByText('api_key')).toBeInTheDocument();
        });
    });
});
//# sourceMappingURL=MarkdownViewer.spec.js.map