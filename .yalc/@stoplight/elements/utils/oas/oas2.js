"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oas2SourceMap = void 0;
const types_1 = require("./types");
exports.oas2SourceMap = [
    {
        match: 'paths',
        type: types_1.NodeTypes.Paths,
        children: [
            {
                notMatch: '^x-',
                type: types_1.NodeTypes.Path,
                children: [
                    {
                        match: 'get|post|put|delete|options|head|patch|trace',
                        type: types_1.NodeTypes.Operation,
                    },
                ],
            },
        ],
    },
    {
        match: 'definitions',
        type: types_1.NodeTypes.Models,
        children: [
            {
                notMatch: '^x-',
                type: types_1.NodeTypes.Model,
            },
        ],
    },
];
//# sourceMappingURL=oas2.js.map