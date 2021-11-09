import React from 'react';
import { useCallback, useRef, useState } from 'react';
import { findDOMNode } from 'react-dom';
import {
    DragSourceMonitor,
    DropTargetMonitor,
    useDrag,
    useDrop,
} from 'react-dnd';

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
    onMoveTab?: (dragIndex: number, hoverIndex: number) => void;
    onCloseTab?: (key: UniqueId) => void;
    onSelectTab?: (key: UniqueId) => void;
    onContextMenu?: <T = any>(
        event: React.MouseEvent,
        tab: ITabProps<T>
    ) => void;
}
export interface ITabProps<T = any, P = any> extends ITabEvent {
    active?: boolean;
    closable?: boolean;
    editable?: boolean;
    icon?: string | JSX.Element;
    index?: number;
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

export function Tab<T>(props: ITabProps) {
    const {
        active,
        name,
        closable,
        editable,
        data,
        id,
        index,
        icon,
        onCloseTab,
        onMoveTab,
        onSelectTab,
        onContextMenu,
        ...resetProps
    } = props;
    const ref = useRef<HTMLDivElement>(null);

    const [hover, setHover] = useState(false);
    const handleMouseOver = () => setHover(true);
    const handleMouseOut = () => setHover(false);
    const handleOnContextMenu = useCallback(
        (event: React.MouseEvent) => {
            event.preventDefault();
            onContextMenu?.(event, props);
        },
        [props]
    );

    const [, drag] = useDrag({
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
        item: { type: 'DND_NODE', id, index },
    });

    const [, drop] = useDrop({
        accept: 'DND_NODE',
        hover(
            item: { type: string; index: number },
            monitor: DropTargetMonitor
        ) {
            if (!ref.current) return;
            const component = ref.current;
            const dragIndex = monitor.getItem().index;
            const hoverIndex = index!;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
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
            // drag down
            if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
                return;
            }
            // drag up
            if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
                return;
            }
            onMoveTab?.(dragIndex, hoverIndex);
            monitor.getItem().index = hoverIndex;
        },
    });

    drag(drop(ref));

    const renderIcon = (icon: string | JSX.Element) => {
        return typeof icon === 'string' ? <Icon type={icon} /> : icon;
    };

    return (
        <div
            ref={ref}
            className={classNames(tabItemClassName, {
                [tabItemActiveClassName]: active,
            })}
            onClick={(event: React.MouseEvent) => onSelectTab?.(id)}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onContextMenu={handleOnContextMenu}
        >
            {icon && (
                <span className={tabItemLabelClassName}>
                    {renderIcon(icon)}
                </span>
            )}
            {name}
            {editable && (
                <TabExtra
                    classNames={getBEMElement(tabItemClassName, 'op')}
                    active={active}
                    buttonHover={hover}
                    onClick={(e) => onCloseTab?.(id)}
                    modified={data?.modified || false}
                    {...resetProps}
                />
            )}
            {closable && (
                <TabExtra
                    classNames={getBEMElement(tabItemClassName, 'op')}
                    active={active}
                    buttonHover={hover}
                    onClick={(e) => onCloseTab?.(id)}
                    {...resetProps}
                />
            )}
        </div>
    );
}
