import { BaseService } from 'mo/glue';
import { INotificationItem, NotificationEvent, NotificationModel, NotificationStatus } from 'mo/models/notification';
import type { Arraylize, IMenuItemProps, Predict, RequiredId, UniqueId } from 'mo/types';
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
    public update(item: UniqueId | RequiredId<INotificationItem>, predict?: Predict<INotificationItem>) {
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
        this.close(id);
    }

    public open(items: INotificationItem) {
        this.add(items);
        this.dispatch((draft) => {
            draft.toasts.push(items.id);
        });
    }

    public close(id: UniqueId) {
        this.dispatch((draft) => {
            const idx = draft.toasts.indexOf(id);
            if (idx === -1) return;
            draft.toasts.splice(idx, 1);
        });
    }

    public closeAll() {
        this.dispatch((draft) => {
            draft.toasts.length = 0;
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

    public addToolbar(item: Arraylize<IMenuItemProps>) {
        this.dispatch((draft) => {
            draft.toolbar.push(...arraylize(item));
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

    public onClick = (callback: () => void) => {
        this.subscribe(NotificationEvent.onClick, callback);
    };

    public onClickItem = (callback: (item: INotificationItem) => void) => {
        this.subscribe(NotificationEvent.onClickItem, callback);
    };

    public onKeyPress = (callback: (e: KeyboardEvent) => void) => {
        this.subscribe(NotificationEvent.onKeyPress, callback);
    };

    public onActionBarClick = (callback: (item: INotificationItem) => void) => {
        this.subscribe(NotificationEvent.onActionBarClick, callback);
    };
}
