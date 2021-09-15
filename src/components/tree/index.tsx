import React, { useRef, useLayoutEffect } from 'react';
import RcTree, { TreeNode as RcTreeNode, TreeProps } from 'rc-tree';
import { Icon } from 'mo/components/icon';
import { prefixClaName, classNames } from 'mo/common/className';
import type { DataNode } from 'rc-tree/lib/interface';
import { FileTypes } from 'mo/model';
import type { LoadEventData } from 'mo/controller';

export interface ITreeNodeItemProps {
    disabled?: boolean;
    icon?: string | JSX.Element;
    isLeaf?: boolean;
    key?: string;
    name?: string;
    isEditable?: boolean; // Edit status
    children?: ITreeNodeItemProps[];
    [key: string]: any;
}

export interface ITreeProps extends Partial<TreeProps> {
    data?: ITreeNodeItemProps[];
    renderTitle?: (
        node: ITreeNodeItemProps,
        index: number,
        isLeaf: boolean
    ) => JSX.Element | string;
    onDropTree?(treeNode: ITreeNodeItemProps[]): void;
    onLoadData?: (treeNode: LoadEventData) => Promise<void>;
}

const TreeView = ({
    className,
    data = [],
    draggable,
    onDropTree,
    onRightClick,
    renderTitle, // custom title
    onLoadData,
    ...restProps
}: ITreeProps) => {
    const treeRef = useRef<RcTree>(null);

    const onDrop = (info) => {
        if (!draggable) return;
        const dropId = info.node.data.id;
        const dragId = info.dragNode.data.id;
        const dropPos = info.node.pos.split('-');
        const dropPosition =
            info.dropPosition - Number(dropPos[dropPos.length - 1]);

        const loopTree = (
            data: ITreeNodeItemProps[],
            key: string,
            callback: (
                item: ITreeNodeItemProps,
                index: number,
                arr: ITreeNodeItemProps[]
            ) => void
        ) => {
            data.forEach((item, index, arr) => {
                if (`${item.id}` === key) {
                    return callback(item, index, arr);
                }
                if (item.children) {
                    return loopTree(item.children, key, callback);
                }
            });
        };
        const treeData = [...data];

        let dragObj;
        loopTree(treeData, dragId, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });

        if (!info.dropToGap) {
            loopTree(treeData, dropId, (item) => {
                item.children = item.children || [];
                item.children.push(dragObj);
            });
        } else if (
            (info.node.data.children || []).length > 0 &&
            info.node.expanded &&
            dropPosition === 1
        ) {
            loopTree(treeData, dropId, (item) => {
                item.children = item.children || [];
                item.children.unshift(dragObj);
            });
        } else {
            let ar;
            let i;
            loopTree(treeData, dropId, (item, index, arr) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                ar.splice(i, 0, dragObj);
            } else {
                ar.splice(i + 1, 0, dragObj);
            }
        }
        onDropTree?.(treeData);
    };

    const renderTreeNodes = (
        data: ITreeNodeItemProps[],
        indent: number,
        parentPath?: string
    ) =>
        data?.map((item, index) => {
            const {
                id,
                disabled = false,
                key: rawKey,
                icon,
                name,
                children = [],
                isLeaf: itemIsLeaf,
            } = item;

            const isLeaf =
                typeof itemIsLeaf === 'boolean'
                    ? itemIsLeaf
                    : item.fileType === FileTypes.File || children.length === 0;

            const IconComponent =
                typeof icon === 'string' ? <Icon type={icon} /> : icon;

            // calculate key automatically via parent path and self id
            const key = rawKey || `${parentPath ? parentPath + '_' : ''}${id}`;

            return (
                /**
                 * TODO: antd TreeNode 目前强依赖于 Tree，不好抽离，后续还不支持的话，考虑重写..
                 * TODO: 由于依赖 rc-tree，无法针对具体的 div 元素添加 tabindex，从而无法做 :focus 的样式
                 * https://github.com/ant-design/ant-design/issues/4688
                 * https://github.com/ant-design/ant-design/issues/4853
                 */
                <RcTreeNode
                    data-id={`mo_treeNode_${key}`}
                    isLeaf={isLeaf}
                    data-index={index}
                    data-indent={indent}
                    data={item as DataNode}
                    disabled={disabled}
                    title={renderTitle?.(item, index, isLeaf) || name} // dynamic title
                    key={key}
                    icon={itemIsLeaf && IconComponent}
                >
                    {children && renderTreeNodes(children, indent + 1, key)}
                </RcTreeNode>
            );
        });

    const handleRightClick = (info) => {
        onRightClick?.(info);
    };

    useLayoutEffect(() => {
        const cache: { path: string; data: ITreeNodeItemProps }[] = [];
        data.forEach((item) => {
            cache.push({ path: `${item.id}`, data: item });
        });

        while (cache.length) {
            const { path, data } = cache.pop()!;
            const editableChild = data.children?.find(
                (child) => child.isEditable
            );
            if (editableChild) {
                treeRef.current?.setExpandedKeys(path.split('-'));
                break;
            } else {
                const children =
                    data.children?.map((child) => ({
                        path: `${path}-${child.id}`,
                        data: child,
                    })) || [];
                cache.push(...children);
            }
        }
    }, [data]);

    return (
        <div className={classNames(prefixClaName('tree'), className)}>
            <div className={prefixClaName('tree', 'sidebar')}>
                <RcTree
                    ref={treeRef}
                    prefixCls="rc-tree"
                    draggable={draggable}
                    onDrop={onDrop}
                    switcherIcon={<Icon type="chevron-right" />}
                    onRightClick={handleRightClick}
                    loadData={onLoadData}
                    {...restProps}
                >
                    {renderTreeNodes(data, 0)}
                </RcTree>
            </div>
        </div>
    );
};

export default TreeView;
