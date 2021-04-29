"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dom_1 = require("@testing-library/dom");
const react_1 = require("@testing-library/react");
const React = tslib_1.__importStar(require("react"));
const withMosaicProvider_1 = require("../../hoc/withMosaicProvider");
const TableOfContents_1 = require("./TableOfContents");
const TableOfContents = withMosaicProvider_1.withMosaicProvider(TableOfContents_1.TableOfContents);
const Link = ({ children }) => React.createElement(React.Fragment, null, children);
describe('TableOfContents', () => {
    describe('Group', () => {
        it('should only render group contents when open', () => {
            const { unmount } = react_1.render(React.createElement(TableOfContents, { activeId: "", tree: [
                    {
                        title: 'Root',
                        items: [
                            {
                                id: 'targetId',
                                title: 'Target',
                                slug: 'target',
                                type: 'article',
                                meta: '',
                            },
                        ],
                    },
                ], Link: Link }));
            expect(dom_1.screen.queryByTitle('Root')).toBeInTheDocument();
            expect(dom_1.screen.queryByTitle('Target')).not.toBeInTheDocument();
            unmount();
        });
        it('should default open when nested child is active', () => {
            const { unmount } = react_1.render(React.createElement(TableOfContents, { activeId: "targetId", tree: [
                    {
                        title: 'Root',
                        items: [
                            {
                                title: 'Group',
                                items: [
                                    {
                                        id: 'targetId',
                                        title: 'Target',
                                        slug: 'target',
                                        type: 'article',
                                        meta: '',
                                    },
                                ],
                            },
                        ],
                    },
                ], Link: Link }));
            expect(dom_1.screen.queryByTitle(/Root/)).toBeInTheDocument();
            expect(dom_1.screen.queryByTitle(/Group/)).toBeInTheDocument();
            expect(dom_1.screen.queryByTitle(/Target/)).toBeInTheDocument();
            unmount();
        });
        it('should close an opened group on click', () => {
            const { unmount } = react_1.render(React.createElement(TableOfContents, { activeId: "targetId", tree: [
                    {
                        title: 'Root',
                        items: [
                            {
                                id: 'targetId',
                                title: 'Target',
                                slug: 'target',
                                type: 'article',
                                meta: '',
                            },
                        ],
                    },
                ], Link: Link }));
            const Root = dom_1.screen.queryByTitle(/Root/);
            expect(Root).toBeInTheDocument();
            expect(dom_1.screen.queryByTitle('Target')).toBeInTheDocument();
            Root === null || Root === void 0 ? void 0 : Root.click();
            expect(dom_1.screen.queryByTitle('Target')).not.toBeInTheDocument();
            unmount();
        });
        it('should open a closed group on click', () => {
            const { unmount } = react_1.render(React.createElement(TableOfContents, { activeId: "", tree: [
                    {
                        title: 'Root',
                        items: [
                            {
                                id: 'targetId',
                                title: 'Target',
                                slug: 'target',
                                type: 'article',
                                meta: '',
                            },
                        ],
                    },
                ], Link: Link }));
            const Root = dom_1.screen.queryByTitle(/Root/);
            expect(Root).toBeInTheDocument();
            expect(dom_1.screen.queryByTitle(/Target/)).not.toBeInTheDocument();
            Root === null || Root === void 0 ? void 0 : Root.click();
            expect(dom_1.screen.queryByTitle(/Target/)).toBeInTheDocument();
            unmount();
        });
    });
});
//# sourceMappingURL=TableOfContents.spec.js.map