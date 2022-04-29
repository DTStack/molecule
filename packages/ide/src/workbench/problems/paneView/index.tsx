import React, { memo } from 'react';
import { getBEMElement, prefixClaName } from '@dtinsight/molecule-common';
import { TreeView, Icon, Scrollable } from '@dtinsight/molecule-ui';
import { localize } from 'mo/i18n/localize';
import { IProblems, MarkerSeverity } from 'mo/model';

const defaultClassName = prefixClaName('problems');
const treeClassName = getBEMElement(defaultClassName, 'treeview');
const treeNodeClassName = getBEMElement(treeClassName, 'treeNode');
const treeNodeBadgeClassName = getBEMElement(treeNodeClassName, 'badge');
const treeLeafClassName = getBEMElement(treeClassName, 'treeLeaf');
const treeLeafSubInfoClassName = getBEMElement(treeLeafClassName, 'subInfo');

function ProblemsPaneView(props: IProblems) {
    const { data, onSelect } = props;
    if (!data?.length) {
        return (
            <div style={{ margin: '0 18px', userSelect: 'none' }}>
                {localize(
                    'panel.problems.empty',
                    'No problems have been detected in the workspace.'
                )}
            </div>
        );
    }

    const getIcon = (status: number) => {
        switch (status) {
            case MarkerSeverity.Error: {
                return <Icon type="error" />;
            }
            case MarkerSeverity.Warning: {
                return <Icon type="warning" />;
            }
            case MarkerSeverity.Info: {
                return <Icon type="info" />;
            }
            default: {
                return '';
            }
        }
    };

    return (
        <Scrollable>
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
                                {getIcon(value.status)}
                                <span>{value.message}</span>
                                <span className={treeLeafSubInfoClassName}>
                                    {value.code}
                                </span>
                                <span className={treeLeafSubInfoClassName}>
                                    [{value.startLineNumber},{' '}
                                    {value.startColumn}]
                                </span>
                            </span>
                        );
                    }}
                    onSelect={onSelect}
                />
            </div>
        </Scrollable>
    );
}

export default memo(ProblemsPaneView);
