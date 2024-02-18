import ActionBar from 'mo/client/components/actionBar';
import Flex from 'mo/client/components/flex';
import NotificationItem from 'mo/client/components/notificationItem';
import useConnector from 'mo/client/hooks/useConnector';
import type { INotificationController } from 'mo/controllers/notification';
import type { NotificationModel } from 'mo/models/notification';

import useLocale from '../../hooks/useLocale';
import variables from './index.scss';

export type INotificationCenterProps = Pick<NotificationModel, 'data' | 'toolbar'> &
    Pick<INotificationController, 'onActionBarClick' | 'onCloseNotification'>;

export default function NotificationCenter({
    data = [],
    toolbar = [],
    onActionBarClick,
    onCloseNotification,
}: INotificationCenterProps) {
    const localize = useLocale();
    const builtin = useConnector('builtin');

    const hasNotifications = data.length > 0;
    const title = hasNotifications
        ? localize(builtin.constants.STATUSBAR_ITEM_NOTIFICATION, 'Notifications')
        : localize(builtin.constants.NOTIFICATION_ITEM_EMPTY, 'No New Notifications');

    return (
        <section className={variables.notification}>
            <Flex className={variables.header} justifyContent="space-between">
                <span>{title}</span>
                <ActionBar data={toolbar} onClick={onActionBarClick} />
            </Flex>
            <div className={variables.body}>
                {data.map((item) => (
                    <NotificationItem key={item.id} data={item} onClose={onCloseNotification} />
                ))}
            </div>
        </section>
    );
}
