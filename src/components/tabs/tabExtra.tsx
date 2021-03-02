import * as React from 'react';
import { useState } from 'react';

import { getBEMElement } from 'mo/common/className';
import { Icon } from 'mo/components/icon';
export interface TabExtraProps {
    modified?: boolean;
    active?: boolean;
    buttonHover?: boolean;
    onClick?: (event: React.MouseEvent) => void;
    classNames?: string;
}

export default function TabExtra({
    classNames = '',
    modified = false,
    onClick,
    active = false,
    buttonHover = false,
}: TabExtraProps) {
    const [hover, setHover] = useState(false);

    const handleMouseOver = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onClick?.(e);
        handleMouseOut();
    };

    const renderTabExtra = () => {
        if (
            hover ||
            (!active && buttonHover && !modified) ||
            (active && !modified)
        ) {
            return (
                <div
                    className={getBEMElement(classNames, 'button')}
                    onClick={handleClick}
                >
                    <Icon type="close" />
                </div>
            );
        }
        if (modified) {
            return <i className={getBEMElement(classNames, 'dot')} />;
        }
        return <i className={getBEMElement(classNames, 'placeholder')} />;
    };

    return (
        <a
            className={classNames}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {renderTabExtra()}
        </a>
    );
}
