import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { throttle } from 'lodash-es';
import { classNames } from 'mo/client/classNames';
import Dropdown from 'mo/client/components/dropdown';
import type { ContextMenuEventHandler, IDragProps, IMenuItemProps } from 'mo/types';
import { DragAction } from 'mo/types';

import Flex from '../flex';
import variables from './index.scss';

export interface ITabsProps<T> {
    className?: string;
    contextMenu?: IMenuItemProps[];
    extra?: React.ReactNode;
    title?: React.ReactNode;
    onDragStart?: () => T;
    onDrag?: (props: Pick<IDragProps, 'info' | 'type'> & { item: T }) => void;
    onContextMenu?: ContextMenuEventHandler;
    onClick?: () => void;
}

export default function Tabs<T>({
    className,
    contextMenu,
    extra,
    title,
    onDragStart,
    onContextMenu,
    onClick,
    onDrag,
}: ITabsProps<T>) {
    const ref = useRef<HTMLDivElement>(null);

    const [, drag] = useDrag({
        collect: (monitor) => ({ isDragging: monitor?.isDragging?.() }),
        type: 'DND_NODE',
        item: onDragStart?.(),
    });

    const actionHoc = (type: DragAction) =>
        throttle((item, monitor) => {
            const component = ref.current;
            if (!component) return;
            const hoverBoundingRect = component.getBoundingClientRect();
            const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
            const clientOffset = monitor?.getClientOffset?.();
            if (!clientOffset) return;
            const hoverClientX =
                (clientOffset as { x: number; y: number }).x - hoverBoundingRect.left;

            const info: IDragProps['info'] = {
                hoverMiddleX,
                hoverClientX,
            };
            onDrag?.({ item, info, type });
        }, 500);

    const [, drop] = useDrop({
        accept: 'DND_NODE',
        hover: actionHoc(DragAction.hover),
    });

    drag(drop(ref));

    return (
        <Dropdown
            data={contextMenu}
            stopPropagation
            trigger="contextMenu"
            alignPoint
            onClick={onContextMenu}
        >
            <Flex ref={ref} className={classNames(variables.tab, className)} onClick={onClick}>
                {title}
                {extra}
            </Flex>
        </Dropdown>
    );
}
