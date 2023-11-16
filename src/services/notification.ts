import { BaseService } from 'mo/glue';
import {
    INotificationItem,
    NotificationEvent,
    NotificationModel,
    NotificationStatus,
} from 'mo/models/notification';
import type { FunctionalOrSingle, RequiredId, UniqueId } from 'mo/types';
import { arraylize, extract, randomId, searchById } from 'mo/utils';
import logger from 'mo/utils/logger';

export interface INotificationService extends BaseService<NotificationModel<any>> {
    /**
     * Add new notification items
     * @param items
     */
    add(items: INotificationItem[]): void;
    /**
     * Remove the specific notification item by id
     * @param id
     */
    remove(id: UniqueId): void;
    /**
     * Update the specific notification item by id
     * @param item notification item, the id field is required
     */
    update(item: RequiredId<INotificationItem>): void;
    /**
     * Get the specific notification item by id
     */
    get(id: UniqueId): INotificationItem | undefined;
    /**
     * Toggle the visibility of the notification, returns the status of notification's `visible`
     */
    setNotificationVisibility(visibility: FunctionalOrSingle<boolean>): void;
    /**
     * Clear the notifications
     */
    clear(): void;
    /**
     * Reset notifications, this will clear the pending notifications
     */
    reset(): void;
}

export class NotificationService
    extends BaseService<NotificationModel<any>>
    implements INotificationService
{
    protected state: NotificationModel<any>;

    constructor() {
        super('notification');
        this.state = new NotificationModel();
    }

    public setNotificationVisibility(visibility: FunctionalOrSingle<boolean>) {
        this.setState((prev) => ({
            ...prev,
            visible: typeof visibility === 'function' ? visibility(prev.visible) : visibility,
        }));
    }

    public get(id: UniqueId) {
        return this.getState().data.find(searchById(id));
    }

    public update(item: RequiredId<INotificationItem>) {
        const target = this.get(item.id);
        if (!target) {
            logger.error('There is no notification be found, please check the id');
            return;
        }
        Object.assign(target, item);
        this.setState((prev) => ({ ...prev }));
    }

    public remove(id: UniqueId) {
        const { data = [] } = this.state;
        if (!data.length) {
            logger.error(
                "You can't remove notification because there is no notifications in data."
            );
            return;
        }

        const target = this.get(id);
        if (!target) {
            logger.error('There is no notification be found, please check the id');
            return;
        }

        const arrayId = arraylize(id);
        this.setState((prev) => ({
            ...prev,
            data: extract(prev.data, arrayId),
        }));
    }

    public add(items: INotificationItem[]) {
        if (items && items.length) {
            items.forEach((item) => {
                if (item.id === undefined) item.id = randomId();
                item.status = NotificationStatus.WaitRead;
            });
            this.setState((prev) => ({
                data: [...prev.data, ...items],
            }));
        }
    }

    public clear() {
        this.setState((prev) => ({ ...prev, data: [] }));
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
