import React from 'react';
import { IActionBarItemProps } from '@dtinsight/molecule-ui';
import type { UniqueId } from '@dtinsight/molecule-common';

export enum ExplorerEvent {
    onClick = 'explorer.onClick',
    onPanelToolbarClick = 'explorer.onPanelToolbarClick',
    onCollapseChange = 'explorer.onCollapseChange',
    onRemovePanel = 'explorer.onRemovePanel',
    onCollapseAllFolders = 'explorer.onCollapseAllFolders',
}

export type RenderFunctionProps = (props) => React.ReactNode;
export interface IExplorerPanelItem {
    /**
     * It must be unique in the Explorer Panel Data
     */
    id: UniqueId;
    /**
     * @requires true
     * explorer panel's title
     */
    name: string;
    /**
     * specify panel order
     * the bigger the number is ranked previous
     */
    sortIndex?: number;
    className?: string;
    toolbar?: IActionBarItemProps[];
    renderPanel?: RenderFunctionProps;
    /**
     * whether hidden in explorer
     */
    hidden?: boolean;

    [key: string]: any;
}
export interface IExplorer {
    data: IExplorerPanelItem[];
    headerToolBar?: IActionBarItemProps;
}

export class IExplorerModel implements IExplorer {
    public data: IExplorerPanelItem[];
    public headerToolBar?: IActionBarItemProps;

    constructor(
        data: IExplorerPanelItem[] = [],
        headerToolBar?: IActionBarItemProps
    ) {
        this.data = data;
        this.headerToolBar = headerToolBar;
    }
}
