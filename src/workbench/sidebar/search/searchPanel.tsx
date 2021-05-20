import * as React from 'react';
import { Toolbar } from 'mo/components/toolbar';
import { prefixClaName } from 'mo/common/className';
import { Header, Content } from 'mo/workbench/sidebar';
import { Search } from 'mo/components/search';
import { ISearchProps } from 'mo/model/workbench/search';
import { IFolderTree } from 'mo/model/workbench/explorer/folderTree';
import SearchTree from './searchTree';

export interface ISearchPaneToolBar {
    search?: ISearchProps;
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
                    <Search {...this.props} {...search} />
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
