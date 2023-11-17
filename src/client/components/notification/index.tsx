import { createPortal } from 'react-dom';
import { classNames } from 'mo/client/classNames';
import useConnector from 'mo/client/hooks/useConnector';
import type { INotificationController } from 'mo/controllers/notification';

import Icon from '../icon';
import { NotificationPane } from './notificationPanel';
import variables from './index.scss';

export function Notification({
    onClick,
    onActionBarClick,
    onCloseNotification,
}: Pick<INotificationController, 'onClick' | 'onActionBarClick' | 'onCloseNotification'>) {
    const notification = useConnector('notification');

    const { data, actionBar, visible } = notification;
    const hasNotifications = data.length > 0;
    const renderIcon = hasNotifications ? 'bell-dot' : 'bell';

    return (
        <>
            <Icon
                className={classNames(variables.bell, visible && variables.activeBell)}
                onClick={onClick}
                type={renderIcon}
            />
            {createPortal(
                <NotificationPane
                    data={data}
                    visible={visible}
                    actionBar={actionBar}
                    onActionBarClick={onActionBarClick}
                    onCloseNotification={onCloseNotification}
                />,
                document.body
            )}
        </>
    );
}

export default Notification;
