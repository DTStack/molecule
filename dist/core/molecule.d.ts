import { IActivityBar } from './activityBar';
import { IEditor } from './editor';
import { ISidebar } from './sidebar';
import { ITheme } from './theme';
export interface IMolecule {
    sidebar: ISidebar;
    activityBar: IActivityBar;
    editor: IEditor;
    theme: ITheme;
}
export declare class Molecule {
    sidebar: ISidebar;
    activityBar: IActivityBar;
    editor: IEditor;
    theme: ITheme;
    constructor(activityBar: IActivityBar, editor: IEditor, theme: ITheme, sidebar: ISidebar);
}
