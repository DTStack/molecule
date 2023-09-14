import { BaseService } from 'mo/glue';
import type { BaseAction } from 'mo/glue/baseAction';
import { ActionModel } from 'mo/models/action';
import {
    CommandsRegistry,
    ContextKeyExpr,
    DisposableStore,
    KeybindingsRegistry,
    MenuId,
    MenuRegistry,
} from 'mo/monaco';
import type { IMoleculeContext } from 'mo/types';
import { inject, injectable } from 'tsyringe';

import type { ActivityBarService } from './activityBar';
import type { AuxiliaryBarService } from './auxiliaryBar';
import type { BuiltinService } from './builtin';
import type { ColorThemeService } from './colorTheme';
import type { ContextMenuService } from './contextMenu';
import type { EditorService } from './editor';
import type { ExplorerService } from './explorer';
import type { FolderTreeService } from './folderTree';
import type { LayoutService } from './layout';
import type { LocaleService } from './locale';
import type { MenuBarService } from './menuBar';
import type { OutputService } from './output';
import type { PanelService } from './panel';
import type { SidebarService } from './sidebar';
import type { StatusBarService } from './statusBar';

@injectable()
export class ActionService extends BaseService<ActionModel> {
    protected state = new ActionModel();
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
        @inject('colorTheme') private colorTheme: ColorThemeService
    ) {
        super('action');
    }

    private getContext = (): Omit<IMoleculeContext, 'action'> => {
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
        };
    };

    // FIXME: Commands register to global disposable store
    public registerAction(Ctor: { new (ctx: Omit<IMoleculeContext, 'action'>): BaseAction }) {
        const disposables = new DisposableStore();

        const action = new Ctor(this.getContext());

        const { f1, menu, keybinding, description, ...command } = action.desc;

        // command
        disposables.add(
            CommandsRegistry.registerCommand({
                id: command.id,
                handler: (accessor: any, ...args: any) => action.run(accessor, ...args),
                description,
            })
        );

        // menu
        if (Array.isArray(menu)) {
            disposables.add(
                MenuRegistry.appendMenuItems(
                    menu.map((item) => ({
                        id: item.id,
                        item: { command, ...item },
                    }))
                )
            );
        } else if (menu) {
            disposables.add(MenuRegistry.appendMenuItem(menu.id, { command, ...menu }));
        }
        if (f1) {
            disposables.add(
                MenuRegistry.appendMenuItem(MenuId.CommandPalette, {
                    command,
                    when: command.precondition,
                })
            );
            disposables.add(MenuRegistry.addCommand(command));
        }

        // keybinding
        if (Array.isArray(keybinding)) {
            for (const item of keybinding) {
                KeybindingsRegistry.registerKeybindingRule({
                    ...item,
                    id: command.id,
                    when: command.precondition
                        ? ContextKeyExpr.and(command.precondition, item.when)
                        : item.when,
                });
            }
        } else if (keybinding) {
            KeybindingsRegistry.registerKeybindingRule({
                ...keybinding,
                id: command.id,
                when: command.precondition
                    ? ContextKeyExpr.and(command.precondition, keybinding.when)
                    : keybinding.when,
            });
        }

        this.setState((prev) => ({ ...prev, actions: [...prev.actions, disposables] }));
    }
}
