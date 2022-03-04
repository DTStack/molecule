import ReactDOM from 'react-dom';
import React, { memo, useEffect, useRef } from 'react';
import { Icon } from 'mo/components/icon';
import type { INotification } from 'mo/model';
import { NotificationPane } from '../notificationPane';
import type { INotificationController } from 'mo/controller';
import { classNames, getBEMModifier, prefixClaName } from 'mo/common/className';
import { select } from 'mo/common/dom';

const defaultBellClassName = prefixClaName('bell');
const activeBellClassName = getBEMModifier(defaultBellClassName, 'active');

export function NotificationStatusBarView(
    props: INotification & Partial<INotificationController>
) {
    const {
        data = [],
        onClick,
        showNotifications,
        id,
        actionBar,
        onActionBarClick,
        onCloseNotification,
    } = props;
    const wrapper = useRef<HTMLDivElement>();
    const hasNotifications = data.length > 0;
    const renderIcon = hasNotifications ? 'bell-dot' : 'bell';

    useEffect(() => {
        const container = select(`.${prefixClaName('workbench')}`);
        if (container) {
            wrapper.current = wrapper.current || document.createElement('div');
            container.appendChild(wrapper.current);
            ReactDOM.render(
                <NotificationPane
                    id={id}
                    data={data}
                    actionBar={actionBar}
                    showNotifications={showNotifications}
                    onActionBarClick={onActionBarClick}
                    onCloseNotification={onCloseNotification}
                />,
                wrapper.current
            );
        }
    }, [
        id,
        data,
        actionBar,
        showNotifications,
        onActionBarClick,
        onCloseNotification,
    ]);

    return (
        <Icon
            className={classNames(
                defaultBellClassName,
                showNotifications && activeBellClassName
            )}
            onClick={onClick}
            type={renderIcon}
        />
    );
}
export default memo(NotificationStatusBarView);
