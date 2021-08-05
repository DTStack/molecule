import type { IExtensionService } from 'mo/services';
import { IExtension } from 'mo/model';
import { SelectLocaleAction } from 'mo/i18n/selectLocaleAction';
import { QuickAccessSettings } from 'mo/monaco/quickAccessSettingsAction';
import { CommandQuickAccessViewAction } from 'mo/monaco/quickAccessViewAction';
import { SelectColorThemeAction } from 'mo/monaco/selectColorThemeAction';
import { CommandQuickSideBarViewAction } from 'mo/monaco/quickToggleSideBarAction';
import { QuickTogglePanelAction } from 'mo/monaco/quickTogglePanelAction';
import { QuickSelectAllAction } from 'mo/monaco/quickSelectAllAction';
import { QuickCopyLineUp } from 'mo/monaco/quickCopyLineUp';
import { QuickRedo } from 'mo/monaco/quickRedo';
import { QuickUndo } from 'mo/monaco/quickUndo';
import { QuickCreateFile } from 'mo/monaco/quickCreateFile';

export const ExtendsKeybinding: IExtension = {
    activate(extensionCtx: IExtensionService) {
        extensionCtx.registerAction(CommandQuickAccessViewAction);
        extensionCtx.registerAction(SelectColorThemeAction);
        extensionCtx.registerAction(QuickAccessSettings);
        extensionCtx.registerAction(SelectLocaleAction);
        extensionCtx.registerAction(CommandQuickSideBarViewAction);
        extensionCtx.registerAction(QuickTogglePanelAction);
        extensionCtx.registerAction(QuickSelectAllAction);
        extensionCtx.registerAction(QuickCopyLineUp);
        extensionCtx.registerAction(QuickUndo);
        extensionCtx.registerAction(QuickRedo);
        extensionCtx.registerAction(QuickCreateFile);
    },
};
