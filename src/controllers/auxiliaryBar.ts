import { BaseController } from 'mo/glue';
import { auxiliaryBar } from 'mo/models';
import { type IAuxiliaryBarService } from 'mo/services/auxiliaryBar';
import type { UniqueId } from 'mo/types';

export interface IAuxiliaryController {
    onClick?: (key: UniqueId) => void;
}

export class AuxiliaryController extends BaseController implements IAuxiliaryController {
    constructor(private readonly auxiliaryService: IAuxiliaryBarService) {
        super();
    }

    public initView = () => {};

    public onClick = (key: UniqueId) => {
        this.auxiliaryService.setActive(
            this.auxiliaryService.getState().current === key ? undefined : key
        );
        this.emit(auxiliaryBar.AuxiliaryEventKind.onTabClick, key);
    };
}
