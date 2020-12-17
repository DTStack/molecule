import * as React from 'react';
import { useRef, useState } from 'react';
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
import TabDot from './tabDot';

export const tabClassName = prefixClaName('tab');
export const tabItemClassName = getBEMElement(tabClassName, 'item');

export const Tab = (props) => {
    const {
        closable,
        index,
        modified,
        propsKey,
        active,
        label,
        onTabClose,
        onMoveTab,
        onTabChange
    } = props;
    const ref = useRef<HTMLDivElement>(null);

    const [hover, setHover] = useState(false);
    const handleMouseOver = () => setHover(true);
    const handleMouseOut = () =>  setHover(false);

    const [, drag] = useDrag({
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
        item: { type: 'DND_NODE', propsKey, index },
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
            let hoverIndex = index;
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
            className={classNames(tabItemClassName, {
                [getBEMModifier(tabItemClassName, 'active')]:
                active,
            })}
            onClick={(event: React.MouseEvent) => onTabChange(event, propsKey)}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {label}
            {closable && (
                <TabDot
                    classNames={getBEMElement(tabItemClassName, 'op')}
                    modified={modified}
                    active={active}
                    buttonHover={hover}
                    onClick={(e) => onTabClose?.(propsKey)}
                />     
            )}
        </div>
    );
};

export default Tab;
