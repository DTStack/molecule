import Notification from 'mo/client/slots/notification';
import { BaseController } from 'mo/glue';
import { INotificationItem, NotificationEvent } from 'mo/models/notification';
import type { IStatusBarItem } from 'mo/models/statusBar';
import type { BuiltinService } from 'mo/services/builtin';
import { NotificationService } from 'mo/services/notification';
import type { StatusBarService } from 'mo/services/statusBar';
import type { IMenuItemProps } from 'mo/types';
import { inject, injectable } from 'tsyringe';

export interface INotificationController extends BaseController {
    onCloseNotification(item: INotificationItem): void;
    onClick?: (e: React.MouseEvent, item?: IStatusBarItem) => void;
    onActionBarClick?(item: IMenuItemProps): void;
    toggleNotifications(): void;
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
        const state = this.builtin.getState();
        const { builtInNotification, NOTIFICATION_CLEAR_ALL, NOTIFICATION_HIDE } = state.modules;

        if (builtInNotification) {
            const defaultNotification = {
                ...builtInNotification,
                actionBar: [NOTIFICATION_CLEAR_ALL, NOTIFICATION_HIDE].filter(Boolean),
                render: () => <Notification {...this} />,
            };
            this.notification.setState({
                ...defaultNotification,
            });
            this.statusBar.add(defaultNotification);
        }
    }

    public onCloseNotification = (item: INotificationItem<any>): void => {
        this.emit(NotificationEvent.onCloseNotification, item);
    };

    public toggleNotifications() {
        this.emit(NotificationEvent.toggleNotifications);
    }

    public onClick = () => {
        this.emit(NotificationEvent.onClick);
    };

    public onActionBarClick = (item: IMenuItemProps) => {
        this.emit(NotificationEvent.onActionBarClick, item);
    };
}
