import { classNames } from 'mo/client/classNames';
import type { IPanelItem } from 'mo/models/panel';
import type { ContextMenuWithItemHandler } from 'mo/types';

import Icon from '../icon';
import Prevent from '../prevent';

interface IPanelItemProps {
    className?: string;
    data: IPanelItem;
    onClose?: (id: IPanelItem['id']) => void;
    onClick?: () => void;
    onContextMenu?: ContextMenuWithItemHandler<[item: IPanelItem]>;
}

export default function PanelItem({
    className,
    data,
    onClose,
    onClick,
    onContextMenu,
}: IPanelItemProps) {
    return (
        <Prevent onContextMenu={(e) => onContextMenu?.({ x: e.pageX, y: e.pageY }, data)}>
            <div key={data.id} className={classNames(className)} onClick={onClick}>
                <Icon type={data.icon} />
                {data.name}
                {!!data.closable && (
                    <Icon
                        type="close"
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose?.(data.id);
                        }}
                    />
                )}
            </div>
        </Prevent>
    );
}
