import React from 'react';
import { classNames, prefixClaName } from 'mo/common/className';
import '@vscode/codicons/dist/codicon.css';
import { ComponentProps } from 'react';

export interface IIconProps extends ComponentProps<'span'> {
    type?: string | JSX.Element;
    onClick?: (e: React.MouseEvent) => void;
}

export function Icon(props: React.PropsWithChildren<IIconProps>) {
    const { className, type, children, ...restProps } = props;
    if (type) {
        return typeof type === 'string' ? (
            <span
                className={classNames(
                    className,
                    'codicon',
                    type.includes('~spin') && 'codicon-spin',
                    prefixClaName(type.split('~spin')[0], 'codicon')
                )}
                {...restProps}
            />
        ) : (
            type
        );
    }

    return children ? (
        <span className={className} {...restProps}>
            {children}
        </span>
    ) : null;
}
