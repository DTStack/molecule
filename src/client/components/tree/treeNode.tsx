import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ContextMenuHandler } from 'mo/types';
import { TreeNodeModel } from 'mo/utils/tree';

import Prevent from '../prevent';
import variables from './index.scss';

type ITreeNodeItemProps = TreeNodeModel<any>;

export interface ITreeNodeProps {
    data: ITreeNodeItemProps;
    indent: number;
    className?: string;
    draggable?: boolean;
    renderIcon: () => JSX.Element | null;
    renderTitle: () => React.ReactNode;
    renderIndent: () => JSX.Element;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
    onContextMenu?: ContextMenuHandler<[treeNode: ITreeNodeItemProps]>;
    onDragStart?: (source: ITreeNodeItemProps) => void;
    onDragOver?: (source: ITreeNodeItemProps, target: ITreeNodeItemProps) => void;
    onDragEnd?: (data: ITreeNodeItemProps) => void;
    onDrop?: (source: ITreeNodeItemProps, traget: ITreeNodeItemProps) => void;
}

export default ({
    data,
    indent,
    className,
    draggable,
    renderIcon,
    renderTitle,
    renderIndent,
    onClick,
    onDragStart,
    onDragOver,
    onDrop,
    onDragEnd,
    onKeyDown,
    onContextMenu,
}: ITreeNodeProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [, drag] = useDrag({
        type: 'DND_NODE',
        canDrag: () => !!draggable,
        item: () => {
            onDragStart?.(data);
            return data;
        },
        end() {
            onDragEnd?.(data);
        },
    });

    const [, drop] = useDrop<ITreeNodeItemProps>({
        accept: 'DND_NODE',
        hover: (item) => {
            onDragOver?.(item, data);
        },
        drop(item) {
            onDrop?.(item, data);
        },
    });

    drag(drop(ref));

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        // https://medium.com/trabe/react-syntheticevent-reuse-889cd52981b6
        e.persist();
        e.stopPropagation();
        onKeyDown?.(e);
    };

    // calculate key automatically via parent path and self id
    const nodeKey = `${indent ? indent + '_' : ''}${data.id}`;

    const title = renderTitle();

    return (
        <Prevent
            ref={ref}
            tabIndex={0}
            data-indent={indent}
            data-key={data.id}
            data-id={`mo_treeNode_${nodeKey}`}
            className={className}
            title={typeof title === 'string' ? title : undefined}
            onClick={onClick}
            onKeyDown={handleKeyDown}
            onContextMenu={(e) => onContextMenu?.({ x: e.pageX, y: e.pageY }, data)}
        >
            {renderIndent()}
            {renderIcon()}
            <div className={variables.title}>{title}</div>
        </Prevent>
    );
};
