"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const tslib_1 = require("tslib");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const elements_core_1 = require("@stoplight/elements-core");
const mosaic_1 = require("@stoplight/mosaic");
const ui_kit_1 = require("@stoplight/ui-kit");
const fp_1 = require("lodash/fp");
const React = tslib_1.__importStar(require("react"));
const react_query_1 = require("react-query");
const APIWithSidebarLayout_1 = require("../components/API/APIWithSidebarLayout");
const APIWithStackedLayout_1 = require("../components/API/APIWithStackedLayout");
const oas_1 = require("../utils/oas");
const propsAreWithDocument = (props) => {
    return props.hasOwnProperty('apiDescriptionDocument');
};
const APIImpl = props => {
    const { layout, apiDescriptionUrl = '', logo, hideTryIt } = props;
    const apiDescriptionDocument = propsAreWithDocument(props) ? props.apiDescriptionDocument : undefined;
    const { data: fetchedDocument, error } = react_query_1.useQuery([apiDescriptionUrl], () => fetch(apiDescriptionUrl).then(res => res.text()), {
        enabled: apiDescriptionUrl !== '' && !apiDescriptionDocument,
    });
    React.useEffect(() => {
        if (error) {
            console.error('Could not fetch spec', error);
        }
    }, [error]);
    const parsedDocument = elements_core_1.useParsedValue(apiDescriptionDocument || fetchedDocument);
    const bundledDocument = elements_core_1.useBundleRefsIntoDocument(parsedDocument, { baseUrl: apiDescriptionUrl });
    const serviceNode = React.useMemo(() => oas_1.transformOasToServiceNode(bundledDocument), [bundledDocument]);
    if (error) {
        return (React.createElement(mosaic_1.Flex, { justify: "center", alignItems: "center", w: "full", minH: "screen" },
            React.createElement(ui_kit_1.NonIdealState, { title: "Something went wrong", description: String(error), icon: React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faExclamationTriangle }) })));
    }
    if (!bundledDocument) {
        return (React.createElement(mosaic_1.Flex, { justify: "center", alignItems: "center", w: "full", minH: "screen", color: "light" },
            React.createElement(mosaic_1.Box, { as: mosaic_1.Icon, icon: ['fal', 'circle-notch'], size: "3x", spin: true })));
    }
    if (!serviceNode) {
        return (React.createElement(mosaic_1.Flex, { justify: "center", alignItems: "center", w: "full", minH: "screen" },
            React.createElement(ui_kit_1.NonIdealState, { title: "Failed to parse OpenAPI file", description: "Please make sure your OpenAPI file is valid and try again", icon: React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faExclamationTriangle }) })));
    }
    return (React.createElement(elements_core_1.InlineRefResolverProvider, { document: parsedDocument }, layout === 'stacked' ? (React.createElement(APIWithStackedLayout_1.APIWithStackedLayout, { serviceNode: serviceNode, hideTryIt: hideTryIt })) : (React.createElement(APIWithSidebarLayout_1.APIWithSidebarLayout, { logo: logo, serviceNode: serviceNode, hideTryIt: hideTryIt }))));
};
exports.API = fp_1.pipe(elements_core_1.withRouter, elements_core_1.withStyles, elements_core_1.withPersistenceBoundary, elements_core_1.withMosaicProvider, elements_core_1.withQueryClientProvider)(APIImpl);
//# sourceMappingURL=API.js.map