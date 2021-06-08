import * as React from 'react';
import { Collapse } from 'mo/components/collapse';
import { Header, Content } from 'mo/workbench/sidebar';
import { IExplorer } from 'mo/model/workbench/explorer/explorer';
import { IExplorerController } from 'mo/controller/explorer/explorer';
import { Toolbar } from 'mo/components/toolbar';
import { defaultExplorerClassName } from './base';
import { localize } from 'mo/i18n/localize';

export const Explorer: React.FunctionComponent<IExplorer> = (
    props: IExplorer & IExplorerController
) => {
    const {
        data = [],
        headerToolBar,
        onClick,
        onActionsContextMenuClick,
        onCollapseChange,
        onCollapseToolbar,
    } = props;
    return (
        <div className={defaultExplorerClassName}>
            <Header
                title={localize('sidebar.explore.title', 'Explorer')}
                toolbar={
                    <Toolbar
                        data={[headerToolBar!]}
                        onClick={onClick}
                        onContextMenuClick={onActionsContextMenuClick}
                    />
                }
            />
            <Content>
                <Collapse
                    data={data}
                    onCollapseChange={onCollapseChange}
                    onCollapseToolbar={onCollapseToolbar}
                />
            </Content>
        </div>
    );
};
