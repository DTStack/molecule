import { INotificationController } from 'mo/controllers/notification';
import { INotification } from 'mo/models/notification';

import ActionBar from '../actionBar';
import Icon from '../icon';
import variables from './index.scss';

export function NotificationPane(props: INotification & Partial<INotificationController>) {
    const {
        title,
        data = [],
        actionBar = [],
        showNotifications,
        onActionBarClick,
        onCloseNotification,
    } = props;
    const display = showNotifications ? 'block' : 'none';

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
                            title="Clear Notification"
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
