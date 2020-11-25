import * as React from 'react';
import { classNames } from 'mo/common/className';
import { IList } from './list';

export interface IItem<T = any> extends IList {
    icon?: string;
    disabled?: boolean;
    data?: T;
}

export function Item(props: React.PropsWithChildren<IItem>) {
    const { id, onClick, disabled, active, className, children, ...others } = props;
    const click = (e: React.MouseEvent) => {
        if (onClick) {
            onClick(e, props);
        }
    };
    const claNames = classNames('list-item', className, disabled, active === id ? 'active' : '');
    return (
        <li
            className={claNames}
            key={`${id}`}
        >
            <a className={'item-container'} onClick={click} {...others as any}>
                {children}
            </a>
        </li>
    );
}