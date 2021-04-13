import 'reflect-metadata';
import { Controller } from 'mo/react/controller';
import { container, singleton } from 'tsyringe';
import React from 'react';
import { ExplorerService, IExplorerService } from 'mo/services';

export interface IOutlineController {}

@singleton()
export class OutlineController
    extends Controller
    implements IOutlineController {
    private readonly explorerService: IExplorerService;

    constructor() {
        super();
        this.explorerService = container.resolve(ExplorerService);
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
        this.explorerService.addPanel(outlinePanel);
    }

    public readonly onClick = (event: React.MouseEvent) => {
        // console.log('onClick:', panelService);
    };
}
