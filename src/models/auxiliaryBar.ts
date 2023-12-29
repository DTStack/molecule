import type { IterableItem, Render, UniqueId } from 'mo/types';

export enum AuxiliaryEventKind {
    onTabClick = 'AuxiliaryBar.onClick',
}

export interface IAuxiliaryData extends IterableItem, Render<IAuxiliaryData> {}

export class AuxiliaryModel {
    constructor(public data: IAuxiliaryData[] = [], public current?: UniqueId) {}
}
