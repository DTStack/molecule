import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect, IStatusBarItem } from 'mo';
import { Controller } from 'mo/react/controller';
import { notificationService, statusBarService } from 'mo/services';
import { singleton } from 'tsyringe';
import { Notification } from 'mo/workbench/statusBar/notification';
import { NotificationPanel } from 'mo/workbench/statusBar/notification/notificationPanel';

import { IActionBarItem } from 'mo/components/actionBar';
import {
    INotificationItem,
    NOTIFICATION_CLEAR_ALL,
    NOTIFICATION_HIDE,
} from 'mo/model/notification';
import { select } from 'mo/common/dom';
import { ID_APP } from 'mo/common/id';

export interface INotificationController {
    onCloseNotification(item: INotificationItem): void;
    onClick?: (e: React.MouseEvent, item: IStatusBarItem) => void;
    onActionBarClick?(
        event: React.MouseEvent<Element, MouseEvent>,
        item: IActionBarItem<any>
    ): void;
}

@singleton()
export class NotificationController
    extends Controller
    implements INotificationController {
    constructor() {
        super();
        this.init();
    }

    public onCloseNotification(item: INotificationItem<any>): void {
        if (typeof item.id === 'number') {
            notificationService.removeNotification(item.id);
        }
    }

    private _notificationPanel: HTMLDivElement | undefined = undefined;

    private showHideNotifications() {
        if (!this._notificationPanel) {
            this.renderNotificationPanel();
        }
        notificationService.showHideNotifications();
    }

    public onClick = (e: React.MouseEvent, item: IStatusBarItem) => {
        this.showHideNotifications();
    };

    public onActionBarClick = (
        event: React.MouseEvent<Element, MouseEvent>,
        item: IActionBarItem<any>
    ) => {
        const action = item.id;
        if (action === NOTIFICATION_CLEAR_ALL.id) {
            notificationService.showHideNotifications();
        } else if (action === NOTIFICATION_HIDE.id) {
            this.showHideNotifications();
        }
    };

    private init() {
        const notificationItem = notificationService.getState();
        const NotificationView = connect(notificationService, Notification);
        notificationService.setState({
            ...notificationItem,
            render: () => <NotificationView onClick={this.onClick} />,
        });
        statusBarService.appendRightItem(notificationItem);
    }

    public renderNotificationPanel() {
        const NotificationPanelView = connect(
            notificationService,
            NotificationPanel
        );
        const root = select('#' + ID_APP);
        const container = document.createElement('div');
        root?.appendChild(container);
        ReactDOM.render(
            <NotificationPanelView
                onActionBarClick={this.onActionBarClick}
                onCloseNotification={this.onCloseNotification}
            />,
            container
        );
        this._notificationPanel = container;
    }
}
