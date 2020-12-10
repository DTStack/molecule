import './style.scss';
import * as React from 'react';
import { classNames, prefixClaName } from 'mo/common/className';

type BtnSizeType = 'normal' | 'large';
export interface IButton extends React.ComponentProps<'a'> {
    disabled?: boolean;
    size?: BtnSizeType;
    onClick?(event: React.MouseEvent): void;
}

export const defaultButtonClassName = 'btn';

export function Button(props: React.PropsWithChildren<IButton>) {
    const { className, children, size = 'normal', onClick, ...others } = props;
    const disabled = props.disabled ? 'disabled' : null;
    const click = (e: React.MouseEvent) => onClick?.(e);
    const claNames = classNames(
        prefixClaName(defaultButtonClassName),
        size,
        className,
        disabled
    );

    return (
        <a className={claNames} {...others} onClick={click}>
            {children}
        </a>
    );
}
