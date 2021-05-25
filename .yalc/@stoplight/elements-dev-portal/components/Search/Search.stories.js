"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playground = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const useGetNodes_1 = require("../../hooks/useGetNodes");
const _1 = require("./");
const SearchWrapper = ({ projectIds, workspaceId }) => {
    const { isOpen, open, close } = mosaic_1.useModalState();
    const [search, setSearch] = React.useState('');
    const { data } = useGetNodes_1.useGetNodes({
        search,
        projectIds,
        workspaceId,
    });
    const handleClose = () => {
        close();
        setSearch('');
    };
    const handleClick = (searchResult) => {
        console.log('Search clicked', searchResult);
        handleClose();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(mosaic_1.Input, { placeholder: "Search...", onClick: open }),
        React.createElement(_1.Search, { search: search, searchResults: data, onSearch: setSearch, isOpen: isOpen, onClose: handleClose, onClick: handleClick })));
};
exports.default = {
    title: 'Public/Search',
    component: SearchWrapper,
    argTypes: {
        workspaceId: { table: { category: 'Input' } },
        projectIds: { table: { category: 'Input' } },
        platformUrl: { table: { category: 'Input' } },
    },
    args: {
        projectIds: ['cHJqOjExOTY'],
        workspaceId: 'd2s6MQ',
        platformUrl: 'https://stoplight.io',
    },
};
const Playground = args => React.createElement(SearchWrapper, Object.assign({}, args));
exports.Playground = Playground;
exports.Playground.storyName = 'Studio Demo';
//# sourceMappingURL=Search.stories.js.map