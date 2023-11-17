import { BaseService } from 'mo/glue';
import { ISettings, SettingModel, SettingsEvent } from 'mo/models/setting';

export interface ISettingsService {
    /**
     * Check if the settings has the key
     */
    has(name: string): boolean;
    /**
     * Get value from settings
     */
    get<T = any>(name: string): T;
    /**
     * Get all settings
     */
    getAll(): ISettings;
    /**
     * Update value in settings
     */
    update(next: Record<string, any>): void;
    /**
     * Remove settings
     */
    remove(name: string): void;
    /**
     * Listen to settings change
     */
    onChange(callback: (value: string) => void): void;
}

export class SettingsService extends BaseService<SettingModel> implements ISettingsService {
    protected state: SettingModel;
    constructor() {
        super('setting');
        this.state = new SettingModel();
    }

    public has(name: string): boolean {
        return Object.hasOwn(this.state.data, name);
    }

    public getAll() {
        return this.getState().data;
    }

    public get<T = any>(name: string): T {
        return this.state.data[name];
    }

    public update(next: Record<string, any>): void {
        this.setState((prev) => ({ ...prev, data: { ...prev.data, ...next } }));
    }

    public remove(name: string): void {
        if (this.has(name)) {
            this.setState((prev) => {
                const next = { ...prev };
                Reflect.deleteProperty(next.data, name);
                return next;
            });
        }
    }

    // ===================== Subscriptions =====================
    public onChange(callback: (value: string) => void): void {
        this.subscribe(SettingsEvent.OnChange, callback);
    }
}
