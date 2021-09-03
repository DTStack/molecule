import * as React from 'react';
import { Collapse } from 'mo/components/collapse';
import { Header, Content } from 'mo/workbench/sidebar';
import { IExplorer } from 'mo/model/workbench/explorer/explorer';
import { IExplorerController } from 'mo/controller/explorer/explorer';
import { Toolbar } from 'mo/components/toolbar';
import { defaultExplorerClassName } from './base';
import { localize } from 'mo/i18n/localize';

type IExplorerProps = IExplorer & IExplorerController;

export const Explorer: React.FunctionComponent<IExplorerProps> = (
    props: IExplorerProps
) => {
    const {
        data = [],
        headerToolBar,
        onClick,
        onActionsContextMenuClick,
        onCollapseChange,
        onToolbarClick,
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
                    onToolbarClick={onToolbarClick}
                />
            </Content>
        </div>
    );
};
