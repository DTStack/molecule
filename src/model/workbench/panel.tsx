import { editor as MonacoEditor } from 'mo/monaco';
import { IActionBarItemProps } from 'mo/components/actionBar';
import { ITabProps } from 'mo/components/tabs/tab';
export interface IPanelItem<T = any> extends ITabProps<T> {
    /**
     * The same as HTMLElement title attribute
     */
    title?: string;
    toolbox?: IActionBarItemProps[];
    data?: T;
    /**
     * The sort of panel item
     */
    sortIndex?: number;
}

export enum PanelEvent {
    onTabChange = 'panel.onTabChange',
    onToolbarClick = 'panel.onToolbarClick',
    onTabClose = 'panel.onTabClose',
}

export interface IPanel {
    current?: IPanelItem | null;
    data?: IPanelItem[];
    toolbox?: IActionBarItemProps[];
}

export interface IOutput extends IPanelItem {
    outputEditorInstance?: MonacoEditor.IStandaloneCodeEditor;
    onUpdateEditorIns?(
        editorInstance: MonacoEditor.IStandaloneCodeEditor
    ): void;
}

export class PanelModel implements IPanel {
    public current: IPanelItem | null;
    public data: IPanelItem[];
    public hidden = false;
    public maximize = false;
    public toolbox: IActionBarItemProps[];

    constructor(
        current: IPanelItem | null = null,
        data: IPanelItem[] = [],
        toolbox: IActionBarItemProps[] = []
    ) {
        this.current = current;
        this.data = data;
        this.toolbox = toolbox;
    }
}
