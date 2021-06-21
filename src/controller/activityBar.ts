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
    CONTEXT_MENU_COLOR_THEME,
    CONTEXT_MENU_COMMAND_PALETTE,
    CONTEXT_MENU_SETTINGS,
    IActivityBarItem,
} from 'mo/model';
import { SelectColorThemeAction } from 'mo/monaco/selectColorThemeAction';

import {
    ActivityBarService,
    IActivityBarService,
    ISettingsService,
    SettingsService,
} from 'mo/services';
import { CommandQuickAccessViewAction } from 'mo/monaco/quickAccessViewAction';
import { IMonacoService, MonacoService } from 'mo/monaco/monacoService';
export interface IActivityBarController {
    onSelect?: (key: string, item?: IActivityBarItem) => void;
    onClick?: (event: React.MouseEvent, item: IActivityBarItem) => void;
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

    constructor() {
        super();
        this.activityBarService = container.resolve(ActivityBarService);
        this.settingsService = container.resolve(SettingsService);
        this.monacoService = container.resolve(MonacoService);
        this.menuBarController = container.resolve(MenuBarController);
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
        this.monacoService.commandService.executeCommand(
            CommandQuickAccessViewAction.ID
        );
    }

    private onSelectColorTheme = () => {
        this.monacoService.commandService.executeCommand(
            SelectColorThemeAction.ID
        );
    };

    // TODO: Menu 按钮是否提取至 activityBar 外
    public readonly onContextMenuClick = (
        e: React.MouseEvent,
        item: IMenuItemProps | undefined
    ) => {
        const contextMenuId = item?.id;
        switch (contextMenuId) {
            // activityBar contextMenu
            case CONTEXT_MENU_MENU: {
                this.menuBarController.updateMenuBar!();
                break;
            }
            case CONTEXT_MENU_EXPLORER: {
                this.activityBarService.toggleBar(contextMenuId);
                break;
            }
            case CONTEXT_MENU_SEARCH: {
                this.activityBarService.toggleBar(contextMenuId);
                break;
            }
            case CONTEXT_MENU_HIDE: {
                this.menuBarController.updateActivityBar!();
                break;
            }
            // manage button contextMenu
            case CONTEXT_MENU_COMMAND_PALETTE: {
                this.gotoQuickCommand();
                break;
            }
            case CONTEXT_MENU_SETTINGS: {
                this.settingsService.openSettingsInEditor();
                break;
            }
            case CONTEXT_MENU_COLOR_THEME: {
                this.onSelectColorTheme();
                break;
            }
            default: {
            }
        }
    };
}
