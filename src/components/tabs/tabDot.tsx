import * as React from 'react';
import { useState } from 'react';

import { getBEMElement } from 'mo/common/className';
import { Icon } from 'mo/components/icon';
import { tabItemButtonClassName } from './tabButton'

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
                <div className={getBEMElement(tabItemButtonClassName, 'button')} onClick={handleClick}>
                    <Icon type="close" />
                </div>
            );
        }
        if (modified) {
            return <i className={getBEMElement("tab-button__dot", 'dot')} />;
        }
        return <i className={getBEMElement(tabItemButtonClassName, 'placeholder')} />;
    };

    return (
        <a
            className={getBEMElement(tabItemButtonClassName, 'op')}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {renderDot()}
        </a>
    );
}
