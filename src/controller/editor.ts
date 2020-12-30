import { EditorEvent, IEditorTab } from 'mo/model/workbench/editor';
import { Controller } from 'mo/react/controller';
import { editorService } from 'mo/services';
import { singleton } from 'tsyringe';

export interface IEditorController {
    onCloseAll?: (group: number) => void;
    onCloseTab?: (tabKey: string, group: number) => void;
    onMoveTab?: <T = any>(updateTabs: IEditorTab<T>[], group: number) => void;
    onSelectTab?: (tabKey: string, group: number) => void;
    onSplitEditorRight?: () => void;
    onUpdateEditorIns?: (editorInstance: any, groupId: number) => void;
}

@singleton()
export class EditorController extends Controller implements IEditorController {
    public onCloseAll = (groupId: number) => {
        editorService.closeAll(groupId);
        this.emit(EditorEvent.OnCloseAll, groupId);
    };

    public onCloseTab = (tabKey?: string, groupId?: number) => {
        if (tabKey && groupId) {
            editorService.closeTab(tabKey, groupId);
            this.emit(EditorEvent.OnCloseTab, tabKey, groupId);
        }
    };

    public onMoveTab = (updateTabs: IEditorTab<any>[], groupId: number) => {
        editorService.updateGroup(groupId, {
            data: updateTabs,
        });
        this.emit(EditorEvent.OnMoveTab, updateTabs, groupId);
    };

    public onSelectTab = (tabKey: string, groupId: number) => {
        editorService.updateCurrent(groupId, tabKey);
        this.emit(EditorEvent.OnSelectTab, tabKey, groupId);
    };

    public onUpdateEditorIns = (editorInstance: any, groupId: number) => {
        if (editorInstance) {
            editorService.updateGroup(groupId, {
                editorInstance: editorInstance,
            });
        }
    };

    public onSplitEditorRight = () => {
        editorService.cloneGroup();
        this.emit(EditorEvent.OnSplitEditorRight);
    };
}
