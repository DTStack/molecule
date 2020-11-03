import { ExtendActivityBar } from './activityBar';
import { ExtendExplore } from './explore';
import { ExtendSearch } from './search';
const Themes = require('./theme-defaults/package.json');

/**
 * Default extensions
 */
export const defaultExtensions = [
    ExtendActivityBar,
    ExtendExplore,
    ExtendSearch,
    Themes,
];
