import { BaseAction } from 'mo/glue/baseAction';
import { ILocale } from 'mo/models/locale';
import { CATEGORIES, IQuickInputService, localize, QuickPickInput, ServicesAccessor } from 'mo/monaco';
import { IMoleculeContext } from 'mo/types';
import { KeyCode, KeyMod } from 'monaco-editor';

export default class QuickSelectLocaleAction extends BaseAction {
    static readonly ID = 'workbench.action.selectLocale';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: QuickSelectLocaleAction.ID,
            label: molecule.locale.localize(QuickSelectLocaleAction.ID, 'Select Display Language'),
            title: molecule.locale.localize(QuickSelectLocaleAction.ID, 'Select Display Language'),
            category: CATEGORIES.Preferences,
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                primary: KeyMod.CtrlCmd | KeyMod.Shift | KeyCode.KeyL,
            },
        });
    }

    run(accessor: ServicesAccessor): Promise<void> {
        const quickInputService = accessor.get(IQuickInputService);
        const data = this.molecule.locale.getAll();
        const current = this.molecule.locale.getCurrentLocale();

        const picks = [...toEntries(data)];
        let timer: number | undefined;

        const onSelect = (locale: ILocale | undefined, apply: boolean) => {
            if (timer) {
                clearTimeout(timer);
            }
            timer = window.setTimeout(
                () => {
                    timer = undefined;
                    if (locale && locale.id) {
                        this.molecule.locale.setCurrent(locale.id);
                    }
                },
                apply ? 0 : 200
            );
        };

        return new Promise((resolve) => {
            const autoFocusIndex = picks.findIndex((p) => p.id === current?.id);
            const quickPick = quickInputService.createQuickPick<ILocale>();
            quickPick.items = picks;

            quickPick.placeholder = localize('locale.select', 'Select Display Language (Up/Down Keys to Preview)');

            quickPick.activeItems = [picks[autoFocusIndex] as ILocale];
            quickPick.canSelectMany = false;
            quickPick.onDidAccept((_) => {
                const item = quickPick.activeItems[0];
                if (item) {
                    onSelect(item, true);
                }
                quickPick.hide();
                resolve();
            });

            quickPick.show();
        });
    }
}

function toEntries(locales: Array<ILocale>, label?: string): QuickPickInput<ILocale>[] {
    const entries: QuickPickInput<ILocale>[] = locales
        .map((locale) => ({
            id: locale.id,
            label: locale.name,
            description: locale.description,
        }))
        .sort((t1, t2) => t1.label?.localeCompare(t2.label));
    if (entries.length > 0 && label) {
        entries.unshift({ type: 'separator', label });
    }
    return entries;
}
