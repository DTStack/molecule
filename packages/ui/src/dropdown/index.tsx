import React, { forwardRef, useImperativeHandle } from 'react';
import { useContextView } from '../contextView';
import {
    classNames,
    getBEMModifier,
    prefixClaName,
    triggerEvent,
    TriggerEvent,
    PlacementType,
    getPositionByPlacement,
} from '@dtinsight/molecule-common';

export interface IDropDownProps extends React.ComponentProps<'div'> {
    overlay: React.ReactNode;
    trigger?: TriggerEvent;
    placement?: PlacementType;
}

export type DropDownRef = {
    dispose: () => void;
};

export const defaultDropDownClassName = prefixClaName('drop-down');

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
        const contextView = useContextView({
            render: () => overlay,
        });

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
            <div className={claNames} {...events} {...restProps}>
                {children}
            </div>
        );
    }
);
