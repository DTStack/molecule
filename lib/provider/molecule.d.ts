import * as React from 'react';
import { IColorTheme } from 'mo/model/colorTheme';
import { IExtension } from 'mo/model/extension';
import { ILocalization } from 'mo/model/localization';
interface Props {
    extensions?: IExtension[];
    locales?: ILocalization[];
    colorTheme?: IColorTheme[];
}
export declare const MoleculeCtx: React.Context<{}>;
export declare class MoleculeProvider extends React.Component<Props> {
    private extensionService;
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
