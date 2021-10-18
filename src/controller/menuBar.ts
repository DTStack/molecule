import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import { IActivityBarItem, IMenuBarItem } from 'mo/model';
import { MenuBarEvent } from 'mo/model/workbench/menuBar';
import { Controller } from 'mo/react/controller';
import {
    IMenuBarService,
    ILayoutService,
    MenuBarService,
    LayoutService,
    IBuiltinService,
    BuiltinService,
} from 'mo/services';
import { ID_APP, ID_SIDE_BAR } from 'mo/common/id';
import { IMonacoService, MonacoService } from 'mo/monaco/monacoService';
import { CommandQuickSideBarViewAction } from 'mo/monaco/quickToggleSideBarAction';
import { QuickTogglePanelAction } from 'mo/monaco/quickTogglePanelAction';

export interface IMenuBarController extends Partial<Controller> {
    onSelect?: (key: string, item?: IActivityBarItem) => void;
    onClick: (event: React.MouseEvent<any, any>, item: IMenuBarItem) => void;
    updateFocusinEle?: (ele: HTMLElement | null) => void;
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
    private readonly builtinService: IBuiltinService;
    private focusinEle: HTMLElement | null = null;

    private automation = {};

    constructor() {
        super();
        this.menuBarService = container.resolve(MenuBarService);
        this.layoutService = container.resolve(LayoutService);
        this.monacoService = container.resolve(MonacoService);
        this.builtinService = container.resolve(BuiltinService);
    }

    public initView() {
        const { builtInMenuBarData } = this.builtinService.getModules();
        const {
            ACTION_QUICK_CREATE_FILE,
            ACTION_QUICK_UNDO,
            ACTION_QUICK_REDO,
            ACTION_QUICK_SELECT_ALL,
            ACTION_QUICK_COPY_LINE_UP,
            MENU_VIEW_ACTIVITYBAR,
            MENU_VIEW_MENUBAR,
            MENU_VIEW_STATUSBAR,
            MENU_QUICK_COMMAND,
            MENU_VIEW_PANEL,
        } = this.builtinService.getConstants();
        if (builtInMenuBarData) {
            this.menuBarService.setMenus(builtInMenuBarData);
        }
        ([
            [ACTION_QUICK_CREATE_FILE, () => this.createFile()],
            [ACTION_QUICK_UNDO, () => this.undo()],
            [ACTION_QUICK_REDO, () => this.redo()],
            [ACTION_QUICK_SELECT_ALL, () => this.selectAll()],
            [ACTION_QUICK_COPY_LINE_UP, () => this.copyLineUp()],
            [MENU_VIEW_ACTIVITYBAR, () => this.updateActivityBar()],
            [MENU_VIEW_MENUBAR, () => this.updateMenuBar()],
            [MENU_VIEW_STATUSBAR, () => this.updateStatusBar()],
            [MENU_QUICK_COMMAND, () => this.gotoQuickCommand()],
            [ID_SIDE_BAR, () => this.updateSideBar()],
            [MENU_VIEW_PANEL, () => this.updatePanel()],
        ] as [string, () => void][]).forEach(([key, value]) => {
            if (key) {
                this.automation[key] = value;
            }
        });
    }

    public updateFocusinEle = (ele: HTMLElement | null) => {
        if (ele?.id == ID_APP) return;
        this.focusinEle = ele;
    };

    public readonly onClick = (event: React.MouseEvent, item: IMenuBarItem) => {
        const menuId = item.id || '';

        /**
         * TODO: Two issues remain to be addressed
         * 1、the default event is executed twice
         * 2、we have no way of knowing whether user-defined events are executed internally
         */
        this.emit(MenuBarEvent.onSelect, menuId);
        this.automation[menuId]?.();
    };

    public createFile = () => {
        const { ACTION_QUICK_CREATE_FILE } = this.builtinService.getConstants();
        if (ACTION_QUICK_CREATE_FILE) {
            this.monacoService.commandService.executeCommand(
                ACTION_QUICK_CREATE_FILE
            );
        }
    };

    public undo = () => {
        const { ACTION_QUICK_UNDO } = this.builtinService.getConstants();
        if (ACTION_QUICK_UNDO) {
            this.monacoService.commandService.executeCommand(
                ACTION_QUICK_UNDO,
                this.focusinEle
            );
        }
    };

    public redo = () => {
        const { ACTION_QUICK_REDO } = this.builtinService.getConstants();
        if (ACTION_QUICK_REDO) {
            this.monacoService.commandService.executeCommand(
                ACTION_QUICK_REDO,
                this.focusinEle
            );
        }
    };

    public gotoQuickCommand = () => {
        const { ACTION_QUICK_COMMAND } = this.builtinService.getConstants();
        if (ACTION_QUICK_COMMAND) {
            this.monacoService.commandService.executeCommand(
                ACTION_QUICK_COMMAND
            );
        }
    };

    public updateActivityBar = () => {
        const hidden = this.layoutService.toggleActivityBarVisibility();
        const { MENU_VIEW_ACTIVITYBAR } = this.builtinService.getConstants();
        if (MENU_VIEW_ACTIVITYBAR) {
            this.menuBarService.update(MENU_VIEW_ACTIVITYBAR, {
                icon: hidden ? '' : 'check',
            });
        }
    };

    public selectAll = () => {
        const { ACTION_QUICK_SELECT_ALL } = this.builtinService.getConstants();
        if (ACTION_QUICK_SELECT_ALL) {
            this.monacoService.commandService.executeCommand(
                ACTION_QUICK_SELECT_ALL,
                this.focusinEle
            );
        }
    };

    public copyLineUp = () => {
        const {
            ACTION_QUICK_COPY_LINE_UP,
        } = this.builtinService.getConstants();
        if (ACTION_QUICK_COPY_LINE_UP) {
            this.monacoService.commandService.executeCommand(
                ACTION_QUICK_COPY_LINE_UP
            );
        }
    };

    public updateMenuBar = () => {
        const hidden = this.layoutService.toggleMenuBarVisibility();
        const { MENU_VIEW_MENUBAR } = this.builtinService.getConstants();
        if (MENU_VIEW_MENUBAR) {
            this.menuBarService.update(MENU_VIEW_MENUBAR, {
                icon: hidden ? '' : 'check',
            });
        }
    };

    public updateStatusBar = () => {
        const hidden = this.layoutService.toggleStatusBarVisibility();
        const { MENU_VIEW_STATUSBAR } = this.builtinService.getConstants();
        if (MENU_VIEW_STATUSBAR) {
            this.menuBarService.update(MENU_VIEW_STATUSBAR, {
                icon: hidden ? '' : 'check',
            });
        }
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
