import './style.scss';
import * as React from 'react';
import { classNames, prefixClaName } from 'mo/common/className';
import { useContextView } from '../contextview';
import { triggerEvent, TriggerEvent } from 'mo/common/dom';

export interface IDropDown extends HTMLElementProps {
    overlay: ReactNode;
    trigger?: TriggerEvent;
    placement?: 'top' | 'right' | 'bottom' | 'left';
}

export const defaultDropDownClassName = 'drop-down';

export function DropDown(props: React.PropsWithChildren<IDropDown>) {
    const {
        className,
        overlay,
        children,
        placement = 'bottom',
        trigger = 'click',
        ...others
    } = props;
    const contextView = useContextView({
        render: () => overlay,
    });

    const claNames = classNames(
        prefixClaName(defaultDropDownClassName),
        placement,
        className
    );
    const events = {
        [triggerEvent(trigger)]: function (e: React.MouseEvent) {
            const target = e.currentTarget;
            const rect = target.getBoundingClientRect();
            contextView.show({
                x: rect.x + rect.width,
                y: rect.y,
            });
        },
    };

    return (
        <div className={claNames} {...events} {...others}>
            {children}
        </div>
    );
}
