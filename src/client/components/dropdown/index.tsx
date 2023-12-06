import React, { useState } from 'react';
import type { ContextMenuEventHandler, IMenuItemProps, UniqueId } from 'mo/types';
import { searchById } from 'mo/utils';
import RcDropdown from 'rc-dropdown';
import type { DropdownProps } from 'rc-dropdown/es/Dropdown';

import Menu from '../menu';
import placements from './placements';
import './index.scss';

type ActionType = Exclude<DropdownProps['trigger'], Array<any> | 'focus'>;

/**
 * If a dropdown item has a clone property, it will trigger corresponding click event
 */
type DropdownData = IMenuItemProps & { clone?: UniqueId };

interface IDropdownProps extends Pick<DropdownProps, 'children' | 'visible' | 'onVisibleChange'> {
    trigger?: ActionType;
    data?: DropdownData[];
    disabled?: boolean;
    alignPoint?: boolean;
    stopPropagation?: boolean;
    onClick?: ContextMenuEventHandler;
    placement?: keyof typeof placements;
}

export default function Dropdown({
    children,
    data,
    alignPoint,
    disabled,
    visible,
    stopPropagation,
    placement,
    trigger = 'click',
    onVisibleChange,
    onClick,
}: IDropdownProps) {
    const [stateVisible, setVisible] = useState(false);
    const getEvents = () => {
        if (!stopPropagation) return {};
        switch (trigger) {
            case 'click':
                return {
                    onClick: (e: React.MouseEvent) => e.stopPropagation(),
                };
            case 'contextMenu':
                return { onContextMenu: (e: React.MouseEvent) => e.stopPropagation() };
            default:
                break;
        }
    };

    const events = getEvents();

    const handleVisibleChange = (next: boolean) => {
        if (disabled) return;
        onVisibleChange?.(next);
        if (typeof visible !== 'boolean') {
            setVisible(next);
        }
    };

    const handleClick = (item: DropdownData) => {
        if (typeof visible !== 'boolean') {
            setVisible(false);
        }
        const dropdownItem = item.clone ? data?.find(searchById(item.clone)) : item;
        if (!dropdownItem) return;
        onClick?.(dropdownItem);
    };

    return data?.length ? (
        <RcDropdown
            visible={visible ?? stateVisible}
            onVisibleChange={handleVisibleChange}
            trigger={trigger}
            overlay={<Menu data={data} onClick={handleClick} />}
            minOverlayWidthMatchTrigger={false}
            alignPoint={alignPoint}
            placement={placement as any}
            placements={placements}
        >
            {/* Children should support onClick and onContextMenu event */}
            {React.cloneElement(children, { ...events })}
        </RcDropdown>
    ) : (
        children
    );
}
