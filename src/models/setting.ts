/**
 * The Settings configuration event definition
 */
export enum SettingsEvent {
    /**
     * The settings content changed
     */
    OnChange = 'settings.onchange',
}

export type ISettings = Record<string, any>;

interface ISetting {
    data: ISettings;
}

export class SettingModel implements ISetting {
    constructor(public data: ISettings = {}) {}
}
