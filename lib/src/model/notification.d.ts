import { IActionBarItem } from 'mo/components/actionBar';
import { IStatusBarItem } from './workbench/statusBar';
export declare enum NotificationStatus {
    Read = 1,
    WaitRead = 2
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
export declare const NOTIFICATION_CLEAR_ALL: IActionBarItem;
export declare const NOTIFICATION_HIDE: IActionBarItem;
export declare class NotificationModel<T> implements INotification<T> {
    static readonly ID = "MO_NOTIFICATION";
    static readonly NAME = "Notification";
    id: string;
    name: string;
    data: INotificationItem<T>[];
    sortIndex: number;
    render: () => ReactNode;
    showNotifications: boolean;
    actionBar: IActionBarItem[];
    constructor(id?: string, name?: string, data?: INotificationItem<T>[], sortIndex?: number, showNotifications?: boolean, actionBar?: IActionBarItem[], render?: () => ReactNode);
}
