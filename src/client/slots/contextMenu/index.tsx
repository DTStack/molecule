import { createPortal } from 'react-dom';
import useKeyPress from 'react-use/lib/useKeyPress';
import Prevent from 'mo/client/components/prevent';
import useOverlayEffect from 'mo/client/hooks/useOverlay';
import { IContextMenuController } from 'mo/controllers/contextMenu';

import Menu from '../../components/menu';
import useConnector from '../../hooks/useConnector';
import variables from './index.scss';

export default function ContextMenu({ onClick, onHide }: IContextMenuController) {
    const contextMenu = useConnector('contextMenu');
    const [isPressed] = useKeyPress('Escape');

    const ref = useOverlayEffect(() => {
        ref.current?.style.setProperty('opacity', '1');
    }, [contextMenu.visible]);

    if (!contextMenu.visible) return null;
    if (isPressed && contextMenu.visible) {
        onHide?.();
    }

    return createPortal(
        <Prevent
            className={variables.container}
            onClick={() => onHide?.()}
            onContextMenu={() => onHide?.()}
        >
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
