import { UniqueId } from 'mo/common/types';
import { IActionBarItemProps } from 'mo/components/actionBar';
import React from 'react';
import type { IStatusBarItem } from './workbench/statusBar';

export enum NotificationStatus {
    Read = 1,
    WaitRead = 2,
}

export interface INotificationItem<T = any> {
    id: UniqueId;
    value: T;
    render?(item: INotificationItem): React.ReactNode;
    status?: NotificationStatus;
}

export interface INotification<T = any>
    extends IStatusBarItem<INotificationItem<T>[]> {
    showNotifications?: boolean;
    actionBar?: IActionBarItemProps[];
}

export class NotificationModel<T> implements INotification<T> {
    public id: UniqueId;
    public name: string;
    public data: INotificationItem<T>[];
    public sortIndex: number;
    public render: () => React.ReactNode;
    public showNotifications: boolean;
    public actionBar: IActionBarItemProps[];

    constructor(
        id: UniqueId = '',
        name: string = '',
        data: INotificationItem<T>[] = [],
        sortIndex: number = 1,
        showNotifications: boolean = false,
        actionBar: IActionBarItemProps[] = [],
        render: () => React.ReactNode
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
