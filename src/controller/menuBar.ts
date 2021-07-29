import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import {
    IActivityBarItem,
    IMenuBarItem,
    FileTypes,
    FolderTreeEvent,
} from 'mo/model';
import {
    ACTION_QUICK_SELECT_ALL,
    ACTION_QUICK_COPY_LINE_UP,
} from 'mo/model/keybinding';
import {
    MENU_FILE_CREATE,
    MENU_FILE_REDO,
    MENU_FILE_UNDO,
    MENU_QUICK_COMMAND,
    MENU_VIEW_ACTIVITYBAR,
    MENU_VIEW_MENUBAR,
    MENU_VIEW_PANEL,
    MENU_VIEW_STATUSBAR,
} from 'mo/model/workbench/menuBar';
import { Controller } from 'mo/react/controller';
import {
    EditorService,
    IEditorService,
    IMenuBarService,
    ILayoutService,
    MenuBarService,
    LayoutService,
    FolderTreeService,
} from 'mo/services';
import { ID_SIDE_BAR } from 'mo/common/id';
import { IMonacoService, MonacoService } from 'mo/monaco/monacoService';
import { CommandQuickSideBarViewAction } from 'mo/monaco/quickToggleSideBarAction';
import { QuickSelectAllAction } from 'mo/monaco/quickSelectAllAction';
import { QuickCopyLineUp } from 'mo/monaco/quickCopyLineUp';

import { CommandQuickAccessViewAction } from 'mo/monaco/quickAccessViewAction';
import { QuickTogglePanelAction } from 'mo/monaco/quickTogglePanelAction';

export interface IMenuBarController {
    onSelect?: (key: string, item?: IActivityBarItem) => void;
    onClick: (event: React.MouseEvent<any, any>, item: IMenuBarItem) => void;
    updateStatusBar?: () => void;
    updateMenuBar?: () => void;
    updateActivityBar?: () => void;
    updateSideBar?: () => void;
}

@singleton()
export class MenuBarController
    extends Controller
    implements IMenuBarController {
    private readonly editorService: IEditorService;
    private readonly menuBarService: IMenuBarService;
    private readonly layoutService: ILayoutService;
    private readonly monacoService: IMonacoService;
    private readonly folderTreeService: FolderTreeService;

    constructor() {
        super();
        this.editorService = container.resolve(EditorService);
        this.menuBarService = container.resolve(MenuBarService);
        this.layoutService = container.resolve(LayoutService);
        this.monacoService = container.resolve(MonacoService);
        this.folderTreeService = container.resolve(FolderTreeService);
    }

    public readonly onClick = (event: React.MouseEvent, item: IMenuBarItem) => {
        const menuId = item.id;
        switch (menuId) {
            case MENU_FILE_CREATE:
                this.createFileOrFolder(FileTypes.File);
            case MENU_FILE_UNDO:
                this.undo();
                break;
            case MENU_FILE_REDO:
                this.redo();
                break;
            case ACTION_QUICK_SELECT_ALL:
                this.selectAll();
                break;
            case ACTION_QUICK_COPY_LINE_UP:
                this.copyLineUp();
            case MENU_VIEW_ACTIVITYBAR:
                this.updateActivityBar();
                break;
            case MENU_VIEW_MENUBAR:
                this.updateMenuBar();
                break;
            case MENU_VIEW_STATUSBAR:
                this.updateStatusBar();
                break;
            case MENU_QUICK_COMMAND:
                this.gotoQuickCommand();
                break;
            case ID_SIDE_BAR:
                this.updateSideBar();
                break;
            case MENU_VIEW_PANEL:
                this.updatePanel();
                break;
        }
    };

    public createFileOrFolder = (type: keyof typeof FileTypes) => {
        const folderTreeState = this.folderTreeService.getState();
        const { data, current } = folderTreeState?.folderTree || {};
        // The current selected node id or the first root node
        const nodeId = current?.id || data?.[0]?.id;
        // emit onNewFile or onNewFolder event
        this.emit(FolderTreeEvent[`onNew${type}`], nodeId);
    };

    public undo = () => {
        this.editorService.editorInstance?.getAction('undo').run();
    };

    public redo = () => {
        this.editorService.editorInstance?.getAction('redo').run();
    };

    public gotoQuickCommand = () => {
        this.monacoService.commandService.executeCommand(
            CommandQuickAccessViewAction.ID
        );
    };

    public updateActivityBar = () => {
        this.layoutService.setActivityBarHidden();
        const {
            activityBar: { hidden },
        } = this.layoutService.getState();
        this.menuBarService.update(MENU_VIEW_ACTIVITYBAR, {
            icon: hidden ? '' : 'check',
        });
    };

    public selectAll = () => {
        this.monacoService.commandService.executeCommand(
            QuickSelectAllAction.ID
        );
    };

    public copyLineUp = () => {
        this.monacoService.commandService.executeCommand(QuickCopyLineUp.ID);
    };

    public updateMenuBar = () => {
        this.layoutService.setMenuBarHidden();
        const {
            menuBar: { hidden },
        } = this.layoutService.getState();
        this.menuBarService.update(MENU_VIEW_MENUBAR, {
            icon: hidden ? '' : 'check',
        });
    };

    public updateStatusBar = () => {
        this.layoutService.setStatusBarHidden();
        const {
            statusBar: { hidden },
        } = this.layoutService.getState();
        this.menuBarService.update(MENU_VIEW_STATUSBAR, {
            icon: hidden ? '' : 'check',
        });
    };

    public updateSideBar = () => {
        this.monacoService.commandService.executeCommand(
            CommandQuickSideBarViewAction.ID
        );
    };

    private updatePanel = () => {
        this.monacoService.commandService.executeCommand(
            QuickTogglePanelAction.ID
        );
    };
}
