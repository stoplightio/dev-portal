"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsSkeleton = exports.ParsedDocs = exports.Docs = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const InlineRefResolver_1 = require("../../context/InlineRefResolver");
const useParsedData_1 = require("../../hooks/useParsedData");
const Article_1 = require("./Article");
const HttpOperation_1 = require("./HttpOperation");
const HttpService_1 = require("./HttpService");
const Model_1 = require("./Model");
exports.Docs = React.memo((_a) => {
    var { nodeType, nodeData, useNodeForRefResolving = false } = _a, commonProps = tslib_1.__rest(_a, ["nodeType", "nodeData", "useNodeForRefResolving"]);
    const parsedNode = useParsedData_1.useParsedData(nodeType, nodeData);
    if (!parsedNode) {
        return null;
    }
    const parsedDocs = React.createElement(exports.ParsedDocs, Object.assign({ node: parsedNode }, commonProps));
    if (useNodeForRefResolving) {
        return React.createElement(InlineRefResolver_1.InlineRefResolverProvider, { document: parsedNode.data }, parsedDocs);
    }
    return parsedDocs;
});
const ParsedDocs = (_a) => {
    var { node } = _a, commonProps = tslib_1.__rest(_a, ["node"]);
    switch (node.type) {
        case 'article':
            return React.createElement(Article_1.Article, Object.assign({ data: node.data }, commonProps));
        case 'http_operation':
            return React.createElement(HttpOperation_1.HttpOperation, Object.assign({ data: node.data }, commonProps));
        case 'http_service':
            return React.createElement(HttpService_1.HttpService, Object.assign({ data: node.data }, commonProps));
        case 'model':
            return React.createElement(Model_1.Model, Object.assign({ data: node.data }, commonProps));
        default:
            return null;
    }
};
exports.ParsedDocs = ParsedDocs;
var Skeleton_1 = require("./Skeleton");
Object.defineProperty(exports, "DocsSkeleton", { enumerable: true, get: function () { return Skeleton_1.DocsSkeleton; } });
//# sourceMappingURL=Docs.js.map