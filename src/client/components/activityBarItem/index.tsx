import { classNames } from 'mo/client/classNames';
import useContextMenu from 'mo/client/hooks/useContextMenu';
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
    const { disabled, icon, className, hidden, style, role, title, name, render } = data;
    const contextMenu = useContextMenu('activityBar', data);

    if (hidden) return null;

    return (
        <Dropdown
            data={data.contextMenu}
            placement="rightTop"
            onClick={onContextMenuClick}
            disabled={disabled}
            stopPropagation
        >
            <section>
                <Dropdown
                    data={contextMenu}
                    trigger="contextMenu"
                    onClick={onContextMenuClick}
                    disabled={disabled}
                    stopPropagation
                    placement="rightTop"
                >
                    <li
                        onClick={() => !disabled && onClick?.(data)}
                        className={classNames(
                            className,
                            variables.item,
                            checked && variables.checked,
                            disabled && variables.disabled
                        )}
                        role={role}
                        style={style}
                        title={title || name}
                    >
                        <Icon type={icon} className={variables.label}>
                            {render?.(data) || null}
                        </Icon>
                        {checked ? <div className={variables.indicator} /> : null}
                    </li>
                </Dropdown>
            </section>
        </Dropdown>
    );
}
