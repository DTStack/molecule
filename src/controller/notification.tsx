import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'mo/react';
import { Float, IStatusBarItem } from 'mo/model';
import { Controller } from 'mo/react/controller';
import { IActionBarItemProps } from 'mo/components/actionBar';
import { INotificationItem } from 'mo/model/notification';
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
    IBuiltinService,
    BuiltinService,
} from 'mo/services';

export interface INotificationController extends Partial<Controller> {
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
    private readonly builtinService: IBuiltinService;

    constructor() {
        super();
        this.notificationService = container.resolve(NotificationService);
        this.statusBarService = container.resolve(StatusBarService);
        this.layoutService = container.resolve(LayoutService);
        this.builtinService = container.resolve(BuiltinService);
    }

    public onCloseNotification = (item: INotificationItem<any>): void => {
        if (typeof item.id === 'number' || typeof item.id === 'string') {
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
        const {
            NOTIFICATION_CLEAR_ALL_ID,
            NOTIFICATION_HIDE_ID,
        } = this.builtinService.getConstants();

        if (action === NOTIFICATION_CLEAR_ALL_ID) {
            this.notificationService.toggleNotification();
        } else if (action === NOTIFICATION_HIDE_ID) {
            this.toggleNotifications();
        }
    };

    public initView() {
        const {
            builtInNotification,
            NOTIFICATION_CLEAR_ALL,
            NOTIFICATION_HIDE,
        } = this.builtinService.getModules();

        if (builtInNotification) {
            const NotificationView = connect(
                this.notificationService,
                NotificationStatusBarView
            );
            const defaultNotification = {
                ...builtInNotification,
                actionBar: [NOTIFICATION_CLEAR_ALL, NOTIFICATION_HIDE].filter(
                    Boolean
                ) as IActionBarItemProps[],
                render: () => <NotificationView onClick={this.onClick} />,
            };
            this.notificationService.setState({
                ...defaultNotification,
            });
            this.statusBarService.add(defaultNotification, Float.right);
        }
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
