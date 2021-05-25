"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("@testing-library/jest-dom");
const react_1 = require("@testing-library/react");
const React = tslib_1.__importStar(require("react"));
const _1 = require(".");
describe('SchemaAndDescription', () => {
    it('should handle title and description merging', () => {
        const schema = {
            allOf: [
                {
                    title: 'Stoplight',
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                        },
                    },
                },
                {
                    type: 'object',
                    properties: {
                        version: {
                            type: 'integer',
                        },
                    },
                },
            ],
        };
        react_1.render(React.createElement(_1.SchemaAndDescription, { schema: schema }));
        expect(react_1.screen.queryByText('allOf')).not.toBeInTheDocument();
    });
});
//# sourceMappingURL=SchemaAndDescription.spec.js.map