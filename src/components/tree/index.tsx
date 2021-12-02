import React, { useState, useRef, useCallback, useLayoutEffect } from 'react';
import { Icon } from 'mo/components/icon';
import { debounce } from 'lodash';
import { classNames } from 'mo/common/className';
import TreeNode from './treeNode';
import {
    activeTreeNodeClassName,
    defaultTreeClassName,
    defaultTreeNodeClassName,
    expandTreeNodeClassName,
    unexpandTreeNodeClassName,
} from './base';
import { TreeViewUtil } from 'mo/common/treeUtil';
import type { UniqueId } from 'mo/common/types';

export interface ITreeNodeItemProps<T = any> {
    /**
     * The unique id in tree node
     * @aware Please be aware of that id should be global unique
     */
    id: UniqueId;
    /**
     * The name of this tree node
     */
    name?: string;
    /**
     * The icon of this tree node, which is rendered in front of the name
     */
    icon?: string | JSX.Element;
    /**
     * The status of disabled
     */
    disabled?: boolean;
    /**
     * The type of this tree node.
     */
    isLeaf?: boolean;
    /**
     * The status of editable, mark whether the node is being edited
     */
    isEditable?: boolean;
    /**
     * The children of this tree node
     */
    children?: ITreeNodeItemProps[];
    /**
     * Store the custom data
     */
    data?: T;

    [key: string]: any;
}

export interface ITreeProps {
    data?: ITreeNodeItemProps[];
    className?: string;
    draggable?: boolean;
    expandKeys?: string[];
    onExpand?: (expandedKeys: string[], node: ITreeNodeItemProps) => void;
    onSelect?: (node: ITreeNodeItemProps, isUpdate?) => void;
    onTreeClick?: () => void;
    renderTitle?: (
        node: ITreeNodeItemProps,
        index: number,
        isLeaf: boolean
    ) => JSX.Element | string;
    onDropTree?(source: ITreeNodeItemProps, target: ITreeNodeItemProps): void;
    onLoadData?: (node: ITreeNodeItemProps) => Promise<void>;
    onRightClick?: (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        node: ITreeNodeItemProps
    ) => void;
}

const TreeView = ({
    className,
    data = [],
    draggable = false,
    expandKeys: controlExpandKeys,
    onExpand,
    onDropTree,
    onRightClick,
    renderTitle, // custom title
    onSelect,
    onLoadData,
    onTreeClick,
}: ITreeProps) => {
    const [expandKeys, setExpandKeys] = useState<string[]>([]);
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const loadDataCache = useRef<Record<string, boolean>>({});
    const [loadingKeys, setLoadingKeys] = useState<string[]>([]);
    const dragOverNode = useRef<ITreeNodeItemProps>();
    const dragInfo = useRef<{
        x: number;
        y: number;
        dragNode: ITreeNodeItemProps | null;
        flattenTree: any;
    }>({ x: 0, y: 0, dragNode: null, flattenTree: null });
    const wrapper = useRef<HTMLDivElement>(null);

    const canLoadData = (key: string) => {
        if (!onLoadData) return false;
        if (loadDataCache.current.hasOwnProperty(key)) return false;
        return true;
    };

    const validatorLoadingData = (node: ITreeNodeItemProps) => {
        const uuid: string = node.id.toString();
        if (canLoadData(uuid!)) {
            setLoadingKeys((keys) => {
                const nextKeys = keys.concat();
                nextKeys.push(uuid!);
                return nextKeys;
            });
            loadDataCache.current[uuid] = true;
            onLoadData!(node).finally(() => {
                setLoadingKeys((keys) => {
                    const nextKeys = keys.concat();
                    const index = nextKeys.indexOf(uuid!);
                    nextKeys.splice(index, 1);
                    return nextKeys;
                });
            });
        }
    };

    const handleExpandKey = (key: string, node: ITreeNodeItemProps) => {
        const expKeys = (controlExpandKeys || expandKeys).concat();
        const index = expKeys.findIndex((e) => e === key);
        if (index > -1) {
            expKeys.splice(index, 1);
        } else {
            expKeys.push(key);
        }
        onExpand ? onExpand(expKeys, node) : setExpandKeys(expKeys);
    };

    const handleNodeClick = (
        node: ITreeNodeItemProps,
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        e.stopPropagation();
        const uuid = node.id.toString();
        setActiveKey(uuid);
        if (!node.isLeaf) {
            // load data
            validatorLoadingData(node);
            // expand node
            handleExpandKey(uuid!, node);
        }
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

    const handleRightClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        info: ITreeNodeItemProps
    ) => {
        e.preventDefault();
        e.stopPropagation();
        onRightClick?.(e, info);
    };

    const onWindowDragEnd = useCallback((event) => {
        handleDragEnd(event, null, true);
        window.removeEventListener('dragend', onWindowDragEnd);
    }, []);

    const handleDragStart = (
        e: React.DragEvent<HTMLDivElement>,
        node: ITreeNodeItemProps
    ) => {
        dragInfo.current = {
            x: e.clientX,
            y: e.clientY,
            dragNode: node,
            flattenTree: new TreeViewUtil({
                id: Number.MAX_SAFE_INTEGER,
                children: data,
            }),
        };

        // unfolder current node
        const uuid = node.id.toString();
        const idx = (controlExpandKeys || expandKeys).indexOf(uuid);
        if (idx > -1) {
            const next = expandKeys.concat();
            next.splice(idx, 1);
            onExpand ? onExpand(next, node) : setExpandKeys(next);
        }

        window.addEventListener('dragend', onWindowDragEnd);
    };

    const handleDragEnter = debounce(
        (e: React.DragEvent<HTMLDivElement>, node: ITreeNodeItemProps) => {
            // expand the non-leaf node
            const uuid = node.id.toString();
            const isExpand = (controlExpandKeys || expandKeys).includes(uuid!);
            const dragNode = dragInfo.current.dragNode!;
            const dragNodeUuid = dragNode.id.toString();
            const isSelfNode = uuid === dragNodeUuid;
            if (
                !node.isLeaf &&
                !isSelfNode &&
                !isExpand &&
                !canLoadData(uuid)
            ) {
                handleExpandKey(uuid, node);
            }
        },
        300
    );

    const addOverClassViaNode = (node: ITreeNodeItemProps) => {
        const uuid = node.id.toString();
        const parentDom = document.querySelector<HTMLDivElement>(
            `div[data-key="${uuid}"]`
        );
        let dom = parentDom;
        while (dom) {
            if (!dom.classList.contains('drag-over')) {
                dom.classList.add('drag-over');
            }
            const nextSibling = dom.nextElementSibling as HTMLDivElement;
            if (nextSibling?.dataset.indent === parentDom!.dataset.indent) {
                dom = null;
            } else {
                dom = nextSibling;
            }
        }
    };

    const clearOverClass = () => {
        wrapper.current?.querySelectorAll('.drag-over').forEach((dom) => {
            dom.classList.remove('drag-over');
        });
    };

    const getParentNodeViaNode = (node: ITreeNodeItemProps) => {
        const treeUtils: TreeViewUtil<any> = dragInfo.current.flattenTree;
        const parentId = treeUtils.getHashMap(node.id)?.parent!;
        const parent = treeUtils.getHashMap(parentId)?.node;
        return parent;
    };

    const handleDragOver = (
        e: React.DragEvent<HTMLDivElement>,
        node: ITreeNodeItemProps
    ) => {
        const parent = node.isLeaf ? getParentNodeViaNode(node) : node;
        if (parent !== dragOverNode.current) {
            clearOverClass();
            dragOverNode.current = parent;
            addOverClassViaNode(parent);
        }
    };

    const handleDragEnd = (
        event: React.DragEvent<HTMLDivElement>,
        node: ITreeNodeItemProps | null,
        outsideTree = false
    ) => {
        if (!outsideTree) {
            // drop inside the tree
        }
        clearOverClass();
        dragOverNode.current = undefined;
        // reset dragging status
        dragInfo.current = { x: 0, y: 0, dragNode: null, flattenTree: null };
    };

    const handleDrop = (
        e: React.DragEvent<HTMLDivElement>,
        node: ITreeNodeItemProps
    ) => {
        if (node.isLeaf) {
            // Can't drag into a file, so the target would to be the parent of this target
            const parentNode = getParentNodeViaNode(node);
            const dragParent = getParentNodeViaNode(dragInfo.current.dragNode!);
            const parentUuid = (parentNode.key || parentNode.id).toString();
            const dragParentUuid = (dragParent.key || dragParent.id).toString();
            // prevent to drop node into same level
            if (parentUuid === dragParentUuid) {
                dragInfo.current = {
                    x: 0,
                    y: 0,
                    dragNode: null,
                    flattenTree: null,
                };
                return;
            }

            onDropTree?.(dragInfo.current.dragNode!, parentNode);
        } else {
            const dragParent = getParentNodeViaNode(dragInfo.current.dragNode!);
            const parentUuid = (dragParent.key || dragParent.id).toString();
            const nodeUuid = node.id.toString();
            const dragNode = dragInfo.current.dragNode!;
            const dragUuid = dragNode.id.toString();
            // prevent the situations like
            // 1. drag a node into parentNode
            // 2. drag a folder node into self
            if (parentUuid === nodeUuid || dragUuid === nodeUuid) {
                dragInfo.current = {
                    x: 0,
                    y: 0,
                    dragNode: null,
                    flattenTree: null,
                };
                return;
            }

            onDropTree?.(dragInfo.current.dragNode!, node);
        }
        dragInfo.current = { x: 0, y: 0, dragNode: null, flattenTree: null };
    };

    const renderTreeNode = (data: ITreeNodeItemProps[], indent: number) => {
        return data.map((item, index) => {
            const uuid = item.id.toString();
            const isExpand = (controlExpandKeys || expandKeys).includes(uuid!);
            const isLoading = loadingKeys.includes(uuid!);
            const isActive = activeKey === uuid;

            const title =
                renderTitle?.(item, index, !!item.isLeaf) || item.name;

            const IconComponent =
                typeof item.icon === 'string' ? (
                    <Icon type={item.icon} />
                ) : (
                    item.icon
                );

            const currentNode = (
                <TreeNode
                    key={`${uuid}-${indent}`}
                    draggable={draggable}
                    data={item}
                    name={typeof title === 'string' ? title : undefined}
                    indent={indent}
                    className={classNames(
                        defaultTreeNodeClassName,
                        isActive && activeTreeNodeClassName,
                        isExpand
                            ? expandTreeNodeClassName
                            : unexpandTreeNodeClassName
                    )}
                    renderIcon={() =>
                        renderIcon(
                            IconComponent,
                            !!item.isLeaf,
                            isExpand,
                            isLoading
                        )
                    }
                    renderTitle={() => title}
                    onContextMenu={(e) => handleRightClick(e, item)}
                    onClick={(e) => handleNodeClick(item, e)}
                    onNodeDragStart={draggable ? handleDragStart : undefined}
                    onNodeDragEnter={draggable ? handleDragEnter : undefined}
                    onNodeDragOver={draggable ? handleDragOver : undefined}
                    onNodeDragEnd={draggable ? handleDragEnd : undefined}
                    onNodeDrop={draggable ? handleDrop : undefined}
                />
            );

            const childrenNode =
                isExpand &&
                !isLoading &&
                renderTreeNode(item.children || [], indent + 1);

            return [currentNode, childrenNode];
        });
    };

    const handleTreeClick = () => {
        setActiveKey(null);
        onTreeClick?.();
    };

    useLayoutEffect(() => {
        const cache: {
            paths: ITreeNodeItemProps[];
            data: ITreeNodeItemProps;
        }[] = [];
        data.forEach((item) => {
            cache.push({ paths: [item], data: item });
        });

        while (cache.length) {
            const { paths, data } = cache.pop()!;
            const editableChild = data.children?.find(
                (child) => child.isEditable
            );
            if (editableChild) {
                const keys = paths.map((node) => {
                    validatorLoadingData(node);
                    return node.id.toString();
                });
                const nextExpandKeys = Array.from(
                    new Set([...keys, ...expandKeys])
                );

                onExpand
                    ? onExpand(nextExpandKeys, data)
                    : setExpandKeys(nextExpandKeys);
                break;
            } else {
                const children =
                    data.children?.map((child) => ({
                        paths: [...paths, child],
                        data: child,
                    })) || [];
                cache.push(...children);
            }
        }
    }, [data]);

    return (
        <div
            role="tree"
            ref={wrapper}
            draggable={draggable}
            onClick={handleTreeClick}
            className={classNames(defaultTreeClassName, className)}
        >
            {renderTreeNode(data, 0)}
        </div>
    );
};

export default TreeView;
