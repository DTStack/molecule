import * as React from 'react';
import { IStatusBarItem } from 'mo';
import { Controller } from 'mo/react/controller';
import { IActionBarItem } from 'mo/components/actionBar';
import { INotificationItem } from 'mo/model/notification';
export interface INotificationController {
    onCloseNotification(item: INotificationItem): void;
    onClick?: (e: React.MouseEvent, item: IStatusBarItem) => void;
    onActionBarClick?(event: React.MouseEvent<Element, MouseEvent>, item: IActionBarItem<any>): void;
}
export declare class NotificationController extends Controller implements INotificationController {
    constructor();
    onCloseNotification(item: INotificationItem<any>): void;
    private _notificationPanel;
    private showHideNotifications;
    onClick: (e: React.MouseEvent, item: IStatusBarItem) => void;
    onActionBarClick: (event: React.MouseEvent<Element, MouseEvent>, item: IActionBarItem<any>) => void;
    private init;
    renderNotificationPanel(): void;
}
