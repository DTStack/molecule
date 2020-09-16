import { IExtension } from './extension';
import { IWorkbench } from './workbench';
import { ITheme } from './theme';
import { ISettings } from './settings';
import { IKeybinding } from './keybinding';

export interface IMolecule {
    workbench: IWorkbench;
    theme: ITheme;
    settings: ISettings;
    extension: IExtension;
    keybinding: IKeybinding;
};

// export abstract class Molecule {

// }

