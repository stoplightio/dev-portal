"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockingButton = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const lodash_1 = require("lodash");
const React = tslib_1.__importStar(require("react"));
const MockingButton = ({ operation, options: { isEnabled, code, example, dynamic }, onOptionsChange, }) => {
    var _a;
    const toggleEnabled = React.useCallback(() => {
        onOptionsChange({ isEnabled: !isEnabled });
    }, [isEnabled, onOptionsChange]);
    const operationResponses = operation.responses;
    const setMockingOptions = ({ code, example, dynamic }) => {
        onOptionsChange({ isEnabled, code, example, dynamic });
    };
    return (React.createElement(mosaic_1.Box, null,
        React.createElement(mosaic_1.Menu, { trigger: React.createElement(mosaic_1.Button, { iconRight: "caret-down", appearance: isEnabled ? 'primary' : 'minimal', ml: 3 }, "Mocking") },
            React.createElement(mosaic_1.MenuItem, { indent: true, text: "Enabled", checked: isEnabled, onClick: toggleEnabled }),
            React.createElement(mosaic_1.MenuDivider, null), (_a = operationResponses === null || operationResponses === void 0 ? void 0 : operationResponses.filter(operationResponse => Number.isInteger(parseFloat(operationResponse.code)))) === null || _a === void 0 ? void 0 :
            _a.map(operationResponse => {
                var _a;
                const isActive = operationResponse.code === code;
                const exampleKeys = lodash_1.uniq((_a = operationResponse.contents) === null || _a === void 0 ? void 0 : _a.flatMap(c => c.examples || []).map(example => example.key));
                const exampleChildren = exampleKeys === null || exampleKeys === void 0 ? void 0 : exampleKeys.map(exampleKey => (React.createElement(mosaic_1.MenuItem, { checked: isActive && exampleKey === example, indent: true, text: exampleKey, key: exampleKey, onClick: () => {
                        setMockingOptions({ code: operationResponse.code, example: exampleKey });
                    } })));
                const generationModeItems = (React.createElement(React.Fragment, null,
                    React.createElement(mosaic_1.MenuItem, { text: "Statically Generated", checked: isActive && dynamic === false, indent: true, onClick: () => {
                            setMockingOptions({ code: operationResponse.code, dynamic: false });
                        } }),
                    React.createElement(mosaic_1.MenuItem, { text: "Dynamically Generated", checked: isActive && dynamic === true, indent: true, onClick: () => {
                            setMockingOptions({ code: operationResponse.code, dynamic: true });
                        } })));
                return (React.createElement(mosaic_1.MenuItem, { disabled: !isEnabled, checked: isActive, indent: true, text: operationResponse.code, key: operationResponse.code, onClick: () => {
                        setMockingOptions({ code: operationResponse.code, dynamic: false });
                    } },
                    generationModeItems,
                    exampleChildren));
            }),
            React.createElement(mosaic_1.MenuDivider, null),
            React.createElement(mosaic_1.MenuItem, { indent: true, text: "Learn About Mocking", href: "https://stoplight.io/api-mocking/" }))));
};
exports.MockingButton = MockingButton;
//# sourceMappingURL=MockingButton.js.map