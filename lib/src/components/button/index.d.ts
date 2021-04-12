import * as React from 'react';
declare type BtnSizeType = 'normal' | 'large';
export interface IButton extends React.ComponentProps<'a'> {
    disabled?: boolean;
    size?: BtnSizeType;
    onClick?(event: React.MouseEvent): void;
}
export declare function Button(props: React.PropsWithChildren<IButton>): JSX.Element;
export {};
