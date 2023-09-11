import { BaseController } from 'mo/glue';
import { EditorService } from 'mo/services/editor';
import { LayoutService } from 'mo/services/layout';
import type { UniqueId } from 'mo/types';
import type { editor } from 'monaco-editor';
import { inject, injectable } from 'tsyringe';

export interface IEditorController extends BaseController {
    onMount?: (tabId: UniqueId, groupId: UniqueId, model: editor.ITextModel) => void;
    onPaneSizeChange?: (size: number[]) => void;
    onSelectTab?: (tabId: UniqueId, group: UniqueId) => void;
}

@injectable()
export class EditorController extends BaseController implements IEditorController {
    constructor(
        @inject('layout') private layout: LayoutService,
        @inject('editor') private editor: EditorService
    ) {
        super();
    }

    public onPaneSizeChange = (size: number[]) => {
        this.layout.setGroupSplitSize(size);
    };

    public onMount = (tabId: UniqueId, groupId: UniqueId, model: editor.ITextModel) => {
        const tab = this.editor.getTabById(tabId, groupId);
        if (tab) {
            tab.model = model;
            this.editor.updateTab(tab, groupId);
        }
    };

    public onSelectTab = (tabId: UniqueId, groupId: UniqueId) => {
        this.editor.setActive(tabId, groupId);
    };
}
