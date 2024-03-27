import type { IMoleculeContext } from 'mo/types';

import { AbstractGotoLineQuickAccessProvider, Disposable, Extensions, IQuickAccessRegistry, Registry } from '../types';
import { IDisposable } from '..';

// Reset Quick Access Providers
const QuickAccessRegistry = Registry.as<IQuickAccessRegistry>(Extensions.Quickaccess);
QuickAccessRegistry.providers.length = 0;

export function registerGotoLineQuickAccessProvider(services: IMoleculeContext) {
    class GotoLineQuickAccessProvider extends AbstractGotoLineQuickAccessProvider {
        static services = services;
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
