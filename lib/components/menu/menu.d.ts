import * as React from 'react';
import { ISubMenu } from './subMenu';
export interface IMenu extends ISubMenu {
}
export declare function Menu(props: React.PropsWithChildren<IMenu>): JSX.Element;
