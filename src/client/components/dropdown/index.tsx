import type { ContextMenuEventHandler, IMenuItemProps } from 'mo/types';
import RcDropdown from 'rc-dropdown';
import type { DropdownProps } from 'rc-dropdown/es/Dropdown';

import Menu from '../menu';
import './index.scss';

type ActionType = Exclude<DropdownProps['trigger'], Array<any> | 'focus'>;

interface IDropdownProps
    extends Pick<DropdownProps, 'children' | 'visible' | 'onVisibleChange' | 'placement'> {
    trigger?: ActionType;
    data?: IMenuItemProps[];
    alignPoint?: boolean;
    stopPropagation?: boolean;
    onClick?: ContextMenuEventHandler;
}

export default function Dropdown({
    children,
    data,
    alignPoint,
    visible,
    stopPropagation,
    placement,
    trigger = 'click',
    onVisibleChange,
    onClick,
}: IDropdownProps) {
    const getEvents = () => {
        if (!stopPropagation) return {};
        switch (trigger) {
            case 'click':
                return { onClick: (e: React.MouseEvent) => e.stopPropagation() };
            case 'contextMenu':
                return { onContextMenu: (e: React.MouseEvent) => e.stopPropagation() };
            default:
                break;
        }
    };

    const events = getEvents();

    return data?.length ? (
        <RcDropdown
            visible={visible}
            onVisibleChange={onVisibleChange}
            trigger={trigger}
            overlay={<Menu data={data} onClick={onClick} />}
            minOverlayWidthMatchTrigger={false}
            alignPoint={alignPoint}
            placement={placement}
        >
            <span {...events}>{children}</span>
        </RcDropdown>
    ) : (
        children
    );
}
