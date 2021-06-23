import 'reflect-metadata';
import { localize } from 'monaco-editor/esm/vs/nls';
import { KeyMod, KeyCode } from 'mo/monaco';
import { KeyChord } from 'monaco-editor/esm/vs/base/common/keyCodes';
import { ISettingsService, SettingsService } from 'mo/services';
import { ServicesAccessor } from 'monaco-editor/esm/vs/platform/instantiation/common/instantiation';
import { container } from 'tsyringe';
import { Action2, KeybindingWeight } from './common';
import { ACTION_QUICK_ACCESS_SETTINGS } from 'mo/model/keybinding';

export class QuickAccessSettings extends Action2 {
    static readonly ID = ACTION_QUICK_ACCESS_SETTINGS;
    static readonly LABEL = localize(
        'quickAccessSettings.label',
        'Open Settings (JSON)'
    );
    private readonly settingsService: ISettingsService;

    constructor() {
        super({
            id: QuickAccessSettings.ID,
            label: QuickAccessSettings.LABEL,
            title: QuickAccessSettings.LABEL,
            alias: 'Open Settings (JSON)',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                // eslint-disable-next-line new-cap
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.US_COMMA),
            },
        });
        this.settingsService = container.resolve(SettingsService);
    }

    run(accessor: ServicesAccessor) {
        this.settingsService.openSettingsInEditor();
    }
}
