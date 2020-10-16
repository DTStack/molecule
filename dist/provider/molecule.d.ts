import * as React from 'react';
import { IExtensionEntry } from '@/core/extension';
import { IMolecule } from '@/core/molecule';
import { ILocalization } from '@/core/localization';
import { IObservable } from '@/common/observable';
interface IMoleculeProps {
    extensionEntry?: IExtensionEntry;
    locales?: ILocalization[];
}
export declare const MoleculeCtx: React.Context<IMolecule>;
export declare class MoleculeProvider extends React.Component<IMoleculeProps> {
    state: IMolecule & IObservable;
    private extensionService;
    constructor(props: any);
    componentDidMount(): void;
    stateChanged(): void;
    initMolecule(): void;
    loadLocales(locales?: ILocalization[]): void;
    getValue(): any;
    render(): JSX.Element;
}
export {};
