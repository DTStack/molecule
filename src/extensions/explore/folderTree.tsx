import * as React from 'react';
import { memo, useRef } from 'react';
import { editorService, explorerService } from 'mo';
import Tree, { ITreeNodeItem, ITreeProps, FileType } from 'mo/components/tree';
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
    return (
        <Tree
            prefixCls="rc-tree"
            data={data}
            draggable
            onSelectFile={serviceProps.onSelectFile}
            renderContextMenu={(fileType, activeData) => {
                return getFolderDefaultContextMenu(
                    fileType,
                    activeData,
                    Object.assign({}, serviceProps, { onFocus })
                );
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
                        onChange={(e) => { }}
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
