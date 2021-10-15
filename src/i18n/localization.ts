export {
    BuiltInLocales,
    BuiltInDefault,
    BuiltInId,
} from 'mo/extensions/locales-defaults';
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
    'menu.file': string;
    'menu.settings': string;
    'menu.colorTheme': string;
    'menu.newFile': string;
    'menu.newFolder': string;
    'menu.open': string;
    'menu.edit': string;
    'menu.undo': string;
    'menu.redo': string;
    'menu.selection': string;
    'menu.selectAll': string;
    'menu.copyLineUp': string;
    'menu.view': string;
    'menu.commandPalette': string;
    'menu.openView': string;
    'menu.appearance': string;
    'menu.showMenuBar': string;
    'menu.showSideBar': string;
    'menu.showSideBar.label': string;
    'menu.showStatusBar': string;
    'menu.showActivityBar': string;
    'menu.showPanel': string;
    'menu.showPanel.title': string;
    'menu.run': string;
    'menu.help': string;
    'sidebar.explore.title': string;
    'sidebar.explore.folders': string;
    'sidebar.explore.openEditor': string;
    'sidebar.explore.openEditor.group': string;
    'sidebar.explore.outline': string;
    'sidebar.search.title': string;
    'sidebar.replace.placement': string;
    'sidebar.explore.refresh': string;
    'sidebar.explore.collapseFolders': string;
    'sidebar.explore.toggleVertical': string;
    'sidebar.explore.saveAll': string;
    'sidebar.explore.actionDesc': string;
    'sidebar.explore.outlineMore': string;
    'toolbar.refresh': string;
    'toolbar.clearAll': string;
    'toolbar.collapseAll': string;
    'search.matchCase': string;
    'search.matchWholeWord': string;
    'search.useRegularExpression': string;
    'search.preserveCase': string;
    'search.replaceAll': string;
    'panel.output.title': string;
    'panel.toolbox.closePanel': string;
    'panel.toolbox.maximize': string;
    'panel.toolbox.restoreSize': string;
    'panel.problems.title': string;
    'panel.problems.empty': string;
    'notification.title': string;
    'notification.title.no': string;
    'editor.closeToRight': string;
    'editor.closeToLeft': string;
    'editor.closeAll': string;
    'editor.closeSaved': string;
    'editor.closeOthers': string;
    'editor.close': string;
    'editor.actions.splitRight': string;
    'editor.showOpenEditors': string;
    'contextmenu.rename': string;
    'contextmenu.delete': string;
    'contextmenu.newFile': string;
    'contextmenu.newFolder': string;
    'contextmenu.removeFolder': string;
    'contextmenu.openToTheSide': string;
    'contextmenu.addFolderToSpace': string;
    'contextmenu.findInSpace': string;
    'contextmenu.download': string;
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
