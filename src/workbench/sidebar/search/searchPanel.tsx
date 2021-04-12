import * as React from 'react';
import Toolbar from 'mo/components/toolbar';
import { prefixClaName } from 'mo/common/className';
import { Header, Content } from 'mo/workbench/sidebar';
import { SearchWidget } from 'mo/components/search';
import { ISearch } from 'mo/model/workbench/search';
import { IFolderTree } from 'mo/model/workbench/explorer/folderTree';
import SearchTree from './searchTree';

export interface ISearchPaneToolBar {
    search?: ISearch;
    folderTree?: IFolderTree;
    convertFoldToSearchTree?: <T>(data) => T[];
}

export default class SearchPanel extends React.Component<ISearchPaneToolBar> {
    constructor(props) {
        super(props);
    }

    onClick = (e, item) => {
        console.log('onClick:', e, item);
    };

    render() {
        const { search, folderTree, convertFoldToSearchTree } = this.props;
        return (
            <div className={prefixClaName('search-pane', 'sidebar')}>
                <Header
                    title="Search"
                    toolbar={
                        <Toolbar
                            data={search?.headerToolBar || []}
                            onClick={this.onClick}
                        />
                    }
                />
                <Content>
                    <SearchWidget {...this.props} {...search} />
                    {search?.value && (
                        <SearchTree
                            data={convertFoldToSearchTree?.(
                                folderTree?.folderTree?.data
                            )}
                            {...search}
                        />
                    )}
                </Content>
            </div>
        );
    }
}
