import { classNames } from 'mo/client/classNames';
import type { HTMLElementProps, IMenuItemProps } from 'mo/types';
import { classify } from 'mo/utils';

import Dropdown from '../dropdown';
import Icon from '../icon';
import variables from './index.scss';

interface IActionBarProps extends HTMLElementProps {
    data: IMenuItemProps[];
    onClick?: (item: IMenuItemProps) => void;
}

export default function ActionBar({
    data,
    style,
    className,
    title,
    role,
    onClick,
}: IActionBarProps) {
    if (!data) return null;
    const [inline, ellipsis] = classify(data, (i) => i.group === 'inline');
    return (
        <div
            className={classNames(variables.container, className)}
            style={style}
            title={title}
            role={role}
        >
            {inline?.map((i) => (
                <div
                    key={i.id}
                    title={i.name}
                    className={classNames(variables.item, i.disabled && variables.disabled)}
                >
                    <Icon type={i.icon}>{i.name}</Icon>
                </div>
            ))}
            {!!ellipsis?.length && (
                <Dropdown data={ellipsis} trigger="click" onClick={onClick}>
                    <Icon className={variables.item} type="ellipsis" />
                </Dropdown>
            )}
        </div>
    );
}
