import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { throttle } from 'lodash-es';
import { classNames } from 'mo/client/classNames';
import type { ContextMenuWithItemHandler, IDragProps } from 'mo/types';
import { DragAction } from 'mo/types';

import Close from '../close';
import Flex from '../flex';
import Prevent from '../prevent';
import variables from './index.scss';

export interface ITabsProps<T> {
    className?: string;
    title?: React.ReactNode;
    active?: boolean;
    closable?: boolean;
    modified?: boolean;
    onDragStart?: () => T;
    onDrag?: (props: Pick<IDragProps, 'info' | 'type'> & { item: T }) => void;
    onContextMenu?: ContextMenuWithItemHandler<[]>;
    onClick?: () => void;
    onClose?: () => void;
}

export default function Tabs<T>({
    className,
    title,
    active,
    closable,
    modified,
    onDragStart,
    onContextMenu,
    onClick,
    onClose,
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
        <Prevent onContextMenu={(e) => onContextMenu?.({ x: e.pageX, y: e.pageY })} tabIndex={0}>
            <Flex
                ref={ref}
                className={classNames(variables.tab, active && variables.active, className)}
                onClick={onClick}
            >
                {title}
                <section className={classNames(variables.extra, modified && variables.extraActive)}>
                    {closable && (
                        <Close
                            modified={modified}
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose?.();
                            }}
                        />
                    )}
                </section>
            </Flex>
        </Prevent>
    );
}
