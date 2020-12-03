import * as React from 'react';
import { useState } from 'react';
import { classNames } from 'mo/common/className';
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
        onClick && onClick();
    };

    const handleCloseClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        onClose?.();
    };

    return (
        <div
            className={classNames(
                'tab-button',
                { 'tab-button--active': true },
                className
            )}
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <Icon type="new-file" />
            <span className="tab-button__name">{name}</span>
            <TabDot
                modified={modified}
                active={active}
                buttonHover={hover}
                onClick={handleCloseClick}
            />
        </div>
    );
}
