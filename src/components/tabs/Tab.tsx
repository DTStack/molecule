import * as React from 'react';
import { useRef } from 'react';
import { findDOMNode } from 'react-dom';
import {
    DragSourceMonitor,
    DropTargetMonitor,
    useDrag,
    useDrop,
} from 'react-dnd';

import { prefixClaName, classNames } from 'mo/common/className';
export interface TabSwicherProps {
    children: any;
    className?: string;
}

export function TabSwicher({ children, className }: TabSwicherProps) {
    return (
        <div className={classNames(prefixClaName('tab-switcher'), className)}>
            {children}
        </div>
    );
}

export const Tab = (props) => {
    const { id, index, children, onMoveTab, onTabChange } = props;
    const ref = useRef<HTMLDivElement>(null);

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
            let hoverIndex;
            const component = ref.current;
            const dragIndex = monitor.getItem().index;
            hoverIndex = index;
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
            // 往下拖动
            if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
                return;
            }
            // 往上拖动
            if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
                return;
            }
            onMoveTab(dragIndex, hoverIndex);
            monitor.getItem().index = hoverIndex;
        },
    });

    drag(drop(ref));

    return (
        <div
            ref={ref}
            onClick={(event: React.MouseEvent) => onTabChange(props.index)}
        >
            {children}
        </div>
    );
};

export default Tab;
