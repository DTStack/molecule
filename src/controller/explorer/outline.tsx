import { Controller } from 'mo/react/controller';
import { singleton } from 'tsyringe';
import { explorerService } from 'mo';
import React from 'react';

export interface IOutlineController {}

@singleton()
export class OutlineController
    extends Controller
    implements IOutlineController {
    constructor() {
        super();
        this.initView();
    }

    private initView() {
        const outlinePanel = {
            id: 'outline',
            name: 'OUTLINE',
            toolbar: [
                {
                    id: 'outline-collapse',
                    title: 'Collapse All',
                    iconName: 'codicon-collapse-all',
                },
                {
                    id: 'outline-more',
                    title: 'More Actions...',
                    iconName: 'codicon-ellipsis',
                },
            ],
        };
        explorerService.addPanel(outlinePanel);
    }

    public readonly onClick = (event: React.MouseEvent) => {
        // console.log('onClick:', panelService);
    };
}
