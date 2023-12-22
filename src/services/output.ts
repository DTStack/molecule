import { BaseService } from 'mo/glue';
import { OutputModel } from 'mo/models/output';

export class OutputService extends BaseService<OutputModel> {
    protected state: OutputModel;
    constructor() {
        super('output');
        this.state = new OutputModel();
    }

    public append = (value: string) => {
        this.dispatch((draft) => {
            draft.value += value;
        });
    };
}
