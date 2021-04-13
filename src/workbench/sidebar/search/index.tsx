import { connect } from 'mo/react';
import { searchService, folderTreeService } from 'mo/services';
import { searchController } from 'mo/controller';
import SearchPanel from './searchPanel';

const SearchPanelView = connect(
    {
        search: searchService,
        folderTree: folderTreeService,
    },
    SearchPanel,
    searchController
);
export { SearchPanelView, SearchPanel };
