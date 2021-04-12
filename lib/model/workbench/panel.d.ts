import { IActionBarItem } from 'mo/components/actionBar';
import { ITab } from 'mo/components/tabs/tab';
export interface IPanelItem<T = any> extends ITab<any> {
    id: string;
    title?: string;
    toolbox?: IActionBarItem[];
    data?: T;
    render?(item: IPanelItem): ReactNode;
}
export declare enum PanelEvent {
    onTabChange = "panel.onTabChange",
    onToolbarClick = "panel.onToolbarClick"
}
export declare const PANEL_PROBLEMS: IPanelItem;
export declare const PANEL_OUTPUT: IPanelItem;
export declare const PANEL_TOOLBOX_CLOSE: {
    id: string;
    title: string;
    iconName: string;
};
export declare const PANEL_TOOLBOX_RESIZE: {
    id: string;
    title: string;
    iconName: string;
};
export interface IPanel {
    current?: IPanelItem;
    data?: IPanelItem[];
    toolbox?: IActionBarItem[];
    hidden?: boolean;
    maximize?: boolean;
}
export declare class PanelModel implements IPanel {
    current: IPanelItem | undefined;
    data: IPanelItem[];
    hidden: boolean;
    maximize: boolean;
    toolbox: IActionBarItem[];
}
