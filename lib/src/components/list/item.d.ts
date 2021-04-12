import * as React from 'react';
import { IList } from './list';
export interface IItem<T = any> extends IList {
    icon?: string;
    disabled?: boolean;
    data?: T;
}
export declare function Item(props: React.PropsWithChildren<IItem>): JSX.Element;
