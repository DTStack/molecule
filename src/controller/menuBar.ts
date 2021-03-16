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
                activityBarService.showHide();
                break;
            case MENU_VIEW_MENUBAR:
                menuBarService.showHide();
                break;
            case MENU_VIEW_STATUSBAR:
                statusBarService.showHide();
                break;
            case MENU_VIEW_SIDEBAR:
                sideBarService.showHide();
                break;
        }
    };

    public undo = () => {
        editorService.editorInstance?.getAction('undo').run();
    };

    public redo = () => {
        editorService.editorInstance?.getAction('redo').run();
    };
}
