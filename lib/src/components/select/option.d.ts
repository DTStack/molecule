import { ComponentProps } from 'react';
export interface ISelectOption extends ComponentProps<'option'> {
    value?: string;
    name?: string;
    description?: string;
    disabled?: boolean;
}
export declare function Option(props: ISelectOption): JSX.Element;
