import { Controller } from 'mo/react/controller';
import { singleton } from 'tsyringe';
import { activityBarService, IActivityBarItem, sidebarService } from 'mo';
import * as React from 'react';
import { SearchPanelView } from 'mo/workbench/sidebar/search';
import { searchController } from 'mo/controller';
import { searchService } from 'mo';
export interface ISearchController {
    setSearchValue?: (value?: string) => void;
    convertFoldToSearchTree?: <T = any>(data?: T[]) => T[];
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

    public readonly convertFoldToSearchTree = (data): any => {
        return searchService.convertFoldToSearchTree?.(data);
    };
}
