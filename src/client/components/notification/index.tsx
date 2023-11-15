import { memo, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { classNames, prefix } from 'mo/client/classNames';
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
    const wrapper = useRef<HTMLDivElement>();
    const rootRef = useRef<ReturnType<typeof createRoot>>();
    const notification = useConnector('notification');
    const localize = useLocale();

    const { id, data, actionBar, showNotifications } = notification;
    const hasNotifications = data.length > 0;
    const renderIcon = hasNotifications ? 'bell-dot' : 'bell';
    const title = hasNotifications
        ? localize('notification.title', 'notifications')
        : localize('notification.title.no', 'no new notifications');

    useEffect(() => {
        const container = document.querySelector(`.${prefix('mainBench')}`);
        if (container) {
            wrapper.current = wrapper.current || document.createElement('div');
            container.appendChild(wrapper.current);
            rootRef.current ||= createRoot(wrapper.current);
            rootRef.current.render(
                <NotificationPane
                    title={title}
                    id={id}
                    data={data}
                    actionBar={actionBar}
                    showNotifications={showNotifications}
                    onActionBarClick={onActionBarClick}
                    onCloseNotification={onCloseNotification}
                />
            );
        }
    }, [id, data, actionBar, showNotifications, title, onActionBarClick, onCloseNotification]);

    return (
        <Icon
            className={classNames(variables.bell, showNotifications && variables.activeBell)}
            onClick={onClick}
            type={renderIcon}
        />
    );
}

export default memo(Notification);
