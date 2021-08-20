import 'reflect-metadata';
import {
    BuiltInSettingsTab,
    IConfiguration,
    ISettings,
    SettingsEvent,
    SettingsModel,
} from 'mo/model/settings';
import { debounce } from 'lodash';
import { singleton, container } from 'tsyringe';
import {
    flatObject,
    mergeObjects,
    normalizeFlattedObject,
} from 'mo/common/utils';
import { EditorService, IEditorService } from './workbench';
import { GlobalEvent } from 'mo/common/event';
import { IEditorTab } from 'mo/model';
import { ColorThemeService } from './theme/colorThemeService';

export type BuiltInSettingsTabType = typeof BuiltInSettingsTab;

export interface ISettingsService {
    /**
     * Append a configuration object,
     * eg: registry({ project: { name: 'test' } })
     * @param configuration configuration object
     */
    append(configuration: IConfiguration): void;
    /**
     * Update a configuration object, it's going to overwrite
     * the exist configuration item if exist.
     * @param configuration
     */
    update(configuration: IConfiguration): void;
    /**
     * Get the configuration object
     */
    getConfiguration(): ISettings;
    /**
     * It's converts a object to a flatted object,
     * eg: { a: { b: 'test' }}, result is : { 'a.b': 'test' }.
     * @param obj object
     */
    flatObject(obj: object): object;
    /**
     * It's converts a object to a flatted json string,
     * eg: { a: { b: 'test' }}, result is : `{ 'a.b': 'test' }`.
     * @param obj object
     */
    flatObject2JSONString(obj: object): string;
    /**
     * It's convert a flatted JSON string to a normal object,
     * eg: `{ 'a.b': 'test' }` result is : { a: { b: 'test' }}.
     * @param jsonStr string
     * @return T
     */
    normalizeFlatObject<T = ISettings>(jsonStr: string): T;
    /**
     * It's converts the object to JSON string
     */
    toJSONString(obj: object, space?: number): string;
    /**
     * Open the settings.json in the Editor panel
     */
    openSettingsInEditor(): void;
    /**
     * Apply the Settings configuration to the Molecule
     */
    applyConfiguration(): void;
    /**
     * Listen to the Settings content changed event.
     */
    onChangeConfiguration(
        callback: (tab: IEditorTab<BuiltInSettingsTabType>) => void
    ): void;
}

@singleton()
export class SettingsService extends GlobalEvent implements ISettingsService {
    protected state: ISettings;
    private readonly editorService: IEditorService;
    private readonly colorThemeService: ColorThemeService;

    constructor() {
        super();
        this.state = container.resolve(SettingsModel);
        this.editorService = container.resolve(EditorService);
        this.colorThemeService = container.resolve(ColorThemeService);
        this.applyConfiguration();
    }
    private delayApplyConfiguration = debounce(this.applyConfiguration, 600);

    public onChangeConfiguration(
        callback: (tab: IEditorTab<BuiltInSettingsTabType>) => void
    ): void {
        this.subscribe(SettingsEvent.OnChange, callback);
    }

    public update(configuration: IConfiguration): void {
        this.state = mergeObjects(this.state, configuration);
        this.delayApplyConfiguration();
    }

    public append(configuration: IConfiguration): void {
        this.update(configuration);
    }

    public getConfiguration(): ISettings {
        return { ...this.state };
    }

    public applyConfiguration() {
        const { workbench, editor }: ISettings = this.getConfiguration();
        if (workbench.colorTheme) {
            this.colorThemeService.setTheme(workbench.colorTheme);
        }
        this.editorService.editorInstance?.updateOptions({
            ...editor,
        });
    }

    public openSettingsInEditor(): void {
        BuiltInSettingsTab.data.value = this.flatObject2JSONString(this.state);
        this.editorService.open(BuiltInSettingsTab);
    }

    public normalizeFlatObject<T = ISettings>(jsonStr: string): T {
        try {
            const obj = JSON.parse(jsonStr);
            return normalizeFlattedObject(obj) as any;
        } catch (e) {
            throw new Error(
                `SettingsService.normalizeFlatJSONObject JSON string error: ${e}`
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
