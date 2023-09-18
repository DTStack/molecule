import { classNames } from 'mo/client/classNames';
import useContextMenu from 'mo/client/hooks/useContextMenu';
import type { IPanelItem } from 'mo/models/panel';
import type { ContextMenuEventHandler } from 'mo/types';

import Dropdown from '../dropdown';
import Icon from '../icon';

interface IPanelItemProps {
    className?: string;
    data: IPanelItem;
    onClose?: (id: IPanelItem['id']) => void;
    onClick?: () => void;
    onContextMenuClick?: ContextMenuEventHandler;
}

export default function PanelItem({
    className,
    data: p,
    onClose,
    onClick,
    onContextMenuClick,
}: IPanelItemProps) {
    const contextMenu = useContextMenu('panel', p);
    return (
        <Dropdown
            data={contextMenu}
            stopPropagation
            trigger="contextMenu"
            onClick={onContextMenuClick}
        >
            <div key={p.id} className={classNames(className)} onClick={onClick}>
                {!!p.icon && <Icon type={p.icon} />}
                {p.name}
                {!!p.closable && (
                    <Icon
                        type="close"
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose?.(p.id);
                        }}
                    />
                )}
            </div>
        </Dropdown>
    );
}
