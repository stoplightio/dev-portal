import * as React from 'react';
declare type Props = React.ElementConfig<'div'> & {
    value: string;
    onValueChange: (value: string) => void;
    highlight: (value: string) => string | React.Node;
    tabSize: number;
    insertSpaces: boolean;
    ignoreTabKey: boolean;
    padding: number | string;
    style?: {};
    textareaId?: string;
    textareaClassName?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    maxLength?: number;
    minLength?: number;
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    onClick?: (e: MouseEvent) => void;
    onFocus?: (e: FocusEvent) => void;
    onBlur?: (e: FocusEvent) => void;
    onKeyUp?: (e: KeyboardEvent) => void;
    onKeyDown?: (e: KeyboardEvent) => void;
    preClassName?: string;
};
declare type State = {
    capture: boolean;
};
declare type Record = {
    value: string;
    selectionStart: number;
    selectionEnd: number;
};
declare type History = {
    stack: Array<Record & {
        timestamp: number;
    }>;
    offset: number;
};
export default class ReactSimpleCodeEditor extends React.Component<Props, State> {
    static defaultProps: {
        tabSize: number;
        insertSpaces: boolean;
        ignoreTabKey: boolean;
        padding: number;
    };
    state: {
        capture: boolean;
    };
    componentDidMount(): void;
    _recordCurrentState: () => void;
    _getLines: (text: string, position: number) => string[];
    _recordChange: (record: Record, overwrite?: boolean) => void;
    _updateInput: (record: Record) => void;
    _applyEdits: (record: Record) => void;
    _undoEdit: () => void;
    _redoEdit: () => void;
    _handleKeyDown: (e: any) => void;
    _handleChange: (e: any) => void;
    _history: History;
    _input?: HTMLTextAreaElement;
    get session(): {
        history: History;
    };
    set session(session: {
        history: History;
    });
    render(): JSX.Element;
}
export {};
