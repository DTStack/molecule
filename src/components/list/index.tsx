import './style.scss';
import * as React from 'react';
import { prefixClaName, classNames } from 'mo/common/className';

export interface IItem<T = any> {
    id?: string;
    name?: string;
    title?: string;
    icon?: string;
    disabled?: boolean;
    data?: T;
    className?: string;
    onClick?(event: React.MouseEvent, item: IItem): void;
}

export interface IList<T = any> {
    className?: string;
    /**
     * Default is vertical direction
     */
    direction?: 'horizontal' | 'vertical';
}

export function Item(props: React.PropsWithChildren<IItem>) {
    const { id, onClick, disabled, className, children, ...others } = props;
    const click = (e: React.MouseEvent) => {
        if (onClick) {
            onClick(e, props);
        }
    };
    return (
        <li
            className={classNames('list-item', className, disabled)}
            key={`${id}`}
        >
            <a className={'list-label'} onClick={click} {...others}>
                {children}
            </a>
        </li>
    );
}

export function List<T = any>(props: React.PropsWithChildren<IList<T>>) {
    const { children, className, direction = 'vertical', ...others } = props;

    return (
        <ul
            className={classNames(prefixClaName('list', className), direction)}
            {...others}
        >
            {children}
        </ul>
    );
}
