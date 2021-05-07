import 'reflect-metadata';
import {
    INotification,
    INotificationItem,
    NotificationModel,
    NotificationStatus,
} from 'mo/model/notification';
import { Component } from 'mo/react';
import { singleton, container } from 'tsyringe';
import { searchById } from './helper';

export interface INotificationService extends Component<INotification> {
    addNotifications<T>(
        items: INotificationItem<T>[]
    ): null | INotificationItem<T>[];
    removeNotification(id: number): void;
    updateNotification<T>(
        item: INotificationItem<T>
    ): null | INotificationItem<T>;
    showHideNotifications(): void;
}

@singleton()
export class NotificationService
    extends Component<INotification>
    implements INotificationService {
    protected state: INotification;

    constructor() {
        super();
        this.state = container.resolve(NotificationModel);
    }

    public showHideNotifications(): void {
        this.setState({
            ...this.state,
            showNotifications: !this.state.showNotifications,
        });
    }

    public updateNotification<T>(
        item: INotificationItem<T>
    ): INotificationItem<T> | null {
        const { data = [] } = this.state;
        if (data.length > -1) {
            const index = data.findIndex(searchById(item.id));
            if (index > -1) {
                const original = data[index];
                data[index] = Object.assign(original, item);
                this.setState({
                    ...this.state,
                    data: [...data],
                });
                return data[index];
            }
        }
        return null;
    }

    public removeNotification(id: number): void {
        const { data = [] } = this.state;
        if (data.length > -1) {
            const index = data.findIndex(searchById(id));
            if (index > -1) {
                data.splice(index, 1);
                this.setState({
                    ...this.state,
                    data: [...data],
                });
            }
        }
    }

    public addNotifications<T>(
        items: INotificationItem<any>[]
    ): null | INotificationItem<T>[] {
        const { data = [] } = this.state;

        if (items && items.length) {
            items.forEach((item) => {
                if (item.id === undefined) item.id = data.length;
                item.status = NotificationStatus.WaitRead;
            });
            const arr = [...data, ...items];
            this.setState({
                ...this.state,
                data: arr,
            });
            return items;
        }
        return null;
    }
}
