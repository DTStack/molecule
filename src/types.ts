import type { AuxiliaryBarService } from './services/auxiliaryBar';
import type { BuiltinService } from './services/builtin';
import type { LayoutService } from './services/layout';
import type { LocaleService } from './services/locale';
import type { StatusBarService } from './services/statusBar';
import type { BaseController } from './glue';

export interface HTMLElementProps extends Omit<HTMLElement, 'title' | 'style' | 'className'> {
    title?: string;
    style?: React.CSSProperties;
    className?: string;
    role?: string;
}

export type UniqueId = string | number;


export interface IContext {
    molecule: {
        auxiliaryBar: AuxiliaryBarService;
        layout: LayoutService;
        statusBar: StatusBarService;
        locale: LocaleService;
        builtin: BuiltinService;
    };
    controllers: { [key in keyof IContext['molecule']]: BaseController };
}
export type IMoleculeContext = IContext['molecule'];

export type Functional<T> = (prev: T) => T;

export type WithHiddenProperty<T extends object | void> = T extends void
    ? { hidden: boolean }
    : T & { hidden: boolean };

/**
 * Returns the international text located by source key，or the default value if it is not find
 * For examples:
 * ```ts
 * localize('id','default value'); // hello ${i}, ${i}
 * localize('id','default value', 'world'); // hello world, ${i}
 * localize('id','default value', 'world', 'molecule'); // hello world, molecule
 * ```
 * @param sourceKey The key value located in the source international text
 * @param defaultValue The default value to be used when not find the international text
 * @param args If provided, it will used as the values to be replaced in the international text
 * @returns
 */
export type Localize = (sourceKey: string, defaultValue: string, ...args: string[]) => string;

// [TODO)
export type IMenuItemProps = any;

/**
 * Defines extension types
 */
export enum IExtensionType {
    Theme = 'Themes',
    Normal = 'normal',
    Settings = 'settings',
    Locals = 'locales',
    Menus = 'menus',
    Workbench = 'workbench',
}

export enum IContributeType {
    Languages = 'languages',
    Commands = 'commands',
    Configuration = 'configuration',
    Grammar = 'grammars',
    Themes = 'themes',
    IconTheme = 'iconThemes',
}

export interface IContribute {
    // [IContributeType.Languages]?: ILocale[];
    // [IContributeType.Commands]?: any;
    // [IContributeType.Configuration]?: any;
    // [IContributeType.Grammar]?: any;
    // [IContributeType.Themes]?: IColorTheme[];
    // [IContributeType.IconTheme]?: IIconTheme[];
}
