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
import { MenuBarEvent } from 'mo/model/workbench/menuBar';
import { Controller } from 'mo/react/controller';
import {
    IMenuBarService,
    ILayoutService,
    MenuBarService,
    LayoutService,
} from 'mo/services';
import { ID_APP, ID_SIDE_BAR } from 'mo/common/id';
import { IMonacoService, MonacoService } from 'mo/monaco/monacoService';
import { CommandQuickSideBarViewAction } from 'mo/monaco/quickToggleSideBarAction';
import { QuickTogglePanelAction } from 'mo/monaco/quickTogglePanelAction';

export interface IMenuBarController {
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
    private focusinEle: HTMLElement | null = null;

    private automation = {
        [ACTION_QUICK_CREATE_FILE]: () => this.createFile(),
        [ACTION_QUICK_UNDO]: () => this.undo(),
        [ACTION_QUICK_REDO]: () => this.redo(),
        [ACTION_QUICK_SELECT_ALL]: () => this.selectAll(),
        [ACTION_QUICK_COPY_LINE_UP]: () => this.copyLineUp(),
        [MENU_VIEW_ACTIVITYBAR]: () => this.updateActivityBar(),
        [MENU_VIEW_MENUBAR]: () => this.updateMenuBar(),
        [MENU_VIEW_STATUSBAR]: () => this.updateStatusBar(),
        [MENU_QUICK_COMMAND]: () => this.gotoQuickCommand(),
        [ID_SIDE_BAR]: () => this.updateSideBar(),
        [MENU_VIEW_PANEL]: () => this.updatePanel(),
    };

    constructor() {
        super();
        this.menuBarService = container.resolve(MenuBarService);
        this.layoutService = container.resolve(LayoutService);
        this.monacoService = container.resolve(MonacoService);
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
        this.monacoService.commandService.executeCommand(
            ACTION_QUICK_CREATE_FILE
        );
    };

    public undo = () => {
        this.monacoService.commandService.executeCommand(
            ACTION_QUICK_UNDO,
            this.focusinEle
        );
    };

    public redo = () => {
        this.monacoService.commandService.executeCommand(
            ACTION_QUICK_REDO,
            this.focusinEle
        );
    };

    public gotoQuickCommand = () => {
        this.monacoService.commandService.executeCommand(ACTION_QUICK_COMMAND);
    };

    public updateActivityBar = () => {
        const hidden = this.layoutService.toggleActivityBarVisibility();
        this.menuBarService.update(MENU_VIEW_ACTIVITYBAR, {
            icon: hidden ? '' : 'check',
        });
    };

    public selectAll = () => {
        this.monacoService.commandService.executeCommand(
            ACTION_QUICK_SELECT_ALL,
            this.focusinEle
        );
    };

    public copyLineUp = () => {
        this.monacoService.commandService.executeCommand(
            ACTION_QUICK_COPY_LINE_UP
        );
    };

    public updateMenuBar = () => {
        const hidden = this.layoutService.toggleMenuBarVisibility();
        this.menuBarService.update(MENU_VIEW_MENUBAR, {
            icon: hidden ? '' : 'check',
        });
    };

    public updateStatusBar = () => {
        const hidden = this.layoutService.toggleStatusBarVisibility();
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
