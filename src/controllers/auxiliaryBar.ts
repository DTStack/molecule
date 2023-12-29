import { BaseController } from 'mo/glue';
import { AuxiliaryEventKind } from 'mo/models/auxiliaryBar';
import type { UniqueId } from 'mo/types';

export interface IAuxiliaryController {
    onClick?: (key: UniqueId) => void;
}

export class AuxiliaryController extends BaseController implements IAuxiliaryController {
    constructor() {
        super();
    }

    public onClick = (id: UniqueId) => {
        this.emit(AuxiliaryEventKind.onTabClick, id);
    };
}
