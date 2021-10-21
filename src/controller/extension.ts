import 'reflect-metadata';
import { Controller } from 'mo/react/controller';
import { container, singleton } from 'tsyringe';
import {
    BuiltinService,
    IBuiltinService,
    IExtensionService,
} from 'mo/services';
import { ExtensionService } from 'mo/services/extensionService';
import { CommandQuickAccessViewAction } from 'mo/monaco/quickAccessViewAction';
import { SelectColorThemeAction } from 'mo/monaco/selectColorThemeAction';
import { QuickAccessSettings } from 'mo/monaco/quickAccessSettingsAction';
import { SelectLocaleAction } from 'mo/i18n/selectLocaleAction';
import { CommandQuickSideBarViewAction } from 'mo/monaco/quickToggleSideBarAction';
import { ID_SIDE_BAR } from 'mo/common/id';
import { QuickTogglePanelAction } from 'mo/monaco/quickTogglePanelAction';
import { QuickSelectAllAction } from 'mo/monaco/quickSelectAllAction';
import { QuickCopyLineUp } from 'mo/monaco/quickCopyLineUp';
import { QuickUndo } from 'mo/monaco/quickUndo';
import { QuickRedo } from 'mo/monaco/quickRedo';
import { QuickCreateFile } from 'mo/monaco/quickCreateFile';
import type { Action2 } from 'mo/monaco/common';

export interface IExtensionController extends Partial<Controller> {}

@singleton()
export class ExtensionController
    extends Controller
    implements IExtensionController {
    private readonly extensionService: IExtensionService;
    private readonly builtinService: IBuiltinService;
    constructor() {
        super();
        this.extensionService = container.resolve(ExtensionService);
        this.builtinService = container.resolve(BuiltinService);
    }

    public initView() {
        const {
            quickAcessViewAction,
            quickSelectColorThemeAction,
            quickAccessSettingsAction,
            quickSelectLocaleAction,
            quickTogglePanelAction,
            quickSelectAllAction,
            quickCopyLineUpAction,
            quickUndoAction,
            quickRedoAction,
            quickCreateFileAction,
        } = this.builtinService.getModules();
        ([
            [quickAcessViewAction, CommandQuickAccessViewAction],
            [quickSelectColorThemeAction, SelectColorThemeAction],
            [quickAccessSettingsAction, QuickAccessSettings],
            [quickSelectLocaleAction, SelectLocaleAction],
            [ID_SIDE_BAR, CommandQuickSideBarViewAction],
            [quickTogglePanelAction, QuickTogglePanelAction],
            [quickSelectAllAction, QuickSelectAllAction],
            [quickCopyLineUpAction, QuickCopyLineUp],
            [quickUndoAction, QuickUndo],
            [quickRedoAction, QuickRedo],
            [quickCreateFileAction, QuickCreateFile],
        ] as [any, new () => Action2][]).forEach(([key, action]) => {
            if (key) {
                this.extensionService.registerAction(action);
            }
        });
    }
}
