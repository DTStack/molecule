import type { IMenuItemProps, Render, UniqueId } from 'mo/types';

/**
 * The notification event definition
 */
export enum NotificationEvent {
    onClick = 'notification.onClick',
    onClickItem = 'notification.onClickItem',
    onKeyPress = 'notification.onKeyPress',
    onActionBarClick = 'notification.onContextMenu',
    onCloseNotification = 'notification.onCloseNotification',
}

export enum NotificationStatus {
    Read = 1,
    WaitRead = 2,
}

export interface INotificationItem<T = any> extends Render<INotificationItem> {
    id: UniqueId;
    value: T;
    status?: NotificationStatus;
}

export class NotificationModel {
    constructor(
        public data: INotificationItem<any>[] = [],
        public toolbar: IMenuItemProps[] = [],
        public toasts: UniqueId[] = []
    ) {}
}
