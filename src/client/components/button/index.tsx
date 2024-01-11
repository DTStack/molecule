import { forwardRef } from 'react';
import { classNames } from 'mo/client/classNames';

import variables from './index.scss';

type BtnSizeType = 'normal' | 'large';
export interface IButtonProps extends Omit<React.ComponentProps<'button'>, 'ref'> {
    disabled?: boolean;
    size?: BtnSizeType;
    block?: Boolean;
    onClick?(event: React.MouseEvent): void;
}

export default forwardRef<HTMLButtonElement, React.PropsWithChildren<IButtonProps>>(function Button(props, ref) {
    const { className, children, size = 'normal', block, ...custom } = props;

    return (
        <button
            ref={ref}
            className={classNames(
                className,
                variables.container,
                block && variables.block,
                size === 'large' ? variables.large : variables.normal,
                props.disabled && variables.disabled
            )}
            {...custom}
        >
            {children}
        </button>
    );
});
