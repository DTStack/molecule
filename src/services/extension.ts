import { BaseService } from 'mo/glue';
import { ExtensionModel } from 'mo/models/extension';
import {
    Arraylize,
    type IContribute,
    IContributeType,
    type IExtension,
    type IMoleculeContext,
    type UniqueId,
} from 'mo/types';
import { arraylize, searchById } from 'mo/utils';
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
import type { ModuleService } from './module';
import type { MonacoService } from './monaco';
import type { NotificationService } from './notification';
import type { OutputService } from './output';
import type { PanelService } from './panel';
import type { SearchService } from './search';
import type { SettingsService } from './setting';
import type { SidebarService } from './sidebar';
import type { StatusBarService } from './statusBar';

@injectable()
export class ExtensionService extends BaseService<ExtensionModel> {
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
        @inject('editorTree') private editorTree: EditorTreeService,
        @inject('notification') private notification: NotificationService,
        @inject('search') private search: SearchService,
        @inject('settings') private settings: SettingsService,
        @inject('monaco') private monaco: MonacoService,
        @inject('module') private module: ModuleService
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
            notification: this.notification,
            search: this.search,
            settings: this.settings,
        };
    };

    private isExtension(extension: any): extension is IExtension {
        if (!extension) return false;
        return typeof extension === 'object' && ['activate', 'id', 'name'].every((property) => property in extension);
    }

    public get(id: UniqueId) {
        return this.getAll().find(searchById(id));
    }

    public getAll(): IExtension[] {
        return this.getState().data;
    }

    public inactive(predicate: (extension: IExtension) => boolean): void {
        this._predicate = predicate;
    }

    public add(extensions: Arraylize<IExtension>): void {
        this.dispatch((draft) => {
            draft.data.push(...arraylize(extensions));
        });
    }

    public load(onigurumPath?: string) {
        const extensions = this.getAll();
        if (!Array.isArray(extensions)) return;

        extensions.filter(this._predicate).forEach((extension) => {
            if (!this.isExtension(extension)) return;

            if (extension.contributes) {
                this.loadContributes(extension.contributes, onigurumPath);
            }
        });
    }

    public activate() {
        const extensions = this.getAll();
        if (!Array.isArray(extensions)) return;

        const ctx = this.getContext();
        extensions.filter(this._predicate).forEach((extension) => {
            if (!this.isExtension(extension)) return;
            extension.activate(ctx, this.monaco);
        });
    }

    private loadContributes(contributes: IContribute, onigurumPath?: string) {
        const contributeKeys = Object.keys(contributes);
        contributeKeys.forEach((type: string) => {
            switch (type) {
                case IContributeType.Themes: {
                    const themes = contributes[type];
                    if (!Array.isArray(themes)) return;
                    this.colorTheme.add(themes);
                    break;
                }
                case IContributeType.Languages: {
                    const locales = contributes[type];
                    if (!Array.isArray(locales)) return;
                    this.locale.add(locales);
                    break;
                }
                case IContributeType.Commands: {
                    const commands = contributes[type];
                    if (!Array.isArray(commands)) return;
                    commands.forEach((command) => this.action.registerAction(command));
                    break;
                }
                case IContributeType.Modules: {
                    const modules = contributes[type];
                    if (!modules) return;
                    Object.keys(modules).forEach((key) => {
                        this.module.update(key, modules[key]);
                    });
                    break;
                }
                case IContributeType.Grammar: {
                    const grammars = contributes[type];
                    this.colorTheme._activeGrammar(grammars, onigurumPath);

                    break;
                }
                default:
                    break;
            }
        });
    }

    public dispose(extensionId: UniqueId): void {
        const ctx = this.getContext();
        const extension = this.get(extensionId);
        if (extension) {
            extension.dispose?.(ctx);
            this.dispatch((draft) => {
                const idx = draft.data.findIndex(searchById(extensionId));
                if (idx === -1) return;
                draft.data.splice(idx, 1);
            });
        }
    }

    public disposeAll() {
        const extensions = this.getAll();
        extensions.forEach((ext) => {
            const ctx = this.getContext();
            ext.dispose?.(ctx);
        });
        this.reset();
    }

    public reset(): void {
        this.setState(new ExtensionModel());
    }
}
