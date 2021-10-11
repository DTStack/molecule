import 'reflect-metadata';
import {
    BuiltInSettingsTab,
    ISettings,
    SettingsEvent,
    SettingsModel,
} from 'mo/model/settings';
import { singleton, container } from 'tsyringe';
import {
    flatObject,
    mergeObjects,
    normalizeFlattedObject,
} from 'mo/common/utils';
import { EditorService, IEditorService } from './workbench';
import { GlobalEvent } from 'mo/common/event';
import { IEditorTab } from 'mo/model';
import {
    ColorThemeService,
    IColorThemeService,
} from './theme/colorThemeService';
import { ILocaleService, LocaleService } from 'mo/i18n';
import { cloneDeep, isEqual } from 'lodash';
import { convertToCSSVars } from './theme/helper';
import { applyStyleSheetRules } from 'mo/common/css';

export type BuiltInSettingsTabType = typeof BuiltInSettingsTab;

export interface ISettingsService {
    /**
     * Append new Settings object
     * eg: `
     *  append({ project: { name: 'example' } })
     * `
     * @param settings object
     */
    append(settings: ISettings): void;
    /**
     * To update a settings object, it's going to overwrite
     * a settings item if it existed.
     * @param settings
     */
    update(settings: ISettings): void;
    /**
     * Get the settings object
     */
    getSettings(): ISettings;
    /**
     * It converts an object to a flatted object,
     * eg: { a: { b: 'test' }}, result is : { 'a.b': 'test' }.
     * @param obj object
     */
    flatObject(obj: object): object;
    /**
     * It converts an object to a flatted json string,
     * eg: { a: { b: 'test' }}, result is : `{ 'a.b': 'test' }`.
     * @param obj object
     */
    flatObject2JSONString(obj: object): string;
    /**
     * It converts a flatted JSON string to a normal object,
     * eg: `{ 'a.b': 'test' }` result is : { a: { b: 'test' }}.
     * @param jsonStr string
     * @return T
     */
    normalizeFlatObject<T = ISettings>(jsonStr: string): T;
    /**
     * It converts an object to JSON string
     */
    toJSONString(obj: object, space?: number): string;
    /**
     * Open the `settings.json` in the Editor Panel
     */
    openSettingsInEditor(): void;
    /**
     * Apply the nextSettings configuration
     * @param nextSettings
     */
    applySettings(nextSettings: ISettings): void;
    /**
     * Listen to the Settings change event.
     * @param callback
     */
    onChangeSettings(
        callback: (tab: IEditorTab<BuiltInSettingsTabType>) => void
    ): void;
    /**
     * Get the default Settings Tab object
     */
    getDefaultSettingsTab(): BuiltInSettingsTabType;
}

@singleton()
export class SettingsService extends GlobalEvent implements ISettingsService {
    protected settings: ISettings;
    private readonly editorService: IEditorService;
    private readonly colorThemeService: IColorThemeService;
    private readonly localeService: ILocaleService;

    constructor() {
        super();
        this.editorService = container.resolve(EditorService);
        this.localeService = container.resolve(LocaleService);
        this.colorThemeService = container.resolve(ColorThemeService);
        this.settings = this.getBuiltInSettings();
    }

    private getBuiltInSettings(): ISettings {
        const editorOptions = this.editorService.getState().editorOptions;
        const theme = this.colorThemeService.getColorTheme();
        const locale = this.localeService.getCurrentLocale();

        return new SettingsModel(theme.id, editorOptions!, locale!.id);
    }

    public getDefaultSettingsTab(): BuiltInSettingsTabType {
        return Object.assign({}, BuiltInSettingsTab);
    }

    public onChangeSettings(
        callback: (tab: IEditorTab<BuiltInSettingsTabType>) => void
    ): void {
        this.subscribe(SettingsEvent.OnChange, callback);
    }

    public update(settings: ISettings): void {
        this.applySettings(settings);
        const oldSettings = cloneDeep(this.settings);
        this.settings = mergeObjects(oldSettings, settings);
    }

    public append(settings: ISettings): void {
        this.update(settings);
    }

    public getSettings(): ISettings {
        const builtInSettings = this.getBuiltInSettings();
        return Object.assign({}, this.settings, builtInSettings);
    }

    public applySettings(nextSettings: ISettings) {
        const oldSettings = this.settings;
        const { colorTheme, locale, editor, tree }: ISettings = nextSettings;
        if (colorTheme && colorTheme !== oldSettings.colorTheme) {
            this.colorThemeService.setTheme(colorTheme);
        }
        if (locale && locale !== oldSettings.locale) {
            this.localeService.setCurrentLocale(locale);
        }
        if (editor && !isEqual(editor, oldSettings.editor)) {
            this.editorService.updateEditorOptions(editor);
        }
        if (tree) {
            const cssvars = convertToCSSVars(flatObject({ tree }));
            applyStyleSheetRules(cssvars, 'custom-tree-theme');
        }
    }

    public openSettingsInEditor(): void {
        BuiltInSettingsTab.data.value = this.flatObject2JSONString(
            this.getSettings()
        );
        this.editorService.open(BuiltInSettingsTab);
    }

    public normalizeFlatObject<T = ISettings>(jsonStr: string): T {
        try {
            const obj = JSON.parse(jsonStr);
            return normalizeFlattedObject(obj) as any;
        } catch (e) {
            throw new Error(
                `SettingsService.normalizeFlatJSONObject error: ${e}`
            );
        }
    }

    public flatObject(obj: object): object {
        return flatObject(obj);
    }

    public flatObject2JSONString(obj: object): string {
        return this.toJSONString(this.flatObject(obj));
    }

    public toJSONString(obj: object, space: number = 4): string {
        try {
            return JSON.stringify(obj, null, space);
        } catch (e) {
            throw new Error(`SettingsService.toJSONString error: ${e}`);
        }
    }
}
