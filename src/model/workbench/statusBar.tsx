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
export interface INotifications {
    title: string;
    message: string;
}
type ItemsType = IProblems | INotifications[] | ILineColumnItem | null;

export interface IStatusBarItem extends HTMLElementProps {
    id: string;
    sortIndex: number;
    data: ItemsType;
    onClick?(e: React.MouseEvent, item?: IStatusBarItem);
    render?: (item) => ReactNode;
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
        info: 0
    },
    name: 'Problems',
    render: (item:IProblems) => <React.Fragment>
        <Icon type="error" />
        {` ${item.error} `}
        <Icon type="warning" />
        {` ${item.warn} `}
        <Icon type="info" />
        {` ${item.info}`}
    </React.Fragment>,
};

export const STATUS_NOTIFICATIONS: IStatusBarItem = {
    id: 'MoNotification',
    sortIndex: 1,
    data: [],
    name: 'Notification',
    render: (item:INotifications[]) => <React.Fragment>
        {
            item.length ? <Icon type="bell-dot" /> : <Icon type="bell" />
        }
    </React.Fragment>,
};

export const STATUS_EDITOR_INFO: IStatusBarItem = {
    id: 'MoEditorInfo',
    sortIndex: 2,
    data: {
        ln: 0,
        col: 0
    },
    name: 'Go to Line/Column',
    render: (item:ILineColumnItem) => <span>{`Ln ${item.ln}, Col ${item.col}`}</span>,
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
    public rightItems: IStatusBarItem[] = [STATUS_NOTIFICATIONS, STATUS_EDITOR_INFO];
}
