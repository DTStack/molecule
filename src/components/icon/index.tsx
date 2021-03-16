import { classNames, prefixClaName } from 'mo/common/className';
import * as React from 'react';
import 'vscode-codicons/dist/codicon.css';

export interface IIcon extends HTMLElementProps {
    type: string;
    onClick?: (e: React.MouseEvent) => void;
}

export function Icon(props: IIcon): React.ReactElement {
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
