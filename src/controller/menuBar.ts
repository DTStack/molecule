import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import { IActivityBarItem, IMenuBarItem } from 'mo/model';
import {
    MENU_FILE_REDO,
    MENU_FILE_UNDO,
    MENU_VIEW_ACTIVITYBAR,
    MENU_VIEW_MENUBAR,
    MENU_VIEW_STATUSBAR,
    MENU_VIEW_SIDEBAR,
} from 'mo/model/workbench/menuBar';
import { Controller } from 'mo/react/controller';
import {
    ActivityBarService,
    EditorService,
    IActivityBarService,
    IEditorService,
    IMenuBarService,
    ISidebarService,
    IStatusBarService,
    MenuBarService,
    SidebarService,
    StatusBarService,
} from 'mo/services';

export interface IMenuBarController {
    onSelect?: (key: string, item?: IActivityBarItem) => void;
    onClick: (event: React.MouseEvent<any, any>, item: IMenuBarItem) => void;
}

@singleton()
export class MenuBarController
    extends Controller
    implements IMenuBarController {
    private readonly activityBarService: IActivityBarService;
    private readonly editorService: IEditorService;
    private readonly menuBarService: IMenuBarService;
    private readonly statusBarService: IStatusBarService;
    private readonly sidebarService: ISidebarService;

    constructor() {
        super();
        this.activityBarService = container.resolve(ActivityBarService);
        this.editorService = container.resolve(EditorService);
        this.menuBarService = container.resolve(MenuBarService);
        this.statusBarService = container.resolve(StatusBarService);
        this.sidebarService = container.resolve(SidebarService);
    }

    public readonly onClick = (event: React.MouseEvent, item: IMenuBarItem) => {
        const menuId = item.id;
        switch (menuId) {
            case MENU_FILE_UNDO:
                this.undo();
                break;
            case MENU_FILE_REDO:
                this.redo();
                break;
            case MENU_VIEW_ACTIVITYBAR:
                this.updateActivityBar();
                break;
            case MENU_VIEW_MENUBAR:
                this.updateMenuBar();
                break;
            case MENU_VIEW_STATUSBAR:
                this.updateStatusBar();
                break;
            case MENU_VIEW_SIDEBAR:
                this.updateSideBar();
                break;
        }
    };

    public undo = () => {
        this.editorService.editorInstance?.getAction('undo').run();
    };

    public redo = () => {
        this.editorService.editorInstance?.getAction('redo').run();
    };

    public updateActivityBar = () => {
        this.activityBarService.showHide();
        const { hidden } = this.activityBarService.getState();
        this.menuBarService.update(MENU_VIEW_ACTIVITYBAR, {
            icon: hidden ? '' : 'check',
        });
    };

    public updateMenuBar = () => {
        this.menuBarService.showHide();
        const { hidden } = this.menuBarService.getState();
        this.menuBarService.update(MENU_VIEW_MENUBAR, {
            icon: hidden ? '' : 'check',
        });
    };

    public updateStatusBar = () => {
        this.statusBarService.showHide();
        const { hidden } = this.statusBarService.getState();
        this.menuBarService.update(MENU_VIEW_STATUSBAR, {
            icon: hidden ? '' : 'check',
        });
    };

    public updateSideBar = () => {
        this.sidebarService.showHide();
        const { hidden } = this.sidebarService.getState();
        this.menuBarService.update(MENU_VIEW_SIDEBAR, {
            icon: hidden ? '' : 'check',
        });
    };
}
