import * as React from 'react';
import { Toolbar } from 'mo/components/toolbar';
import { prefixClaName } from 'mo/common/className';
import { Header, Content } from 'mo/workbench/sidebar';
import { Search } from 'mo/components/search';
import { ISearchProps } from 'mo/model/workbench/search';
import { IFolderTree } from 'mo/model/workbench/explorer/folderTree';
import { IActionBarItemProps } from 'mo/components/actionBar';
import { ITreeNodeItemProps } from 'mo/components';
import SearchTree from './searchTree';
import { localize } from 'mo/i18n/localize';

export interface ISearchPaneToolBar {
    search?: ISearchProps;
    folderTree?: IFolderTree;
    convertFoldToSearchTree?: (
        data: ITreeNodeItemProps[],
        queryVal?: string
    ) => ITreeNodeItemProps[];
    getSearchIndex: (text: string, queryVal?: string) => number;
    setSearchValue?: (value?: string) => void;
    setReplaceValue?: (value?: string) => void;
    setValidateInfo: (info) => void;
    validateValue: (value: string) => { valid: boolean; errMessage?: string };
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

    handleSearch = (values) => {
        const { validateValue, setValidateInfo } = this.props;
        const [searchVal] = values;
        if (!validateValue(searchVal).valid) {
            setValidateInfo({
                type: 'error',
                text: validateValue(searchVal).errMessage,
            });
        } else {
            setValidateInfo('');
        }
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
            getSearchIndex,
        } = this.props;
        const {
            value,
            replaceValue,
            searchAddons,
            replaceAddons,
            validationInfo,
        } = search;

        return (
            <div className={prefixClaName('search-pane', 'sidebar')}>
                <Header
                    title={localize('sidebar.search.title', 'Search')}
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
                        validationInfo={validationInfo}
                        onChange={this.handleSearchChange}
                        onSearch={this.handleSearch}
                        onAddonClick={onToggleAddon}
                        onButtonClick={this.handleToggleButton}
                    />
                    {value && (
                        <SearchTree
                            data={convertFoldToSearchTree?.(
                                folderTree?.folderTree?.data || [],
                                value
                            )}
                            getSearchIndex={getSearchIndex}
                            {...search}
                        />
                    )}
                </Content>
            </div>
        );
    }
}
