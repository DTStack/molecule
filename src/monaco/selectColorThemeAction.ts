import 'reflect-metadata';
import { localize } from 'monaco-editor/esm/vs/nls';
import {
    IQuickInputService,
    QuickPickInput,
} from 'monaco-editor/esm/vs/platform/quickinput/common/quickInput';
import { IColorTheme } from 'mo/model/colorTheme';
import { KeyMod, KeyCode } from 'mo/monaco';
import { KeyChord } from 'monaco-editor/esm/vs/base/common/keyCodes';
import { ColorThemeService, IColorThemeService } from 'mo/services';
import { ServicesAccessor } from 'monaco-editor/esm/vs/platform/instantiation/common/instantiation';
import { container } from 'tsyringe';
import { Action2, KeybindingWeight } from './common';
import { ACTION_SELECT_THEME } from 'mo/model/keybinding';

export class SelectColorThemeAction extends Action2 {
    static readonly ID = ACTION_SELECT_THEME;
    static readonly LABEL = localize('selectTheme.label', 'Color Theme');
    private readonly colorThemeService: IColorThemeService;

    constructor() {
        super({
            id: SelectColorThemeAction.ID,
            label: SelectColorThemeAction.LABEL,
            title: SelectColorThemeAction.LABEL,
            alias: 'Color Theme',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                // eslint-disable-next-line new-cap
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KEY_K),
            },
        });
        this.colorThemeService = container.resolve(ColorThemeService);
    }

    run(accessor: ServicesAccessor): Promise<void> {
        const quickInputService = accessor.get(IQuickInputService);
        const themes = this.colorThemeService.getThemes();
        const currentTheme = this.colorThemeService.getColorTheme();

        const picks: QuickPickInput<IColorTheme>[] = [...toEntries(themes)];

        let selectThemeTimeout: number | undefined;

        const selectTheme = (theme: IColorTheme, applyTheme: boolean) => {
            if (selectThemeTimeout) {
                clearTimeout(selectThemeTimeout);
            }
            selectThemeTimeout = window.setTimeout(
                () => {
                    selectThemeTimeout = undefined;
                    const themeId =
                        theme && theme.id !== undefined
                            ? theme.id
                            : currentTheme.id;
                    this.colorThemeService.setTheme(themeId);
                },
                applyTheme ? 0 : 200
            );
        };

        return new Promise((resolve) => {
            let isCompleted = false;

            const autoFocusIndex = picks.findIndex(
                (p) => p.id === currentTheme.id
            );
            const quickPick = quickInputService.createQuickPick<IColorTheme>();
            quickPick.items = picks;
            quickPick.placeholder = localize(
                'themes.selectTheme',
                'Select Color Theme (Up/Down Keys to Preview)'
            );
            quickPick.activeItems = [picks[autoFocusIndex]];
            quickPick.canSelectMany = false;
            quickPick.onDidAccept((_) => {
                const theme = quickPick.activeItems[0];
                if (theme) {
                    selectTheme(theme, true);
                }
                isCompleted = true;
                quickPick.hide();
                resolve();
            });

            quickPick.onDidChangeActive((themes) =>
                selectTheme(themes[0], false)
            );
            quickPick.onDidHide(() => {
                if (!isCompleted) {
                    selectTheme(currentTheme, true);
                    resolve();
                }
            });

            quickPick.show();
        });
    }
}

function toEntries(
    themes: Array<IColorTheme>,
    label?: string
): QuickPickInput<IColorTheme>[] {
    const toEntry = (theme: IColorTheme): IColorTheme => ({
        id: theme.id,
        label: theme.label,
        description: theme.description,
    });
    const sorter = (t1: IColorTheme, t2: IColorTheme) =>
        t1.label?.localeCompare(t2.label);
    const entries: QuickPickInput<IColorTheme>[] = themes
        .map(toEntry)
        .sort(sorter);
    if (entries.length > 0 && label) {
        entries.unshift({ type: 'separator', label });
    }
    return entries;
}
