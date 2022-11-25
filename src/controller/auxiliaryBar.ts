import 'reflect-metadata';
import { Controller } from 'mo/react/controller';
import { container, singleton } from 'tsyringe';
import { AuxiliaryBarService, IAuxiliaryBarService } from 'mo/services';
import { AuxiliaryEventKind } from 'mo/model';
import type { UniqueId } from 'mo/common/types';

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
        this.auxiliaryService = container.resolve(AuxiliaryBarService);
    }

    public initView = () => {};

    public onClick = (key: UniqueId) => {
        this.auxiliaryService.setActive(
            this.auxiliaryService.getState().current === key ? undefined : key
        );
        this.emit(AuxiliaryEventKind.onTabClick, key);
    };
}
