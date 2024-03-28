/**
 * VSCode theme extends guides: https://code.visualstudio.com/api/extension-guides/color-theme
 * https://code.visualstudio.com/api/references/theme-color
 */
import { omitBy } from 'lodash-es';
import { prefix } from 'mo/client/classNames';
import { DefaultColor } from 'mo/const/theme';
import { BaseService } from 'mo/glue';
import { ColorThemeEvent, ColorThemeModel } from 'mo/models/colorTheme';
import { editor } from 'mo/monaco';
import type { Arraylize, IColorTheme, Predict, RequiredId, UniqueId } from 'mo/types';
import { arraylize, colorsToString, convertToCSSVars, convertToToken, searchById } from 'mo/utils';

export class ColorThemeService extends BaseService<ColorThemeModel> {
    static DEFAULT_THEME_CLASS_NAME = prefix('customize-theme');

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

    private applyColorTheme(id: UniqueId) {
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
                // If current theme be updated, then reload it
                if (target.id === this.getState().current) {
                    this.applyColorTheme(target.id);
                }
            }
        });
        if (this.getCurrent() === (typeof item === 'object' ? item.id : item)) {
            this.applyColorTheme(this.getCurrent());
        }
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
        this.dispatch((draft) => {
            draft.current = id;
        });
        this.applyColorTheme(id);
    }

    public getColorThemeMode(): editor.BuiltinTheme {
        return this.getCurrentTheme()?.uiTheme || 'vs-dark';
    }

    public reset() {
        this.setState(new ColorThemeModel());
    }

    // ===================== Subscriptions =====================
    public onChange(callback: (prev: IColorTheme, next: IColorTheme, themeMode: editor.BuiltinTheme) => void): void {
        this.subscribe(ColorThemeEvent.onChange, callback);
    }
}
