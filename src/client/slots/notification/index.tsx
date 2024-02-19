import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from 'mo/client/classNames';
import { Display, Icon, NotificationItem } from 'mo/client/components';
import { useConnector, useListener } from 'mo/client/hooks';
import type { INotificationController } from 'mo/controllers/notification';
import { searchById } from 'mo/utils';
import { toast } from 'sonner';

import NotificationCenter from '../notificationCenter';
import variables from './index.scss';

export type INotificationProps = INotificationController;

export default function Notification({
    onKeyPress,
    onClick,
    onClickItem,
    onActionBarClick,
    onCloseNotification,
}: INotificationProps) {
    const notification = useConnector('notification');
    const layout = useConnector('layout');

    const toasters = useListener(notification.toasts);

    const { data, toolbar } = notification;
    const hasNotifications = data.length > 0;
    const renderIcon = hasNotifications ? 'bell-dot' : 'bell';

    toasters.useCreate((data) => {
        data.forEach((id) => {
            const item = notification.data.find(searchById(id));
            if (item) {
                toast(<NotificationItem data={item} onClose={onCloseNotification} onClick={onClickItem} />, {
                    id: item.id,
                    duration: Infinity,
                    unstyled: true,
                });
            }
        });
    });

    toasters.useRemove((data) => {
        data.forEach((id) => {
            toast.dismiss(id);
        });
    });

    useEffect(() => {
        window.addEventListener('keydown', onKeyPress);

        return () => {
            window.addEventListener('keydown', onKeyPress);
        };
    }, []);

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
