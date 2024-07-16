import { useMemo, useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { classNames } from 'mo/client/classNames';
import { type ContextMenuHandler, FileTypes, type IMenuItemProps, KeyboardEventHandler, type UniqueId } from 'mo/types';
import { type TreeNodeModel } from 'mo/utils/tree';

import Icon from '../icon';
import TreeNode from './treeNode';
import variables from './index.scss';

const INDENT = 8;

export interface ITreeProps<T = any> {
    data?: TreeNodeModel<T>[];
    className?: string;
    draggable?: boolean;
    expandedKeys?: UniqueId[];
    loadingKeys?: UniqueId[];
    activeKey?: UniqueId;
    activeClassName?: string;
    contextMenu?: IMenuItemProps[];
    onSelect?: (node: TreeNodeModel<T>) => void;
    renderTitle?: (node: TreeNodeModel<T>, index: number, isLeaf: boolean) => JSX.Element | string;
    onContextMenu?: ContextMenuHandler<[treeNode: TreeNodeModel<T>]>;
    onKeyDown?: KeyboardEventHandler<HTMLElement>;
    onDragStart?(source: TreeNodeModel<T>): void;
    onDragOver?(source: TreeNodeModel<T>, target: TreeNodeModel<T>): void;
    onDragEnd?(source: TreeNodeModel<T>): void;
    onDrop?(source: TreeNodeModel<T>, target: TreeNodeModel<T>): void;
}

export default function Tree<T = any>({
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
}: ITreeProps<T>) {
    const wrapper = useRef<HTMLDivElement>(null);

    const pathMap = useMemo(() => {
        const map: Record<UniqueId, UniqueId[]> = {};
        const updateMap = (nodes: TreeNodeModel<T>[], paths: UniqueId[]) => {
            nodes.forEach((node) => {
                map[node.id] = paths;
                if (node.children) {
                    updateMap(node.children, [...paths, node.id]);
                }
            });
        };
        updateMap(data, []);
        return map;
    }, [data]);

    const { activeFolderId, activeIndent } = useMemo(() => {
        let activeFolderId: UniqueId = '';
        let activeIndent = 0;

        if (activeKey !== undefined) {
            const paths = pathMap[activeKey] || [];
            if (expandedKeys.includes(activeKey)) {
                activeFolderId = activeKey;
                activeIndent = paths.length + 1;
            } else {
                activeFolderId = paths[paths.length - 1];
                activeIndent = paths.length;
            }
        }
        return { activeFolderId, activeIndent };
    }, [activeKey, expandedKeys, pathMap]);

    const handleNodeClick = (node: TreeNodeModel<T>, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        onSelect?.(node);
    };

    const renderFolderIcon = (isExpand: boolean, isLoading: boolean) => {
        if (isLoading) {
            return <Icon type="loading~spin" />;
        }
        return <Icon type={isExpand ? 'chevron-down' : 'chevron-right'} />;
    };

    const renderIndent = (indent: number, isAncestorActive: boolean) => (
        <div className={variables.indent} style={{ width: INDENT * indent }}>
            {new Array(indent).fill('').map((_, index) => {
                const isActive = isAncestorActive && activeIndent === index + 1;
                return <div key={index} className={classNames(variables.guide, isActive && variables.activeGuide)} />;
            })}
        </div>
    );

    const renderTreeNode = (data: TreeNodeModel<T>[], indent: number) => {
        return data.map((item, index) => {
            const uuid = item.id;
            const isExpand = expandedKeys.includes(item.id);
            const isLoading = loadingKeys.includes(item.id);
            const isActive = activeKey === uuid;

            const IconComponent = typeof item.icon === 'string' ? <Icon type={item.icon} /> : item.icon;
            const nodeOffset = item.fileType === FileTypes.Folder ? 0 : INDENT * 2;
            const paths = pathMap[item.id] || [];
            const isAncestorActive = paths.includes(activeFolderId);

            const currentNode = (
                <TreeNode
                    key={`${uuid}-${indent}`}
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
                    renderIndent={() => renderIndent(indent, isAncestorActive)}
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
