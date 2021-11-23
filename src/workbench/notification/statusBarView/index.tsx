import React, { memo } from 'react';
import { Icon } from 'mo/components/icon';
import type { INotification } from 'mo/model';
import { NotificationPane } from '../notificationPane';
import type { INotificationController } from 'mo/controller';

export function NotificationStatusBarView(
    props: INotification & Partial<INotificationController>
) {
    const {
        data = [],
        onClick,
        showNotifications,
        id,
        actionBar,
        onActionBarClick,
        onCloseNotification,
    } = props;
    const hasNotifications = data.length > 0;
    const renderIcon = hasNotifications ? 'bell-dot' : 'bell';
    return (
        <>
            <Icon onClick={onClick} type={renderIcon} />
            <NotificationPane
                id={id}
                data={data}
                actionBar={actionBar}
                showNotifications={showNotifications}
                onActionBarClick={onActionBarClick}
                onCloseNotification={onCloseNotification}
            />
        </>
    );
}
export default memo(NotificationStatusBarView);
