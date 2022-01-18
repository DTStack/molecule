import React from 'react';
import { useRef } from 'react';
import { findDOMNode } from 'react-dom';
import { useDrag, useDrop } from 'react-dnd';

import {
    classNames,
    getBEMElement,
    getBEMModifier,
    prefixClaName,
} from 'mo/common/className';
import TabExtra from './tabExtra';
import { Icon } from '../icon';
import type { UniqueId } from 'mo/common/types';

export interface ITabEvent {
    onDrag?: (
        source: ITabProps,
        target: ITabProps,
        dragInfos: Record<string, any>
    ) => void;
    onCloseTab?: (key: UniqueId) => void;
    onSelectTab?: (key: UniqueId) => void;
    onContextMenu?: <T = any>(
        event: React.MouseEvent,
        tab: ITabProps<T>
    ) => void;
}

type ITabStatus = 'edited';
/**
 * The type definition for the Tab data construct
 */
export interface ITabProps<T = any, P = any> {
    /**
     * @deprecated Tab doesn't need this property, but the type extends from tab need
     */
    active?: boolean;
    /**
     * Mark the tab status to be closable,
     * Default is true
     */
    closable?: boolean;
    /**
     * Mark the tab status to be editing
     */
    editable?: boolean;
    status?: ITabStatus | ((tab: ITabProps) => JSX.Element);
    icon?: string | JSX.Element;
    id: UniqueId;
    name?: string;
    renderPane?: ((item: P) => React.ReactNode) | React.ReactNode;
    data?: T;
}

export const tabClassName = prefixClaName('tab');
export const tabItemClassName = getBEMElement(tabClassName, 'item');
export const tabItemActiveClassName = getBEMModifier(
    tabItemClassName,
    'active'
);
export const tabItemLabelClassName = getBEMElement(tabItemClassName, 'label');

/**
 * The type definition for The Tab Component
 */
export type ITabComponent = { tab: ITabProps; active?: boolean } & ITabEvent;

export function Tab({ tab, active, ...restEvents }: ITabComponent) {
    const { name, closable, id, icon, status } = tab;
    const { onCloseTab, onSelectTab, onContextMenu, onDrag } = restEvents;

    const ref = useRef<HTMLDivElement>(null);

    const handleOnContextMenu = (event: React.MouseEvent) => {
        event.preventDefault();
        onContextMenu?.(event, tab);
    };

    const [, drag] = useDrag({
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        item: { type: 'DND_NODE', tab },
    } as any);

    const [, drop] = useDrop({
        accept: 'DND_NODE',
        hover(item: { type: string; tab: ITabProps }, monitor) {
            if (!ref.current) return;
            const component = ref.current;
            /**
             * TODO: bad code needs to be removed
             */
            const hoverBoundingRect = (findDOMNode(
                component
            ) as Element)?.getBoundingClientRect();
            const hoverMiddleX =
                (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientX =
                (clientOffset as { x: number; y: number }).x -
                hoverBoundingRect.left;

            const dragInfo = {
                hoverMiddleX,
                hoverClientX,
            };
            onDrag?.(item.tab, tab, dragInfo);
        },
    });

    drag(drop(ref));

    const renderIcon = (icon: string | JSX.Element) => {
        return typeof icon === 'string' ? <Icon type={icon} /> : icon;
    };

    const renderStatus = (
        status?: ITabStatus | ((tab: ITabProps) => JSX.Element),
        isHover?: boolean
    ) => {
        if (status && !isHover) {
            if (typeof status === 'function') {
                return status(tab);
            }
            switch (status) {
                case 'edited':
                    return <Icon type="primitive-dot" />;

                default:
                    return <Icon type="close" />;
            }
        }
        return <Icon type="close" />;
    };

    return (
        <div
            ref={ref}
            className={classNames(tabItemClassName, {
                [tabItemActiveClassName]: active,
            })}
            onClick={(event: React.MouseEvent) => onSelectTab?.(id)}
            onContextMenu={handleOnContextMenu}
        >
            {icon && (
                <span className={tabItemLabelClassName}>
                    {renderIcon(icon)}
                </span>
            )}
            {name}
            {(typeof closable === 'undefined' || closable) && (
                <TabExtra
                    classNames={getBEMElement(
                        tabItemClassName,
                        status ? 'status' : 'op'
                    )}
                    onClick={() => onCloseTab?.(id)}
                    renderStatus={(isHover) => renderStatus(status, isHover)}
                />
            )}
        </div>
    );
}
