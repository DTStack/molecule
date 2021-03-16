import { Icon } from 'mo/components/icon';
import * as React from 'react';
import { injectable } from 'tsyringe';
import { IStatusBarItem } from './workbench/statusBar';

export type NotificationStatusType = 'message' | 'normal';

export interface INotification<T = any> extends IStatusBarItem {
    data: T[];
    status: NotificationStatusType;
}

@injectable()
export class NotificationModel<T> implements INotification<T> {

    static readonly ID = 'MO_NOTIFICATION';
    static readonly NAME = 'Notification';

    public id: string;
    public name: string;
    public data: T[];
    public sortIndex: number;
    public render: () => ReactNode;
    public status: NotificationStatusType;

    constructor(
        id: string = NotificationModel.ID,
        name: string = NotificationModel.NAME,
        data: T[] = [],
        sortIndex: number = 1,
        render: () => ReactNode = () => <Icon type="bell" />,
        status: NotificationStatusType = 'normal'
    ) {
        this.id = id;
        this.name = name;
        this.sortIndex = sortIndex;
        this.render = render;
        this.status = status;
        this.data = data;
    }
}
