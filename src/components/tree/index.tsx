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
    return document.querySelector(`div[data-id=${id}]`);
}
export function generateTreeId(id?: string): string {
    return `mo_treeNode_${id}`;
}
export const FileTypes = {
    FILE: 'file',
    FOLDER: 'folder'
}
export type FileType = 'file' | 'folder';

export interface ITreeNodeItem {
    name?: string;
    type?: FileType;
    contextMenu?: IMenuItem[]; // custom contextMenu
    children?: ITreeNodeItem[];
    readonly id?: string;
    icon?: string | React.ReactNode;
    modify?: boolean; // Edit status
    className?: string;
}
export interface ITreeProps extends TreeProps {
    data: ITreeNodeItem[];
    onSelectFile?: (IMenuItem) => void;
    newFileItem?: (fileData: ITreeNodeItem, type: FileType) => void;
    updateFile?(fileData: ITreeNodeItem, newName: string, index: number): void;
    reName?(fileData: ITreeNodeItem): void;
    onDropTree?(treeNode): void;
    className?: string;
}
const TreeView: React.FunctionComponent<ITreeProps> = (props: ITreeProps) => {
    const { className, data,
        newFileItem, updateFile, reName,
        onDropTree,
        ...others } = props;
    const [activeData, setActiveData] = useState<ITreeNodeItem>({});
    // const [value, setValue] = useState<string>('')
    const getContextMenuList = (type?: FileType) => {
        let contextMenu: IMenuItem[] = [];
        if (type === 'folder') {
            contextMenu = [
                {
                    id: 'newFile',
                    name: 'New File',
                    onClick: (e, active) => {
                        newFileItem && newFileItem(activeData, FileTypes.FILE as FileType)
                    },
                },
                {
                    id: 'newFolder',
                    name: 'New Folder',
                    onClick: (e, active) => {
                        newFileItem && newFileItem(activeData, FileTypes.FOLDER as FileType)
                    },
                },
                {
                    id: 'rename',
                    name: 'Rename',
                    onClick: (e, active) => {
                        reName && reName(activeData)
                    },
                },
                {
                    id: 'delete',
                    name: 'Delete',
                },
            ];
        } else if (type === 'file') {
            contextMenu = [
                {
                    id: 'openToSide',
                    name: 'Open to the side',
                },
                {
                    id: 'rename',
                    name: 'Rename',
                    onClick: (e, active) => {
                        reName && reName(activeData)
                    },
                },
                {
                    id: 'delete',
                    name: 'Delete',
                },
            ];
        }
        return contextMenu;
    };
    useEffect(() => {
        const { contextMenu, id, type } = activeData;
        const moContextMenu: IMenuItem[] =
            contextMenu || getContextMenuList(type);
        const renderContextMenu = () => <Menu data={moContextMenu} />;
        let contextViewMenu;
        if (moContextMenu && moContextMenu.length > 0) {
            contextViewMenu = useContextMenu({
                anchor: getElementByCustomAttr(`${generateTreeId(id)}`),
                render: renderContextMenu,
            });
        }
        return function cleanup() {
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
        onDropTree && onDropTree(treeData)
    };
    const onEnter = (e, file, index) => {
        if (e.keyCode === 13) {
            updateFile && updateFile(file, e.target.value, index)
        }
    }
    const renderTreeNodes = (data) =>
        data?.map((item, index) => {
            const {
                modify, name, id, icon, children
            } = item;
            return (
                <TreeNode
                    data-id={generateTreeId(id)}
                    data={item}
                    title={modify ? <input
                        type='text'
                        onKeyDown={(e: any) => { onEnter(e, item, index) }}
                        autoComplete='off'
                        onBlur={(e) => {
                            updateFile && updateFile(item, e.target.value, index)
                        }}
                        onChange={(e) => {
                        }}
                    /> : name}
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
                    {...others}
                    draggable
                    onDrop={onDrop}
                    switcherIcon={<Icon type="chevron-right" />}
                    onRightClick={({ event, node }: any) => {
                        setActiveData(node.data);
                    }}
                    onSelect={(selectedKeys, e: any) => {
                        const isFile = e.node.data.type === FileTypes.FILE;
                        const idModify = e.node.data.modify;
                        if (isFile && !idModify && props.onSelectFile) {
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
