import * as React from 'react';
import { HTMLElementType } from 'mo/common/dom';
import { useContextView } from 'mo/components/contextview';
import './style.scss';

export interface IContextMenu {
    anchor: HTMLElementType;
    render: () => React.ReactNode;
}

export function useContextMenu(props: IContextMenu) {
    const { anchor, render } = props;

    if (!anchor) {
        return;
    }

    const contextView = useContextView({
        render,
    });

    const onContextMenu = (e: MouseEvent) => {
        e.preventDefault();
        contextView!.show(
            {
                x: e.clientX,
                y: e.clientY,
            },
            render
        );
    };

    anchor.addEventListener('contextmenu', onContextMenu);

    const dispose = () => {
        contextView!.hide();
        anchor.removeEventListener('contextmenu', onContextMenu);
    };

    return { ...contextView, dispose };
}
