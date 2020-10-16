"use strict";
/**
 * Default extensions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultExtensions = void 0;
var ExploreBarPkg = require("./explore/package.json");
var SearchBarPkg = require("./search/package.json");
var requireContext = require.context('./');
var ExploreBar = ExploreBarPkg; // require('./explore/package.json');
ExploreBar.activate = require('./explore/src/index').activate;
var SearchBar = SearchBarPkg; // require('./search/package.json');
SearchBar.activate = require('./search/src/index').activate;
exports.defaultExtensions = {
    location: requireContext,
    extensions: [
        ExploreBar,
        SearchBar,
    ],
};
//# sourceMappingURL=index.js.map