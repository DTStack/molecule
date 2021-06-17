import { IEditor } from 'mo/model';
import { EditorTreeEvent } from 'mo/model/workbench/explorer/editorTree';
import { Component } from 'mo/react';
import { EditorService } from 'mo/services';
import { container, singleton } from 'tsyringe';

export interface IEditorTreeService {
    onClose(callback: (tabId: string, groupId: number) => void): void;
    onSelect(callback: (tabId: string, groupId: number) => void): void;
}

@singleton()
export class EditorTreeService
    extends Component<IEditor>
    implements IEditorTreeService {
    protected state: IEditor;
    private readonly editorService: EditorService;

    constructor() {
        super();
        this.editorService = container.resolve(EditorService);
        this.state = this.editorService.getState();
    }

    public onClose(callback: (tabId: string, groupId: number) => void) {
        this.subscribe(EditorTreeEvent.onClose, callback);
    }

    public onSelect(callback: (tabId: string, groupId: number) => void) {
        this.subscribe(EditorTreeEvent.onSelect, callback);
    }
}
