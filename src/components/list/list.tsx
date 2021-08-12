import * as React from 'react';
import { prefixClaName, classNames, getBEMModifier } from 'mo/common/className';
import { ComponentProps, useEffect, useState } from 'react';
import { cloneReactChildren } from 'mo/react';
import { IItemProps } from './item';

export interface IListProps extends Omit<ComponentProps<'ul'>, 'onSelect'> {
    /**
     * Default is vertical mode
     */
    mode?: 'horizontal' | 'vertical';
    /**
     * Current active
     */
    current?: string;
    /**
     * It's used to disable specific item, the value of disable is id string
     */
    disable?: string;
    /**
     * Listen to the select event of List
     * @param event React mouse event
     * @param item Selected the List item object
     */
    onSelect?(event: React.MouseEvent, item?: IItemProps): void;
    /**
     * Listen to the click event of List
     * @param event React mouse event
     * @param item Clicked the List item object
     */
    onClick?(event: React.MouseEvent, item?: IItemProps): void;
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

export function List(props: React.PropsWithChildren<IListProps>) {
    const {
        children,
        current,
        disable,
        onClick,
        onSelect,
        className,
        mode = 'vertical',
        ...restProps
    } = props;

    const [active, setActive] = useState<string | undefined>(current);
    const [isDisable, setIsDisable] = useState<string | undefined>(disable);

    useEffect(() => {
        if (active !== current) {
            setActive(current);
        }
        if (disable !== isDisable) {
            setIsDisable(disable);
        }
    }, [current, disable]);

    const handleClick = (event: React.MouseEvent, item: IItemProps) => {
        onClick?.(event, item);
        if (item) {
            if (item.id !== active) {
                setActive(item.id);
            }
            onSelect?.(event, item);
        }
    };

    const modeClassName =
        mode === 'horizontal' ? horizontalClassName : verticalClassName;
    const claNames = classNames(defaultListClassName, className, modeClassName);

    return (
        <ul {...restProps} className={claNames}>
            {cloneReactChildren(children, {
                active: active,
                disable: isDisable,
                onClick: handleClick,
            })}
        </ul>
    );
}
