import { ComponentProps, PropsWithChildren } from 'react';
import { classNames } from 'mo/client/classNames';
import type { HTMLElementProps, IconType } from 'mo/types';

import Icon from '../icon';
import variables from './index.scss';

export interface IActionProps extends HTMLElementProps, Omit<ComponentProps<'div'>, 'role'> {
    type?: IconType;
    disabled?: boolean;
}

export default function Action({
    className,
    disabled,
    type,
    children,
    onClick,
    ...restProps
}: PropsWithChildren<IActionProps>) {
    return (
        <div
            className={classNames(variables.action, disabled && variables.disabled, className)}
            onClick={(e) => {
                e.stopPropagation();
                e.persist();
                !disabled && onClick?.(e);
            }}
            {...restProps}
        >
            <Icon type={type}>{children}</Icon>
        </div>
    );
}
