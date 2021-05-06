"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Docs = void 0;
const tslib_1 = require("tslib");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const ui_kit_1 = require("@stoplight/ui-kit");
const React = tslib_1.__importStar(require("react"));
const Docs_1 = require("../components/Docs");
const Provider_1 = require("../components/MarkdownViewer/CustomComponents/Provider");
const ResolvedImage_1 = require("../components/MarkdownViewer/CustomComponents/ResolvedImage");
const mocking_utils_1 = require("../components/TryIt/mocking-utils");
const InlineRefResolver_1 = require("../context/InlineRefResolver");
const useParsedData_1 = require("../hooks/useParsedData");
const usePlatformApi_1 = require("../hooks/usePlatformApi");
const Provider_2 = require("./Provider");
const DocsPopup = React.memo(({ nodeType, nodeData, uri, className }) => {
    const parsedNode = useParsedData_1.useParsedData(nodeType, nodeData);
    if (!parsedNode)
        return null;
    return (React.createElement(InlineRefResolver_1.InlineRefResolverProvider, { document: parsedNode.data },
        React.createElement(Docs_1.ParsedDocs, { className: className, node: parsedNode, uri: uri })));
});
const bundledNodesUri = 'api/v1/projects/{workspaceSlug}/{projectSlug}/bundled-nodes/{uri}';
const Docs = ({ className, node }) => {
    const info = React.useContext(Provider_2.ActiveInfoContext);
    const { data: result, error } = usePlatformApi_1.usePlatformApi(bundledNodesUri, {
        platformUrl: info.host,
        workspaceSlug: info.workspace,
        projectSlug: info.project,
        branchSlug: info.branch,
        nodeUri: node,
        authToken: info.authToken,
    });
    const nodeUri = node || info.node;
    const mockUrlResult = mocking_utils_1.useMockUrl(info, nodeUri);
    const image = React.useMemo(() => result && ResolvedImage_1.createResolvedImageComponent(result), [result]);
    if (error) {
        return (React.createElement("div", { className: "flex min-h-screen justify-center items-center w-full" },
            React.createElement(ui_kit_1.NonIdealState, { title: "Something went wrong", description: error.message.replace('[GraphQL]', ''), icon: React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faExclamationTriangle }) })));
    }
    if (!result) {
        return React.createElement(Docs_1.DocsSkeleton, null);
    }
    return (React.createElement(Provider_2.MockingProvider, { mockUrl: mockUrlResult },
        React.createElement(Provider_1.MarkdownComponentsProvider, { value: { image } },
            React.createElement(DocsPopup, { key: nodeUri, nodeType: result.type, nodeData: result.data, uri: node, className: className }))));
};
exports.Docs = Docs;
//# sourceMappingURL=Docs.js.map