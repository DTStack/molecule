import * as React from 'react';
import { prefixClaName, classNames, getBEMElement } from 'mo/common/className';
import { ComponentProps } from 'react';
import { Icon } from 'mo/components';
export interface IBreadcrumbItemProps {
    id: string;
    href?: string;
    name?: string;
    icon?: string | JSX.Element;
    className?: string;
    render?(item: IBreadcrumbItemProps): React.ReactNode;
}

export interface IBreadcrumbProps extends ComponentProps<'div'> {
    routes: IBreadcrumbItemProps[];
    separator?: React.ReactNode;
    onClick?(event: React.MouseEvent, item?: IBreadcrumbItemProps): void;
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

export function Breadcrumb(props: IBreadcrumbProps) {
    const { onClick, className, separator, routes = [], ...extra } = props;

    const getEvents = (item: IBreadcrumbItemProps) => {
        return {
            onClick: function (e: React.MouseEvent) {
                onClick?.(e, item);
            },
        };
    };

    const claNames = classNames(defaultBreadcrumbClassName, className);
    const len = routes.length;
    const sep = separator || <Icon type="chevron-right" />;

    const getIcon = (icon?: string | JSX.Element) => {
        if (icon) {
            return typeof icon === 'string' ? <Icon type={icon} /> : icon;
        }
        return null;
    };

    return (
        <div className={claNames} {...extra}>
            {routes.map((route: IBreadcrumbItemProps, index: number) => (
                <a
                    key={route.id}
                    className={classNames(
                        breadcrumbItemClassName,
                        route.className
                    )}
                    href={route.href}
                    {...getEvents(route)}
                >
                    {getIcon(route.icon)}
                    <span className={breadcrumbLabelClassName}>
                        {route.render ? route.render(route) : route.name}
                    </span>
                    {len - index > 1 ? sep : null}
                </a>
            ))}
        </div>
    );
}
