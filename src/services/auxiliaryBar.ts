import React from 'react';
import { BaseService } from 'mo/glue';
import {
    AuxiliaryEventKind,
    AuxiliaryModel,
    type IAuxiliaryBar,
    type IAuxiliaryBarMode,
    type IAuxiliaryData,
} from 'mo/models/auxiliaryBar';
import type { UniqueId } from 'mo/types';

export interface IAuxiliaryBarService extends BaseService<IAuxiliaryBar> {
    /**
     * Get the current tab
     */
    getCurrentTab(): IAuxiliaryData | undefined;
    addAuxiliaryBar(tabs: IAuxiliaryData[] | IAuxiliaryData): void;
    /**
     * Set the active one on data
     */
    setActive(current: UniqueId | undefined): void;
    /**
     * Set the mode of auxiliary bar
     */
    setMode: (
        mode: IAuxiliaryBarMode | ((preState: IAuxiliaryBarMode) => IAuxiliaryBarMode)
    ) => void;
    /**
     * Set the children of auxiliary bar
     */
    setChildren: (children: React.ReactNode) => void;
    /**
     * Called when auxiliary tab title clicked
     */
    onTabClick: (callback: (key: UniqueId) => void) => void;
    /**
     * Reset all states
     */
    reset: () => void;
}

export class AuxiliaryBarService
    extends BaseService<IAuxiliaryBar>
    implements IAuxiliaryBarService
{
    public state: IAuxiliaryBar;

    constructor() {
        super();
        this.state = new AuxiliaryModel();
    }

    getCurrentTab = () => {
        const { current, data } = this.getState();
        const tab = data?.find((item) => item.key === current);
        return tab;
    };

    addAuxiliaryBar = (tabs: IAuxiliaryData | IAuxiliaryData[]) => {
        const next = Array.isArray(tabs) ? tabs : [tabs];
        this.setState({
            data: this.state.data.concat(next),
        });
    };

    setActive = (current: UniqueId | undefined) => {
        this.setState({ current });
    };

    setChildren = (children: React.ReactNode) => {
        this.setState({
            children,
        });
    };

    setMode = (mode: IAuxiliaryBarMode | ((preState: IAuxiliaryBarMode) => IAuxiliaryBarMode)) => {
        if (typeof mode === 'string') {
            this.setState({
                mode,
            });
            return;
        }

        this.setState((prev) => {
            return { mode: mode(prev.mode) };
        });
    };

    reset = () => {
        this.setState(new AuxiliaryModel());
    };

    // ====== The belows for subscribe activity bar events ======
    public onTabClick(callback: (key: UniqueId) => void) {
        this.subscribe(AuxiliaryEventKind.onTabClick, callback);
    }
}
