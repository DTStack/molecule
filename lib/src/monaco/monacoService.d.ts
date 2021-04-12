import 'reflect-metadata';
import { IStandaloneEditorConstructionOptions, IStandaloneCodeEditor } from 'monaco-editor/esm/vs/editor/standalone/browser/standaloneCodeEditor';
import { IEditorOverrideServices } from 'monaco-editor/esm/vs/editor/standalone/browser/standaloneServices';
import { ServiceCollection } from 'monaco-editor/esm/vs/platform/instantiation/common/serviceCollection';
export interface IMonacoService {
    readonly services: ServiceCollection;
    readonly container: HTMLElement | null;
    create(domElement: HTMLElement, options?: IStandaloneEditorConstructionOptions, overrides?: IEditorOverrideServices): IStandaloneCodeEditor;
}
export declare class MonacoService implements IMonacoService {
    private _services;
    private simpleEditorModelResolverService;
    constructor();
    get services(): any;
    get container(): import("../common/dom").HTMLElementType;
    private mergeEditorServices;
    create(domElement: HTMLElement, options?: IStandaloneEditorConstructionOptions, overrides?: IEditorOverrideServices): IStandaloneCodeEditor;
    private createStandaloneServices;
    private overrideServices;
}
export declare const monacoService: IMonacoService;
