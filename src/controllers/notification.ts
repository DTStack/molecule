import React from 'react';
import ViewSuspense from 'mo/client/components/viewSuspense';
import { BaseController } from 'mo/glue';
import { type INotificationItem, NotificationEvent } from 'mo/models/notification';
import type { BuiltinService } from 'mo/services/builtin';
import type { NotificationService } from 'mo/services/notification';
import type { StatusBarService } from 'mo/services/statusBar';
import type { IMenuItemProps } from 'mo/types';
import { inject, injectable } from 'tsyringe';

export interface INotificationController extends BaseController {
    onCloseNotification(item: INotificationItem): void;
    onClick(): void;
    onActionBarClick(item: IMenuItemProps): void;
    onClickItem(item: INotificationItem): void;
    onKeyPress(e: KeyboardEvent): void;
}

@injectable()
export class NotificationController extends BaseController implements INotificationController {
    constructor(
        @inject('notification') private notification: NotificationService,
        @inject('statusBar') private statusBar: StatusBarService,
        @inject('builtin') private builtin: BuiltinService
    ) {
        super();
        this.initView();
    }

    private initView() {
        const { NOTIFICATION, NOTIFICATION_CLEAR_ALL, NOTIFICATION_HIDE } = this.builtin.getModules();
        if (NOTIFICATION) {
            this.statusBar.add({
                ...NOTIFICATION,
                render: () =>
                    React.createElement(ViewSuspense, {
                        key: 'notification',
                        token: 'notification',
                    }),
            });
            this.notification.addToolbar([NOTIFICATION_CLEAR_ALL, NOTIFICATION_HIDE].filter(Boolean));
        }
    }

    public onCloseNotification = (item: INotificationItem<any>): void => {
        this.emit(NotificationEvent.onCloseNotification, item);
    };

    public onClick = () => {
        this.emit(NotificationEvent.onClick);
    };

    public onClickItem = (item: INotificationItem) => {
        this.emit(NotificationEvent.onClickItem, item);
    };

    public onKeyPress = (e: KeyboardEvent) => {
        this.emit(NotificationEvent.onKeyPress, e);
    };

    public onActionBarClick = (item: IMenuItemProps) => {
        this.emit(NotificationEvent.onActionBarClick, item);
    };
}
