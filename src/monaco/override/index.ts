import type { MonacoService } from 'mo/services/monaco';
import type { IMoleculeContext } from 'mo/types';

import {
    _util,
    AbstractEditorCommandsQuickAccessProvider,
    AbstractGotoLineQuickAccessProvider,
    Disposable,
    Extensions,
    ICommandQuickPick,
    ICommandService,
    IDialogService,
    IInstantiationService,
    IKeybindingService,
    IQuickAccessRegistry,
    ITelemetryService,
    Registry,
} from '../types';
import { CancellationToken, IDisposable, MenuRegistry } from '..';

// Reset Quick Access Providers
const QuickAccessRegistry = Registry.as<IQuickAccessRegistry>(Extensions.Quickaccess);
QuickAccessRegistry.providers.length = 0;

export function registerGotoLineQuickAccessProvider(services: IMoleculeContext) {
    class GotoLineQuickAccessProvider extends AbstractGotoLineQuickAccessProvider {
        protected readonly onDidActiveTextEditorControlChange = () => {};

        constructor() {
            super();
        }

        protected provideWithoutTextEditor(picker: any): IDisposable {
            const label = services.locale.localize('cannotRunGotoLine', 'Open a text editor first to go to a line.');

            picker.items = [{ label }];
            picker.ariaLabel = label;

            return Disposable.None;
        }

        protected get activeTextEditorControl() {
            return services.editor.getCurrentGroup()?.editorInstance;
        }

        protected gotoLocation(context: any, options: any): void {
            super.gotoLocation(context, options);
        }
    }

    QuickAccessRegistry.registerQuickAccessProvider({
        ctor: GotoLineQuickAccessProvider,
        prefix: AbstractGotoLineQuickAccessProvider.PREFIX,
        placeholder: 'Type the line number and optional column to go to (e.g. 42:5 for line 42 and column 5).',
        helpEntries: [{ description: 'Go to Line/Column', needsEditor: true }],
    });
}

export function registerCommandsQuickAccessProvider(services: IMoleculeContext & { monaco: MonacoService }) {
    /**
     * @reference 0.31.x/src/vs/workbench/contrib/quickaccess/browser/commandsQuickAccess.ts@CommandsQuickAccessProvider
     */
    class CommandsQuickAccessProvider extends AbstractEditorCommandsQuickAccessProvider {
        protected get activeTextEditorControl() {
            return services.editor.getCurrentGroup()?.editorInstance;
        }

        get defaultFilterValue() {
            return undefined;
        }

        constructor() {
            const instantiationService = services.monaco.services.get(IInstantiationService);
            const keybindingService = services.monaco.services.get(IKeybindingService);
            const commandService = services.monaco.services.get(ICommandService);
            const telemetryService = services.monaco.services.get(ITelemetryService);
            const dialogService = services.monaco.services.get(IDialogService);
            super(
                {
                    showAlias: true,
                    noResultsPick: {
                        label: services.locale.localize('noCommandResults', 'No matching commands'),
                        commandId: '',
                    },
                },
                instantiationService,
                keybindingService,
                commandService,
                telemetryService,
                dialogService
            );
        }

        protected async getCommandPicks(_: IDisposable, token: CancellationToken): Promise<Array<ICommandQuickPick>> {
            if (token.isCancellationRequested) {
                return [];
            }

            return [...this.getCodeEditorCommandPicks(), ...this.getGlobalCommandPicks()];
        }

        private getGlobalCommandPicks(): ICommandQuickPick[] {
            const globalCommandPicks: ICommandQuickPick[] = [];
            MenuRegistry.getCommands().forEach((value, key) => {
                // Label
                let label = (typeof value.title === 'string' ? value.title : value.title.value) || value.id;
                // Category
                const category = typeof value.category !== 'string' ? value.category?.original : value.category;
                if (category) {
                    label = services.locale.localize('commandWithCategory', '${i}: ${i}', category, label);
                }
                // Alias
                const aliasLabel = typeof value.title !== 'string' ? value.title.original : undefined;
                const aliasCategory =
                    category && value.category && typeof value.category !== 'string'
                        ? value.category.original
                        : undefined;
                const commandAlias =
                    aliasLabel && category
                        ? aliasCategory
                            ? `${aliasCategory}: ${aliasLabel}`
                            : `${category}: ${aliasLabel}`
                        : aliasLabel;
                globalCommandPicks.push({
                    commandId: key,
                    commandAlias,
                    label,
                });
            });

            return globalCommandPicks;
        }
    }

    (CommandsQuickAccessProvider as any)[_util.DI_DEPENDENCIES] = [];
    (CommandsQuickAccessProvider as any)[_util.DI_TARGET] = undefined;

    QuickAccessRegistry.registerQuickAccessProvider({
        ctor: CommandsQuickAccessProvider,
        prefix: CommandsQuickAccessProvider.PREFIX,
        contextKey: 'inCommandsPicker',
        placeholder: 'Type the name of a command to run',
        helpEntries: [{ description: 'Show and Run Commands', needsEditor: false }],
    });
}
