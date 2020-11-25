import * as React from 'react';
import { useState } from 'react';
import FileIcon from '../fileIcon';
import { classNames } from 'mo/common/className';
import TabDot from './tabDot';

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
                {
                    'tab-button--active': active,
                },
                className
            )}
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <FileIcon type="file" fileName={name} />
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
