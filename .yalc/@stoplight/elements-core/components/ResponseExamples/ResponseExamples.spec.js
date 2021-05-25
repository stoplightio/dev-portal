"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("@testing-library/jest-dom");
const react_1 = require("@testing-library/react");
const react_2 = tslib_1.__importDefault(require("react"));
const operation_with_examples_1 = require("../../__fixtures__/operations/operation-with-examples");
const withMosaicProvider_1 = require("../../hoc/withMosaicProvider");
const chooseOption_1 = require("../../utils/tests/chooseOption");
const ResponseExamples_1 = require("./ResponseExamples");
const ResponseExamples = withMosaicProvider_1.withMosaicProvider(ResponseExamples_1.ResponseExamples);
describe('Response Examples', () => {
    it('displays first provided example by default', () => {
        const { container } = react_1.render(react_2.default.createElement(ResponseExamples, { httpOperation: operation_with_examples_1.httpOperation, responseMediaType: "application/json", responseStatusCode: "200" }));
        expect(container).toHaveTextContent('some');
        expect(container).toHaveTextContent('example');
    });
    it('allows to choose second example with select', () => {
        const { container } = react_1.render(react_2.default.createElement(ResponseExamples, { httpOperation: operation_with_examples_1.httpOperation, responseMediaType: "application/json", responseStatusCode: "200" }));
        chooseOption_1.chooseOption(react_1.screen.getByText('Response Example: First Example'), 'Second Example');
        expect(container).toHaveTextContent('another');
        expect(container).toHaveTextContent('example');
    });
    it('generates example based on schema if necessary', () => {
        const { container } = react_1.render(react_2.default.createElement(ResponseExamples, { httpOperation: operation_with_examples_1.httpOperation, responseMediaType: "application/json", responseStatusCode: "201" }));
        expect(container).toHaveTextContent('someParameter');
        expect(container).toHaveTextContent('string');
    });
    it('does not generate examples for media types other than application/json', () => {
        const { container } = react_1.render(react_2.default.createElement(ResponseExamples, { httpOperation: operation_with_examples_1.httpOperation, responseMediaType: "application/xml", responseStatusCode: "203" }));
        expect(container.children[0]).toBeEmptyDOMElement();
    });
    it('does not show component if there are no examples and no schemas', () => {
        const { container } = react_1.render(react_2.default.createElement(ResponseExamples, { httpOperation: operation_with_examples_1.httpOperation, responseMediaType: "application/json", responseStatusCode: "404" }));
        expect(container.children[0]).toBeEmptyDOMElement();
    });
    it('does not show select if there is only one example present', () => {
        react_1.render(react_2.default.createElement(ResponseExamples, { httpOperation: operation_with_examples_1.httpOperation, responseMediaType: "application/json", responseStatusCode: "202" }));
        const select = react_1.screen.queryByRole('combobox');
        expect(select).not.toBeInTheDocument();
    });
});
//# sourceMappingURL=ResponseExamples.spec.js.map