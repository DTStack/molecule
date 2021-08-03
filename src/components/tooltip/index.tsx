import React from 'react';
import { default as RcTooltip } from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import type { TooltipProps } from 'rc-tooltip/lib/Tooltip';
import { classNames, getFontInMac } from 'mo/common/className';

export interface IToolTipProps extends TooltipProps {}

const Tooltip = ({
    overlay,
    children,
    placement = 'bottom',
    trigger = 'hover',
    overlayClassName,
    mouseEnterDelay,
    ...rest
}: IToolTipProps) => {
    if (overlay) {
        return (
            <RcTooltip
                overlayClassName={classNames(getFontInMac(), overlayClassName)}
                placement={placement}
                trigger={trigger}
                overlay={overlay}
                mouseEnterDelay={mouseEnterDelay || 0.1}
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
