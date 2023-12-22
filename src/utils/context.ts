import * as controller from 'mo/controllers';

// prettier-ignore
export function getControllers(this: { resolve: Function }) {
    const activityBar = this.resolve(controller.activityBar.ActivityBarController);
    const contextMenu = this.resolve(controller.contextMenu.ContextMenuController);
    const editor = this.resolve(controller.editor.EditorController);
    const explorer = this.resolve(controller.explorer.ExplorerController);
    const editorTree = this.resolve(controller.editorTree.EditorTreeController);
    const folderTree = this.resolve(controller.folderTree.FolderTreeController);
    const layout = this.resolve(controller.layout.LayoutController);
    const menuBar = this.resolve(controller.menuBar.MenuBarController);
    const notification = this.resolve(controller.notification.NotificationController);
    const output = this.resolve(controller.output.OutputController);
    const panel = this.resolve(controller.panel.PanelController);
    const search = this.resolve(controller.search.SearchController);
    const settings = this.resolve(controller.settings.SettingsController);
    const sidebar = this.resolve(controller.sidebar.SidebarController);
    const statusBar = this.resolve(controller.statusBar.StatusBarController);

    return { activityBar, contextMenu, editor, editorTree, explorer, folderTree, layout, menuBar, notification, output, panel, search, settings, sidebar, statusBar };
}
