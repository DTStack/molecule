import * as React from 'react';
import { classNames, prefixClaName } from 'mo/common/className';
import 'vscode-codicons/dist/codicon.css';
import { ComponentProps } from 'react';

export interface IIconProps extends ComponentProps<'span'> {
    type: string;
    onClick?: (e: React.MouseEvent) => void;
}

export function Icon(props: IIconProps) {
    const { className, type, ...restProps } = props;
    return (
        <span
            className={classNames(
                className,
                'codicon',
                prefixClaName(type, 'codicon')
            )}
            {...restProps}
        ></span>
    );
}
