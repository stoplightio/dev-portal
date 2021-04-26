"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoplightProject = void 0;
const tslib_1 = require("tslib");
const fp_1 = require("lodash/fp");
const React = tslib_1.__importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Row_1 = require("../components/TableOfContents/Row");
const constants_1 = require("../constants");
const Persistence_1 = require("../context/Persistence");
const withMosaicProvider_1 = require("../hoc/withMosaicProvider");
const withRouter_1 = require("../hoc/withRouter");
const styled_1 = require("../styled");
const Docs_1 = require("./Docs");
const Provider_1 = require("./Provider");
const TableOfContents_1 = require("./TableOfContents");
const StoplightProjectImpl = ({ workspaceSlug, platformUrl, projectSlug, branchSlug, authToken, }) => {
    const [firstItem, setFirstItem] = React.useState();
    const { pathname } = react_router_dom_1.useLocation();
    if (pathname === '/' && firstItem) {
        return React.createElement(react_router_dom_1.Redirect, { to: firstItem.uri });
    }
    return (React.createElement("div", { className: "StoplightProject flex flex-row" },
        React.createElement(TableOfContents_1.TableOfContents, { workspaceSlug: workspaceSlug, platformUrl: platformUrl, projectSlug: projectSlug, branchSlug: branchSlug, rowComponent: Row_1.Row, rowComponentExtraProps: { pathname }, nodeUri: pathname, onData: (tocTree) => {
                var _a;
                if (pathname === '/' && ((_a = tocTree === null || tocTree === void 0 ? void 0 : tocTree.items) === null || _a === void 0 ? void 0 : _a.length)) {
                    const firstItem = tocTree.items.find(isItem);
                    setFirstItem(firstItem);
                }
            }, authToken: authToken }),
        React.createElement("div", { className: "flex-grow p-5 ContentViewer" },
            React.createElement("div", { className: "flex" }, pathname !== '/' && (React.createElement(Provider_1.Provider, { host: platformUrl !== null && platformUrl !== void 0 ? platformUrl : constants_1.defaultPlatformUrl, workspace: workspaceSlug, project: projectSlug, branch: branchSlug, node: pathname, authToken: authToken, isStoplightProjectComponent: true },
                React.createElement(Docs_1.Docs, { node: pathname, className: "px-10" })))))));
};
exports.StoplightProject = fp_1.pipe(withRouter_1.withRouter, styled_1.withStyles, Persistence_1.withPersistenceBoundary, withMosaicProvider_1.withMosaicProvider)(StoplightProjectImpl);
const isItem = (item) => item.type === 'item';
//# sourceMappingURL=StoplightProject.js.map