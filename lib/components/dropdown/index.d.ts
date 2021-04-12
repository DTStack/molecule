import * as React from 'react';
import { TriggerEvent, PlacementType } from 'mo/common/dom';
export interface IDropDown extends React.ComponentProps<'div'> {
    overlay: ReactNode;
    trigger?: TriggerEvent;
    placement?: PlacementType;
}
export declare function DropDown(props: React.PropsWithChildren<IDropDown>): JSX.Element;
