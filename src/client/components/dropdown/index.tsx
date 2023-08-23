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
    onClick?: ContextMenuEventHandler;
}

export default function Dropdown({
    children,
    data,
    alignPoint,
    visible,
    placement,
    trigger = 'click',
    onVisibleChange,
    onClick,
}: IDropdownProps) {
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
            {children}
        </RcDropdown>
    ) : (
        children
    );
}
