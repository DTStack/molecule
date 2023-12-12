import { useCallback, useRef } from 'react';
import { debounce } from 'lodash-es';
import { classNames } from 'mo/client/classNames';
import { FileTypes, type IMenuItemProps, type KeyboardEventHandler, type UniqueId } from 'mo/types';
import { TreeHelper, type TreeNodeModel } from 'mo/utils/tree';

import Icon from '../icon';
import TreeNode from './treeNode';
import variables from './index.scss';

type ITreeNodeItemProps = TreeNodeModel<any>;

export interface ITreeProps {
    data?: ITreeNodeItemProps[];
    className?: string;
    draggable?: boolean;
    expandKeys: UniqueId[];
    loadedKeys: UniqueId[];
    loadingKeys?: UniqueId[];
    activeKey?: UniqueId;
    onExpand?: (expanded: boolean, expandedKeys: UniqueId[], node: ITreeNodeItemProps) => void;
    onSelect?: (node: ITreeNodeItemProps) => void;
    onTreeClick?: () => void;
    renderTitle?: (
        node: ITreeNodeItemProps,
        index: number,
        isLeaf: boolean
    ) => JSX.Element | string;
    onDropTree?(source: ITreeNodeItemProps, target: ITreeNodeItemProps): void;
    onRightClick?: (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        node: ITreeNodeItemProps
    ) => void;
    onTreeItemKeyDown?: KeyboardEventHandler;
    onContextMenu?: (item: IMenuItemProps, node: ITreeNodeItemProps) => void;
}

export default function Tree({
    className,
    data = [],
    draggable = false,
    loadedKeys,
    expandKeys,
    activeKey,
    loadingKeys = [],
    onExpand,
    onDropTree,
    onRightClick,
    renderTitle,
    onSelect,
    onTreeClick,
    onTreeItemKeyDown,
    onContextMenu,
}: ITreeProps) {
    // const [expandKeys, setExpandKeys] = useState<UniqueId[]>([]);
    // const [activeKey, setActiveKey] = useState<string | null>(null);
    // const [loadingKeys, setLoadingKeys] = useState<string[]>([]);
    const dragOverNode = useRef<ITreeNodeItemProps>();
    const dragInfo = useRef<{
        x: number;
        y: number;
        dragNode: ITreeNodeItemProps | null;
        flattenTree: any;
    }>({ x: 0, y: 0, dragNode: null, flattenTree: null });
    const wrapper = useRef<HTMLDivElement>(null);

    // const canLoadData = (key: string) => {
    //     if (!onLoadData) return false;
    //     if (loadedKeys?.includes(key)) return false;
    //     return true;
    // };

    // const validatorLoadingData = (node: ITreeNodeItemProps) => {
    //     const uuid: string = node.id.toString();
    //     if (canLoadData(uuid!)) {
    //         setLoadingKeys((keys) => {
    //             const nextKeys = keys.concat();
    //             nextKeys.push(uuid!);
    //             return nextKeys;
    //         });
    //         onLoadData!(node).finally(() => {
    //             setLoadingKeys((keys) => {
    //                 const nextKeys = keys.concat();
    //                 const index = nextKeys.indexOf(uuid!);
    //                 nextKeys.splice(index, 1);
    //                 return nextKeys;
    //             });
    //         });
    //     }
    // };

    const handleExpandKey = (node: ITreeNodeItemProps) => {
        let next = expandKeys.concat();
        const nextExpand = !expandKeys.includes(node.id);
        if (nextExpand) {
            next.push(node.id);
        } else {
            next = next.filter((key) => key !== node.id);
        }
        onExpand?.(nextExpand, next, node);
    };

    const handleNodeClick = (
        node: ITreeNodeItemProps,
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        e.stopPropagation();
        // const uuid = node.id.toString();
        // setActiveKey(uuid);
        // if (node.fileType !== FileTypes.File) {
        //     // load data
        //     validatorLoadingData(node);
        //     // expand node
        //     handleExpandKey(uuid!, node);
        // }
        if (node.fileType === FileTypes.Folder) {
            handleExpandKey(node);
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
        e.stopPropagation();
        onRightClick?.(e, info);
    };

    const onWindowDragEnd = useCallback((event: any) => {
        handleDragEnd(event, null, true);
        window.removeEventListener('dragend', onWindowDragEnd);
    }, []);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, node: ITreeNodeItemProps) => {
        dragInfo.current = {
            x: e.clientX,
            y: e.clientY,
            dragNode: node,
            flattenTree: new TreeHelper({
                id: Number.MAX_SAFE_INTEGER,
                children: data,
            }),
        };

        // unfolder current node
        // const uuid = node.id.toString();
        // const idx = expandKeys.indexOf(uuid);
        // if (idx > -1) {
        //     const next = expandKeys.concat();
        //     next.splice(idx, 1);
        //     // onExpand?.(next, node);
        // }

        handleExpandKey(node);

        window.addEventListener('dragend', onWindowDragEnd);
    };

    const handleDragEnter = debounce(
        (e: React.DragEvent<HTMLDivElement>, node: ITreeNodeItemProps) => {
            // expand the non-leaf node
            // const uuid = node.id.toString();
            const isExpand = expandKeys.includes(node.id);
            const dragNode = dragInfo.current.dragNode!;
            const dragNodeUuid = dragNode?.id;
            const isSelfNode = node.id === dragNodeUuid;
            if (node.fileType !== FileTypes.File && !isSelfNode && !isExpand) {
                handleExpandKey(node);
            }
        },
        300
    );

    const addOverClassViaNode = (node: ITreeNodeItemProps) => {
        const uuid = node.id;
        const parentDom = document.querySelector<HTMLDivElement>(`div[data-key="${uuid}"]`);
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

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>, node: ITreeNodeItemProps) => {
        if (node !== dragOverNode.current) {
            clearOverClass();
            dragOverNode.current = node;
            addOverClassViaNode(node);
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

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, node: ITreeNodeItemProps) => {
        onDropTree?.(dragInfo.current.dragNode!, node);
        dragInfo.current = { x: 0, y: 0, dragNode: null, flattenTree: null };
    };

    const renderTreeNode = (data: ITreeNodeItemProps[], indent: number) => {
        return data.map((item, index) => {
            const uuid = item.id;
            const isExpand = expandKeys.includes(uuid);
            const isLoading = loadingKeys.includes(item.id);
            const isActive = activeKey === uuid;

            const title = renderTitle?.(item, index, item.fileType === FileTypes.File) || item.name;

            const IconComponent =
                typeof item.icon === 'string' ? <Icon type={item.icon} /> : item.icon;

            const currentNode = (
                <TreeNode
                    key={`${uuid}-${indent}`}
                    draggable={draggable}
                    data={item}
                    name={typeof title === 'string' ? title : undefined}
                    indent={indent}
                    className={classNames(
                        variables.treeNode,
                        isActive && variables.active,
                        isExpand ? variables.open : variables.close
                    )}
                    renderIcon={() =>
                        renderIcon(
                            IconComponent,
                            item.fileType === FileTypes.File,
                            isExpand,
                            isLoading
                        )
                    }
                    renderTitle={() => title}
                    onRightClick={(e) => handleRightClick(e, item)}
                    onClick={(e) => handleNodeClick(item, e)}
                    onNodeDragStart={draggable ? handleDragStart : undefined}
                    onNodeDragEnter={draggable ? handleDragEnter : undefined}
                    onNodeDragOver={draggable ? handleDragOver : undefined}
                    onNodeDragEnd={draggable ? handleDragEnd : undefined}
                    onNodeDrop={draggable ? handleDrop : undefined}
                    onTreeItemKeyDown={onTreeItemKeyDown}
                    onContextMenu={onContextMenu}
                />
            );

            const childrenNode: any =
                isExpand && !isLoading && renderTreeNode(item.children || [], indent + 1);

            return [currentNode, childrenNode];
        });
    };

    const handleTreeClick = () => {
        // setActiveKey(null);
        onTreeClick?.();
    };

    // useLayoutEffect(() => {
    //     const cache: {
    //         paths: ITreeNodeItemProps[];
    //         data: ITreeNodeItemProps;
    //     }[] = [];
    //     data.forEach((item) => {
    //         cache.push({ paths: [item], data: item });
    //     });

    //     while (cache.length) {
    //         const { paths, data } = cache.pop()!;
    //         const editableChild = data.children?.find((child) => child.isEditable);
    //         if (editableChild) {
    //             const keys = paths.map((node) => {
    //                 validatorLoadingData(node);
    //                 return node.id.toString();
    //             });
    //             const nextExpandKeys = Array.from(
    //                 new Set([...keys, ...(controlExpandKeys || expandKeys)])
    //             );

    //             onExpand ? onExpand(nextExpandKeys, data) : setExpandKeys(nextExpandKeys);
    //             break;
    //         } else {
    //             const children =
    //                 data.children?.map((child) => ({
    //                     paths: [...paths, child],
    //                     data: child,
    //                 })) || [];
    //             cache.push(...children);
    //         }
    //     }
    // }, [data]);

    // useEffect(() => {
    //     controlActiveKey && setActiveKey(controlActiveKey.toString());
    // }, [controlActiveKey]);

    return (
        <div
            role="tree"
            ref={wrapper}
            draggable={draggable}
            onClick={handleTreeClick}
            className={classNames(variables.container, className)}
        >
            {renderTreeNode(data, 0)}
        </div>
    );
}
