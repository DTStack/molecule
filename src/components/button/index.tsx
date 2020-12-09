import './style.scss';
import * as React from 'react';
import { classNames, getBEMModifier, prefixClaName } from 'mo/common/className';

type BtnSizeType = 'normal' | 'large';
export interface IButton extends React.ComponentProps<'a'> {
    /**
     * Default size is normal
     */
    size?: BtnSizeType;
}

const defaultButtonClassName = prefixClaName('btn');
const normalButtonClassName = getBEMModifier(defaultButtonClassName, 'normal');
const largeButtonClassName = getBEMModifier(defaultButtonClassName, 'large');

export function Button(props: React.PropsWithChildren<IButton>) {
    const { className, children, size = 'normal', ...custom } = props;

    const sizeClassName = size === 'large' ? largeButtonClassName : normalButtonClassName;

    const claNames = classNames(
        defaultButtonClassName,
        sizeClassName,
        className
    );

    return (
        <a className={claNames} {...custom}>
            {children}
        </a>
    );
}
