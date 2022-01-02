export { BuiltInLocales, BuiltInDefault } from 'mo/extensions/locales-defaults';
/**
 * The Localization configuration event definition
 */
export enum LocalizationEvent {
    /**
     * The Localization changed
     */
    OnChange = 'localization.onchange',
}

export type LocaleSourceIdType = {
    'contextmenu.addFolderToSpace': string;
    'contextmenu.delete': string;
    'contextmenu.download': string;
    'contextmenu.findInSpace': string;
    'contextmenu.newFile': string;
    'contextmenu.newFolder': string;
    'contextmenu.openToTheSide': string;
    'contextmenu.removeFolder': string;
    'contextmenu.rename': string;
    'editor.actions.splitRight': string;
    'editor.close': string;
    'editor.closeAll': string;
    'editor.closeOthers': string;
    'editor.closeSaved': string;
    'editor.closeToLeft': string;
    'editor.closeToRight': string;
    'editor.showOpenEditors': string;
    'menu.appearance': string;
    'menu.colorTheme': string;
    'menu.commandPalette': string;
    'menu.copyLineUp': string;
    'menu.edit': string;
    'menu.file': string;
    'menu.help': string;
    'menu.menuBarHorizontal': string;
    'menu.menuBarVertical': string;
    'menu.newFile': string;
    'menu.newFolder': string;
    'menu.open': string;
    'menu.openView': string;
    'menu.redo': string;
    'menu.run': string;
    'menu.selectAll': string;
    'menu.selection': string;
    'menu.settings': string;
    'menu.showActivityBar': string;
    'menu.showMenuBar': string;
    'menu.showPanel.title': string;
    'menu.showPanel': string;
    'menu.showSideBar.label': string;
    'menu.showSideBar': string;
    'menu.showStatusBar': string;
    'menu.undo': string;
    'menu.view': string;
    menubar: string;
    'message.noResult': string;
    'message.noFolderButEditorsHelp': string;
    'message.searchMaxResultsWarning': string;
    'notification.clear': string;
    'notification.clearAll': string;
    'notification.hideAll': string;
    'notification.title.no': string;
    'notification.title': string;
    'panel.output.title': string;
    'panel.problems.empty': string;
    'panel.problems.title': string;
    'panel.toolbox.closePanel': string;
    'panel.toolbox.maximize': string;
    'panel.toolbox.restoreSize': string;
    'search.matchCase': string;
    'search.matchWholeWord': string;
    'search.preserveCase': string;
    'search.replaceAll': string;
    'search.toolbar.refresh': string;
    'search.toolbar.clearAll': string;
    'search.toolbar.collapseAll': string;
    'search.useRegularExpression': string;
    'searchView.noResultsFound': string;
    'sidebar.explore.actionDesc': string;
    'sidebar.explore.closeAllEditors': string;
    'sidebar.explore.collapseFolders': string;
    'sidebar.explore.folders': string;
    'sidebar.explore.openEditor.group': string;
    'sidebar.explore.openEditor': string;
    'sidebar.explore.openFolder': string;
    'sidebar.explore.outline': string;
    'sidebar.explore.outlineMore': string;
    'sidebar.explore.refresh': string;
    'sidebar.explore.saveALL': string;
    'sidebar.explore.title': string;
    'sidebar.explore.toggleVertical': string;
    'sidebar.replace.placement': string;
    'sidebar.search.title': string;
    'sidebar.search.placeHolder': string;
    'sidebar.search.replace.placeHolder': string;
    'toolbar.clearAll': string;
    'toolbar.collapseAll': string;
    'toolbar.refresh': string;
};

export interface ILocale {
    id: string;
    name: string;
    description?: string;
    /**
     * Whether inherit an exist locale, if it's exist, merge the parent locale
     */
    inherit?: string;
    source: Map<LocaleSourceIdType | string, string>;
}
