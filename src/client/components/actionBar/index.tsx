import React from 'react';
import { classNames } from 'mo/client/classNames';
import type { HTMLElementProps, IMenuItemProps } from 'mo/types';
import { classify, sortByIndex } from 'mo/utils';

import Action from '../action';
import Dropdown from '../dropdown';
import variables from './index.scss';

interface IActionBarProps extends HTMLElementProps {
    data?: IMenuItemProps[];
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
    const [inline = [], ellipsis = []] = classify(data, (i) => i.group === 'inline');
    return (
        <div
            className={classNames(variables.container, className)}
            style={style}
            title={title}
            role={role}
        >
            {inline.sort(sortByIndex).map((i) => (
                <React.Fragment key={i.id}>
                    {i.render?.(i) || (
                        <Action
                            type={i.icon}
                            title={i.name}
                            disabled={i.disabled}
                            onClick={() => onClick?.(i)}
                        >
                            {i.name}
                        </Action>
                    )}
                </React.Fragment>
            ))}
            {!!ellipsis.length && (
                <Dropdown data={ellipsis} trigger="click" onClick={onClick} stopPropagation>
                    <Action type="ellipsis" />
                </Dropdown>
            )}
        </div>
    );
}
