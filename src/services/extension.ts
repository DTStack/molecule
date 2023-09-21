import { BaseService } from 'mo/glue';
import { ExtensionModel } from 'mo/models/extension';
import type { ILocale } from 'mo/models/locale';
import {
    type IContribute,
    IContributeType,
    type IExtension,
    type IMoleculeContext,
    type UniqueId,
} from 'mo/types';
import { searchById } from 'mo/utils';
import { inject, injectable } from 'tsyringe';

import type { ActionService } from './action';
import type { ActivityBarService } from './activityBar';
import type { AuxiliaryBarService } from './auxiliaryBar';
import type { BuiltinService } from './builtin';
import type { ColorThemeService } from './colorTheme';
import type { ContextMenuService } from './contextMenu';
import type { EditorService } from './editor';
import type { EditorTreeService } from './editorTree';
import type { ExplorerService } from './explorer';
import type { FolderTreeService } from './folderTree';
import type { LayoutService } from './layout';
import type { LocaleService } from './locale';
import type { MenuBarService } from './menuBar';
import type { OutputService } from './output';
import type { PanelService } from './panel';
import type { SidebarService } from './sidebar';
import type { StatusBarService } from './statusBar';

export interface IExtensionService {
    /**
     * Add the extensions to ExtensionService
     * @param extensions The Extensions wait to added
     */
    add(extensions: IExtension[]): void;
    /**
     * Get an extension by the ID
     * @param id The extension ID
     */
    getExtension(id: UniqueId): IExtension | undefined;
    /**
     * Get All extensions
     * @return Extension Array
     */
    getAllExtensions(): IExtension[];
    /**
     * Dispose the specific extension, and remove it from the ExtensionService
     * @param extensionId The extension id is required
     */
    dispose(extensionId: UniqueId): void;
    /**
     * Dispose all extensions, and reset the ExtensionService
     */
    disposeAll(): void;
    /**
     * Disable to activate some extensions, make use of it to filter some
     * extensions no need to activate. You need register the inactive event before the MoleculeProvider declaration.
     * @example
     * ```ts
     *  molecule.extension.inactive((extension: IExtension) => {
     *      if (/^(idA|idB)$/.test(extension.id)) {
     *          return true;
     *      }
     *  });
     *  <MoleculeProvider extensions={[]}></MoleculeProvider>
     * ```
     * @param predicate The predicate function
     */
    inactive(predicate: (extension: IExtension) => boolean): void;
    load(): void;
    activate(): void;
    /**
     * Register a new action which is extends the Action2, and return a disposable instance.
     * @example
     * ```ts
     * const action = class Action extends Action2 {};
     * const disposableAction = registerAction(action);
     * disposableAction.dispose(); // Dispose the action
     * ```
     * @param ctor The action class
     * @return IDisposable The Disposable instance
     */
    // registerAction(ctor: { new (): Action2 }): IDisposable;
    /**
     * Execute the registered command
     * @param id The command ID
     * @param args
     */
    // executeCommand(id: string, ...args: any): void;
    /**
     * Reset the extensions to `[]`
     */
    reset(): void;
}

@injectable()
export class ExtensionService extends BaseService<ExtensionModel> implements IExtensionService {
    protected state: ExtensionModel;
    private _predicate: (extension: IExtension) => boolean = () => true;
    constructor(
        @inject('locale') private locale: LocaleService,
        @inject('builtin') private builtin: BuiltinService,
        @inject('contextMenu') private contextMenu: ContextMenuService,
        @inject('auxiliaryBar') private auxiliaryBar: AuxiliaryBarService,
        @inject('layout') private layout: LayoutService,
        @inject('statusBar') private statusBar: StatusBarService,
        @inject('menuBar') private menuBar: MenuBarService,
        @inject('activityBar') private activityBar: ActivityBarService,
        @inject('sidebar') private sidebar: SidebarService,
        @inject('explorer') private explorer: ExplorerService,
        @inject('folderTree') private folderTree: FolderTreeService,
        @inject('panel') private panel: PanelService,
        @inject('output') private output: OutputService,
        @inject('editor') private editor: EditorService,
        @inject('colorTheme') private colorTheme: ColorThemeService,
        @inject('action') private action: ActionService,
        @inject('editorTree') private editorTree: EditorTreeService
    ) {
        super('extension');
        this.state = new ExtensionModel();
    }

    private getContext = (): IMoleculeContext => {
        return {
            locale: this.locale,
            builtin: this.builtin,
            contextMenu: this.contextMenu,
            auxiliaryBar: this.auxiliaryBar,
            layout: this.layout,
            statusBar: this.statusBar,
            menuBar: this.menuBar,
            activityBar: this.activityBar,
            sidebar: this.sidebar,
            explorer: this.explorer,
            folderTree: this.folderTree,
            panel: this.panel,
            output: this.output,
            editor: this.editor,
            colorTheme: this.colorTheme,
            action: this.action,
            editorTree: this.editorTree,
        };
    };

    private isExtension(extension: any): extension is IExtension {
        if (!extension) return false;
        return (
            typeof extension === 'object' &&
            ['activate', 'id', 'name'].every((property) => property in extension)
        );
    }

    public getExtension(id: UniqueId): IExtension | undefined {
        return this.getState().data.find(searchById(id));
    }

    public reset(): void {
        this.setState(new ExtensionModel());
    }

    public getAllExtensions(): IExtension[] {
        return this.getState().data.concat();
    }

    public inactive(predicate: (extension: IExtension) => boolean): void {
        this._predicate = predicate;
    }

    public add(extensions: IExtension[]): void {
        if (!Array.isArray(extensions)) return;

        // Adding extensions into state
        this.setState((prev) => ({
            ...prev,
            data: [...prev.data, ...extensions],
        }));
        // this.load();
    }

    public load() {
        const extensions = this.getAllExtensions();
        if (!Array.isArray(extensions)) return;

        extensions.filter(this._predicate).forEach((extension) => {
            if (!this.isExtension(extension)) return;

            if (extension.contributes) {
                this.loadContributes(extension.contributes);
            }
        });
    }

    public activate() {
        const extensions = this.getAllExtensions();
        if (!Array.isArray(extensions)) return;

        const ctx = this.getContext();
        extensions.filter(this._predicate).forEach((extension) => {
            if (!this.isExtension(extension)) return;
            extension.activate(ctx);
        });
    }

    private loadContributes(contributes: IContribute) {
        const contributeKeys = Object.keys(contributes);
        contributeKeys.forEach((type: string) => {
            switch (type) {
                case IContributeType.Themes: {
                    const themes = contributes[type];
                    if (!Array.isArray(themes)) return;
                    this.colorTheme.addThemes(themes);
                    break;
                }
                case IContributeType.Languages: {
                    const locales: ILocale[] | undefined = contributes[type];
                    if (!Array.isArray(locales)) return;
                    this.locale.addLocales(locales);
                    break;
                }
                case IContributeType.Commands: {
                    const commands = contributes[type];
                    if (!Array.isArray(commands)) return;
                    commands.forEach((command) => this.action.registerAction(command));
                    break;
                }
            }
        });
    }

    public dispose(extensionId: UniqueId): void {
        const ctx = this.getContext();
        const extension = this.getExtension(extensionId);
        if (extension) {
            extension.dispose?.(ctx);
            this.setState((prev) => ({
                ...prev,
                data: prev.data.filter((ext) => ext !== extension),
            }));
        }
    }

    public disposeAll() {
        const extensions = this.getAllExtensions();
        extensions.forEach((ext) => {
            const ctx = this.getContext();
            ext.dispose?.(ctx);
        });
        this.reset();
    }
}
