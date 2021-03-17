import * as React from 'react';
import Toolbar from 'mo/components/toolbar';
import { prefixClaName } from 'mo/common/className';
import { Header, Content } from 'mo/workbench/sidebar';
import { explorerService } from 'mo';
import { SearchWidget } from 'mo/components/search';
import { IActivityBarItem } from 'mo/model/workbench/activityBar';
import SearchTree from './searchTree';

interface ISearchPaneToolBar {
    headerToolBar?: IActivityBarItem[];
    value?: string;
}

const explorerState = explorerService.getState();

export default class SearchPanel extends React.Component<ISearchPaneToolBar> {
    constructor(props) {
        super(props);
    }

    onClick = (e, item) => {
        console.log('onClick:', e, item);
    };

    render() {
        const { headerToolBar = [], value } = this.props;
        return (
            <div className={prefixClaName('search-pane', 'sidebar')}>
                <Header
                    title="Search"
                    toolbar={
                        <Toolbar data={headerToolBar} onClick={this.onClick} />
                    }
                />
                <Content>
                    <SearchWidget {...this.props} />
                    {value && (
                        <SearchTree
                            data={explorerState?.folderTree?.data}
                            {...this.props}
                        />
                    )}
                </Content>
            </div>
        );
    }
}
