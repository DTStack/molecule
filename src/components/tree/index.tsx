import React, { useState, useRef, useLayoutEffect } from 'react';
import RcTree, { TreeNode as RcTreeNode, TreeProps } from 'rc-tree';
import { Icon } from 'mo/components/icon';
import { prefixClaName, classNames } from 'mo/common/className';
import type { DataNode } from 'rc-tree/lib/interface';
import { FileTypes } from 'mo/model';
import type { LoadEventData } from 'mo/controller';
import { TreeViewUtil } from 'mo/services/helper';

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
    onSelectNode?: (file: ITreeNodeItemProps, isUpdate?) => void;
    renderTitle?: (
        node: ITreeNodeItemProps,
        index: number,
        isLeaf: boolean
    ) => JSX.Element | string;
    onDropTree?(source: ITreeNodeItemProps, target: ITreeNodeItemProps): void;
    onLoadData?: (treeNode: LoadEventData) => Promise<void>;
}

const TreeView = ({
    className,
    data = [],
    draggable,
    onDropTree,
    onRightClick,
    renderTitle, // custom title
    onSelectNode,
    onLoadData,
    ...restProps
}: ITreeProps) => {
    const [selectedKeys, setKeys] = useState<React.Key[]>([]);
    const treeRef = useRef<RcTree>(null);

    const onDrop = (info) => {
        if (!draggable) return;
        const source = info.dragNode;
        const target = info.node;
        const treeViewUtil = new TreeViewUtil({
            id: Number.MAX_SAFE_INTEGER,
            children: data,
        });
        if (target.data.isLeaf) {
            // Can't drag into a file, so the target would to be the parent of this target
            const obj = treeViewUtil.indexes[target.data.id];
            const targetParentId = obj.parent!;

            const sourceParentId = treeViewUtil.indexes[source.data.id].parent;
            // Can't drag under same folder
            if (targetParentId === sourceParentId) {
                return;
            }
            onDropTree?.(
                info.dragNode,
                treeViewUtil.indexes[targetParentId].node!
            );
        } else {
            const sourceParentId = treeViewUtil.indexes[source.data.id].parent;
            // Can't drag to the parent node
            if (sourceParentId === target.id) {
                return;
            }

            onDropTree?.(info.dragNode, info.node);
        }
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

    const handleSelect = (_, { node }) => {
        // always select current click node
        const currentNodeKey = [node.key];
        setKeys(currentNodeKey);
        if (!node.isLeaf) {
            const expanded = treeRef.current?.state.expandedKeys || [];
            if (expanded.includes(node.key)) {
                // difference set, remove current node key from expanded collection
                treeRef.current?.setExpandedKeys(
                    expanded?.filter(
                        (exp) => !currentNodeKey.includes(exp.toString())
                    )
                );
            } else {
                // union set, add current node key into expanded collection
                treeRef.current?.setExpandedKeys(
                    expanded.concat(currentNodeKey)
                );
            }
        }
        onSelectNode?.(node.data);
    };

    const handleRightClick = (info) => {
        setKeys([info.node.key]);
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
                    selectedKeys={selectedKeys}
                    ref={treeRef}
                    prefixCls="rc-tree"
                    draggable={draggable}
                    onDrop={onDrop}
                    switcherIcon={<Icon type="chevron-right" />}
                    onSelect={handleSelect}
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
