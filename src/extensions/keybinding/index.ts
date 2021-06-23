import molecule from 'mo';
import { SelectLocaleAction } from 'mo/i18n/selectLocaleAction';
import { IExtension } from 'mo/model';
import { QuickAccessSettings } from 'mo/monaco/quickAccessSettingsAction';
import { CommandQuickAccessViewAction } from 'mo/monaco/quickAccessViewAction';
import { SelectColorThemeAction } from 'mo/monaco/selectColorThemeAction';

export const ExtendsKeybinding: IExtension = {
    activate() {
        molecule.keybinding.registerKeybinding(CommandQuickAccessViewAction);
        molecule.keybinding.registerKeybinding(SelectColorThemeAction);
        molecule.keybinding.registerKeybinding(QuickAccessSettings);
        molecule.keybinding.registerKeybinding(SelectLocaleAction);
    },
};
