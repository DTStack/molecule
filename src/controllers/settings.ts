import { BaseController } from 'mo/glue';
import { SettingsService } from 'mo/services/setting';
import { inject, injectable } from 'tsyringe';

export interface ISettingsController extends BaseController {}

@injectable()
export class SettingsController extends BaseController implements ISettingsController {
    constructor(@inject('settings') private settings: SettingsService) {
        super();
        this.initView();
    }

    private initView() {
        this.settings.update({
            'editor.fontSize': 12,
            'editor.tabSize': 4,
        });
    }
}
