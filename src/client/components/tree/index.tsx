import { useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { classNames } from 'mo/client/classNames';
import {
    type ContextMenuHandler,
    FileTypes,
    type IMenuItemProps,
    KeyboardEventHandler,
    type UniqueId,
} from 'mo/types';
import { type TreeNodeModel } from 'mo/utils/tree';

import Icon from '../icon';
import TreeNode from './treeNode';
import variables from './index.scss';

type ITreeNodeItemProps = TreeNodeModel<any>;

export interface ITreeProps {
    data?: ITreeNodeItemProps[];
    className?: string;
    draggable?: boolean;
    expandedKeys?: UniqueId[];
    loadingKeys?: UniqueId[];
    activeKey?: UniqueId;
    contextMenu?: IMenuItemProps[];
    onSelect?: (node: ITreeNodeItemProps) => void;
    renderTitle?: (
        node: ITreeNodeItemProps,
        index: number,
        isLeaf: boolean
    ) => JSX.Element | string;
    onContextMenu?: ContextMenuHandler<[treeNode: ITreeNodeItemProps]>;
    onKeyDown?: KeyboardEventHandler<HTMLElement>;
    onDragStart?(source: ITreeNodeItemProps): void;
    onDragOver?(source: ITreeNodeItemProps, target: ITreeNodeItemProps): void;
    onDragEnd?(source: ITreeNodeItemProps): void;
    onDrop?(source: ITreeNodeItemProps, target: ITreeNodeItemProps): void;
}

export default function Tree({
    className,
    data = [],
    draggable = false,
    expandedKeys = [],
    activeKey,
    loadingKeys = [],
    renderTitle,
    onSelect,
    onKeyDown,
    onContextMenu,
    onDragStart,
    onDragOver,
    onDragEnd,
    onDrop,
}: ITreeProps) {
    const wrapper = useRef<HTMLDivElement>(null);

    const handleNodeClick = (
        node: ITreeNodeItemProps,
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        e.stopPropagation();
        onSelect?.(node);
    };

    const renderIcon = (
        icon: JSX.Element | undefined,
        isLeaf: boolean,
        isExpand: boolean,
        isLoading: boolean
    ) => {
        if (isLeaf) {
            return icon || null;
        }
        if (isLoading) {
            return <Icon type="loading~spin" />;
        }
        return <Icon type={isExpand ? 'chevron-down' : 'chevron-right'} />;
    };

    const renderTreeNode = (data: ITreeNodeItemProps[], indent: number) => {
        return data.map((item, index) => {
            const uuid = item.id;
            const isExpand = expandedKeys.includes(item.id);
            const isLoading = loadingKeys.includes(item.id);
            const isActive = activeKey === uuid;

            const IconComponent =
                typeof item.icon === 'string' ? <Icon type={item.icon} /> : item.icon;

            const currentNode = (
                <TreeNode
                    key={`${uuid}-${indent}`}
                    draggable={draggable}
                    data={item}
                    indent={indent}
                    className={classNames(variables.treeNode, isActive && variables.active)}
                    renderIcon={() =>
                        renderIcon(
                            IconComponent,
                            item.fileType === FileTypes.File,
                            isExpand,
                            isLoading
                        )
                    }
                    renderTitle={() =>
                        renderTitle?.(item, index, item.fileType === FileTypes.File) || item.name
                    }
                    onClick={(e) => handleNodeClick(item, e)}
                    onKeyDown={(e) => onKeyDown?.(e, item)}
                    onContextMenu={onContextMenu}
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDragEnd={onDragEnd}
                    onDrop={onDrop}
                />
            );

            const childrenNode: any =
                isExpand && !isLoading && renderTreeNode(item.children || [], indent + 1);

            return [currentNode, childrenNode];
        });
    };

    return (
        <DndProvider backend={HTML5Backend} context={window}>
            <div role="tree" ref={wrapper} className={classNames(variables.container, className)}>
                {renderTreeNode(data, 0)}
            </div>
        </DndProvider>
    );
}
