"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const tslib_1 = require("tslib");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const mosaic_1 = require("@stoplight/mosaic");
const ui_kit_1 = require("@stoplight/ui-kit");
const axios_1 = tslib_1.__importDefault(require("axios"));
const fp_1 = require("lodash/fp");
const React = tslib_1.__importStar(require("react"));
const swr_1 = tslib_1.__importDefault(require("swr"));
const APIWithSidebarLayout_1 = require("../components/API/APIWithSidebarLayout");
const APIWithStackedLayout_1 = require("../components/API/APIWithStackedLayout");
const InlineRefResolver_1 = require("../context/InlineRefResolver");
const Persistence_1 = require("../context/Persistence");
const withMosaicProvider_1 = require("../hoc/withMosaicProvider");
const withRouter_1 = require("../hoc/withRouter");
const useBundleRefsIntoDocument_1 = require("../hooks/useBundleRefsIntoDocument");
const useParsedValue_1 = require("../hooks/useParsedValue");
const styled_1 = require("../styled");
const oas_1 = require("../utils/oas");
const fetcher = (url) => axios_1.default.get(url).then(res => res.data);
const propsAreWithDocument = (props) => {
    return props.hasOwnProperty('apiDescriptionDocument');
};
const APIImpl = props => {
    const { layout, apiDescriptionUrl } = props;
    const apiDescriptionDocument = propsAreWithDocument(props) ? props.apiDescriptionDocument : undefined;
    const documentShouldBeFetched = apiDescriptionUrl && !apiDescriptionDocument;
    const { data: fetchedDocument, error } = swr_1.default(documentShouldBeFetched ? apiDescriptionUrl : null, fetcher);
    React.useEffect(() => {
        if (error) {
            console.error('Could not fetch spec', error);
        }
    }, [error]);
    const parsedDocument = useParsedValue_1.useParsedValue(apiDescriptionDocument || fetchedDocument);
    const bundledDocument = useBundleRefsIntoDocument_1.useBundleRefsIntoDocument(parsedDocument, { baseUrl: apiDescriptionUrl });
    const serviceNode = React.useMemo(() => oas_1.transformOasToServiceNode(bundledDocument), [bundledDocument]);
    if (error) {
        return (React.createElement(mosaic_1.Flex, { justify: "center", alignItems: "center", w: "full", minH: "screen" },
            React.createElement(ui_kit_1.NonIdealState, { title: "Something went wrong", description: error.message, icon: React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faExclamationTriangle }) })));
    }
    if (!bundledDocument) {
        return (React.createElement(mosaic_1.Flex, { justify: "center", alignItems: "center", w: "full", minH: "screen", color: "light" },
            React.createElement(mosaic_1.Box, { as: mosaic_1.Icon, icon: ['fal', 'circle-notch'], size: "3x", spin: true })));
    }
    if (!serviceNode) {
        return (React.createElement(mosaic_1.Flex, { justify: "center", alignItems: "center", w: "full", minH: "screen" },
            React.createElement(ui_kit_1.NonIdealState, { title: "Failed to parse OpenAPI file", description: "Please make sure your OpenAPI file is valid and try again", icon: React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faExclamationTriangle }) })));
    }
    return (React.createElement(InlineRefResolver_1.InlineRefResolverProvider, { document: parsedDocument }, layout === 'stacked' ? (React.createElement(APIWithStackedLayout_1.APIWithStackedLayout, { serviceNode: serviceNode })) : (React.createElement(APIWithSidebarLayout_1.APIWithSidebarLayout, { serviceNode: serviceNode }))));
};
exports.API = fp_1.pipe(withRouter_1.withRouter, styled_1.withStyles, Persistence_1.withPersistenceBoundary, withMosaicProvider_1.withMosaicProvider)(APIImpl);
//# sourceMappingURL=API.js.map