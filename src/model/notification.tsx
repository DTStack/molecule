import { IActionBarItem } from 'mo/components/actionBar';
import { Icon } from 'mo/components/icon';
import * as React from 'react';
import { IStatusBarItem } from './workbench/statusBar';

export enum NotificationStatus {
    Read = 1,
    WaitRead = 2,
}

export interface INotificationItem<T = any> {
    id?: number;
    value: T;
    status?: NotificationStatus;
}

export interface INotification<T = any> extends IStatusBarItem {
    data?: INotificationItem<T>[];
    showNotifications?: boolean;
    actionBar?: IActionBarItem[];
}

export const NOTIFICATION_CLEAR_ALL: IActionBarItem = {
    id: 'ClearAll',
    title: 'Clear All Notifications',
    iconName: 'codicon-clear-all',
};

export const NOTIFICATION_HIDE: IActionBarItem = {
    id: 'HideNotifications',
    title: 'Hide Notifications',
    iconName: 'codicon-chevron-down',
};

export class NotificationModel<T> implements INotification<T> {
    static readonly ID = 'MO_NOTIFICATION';
    static readonly NAME = 'Notification';

    public id: string;
    public name: string;
    public data: INotificationItem<T>[];
    public sortIndex: number;
    public render: () => ReactNode;
    public showNotifications: boolean;
    public actionBar: IActionBarItem[];

    constructor(
        id: string = NotificationModel.ID,
        name: string = NotificationModel.NAME,
        data: INotificationItem<T>[] = [],
        sortIndex: number = 1,
        showNotifications: boolean = false,
        actionBar: IActionBarItem[] = [
            NOTIFICATION_CLEAR_ALL,
            NOTIFICATION_HIDE,
        ],
        render: () => ReactNode = () => <Icon type="bell" />
    ) {
        this.id = id;
        this.name = name;
        this.sortIndex = sortIndex;
        this.render = render;
        this.showNotifications = showNotifications;
        this.data = data;
        this.actionBar = actionBar;
    }
}
