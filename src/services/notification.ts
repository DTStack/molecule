import { cloneDeep } from 'lodash-es';
import { BaseService } from 'mo/glue';
import { INotificationItem, NotificationModel, NotificationStatus } from 'mo/models/notification';
import type { UniqueId } from 'mo/types';
import { randomId, searchById } from 'mo/utils';
import logger from 'mo/utils/logger';

export interface INotificationService extends BaseService<NotificationModel<any>> {
    /**
     * Add new notification items
     * @param items
     */
    add<T>(items: INotificationItem<T>[]): null | INotificationItem<T>[];
    /**
     * Remove the specific notification item by id
     * @param id
     */
    remove(id: UniqueId): void;
    /**
     * Update the specific notification item
     * @param item notification item, the id field is required
     */
    update<T>(item: INotificationItem<T>): null | INotificationItem<T>;
    /**
     * Toggle the Notification view between display or hidden
     */
    toggleNotification(): void;
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

    public toggleNotification(): void {
        const next = cloneDeep(this.state);
        next.showNotifications = !this.state.showNotifications;
        this.setState(next);
    }

    public update<T>(item: INotificationItem<T>): INotificationItem<T> | null {
        const { data = [] } = this.state;
        if (data.length) {
            const index = data.findIndex(searchById(item.id));
            if (index > -1) {
                const original = data[index];
                data[index] = Object.assign(original, item);
                this.setState({
                    ...this.state,
                    data: [...data],
                });
                return data[index];
            } else {
                logger.error('There is no notification be found, please check the id');
            }
        }
        return null;
    }

    public remove(id: UniqueId): void {
        const { data = [] } = this.state;
        if (data.length) {
            const index = data.findIndex(searchById(id));
            if (index > -1) {
                data.splice(index, 1);
                this.setState({
                    ...this.state,
                    data: [...data],
                });
            } else {
                logger.error('There is no notification be found, please check the id');
            }
        } else {
            logger.error(
                "You can't remove notification because there is no notifications in data."
            );
        }
    }

    public add<T>(items: INotificationItem<T>[]): null | INotificationItem<T>[] {
        const { data = [] } = this.state;

        if (items && items.length) {
            items.forEach((item) => {
                if (item.id === undefined) item.id = randomId();
                item.status = NotificationStatus.WaitRead;
            });
            const arr = [...data, ...items];
            this.setState({
                data: arr,
            });
            return items;
        }
        return null;
    }

    public clear() {
        this.setState({
            data: [],
        });
    }

    public reset() {
        this.setState({
            id: '',
            name: '',
            data: [],
            sortIndex: 1,
            showNotifications: false,
            actionBar: [],
            render: undefined,
        });
    }
}
