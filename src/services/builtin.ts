import { BaseService } from 'mo/glue';
import { BuiltinModel } from 'mo/models/builtin';
import { inject, injectable } from 'tsyringe';

import type { LocaleService } from './locale';

export interface IBuiltinService {}

type ModuleKey = keyof BuiltinModel['modules'];

@injectable()
export class BuiltinService extends BaseService<BuiltinModel> implements IBuiltinService {
    protected state: BuiltinModel;

    constructor(@inject('locale') private locale: LocaleService) {
        super('builtin');
        this.state = new BuiltinModel(this.locale.localize);
    }

    public getModules = () => {
        const { modules, disabled } = this.getState();
        return new Proxy<any>(modules, {
            get(_, p: keyof typeof modules) {
                if (p in modules && !disabled.includes(p)) {
                    return modules[p]();
                }
                return null;
            },
        }) as {
            [key in ModuleKey]: ReturnType<BuiltinModel['modules'][key]>;
        };
    };

    public getConstants = () => {
        return this.getState().constants;
    };
}
