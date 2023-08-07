import React from 'react';
import { BaseService } from 'mo/glue';
import { auxiliaryBar } from 'mo/models';
import type { UniqueId } from 'mo/types';

export interface IAuxiliaryBarService extends BaseService<auxiliaryBar.IAuxiliaryBar> {
    /**
     * Get the current tab
     */
    getCurrentTab(): auxiliaryBar.IAuxiliaryData | undefined;
    addAuxiliaryBar(tabs: auxiliaryBar.IAuxiliaryData[] | auxiliaryBar.IAuxiliaryData): void;
    /**
     * Set the active one on data
     */
    setActive(current: UniqueId | undefined): void;
    /**
     * Set the mode of auxiliary bar
     */
    setMode: (
        mode:
            | auxiliaryBar.IAuxiliaryBarMode
            | ((preState: auxiliaryBar.IAuxiliaryBarMode) => auxiliaryBar.IAuxiliaryBarMode)
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
    extends BaseService<auxiliaryBar.IAuxiliaryBar>
    implements IAuxiliaryBarService
{
    public state: auxiliaryBar.IAuxiliaryBar;

    constructor() {
        super();
        this.state = new auxiliaryBar.AuxiliaryModel();
    }

    getCurrentTab = () => {
        const { current, data } = this.getState();
        const tab = data?.find((item) => item.key === current);
        return tab;
    };

    addAuxiliaryBar = (tabs: auxiliaryBar.IAuxiliaryData | auxiliaryBar.IAuxiliaryData[]) => {
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

    setMode = (
        mode:
            | auxiliaryBar.IAuxiliaryBarMode
            | ((preState: auxiliaryBar.IAuxiliaryBarMode) => auxiliaryBar.IAuxiliaryBarMode)
    ) => {
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
        this.setState(new auxiliaryBar.AuxiliaryModel());
    };

    // ====== The belows for subscribe activity bar events ======
    public onTabClick(callback: (key: UniqueId) => void) {
        this.subscribe(auxiliaryBar.AuxiliaryEventKind.onTabClick, callback);
    }
}
