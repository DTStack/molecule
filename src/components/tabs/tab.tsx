import * as React from 'react';
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
export interface ITab<T = any, P = any> {
    active?: boolean;
    closable?: boolean;
    editable?: boolean;
    index?: number;
    id?: string;
    name?: string;
    renderPanel?: ((item: P) => ReactNode) | ReactNode;
    data?: T;
}
export interface ITabEvent {
    onMoveTab?: (dragIndex: number, hoverIndex: number) => void;
    onCloseTab?: (key?: string) => void;
    onSelectTab?: (key?: string) => void;
    onContextMenu?: <T = any>(event: React.MouseEvent, tab: ITab<T>) => void;
}
export const tabClassName = prefixClaName('tab');
export const tabItemClassName = getBEMElement(tabClassName, 'item');

export function Tab<T>(props: ITab & ITabEvent) {
    const {
        active,
        closable,
        editable,
        data,
        id,
        index,
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
    return (
        <div
            ref={ref}
            className={classNames(tabItemClassName, {
                [getBEMModifier(tabItemClassName, 'active')]: active,
            })}
            onClick={(event: React.MouseEvent) => onSelectTab?.(id)}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onContextMenu={handleOnContextMenu}
        >
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
