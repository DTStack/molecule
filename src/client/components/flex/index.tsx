import { CSSProperties, forwardRef, HTMLAttributes, type PropsWithChildren } from 'react';
import { classNames } from 'mo/client/classNames';
import type { HTMLElementProps } from 'mo/types';

import variables from './index.scss';

export interface IFlexProps
    extends HTMLElementProps,
        Pick<HTMLAttributes<HTMLDivElement>, 'tabIndex' | 'onClick' | 'onContextMenu' | 'onDragEnter' | 'onDragLeave'> {
    alignItems?: CSSProperties['alignItems'];
    justifyContent?: CSSProperties['justifyContent'];
}

export default forwardRef<HTMLElement, PropsWithChildren<IFlexProps>>(function Flex(
    { alignItems = 'center', justifyContent = 'center', children, title, className, role, style, ...rest },
    ref
) {
    return (
        <section
            className={classNames(variables.flex, className)}
            style={{ ...style, alignItems, justifyContent }}
            role={role}
            title={title}
            ref={ref}
            {...rest}
        >
            {children}
        </section>
    );
});
