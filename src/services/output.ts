import { BaseService } from 'mo/glue';
import { OutputModel } from 'mo/models/output';

export interface IOutputService extends BaseService<OutputModel> {
    append: (value: string) => void;
}

export class OutputService extends BaseService<OutputModel> implements IOutputService {
    protected state: OutputModel;
    constructor() {
        super('output');
        this.state = new OutputModel();
    }

    public append = (value: string) => {
        this.setState((prev) => ({
            ...prev,
            value: prev.value + value,
        }));
    };
}
