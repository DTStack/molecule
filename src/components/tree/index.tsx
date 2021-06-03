import * as React from 'react';
import RcTree, { TreeNode as RcTreeNode, TreeProps } from 'rc-tree';
import { Icon } from 'mo/components/icon';
import { prefixClaName, classNames } from 'mo/common/className';

export enum FileTypes {
    file = 'file',
    folder = 'folder',
    rootFolder = 'rootFolder',
}

type Key = number | string;

export type FileType = keyof typeof FileTypes;

export interface ITreeNodeItemProps {
    name?: string;
    location?: string;
    fileType?: FileType;
    children?: ITreeNodeItemProps[];
    readonly id?: number;
    icon?: string | React.ReactNode;
    isEditable?: boolean; // Edit status
    content?: string; // editor content
    className?: string;
}

export interface ITreeProps extends Partial<TreeProps> {
    data?: ITreeNodeItemProps[];
    onSelectFile?: (file: ITreeNodeItemProps, isUpdate?) => void;
    renderTitle?: (node, index, isLeaf) => JSX.Element;
    onDropTree?(treeNode): void;
}

const TreeView: React.FunctionComponent<ITreeProps> = (props: ITreeProps) => {
    const {
        className,
        data = [],
        draggable,
        onDropTree,
        onRightClick,
        renderTitle, // custom title
        ...restProps
    } = props;

    const [selectedKeys, setKeys] = React.useState<Key[]>([]);
    const treeRef = React.useRef<RcTree>(null);

    const onDrop = (info) => {
        if (!draggable) return;
        console.log(info);
        const dropKey = info.node.props.eventKey;
        const dragKey = info.dragNode.props.eventKey;
        const dropPos = info.node.props.pos.split('-');
        const dropPosition =
            info.dropPosition - Number(dropPos[dropPos.length - 1]);

        const loopTree = (data, key, callback) => {
            data.forEach((item, index, arr) => {
                if (item.key === key) {
                    return callback(item, index, arr);
                }
                if (item.children) {
                    return loopTree(item.children, key, callback);
                }
            });
        };
        const treeData = [...data];

        let dragObj;
        loopTree(treeData, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });

        if (!info.dropToGap) {
            loopTree(treeData, dropKey, (item) => {
                item.children = item.children || [];
                item.children.push(dragObj);
            });
        } else if (
            (info.node.props.children || []).length > 0 &&
            info.node.props.expanded &&
            dropPosition === 1
        ) {
            loopTree(treeData, dropKey, (item) => {
                item.children = item.children || [];
                item.children.unshift(dragObj);
            });
        } else {
            let ar;
            let i;
            loopTree(treeData, dropKey, (item, index, arr) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                ar.splice(i, 0, dragObj);
            } else {
                ar.splice(i + 1, 0, dragObj);
            }
        }
        console.log('treeData', treeData);
        onDropTree && onDropTree(treeData);
    };

    const renderTreeNodes = (data: any[], indent) =>
        data?.map((item, index) => {
            const { isEditable, id, icon, children } = item;
            const isLeaf = !item.children?.length;
            return (
                <>
                    {/**
                     * TODO: antd TreeNode 目前强依赖于 Tree，不好抽离，后续还不支持的话，考虑重写..
                     * https://github.com/ant-design/ant-design/issues/4688
                     * https://github.com/ant-design/ant-design/issues/4853
                     */}
                    <RcTreeNode
                        data-id={`mo_treeNode_${id}`}
                        isLeaf={isLeaf}
                        data-index={index}
                        data-indent={indent}
                        data={item}
                        title={renderTitle?.(item, index, isLeaf)} // dynamic title
                        key={`${id}`}
                        icon={isEditable ? '' : <Icon type={icon} />}
                    >
                        {children && renderTreeNodes(children, indent + 1)}
                    </RcTreeNode>
                </>
            );
        });

    const handleSelect = (_, { node }) => {
        // always select current click node
        const currentNodeKey = [node.key];
        setKeys(currentNodeKey);
        if (node.isLeaf) {
            // only leaf node can trigger onselect event
            props.onSelectFile?.(node.data);
        } else {
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
    };

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
                    onRightClick={onRightClick}
                    {...restProps}
                >
                    {renderTreeNodes(data, 0)}
                </RcTree>
            </div>
        </div>
    );
};

export default TreeView;
