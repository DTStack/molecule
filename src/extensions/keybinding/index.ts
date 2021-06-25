import { SelectLocaleAction } from 'mo/i18n/selectLocaleAction';
import { IExtension } from 'mo/model';
import { QuickAccessSettings } from 'mo/monaco/quickAccessSettingsAction';
import { CommandQuickAccessViewAction } from 'mo/monaco/quickAccessViewAction';
import { SelectColorThemeAction } from 'mo/monaco/selectColorThemeAction';
import { IExtensionService } from 'mo/services';

export const ExtendsKeybinding: IExtension = {
    activate(extensionCtx: IExtensionService) {
        extensionCtx.registerAction(CommandQuickAccessViewAction);
        extensionCtx.registerAction(SelectColorThemeAction);
        extensionCtx.registerAction(QuickAccessSettings);
        extensionCtx.registerAction(SelectLocaleAction);
    },
};
