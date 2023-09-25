import { ComponentProps } from 'react';
import { classNames, prefix } from 'mo/client/classNames';
import type { IconType } from 'mo/types';

import '@vscode/codicons/dist/codicon.css';
import './index.scss';

export interface IIconProps extends ComponentProps<'span'> {
    type?: IconType;
    onClick?: (e: React.MouseEvent) => void;
}

export default function Icon(props: React.PropsWithChildren<IIconProps>) {
    const { className, type, children, ...restProps } = props;
    if (type) {
        return typeof type === 'string' ? (
            <span
                className={classNames(
                    className,
                    'codicon',
                    type.includes('~spin') && 'codicon-spin',
                    prefix(type.split('~spin')[0], 'codicon')
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
