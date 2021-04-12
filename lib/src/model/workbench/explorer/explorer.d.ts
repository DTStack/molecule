import * as React from 'react';
import 'reflect-metadata';
import { IActionBarItem } from 'mo/components/actionBar';
export declare enum ExplorerEvent {
    onClick = "explorer.onClick",
    onCollapseChange = "explorer.onCollapseChange"
}
export interface IPanelItem<T = any> extends IActionBarItem {
    renderPanel?: (props: any) => React.ReactNode | JSX.Element;
    toolbar?: T;
}
export interface IExplorer {
    data?: IPanelItem[];
    headerToolBar?: IActionBarItem;
}
export declare const SAMPLE_FOLDER_PANEL_ID = "Folders";
export declare const EDITOR_PANEL_ID = "OpenEditors";
export declare const OUTLINE_PANEL_ID = "Outline";
export declare const EDITOR_PANEL: {
    id: string;
    name: string;
    toolbar: ({
        id: string;
        title: string;
        disabled: boolean;
        iconName: string;
    } | {
        id: string;
        title: string;
        iconName: string;
        disabled?: undefined;
    })[];
    renderPanel: () => JSX.Element;
};
export declare const OUTLINE_PANEL: {
    id: string;
    name: string;
    toolbar: {
        id: string;
        title: string;
        iconName: string;
    }[];
};
export declare const SAMPLE_FOLDER_PANEL: {
    id: string;
    name: string;
    className: string;
    toolbar: {
        id: string;
        title: string;
        iconName: string;
    }[];
};
export declare const DEFAULT_PANELS: {
    id: string;
    name: string;
    toolbar: {
        id: string;
        title: string;
        iconName: string;
    }[];
}[];
export declare class IExplorerModel implements IExplorer {
    data: IPanelItem[];
    headerToolBar: IActionBarItem;
    constructor(data?: IPanelItem[], headerToolBar?: IActionBarItem);
}
