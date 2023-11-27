import type { IMenuItemProps, RenderProps, UniqueId } from 'mo/types';

export enum NotificationStatus {
    Read = 1,
    WaitRead = 2,
}

export interface INotificationItem<T = any> extends RenderProps<INotificationItem> {
    id: UniqueId;
    value: T;
    status?: NotificationStatus;
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
        public actionBar: IMenuItemProps[] = []
    ) {}
}

/**
 * The notification event definition
 */
export enum NotificationEvent {
    onClick = 'notification.onClick',
    onActionBarClick = 'notification.onContextMenu',
    onCloseNotification = 'notification.onCloseNotification',
    toggleNotifications = 'notification.toggleNotifications',
}
