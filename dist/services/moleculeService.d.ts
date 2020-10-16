import { IEditor } from '@/core/editor';
import { IActivityBar } from '@/core/activityBar';
import { ITheme } from '@/core/theme';
import { ISidebar } from '@/core/sidebar';
export declare class MoleculeService {
    activityBar: IActivityBar;
    editor: IEditor;
    theme: ITheme;
    sidebar: ISidebar;
    constructor(activityBar: IActivityBar, editor: IEditor, theme: ITheme, sidebar: ISidebar);
}
