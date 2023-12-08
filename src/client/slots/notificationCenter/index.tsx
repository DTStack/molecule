import Action from 'mo/client/components/action';
import ActionBar from 'mo/client/components/actionBar';
import Display from 'mo/client/components/display';
import Flex from 'mo/client/components/flex';
import { INotificationController } from 'mo/controllers/notification';
import { INotification } from 'mo/models/notification';

import useLocale from '../../hooks/useLocale';
import variables from './index.scss';

export default function NotificationCenter({
    data = [],
    actionBar = [],
    visible = false,
    onActionBarClick,
    onCloseNotification,
}: INotification<any> & Pick<INotificationController, 'onActionBarClick' | 'onCloseNotification'>) {
    const localize = useLocale();
    const hasNotifications = data.length > 0;
    const title = hasNotifications
        ? localize('notification.title', 'notifications')
        : localize('notification.title.no', 'no new notifications');

    return (
        <Display visible={visible}>
            <section className={variables.notification}>
                <Flex className={variables.header} justifyContent="space-between">
                    <span>{title}</span>
                    <ActionBar data={actionBar} onClick={onActionBarClick} />
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
                                title={localize('notification.clear', 'Clear Notification')}
                                onClick={() => onCloseNotification?.(item)}
                                type="close"
                            />
                        </Flex>
                    ))}
                </div>
            </section>
        </Display>
    );
}
