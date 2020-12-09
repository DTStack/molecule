import * as React from 'react';
import { prefixClaName, classNames, getBEMModifier } from 'mo/common/className';
import { ComponentProps } from 'react';
import { cloneReactChildren } from 'mo/react';
import { IItem } from './item';

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

export const defaultListClassName = prefixClaName('list');
export const verticalClassName = getBEMModifier(
    defaultListClassName,
    'vertical'
);
export const horizontalClassName = prefixClaName(
    defaultListClassName,
    'horizontal'
);

export function List<T = any>(props: React.PropsWithChildren<IList<T>>) {
    const {
        children,
        active,
        onClick,
        className,
        mode = 'vertical',
        ...others
    } = props;
    const modeClassName =
        mode === 'horizontal' ? horizontalClassName : verticalClassName;
    const claNames = classNames(defaultListClassName, className, modeClassName);
    return (
        <ul {...others} className={claNames}>
            {cloneReactChildren<IList>(children, { active, onClick })}
        </ul>
    );
}
