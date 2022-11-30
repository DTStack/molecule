import 'reflect-metadata';
import React from 'react';
import { container, singleton } from 'tsyringe';
import { Component } from 'mo/react/component';
import {
    AuxiliaryEventKind,
    AuxiliaryModel,
    IAuxiliaryBar,
    IAuxiliaryBarMode,
    IAuxiliaryData,
} from 'mo/model';
import type { UniqueId } from 'mo/common/types';

export interface IAuxiliaryBarService extends Component<IAuxiliaryBar> {
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
        mode:
            | IAuxiliaryBarMode
            | ((preState: IAuxiliaryBarMode) => IAuxiliaryBarMode)
    ) => IAuxiliaryBarMode;
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

@singleton()
export class AuxiliaryBarService
    extends Component<IAuxiliaryBar>
    implements IAuxiliaryBarService
{
    public state: IAuxiliaryBar;

    constructor() {
        super();
        this.state = container.resolve(AuxiliaryModel);
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

    setMode = (
        mode:
            | IAuxiliaryBarMode
            | ((preState: IAuxiliaryBarMode) => IAuxiliaryBarMode)
    ) => {
        if (typeof mode === 'string') {
            this.setState({
                mode,
            });

            return mode;
        }

        const nextMode = mode(this.state.mode);
        this.setState({
            mode: nextMode,
        });
        return nextMode;
    };

    reset = () => {
        this.setState(container.resolve(AuxiliaryModel));
    };

    // ====== The belows for subscribe activity bar events ======
    public onTabClick(callback: (key: UniqueId) => void) {
        this.subscribe(AuxiliaryEventKind.onTabClick, callback);
    }
}
