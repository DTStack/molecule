import { classNames } from 'mo/client/classNames';
import type { IBreadcrumbItemProps, IconType } from 'mo/types';

import Icon from '../icon';
import Prevent from '../prevent';
import variables from './index.scss';

export interface IBreadcrumbProps {
    routes: IBreadcrumbItemProps[];
    className?: string;
    separator?: IconType;
    onClick?: (item: IBreadcrumbItemProps) => void;
}

export default function Breadcrumb({ className, separator, routes, onClick }: IBreadcrumbProps) {
    const len = routes.length;
    const sep = separator || <Icon type="chevron-right" />;

    return (
        <Prevent className={classNames(className, variables.container)} role="breadcrumb" tabIndex={0}>
            {routes.map((route, index) => {
                const { id, icon, render, name } = route;
                return (
                    <a
                        key={id}
                        className={classNames(variables.item)}
                        tabIndex={0}
                        onContextMenu={(e) => e.preventDefault()}
                        onClick={() => onClick?.(route)}
                    >
                        <Icon type={icon} />
                        <span className={variables.label}>{render ? render(route) : name}</span>
                        {len - index > 1 ? sep : null}
                    </a>
                );
            })}
        </Prevent>
    );
}
