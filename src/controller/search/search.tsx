import 'reflect-metadata';
import { Controller } from 'mo/react/controller';
import { container, singleton } from 'tsyringe';
import { connect } from 'mo/react';
import * as React from 'react';
import { SearchPanel } from 'mo/workbench/sidebar/search';
import { IActionBarItemProps } from 'mo/components/actionBar';
import {
    SEARCH_CASE_SENSITIVE_COMMAND_ID,
    SEARCH_WHOLE_WORD_COMMAND_ID,
    SEARCH_REGULAR_EXPRESSION_COMMAND_ID,
    SEARCH_PRESERVE_CASE_COMMAND_ID,
    SEARCH_REPLACE_ALL_COMMAND_ID,
    builtInSearchActivityItem,
    builtInHeaderToolbar,
    builtInSearchAddons,
    builtInReplaceAddons,
} from 'mo/model/workbench/search';
import {
    ActivityBarService,
    IActivityBarService,
    ISearchService,
    FolderTreeService,
    IFolderTreeService,
    ISidebarService,
    SearchService,
    SidebarService,
} from 'mo/services';
import { ITreeNodeItemProps } from 'mo/components';
export interface ISearchController {
    /**
     * Validate value if is valid
     */
    validateValue: (value: string) => { valid: boolean; errMessage?: string };
    setSearchValue?: (value?: string) => void;
    setReplaceValue?: (value?: string) => void;
    convertFoldToSearchTree?: (
        data: ITreeNodeItemProps[],
        queryVal?: string
    ) => ITreeNodeItemProps[];
    getSearchIndex: (text: string, queryVal?: string) => number;
    onToggleMode?: (status: boolean) => void;
    onToggleAddon?: (addon?: IActionBarItemProps) => void;
    onToggleCaseSensitive?: (addonId: string) => void;
    onToggleWholeWord?: (addonId: string) => void;
    onToggleRegex?: (addonId: string) => void;
    onTogglePreserveCase?: (addonId: string) => void;
    onToggleReplaceAll?: (addonId: string) => void;
}

@singleton()
export class SearchController extends Controller implements ISearchController {
    private readonly activityBarService: IActivityBarService;
    private readonly sidebarService: ISidebarService;
    private readonly searchService: ISearchService;
    private readonly folderTreeService: IFolderTreeService;

    constructor() {
        super();
        this.activityBarService = container.resolve(ActivityBarService);
        this.sidebarService = container.resolve(SidebarService);
        this.searchService = container.resolve(SearchService);
        this.folderTreeService = container.resolve(FolderTreeService);
        this.initView();
    }

    private initView() {
        const SearchPanelView = connect(
            {
                search: this.searchService,
                folderTree: this.folderTreeService,
            },
            SearchPanel
        );

        const searchEvent = {
            validateValue: this.validateValue,
            setValidateInfo: this.setValidateInfo,
            setSearchValue: this.setSearchValue,
            setReplaceValue: this.setReplaceValue,
            onToggleMode: this.onToggleMode,
            onToggleAddon: this.onToggleAddon,
            onToggleCaseSensitive: this.onToggleCaseSensitive,
            onToggleWholeWord: this.onToggleWholeWord,
            onToggleRegex: this.onToggleRegex,
            onTogglePreserveCase: this.onTogglePreserveCase,
            onToggleRepalceAll: this.onToggleRepalceAll,
            convertFoldToSearchTree: this.convertFoldToSearchTree,
            getSearchIndex: this.getSearchIndex,
        };

        const searchSidePane = {
            id: builtInSearchActivityItem().id,
            title: 'SEARCH',
            render() {
                return <SearchPanelView {...searchEvent} />;
            },
        };

        this.searchService.setState({
            headerToolBar: builtInHeaderToolbar(),
            searchAddons: builtInSearchAddons(),
            replaceAddons: builtInReplaceAddons(),
        });

        this.sidebarService.add(searchSidePane);
        this.activityBarService.addBar(builtInSearchActivityItem());
    }

    public readonly validateValue = (value: string) => {
        return this.searchService.validateValue(value);
    };

    public readonly setValidateInfo = (info) => {
        this.searchService.setValidateInfo?.(info);
    };

    public readonly setSearchValue = (value?: string) => {
        this.searchService.setSearchValue?.(value);
    };

    public readonly setReplaceValue = (value?: string) => {
        this.searchService.setReplaceValue?.(value);
    };

    public onToggleAddon = (addon?: IActionBarItemProps) => {
        const addonId = addon?.id;
        switch (addonId) {
            case SEARCH_CASE_SENSITIVE_COMMAND_ID: {
                this.onToggleCaseSensitive(addonId);
                break;
            }
            case SEARCH_WHOLE_WORD_COMMAND_ID: {
                this.onToggleWholeWord(addonId);
                break;
            }
            case SEARCH_REGULAR_EXPRESSION_COMMAND_ID: {
                this.onToggleRegex(addonId);
                break;
            }
            case SEARCH_PRESERVE_CASE_COMMAND_ID: {
                this.onTogglePreserveCase(addonId);
                break;
            }
            case SEARCH_REPLACE_ALL_COMMAND_ID: {
                this.onToggleRegex(addonId);
                break;
            }
            default:
                console.log('no addon');
        }
    };

    public readonly onToggleMode = (status: boolean) => {
        this.searchService.toggleMode?.(status);
    };

    public readonly onToggleCaseSensitive = (addonId: string) => {
        this.searchService.toggleCaseSensitive?.(addonId);
    };

    public readonly onToggleWholeWord = (addonId: string) => {
        this.searchService.toggleWholeWord?.(addonId);
    };

    public readonly onToggleRegex = (addonId: string) => {
        this.searchService.toggleRegex?.(addonId);
    };

    public readonly onTogglePreserveCase = (addonId: string) => {
        this.searchService.togglePreserveCase?.(addonId);
    };

    public readonly onToggleRepalceAll = (addonId: string) => {
        this.searchService.toggleReplaceAll?.(addonId);
    };

    public readonly convertFoldToSearchTree = (data, queryVal): any => {
        return this.searchService.convertFoldToSearchTree?.(data, queryVal);
    };

    public readonly getSearchIndex = (text: string, queryVal?: string) => {
        return this.searchService.getSearchIndex(text, queryVal);
    };
}

// Register a singleton
container.resolve(SearchController);
