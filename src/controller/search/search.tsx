import { Controller } from 'mo/react/controller';
import { singleton } from 'tsyringe';
import { activityBarService, IActivityBarItem, sidebarService } from 'mo';
import * as React from 'react';
import { SearchPanelView } from 'mo/workbench/sidebar/search';
// TODO: 自依赖问题 connect 失效，暂时手动引入 Controller 往 View 层传递
import { searchController } from 'mo/controller';
export interface ISearchController {}

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
}
