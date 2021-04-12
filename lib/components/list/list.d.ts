import * as React from 'react';
import { ComponentProps } from 'react';
import { IItem } from './item';
export interface IList<T = any> extends ComponentProps<any> {
    /**
     * Default is vertical mode
     */
    mode?: 'horizontal' | 'vertical';
    /**
     * Current active
     */
    active?: string;
    onClick?(event: React.MouseEvent, item?: IItem): void;
}
export declare const defaultListClassName: string;
export declare const verticalClassName: string;
export declare const horizontalClassName: string;
export declare function List<T = any>(props: React.PropsWithChildren<IList<T>>): JSX.Element;
