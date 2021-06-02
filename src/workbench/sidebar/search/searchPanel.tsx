import * as React from 'react';
import { Toolbar } from 'mo/components/toolbar';
import { prefixClaName } from 'mo/common/className';
import { Header, Content } from 'mo/workbench/sidebar';
import { Search } from 'mo/components/search';
import { ISearchProps } from 'mo/model/workbench/search';
import { IFolderTree } from 'mo/model/workbench/explorer/folderTree';
import { IActionBarItemProps } from 'mo/components/actionBar';
import SearchTree from './searchTree';

export interface ISearchPaneToolBar {
    search?: ISearchProps;
    folderTree?: IFolderTree;
    convertFoldToSearchTree?: <T>(data) => T[];
    setSearchValue?: (value?: string) => void;
    setReplaceValue?: (value?: string) => void;
    onToggleAddon: (addon?: IActionBarItemProps) => void;
    onToggleMode: (status: boolean) => void;
}

export default class SearchPanel extends React.Component<ISearchPaneToolBar> {
    constructor(props) {
        super(props);
    }

    onClick = (e, item) => {
        console.log('onClick:', e, item);
    };

    handleSearchChange = (values) => {
        const { setSearchValue, setReplaceValue } = this.props;
        const [searchVal, replaceVal] = values;
        setSearchValue?.(searchVal);
        setReplaceValue?.(replaceVal);
    };

    handleToggleButton = (status: boolean) => {
        this.props.onToggleMode(status);
    };

    render() {
        const {
            search = {},
            folderTree,
            convertFoldToSearchTree,
            onToggleAddon,
        } = this.props;
        const { value, replaceValue, searchAddons, replaceAddons } = search;

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
                    <Search
                        {...this.props}
                        values={[value, replaceValue]}
                        addons={[searchAddons, replaceAddons]}
                        onChange={this.handleSearchChange}
                        onAddonClick={onToggleAddon}
                        onButtonClick={this.handleToggleButton}
                    />
                    {value && (
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
