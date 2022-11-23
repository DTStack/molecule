import React, { forwardRef, useImperativeHandle } from 'react';
import { classNames, getBEMModifier, prefixClaName } from 'mo/common/className';
import { useContextView } from '../contextView';
import {
    triggerEvent,
    TriggerEvent,
    PlacementType,
    getPositionByPlacement,
} from 'mo/common/dom';

export interface IDropDownProps extends React.ComponentProps<'div'> {
    overlay: React.ReactNode;
    trigger?: TriggerEvent;
    placement?: PlacementType;
}

export type DropDownRef = {
    dispose: () => void;
};

export const defaultDropDownClassName = prefixClaName('drop-down');

const contextView = useContextView();

export const DropDown = forwardRef<DropDownRef, IDropDownProps>(
    (props: IDropDownProps, ref) => {
        const {
            className,
            overlay,
            children,
            placement = 'right',
            trigger = 'click',
            ...restProps
        } = props;

        useImperativeHandle(ref, () => ({
            contextView,
            dispose: () => {
                contextView!.hide();
            },
        }));

        const claNames = classNames(
            defaultDropDownClassName,
            getBEMModifier(defaultDropDownClassName, placement),
            className
        );
        const events = {
            [triggerEvent(trigger)]: function (e: React.MouseEvent) {
                const target = e.currentTarget;
                const targetRect = target.getBoundingClientRect();
                let position = getPositionByPlacement(placement, targetRect);
                contextView.show(position, () => overlay);
                // If placement is left or top,
                // need re calculate the position by menu size
                if (placement === 'left' || placement === 'top') {
                    const contextRect =
                        contextView.view!.getBoundingClientRect();
                    contextRect.x = targetRect.x;
                    contextRect.y = targetRect.y;
                    position = getPositionByPlacement(placement, contextRect);
                    contextView.show(position, () => overlay);
                }
            },
        };

        return (
            <div className={claNames} {...events} {...restProps}>
                {children}
            </div>
        );
    }
);
