import 'reflect-metadata';
import { Controller } from 'mo/react/controller';
import { container, singleton } from 'tsyringe';
import { connect } from 'mo/react';
import { IActivityBarItem } from 'mo/model';
import * as React from 'react';
import { SearchPanel } from 'mo/workbench/sidebar/search';
import { IActionBarItem } from 'mo/components/actionBar';
import {
    SEARCH_CASE_SENSITIVE_COMMAND_ID,
    SEARCH_WHOLE_WORD_COMMAND_ID,
    SEARCH_REGULAR_EXPRESSION_COMMAND_ID,
    SEARCH_PRESERVE_CASE_COMMAND_ID,
    SEARCH_REPLACE_ALL_COMMAND_ID,
    SEARCH_ACTIVITY_ITEM,
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
export interface ISearchController {
    setSearchValue?: (value?: string) => void;
    setReplaceValue?: (value?: string) => void;
    convertFoldToSearchTree?: <T = any>(data?: T[]) => T[];
    onToggleAddon?: (addon?: IActionBarItem) => void;
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
            setSearchValue: this.setSearchValue,
            setReplaceValue: this.setReplaceValue,
            onToggleAddon: this.onToggleAddon,
            onToggleCaseSensitive: this.onToggleCaseSensitive,
            onToggleWholeWord: this.onToggleWholeWord,
            onToggleRegex: this.onToggleRegex,
            onTogglePreserveCase: this.onTogglePreserveCase,
            onToggleRepalceAll: this.onToggleRepalceAll,
            convertFoldToSearchTree: this.convertFoldToSearchTree,
        };

        const searchSidePane = {
            id: 'searchPane',
            title: 'SEARCH',
            render() {
                return <SearchPanelView {...searchEvent} />;
            },
        };

        this.sidebarService.push(searchSidePane);

        this.activityBarService.addBar(SEARCH_ACTIVITY_ITEM);

        this.activityBarService.onSelect((e, item: IActivityBarItem) => {
            if (item.id === SEARCH_ACTIVITY_ITEM.id) {
                this.sidebarService.setState({
                    current: searchSidePane.id,
                });
            }
        });
    }

    public readonly setSearchValue = (value?: string) => {
        this.searchService.setSearchValue?.(value);
    };

    public readonly setReplaceValue = (value?: string) => {
        this.searchService.setReplaceValue?.(value);
    };

    public onToggleAddon = (addon?: IActionBarItem) => {
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

    public readonly convertFoldToSearchTree = (data): any => {
        return this.searchService.convertFoldToSearchTree?.(data);
    };
}
