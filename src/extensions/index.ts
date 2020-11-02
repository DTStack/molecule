import { IExtension, IExtensionEntry } from 'mo/model/extension';
import * as ExploreBarPkg from './explore/package.json';
import * as SearchBarPkg from './search/package.json';
import * as ActivityBarPkg from './activityBar/package.json';

/**
 * Default extensions
 */

const requireContext = require.context('./');

const ExploreBar: IExtension = ExploreBarPkg as any; // require('./explore/package.json');
ExploreBar.activate = require('./explore/src/index').activate;

const ActivityBar: IExtension = ActivityBarPkg as any; // require('./explore/package.json');
ActivityBar.activate = require('./activityBar/src/index').activate;

const SearchBar: IExtension = SearchBarPkg as any; // require('./search/package.json');
SearchBar.activate = require('./search/src/index').activate;

const Themes = require('./theme-defaults/package.json');

export const defaultExtensions: IExtensionEntry = {
    location: requireContext,
    extensions: [
        ExploreBar,
        ActivityBar,
        SearchBar,
        Themes,
    ],
};
