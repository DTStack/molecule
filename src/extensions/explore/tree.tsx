
import * as React from 'react';
import { memo } from 'react';
import Tree from 'mo/components/tree';
// service
const TreeView: React.FunctionComponent<any> = (props: any) => {
    return <Tree prefixCls="rc-tree" data={props.data} />
}
export default memo(TreeView);
