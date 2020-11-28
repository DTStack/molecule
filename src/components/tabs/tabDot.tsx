import * as React from 'react';
import { useState } from 'react';
import { Icon } from '../icon';

export interface TabDotProps {
    modified?: boolean;
    active?: boolean;
    buttonHover?: boolean;
    onClick?: (event: React.MouseEvent) => void;
}

export default function TabDot({
    modified = false,
    onClick,
    active = false,
    buttonHover = false,
}: TabDotProps) {
    const [hover, setHover] = useState(false);

    const handleMouseOver = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };

    const handleClick = (e: React.MouseEvent) => {
        onClick?.(e);
        handleMouseOut();
    };

    const renderDot = () => {
        if (
            hover ||
            (!active && buttonHover && !modified) ||
            (active && !modified)
        ) {
            return (
                <div className="tab-button__close" onClick={handleClick}>
                    <Icon type="close" />
                </div>
            );
        }
        if (modified) {
            return <i className="tab-button__dot" />;
        }
        return <i className="tab-button__placeholder" />;
    };

    return (
        <a
            className="tab-button__op"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {renderDot()}
        </a>
    );
}
