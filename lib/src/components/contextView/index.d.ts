import * as React from 'react';
import { HTMLElementType, IPosition } from 'mo/common/dom';
export interface IContextViewProps {
    /**
     * Default true
     */
    shadowOutline?: boolean;
    render?: () => React.ReactNode;
}
export interface IContextView {
    view: HTMLElementType;
    show(anchorPos: IPosition, render?: () => React.ReactNode): void;
    hide(): void;
    onHide(callback?: Function): void;
    dispose(): void;
}
export declare const shadowClassName: string;
export declare function useContextView(props?: IContextViewProps): IContextView;
