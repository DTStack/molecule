
import * as React from 'react';
import { memo } from 'react';
import { activityBarService, editorService } from 'mo';
import Tree from 'mo/components/tree';
// service
const onSelectFile = function (fileData) {
    const tabData = {
        ...fileData,
        activeTab: fileData.id,
        modified: false
    };
    editorService.open(tabData, tabData.activeTab);
};
const TreeView: React.FunctionComponent<any> = (props: any) => {
    return <Tree
        prefixCls="rc-tree"
        data={props.data}
        onSelectFile={onSelectFile}
    />
}
export default memo(TreeView);
