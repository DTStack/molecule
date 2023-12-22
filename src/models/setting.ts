/**
 * The Settings configuration event definition
 */
export enum SettingsEvent {
    /**
     * The settings content changed
     */
    OnChange = 'settings.onChange',
}

export type ISettings = Record<string, any>;

export class SettingModel {
    constructor(public data: ISettings = {}) {}
}
