import * as React from 'react';
import { prefixClaName, classNames, getBEMElement } from 'mo/common/className';
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

export const defaultBreadcrumbClassName = prefixClaName('breadcrumb');

export const breadcrumbItemClassName = getBEMElement(
    defaultBreadcrumbClassName,
    'item'
);

export const breadcrumbLabelClassName = getBEMElement(
    defaultBreadcrumbClassName,
    'label'
);

export function Breadcrumb(props: IBreadcrumb) {
    const { onClick, className, separator, routes = [], ...extra } = props;

    const getEvents = (item: IBreadcrumbItem) => {
        return {
            onClick: function (e: React.MouseEvent) {
                onClick?.(e, item);
            },
        };
    };

    const claNames = classNames(defaultBreadcrumbClassName, className);
    const len = routes.length;
    const sep = separator || <Icon type="chevron-right" />;
    return (
        <div className={claNames} {...extra}>
            {routes.map((route: IBreadcrumbItem, index: number) => (
                <a
                    key={route.id}
                    className={classNames(
                        breadcrumbItemClassName,
                        route.className
                    )}
                    href={route.href}
                    {...getEvents(route)}
                >
                    {route.icon}
                    <span className={breadcrumbLabelClassName}>
                        {route.render ? route.render(route) : route.name}
                    </span>
                    {len - index > 1 ? sep : null}
                </a>
            ))}
        </div>
    );
}
