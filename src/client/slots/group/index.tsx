import { useEffect, useRef } from 'react';
import ActionBar from 'mo/client/components/actionBar';
import Breadcrumb from 'mo/client/components/breadcrumb';
import Header from 'mo/client/components/header';
import MonacoEditor from 'mo/client/components/monaco';
import type { EditorGroupModel, EditorModel } from 'mo/models/editor';
import type {
    ContextMenuEditorHandler,
    ContextMenuGroupHandler,
    IDragProps,
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
    onChange?: (value: string | undefined, ev: editor.IModelContentChangedEvent, extraProps: { tabId?: UniqueId; groupId?: UniqueId }) => void;
    onSelectTab?: (tabId: UniqueId, groupId: UniqueId) => void;
    onFocus?: (instance: editor.IStandaloneCodeEditor) => void;
    onCursorSelection?: (
        instance: editor.IStandaloneCodeEditor,
        ev: editor.ICursorSelectionChangedEvent
    ) => void;
    onContextMenu?: ContextMenuEditorHandler;
    onToolbarClick?: ContextMenuGroupHandler;
    onCloseTab?: (tabId: UniqueId, groupId: UniqueId) => void;
    onDrag?: (params: IDragProps) => void;
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
    onDrag,
}: IGroupProps) {
    const instance = useRef<editor.IStandaloneCodeEditor | undefined>(undefined);

    const tab = group.activeTab ? group.data.find?.(searchById(group.activeTab)) : undefined;


    const handleMount = (editor: editor.IStandaloneCodeEditor) => {
        instance.current = editor;

        instance.current.onDidChangeModelContent((ev) => {
            onChange?.(instance.current?.getModel()?.getValue(), ev, { tabId: tab?.id, groupId: group?.id });
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
                        onDrag={onDrag}
                    />
                ))}
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
