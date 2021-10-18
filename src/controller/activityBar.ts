import 'reflect-metadata';
import { Controller } from 'mo/react/controller';
import { container, singleton } from 'tsyringe';
import { MenuBarController, IMenuBarController } from 'mo/controller';
import { IMenuItemProps } from 'mo/components/menu';
import {
    ActivityBarEvent,
    CONTEXT_MENU_MENU,
    CONTEXT_MENU_EXPLORER,
    CONTEXT_MENU_SEARCH,
    CONTEXT_MENU_HIDE,
    IActivityBarItem,
} from 'mo/model';
import { SelectColorThemeAction } from 'mo/monaco/selectColorThemeAction';

import {
    ActivityBarService,
    BuiltinService,
    IActivityBarService,
    IBuiltinService,
    ISettingsService,
    SettingsService,
} from 'mo/services';
import { CommandQuickAccessViewAction } from 'mo/monaco/quickAccessViewAction';
import { IMonacoService, MonacoService } from 'mo/monaco/monacoService';

export interface IActivityBarController extends Partial<Controller> {
    /**
     * Called when activity bar item is clicked
     */
    onClick?: (selectedKey: string, selectedNode: IActivityBarItem) => void;
    /**
     * Called when activity bar item which is not global is changed
     */
    onChange?: (prevSelected?: string, nextSelected?: string) => void;
    onContextMenuClick?: (
        e: React.MouseEvent,
        item: IMenuItemProps | undefined
    ) => void;
}

@singleton()
export class ActivityBarController
    extends Controller
    implements IActivityBarController {
    private readonly activityBarService: IActivityBarService;
    private readonly settingsService: ISettingsService;
    private readonly monacoService: IMonacoService;
    private readonly menuBarController: IMenuBarController;
    private readonly builtinService: IBuiltinService;

    constructor() {
        super();
        this.activityBarService = container.resolve(ActivityBarService);
        this.settingsService = container.resolve(SettingsService);
        this.monacoService = container.resolve(MonacoService);
        this.menuBarController = container.resolve(MenuBarController);
        this.builtinService = container.resolve(BuiltinService);
    }

    public initView() {}

    public readonly onClick = (
        selectedKey: string,
        selctedNode: IActivityBarItem
    ) => {
        this.emit(ActivityBarEvent.OnClick, selectedKey, selctedNode);
    };

    public readonly onChange = (
        prevSelected?: string,
        nextSelected?: string
    ) => {
        this.emit(ActivityBarEvent.OnChange, prevSelected, nextSelected);
    };

    private gotoQuickCommand() {
        this.monacoService.commandService.executeCommand(
            CommandQuickAccessViewAction.ID
        );
    }

    private onSelectColorTheme = () => {
        this.monacoService.commandService.executeCommand(
            SelectColorThemeAction.ID
        );
    };

    public readonly onContextMenuClick = (
        e: React.MouseEvent,
        item: IMenuItemProps | undefined
    ) => {
        const contextMenuId = item?.id;
        const {
            ACTION_QUICK_COMMAND,
            ACTION_QUICK_ACCESS_SETTINGS,
            ACTION_SELECT_THEME,
        } = this.builtinService.getConstants();
        switch (contextMenuId) {
            // activityBar contextMenu
            case CONTEXT_MENU_MENU: {
                this.menuBarController.updateMenuBar!();
                this.activityBarService.toggleContextMenuChecked(contextMenuId);
                break;
            }
            case CONTEXT_MENU_EXPLORER:
            case CONTEXT_MENU_SEARCH: {
                this.activityBarService.toggleBar(contextMenuId);
                this.activityBarService.toggleContextMenuChecked(contextMenuId);
                break;
            }
            case CONTEXT_MENU_HIDE: {
                this.menuBarController.updateActivityBar!();
                break;
            }
            // manage button contextMenu
            case ACTION_QUICK_COMMAND: {
                this.gotoQuickCommand();
                break;
            }
            case ACTION_QUICK_ACCESS_SETTINGS: {
                this.settingsService.openSettingsInEditor();
                break;
            }
            case ACTION_SELECT_THEME: {
                this.onSelectColorTheme();
                break;
            }
            default: {
            }
        }
    };
}
