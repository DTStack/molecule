import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { classNames } from 'mo/client/classNames';
import type { ContextMenuHandler, IEditorTab, TabGroup, UniqueId } from 'mo/types';

import Close from '../close';
import Flex from '../flex';
import Icon from '../icon';
import Prevent from '../prevent';
import variables from './index.scss';

export interface ITabProps {
    data: IEditorTab<any>;
    groupId: UniqueId;
    className?: string;
    active?: boolean;
    onContextMenu?: ContextMenuHandler<[tabId: UniqueId, groupId: UniqueId]>;
    onClick?: (tabId: UniqueId, groupId: UniqueId) => void;
    onClose?: (tabId: UniqueId, groupId: UniqueId) => void;
    onDragStart?: (tabId: UniqueId, groupId: UniqueId) => void;
    onDragEnd?: (tabId: UniqueId, groupId: UniqueId) => void;
    onDragEnter?: (from: TabGroup, to: TabGroup) => void;
    onDragLeave?: (from: TabGroup, to: TabGroup) => void;
    onDragOver?: (from: TabGroup, to: TabGroup) => void;
    onDrop?: (from: TabGroup, to: TabGroup) => void;
}

export default function Tab({
    data,
    groupId,
    className,
    active,
    onContextMenu,
    onClick,
    onClose,
    onDragStart,
    onDragEnd,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
}: ITabProps) {
    const ref = useRef<HTMLDivElement>(null);

    const [{ isDragging }, drag] = useDrag({
        type: 'DND_NODE',
        collect(monitor) {
            return {
                isDragging: monitor.isDragging(),
            };
        },
        item: () => {
            onDragStart?.(data.id, groupId);
            return { tabId: data.id, groupId };
        },
        end(item) {
            onDragEnd?.(item.tabId, item.groupId);
        },
    });

    const [{ item, isOver }, drop] = useDrop<TabGroup, any, any>({
        accept: 'DND_NODE',
        collect: (monitor) => {
            return {
                isOver: monitor.isOver(),
                item: monitor.getItem(),
            };
        },
        canDrop(item) {
            return item.tabId !== data.id || item.groupId !== groupId;
        },
        hover(_, monitor) {
            onDragOver?.(monitor.getItem(), { tabId: data.id, groupId });
        },
        drop(_, monitor) {
            onDrop?.(monitor.getItem(), { tabId: data.id, groupId });
        },
    });

    drag(drop(ref));

    return (
        <Prevent
            ref={ref}
            className={classNames(
                variables.tab,
                active && variables.active,
                (isDragging || isOver) && variables.dragging,
                className
            )}
            onContextMenu={(e) => onContextMenu?.({ x: e.pageX, y: e.pageY }, data.id, groupId)}
            tabIndex={0}
            onClick={() => onClick?.(data.id, groupId)}
            onDragEnter={(e) => e.currentTarget === e.target && onDragEnter?.(item, { tabId: data.id, groupId })}
            onDragLeave={(e) => e.currentTarget === e.target && onDragLeave?.(item, { tabId: data.id, groupId })}
        >
            <Flex style={{ height: '100%', gap: 4 }}>
                <Icon type={data.icon} />
                <span className={variables.name}>{data.name}</span>
                <section className={classNames(variables.extra, data.modified && variables.extraActive)}>
                    <Close
                        modified={data.modified}
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose?.(data.id, groupId);
                        }}
                    />
                </section>
            </Flex>
        </Prevent>
    );
}
