import * as React from 'react';
import { memo } from 'react';
import RcTree, { TreeNode as RcTreeNode } from 'rc-tree';
import { DataNode, IconType, Key, EventDataNode } from 'rc-tree/lib/interface';
import {
    NodeDragEventParams,
    NodeMouseEventParams,
} from 'rc-tree/lib/contextTypes';
import { Icon } from 'mo/components/icon';
import { prefixClaName, classNames } from 'mo/common/className';

export enum FileTypes {
    file = 'file',
    folder = 'folder',
    rootFolder = 'rootFolder',
}

export type FileType = keyof typeof FileTypes;

export interface ITreeNodeItem {
    name?: string;
    location?: string;
    fileType?: FileType;
    children?: ITreeNodeItem[];
    readonly id?: number;
    icon?: string | React.ReactNode;
    isEditable?: boolean; // Edit status
    content?: string; // editor content
    className?: string;
}

export interface ITreeProps {
    prefixCls?: string;
    style?: React.CSSProperties;
    focusable?: boolean;
    tabIndex?: number;
    children?: React.ReactNode;
    treeData?: DataNode[];
    showLine?: boolean;
    showIcon?: boolean;
    icon?: IconType;
    selectable?: boolean;
    disabled?: boolean;
    multiple?: boolean;
    checkable?: boolean | React.ReactNode;
    checkStrictly?: boolean;
    defaultExpandParent?: boolean;
    autoExpandParent?: boolean;
    defaultExpandAll?: boolean;
    defaultExpandedKeys?: Key[];
    expandedKeys?: Key[];
    defaultCheckedKeys?: Key[];
    checkedKeys?:
        | Key[]
        | {
              checked: Key[];
              halfChecked: Key[];
          };
    defaultSelectedKeys?: Key[];
    selectedKeys?: Key[];
    titleRender?: (node: DataNode) => React.ReactNode;
    onFocus?: React.FocusEventHandler<HTMLDivElement>;
    onBlur?: React.FocusEventHandler<HTMLDivElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
    onContextMenu?: React.MouseEventHandler<HTMLDivElement>;
    onExpand?: (
        expandedKeys: Key[],
        info: {
            node: EventDataNode;
            expanded: boolean;
            nativeEvent: MouseEvent;
        }
    ) => void;
    onSelect?: (
        selectedKeys: Key[],
        info: {
            event: 'select';
            selected: boolean;
            node: EventDataNode;
            selectedNodes: DataNode[];
            nativeEvent: MouseEvent;
        }
    ) => void;
    onLoad?: (
        loadedKeys: Key[],
        info: {
            event: 'load';
            node: EventDataNode;
        }
    ) => void;
    loadData?: (treeNode: EventDataNode) => Promise<void>;
    loadedKeys?: Key[];
    onMouseEnter?: (info: NodeMouseEventParams) => void;
    onMouseLeave?: (info: NodeMouseEventParams) => void;
    onRightClick?: (info: {
        event: React.MouseEvent;
        node: EventDataNode;
    }) => void;
    onDragStart?: (info: NodeDragEventParams) => void;
    onDragEnter?: (
        info: NodeDragEventParams & {
            expandedKeys: Key[];
        }
    ) => void;
    onDragOver?: (info: NodeDragEventParams) => void;
    onDragLeave?: (info: NodeDragEventParams) => void;
    onDragEnd?: (info: NodeDragEventParams) => void;
    onDrop?: (
        info: NodeDragEventParams & {
            dragNode: EventDataNode;
            dragNodesKeys: Key[];
            dropPosition: number;
            dropToGap: boolean;
        }
    ) => void;
    switcherIcon?: IconType;
    className?: string;
    draggable?: boolean;

    data?: ITreeNodeItem[];
    onSelectFile?: (ITreeNodeItem, isUpdate?) => void;
    renderTitle?: (node, index) => React.ReactDOM | string;
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
    const renderTreeNodes = (data) =>
        data?.map((item, index) => {
            const { isEditable, id, icon, children } = item;
            return (
                /**
                 * TODO: antd TreeNode 目前强依赖于 Tree，不好抽离，后续还不支持的话，考虑重写..
                 * https://github.com/ant-design/ant-design/issues/4688
                 * https://github.com/ant-design/ant-design/issues/4853
                 */
                <RcTreeNode
                    data-id={`mo_treeNode_${id}`}
                    data-index={index}
                    data={item}
                    title={renderTitle?.(item, index)} // dynamic title
                    key={`${id}`}
                    icon={isEditable ? '' : <Icon type={icon} />}
                >
                    {children && renderTreeNodes(children)}
                </RcTreeNode>
            );
        });
    return (
        <div className={classNames(prefixClaName('tree'), className)}>
            <div className={prefixClaName('tree', 'sidebar')}>
                <RcTree
                    prefixCls="rc-tree"
                    draggable={draggable}
                    onDrop={onDrop}
                    switcherIcon={<Icon type="chevron-right" />}
                    onSelect={(selectedKeys, e: any) => {
                        props.onSelectFile?.(e.node.data);
                    }}
                    onRightClick={onRightClick}
                    {...restProps}
                >
                    {renderTreeNodes(data)}
                </RcTree>
            </div>
        </div>
    );
};
export default memo(TreeView);
