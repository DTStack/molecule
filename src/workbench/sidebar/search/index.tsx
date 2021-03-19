import { connect } from 'mo/react';
import { searchService } from 'mo/services';
import { searchController } from 'mo/controller';
import SearchPanel from './searchPanel';

const SearchPanelView = connect(searchService, SearchPanel, searchController);
export { SearchPanelView, SearchPanel };
