import * as React from 'react';
import { DataNode, IconType, Key, EventDataNode } from 'rc-tree/lib/interface';
import { NodeDragEventParams, NodeMouseEventParams } from 'rc-tree/lib/contextTypes';
export declare enum FileTypes {
    file = "file",
    folder = "folder",
    rootFolder = "rootFolder"
}
export declare type FileType = keyof typeof FileTypes;
export interface ITreeNodeItem {
    name?: string;
    location?: string;
    fileType?: FileType;
    children?: ITreeNodeItem[];
    readonly id?: number;
    icon?: string | React.ReactNode;
    modify?: boolean;
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
    checkedKeys?: Key[] | {
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
    onExpand?: (expandedKeys: Key[], info: {
        node: EventDataNode;
        expanded: boolean;
        nativeEvent: MouseEvent;
    }) => void;
    onSelect?: (selectedKeys: Key[], info: {
        event: 'select';
        selected: boolean;
        node: EventDataNode;
        selectedNodes: DataNode[];
        nativeEvent: MouseEvent;
    }) => void;
    onLoad?: (loadedKeys: Key[], info: {
        event: 'load';
        node: EventDataNode;
    }) => void;
    loadData?: (treeNode: EventDataNode) => Promise<void>;
    loadedKeys?: Key[];
    onMouseEnter?: (info: NodeMouseEventParams) => void;
    onMouseLeave?: (info: NodeMouseEventParams) => void;
    onRightClick?: (info: {
        event: React.MouseEvent;
        node: EventDataNode;
    }) => void;
    onDragStart?: (info: NodeDragEventParams) => void;
    onDragEnter?: (info: NodeDragEventParams & {
        expandedKeys: Key[];
    }) => void;
    onDragOver?: (info: NodeDragEventParams) => void;
    onDragLeave?: (info: NodeDragEventParams) => void;
    onDragEnd?: (info: NodeDragEventParams) => void;
    onDrop?: (info: NodeDragEventParams & {
        dragNode: EventDataNode;
        dragNodesKeys: Key[];
        dropPosition: number;
        dropToGap: boolean;
    }) => void;
    switcherIcon?: IconType;
    className?: string;
    draggable?: boolean;
    data?: ITreeNodeItem[];
    onSelectFile?: (IMenuItem: any) => void;
    onSelectTree?: (id: any) => void;
    renderTitle?: (node: any, index: any) => React.ReactDOM | string;
    onDropTree?(treeNode: any): void;
}
declare const _default: React.NamedExoticComponent<ITreeProps>;
export default _default;
