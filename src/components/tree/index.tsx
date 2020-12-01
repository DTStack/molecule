import * as React from 'react';
import { memo, useEffect, useState } from 'react';
import Tree, { TreeNode } from 'rc-tree';
import { TreeProps } from 'rc-tree/lib/Tree';
import { IMenuItem } from 'mo/components/menu';
import { Icon } from 'mo/components/icon';
import { Menu } from 'mo/components/menu';
import { useContextMenu } from 'mo/components/contextMenu';
import { prefixClaName, classNames } from 'mo/common/className';
import { HTMLElementType } from 'mo/common/dom';
import './style.scss';

export function getElementByCustomAttr(id: string): HTMLElementType {
    return document.querySelector(`div[data-id=${id}]`)
};
export function generateTreeId(id?: string): string {
    return `mo_treeNode_${id}`
}

export interface ITreeNodeItem {
    key?: string | number;
    title?: React.ReactNode | string;
    type?: 'folder' | 'file';
    contextMenu?: IMenuItem[];
    children?: ITreeNodeItem[];
    readonly id?: string;
    icon?: string | React.ReactNode;
    className?: string;
}
export interface ITreeProps extends TreeProps {
    data: ITreeNodeItem[];
    className?: string;
}
const TreeView: React.FunctionComponent<ITreeProps> = (props: ITreeProps) => {
    const { className, data, ...others } = props;
    const [treeData, setTreeData] = useState<ITreeNodeItem[]>(data);
    const [activeData, setActiveData] = useState<ITreeNodeItem>({});

    const getContextMenuList = (type?: 'folder' | 'file') => {
        let contextMenu: IMenuItem[] = [];
        if (type === 'folder') {
            contextMenu = [
                {
                    id: 'newFile',
                    name: 'New File',
                    onClick: (e, active) => { console.log('New File Click', active) }
                },
                {
                    id: 'newFolder',
                    name: 'New Folder'
                },
                {
                    id: 'rename',
                    name: 'Rename'
                },
                {
                    id: 'delete',
                    name: 'Delete'
                }
            ]
        } else if (type === 'file') {
            contextMenu = [
                {
                    id: 'openToSide',
                    name: 'Open to the side'
                },
                {
                    id: 'rename',
                    name: 'Rename'
                },
                {
                    id: 'delete',
                    name: 'Delete'
                }
            ]
        }
        return contextMenu
    }
    useEffect(() => {
        const { contextMenu, id, type } = activeData;
        const moContextMenu: IMenuItem[] = contextMenu || getContextMenuList(type);
        const renderContextMenu = () => <Menu data={moContextMenu} />;
        let contextViewMenu;
        if (moContextMenu && moContextMenu.length > 0) {
            contextViewMenu = useContextMenu({
                anchor: getElementByCustomAttr(`${generateTreeId(id)}`),
                render: renderContextMenu,
            });
        }
        return function cleanup() {
            console.log('cleanup')
            contextViewMenu?.dispose();
        };
    }, [data, activeData]);

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

        let dragObj;
        loopTree(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });

        if (!info.dropToGap) {
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

    const renderTreeNodes = (data) =>
        data?.map((item) => {
            return (
                <TreeNode
                    data-id={generateTreeId(item.id)}
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
        <div className={classNames(prefixClaName('tree'), className)}>
            <div className={prefixClaName('tree', 'sidebar')}>
                <Tree
                    {...others}
                    draggable
                    onDrop={onDrop}
                    switcherIcon={<Icon type="chevron-right" />}
                    onRightClick={({ event, node }: any) => {
                        setActiveData(node.data)
                    }}
                    onSelect={(selectedKeys, e) => { console.log('select', selectedKeys, e) }}
                >
                    {renderTreeNodes(treeData)}
                </Tree>
            </div>
        </div>
    );
};

export default memo(TreeView);

