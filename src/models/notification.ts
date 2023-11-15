import React from 'react';
import type { IMenuItemProps, UniqueId } from 'mo/types';

import type { IStatusBarItem } from './statusBar';

export enum NotificationStatus {
    Read = 1,
    WaitRead = 2,
}

export interface INotificationItem<T = any> {
    id: UniqueId;
    value: T;
    render?: (item: INotificationItem) => React.ReactNode;
    status?: NotificationStatus;
}

export interface INotification<T = any> extends Partial<IStatusBarItem<INotificationItem<T>[]>> {
    showNotifications?: boolean;
    actionBar?: IMenuItemProps[];
}

export class NotificationModel<T> implements INotification<T> {
    constructor(
        public id: UniqueId = '',
        public name: string = '',
        public data: INotificationItem<T>[] = [],
        public sortIndex: number = 1,
        public showNotifications: boolean = false,
        public actionBar: IMenuItemProps[] = [],
        public render: () => React.ReactNode = () => null
    ) {}
}
