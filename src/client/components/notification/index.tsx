import { createPortal } from 'react-dom';
import { classNames } from 'mo/client/classNames';
import useConnector from 'mo/client/hooks/useConnector';
import type { INotificationController } from 'mo/controllers/notification';

import useLocale from '../../hooks/useLocale';
import Icon from '../icon';
import { NotificationPane } from './notificationPanel';
import variables from './index.scss';

export function Notification({
    onClick,
    onActionBarClick,
    onCloseNotification,
}: Partial<INotificationController>) {
    const notification = useConnector('notification');
    const localize = useLocale();

    const { id, data, actionBar, showNotifications } = notification;
    const hasNotifications = data.length > 0;
    const renderIcon = hasNotifications ? 'bell-dot' : 'bell';
    const title = hasNotifications
        ? localize('notification.title', 'notifications')
        : localize('notification.title.no', 'no new notifications');

    return (
        <>
            <Icon
                className={classNames(variables.bell, showNotifications && variables.activeBell)}
                onClick={onClick}
                type={renderIcon}
            />
            {createPortal(
                <NotificationPane
                    title={title}
                    id={id}
                    data={data}
                    actionBar={actionBar}
                    showNotifications={showNotifications}
                    onActionBarClick={onActionBarClick}
                    onCloseNotification={onCloseNotification}
                />,
                document.body
            )}
        </>
    );
}

export default Notification;
