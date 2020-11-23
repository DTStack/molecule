import * as React from 'react';
import { memo, useEffect, useState } from 'react';
import Tree, { TreeNode } from 'mo/components/tree';
import { IMenuItem } from 'mo/components/menu';
import { Icon } from 'mo/components/icon';
import { prefixClaName } from 'mo/common/className';
import './style.scss';

export interface ITreeNodeItem {
    title?: string;
    key?: string;
    type?: string;
    contextMenu?: IMenuItem[];
    children?: ITreeNodeItem[];
    readonly id?: string;
    icon?: string | React.ReactNode;
}
interface ITreeProps {
    data: ITreeNodeItem[];
}
const TreeView: React.FunctionComponent<ITreeProps> = (props: ITreeProps) => {
    const { data } = props;
    const [treeData, setTreeData] = useState<ITreeNodeItem[]>(data);

    /**
     * Refer to antd for details
     * TODO: move component
     */
    const onDrop = (info) => {
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
        const data = [...treeData];

        // Find dragObject
        let dragObj;
        loopTree(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });

        if (!info.dropToGap) {
            // Drop on the content
            loopTree(data, dropKey, (item) => {
                item.children = item.children || [];
                item.children.push(dragObj);
            });
        } else if (
            (info.node.props.children || []).length > 0 &&
            info.node.props.expanded &&
            dropPosition === 1
        ) {
            loopTree(data, dropKey, (item) => {
                item.children = item.children || [];
                item.children.unshift(dragObj);
            });
        } else {
            let ar;
            let i;
            loopTree(data, dropKey, (item, index, arr) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                ar.splice(i, 0, dragObj);
            } else {
                ar.splice(i + 1, 0, dragObj);
            }
        }
        console.log('data', data);
        setTreeData(data);
    };

    useEffect(() => {
        return () => {
            console.log('clean effect');
        };
    }, data);

    const renderTreeNodes = (data) =>
        data?.map((item) => {
            return (
                <TreeNode
                    data={item}
                    title={item.title}
                    key={item.key}
                    icon={<Icon type={item.icon} />}
                >
                    {item.children && renderTreeNodes(item.children)}
                </TreeNode>
            );
        });
    return (
        /**
         *  TODO: contextMenu、line
         */
        <div className={prefixClaName('tree', 'sidebar')}>
            <Tree
                prefixCls="rc-tree"
                draggable
                onDrop={onDrop}
                switcherIcon={<Icon type="chevron-right" />}
                onRightClick={({ event, node }) => {
                    console.log('onRightClick', event, node);
                }}
                // onSelect={onClickItem}
            >
                {renderTreeNodes(treeData)}
            </Tree>
        </div>
    );
};

export default memo(TreeView);
