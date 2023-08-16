import { BaseService } from 'mo/glue';
import { BuiltinModel } from 'mo/models/builtin';
import { inject, injectable } from 'tsyringe';

import type { LocaleService } from './locale';

export interface IBuiltinService {}

@injectable()
export class BuiltinService extends BaseService<BuiltinModel> implements IBuiltinService {
    protected state: BuiltinModel;

    constructor(@inject('locale') private locale: LocaleService) {
        super();
        this.state = new BuiltinModel(this.locale.localize);
    }
}
