import * as React from 'react';
import { getBEMElement, prefixClaName } from 'mo/common/className';
import TreeView from 'mo/components/tree';
import { localize } from 'mo/i18n/localize';

const defaultClassName = prefixClaName('problems');
const treeClassName = getBEMElement(defaultClassName, 'treeview');
const treeNodeClassName = getBEMElement(treeClassName, 'treeNode');
const treeNodeBadgeClassName = getBEMElement(treeNodeClassName, 'badge');
const treeLeafClassName = getBEMElement(treeClassName, 'treeLeaf');
const treeLeafSubInfoClassName = getBEMElement(treeLeafClassName, 'subInfo');

function ProblemsPaneView(props: any) {
    const { data } = props;
    if (!data?.length)
        return (
            <div style={{ margin: '0 18px', userSelect: 'none' }}>
                {localize(
                    'panel.problems.empty',
                    'No problems have been detected in the workspace.'
                )}
            </div>
        );

    return (
        <div className={defaultClassName}>
            <TreeView
                className={treeClassName}
                data={data}
                renderTitle={({ children, name, value }, _, isLeaf) => {
                    return !isLeaf ? (
                        <span className={treeNodeClassName}>
                            {value.code}
                            <span className={treeNodeBadgeClassName}>
                                {children?.length}
                            </span>
                        </span>
                    ) : (
                        <span className={treeLeafClassName}>
                            {value.message}
                            <span className={treeLeafSubInfoClassName}>
                                {value.code}
                            </span>
                            <span className={treeLeafSubInfoClassName}>
                                [{value.startLineNumber}, {value.startColumn}]
                            </span>
                        </span>
                    );
                }}
            />
        </div>
    );
}

export default React.memo(ProblemsPaneView);
