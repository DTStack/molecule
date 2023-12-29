import { isUndefined } from 'lodash-es';
import { BaseService } from 'mo/glue';
import { AuxiliaryEventKind, AuxiliaryModel, type IAuxiliaryData } from 'mo/models/auxiliaryBar';
import type { Arraylize, UniqueId } from 'mo/types';
import { arraylize, searchById } from 'mo/utils';

export class AuxiliaryBarService extends BaseService<AuxiliaryModel> {
    public state: AuxiliaryModel;

    constructor() {
        super('auxiliaryBar');
        this.state = new AuxiliaryModel();
    }

    get(id: UniqueId | undefined) {
        if (isUndefined(id)) return;
        return this.getState().data.find(searchById(id));
    }

    getCurrent() {
        return this.getState().current;
    }

    getCurrentBar() {
        return this.get(this.getCurrent());
    }

    setCurrent(id?: UniqueId) {
        this.dispatch((draft) => {
            draft.current = id;
        });
    }

    toggle(id: UniqueId) {
        const current = this.getCurrent();
        if (current === id) {
            this.setCurrent();
        } else {
            this.setCurrent(id);
        }
    }

    add(item: Arraylize<IAuxiliaryData>) {
        this.dispatch((draft) => {
            draft.data.push(...arraylize(item));
        });
    }

    reset() {
        this.setState(new AuxiliaryModel());
    }

    // ===================== Subscriptions =====================
    public onTabClick(callback: (id: UniqueId) => void) {
        this.subscribe(AuxiliaryEventKind.onTabClick, callback);
    }
}
