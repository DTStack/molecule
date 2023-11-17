import { BaseAction } from 'mo/glue/baseAction';
import type { IColorTheme } from 'mo/models/colorTheme';
import {
    IQuickInputService,
    KeyChord,
    KeyCode,
    KeyMod,
    localize,
    type QuickPickInput,
    type ServicesAccessor,
} from 'mo/monaco';
import { type IMoleculeContext, KeybindingWeight } from 'mo/types';

export default class QuickSelectThemeAction extends BaseAction {
    static readonly ID = 'menu.colorTheme';

    constructor(private ctx: IMoleculeContext) {
        super({
            id: QuickSelectThemeAction.ID,
            label: localize('selectTheme.label', 'Color Theme'),
            title: localize('selectTheme.label', 'Color Theme'),
            alias: 'Color Theme',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KeyK),
            },
        });
    }

    run(accessor: ServicesAccessor): Promise<void> {
        const quickInputService = accessor.get(IQuickInputService);
        const themes = this.ctx.colorTheme.getThemes();
        const currentTheme = this.ctx.colorTheme.getColorTheme();

        const picks = [...toEntries(themes)];

        let selectThemeTimeout: number | undefined;

        const selectTheme = (theme: IColorTheme | undefined, applyTheme: boolean) => {
            if (selectThemeTimeout) {
                clearTimeout(selectThemeTimeout);
            }
            selectThemeTimeout = window.setTimeout(
                () => {
                    selectThemeTimeout = undefined;
                    const themeId = theme && theme.id !== undefined ? theme.id : currentTheme?.id;
                    themeId && this.ctx.colorTheme.setTheme(themeId);
                },
                applyTheme ? 0 : 200
            );
        };

        return new Promise((resolve) => {
            let isCompleted = false;

            const autoFocusIndex = picks.findIndex((p) => p.id === currentTheme?.id);
            const quickPick = quickInputService.createQuickPick<IColorTheme>();

            quickPick.items = picks;
            // TODO: Better to use molecule's localize
            quickPick.placeholder = localize(
                'themes.selectTheme',
                'Select Color Theme (Up/Down Keys to Preview)'
            );
            quickPick.activeItems = [picks[autoFocusIndex] as IColorTheme];
            quickPick.canSelectMany = false;
            quickPick.onDidAccept(() => {
                const theme = quickPick.activeItems[0];
                if (theme) {
                    selectTheme(theme, true);
                }
                isCompleted = true;
                quickPick.hide();
                resolve();
            });

            quickPick.onDidChangeActive((themes) => selectTheme(themes[0], false));
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

function toEntries(themes: Array<IColorTheme>, label?: string): QuickPickInput<IColorTheme>[] {
    const toEntry = (theme: IColorTheme): IColorTheme => ({
        id: theme.id,
        label: theme.label,
        description: theme.description,
    });
    const sorter = (t1: IColorTheme, t2: IColorTheme) => t1.label?.localeCompare(t2.label);
    const entries: QuickPickInput<IColorTheme>[] = themes.map(toEntry).sort(sorter);
    if (entries.length > 0 && label) {
        entries.unshift({ type: 'separator', label });
    }
    return entries;
}
