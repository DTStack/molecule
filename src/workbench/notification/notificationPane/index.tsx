import * as React from 'react';
import { INotification } from 'mo/model/notification';
import { INotificationController } from 'mo/controller/notification';
import {
    classNames,
    getBEMElement,
    getBEMModifier,
    prefixClaName,
} from 'mo/common/className';
import { ActionBar } from 'mo/components/actionBar';
import { shadowClassName } from 'mo/components/contextView';
import { Icon } from 'mo/components/icon';

const defaultNotificationClassName = prefixClaName('notification');
const notificationHeaderClassName = getBEMElement(
    defaultNotificationClassName,
    'header'
);
const notificationBodyClassName = getBEMElement(
    defaultNotificationClassName,
    'body'
);
const notificationCloseClassName = getBEMModifier(
    defaultNotificationClassName,
    'close'
);

export function NotificationPane(
    props: INotification & INotificationController
) {
    const {
        data = [],
        actionBar = [],
        showNotifications,
        onActionBarClick,
        onCloseNotification,
    } = props;
    const hasNotifications = data.length > 0;
    const title = hasNotifications ? 'notifications' : 'no new notifications';
    const display = showNotifications ? 'block' : 'none';

    return (
        <div
            className={classNames(
                defaultNotificationClassName,
                shadowClassName
            )}
            style={{ display }}
        >
            <header className={notificationHeaderClassName}>
                <span>{title}</span>
                <ActionBar data={actionBar} onClick={onActionBarClick} />
            </header>
            <div className={notificationBodyClassName}>
                {data.map((item) => (
                    <p key={item.id}>
                        {typeof item.render === 'function'
                            ? item.render(item)
                            : item.value}
                        <Icon
                            title="Clear Notification"
                            onClick={() => onCloseNotification(item)}
                            className={notificationCloseClassName}
                            type="close"
                        />
                    </p>
                ))}
            </div>
        </div>
    );
}
export default React.memo(NotificationPane);
