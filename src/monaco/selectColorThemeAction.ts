import { localize } from 'monaco-editor/esm/vs/nls';
import {
    IQuickInputService,
    QuickPickInput,
} from 'monaco-editor/esm/vs/platform/quickinput/common/quickInput';
import { IColorTheme } from 'mo/model/colorTheme';
import {
    EditorAction,
    registerEditorAction,
} from 'monaco-editor/esm/vs/editor/browser/editorExtensions';
import * as monaco from 'monaco-editor';
import { KeyChord } from 'monaco-editor/esm/vs/base/common/keyCodes';
import { ColorThemeService, IColorThemeService } from 'mo/services';
import { container } from 'tsyringe';

export class SelectColorThemeAction extends EditorAction {
    static readonly ID = 'workbench.action.selectTheme';
    static readonly LABEL = localize('selectTheme.label', 'Color Theme');
    private quickInputService: IQuickInputService;
    private readonly colorThemeService: IColorThemeService;

    constructor() {
        super({
            id: SelectColorThemeAction.ID,
            label: SelectColorThemeAction.LABEL,
            alias: 'Color Theme',
            precondition: undefined,
            kbOpts: {
                kbExpr: undefined,
                // eslint-disable-next-line new-cap
                primary: KeyChord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_K),
            },
        });
        this.colorThemeService = container.resolve(ColorThemeService);
    }

    run(accessor): Promise<void> {
        this.quickInputService = accessor.get(IQuickInputService);
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
                    this.colorThemeService.applyTheme(themeId);
                },
                applyTheme ? 0 : 200
            );
        };

        return new Promise((resolve) => {
            let isCompleted = false;

            const autoFocusIndex = picks.findIndex(
                (p) => p.id === currentTheme.id
            );
            const quickPick = this.quickInputService.createQuickPick<IColorTheme>();
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

registerEditorAction(SelectColorThemeAction);
