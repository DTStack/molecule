import * as React from 'react';
import { injectable } from 'tsyringe';
import { Icon } from 'mo/components/icon';

export interface IProblems {
    warn: number;
    error: number;
    info: number;
}
export interface ILineColumnItem {
    ln: number;
    col: number;
}
export interface IStatusBarItem<T = any> extends HTMLElementProps {
    id: string;
    sortIndex: number;
    data?: T;
    onClick?(e: React.MouseEvent, item?: IStatusBarItem);
    render?: (item:IStatusBarItem) => ReactNode;
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
    render: ({ data }:IStatusBarItem) => {
        return (<React.Fragment>
            <Icon type="error" />
            {` ${data.error} `}
            <Icon type="warning" />
            {` ${data.warn} `}
            <Icon type="info" />
            {` ${data.info}`}
        </React.Fragment>
         )
    }
};

export const STATUS_EDITOR_INFO: IStatusBarItem = {
    id: 'MoEditorInfo',
    sortIndex: 2,
    data: {
        ln: 0,
        col: 0,
    },
    name: 'Go to Line/Column',
    render: ({ data }:IStatusBarItem) =>{
        return (
            <span>{`Ln ${data.ln}, Col ${data.col}`}</span>
        )
    },
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
