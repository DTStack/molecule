import './style.scss';
import * as React from 'react';
import { classNames, prefixClaName } from 'mo/common/className';

type BtnSizeType = 'normal' | 'large';
export interface IButton extends React.ComponentProps<'a'> {
    /**
     * Default size is normal
     */
    size?: BtnSizeType;
}

export const defaultButtonClassName = 'btn';

export function Button(props: React.PropsWithChildren<IButton>) {
    const { className, children, size = 'normal', ...others } = props;

    const claNames = classNames(
        prefixClaName(defaultButtonClassName),
        size,
        className
    );

    return (
        <a className={claNames} {...others}>
            {children}
        </a>
    );
}
