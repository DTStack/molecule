import React from 'react';
import { default as RcTooltip } from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import { TooltipProps } from 'rc-tooltip/lib/Tooltip';

export interface IToolTipProps extends TooltipProps {}

const Tooltip = ({
    overlay,
    children,
    placement = 'bottom',
    trigger = 'hover',
    ...rest
}: IToolTipProps) => {
    if (overlay) {
        return (
            <RcTooltip
                placement={placement}
                trigger={trigger}
                overlay={overlay}
                mouseEnterDelay={0.1}
                {...rest}
            >
                {children}
            </RcTooltip>
        );
    } else {
        return children || null;
    }
};

export default Tooltip;
