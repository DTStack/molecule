import { classNames } from 'mo/client/classNames';
import { IActivityBarItem } from 'mo/models/activityBar';
import type { ContextMenuEventHandler } from 'mo/types';

import Dropdown from '../dropdown';
import Icon from '../icon';
import variables from './index.scss';

export interface IActivityBarItemProps {
    checked?: boolean;
    data: IActivityBarItem;
    onClick?: (data: IActivityBarItem) => void;
    onContextMenuClick?: ContextMenuEventHandler;
}

export default function ActivityBarItem({
    checked,
    data,
    onClick,
    onContextMenuClick,
}: IActivityBarItemProps) {
    const { disabled, icon, className, hidden, contextMenu, style, role, title, render } = data;

    if (hidden) return null;

    return (
        <Dropdown data={contextMenu} placement="topRight" onClick={onContextMenuClick}>
            <li
                onClick={() => onClick?.(data)}
                className={classNames(
                    className,
                    variables.item,
                    checked && variables.checked,
                    disabled && variables.disabled
                )}
                role={role}
                style={style}
                title={title}
            >
                <Icon type={icon} className={variables.label}>
                    {render?.(data) || null}
                </Icon>
                {checked ? <div className={variables.indicator} /> : null}
            </li>
        </Dropdown>
    );
}
