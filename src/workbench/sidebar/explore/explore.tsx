import * as React from 'react';
import Collapse from 'mo/components/collapse';
import Toolbar from 'mo/components/toolbar';
import { Header, Content } from 'mo/workbench/sidebar';
import { prefixClaName } from 'mo/common/className';
import { IExplorer } from 'mo/model/workbench/explorer';
import { IExplorerController } from 'mo/controller/explorer/explorer';

const defaultExplorerClassName = prefixClaName('explorer', 'sidebar');

export const Explorer: React.FunctionComponent<IExplorer> = (
    props: IExplorer & IExplorerController
) => {
    const { data = [], headerToolBar = [], onHeaderToolbarClick } = props;
    return (
        <div className={defaultExplorerClassName}>
            <Header
                title={'Explorer'}
                toolbar={
                    <Toolbar
                        data={headerToolBar}
                        onClick={onHeaderToolbarClick}
                    />
                }
            />
            <Content>
                <Collapse data={data} />
            </Content>
        </div>
    );
};
