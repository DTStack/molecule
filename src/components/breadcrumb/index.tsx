import React from 'react';
import { classNames } from 'mo/common/className';
import { Icon } from 'mo/components';
import type { UniqueId, HTMLElementProps } from 'mo/common/types';
import {
    defaultBreadcrumbClassName,
    breadcrumbItemClassName,
    breadcrumbLabelClassName,
} from './base';
import { getDataAttributionsFromProps } from 'mo/common/dom';

export interface IBreadcrumbItemProps extends HTMLElementProps {
    id: UniqueId;
    href?: string;
    name?: string;
    icon?: string | JSX.Element;
    render?(item: IBreadcrumbItemProps): React.ReactNode;

    [key: string]: any;
}

export interface IBreadcrumbProps extends HTMLElementProps {
    routes: IBreadcrumbItemProps[];
    separator?: React.ReactNode;
    onClick?(event: React.MouseEvent, item?: IBreadcrumbItemProps): void;

    [key: string]: any;
}

export function Breadcrumb(props: IBreadcrumbProps) {
    const {
        onClick,
        className,
        separator,
        routes = [],
        style,
        title,
        role,
        ...extra
    } = props;

    const claNames = classNames(defaultBreadcrumbClassName, className);
    const len = routes.length;
    const sep = separator || <Icon type="chevron-right" />;
    const dataAttrs = getDataAttributionsFromProps(extra);

    return (
        <div
            className={claNames}
            role={role}
            style={style}
            title={title}
            {...dataAttrs}
        >
            {routes.map((route, index) => {
                const {
                    id,
                    className,
                    title,
                    style,
                    href,
                    icon,
                    render,
                    name,
                    ...rest
                } = route;
                return (
                    <a
                        key={id}
                        className={classNames(
                            breadcrumbItemClassName,
                            className
                        )}
                        title={title}
                        style={style}
                        href={href}
                        tabIndex={0}
                        onContextMenu={(e) => e.preventDefault()}
                        onClick={(e) => onClick?.(e, route)}
                        {...getDataAttributionsFromProps(rest)}
                    >
                        <Icon type={icon} />
                        <span className={breadcrumbLabelClassName}>
                            {render ? render(route) : name}
                        </span>
                        {len - index > 1 ? sep : null}
                    </a>
                );
            })}
        </div>
    );
}
