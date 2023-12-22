import { createPortal } from 'react-dom';
import { classNames } from 'mo/client/classNames';
import Display from 'mo/client/components/display';
import Icon from 'mo/client/components/icon';
import useConnector from 'mo/client/hooks/useConnector';
import type { INotificationController } from 'mo/controllers/notification';

import NotificationCenter from '../notificationCenter';
import variables from './index.scss';

export default function Notification({
    onClick,
    onActionBarClick,
    onCloseNotification,
}: Pick<INotificationController, 'onClick' | 'onActionBarClick' | 'onCloseNotification'>) {
    const notification = useConnector('notification');
    const layout = useConnector('layout');

    const { data, toolbar } = notification;
    const hasNotifications = data.length > 0;
    const renderIcon = hasNotifications ? 'bell-dot' : 'bell';

    return (
        <>
            <Icon className={classNames(variables.bell)} onClick={onClick} type={renderIcon} />
            {createPortal(
                <Display visible={!layout.notification.hidden}>
                    <NotificationCenter
                        data={data}
                        toolbar={toolbar}
                        onActionBarClick={onActionBarClick}
                        onCloseNotification={onCloseNotification}
                    />
                </Display>,
                document.body
            )}
        </>
    );
}
