import * as React from 'react';
import { mapState } from 'mo/react';
import Collapse from 'mo/components/collapse';
import Toolbar from 'mo/components/toolbar';
import { IActionBarItem } from 'mo/components/actionbar';
import { Header, Content } from 'mo/workbench/sidebar';
import { prefixClaName } from 'mo/common/className';
import { explorerService } from 'mo/services';
import { IExpolorer } from 'mo/model/workbench/explorer';

const explorerToolbar: IActionBarItem[] = [
    {
        id: 'explorer-more',
        title: 'View and More Actions...',
        iconName: 'codicon-ellipsis',
    },
];

const Explorer: React.FunctionComponent<IExpolorer> = (props: IExpolorer) => {
    const { data = [] } = props;
    const onClick = (e, item) => {
        e.stopPropagation();
        console.log('onClick:', e, item);
    };

    return (
        <div className={prefixClaName('explorer', 'sidebar')}>
            <Header
                title={'Explorer'}
                toolbar={<Toolbar data={explorerToolbar} onClick={onClick} />}
            />
            <Content>
                <Collapse data={data} />
            </Content>
        </div>
    );
};

export const ExplorerView = mapState(Explorer, explorerService.getState());
