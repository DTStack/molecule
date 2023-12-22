import { createElement } from 'react';
import Output from 'mo/client/components/output';
import { BaseController } from 'mo/glue';
import type { BuiltinService } from 'mo/services/builtin';
import type { PanelService } from 'mo/services/panel';
import { inject, injectable } from 'tsyringe';

export interface IOutputController extends BaseController {}

@injectable()
export class OutputController extends BaseController implements IOutputController {
    constructor(
        @inject('builtin') private builtin: BuiltinService,
        @inject('panel') private panel: PanelService
    ) {
        super();
        this.initView();
    }

    private initView() {
        const { OUTPUT } = this.builtin.getModules();
        if (OUTPUT) {
            this.panel.add({
                ...OUTPUT,
                render: () => createElement(Output, { ...this }),
            });
            this.panel.setCurrent(OUTPUT.id);
        }
    }
}
