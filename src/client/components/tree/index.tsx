import { useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { classNames } from 'mo/client/classNames';
import { type ContextMenuHandler, FileTypes, type IMenuItemProps, KeyboardEventHandler, type UniqueId } from 'mo/types';
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
    activeClassName?: string;
    contextMenu?: IMenuItemProps[];
    onSelect?: (node: ITreeNodeItemProps) => void;
    renderTitle?: (node: ITreeNodeItemProps, index: number, isLeaf: boolean) => JSX.Element | string;
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
    activeClassName,
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
    const pathMap: Record<UniqueId, UniqueId[]> = {};

    let activeFolderId: UniqueId;
    let activeIndent: number;

    const updatePathMap = (data: ITreeNodeItemProps[], paths: UniqueId[], indent: number) => {
        data.forEach((item) => {
            pathMap[item.id] = paths;
            if (item.id === activeKey) {
                activeIndent = indent;
            }
            if (item.children?.length) {
                updatePathMap(item.children, [...paths, item.id], indent + 1);
            }
        });
    };

    const updateActiveFolderId = () => {
        if (activeKey === undefined) return;
        const paths = pathMap[activeKey] || [];

        if (expandedKeys.includes(activeKey)) {
            activeFolderId = activeKey;
            activeIndent = activeIndent + 1;
        } else {
            activeFolderId = paths[paths.length - 1];
        }
    };

    updatePathMap(data, [], 0);
    updateActiveFolderId();

    const handleNodeClick = (node: ITreeNodeItemProps, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        onSelect?.(node);
    };

    const renderFolderIcon = (isExpand: boolean, isLoading: boolean) => {
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

            const IconComponent = typeof item.icon === 'string' ? <Icon type={item.icon} /> : item.icon;
            const nodeOffset = item.fileType === FileTypes.Folder ? 0 : 16;
            const paths = pathMap[item.id] || [];
            const isAncestorActive = paths.includes(activeFolderId);

            const currentNode = (
                <TreeNode
                    key={`${uuid}-${indent}`}
                    isAncestorActive={isAncestorActive}
                    activeIndent={activeIndent}
                    draggable={draggable}
                    data={item}
                    indent={indent}
                    className={classNames(
                        variables.treeNode,
                        isActive && variables.active,
                        isActive && activeClassName
                    )}
                    renderIcon={() => (
                        <>
                            {nodeOffset > 0 ? <span style={{ marginLeft: nodeOffset }}></span> : null}
                            {item.fileType === FileTypes.Folder && renderFolderIcon(isExpand, isLoading)}
                            {IconComponent}
                        </>
                    )}
                    renderTitle={() => renderTitle?.(item, index, item.fileType === FileTypes.File) || item.name}
                    onClick={(e) => handleNodeClick(item, e)}
                    onKeyDown={(e) => onKeyDown?.(e, item)}
                    onContextMenu={onContextMenu}
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDragEnd={onDragEnd}
                    onDrop={onDrop}
                />
            );

            const childrenNode: any = isExpand && !isLoading && renderTreeNode(item.children || [], indent + 1);

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
