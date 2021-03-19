import { Controller } from 'mo/react/controller';
import { singleton } from 'tsyringe';
import { activityBarService, IActivityBarItem, sidebarService } from 'mo';
import * as React from 'react';
import { SearchPanelView } from 'mo/workbench/sidebar/search';
import { IActionBarItem } from 'mo/components/actionBar';
import { searchController } from 'mo/controller';
import { searchService } from 'mo';
import {
    SEARCH_CASE_SENSITIVE_COMMAND_ID,
    SEARCH_WHOLE_WORD_COMMAND_ID,
    SEARCH_REGULAR_EXPRESSION_COMMAND_ID,
    SEARCH_PRESERVE_CASE_COMMAND_ID,
    SEARCH_REPLACE_ALL_COMMAND_ID,
} from 'mo/model/workbench/search';
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
    constructor() {
        super();
        this.initView();
    }

    private initView() {
        const searchSidePane = {
            id: 'searchPane',
            title: 'SEARCH',
            render() {
                return <SearchPanelView {...searchController} />;
            },
        };

        sidebarService.push(searchSidePane);

        const searchActivityItem = {
            id: 'search',
            name: 'Search',
            iconName: 'codicon-search',
        };

        activityBarService.addBar(searchActivityItem);

        activityBarService.onSelect((e, item: IActivityBarItem) => {
            if (item.id === searchActivityItem.id) {
                sidebarService.setState({
                    current: searchSidePane.id,
                });
            }
        });
    }

    public readonly setSearchValue = (value?: string) => {
        searchService.setSearchValue?.(value);
    };

    public readonly setReplaceValue = (value?: string) => {
        searchService.setReplaceValue?.(value);
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
        searchService.toggleCaseSensitive?.(addonId);
    };

    public readonly onToggleWholeWord = (addonId: string) => {
        searchService.toggleWholeWord?.(addonId);
    };

    public readonly onToggleRegex = (addonId: string) => {
        searchService.toggleRegex?.(addonId);
    };

    public readonly onTogglePreserveCase = (addonId: string) => {
        searchService.togglePreserveCase?.(addonId);
    };

    public readonly onToggleRepalceAll = (addonId: string) => {
        searchService.toggleReplaceAll?.(addonId);
    };

    public readonly convertFoldToSearchTree = (data): any => {
        return searchService.convertFoldToSearchTree?.(data);
    };
}
