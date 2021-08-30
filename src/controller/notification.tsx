import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'mo/react';
import { Float, IStatusBarItem } from 'mo/model';
import { Controller } from 'mo/react/controller';
import { IActionBarItemProps } from 'mo/components/actionBar';
import {
    INotificationItem,
    NOTIFICATION_CLEAR_ALL,
    NOTIFICATION_HIDE,
} from 'mo/model/notification';
import {
    NotificationPane,
    NotificationStatusBarView,
} from 'mo/workbench/notification';
import {
    IStatusBarService,
    StatusBarService,
    INotificationService,
    NotificationService,
    ILayoutService,
    LayoutService,
} from 'mo/services';

export interface INotificationController {
    onCloseNotification(item: INotificationItem): void;
    onClick?: (e: React.MouseEvent, item: IStatusBarItem) => void;
    onActionBarClick?(
        event: React.MouseEvent<Element, MouseEvent>,
        item: IActionBarItemProps<any>
    ): void;
    /**
     * Toggle the Notifications visibility
     */
    toggleNotifications(): void;
}

@singleton()
export class NotificationController
    extends Controller
    implements INotificationController {
    private readonly notificationService: INotificationService;
    private readonly statusBarService: IStatusBarService;
    private readonly layoutService: ILayoutService;

    constructor() {
        super();
        this.notificationService = container.resolve(NotificationService);
        this.statusBarService = container.resolve(StatusBarService);
        this.layoutService = container.resolve(LayoutService);
        this.init();
    }

    public onCloseNotification = (item: INotificationItem<any>): void => {
        if (typeof item.id === 'number') {
            this.notificationService.remove(item.id);
        }
    };

    private _notificationPane: HTMLDivElement | undefined = undefined;

    public toggleNotifications() {
        if (!this._notificationPane) {
            this.renderNotificationPane();
        }
        this.notificationService.toggleNotification();
    }

    public onClick = (e: React.MouseEvent, item: IStatusBarItem) => {
        this.toggleNotifications();
    };

    public onActionBarClick = (
        event: React.MouseEvent<Element, MouseEvent>,
        item: IActionBarItemProps<any>
    ) => {
        const action = item.id;
        if (action === NOTIFICATION_CLEAR_ALL.id) {
            this.notificationService.toggleNotification();
        } else if (action === NOTIFICATION_HIDE.id) {
            this.toggleNotifications();
        }
    };

    private init() {
        const notificationItem = this.notificationService.getState();
        const NotificationView = connect(
            this.notificationService,
            NotificationStatusBarView
        );
        this.notificationService.setState({
            ...notificationItem,
            render: () => <NotificationView onClick={this.onClick} />,
        });
        this.statusBarService.add(notificationItem, Float.right);
    }

    public renderNotificationPane() {
        const NotificationPaneView = connect(
            this.notificationService,
            NotificationPane
        );
        const root = this.layoutService.container;
        const container = document.createElement('div');
        root?.appendChild(container);
        ReactDOM.render(
            <NotificationPaneView
                onActionBarClick={this.onActionBarClick}
                onCloseNotification={this.onCloseNotification}
            />,
            container
        );
        this._notificationPane = container;
    }
}

// Register a singleton
container.resolve(NotificationController);
