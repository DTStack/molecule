import {
    IQuickAccessRegistry,
    Extensions,
} from 'monaco-editor/esm/vs/platform/quickinput/common/quickAccess';
import { Registry } from 'monaco-editor/esm/vs/platform/registry/common/platform';

const QuickAccessRegistry = Registry.as<IQuickAccessRegistry>(
    Extensions.Quickaccess
);

/**
 * Register a quickAccessProvider, if it's exist, remove it first and register.
 * @param providerDescriptor
 */
export function registerQuickAccessProvider(providerDescriptor) {
    removeQuickAccessProvider(providerDescriptor.prefix);
    QuickAccessRegistry.registerQuickAccessProvider(providerDescriptor);
}

export function removeQuickAccessProvider(prefix) {
    const index = QuickAccessRegistry.providers.findIndex(
        (item) => item.prefix === prefix
    );
    if (index > -1) {
        QuickAccessRegistry.providers.splice(index, 1);
    }
}
