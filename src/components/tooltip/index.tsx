import React from 'react';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import { TooltipProps } from 'rc-tooltip/lib/Tooltip';

interface IToolTipProps extends TooltipProps {}

export default ({
    overlay,
    children,
    placement = 'bottom',
    trigger = 'hover',
    ...rest
}: IToolTipProps) => {
    if (overlay) {
        return (
            <Tooltip
                placement={placement}
                trigger={trigger}
                overlay={overlay}
                mouseEnterDelay={0.1}
                {...rest}
            >
                {children}
            </Tooltip>
        );
    } else {
        return children || null;
    }
};
