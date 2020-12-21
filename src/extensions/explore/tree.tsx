import * as React from 'react';
import { memo } from 'react';
import { editorService, explorerService } from 'mo';
import Tree, { ITreeNodeItem, FileType, ITreeProps } from 'mo/components/tree';

const serviceProps = {
    onSelectFile: function (fileData) {
        const tabData = {
            ...fileData,
            activeTab: fileData.id,
            modified: false,
        };
        editorService.open(tabData, tabData.activeTab);
    },
    newFileItem: function (
        fileData: ITreeNodeItem,
        type: FileType,
        callback: Function
    ) {
        explorerService.newFileItem(fileData, type, callback);
    },
    updateFile: function (fileData, newName, index) {
        explorerService.updateFile(fileData, newName, index);
    },
    reName: function (fileData, callback: Function) {
        explorerService.reName(fileData, callback);
    },
    deleteFile: function (fileData) {
        explorerService.deleteFile(fileData);
    },
    onDropTree: function (treeNode) {
        explorerService.onDropTree(treeNode);
    },
};
const TreeView: React.FunctionComponent<ITreeProps> = (props: ITreeProps) => {
    const { data } = props;
    return <Tree prefixCls="rc-tree" data={data} {...serviceProps} />;
};
export default memo(TreeView);
