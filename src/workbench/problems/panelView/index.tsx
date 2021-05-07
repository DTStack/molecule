import * as React from 'react';
import { prefixClaName } from 'mo/common/className';
import TreeView from 'mo/components/tree';
import './style.scss';

const defaultClassName = prefixClaName('problems');

function ProblemsPanelView(props: any) {
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
        <div className={defaultClassName} style={{ margin: '0 18px' }}>
            <TreeView data={data} renderTitle={renderTitle} />
        </div>
    );
}

export default React.memo(ProblemsPanelView);
