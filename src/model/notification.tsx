import { IActionBarItemProps } from 'mo/components/actionBar';
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
    render?(item: INotificationItem): React.ReactNode;
    status?: NotificationStatus;
}

export interface INotification<T = any> extends IStatusBarItem {
    data?: INotificationItem<T>[];
    showNotifications?: boolean;
    actionBar?: IActionBarItemProps[];
}

export const NOTIFICATION_CLEAR_ALL: IActionBarItemProps = {
    id: 'ClearAll',
    title: 'Clear All Notifications',
    icon: 'clear-all',
};

export const NOTIFICATION_HIDE: IActionBarItemProps = {
    id: 'HideNotifications',
    title: 'Hide Notifications',
    icon: 'chevron-down',
};

export class NotificationModel<T> implements INotification<T> {
    static readonly ID = 'MO_NOTIFICATION';
    static readonly NAME = 'Notification';

    public id: string;
    public name: string;
    public data: INotificationItem<T>[];
    public sortIndex: number;
    public render: () => React.ReactNode;
    public showNotifications: boolean;
    public actionBar: IActionBarItemProps[];

    constructor(
        id: string = NotificationModel.ID,
        name: string = NotificationModel.NAME,
        data: INotificationItem<T>[] = [],
        sortIndex: number = 1,
        showNotifications: boolean = false,
        actionBar: IActionBarItemProps[] = [
            NOTIFICATION_CLEAR_ALL,
            NOTIFICATION_HIDE,
        ],
        render: () => React.ReactNode = () => <Icon type="bell" />
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
