import { IMenuItem } from 'mo/components/menu';
import {
    ActivityBarEvent,
    CONTEXT_MENU_COLOR_THEME,
    CONTEXT_MENU_COMMAND_PALETTE,
    CONTEXT_MENU_SETTINGS,
    IActivityBarItem,
} from 'mo/model';
import { Controller } from 'mo/react/controller';
import { container, singleton } from 'tsyringe';
import { SelectColorThemeAction } from 'mo/monaco/selectColorThemeAction';
import {
    ActivityBarService,
    EditorService,
    IActivityBarService,
    IEditorService,
} from 'mo/services';
export interface IActivityBarController {
    onSelect?: (key: string, item?: IActivityBarItem) => void;
    onClick?: (event: React.MouseEvent, item: IActivityBarItem) => void;
    onContextMenuClick?: (
        e: React.MouseEvent,
        item: IMenuItem | undefined
    ) => void;
}

@singleton()
export class ActivityBarController
    extends Controller
    implements IActivityBarController {
    private readonly activityBarService: IActivityBarService;
    private readonly editorService: IEditorService;
    constructor() {
        super();
        this.activityBarService = container.resolve(ActivityBarService);
        this.editorService = container.resolve(EditorService);
    }

    public readonly onSelect = (
        key: string,
        item?: IActivityBarItem | undefined
    ) => {
        if (item && item.type !== 'global') {
            this.activityBarService.setState({
                selected: key,
            });
        }
        this.emit(ActivityBarEvent.Selected, key, item);
    };

    public readonly onClick = (
        event: React.MouseEvent,
        item: IActivityBarItem
    ) => {
        this.emit(ActivityBarEvent.OnClick, event, item);
    };

    private gotoQuickCommand() {
        const actionId = 'editor.action.quickCommand';
        this.editorService.editorInstance?.focus(); // The QuickCommand action requires the editor focusing
        this.editorService.editorInstance?.getAction(actionId).run();
    }

    private onSelectColorTheme = () => {
        this.editorService.editorInstance?.focus(); // The QuickCommand action requires the editor focusing
        this.editorService.editorInstance
            ?.getAction(SelectColorThemeAction.ID)
            .run();
    };

    private gotoSettings() {
        this.editorService.open({
            id: 'Settings',
            name: 'Settings',
        });
    }

    public readonly onContextMenuClick = (
        e: React.MouseEvent,
        item: IMenuItem | undefined
    ) => {
        const contextMenu = item?.id;
        switch (contextMenu) {
            case CONTEXT_MENU_COMMAND_PALETTE.id: {
                this.gotoQuickCommand();
                break;
            }
            case CONTEXT_MENU_SETTINGS.id: {
                this.gotoSettings();
                break;
            }
            case CONTEXT_MENU_COLOR_THEME.id: {
                this.onSelectColorTheme();
                break;
            }
            default: {
                // Do Something()
            }
        }
    };
}
