"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
// const BarB: React.FunctionComponent = (props) => {
//     return (<div>affefefe</div>);
// };
function activate(moleculeCtx) {
    var searchFeat = {
        id: 'search',
        name: 'Search',
        iconName: 'codicon-search',
    };
    moleculeCtx.activityBar.push([searchFeat]);
    moleculeCtx.activityBar.onSelect('folder');
    moleculeCtx.activityBar.onClick = function (e) {
        console.log('moleculeCtx onClick ', e);
    };
    // moleculeCtx.sidebar;
    // moleculeCtx.a.components.push();
    // moleculeCtx.sidebar.components.push();
    // moleculeCtx.activityBar.onSelect = function(key, options) {
    //     moleculeCtx.sidebar.render();
    // };
    // moleculeCtx.sidebar.onSelect = function(key, options) {
    //     moleculeCtx.sidebar.render('fafa', callback);
    // };
    // moleculeCtx.editor.open(title, content, options, callback);
}
exports.activate = activate;
//# sourceMappingURL=index.js.map