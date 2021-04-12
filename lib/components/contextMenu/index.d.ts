import * as React from 'react';
import { HTMLElementType } from 'mo/common/dom';
export interface IContextMenu {
    anchor: HTMLElementType;
    render: () => React.ReactNode;
}
export declare function useContextMenu(props: IContextMenu): {
    dispose: () => void;
    view: HTMLElementType;
    show(anchorPos: import("../../common/dom").IPosition, render?: (() => React.ReactNode) | undefined): void;
    hide(): void;
    onHide(callback?: Function | undefined): void;
} | undefined;
