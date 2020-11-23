import * as React from 'react';
import { useRef } from 'react';
import { findDOMNode } from 'react-dom';
import {
    DragSourceMonitor,
    DropTargetMonitor,
    useDrag,
    useDrop,
} from 'react-dnd';

interface ITabProps {
    active?: string;
    content?: React.ReactNode;
    index?: number;
    id?: number | string;
    name?: any;
    moveTab: (dragIndex?: number, hoverIndex?: number | string) => void;
}

const WrapTabNode: React.FC<ITabProps> = (props) => {
    const { id, index, moveTab, children } = props;
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
            debugger;
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
            moveTab(dragIndex, hoverIndex);
            monitor.getItem().index = hoverIndex;
        },
    });
    drag(drop(ref));

    return <div ref={ref}>{children}</div>;
};

export default WrapTabNode;
