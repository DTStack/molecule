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
    activityBarService,
    editorService,
    menuBarService,
    statusBarService,
    sideBarService,
} from 'mo/services';
import { singleton } from 'tsyringe';

export interface IMenuBarController {
    onSelect?: (key: string, item?: IActivityBarItem) => void;
    onClick: (event: React.MouseEvent<any, any>, item: IMenuBarItem) => void;
}

@singleton()
export class MenuBarController
    extends Controller
    implements IMenuBarController {
    constructor() {
        super();
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
        editorService.editorInstance?.getAction('undo').run();
    };

    public redo = () => {
        editorService.editorInstance?.getAction('redo').run();
    };

    public updateActivityBar = () => {
        activityBarService.showHide();
        const { hidden } = activityBarService.getState();
        menuBarService.update(MENU_VIEW_ACTIVITYBAR, {
            icon: hidden ? '' : 'check',
        });
    };

    public updateMenuBar = () => {
        menuBarService.showHide();
        const { hidden } = menuBarService.getState();
        menuBarService.update(MENU_VIEW_MENUBAR, {
            icon: hidden ? '' : 'check',
        });
    };

    public updateStatusBar = () => {
        statusBarService.showHide();
        const { hidden } = statusBarService.getState();
        menuBarService.update(MENU_VIEW_STATUSBAR, {
            icon: hidden ? '' : 'check',
        });
    };

    public updateSideBar = () => {
        sideBarService.showHide();
        const { hidden } = sideBarService.getState();
        menuBarService.update(MENU_VIEW_SIDEBAR, {
            icon: hidden ? '' : 'check',
        });
    };
}
