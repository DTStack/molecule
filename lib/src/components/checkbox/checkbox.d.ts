import * as React from 'react';
import { ComponentProps } from 'react';
export interface ICheckbox extends ComponentProps<any> {
    id: string;
    value?: string;
    children?: ReactNode;
    onChange?(e: React.ChangeEvent, options?: ICheckbox): void;
}
export declare const checkboxClassName: string;
export declare function Checkbox(props: ICheckbox): JSX.Element;
