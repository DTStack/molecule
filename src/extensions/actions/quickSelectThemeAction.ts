import { BaseAction } from 'mo/glue/baseAction';
import {
    CATEGORIES,
    IQuickInputService,
    IQuickPickItem,
    KeyChord,
    KeyCode,
    KeyMod,
    localize,
    type QuickPickInput,
    type ServicesAccessor,
} from 'mo/monaco';
import { type IColorTheme, type IMoleculeContext, KeybindingWeight } from 'mo/types';

export default class QuickSelectThemeAction extends BaseAction {
    static readonly ID = 'activityBar.item.colorTheme';

    constructor(private ctx: IMoleculeContext) {
        super({
            id: QuickSelectThemeAction.ID,
            label: ctx.locale.localize('activityBar.item.colorTheme', 'Color Theme'),
            title: ctx.locale.localize('activityBar.item.colorTheme', 'Color Theme'),
            category: CATEGORIES.Preferences,
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
        const themes = this.ctx.colorTheme.getAll();
        const currentTheme = this.ctx.colorTheme.getCurrentTheme();

        const picks = [...toEntries(themes)];

        let selectThemeTimeout: number | undefined;

        const selectTheme = (theme: IQuickPickItem | undefined, applyTheme: boolean) => {
            if (selectThemeTimeout) {
                clearTimeout(selectThemeTimeout);
            }
            selectThemeTimeout = window.setTimeout(
                () => {
                    selectThemeTimeout = undefined;
                    const themeId = theme && theme.id !== undefined ? theme.id : currentTheme?.id;
                    themeId && this.ctx.colorTheme.setCurrent(themeId);
                },
                applyTheme ? 0 : 200
            );
        };

        return new Promise((resolve) => {
            let isCompleted = false;

            const autoFocusIndex = picks.findIndex((p) => p.type === 'item' && p.id === currentTheme?.id);
            const quickPick = quickInputService.createQuickPick();

            quickPick.items = picks;
            // TODO: Better to use molecule's localize
            quickPick.placeholder = localize('themes.selectTheme', 'Select Color Theme (Up/Down Keys to Preview)');
            quickPick.activeItems = [picks[autoFocusIndex] as IQuickPickItem];
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

function toEntries(themes: Array<IColorTheme>, label?: string): QuickPickInput[] {
    const toEntry = (theme: IColorTheme): IQuickPickItem & Record<string, any> => ({
        id: theme.id,
        label: theme.label,
        description: theme.description,
        uiTheme: theme.uiTheme,
        type: 'item',
    });
    const sorter = (t1: IQuickPickItem, t2: IQuickPickItem) => t1.label?.localeCompare(t2.label);
    const entries: QuickPickInput[] = themes.map(toEntry).sort(sorter);
    if (entries.length > 0 && label) {
        entries.unshift({ type: 'separator', label });
    }
    return entries;
}
