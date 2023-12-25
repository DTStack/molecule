import React from 'react';
import ViewSuspense from 'mo/client/components/viewSuspense';
import { BaseController } from 'mo/glue';
import { SearchEvent } from 'mo/models/search';
import { ActivityBarService } from 'mo/services/activityBar';
import { BuiltinService } from 'mo/services/builtin';
import { ContextMenuService } from 'mo/services/contextMenu';
import { SidebarService } from 'mo/services/sidebar';
import type { SearchResultItem } from 'mo/types';
import { inject, injectable } from 'tsyringe';

export interface ISearchController extends BaseController {
    onChange?: (value: string) => void;
    onSearch?: (value: string) => void;
    onSelect?: (treeNode: SearchResultItem) => void;
}

@injectable()
export class SearchController extends BaseController implements ISearchController {
    constructor(
        @inject('builtin') private builtin: BuiltinService,
        @inject('sidebar') private sidebar: SidebarService,
        @inject('activityBar') private activitybar: ActivityBarService,
        @inject('contextMenu') private contextMenu: ContextMenuService
    ) {
        super();
        this.initView();
    }

    private initView() {
        const { SEARCH, SEARCH_TOOLBAR, SEARCH_TOOLBAR_COLLAPSE, SEARCH_TOOLBAR_VIEW_AS_TREE } =
            this.builtin.getModules();
        if (SEARCH) {
            this.activitybar.add(SEARCH);
            this.sidebar.add({
                ...SEARCH,
                toolbar: [...SEARCH_TOOLBAR, SEARCH_TOOLBAR_VIEW_AS_TREE, SEARCH_TOOLBAR_COLLAPSE],
                render: () => React.createElement(ViewSuspense, { key: 'search', token: 'search' }),
            });
        }
    }

    public onChange = (value: string) => {
        this.emit(SearchEvent.onChange, value);
    };

    public onSearch = (value: string) => {
        this.emit(SearchEvent.onSearch, value);
    };

    public onSelect = (treeNode: SearchResultItem) => {
        this.emit(SearchEvent.onSelect, treeNode);
    };
}
