
import * as React from 'react';
import { memo } from 'react';
import { editorService } from 'mo';
import Tree from 'mo/components/tree';

const onSelectFile = function (fileData) {
    const tabData = {
        ...fileData,
        activeTab: fileData.id,
        modified: false
    };
    editorService.open(tabData, tabData.activeTab);
};
const TreeView: React.FunctionComponent<any> = (props: any) => {
    const { data } = props;
    return <Tree
        prefixCls="rc-tree"
        data={data}
        onSelectFile={onSelectFile}
    />
}
export default memo(TreeView);
