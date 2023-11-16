import React from 'react';
import type { IMenuItemProps, UniqueId } from 'mo/types';

export enum NotificationStatus {
    Read = 1,
    WaitRead = 2,
}

export interface INotificationItem<T = any> {
    id: UniqueId;
    value: T;
    status?: NotificationStatus;
    render?: (item: INotificationItem) => React.ReactNode;
}

export interface INotification<T> {
    visible?: boolean;
    data: INotificationItem<T>[];
    actionBar?: IMenuItemProps[];
}

export class NotificationModel<T> implements INotification<T> {
    constructor(
        public data: INotificationItem<T>[] = [],
        public visible: boolean = false,
        public actionBar: IMenuItemProps[] = [],
        public render: () => React.ReactNode = () => null
    ) {}
}

/**
 * The notification event definition
 */
 export enum NotificationEvent {
    onClick = 'notification.onClick',
    onActionBarClick = 'notification.onContextMenu',
    onCloseNotification = 'notification.onCloseNotification',
    toggleNotifications = 'notification.toggleNotifications'
}
