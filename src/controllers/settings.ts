import { BaseController } from 'mo/glue';
import { SettingsService } from 'mo/services/setting';
import { flatObject } from 'mo/utils';
import { inject, injectable } from 'tsyringe';

export interface ISettingsController extends BaseController {}

@injectable()
export class SettingsController extends BaseController implements ISettingsController {
    constructor(@inject('settings') private settings: SettingsService) {
        super();
        this.initView();
    }

    private initView() {
        import('../const/options').then((options) => {
            this.settings.update(flatObject({ editor: options.default }));
        });
    }
}
