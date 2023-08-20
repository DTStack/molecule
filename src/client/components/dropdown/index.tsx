import type { IMenuItemProps } from 'mo/types';
import RcDropdown from 'rc-dropdown';
import type { DropdownProps } from 'rc-dropdown/es/Dropdown';
import type { MenuClickEventHandler } from 'rc-menu/lib/interface';

import Menu from '../menu';
import './index.scss';

type ActionType = Exclude<DropdownProps['trigger'], Array<any> | 'focus'>;

interface IDropdownProps extends Pick<DropdownProps, 'children' | 'visible' | 'onVisibleChange'> {
    trigger?: ActionType;
    data?: IMenuItemProps[];
    alignPoint?: boolean;
    onClick?: MenuClickEventHandler;
}

export default function Dropdown({
    children,
    data,
    alignPoint,
    visible,
    trigger = 'click',
    onVisibleChange,
    onClick,
}: IDropdownProps) {
    return (
        <RcDropdown
            visible={visible}
            onVisibleChange={onVisibleChange}
            trigger={trigger}
            overlay={<Menu data={data} onClick={onClick} />}
            minOverlayWidthMatchTrigger={false}
            alignPoint={alignPoint}
        >
            {children}
        </RcDropdown>
    );
}
