import * as PropTypes from 'prop-types';
import * as React from 'react';
export declare class Styled extends React.Component {
    static childContextTypes: {
        blueprintPortalClassName: PropTypes.Requireable<string>;
    };
    getChildContext(): {
        blueprintPortalClassName: string;
    };
    render(): JSX.Element;
}
export declare function withStyles<T>(Component: React.ComponentType<T>): React.FC<T>;
