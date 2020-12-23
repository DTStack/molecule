import * as React from 'react';
import { memo, useRef, useEffect, useState } from 'react';
import { editorService, explorerService } from 'mo';
import Tree, {
    ITreeNodeItem,
    ITreeProps,
    FileType,
    generateTreeId,
} from 'mo/components/tree';
import { IMenuItem, Menu } from 'mo/components/menu';
import { useContextMenu } from 'mo/components/contextMenu';
import { select } from 'mo/common/dom';
import { getFolderDefaultContextMenu } from './folderContextMenu';

const serviceProps = {
    onSelectFile: function (fileData) {
        const tabData = {
            ...fileData,
            activeTab: fileData.id,
            modified: false,
        };
        editorService.open(tabData, tabData.activeTab);
    },
    createFile: function (
        fileData: ITreeNodeItem,
        fileType: FileType,
        callback: Function
    ) {
        explorerService.createFile(fileData, fileType, callback);
    },
    updateFile: function (fileData, newName, index) {
        explorerService.updateFile(fileData, newName, index);
    },
    rename: function (fileData, callback: Function) {
        explorerService.rename(fileData, callback);
    },
    deleteFile: function (fileData) {
        explorerService.deleteFile(fileData);
    },
    onDropTree: function (treeNode) {
        explorerService.onDropTree(treeNode);
    },
};
const FolderTree: React.FunctionComponent<ITreeProps> = (props: ITreeProps) => {
    const inputRef = useRef<any>(null);
    const [activeData, setActiveData] = useState<ITreeNodeItem>({});
    const onFocus = () => {
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        });
    };
    const onEnter = (e, file, index) => {
        if (e.keyCode === 13) {
            serviceProps.updateFile(file, e.target.value, index);
        }
    };
    const { data, ...restProps } = props;
    /**
     * TODO:
     * useEffect 约束参数最好不要为引用类型
     * 这里 data 要做细粒度判断
     */
    useEffect(() => {
        const { contextMenu, id, fileType } = activeData;
        const moContextMenu: IMenuItem[] | undefined =
            contextMenu ||
            getFolderDefaultContextMenu?.(
                fileType,
                activeData,
                Object.assign({}, serviceProps, { onFocus })
            );
        let contextViewMenu;
        if (moContextMenu && moContextMenu.length > 0) {
            contextViewMenu = useContextMenu({
                anchor: select(`div[data-id=${generateTreeId(id)}]`),
                render: () => <Menu data={moContextMenu} />,
            });
        }
        return function cleanup() {
            contextViewMenu?.dispose();
        };
    }, [data, activeData?.id]);
    return (
        <Tree
            data={data}
            draggable
            onSelectFile={serviceProps.onSelectFile}
            onRightClick={(node) => {
                setActiveData(node.data);
            }}
            renderTitle={(node, index) => {
                const { modify, name } = node;
                return modify ? (
                    <input
                        type="text"
                        ref={inputRef}
                        onKeyDown={(e: any) => {
                            onEnter(e, node, index);
                        }}
                        autoComplete="off"
                        onBlur={(e) => {
                            serviceProps.updateFile(
                                node,
                                e.target.value,
                                index
                            );
                        }}
                        onChange={(e) => {}}
                    />
                ) : (
                    name
                );
            }}
            {...restProps}
        />
    );
};
export default memo(FolderTree);
