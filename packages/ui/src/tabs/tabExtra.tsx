import React, { useState } from 'react';
import { getBEMElement } from '@dtinsight/molecule-common';

interface ITabExtraProps {
    classNames?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    renderStatus?: (hover: boolean) => JSX.Element;
}

export default ({ onClick, classNames = '', renderStatus }: ITabExtraProps) => {
    const [hover, setHover] = useState(false);

    const handleMouseOver = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };

    return (
        <a
            className={classNames}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <div
                className={getBEMElement(classNames, 'button')}
                onClick={onClick}
            >
                {renderStatus?.(hover)}
            </div>
        </a>
    );
};
