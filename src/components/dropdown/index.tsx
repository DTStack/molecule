import './style.scss';
import * as React from 'react';
import { classNames, getBEMModifier, prefixClaName } from 'mo/common/className';
import { useContextView } from '../contextview';
import {
    triggerEvent,
    TriggerEvent,
    PlacementType,
    getPositionByPlacement,
} from 'mo/common/dom';

export interface IDropDown extends HTMLElementProps {
    overlay: ReactNode;
    trigger?: TriggerEvent;
    placement?: PlacementType;
}

const defaultDropDownClassName = prefixClaName('drop-down');

export function DropDown(props: React.PropsWithChildren<IDropDown>) {
    const {
        className,
        overlay,
        children,
        placement = 'right',
        trigger = 'click',
        ...others
    } = props;
    const contextView = useContextView({
        render: () => overlay,
    });

    const claNames = classNames(
        defaultDropDownClassName,
        getBEMModifier(defaultDropDownClassName, placement),
        className
    );
    const events = {
        [triggerEvent(trigger)]: function (e: React.MouseEvent) {
            const target = e.currentTarget;
            const rect = target.getBoundingClientRect();
            let position = getPositionByPlacement(placement, rect);
            contextView.show(position);
            // If placement is left or top,
            // need re calculate the position by menu size
            if (placement === 'left' || placement === 'top') {
                const overlay = contextView.view!.getBoundingClientRect();
                overlay.x = rect.x;
                overlay.y = rect.y;
                position = getPositionByPlacement(placement, overlay);
                contextView.show(position);
            }
        },
    };

    return (
        <div className={claNames} {...events} {...others}>
            {children}
        </div>
    );
}
