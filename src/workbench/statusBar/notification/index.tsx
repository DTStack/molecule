import * as React from 'react';
import { Icon } from 'mo/components/icon';
import { INotification } from 'mo/model/notification';
import { INotificationController } from 'mo/controller/notification';

export function Notification(props: INotification & INotificationController) {
    const { data = [], onClick } = props;
    const hasNotifications = data.length > 0;
    const renderIcon = hasNotifications ? 'bell-dot' : 'bell';
    return <Icon onClick={onClick} type={renderIcon} />;
}
