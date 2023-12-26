import { BaseService } from 'mo/glue';
import {
    INotificationItem,
    NotificationEvent,
    NotificationModel,
    NotificationStatus,
} from 'mo/models/notification';
import type { Arraylize, Predict, RequiredId, UniqueId } from 'mo/types';
import { arraylize, searchById } from 'mo/utils';

export class NotificationService extends BaseService<NotificationModel> {
    protected state: NotificationModel;

    constructor() {
        super('notification');
        this.state = new NotificationModel();
    }

    public get(id: UniqueId) {
        return this.getState().data.find(searchById(id));
    }

    public update(id: UniqueId, predict: Predict<INotificationItem>): void;
    public update(data: RequiredId<INotificationItem>): void;
    public update(
        item: UniqueId | RequiredId<INotificationItem>,
        predict?: Predict<INotificationItem>
    ) {
        this.dispatch((draft) => {
            const target = draft.data.find(searchById(typeof item === 'object' ? item.id : item));
            if (!target) return;
            Object.assign(target, typeof item === 'object' ? item : predict?.(target));
        });
    }

    public remove(id: UniqueId) {
        this.dispatch((draft) => {
            const idx = draft.data.findIndex(searchById(id));
            if (idx === -1) return;
            draft.data.splice(idx, 1);
        });
    }

    public add(item: Arraylize<INotificationItem>) {
        this.dispatch((draft) => {
            const nextItems = arraylize(item).map((item) => ({
                ...item,
                status: NotificationStatus.WaitRead,
            }));
            draft.data.push(...nextItems);
        });
    }

    public clear() {
        this.dispatch((draft) => {
            draft.data.length = 0;
        });
    }

    public reset() {
        this.setState(new NotificationModel());
    }

    // ===================== Subscriptions =====================

    public onCloseNotification(callback: (item: INotificationItem) => void) {
        this.subscribe(NotificationEvent.onCloseNotification, callback);
    }

    public toggleNotifications(callback: () => void) {
        this.subscribe(NotificationEvent.toggleNotifications, callback);
    }

    public onClick = (callback: () => void) => {
        this.subscribe(NotificationEvent.onClick, callback);
    };

    public onActionBarClick = (callback: (item: INotificationItem) => void) => {
        this.subscribe(NotificationEvent.onActionBarClick, callback);
    };
}
