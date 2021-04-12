import * as React from 'react';
import { IActivityBarItem } from 'mo/model/workbench/activityBar';
interface ISearchPaneToolBar {
    headerToolBar?: IActivityBarItem[];
    value?: string;
    convertFoldToSearchTree?: <T>(data: any) => T[];
}
export default class SearchPanel extends React.Component<ISearchPaneToolBar> {
    constructor(props: any);
    onClick: (e: any, item: any) => void;
    render(): JSX.Element;
}
export {};
