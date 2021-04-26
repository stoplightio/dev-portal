"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResolvedImageComponent = void 0;
const tslib_1 = require("tslib");
const path_1 = require("@stoplight/path");
const react_1 = tslib_1.__importDefault(require("react"));
const urijs_1 = tslib_1.__importDefault(require("urijs"));
const types_1 = require("../../../types");
const createResolvedImageComponent = (branchNode) => react_1.default.memo(({ node: { url, title, alt } }) => {
    return react_1.default.createElement("img", { src: resolveImageUrlHandler(url, branchNode), title: title, alt: alt });
});
exports.createResolvedImageComponent = createResolvedImageComponent;
const resolveImageUrlHandler = (url, branchNode) => {
    if (urijs_1.default(url).is('absolute')) {
        return url;
    }
    const orgSlug = branchNode.externalOrgSlug;
    const projectSlug = branchNode.externalSlug;
    const branchSlug = branchNode.branchSlug;
    const uri = branchNode.uri;
    if (!orgSlug || !projectSlug || !branchNode.workspaceIntegration.kind) {
        return url;
    }
    const resolvedUri = path_1.resolve(path_1.dirname(uri || ''), url);
    let imageUri;
    switch (branchNode.workspaceIntegration.kind) {
        case types_1.IntegrationKind.AzureDevopsServer:
            imageUri = new urijs_1.default(branchNode.workspaceIntegration.hostUrl || '');
            imageUri
                .segmentCoded([...imageUri.segmentCoded(), orgSlug, '_apis', 'git', 'repositories', projectSlug, 'items'])
                .query({
                scopePath: resolvedUri,
                'api-version': '4.1',
                $format: 'OctetStream',
            });
            break;
        case types_1.IntegrationKind.BitbucketServer:
            imageUri = new urijs_1.default((branchNode.workspaceIntegration.apiUrl || '').replace(/\/rest\/api\/[0-9.]+/, ''));
            imageUri.segmentCoded([...imageUri.segmentCoded(), 'projects', orgSlug, 'repos', projectSlug || '', 'browse']);
            imageUri.segment([...imageUri.segment(), resolvedUri]).query({ raw: '' });
            break;
        case types_1.IntegrationKind.BitbucketCloud:
            imageUri = new urijs_1.default(branchNode.workspaceIntegration.hostUrl || '');
            imageUri.segmentCoded([...imageUri.segmentCoded(), orgSlug, projectSlug, 'raw', branchSlug]);
            imageUri.segment([...imageUri.segment(), resolvedUri]);
            break;
        case types_1.IntegrationKind.Github:
            imageUri = new urijs_1.default(branchNode.workspaceIntegration.hostUrl || '');
            imageUri.hostname(`raw.${imageUri.hostname()}`);
            imageUri.segmentCoded([...imageUri.segmentCoded(), orgSlug, projectSlug, branchSlug]);
            imageUri.segment([...imageUri.segment(), resolvedUri]);
            if (RegExp(/\.svg$/).test(imageUri.path())) {
                imageUri.setQuery({ sanitize: true });
            }
            break;
        case types_1.IntegrationKind.Gitlab:
            imageUri = new urijs_1.default(branchNode.workspaceIntegration.hostUrl || '');
            imageUri.segmentCoded([...imageUri.segmentCoded(), orgSlug, projectSlug, 'raw', branchSlug]);
            imageUri.segment([...imageUri.segment(), resolvedUri]);
            break;
        case types_1.IntegrationKind.Gitea:
            imageUri = new urijs_1.default(branchNode.workspaceIntegration.hostUrl || '');
            imageUri.segmentCoded([...imageUri.segmentCoded(), orgSlug, projectSlug, 'raw', 'branch', branchSlug]);
            imageUri.segment([...imageUri.segment(), resolvedUri]);
            break;
        default:
            imageUri = new urijs_1.default(resolvedUri);
    }
    return imageUri.normalize().valueOf();
};
//# sourceMappingURL=ResolvedImage.js.map