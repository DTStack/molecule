import React from 'react';
import type { UniqueId } from 'mo/types';

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
    constructor(
        public mode: IAuxiliaryBarMode = 'default',
        public data: IAuxiliaryData[] = [],
        public current?: UniqueId,
        public children?: React.ReactNode
    ) {}
}
