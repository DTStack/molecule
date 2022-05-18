import React, { useState } from 'react';

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
        <div
            role="button"
            className={classNames}
            onClick={onClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {renderStatus?.(hover)}
        </div>
    );
};
