import type { AuxiliaryBarService } from './services/auxiliaryBar';
import type { LayoutService } from './services/layout';

export type UniqueId = string | number;

export interface IContext {
    auxiliaryBar: AuxiliaryBarService;
    layout: LayoutService;
}

export type Functional<T> = (prev: T) => T;

export type WithHiddenProperty<T extends object | void> = T extends void
    ? { hidden: boolean }
    : T & { hidden: boolean };
