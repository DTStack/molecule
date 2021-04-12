import * as React from 'react';
import { ComponentProps } from 'react';
import { Icon } from '../icon';
export interface IBreadcrumbItem {
    id: string;
    href?: string;
    name?: string;
    icon?: typeof Icon;
    className?: string;
    render?(item: IBreadcrumbItem): ReactNode;
}
export interface IBreadcrumb extends ComponentProps<'div'> {
    routes: IBreadcrumbItem[];
    separator?: typeof Icon;
    onClick?(event: React.MouseEvent, item?: IBreadcrumbItem): void;
}
export declare const defaultBreadcrumbClassName: string;
export declare const breadcrumbItemClassName: string;
export declare const breadcrumbLabelClassName: string;
export declare function Breadcrumb(props: IBreadcrumb): JSX.Element;
