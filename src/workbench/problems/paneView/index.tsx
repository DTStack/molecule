import * as React from 'react';
import { prefixClaName } from 'mo/common/className';
import TreeView from 'mo/components/tree';

const defaultClassName = prefixClaName('problems');

function ProblemsPaneView(props: any) {
    const { data } = props;
    const renderTitle = (item: any): any => {
        const { name, children, value } = item;
        return (
            <span>
                {children && children.length ? name : value.code}{' '}
                <span>({children.length})</span>
            </span>
        );
    };
    return (
        <div className={defaultClassName}>
            <TreeView data={data} renderTitle={renderTitle} />
        </div>
    );
}

export default React.memo(ProblemsPaneView);
