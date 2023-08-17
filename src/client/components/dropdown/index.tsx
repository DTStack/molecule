import type { IMenuItemProps } from 'mo/types';
import RcDropdown from 'rc-dropdown';
import type { DropdownProps } from 'rc-dropdown/es/Dropdown';
import type { MenuClickEventHandler } from 'rc-menu/lib/interface';

import Menu from '../menu';
import './index.scss';

interface IDropdownProps extends Pick<DropdownProps, 'children'> {
    data?: IMenuItemProps[];
    onClick?: MenuClickEventHandler;
}

export default function Dropdown({ children, data, onClick }: IDropdownProps) {
    return (
        <RcDropdown
            trigger={['contextMenu']}
            overlay={<Menu data={data} onClick={onClick} />}
            minOverlayWidthMatchTrigger={false}
            alignPoint
        >
            {children}
        </RcDropdown>
    );
}
