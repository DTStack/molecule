import { useCallback, useEffect, useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import ActionBar from 'mo/client/components/actionBar';
import Breadcrumb from 'mo/client/components/breadcrumb';
import Header from 'mo/client/components/header';
import MonacoEditor from 'mo/client/components/monaco';
import type { EditorGroupModel, EditorModel, IEditorTab } from 'mo/models/editor';
import type {
    ContextMenuEditorHandler,
    ContextMenuGroupHandler,
    IMenuItemProps,
    UniqueId,
} from 'mo/types';
import { searchById } from 'mo/utils';
import type { editor } from 'monaco-editor';

import { Tab } from './components';
import variables from './index.scss';

export interface IGroupProps {
    group: EditorGroupModel;
    options: EditorModel['editorOptions'];
    toolbar?: IMenuItemProps[];
    contextMenu?: IMenuItemProps[];
    onMount?: (tabId: UniqueId, groupId: UniqueId, model: editor.ITextModel) => void;
    onChange?: (value: string | undefined, ev: editor.IModelContentChangedEvent) => void;
    onSelectTab?: (tabId: UniqueId, groupId: UniqueId) => void;
    onFocus?: (instance: editor.IStandaloneCodeEditor) => void;
    onCursorSelection?: (
        instance: editor.IStandaloneCodeEditor,
        ev: editor.ICursorSelectionChangedEvent
    ) => void;
    onContextMenu?: ContextMenuEditorHandler;
    onToolbarClick?: ContextMenuGroupHandler;
    onCloseTab?: (tabId: UniqueId, groupId: UniqueId) => void;
    onMoveTab?: (updateTabs: IEditorTab<any>[], groupId?: UniqueId) => void;
}

export default function Group({
    group,
    options,
    toolbar,
    contextMenu,
    onSelectTab,
    onMount,
    onChange,
    onFocus,
    onCursorSelection,
    onContextMenu,
    onToolbarClick,
    onCloseTab,
    onMoveTab,
}: IGroupProps) {
    const instance = useRef<editor.IStandaloneCodeEditor | undefined>(undefined);

    const tab = group.activeTab ? group.data.find?.(searchById(group.activeTab)) : undefined;


    const handleMount = (editor: editor.IStandaloneCodeEditor) => {
        instance.current = editor;

        instance.current.onDidChangeModelContent((ev) => {
            onChange?.(instance.current?.getModel()?.getValue(), ev);
        });

        instance.current.onDidFocusEditorText(() => {
            onFocus?.(instance.current!);
        });

        instance.current.onDidChangeCursorSelection((ev) => {
            onCursorSelection?.(instance.current!, ev);
        });

        if (!tab) return;
        if (tab.model) {
            instance.current.setModel(tab.model);
        } else {
            onMount?.(tab.id, group.id, instance.current.getModel()!);
        }
    };

    useEffect(() => {
        if (instance.current) {
            instance.current.updateOptions(options);
        }
    }, [options]);

    const onChangeTab = useCallback(
        (dragIndex: number, hoverIndex: number) => {
            const dragTab = group.data[dragIndex];
            onMoveTab?.(update(group.data, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragTab],
                ],
            }), group.id);
        }, [onMoveTab, group.data, group.id]);

    const handleDrag = (
        source: EditorGroupModel['data'][number],
        target: EditorGroupModel['data'][number],
        infos: Record<string, any>
    ) => {
        const dragIndex = group.data.indexOf(source);
        const hoverIndex = group.data.indexOf(target);
        const { hoverClientX, hoverMiddleX } = infos;
        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }
        // drag down
        if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
            return;
        }
        // drag up
        if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
            return;
        }
        onChangeTab?.(dragIndex, hoverIndex);
    };

    return (
        <div className={variables.group}>
            <Header
                className={variables.header}
                trackStyle={{ height: 3 }}
                extra={
                    <ActionBar
                        data={toolbar}
                        onClick={(item) => onToolbarClick?.(item, group.id)}
                    />
                }
            >
            <DndProvider backend={HTML5Backend} context={window}>
                {group.data.map((tab) => (
                    <Tab
                        key={tab.id}
                        contextMenu={contextMenu}
                        onContextMenu={onContextMenu}
                        onCloseTab={onCloseTab}
                        onSelectTab={onSelectTab}
                        group={group}
                        tab={tab}
                        variables={variables}
                        onDrag={handleDrag}
                    />
                ))}
            </DndProvider>
            </Header>
            <Breadcrumb className={variables.breadcrumb} routes={tab?.breadcrumb || []} />
            <div className={variables.content}>
                {tab?.render?.(tab) || (
                    <MonacoEditor
                        options={{
                            ...options,
                            automaticLayout: true,
                            value: tab?.value,
                            language: tab?.language,
                        }}
                        key={tab?.id}
                        onMount={handleMount}
                    />
                )}
            </div>
        </div>
    );
}
