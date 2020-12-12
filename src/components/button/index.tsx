import './style.scss';
import * as React from 'react';
import { classNames, getBEMModifier, prefixClaName } from 'mo/common/className';

type BtnSizeType = 'normal' | 'large';
export interface IButton extends React.ComponentProps<'a'> {
    disabled?: boolean;
    size?: BtnSizeType;
    onClick?(event: React.MouseEvent): void;
}

const defaultButtonClassName = prefixClaName('btn');
const normalButtonClassName = getBEMModifier(defaultButtonClassName, 'normal');
const largeButtonClassName = getBEMModifier(defaultButtonClassName, 'large');
const disableButtonClassName = getBEMModifier(
    defaultButtonClassName,
    'disabled'
);

export function Button(props: React.PropsWithChildren<IButton>) {
    const { className, children, size = 'normal', ...custom } = props;

    const disabled = props.disabled ? disableButtonClassName : null;

    const sizeClassName =
        size === 'large' ? largeButtonClassName : normalButtonClassName;

    const claNames = classNames(
        defaultButtonClassName,
        sizeClassName,
        className,
        disabled
    );

    return (
        <a className={claNames} {...custom}>
            {children}
        </a>
    );
}
