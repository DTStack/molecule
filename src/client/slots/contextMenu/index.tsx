import { createPortal } from 'react-dom';
import useKeyPress from 'react-use/lib/useKeyPress';
import { Menu, Prevent } from 'mo/client/components';
import { useConnector, useOverlay } from 'mo/client/hooks';
import type { IContextMenuController } from 'mo/controllers/contextMenu';

import variables from './index.scss';

export type IContextMenuProps = IContextMenuController;

export default function ContextMenu({ onClick, onHide }: IContextMenuProps) {
    const contextMenu = useConnector('contextMenu');
    const [isPressed] = useKeyPress('Escape');

    const ref = useOverlay(() => {
        ref.current?.style.setProperty('opacity', '1');
    }, [contextMenu.visible]);

    if (!contextMenu.visible) return null;
    if (isPressed && contextMenu.visible) {
        onHide?.();
    }

    return createPortal(
        <Prevent className={variables.container} onClick={() => onHide?.()} onContextMenu={() => onHide?.()}>
            <Prevent
                ref={ref}
                className={variables.root}
                style={{
                    top: contextMenu.position.y,
                    left: contextMenu.position.x,
                }}
            >
                <Menu data={contextMenu.data} onClick={onClick} />
            </Prevent>
        </Prevent>,
        document.body
    );
}
