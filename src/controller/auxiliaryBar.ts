import 'reflect-metadata';
import { Controller } from 'mo/react/controller';
import { container, singleton } from 'tsyringe';
import { AuxiliaryService, IAuxiliaryBarService } from 'mo/services';
import type { UniqueId } from 'mo/common/types';
import { AuxiliaryEventKind } from 'mo/model';

export interface IAuxiliaryController {
    onClick?: (key: UniqueId) => void;
}

@singleton()
export class AuxiliaryController
    extends Controller
    implements IAuxiliaryController
{
    private readonly auxiliaryService: IAuxiliaryBarService;
    constructor() {
        super();
        this.auxiliaryService = container.resolve(AuxiliaryService);
    }

    public initView = () => {};

    public onClick = (key: UniqueId) => {
        this.auxiliaryService.setActive(
            this.auxiliaryService.getState().current === key ? undefined : key
        );
        this.emit(AuxiliaryEventKind.onTabClick, key);
    };
}
