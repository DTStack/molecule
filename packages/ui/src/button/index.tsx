import React, { forwardRef } from 'react';
import {
    classNames,
    getBEMModifier,
    prefixClaName,
} from '@dtinsight/molecule-common';

type BtnSizeType = 'normal' | 'large';
export interface IButtonProps
    extends Omit<React.ComponentProps<'button'>, 'ref'> {
    disabled?: boolean;
    size?: BtnSizeType;
    onClick?(event: React.MouseEvent): void;
}

export const defaultButtonClassName = prefixClaName('btn');
export const normalButtonClassName = getBEMModifier(
    defaultButtonClassName,
    'normal'
);
export const largeButtonClassName = getBEMModifier(
    defaultButtonClassName,
    'large'
);
export const disableButtonClassName = getBEMModifier(
    defaultButtonClassName,
    'disabled'
);

export const Button = forwardRef(function (
    props: React.PropsWithChildren<IButtonProps>,
    ref: React.ForwardedRef<HTMLButtonElement> | undefined
) {
    const { className, children, size = 'normal', ...custom } = props;

    const disabled = props.disabled ? disableButtonClassName : null;

    const sizeClassName =
        size === 'large' ? largeButtonClassName : normalButtonClassName;

    const claNames = classNames(
        className,
        defaultButtonClassName,
        sizeClassName,
        disabled
    );

    return (
        <button ref={ref} className={claNames} {...custom}>
            {children}
        </button>
    );
});
