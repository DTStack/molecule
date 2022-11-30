import React from 'react';
import type { UniqueId } from 'mo/common/types';

export enum AuxiliaryEventKind {
    onTabClick = 'AuxiliaryBar.onClick',
}

export type IAuxiliaryBarMode = 'default' | 'tabs';

export type IAuxiliaryData = { key: UniqueId; title: React.ReactNode };

export interface IAuxiliaryBar {
    mode: IAuxiliaryBarMode;
    data: IAuxiliaryData[];
    current?: UniqueId;
    children?: React.ReactNode;
}

export class AuxiliaryModel implements IAuxiliaryBar {
    public mode: IAuxiliaryBarMode = 'default';
    public children: React.ReactNode;
    public data: IAuxiliaryData[] = [];
    public current?: UniqueId;
    constructor(
        mode: IAuxiliaryBarMode = 'default',
        data: IAuxiliaryData[] = [],
        current?: UniqueId,
        children?: React.ReactNode
    ) {
        this.mode = mode;
        this.children = children;
        this.data = data;
        this.current = current;
    }
}
