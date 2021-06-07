import 'reflect-metadata';
import { Controller } from 'mo/react/controller';
import { container, singleton } from 'tsyringe';
import React from 'react';
import { ExplorerService, IExplorerService } from 'mo/services';
import { localize } from 'mo/i18n/localize';

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
            name: localize('sidebar.explore.outline', 'OUTLINE'),
            toolbar: [
                {
                    id: 'outline-collapse',
                    title: localize('toolbar.collapseAll', 'Collapse All'),
                    iconName: 'codicon-collapse-all',
                },
                {
                    id: 'outline-more',
                    title: localize(
                        'sidebar.explore.outlineMore',
                        'More Actions...'
                    ),
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

// Register singleton
container.resolve(OutlineController);
