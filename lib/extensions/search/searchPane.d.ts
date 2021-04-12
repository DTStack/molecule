import * as React from 'react';
interface ISearchPaneToolBar {
}
declare const initialState: {
    input: string;
    toolbar: {
        id: string;
        title: string;
        disabled: boolean;
        iconName: string;
    }[];
};
declare type State = typeof initialState;
export default class SearchPane extends React.Component<ISearchPaneToolBar, State> {
    state: State;
    constructor(props: any);
    onClick: (e: any, item: any) => void;
    onInput: (e: any) => void;
    onChangeTheme: (e: any, option: any) => void;
    renderColorThemes(): JSX.Element;
    render(): JSX.Element;
}
export {};
