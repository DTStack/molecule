import Notification from 'mo/client/components/notification';
import { BaseController } from 'mo/glue';
import { INotificationItem } from 'mo/models/notification';
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

    public initView() {
        const state = this.builtin.getState();
        const { builtInNotification, NOTIFICATION_CLEAR_ALL, NOTIFICATION_HIDE } = state.modules;

        if (builtInNotification) {
            /* istanbul ignore next */
            const defaultNotification = {
                ...builtInNotification,
                alignment: 'right',
                actionBar: [NOTIFICATION_CLEAR_ALL, NOTIFICATION_HIDE].filter(Boolean),
                render: () => (
                    <Notification
                        onClick={this.onClick}
                        onActionBarClick={this.onActionBarClick}
                        onCloseNotification={this.onCloseNotification}
                    />
                ),
            };
            this.notification.setState({
                ...defaultNotification,
            });
            this.statusBar.add(defaultNotification);
        }
    }

    public onCloseNotification = (item: INotificationItem<any>): void => {
        this.notification.remove(item.id);
    };

    public toggleNotifications() {
        this.notification.toggleNotification();
    }

    public onClick = () => {
        this.toggleNotifications();
    };

    public onActionBarClick = (item: IMenuItemProps) => {
        const state = this.builtin.getState();
        const { NOTIFICATION_CLEAR_ALL_ID, NOTIFICATION_HIDE_ID } = state.constants;
        const action = item.id;

        if (action === NOTIFICATION_CLEAR_ALL_ID) {
            this.notification.clear();
        } else if (action === NOTIFICATION_HIDE_ID) {
            this.toggleNotifications();
        }
    };
}
