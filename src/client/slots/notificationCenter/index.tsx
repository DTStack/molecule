import Action from 'mo/client/components/action';
import ActionBar from 'mo/client/components/actionBar';
import Flex from 'mo/client/components/flex';
import useConnector from 'mo/client/hooks/useConnector';
import type { INotificationController } from 'mo/controllers/notification';
import type { NotificationModel } from 'mo/models/notification';

import useLocale from '../../hooks/useLocale';
import variables from './index.scss';

export type INotificationCenterProps = NotificationModel &
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
                    <Flex
                        className={variables.item}
                        key={item.id}
                        justifyContent="space-between"
                        alignItems="flex-start"
                    >
                        {typeof item.render === 'function' ? item.render(item) : item.value}
                        <Action
                            title={localize(builtin.constants.NOTIFICATION_TOOLBAR_CLEAR, 'Clear Notification')}
                            onClick={() => onCloseNotification?.(item)}
                            type="close"
                        />
                    </Flex>
                ))}
            </div>
        </section>
    );
}
