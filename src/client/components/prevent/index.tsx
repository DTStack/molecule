import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export default forwardRef<HTMLDivElement, PropsWithChildren<HTMLAttributes<HTMLDivElement>>>(function Prevent(
    { children, onContextMenu, ...rest },
    ref
) {
    return (
        <div
            onContextMenu={(e) => {
                e.stopPropagation();
                e.preventDefault();
                e.persist();
                (e.target as HTMLDivElement).focus();
                onContextMenu?.(e);
            }}
            ref={ref}
            {...rest}
        >
            {children}
        </div>
    );
});
