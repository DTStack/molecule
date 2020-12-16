import * as React from 'react';
import { useState } from 'react';

import { classNames, getBEMElement, getBEMModifier } from 'mo/common/className';
import { tabItemClassName } from './Tab';
import TabDot from './tabDot';
import { Icon } from '../icon';

export interface TabButtonProps {
    name?: string;
    modified?: boolean;
    active?: boolean;
    className?: string;
    onClick?: () => void;
    onClose?: () => void;
}

export const tabItemButtonClassName = getBEMElement(tabItemClassName, 'button')
const tabItemNameClassName = getBEMElement(tabItemButtonClassName, 'name')

export default function TabButton({
    name,
    modified,
    active = false,
    className,
    onClick,
    onClose,
}: TabButtonProps) {
    const [hover, setHover] = useState(false);

    const handleMouseOver = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };

    const handleClick = () => {
        onClick?.();
    };

    const handleCloseClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        onClose?.();
    };

    return (
        <div
            className={classNames(
                className,
                tabItemButtonClassName,
                { [getBEMModifier(tabItemButtonClassName, 'active')]: active }
            )}
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <Icon type="new-file" />
            <span className={tabItemNameClassName}>{name}</span>
            <TabDot
                modified={modified}
                active={active}
                buttonHover={hover}
                onClick={handleCloseClick}
            />
        </div>
    );
}
