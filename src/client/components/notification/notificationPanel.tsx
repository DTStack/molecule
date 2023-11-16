import { INotificationController } from 'mo/controllers/notification';
import { INotification } from 'mo/models/notification';

import useLocale from '../../hooks/useLocale';
import ActionBar from '../actionBar';
import Icon from '../icon';
import variables from './index.scss';

export function NotificationPane(
    props: INotification<any> &
        Pick<INotificationController, 'onActionBarClick' | 'onCloseNotification'>
) {
    const {
        data = [],
        actionBar = [],
        visible = false,
        onActionBarClick,
        onCloseNotification,
    } = props;
    const localize = useLocale();
    const hasNotifications = data.length > 0;
    const title = hasNotifications
        ? localize('notification.title', 'notifications')
        : localize('notification.title.no', 'no new notifications');
    const display = visible ? 'block' : 'none';

    return (
        <div className={variables.notification} style={{ display }}>
            <header className={variables.header}>
                <span>{title}</span>
                <ActionBar data={actionBar} onClick={onActionBarClick} />
            </header>
            <div className={variables.body}>
                {data.map((item) => (
                    <div className={variables.item} key={item.id}>
                        <Icon
                            title={localize('notification.clear', 'Clear Notification')}
                            onClick={() => onCloseNotification?.(item)}
                            className={variables.close}
                            type="close"
                        />
                        {typeof item.render === 'function' ? item.render(item) : item.value}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default NotificationPane;
