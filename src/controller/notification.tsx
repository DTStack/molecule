import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import React from 'react';
import { connect } from 'mo/react';
import { Float, IStatusBarItem } from 'mo/model';
import { Controller } from 'mo/react/controller';
import { IActionBarItemProps } from 'mo/components/actionBar';
import { INotificationItem } from 'mo/model/notification';
import { NotificationStatusBarView } from 'mo/workbench/notification';
import {
    IStatusBarService,
    StatusBarService,
    INotificationService,
    NotificationService,
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
    onContextMenu?: (e: MouseEvent) => void;
}

@singleton()
export class NotificationController
    extends Controller
    implements INotificationController
{
    private readonly notificationService: INotificationService;
    private readonly statusBarService: IStatusBarService;
    private readonly builtinService: IBuiltinService;

    constructor() {
        super();
        this.notificationService = container.resolve(NotificationService);
        this.statusBarService = container.resolve(StatusBarService);
        this.builtinService = container.resolve(BuiltinService);
    }

    public onCloseNotification = (item: INotificationItem<any>): void => {
        this.notificationService.remove(item.id);
    };

    public toggleNotifications() {
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
        const { NOTIFICATION_CLEAR_ALL_ID, NOTIFICATION_HIDE_ID } =
            this.builtinService.getConstants();

        if (action === NOTIFICATION_CLEAR_ALL_ID) {
            this.notificationService.clear();
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
            /* istanbul ignore next */
            const defaultNotification = {
                ...builtInNotification,
                actionBar: [NOTIFICATION_CLEAR_ALL, NOTIFICATION_HIDE].filter(
                    Boolean
                ) as IActionBarItemProps[],
                render: () => (
                    <NotificationView
                        onClick={this.onClick}
                        onActionBarClick={this.onActionBarClick}
                        onCloseNotification={this.onCloseNotification}
                    />
                ),
            };
            this.notificationService.setState({
                ...defaultNotification,
            });
            this.statusBarService.add(defaultNotification, Float.right);
        }
    }
}
