import * as React from 'react';
import { memo, useEffect, useState, useRef } from 'react';
import Tree, { TreeNode } from 'rc-tree';
import { TreeProps } from 'rc-tree/lib/Tree';
import { IMenuItem } from 'mo/components/menu';
import { Icon } from 'mo/components/icon';
import { Menu } from 'mo/components/menu';
import { useContextMenu } from 'mo/components/contextMenu';
import Modal from 'mo/components/dialog';
import { prefixClaName, classNames } from 'mo/common/className';
import { select } from 'mo/common/dom';
import './style.scss';

const confirm = Modal.confirm;
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
    newFileItem?: (fileData: ITreeNodeItem, type: FileType, callback: Function) => void;
    updateFile?(fileData: ITreeNodeItem, newName: string, index: number): void;
    reName?(fileData: ITreeNodeItem, callback: Function): void;
    deleteFile?(fileData: ITreeNodeItem): void;
    onDropTree?(treeNode): void;
    className?: string;
}
const TreeView: React.FunctionComponent<ITreeProps> = (props: ITreeProps) => {
    const {
        className,
        data,
        newFileItem,
        updateFile,
        reName,
        deleteFile,
        onDropTree,
        ...restProps
    } = props;
    const [activeData, setActiveData] = useState<ITreeNodeItem>({});
    const [activeId, setActiveId] = useState<any>('');
    const [expandedKeys, setExpandedKeys] = useState<any[]>([]);
    const inputRef = useRef<any>(null);

    const onFocus = () => {
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        })
    }
    const handleDelte = (activeData: ITreeNodeItem) => {
        confirm({
            title: `Are you sure you want to delete '${activeData?.name}' ?`,
            content: 'This action is irreversible!',
            onOk() {
                deleteFile && deleteFile(activeData)
            },
            onCancel() {
            },
        });
    }
    const addExpandedKeys = (activeData: ITreeNodeItem) => {
        const keys: any = [...expandedKeys]
        keys.push(activeData?.id)
        setExpandedKeys(keys);
    }
    const getContextMenuList = (type?: FileType) => {
        let contextMenu: IMenuItem[] = [];
        const commContextMenu = [
            {
                id: 'rename',
                name: 'Rename',
                onClick: (e, active) => {
                    reName && reName(activeData, onFocus);
                },
            },
            {
                id: 'delete',
                name: 'Delete',
                onClick: (e, active) => {
                    handleDelte(activeData)
                }
            }
        ]
        if (type === FileTypes.FOLDER) {
            contextMenu = [
                {
                    id: 'newFile',
                    name: 'New File',
                    onClick: (e, active) => {
                        addExpandedKeys(activeData)
                        newFileItem &&
                            newFileItem(activeData, FileTypes.FILE as FileType, onFocus);
                    },
                },
                {
                    id: 'newFolder',
                    name: 'New Folder',
                    onClick: (e, active) => {
                        addExpandedKeys(activeData)
                        newFileItem &&
                            newFileItem(
                                activeData,
                                FileTypes.FOLDER as FileType,
                                onFocus
                            );
                    },
                }
            ].concat(commContextMenu);
        } else if (type === FileTypes.FILE) {
            contextMenu = [
                {
                    id: 'openToSide',
                    name: 'Open to the side',
                }
            ].concat(commContextMenu);
        }
        return contextMenu;
    };
    /**
     * TODO:
     * useEffect 约束参数最好不要为引用类型
     * 这里 data 要做细粒度判断
     */
    useEffect(() => {
        const { contextMenu, id, type } = activeData;
        const moContextMenu: IMenuItem[] =
            contextMenu || getContextMenuList(type);
        const renderContextMenu = () => <Menu data={moContextMenu} />;
        let contextViewMenu;
        if (moContextMenu && moContextMenu.length > 0) {
            contextViewMenu = useContextMenu({
                anchor: select(`div[data-id=${generateTreeId(id)}]`),
                render: renderContextMenu,
            });
        }
        return function cleanup() {
            contextViewMenu?.dispose();
        };
    }, [data, activeId]);

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
        onDropTree && onDropTree(treeData);
    };
    const onEnter = (e, file, index) => {
        if (e.keyCode === 13) {
            updateFile && updateFile(file, e.target.value, index);
        }
    };
    const renderTreeNodes = (data) =>
        data?.map((item, index) => {
            const { modify, name, id, icon, children } = item;
            return (
                <TreeNode
                    data-id={generateTreeId(id)}
                    data={item}
                    title={
                        modify ? (
                            <input
                                type="text"
                                ref={inputRef}
                                onKeyDown={(e: any) => {
                                    onEnter(e, item, index);
                                }}
                                autoComplete="off"
                                onBlur={(e) => {
                                    updateFile &&
                                        updateFile(item, e.target.value, index);
                                }}
                                onChange={(e) => { }}
                            />
                        ) : (
                                name
                            )
                    }
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
                    draggable
                    onDrop={onDrop}
                    switcherIcon={<Icon type="chevron-right" />}
                    onRightClick={({ event, node }: any) => {
                        setActiveData(node.data);
                        setActiveId(node.data.id)
                    }}
                    onExpand={(expandedKeys) => {
                        setExpandedKeys(expandedKeys)
                    }}
                    expandedKeys={expandedKeys}
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
