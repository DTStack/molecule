/**
 * VSCode theme extends guides: https://code.visualstudio.com/api/extension-guides/color-theme
 * https://code.visualstudio.com/api/references/theme-color
 */
import { omitBy } from 'lodash-es';
import { prefix } from 'mo/client/classNames';
import { COLOR_THEME_STORE_KEY } from 'mo/const';
import { DefaultColor } from 'mo/const/theme';
import { BaseService } from 'mo/glue';
import { ColorThemeEvent, ColorThemeModel } from 'mo/models/colorTheme';
import { editor, languages } from 'mo/monaco';
import type Textmate from 'mo/monaco/override/textmate';
import type { IGrammarTextMate } from 'mo/monaco/override/textmate';
import type { Arraylize, IColorTheme, IContribute, Predict, RequiredId, UniqueId } from 'mo/types';
import { arraylize, colorsToString, convertToCSSVars, convertToToken, normalizeColor, searchById } from 'mo/utils';
import { setValue } from 'mo/utils/storage';
import { IRawTheme } from 'vscode-textmate';

export class ColorThemeService extends BaseService<ColorThemeModel> {
    static DEFAULT_THEME_CLASS_NAME = prefix('customize-theme');
    private _grammarLock = false;
    private textmateRegistry?: Textmate;

    protected state: ColorThemeModel;

    constructor() {
        super('colorTheme');
        this.state = new ColorThemeModel();
    }

    private getDefaultTheme(uiTheme: editor.BuiltinTheme) {
        const colors = new DefaultColor();
        switch (uiTheme) {
            case 'hc-black': {
                return omitBy({ ...colors.getDefaultColor('hcDark') }, (value) => !value);
            }
            case 'vs': {
                return omitBy({ ...colors.getDefaultColor('light') }, (value) => !value);
            }
            case 'vs-dark':
            default: {
                return omitBy({ ...colors.getDefaultColor('dark') }, (value) => !value);
            }
        }
    }

    // Taken from https://github.com/eclipse-theia/theia/blob/38eb31945130bb68fc793d4291d8d9f416541cdb/packages/monaco/src/browser/textmate/monaco-theme-registry.ts#L98
    private convertToRawTheme(theme: IColorTheme): IRawTheme {
        const result: IRawTheme = {
            name: theme.name,
            settings: [],
        };

        const tokenColors = theme.tokenColors;
        if (Array.isArray(tokenColors)) {
            for (const tokenColor of tokenColors) {
                if (tokenColor.scope && tokenColor.settings) {
                    result.settings.push({
                        scope: tokenColor.scope,
                        settings: {
                            foreground: normalizeColor(tokenColor.settings.foreground),
                            background: normalizeColor(tokenColor.settings.background),
                            fontStyle: tokenColor.settings.fontStyle,
                        },
                    });
                }
            }
        }
        const foreground = theme.colors?.['editor.foreground'] || '';
        const background = theme.colors?.['editor.background'] || '';
        result.settings.unshift({
            settings: {
                foreground: normalizeColor(foreground),
                background: normalizeColor(background),
            },
        });

        return result;
    }

    private predict: UniqueId | undefined = undefined;
    private applyColorTheme(id: UniqueId) {
        if (this._grammarLock) {
            this.predict = id;
            return;
        }
        const theme = this.get(id);
        if (!theme) return;
        const styleSheetContent = convertToCSSVars(theme.colors || {});
        window.requestAnimationFrame(() => {
            const styleEle = document.querySelector<HTMLStyleElement>(`.${ColorThemeService.DEFAULT_THEME_CLASS_NAME}`);
            if (!styleEle) {
                const elStyle = document.createElement('style');
                elStyle.type = 'text/css';
                elStyle.className = ColorThemeService.DEFAULT_THEME_CLASS_NAME;
                elStyle.innerHTML = styleSheetContent;
                document.head.appendChild(elStyle);
            } else {
                styleEle.innerHTML = styleSheetContent;
            }
        });
        editor.defineTheme(ColorThemeService.DEFAULT_THEME_CLASS_NAME, {
            inherit: true,
            base: theme.uiTheme || 'vs-dark',
            colors: colorsToString(theme.colors || {}),
            rules: convertToToken(theme.tokenColors) || [],
        });
        editor.setTheme(ColorThemeService.DEFAULT_THEME_CLASS_NAME);

        this.textmateRegistry?.injectCSS();
    }

    public add(themes: Arraylize<IColorTheme>): void {
        this.dispatch((draft) => {
            arraylize(themes).forEach((theme) => {
                const next = { ...theme };
                next.colors = Object.assign({}, this.getDefaultTheme(theme.uiTheme), theme.colors);
                draft.data.push(next);
            });
        });
    }

    public update(theme: RequiredId<IColorTheme>): void;
    public update(id: UniqueId, predict: Predict<IColorTheme>): void;
    public update(item: UniqueId | RequiredId<IColorTheme>, predict?: Predict<IColorTheme>) {
        this.dispatch((draft) => {
            const target = draft.data.find(searchById(typeof item === 'object' ? item.id : item));
            if (target) {
                Object.assign(target, typeof item === 'object' ? item : predict?.(target));
            }
        });
        // If current theme be updated, then reload it
        if (this.getCurrent() === (typeof item === 'object' ? item.id : item)) {
            this.applyColorTheme(this.getCurrent());
        }
    }

    public updateColors(colorItems: Arraylize<Required<Pick<IColorTheme, 'id' | 'colors'>>>): void;
    public updateColors(id: UniqueId, colors: IColorTheme['colors']): void;
    public updateColors(
        items: UniqueId | Arraylize<Required<Pick<IColorTheme, 'id' | 'colors'>>>,
        colors?: IColorTheme['colors']
    ) {
        arraylize(items).forEach((item) => {
            this.dispatch((draft) => {
                const target = draft.data.find(searchById(typeof item === 'object' ? item.id : item));
                if (target) {
                    target.colors = Object.assign({}, target.colors, typeof item === 'object' ? item.colors : colors);
                }
            });
            // If current theme be updated, then reload it
            if (this.getCurrent() === (typeof item === 'object' ? item.id : item)) {
                this.applyColorTheme(this.getCurrent());
            }
        });
    }

    public get(id: UniqueId) {
        return this.getState().data.find(searchById(id));
    }

    public getCurrent() {
        return this.getState().current;
    }

    public getAll() {
        return this.getState().data;
    }

    public getCurrentTheme() {
        return this.get(this.getCurrent());
    }

    public setCurrent(id: UniqueId) {
        if (id !== this.getCurrent()) {
            this.emit(ColorThemeEvent.onChange, this.getCurrentTheme(), this.get(id));
            setValue(COLOR_THEME_STORE_KEY, id.toString());
        }
        this.dispatch((draft) => {
            draft.current = id;
        });
        const theme = this.get(id);
        this.textmateRegistry?.setTheme(theme ? this.convertToRawTheme(theme) : { name: 'unknown', settings: [] });
        this.applyColorTheme(id);
    }

    public getColorThemeMode(): editor.BuiltinTheme {
        return this.getCurrentTheme()?.uiTheme || 'vs-dark';
    }

    public reset() {
        this.setState(new ColorThemeModel());
    }

    /**
     * Notice that you should NOT call this function.
     * @internal
     */
    public async _activeGrammar(grammars: IContribute['grammars'], onigurumPath?: string) {
        this._grammarLock = true;
        try {
            if (Array.isArray(grammars) && onigurumPath) {
                const languages: languages.ILanguageExtensionPoint[] = [];
                const _grammars: Record<string, IGrammarTextMate> = {};
                for (let index = 0; index < grammars.length; index++) {
                    const { scopeName, grammar, ...rest } = grammars[index];
                    languages.push({
                        ...rest,
                    });
                    _grammars[scopeName] = {
                        path: grammar,
                        language: rest.id,
                    };
                }
                const Textmate = (await import('../monaco/override/textmate')).default;
                this.textmateRegistry = new Textmate(languages, _grammars, onigurumPath);
                const monaco = await import('monaco-editor/esm/vs/editor/editor.api');

                const theme = this.getCurrentTheme();
                await this.textmateRegistry.register(
                    monaco,
                    theme ? this.convertToRawTheme(theme) : { name: 'unknown', settings: [] }
                );
            }
        } finally {
            this._grammarLock = false;
            if (this.predict) {
                this.applyColorTheme(this.predict);
                this.predict = undefined;
            }
        }
    }

    // ===================== Subscriptions =====================
    public onChange(callback: (prev: IColorTheme, next: IColorTheme) => void): void {
        this.subscribe(ColorThemeEvent.onChange, callback);
    }
}
