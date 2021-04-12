import * as React from 'react';
import { ISidebar } from 'mo/model/workbench/sidebar';
export interface IHeaderProps {
    title: string;
    toolbar: React.ReactNode;
}
export declare const Header: React.NamedExoticComponent<IHeaderProps>;
export declare function Content(props: React.ComponentProps<any>): JSX.Element;
export declare function Sidebar(props: ISidebar): JSX.Element;
