import { type PropsWithChildren } from 'react';
import { classNames } from 'mo/client/classNames';
import type { HTMLElementProps } from 'mo/types';

import variables from './index.scss';

interface IPaneProps extends HTMLElementProps {}

export interface IPaneConfigs {
    maxSize?: number;
    minSize?: number;
    resizable?: boolean;
    hidden?: boolean;
}

export function Pane({ children, style, className, role, title }: PropsWithChildren<IPaneProps & IPaneConfigs>) {
    return (
        <div role={role} title={title} className={classNames(variables.pane, className)} style={style}>
            {children}
        </div>
    );
}
