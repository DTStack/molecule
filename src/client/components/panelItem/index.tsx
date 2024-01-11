import { classNames } from 'mo/client/classNames';
import type { IPanelItem } from 'mo/models/panel';
import type { ContextMenuHandler } from 'mo/types';

import Icon from '../icon';
import Prevent from '../prevent';

export interface IPanelItemProps {
    className?: string;
    data: IPanelItem;
    onClose?: (id: IPanelItem['id']) => void;
    onClick?: () => void;
    onContextMenu?: ContextMenuHandler<[item: IPanelItem]>;
}

export default function PanelItem({ className, data, onClose, onClick, onContextMenu }: IPanelItemProps) {
    return (
        <Prevent onContextMenu={(e) => !data.disabled && onContextMenu?.({ x: e.pageX, y: e.pageY }, data)}>
            <div className={classNames(className)} onClick={() => !data.disabled && onClick?.()}>
                <Icon type={data.icon} />
                {data.name}
                {!!data.closable && (
                    <Icon
                        type="close"
                        onClick={(e) => {
                            e.stopPropagation();
                            !data.disabled && onClose?.(data.id);
                        }}
                    />
                )}
            </div>
        </Prevent>
    );
}
