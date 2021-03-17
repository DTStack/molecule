import * as React from 'react';
import { injectable } from 'tsyringe';
import { EditorInfo } from 'mo/workbench/statusBar/editor';
import { Problems } from 'mo/workbench/statusBar/problems';
export interface IStatusBarItem<T = any> extends HTMLElementProps {
    id: string;
    sortIndex: number;
    data?: T;
    onClick?(e: React.MouseEvent, item?: IStatusBarItem);
    render?: (item: IStatusBarItem) => ReactNode;
    name?: string;
}

export interface IStatusBar {
    rightItems: IStatusBarItem[];
    leftItems: IStatusBarItem[];
}

export const STATUS_PROBLEMS: IStatusBarItem = {
    id: 'MoProblems',
    sortIndex: 1,
    data: {
        warn: 0,
        error: 0,
        info: 0,
    },
    name: 'Problems',
    render: (item: IStatusBarItem) => <Problems {...item}/>,
};

export const STATUS_EDITOR_INFO: IStatusBarItem = {
    id: 'MoEditorInfo',
    sortIndex: 2,
    data: {
        ln: 0,
        col: 0,
    },
    name: 'Go to Line/Column',
    render: (item: IStatusBarItem) => <EditorInfo {...item}/>,
};

/**
 * The activity bar event definition
 */
export enum StatusBarEvent {
    /**
     * Selected an activity bar
     */
    onClick = 'statusBar.onClick',
    /**
     * Activity bar data changed
     */
    DataChanged = 'statusBar.data',
}
@injectable()
export class StatusBarModel implements IStatusBar {
    public leftItems: IStatusBarItem[] = [STATUS_PROBLEMS];
    public rightItems: IStatusBarItem[] = [STATUS_EDITOR_INFO];
}
