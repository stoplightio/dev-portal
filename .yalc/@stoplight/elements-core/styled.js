"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withStyles = exports.Styled = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const PropTypes = tslib_1.__importStar(require("prop-types"));
const React = tslib_1.__importStar(require("react"));
const utils_1 = require("./hoc/utils");
const scopeClassName = 'sl-elements';
class Styled extends React.Component {
    getChildContext() {
        return {
            blueprintPortalClassName: scopeClassName,
        };
    }
    render() {
        return (React.createElement(mosaic_1.Box, { className: "sl-elements sl-antialiased", fontFamily: "ui", fontSize: "base", color: "body", h: "full" }, this.props.children));
    }
}
exports.Styled = Styled;
Styled.childContextTypes = {
    blueprintPortalClassName: PropTypes.string,
};
function withStyles(Component) {
    const Inner = props => {
        return (React.createElement(Styled, null,
            React.createElement(Component, Object.assign({}, props))));
    };
    Inner.displayName = `withStyles(${utils_1.getDisplayName(Component)})`;
    return Inner;
}
exports.withStyles = withStyles;
//# sourceMappingURL=styled.js.map