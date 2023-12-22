import type { IMenuItemProps, RenderProps, UniqueId } from 'mo/types';

/**
 * The notification event definition
 */
export enum NotificationEvent {
    onClick = 'notification.onClick',
    onActionBarClick = 'notification.onContextMenu',
    onCloseNotification = 'notification.onCloseNotification',
    toggleNotifications = 'notification.toggleNotifications',
}

export enum NotificationStatus {
    Read = 1,
    WaitRead = 2,
}

export interface INotificationItem<T = any> extends RenderProps<INotificationItem> {
    id: UniqueId;
    value: T;
    status?: NotificationStatus;
}

export class NotificationModel {
    constructor(
        public data: INotificationItem<any>[] = [],
        public toolbar: IMenuItemProps[] = []
    ) {}
}
