import type { AuxiliaryBarService } from './services/auxiliaryBar';

export type UniqueId = string | number;

export interface IContext {
    auxiliaryBar: AuxiliaryBarService;
}
