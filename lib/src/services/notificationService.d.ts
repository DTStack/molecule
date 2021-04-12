import { INotification, INotificationItem } from 'mo/model/notification';
import { Component } from 'mo/react';
export interface INotificationService extends Component<INotification> {
    addNotification<T>(item: INotificationItem<T>): null | INotificationItem<T>;
    removeNotification(id: number): void;
    updateNotification<T>(item: INotificationItem<T>): null | INotificationItem<T>;
    showHideNotifications(): void;
}
export declare class NotificationService extends Component<INotification> implements INotificationService {
    protected state: INotification;
    constructor();
    showHideNotifications(): void;
    updateNotification<T>(item: INotificationItem<T>): INotificationItem<T> | null;
    removeNotification(id: number): void;
    addNotification<T>(item: INotificationItem<T>): null | INotificationItem<T>;
}
