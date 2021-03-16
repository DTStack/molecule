import { IActivityBarItem, IMenuBarItem } from 'mo/model';
import {
    EDITOR_MENU_FILE_UNDO,
    EDITOR_MENU_FILE_REDO,
} from 'mo/model/workbench/editor';
import { Controller } from 'mo/react/controller';
import { editorService } from 'mo/services';
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
            case EDITOR_MENU_FILE_UNDO:
                this.undo();
                break;
            case EDITOR_MENU_FILE_REDO:
                this.redo();
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
