import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import { IActivityBarItem, IMenuBarItem } from 'mo/model';
import {
    MENU_FILE_REDO,
    MENU_FILE_UNDO,
    MENU_VIEW_ACTIVITYBAR,
    MENU_VIEW_MENUBAR,
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
} from 'mo/services';
import { ID_SIDE_BAR } from 'mo/common/id';
import { IMonacoService, MonacoService } from 'mo/monaco/monacoService';
import { CommandQuickSideBarViewAction } from 'mo/monaco/quickToggleSideBarAction';

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

    constructor() {
        super();
        this.editorService = container.resolve(EditorService);
        this.menuBarService = container.resolve(MenuBarService);
        this.layoutService = container.resolve(LayoutService);
        this.monacoService = container.resolve(MonacoService);
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
            case ID_SIDE_BAR:
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
        this.layoutService.setActivityBarHidden();
        const {
            activityBar: { hidden },
        } = this.layoutService.getState();
        this.menuBarService.update(MENU_VIEW_ACTIVITYBAR, {
            icon: hidden ? '' : 'check',
        });
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
}
