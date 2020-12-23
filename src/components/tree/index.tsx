import * as React from 'react';
import { memo } from 'react';
import Tree, { TreeNode } from 'rc-tree';
import { TreeProps } from 'rc-tree/lib/Tree';
import { IMenuItem } from 'mo/components/menu';
import { Icon } from 'mo/components/icon';
import { prefixClaName, classNames } from 'mo/common/className';
import './style.scss';

export function generateTreeId(id?: string): string {
    return `mo_treeNode_${id}`;
}

export const FileTypes = {
    FILE: 'file',
    FOLDER: 'folder',
};
export type FileType = 'file' | 'folder';

export interface ITreeNodeItem {
    name?: string;
    location?: string;
    fileType?: FileType;
    contextMenu?: IMenuItem[]; // custom contextMenu
    children?: ITreeNodeItem[];
    readonly id?: string;
    icon?: string | React.ReactNode;
    modify?: boolean; // Edit status
    className?: string;
}
export interface ITreeProps extends TreeProps {
    className?: string;
    data?: ITreeNodeItem[];
    draggable?: boolean;
    onSelectFile?: (IMenuItem) => void;
    onRightClick?: (node) => void;
    renderTitle?: (node, index) => React.ReactDOM | string;
    onDropTree?(treeNode): void;
}
const TreeView: React.FunctionComponent<ITreeProps> = (props: ITreeProps) => {
    const {
        className,
        data,
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
            const { modify, id, icon, children } = item;
            return (
                /**
                 * TODO: antd TreeNode 目前强依赖于 Tree，不好抽离，后续还不支持的话，考虑重写..
                 * https://github.com/ant-design/ant-design/issues/4688
                 * https://github.com/ant-design/ant-design/issues/4853
                 */
                <TreeNode
                    data-id={generateTreeId(id)}
                    data-index={index}
                    data={item}
                    title={renderTitle?.(item, index)} // dynamic title
                    key={id}
                    icon={modify ? '' : <Icon type={icon} />}
                >
                    {children && renderTreeNodes(children)}
                </TreeNode>
            );
        });
    return (
        <div className={classNames(prefixClaName('tree'), className)}>
            <div className={prefixClaName('tree', 'sidebar')}>
                <Tree
                    {...restProps}
                    draggable={draggable}
                    onDrop={onDrop}
                    switcherIcon={<Icon type="chevron-right" />}
                    onRightClick={({ event, node }: any) => {
                        onRightClick?.(node);
                    }}
                    onSelect={(selectedKeys, e: any) => {
                        const { fileType, modify } = e.node.data;
                        const isFile = fileType === FileTypes.FILE;
                        if (isFile && !modify && props.onSelectFile) {
                            props.onSelectFile(e.node.data);
                        }
                    }}
                >
                    {renderTreeNodes(data)}
                </Tree>
            </div>
        </div>
    );
};

export default memo(TreeView);
