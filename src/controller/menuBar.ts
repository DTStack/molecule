import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import { IActivityBarItem, IMenuBarItem } from 'mo/model';
import {
    ACTION_QUICK_SELECT_ALL,
    ACTION_QUICK_COPY_LINE_UP,
    ACTION_QUICK_COMMAND,
    ACTION_QUICK_UNDO,
    ACTION_QUICK_REDO,
    ACTION_QUICK_CREATE_FILE,
} from 'mo/model/keybinding';
import {
    MENU_QUICK_COMMAND,
    MENU_VIEW_ACTIVITYBAR,
    MENU_VIEW_MENUBAR,
    MENU_VIEW_PANEL,
    MENU_VIEW_STATUSBAR,
} from 'mo/model/workbench/menuBar';
import { Controller } from 'mo/react/controller';
import {
    IMenuBarService,
    ILayoutService,
    MenuBarService,
    LayoutService,
} from 'mo/services';
import { ID_SIDE_BAR } from 'mo/common/id';
import { IMonacoService, MonacoService } from 'mo/monaco/monacoService';
import { CommandQuickSideBarViewAction } from 'mo/monaco/quickToggleSideBarAction';
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
    private readonly menuBarService: IMenuBarService;
    private readonly layoutService: ILayoutService;
    private readonly monacoService: IMonacoService;

    constructor() {
        super();
        this.menuBarService = container.resolve(MenuBarService);
        this.layoutService = container.resolve(LayoutService);
        this.monacoService = container.resolve(MonacoService);
    }

    public readonly onClick = (event: React.MouseEvent, item: IMenuBarItem) => {
        const menuId = item.id;
        switch (menuId) {
            case ACTION_QUICK_CREATE_FILE:
                this.createFile();
            case ACTION_QUICK_UNDO:
                this.undo();
                break;
            case ACTION_QUICK_REDO:
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

    public createFile = () => {
        this.monacoService.commandService.executeCommand(
            ACTION_QUICK_CREATE_FILE
        );
    };

    public undo = () => {
        this.monacoService.commandService.executeCommand(ACTION_QUICK_UNDO);
    };

    public redo = () => {
        this.monacoService.commandService.executeCommand(ACTION_QUICK_REDO);
    };

    public gotoQuickCommand = () => {
        this.monacoService.commandService.executeCommand(ACTION_QUICK_COMMAND);
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
            ACTION_QUICK_SELECT_ALL
        );
    };

    public copyLineUp = () => {
        this.monacoService.commandService.executeCommand(
            ACTION_QUICK_COPY_LINE_UP
        );
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
