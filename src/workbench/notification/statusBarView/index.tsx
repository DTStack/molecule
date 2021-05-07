import * as React from 'react';
import { Icon } from 'mo/components/icon';
import { IStatusBarItem } from 'mo/model/workbench/statusBar';

export function NotificationStatusBarView(props: IStatusBarItem) {
    const { data = [], onClick } = props;
    const hasNotifications = data.length > 0;
    const renderIcon = hasNotifications ? 'bell-dot' : 'bell';
    return <Icon onClick={onClick} type={renderIcon} />;
}
export default React.memo(NotificationStatusBarView);
