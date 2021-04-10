import { connect } from 'mo/react';
import SearchPanel from './searchPanel';
import { FolderTreeService, SearchService } from 'mo/services';
import { container } from 'tsyringe';
import { SearchController } from 'mo/controller/search/search';

const searchService = container.resolve(SearchService);
const folderTreeService = container.resolve(FolderTreeService);
const searchController = container.resolve(SearchController);

const SearchPanelView = connect(
    {
        search: searchService,
        folderTree: folderTreeService,
    },
    SearchPanel,
    searchController
);
export { SearchPanelView, SearchPanel };
