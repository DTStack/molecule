import { useConnector, useLocale } from 'mo/client/hooks';
import type { INotificationItem } from 'mo/models/notification';

import Action from '../action';
import Flex from '../flex';
import variables from './index.scss';

export interface INotificationItemProps {
    data: INotificationItem;
    onClose: (data: INotificationItem) => void;
    onClick?: (data: INotificationItem) => void;
}

export default function NotificationItem({ data, onClose, onClick }: INotificationItemProps) {
    const localize = useLocale();
    const builtin = useConnector('builtin');

    return (
        <Flex
            className={variables.item}
            justifyContent="space-between"
            alignItems="flex-start"
            onClick={() => onClick?.(data)}
        >
            {typeof data.render === 'function' ? data.render(data) : data.value}
            <Action
                title={localize(builtin.constants.NOTIFICATION_TOOLBAR_CLEAR, 'Clear Notification')}
                onClick={() => onClose?.(data)}
                type="close"
            />
        </Flex>
    );
}
