import './style.scss';
import * as React from 'react';
import { prefixClaName, classNames } from 'mo/common/className';
import { ComponentProps } from 'react';
import { IItem } from './item';
import { cloneReactChildren } from 'mo/react';

export interface IList<T = any> extends ComponentProps<any> {
    /**
     * Default is vertical mode
     */
    mode?: 'horizontal' | 'vertical';
    /**
     * Current active
     */
    active?: string;
    onClick?(event: React.MouseEvent, item?: IItem): void;
}

export function List<T = any>(props: React.PropsWithChildren<IList<T>>) {
    const {
        children,
        active,
        onClick,
        className,
        mode = 'vertical',
        ...others
    } = props;
    const claNames = classNames(prefixClaName('list'), className, mode);
    return (
        <ul {...others} className={claNames}>
            {cloneReactChildren<IList>(children, { active, onClick })}
        </ul>
    );
}
