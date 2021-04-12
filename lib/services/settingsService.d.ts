import { ISettings } from 'mo/model/settings';
import { Component } from 'mo/react';
export interface ISettingsService extends Component<ISettings> {
}
export declare class SettingsService extends Component<ISettings> implements ISettingsService {
    protected state: ISettings;
    constructor();
}
