import { ISettings, SettingModel } from 'mo/model/settings';
import { Component } from 'mo/react';
import { singleton, container } from 'tsyringe';

export interface ISettingsService extends Component<ISettings> {}

@singleton()
export class SettingsService
    extends Component<ISettings>
    implements ISettingsService {
    protected state: ISettings;

    constructor() {
        super();
        this.state = container.resolve(SettingModel);
    }
}
