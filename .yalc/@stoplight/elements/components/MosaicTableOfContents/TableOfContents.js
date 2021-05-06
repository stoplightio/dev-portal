"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableOfContents = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const constants_1 = require("./constants");
const utils_1 = require("./utils");
const ActiveIdContext = React.createContext(undefined);
const LinkContext = React.createContext(undefined);
exports.TableOfContents = React.memo(({ tree, activeId, Link }) => {
    React.useEffect(() => {
        if (activeId && typeof window !== 'undefined') {
            const elem = window.document.getElementById(utils_1.getHtmlIdFromItemId(activeId));
            if (elem && 'scrollIntoView' in elem) {
                elem.scrollIntoView({ block: 'center' });
            }
        }
    }, []);
    return (React.createElement(mosaic_1.Box, { w: "full", bg: "canvas-100" },
        React.createElement(mosaic_1.Box, { my: 3 },
            React.createElement(LinkContext.Provider, { value: Link },
                React.createElement(ActiveIdContext.Provider, { value: activeId }, tree.map((item, key) => {
                    if (utils_1.isDivider(item)) {
                        return React.createElement(Divider, { key: key, item: item });
                    }
                    return React.createElement(GroupItem, { key: key, item: item, depth: 0 });
                }))))));
});
const Divider = React.memo(({ item }) => {
    return (React.createElement(mosaic_1.Box, { pl: 4, mb: 2, mt: 6, textTransform: "uppercase", color: "muted", fontSize: "sm", lineHeight: "relaxed", letterSpacing: "wide" }, item.title));
});
const GroupItem = React.memo(({ item, depth }) => {
    if (utils_1.isExternalLink(item)) {
        return (React.createElement(mosaic_1.Box, { as: "a", href: item.url, target: "_blank", rel: "noopener noreferrer", display: "block" },
            React.createElement(Item, { depth: depth, title: item.title, meta: React.createElement(mosaic_1.Box, { as: mosaic_1.Icon, icon: ['fas', 'external-link'] }) })));
    }
    else if (utils_1.isGroup(item) || utils_1.isNodeGroup(item)) {
        return React.createElement(Group, { depth: depth, item: item });
    }
    else if (utils_1.isNode(item)) {
        return (React.createElement(Node, { depth: depth, item: item, meta: item.meta ? (React.createElement(mosaic_1.Box, { color: constants_1.NODE_META_COLOR[item.meta], textTransform: "uppercase", fontWeight: "medium" }, item.meta)) : (constants_1.NODE_TYPE_META_ICON[item.type] && (React.createElement(mosaic_1.Box, { as: mosaic_1.Icon, color: constants_1.NODE_TYPE_ICON_COLOR[item.type], icon: constants_1.NODE_TYPE_META_ICON[item.type] }))) }));
    }
    return null;
});
const Group = React.memo(({ depth, item }) => {
    const activeId = React.useContext(ActiveIdContext);
    const [isOpen, setIsOpen] = React.useState(() => {
        return utils_1.isGroupOpenByDefault(depth, item, activeId);
    });
    const onClick = (e, forceOpen) => {
        setIsOpen(forceOpen ? true : !isOpen);
    };
    const meta = (React.createElement(mosaic_1.Box, { as: mosaic_1.Icon, icon: ['fas', isOpen ? 'chevron-down' : 'chevron-right'], color: "muted", fixedWidth: true, onClick: (e) => {
            e.stopPropagation();
            e.preventDefault();
            onClick(e);
        } }));
    let elem;
    if (utils_1.isNodeGroup(item)) {
        elem = React.createElement(Node, { depth: depth, item: item, meta: meta, onClick: onClick });
    }
    else {
        elem = React.createElement(Item, { title: item.title, meta: meta, onClick: onClick, depth: depth });
    }
    return (React.createElement(React.Fragment, null,
        elem,
        isOpen &&
            item.items.map((groupItem, key) => {
                return React.createElement(GroupItem, { key: key, item: groupItem, depth: depth + 1 });
            })));
});
const Item = React.memo(({ depth, isActive, id, title, meta, icon, onClick }) => {
    return (React.createElement(mosaic_1.Flex, { id: id, bg: { default: isActive ? 'primary-tint' : 'canvas-100', hover: isActive ? undefined : 'canvas-200' }, cursor: "pointer", pl: 4 + depth * 4, pr: 4, h: "md", align: "center", userSelect: "none", onClick: onClick, title: title },
        icon,
        React.createElement(mosaic_1.Box, { alignItems: "center", flex: 1, mr: meta ? 1.5 : undefined, ml: icon && 1.5, textOverflow: "truncate" }, title),
        React.createElement(mosaic_1.Flex, { alignItems: "center", fontSize: "xs" }, meta)));
});
const Node = React.memo(({ item, depth, meta, onClick }) => {
    const activeId = React.useContext(ActiveIdContext);
    const isActive = activeId === item.id;
    const LinkComponent = React.useContext(LinkContext);
    const handleClick = (e) => {
        if (isActive) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (onClick) {
            onClick(e, isActive ? undefined : true);
        }
    };
    return (React.createElement(mosaic_1.Box, { as: LinkComponent, to: item.slug, display: "block", textDecoration: "no-underline" },
        React.createElement(Item, { id: utils_1.getHtmlIdFromItemId(item.id), isActive: isActive, depth: depth, title: item.title, icon: constants_1.NODE_TYPE_TITLE_ICON[item.type] && (React.createElement(mosaic_1.Box, { as: mosaic_1.Icon, color: constants_1.NODE_TYPE_ICON_COLOR[item.type], icon: constants_1.NODE_TYPE_TITLE_ICON[item.type] })), meta: meta, onClick: handleClick })));
});
//# sourceMappingURL=TableOfContents.js.map