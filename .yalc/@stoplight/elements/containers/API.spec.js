"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("@testing-library/jest-dom");
const react_1 = require("@testing-library/react");
const React = tslib_1.__importStar(require("react"));
const Instagram_1 = require("../__fixtures__/api-descriptions/Instagram");
const simpleApiWithoutDescription_1 = require("../__fixtures__/api-descriptions/simpleApiWithoutDescription");
const API_1 = require("./API");
describe('API', () => {
    const APIDocument = Object.assign(Object.assign({}, Instagram_1.InstagramAPI), { info: Object.assign(Object.assign({}, Instagram_1.InstagramAPI.info), { 'x-logo': Object.assign(Object.assign({}, Instagram_1.InstagramAPI.info['x-logo']), { altText: 'instagram-logo' }) }) });
    Element.prototype.scrollTo = () => { };
    it('displays logo specified in x-logo property of API document', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        react_1.render(React.createElement(API_1.API, { layout: "sidebar", apiDescriptionDocument: Instagram_1.InstagramAPI }));
        expect(yield react_1.screen.findByAltText('logo')).toBeInTheDocument();
    }));
    it('uses the altText property from the API document', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        react_1.render(React.createElement(API_1.API, { layout: "sidebar", apiDescriptionDocument: APIDocument }));
        expect(yield react_1.screen.findByAltText('instagram-logo')).toBeInTheDocument();
    }));
    it("doesn't display the logo when no properties are passed neither via API document nor as component prop", () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const { getByRole } = react_1.render(React.createElement(API_1.API, { layout: "sidebar", apiDescriptionDocument: simpleApiWithoutDescription_1.simpleApiWithoutDescription }));
        yield react_1.waitFor(() => expect(() => getByRole('tabpanel')).not.toThrow());
        expect(yield react_1.screen.queryByAltText('logo')).not.toBeInTheDocument();
    }));
    it('overrides the logo from API document with the one passed in a prop', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        react_1.render(React.createElement(API_1.API, { logo: "thisisarequiredprop", layout: "sidebar", apiDescriptionDocument: APIDocument }));
        expect(react_1.screen.queryByAltText('instagram-logo')).not.toBeInTheDocument();
        expect(yield react_1.screen.findByAltText('logo')).toBeInTheDocument();
    }));
});
//# sourceMappingURL=API.spec.js.map