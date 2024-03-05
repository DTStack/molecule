import { classNames } from 'mo/client/classNames';
import { Alignment, ContextMenuHandler, IActivityBarItem, MenuHandler } from 'mo/types';
import { getNameForTitle } from 'mo/utils';

import Dropdown from '../dropdown';
import Icon from '../icon';
import Prevent from '../prevent';
import variables from './index.scss';

export interface IActivityBarItemProps {
    checked?: boolean;
    data: IActivityBarItem;
    onClick?: (data: IActivityBarItem) => void;
    onContextMenuClick?: MenuHandler;
    onContextMenu?: ContextMenuHandler<[item: IActivityBarItem]>;
}

export default function ActivityBarItem({
    checked,
    data,
    onClick,
    onContextMenu,
    onContextMenuClick,
}: IActivityBarItemProps) {
    const { disabled, icon, className, hidden, style, role, title, name, render } = data;

    if (hidden) return null;

    return (
        <Dropdown
            data={data.alignment === Alignment.top ? [] : data.contextMenu}
            placement="rightTop"
            onClick={onContextMenuClick}
            disabled={disabled}
            stopPropagation
        >
            <section>
                <Prevent onContextMenu={(e) => onContextMenu?.({ x: e.pageX, y: e.pageY }, data)}>
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
                        title={title || getNameForTitle(name)}
                    >
                        <Icon type={icon} className={variables.label}>
                            {render?.(data) || null}
                        </Icon>
                        {checked ? <div className={variables.indicator} /> : null}
                    </li>
                </Prevent>
            </section>
        </Dropdown>
    );
}
