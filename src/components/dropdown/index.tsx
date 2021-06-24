import * as React from 'react';
import { classNames, getBEMModifier, prefixClaName } from 'mo/common/className';
import { useContextView } from '../contextView';
import {
    triggerEvent,
    TriggerEvent,
    PlacementType,
    getPositionByPlacement,
} from 'mo/common/dom';

export interface IDropDownProps extends React.ComponentProps<'div'> {
    overlay: ReactNode;
    trigger?: TriggerEvent;
    placement?: PlacementType;
}

export type DropDownRef = {
    dispose: () => void;
};

const defaultDropDownClassName = prefixClaName('drop-down');

export const DropDown = React.forwardRef<DropDownRef, IDropDownProps>(
    (props, ref) => {
        const {
            className,
            overlay,
            children,
            placement = 'right',
            trigger = 'click',
            ...extra
        } = props;
        const contextView = useContextView({
            render: () => overlay,
        });

        React.useImperativeHandle(ref, () => ({
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
            <div className={claNames} {...events} {...extra}>
                {children}
            </div>
        );
    }
);
