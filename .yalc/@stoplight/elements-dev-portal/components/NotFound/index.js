"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const react_1 = tslib_1.__importDefault(require("react"));
const NotFound = () => (react_1.default.createElement(mosaic_1.Flex, { align: "center", justify: "center", flexGrow: true },
    react_1.default.createElement(mosaic_1.VStack, { spacing: 4, align: "center" },
        react_1.default.createElement(mosaic_1.Heading, { size: 1 }, "Not Found"),
        react_1.default.createElement(mosaic_1.Box, { as: "p" }, "Could not find what you are looking for"))));
exports.NotFound = NotFound;
//# sourceMappingURL=index.js.map