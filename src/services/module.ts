import * as controller from 'mo/controllers';
import { BaseController } from 'mo/glue';
import type { Factory } from 'mo/types';

interface BaseControllerCtor {
    new (...args: any[]): BaseController;
}

export class ModuleService {
    public modules = new Map<string, Factory | null>();
    public controllers = new Map<string, BaseControllerCtor>();
    constructor() {
        this.modules = new Map<string, Factory>([
            ['layout', import('../client/slots/workbench')],
            ['activityBar', import('../client/slots/activityBar')],
            ['auxiliaryBar', import('../client/slots/auxiliaryBar')],
            ['contextMenu', import('../client/slots/contextMenu')],
            ['editor', import('../client/slots/editor')],
            ['editorTree', import('../client/slots/editorTree')],
            ['explorer', import('../client/slots/explorer')],
            ['folderTree', import('../client/slots/folderTree')],
            ['menuBar', import('../client/slots/menuBar')],
            ['notification', import('../client/slots/notification')],
            ['panel', import('../client/slots/panel')],
            ['search', import('../client/slots/search')],
            ['sidebar', import('../client/slots/sidebar')],
            ['statusBar', import('../client/slots/statusBar')],
        ]);

        this.controllers = new Map<string, BaseControllerCtor>([
            ['activityBar', controller.activityBar.ActivityBarController],
            ['auxiliaryBar', controller.auxiliaryBar.AuxiliaryController],
            ['contextMenu', controller.contextMenu.ContextMenuController],
            ['editor', controller.editor.EditorController],
            ['explorer', controller.explorer.ExplorerController],
            ['editorTree', controller.editorTree.EditorTreeController],
            ['folderTree', controller.folderTree.FolderTreeController],
            ['layout', controller.layout.LayoutController],
            ['menuBar', controller.menuBar.MenuBarController],
            ['notification', controller.notification.NotificationController],
            ['output', controller.output.OutputController],
            ['panel', controller.panel.PanelController],
            ['search', controller.search.SearchController],
            ['settings', controller.settings.SettingsController],
            ['sidebar', controller.sidebar.SidebarController],
            ['statusBar', controller.statusBar.StatusBarController],
        ]);
    }

    public update(key: string, token: Factory | null) {
        this.modules.set(key, token);
    }
}
