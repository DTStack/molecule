import { useRef } from 'react';
import { classNames } from 'mo/client/classNames';
import ActionBar from 'mo/client/components/actionBar';
import Breadcrumb from 'mo/client/components/breadcrumb';
import Dropdown from 'mo/client/components/dropdown';
import Header from 'mo/client/components/header';
import Icon from 'mo/client/components/icon';
import MonacoEditor from 'mo/client/components/monaco';
import type { EditorGroupModel, EditorModel } from 'mo/models/editor';
import type {
    ContextMenuEditorHandler,
    ContextMenuGroupHandler,
    IMenuItemProps,
    UniqueId,
} from 'mo/types';
import { searchById } from 'mo/utils';
import type { editor } from 'monaco-editor';

import variables from './index.scss';

export interface IGroupProps {
    group: EditorGroupModel;
    options: EditorModel['editorOptions'];
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
}

export default function Group({
    group,
    options,
    contextMenu,
    onSelectTab,
    onMount,
    onChange,
    onFocus,
    onCursorSelection,
    onContextMenu,
    onToolbarClick,
}: IGroupProps) {
    const instance = useRef<editor.IStandaloneCodeEditor | undefined>(undefined);

    const tab = group.activeTab ? group.data.find(searchById(group.activeTab)) : undefined;

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

    return (
        <div className={variables.group}>
            <Header
                className={variables.header}
                trackStyle={{ height: 3 }}
                extra={
                    <ActionBar
                        data={group.toolbar}
                        onClick={(item) => onToolbarClick?.(item, group.id)}
                    />
                }
            >
                {group.data.map((tab) => (
                    <Dropdown
                        key={tab.id}
                        data={contextMenu}
                        stopPropagation
                        trigger="contextMenu"
                        alignPoint={false}
                        onClick={(item) => onContextMenu?.(item, tab.id, group.id)}
                    >
                        <div
                            className={classNames(
                                variables.tab,
                                group.activeTab === tab.id && variables.active
                            )}
                            onClick={() => onSelectTab?.(tab.id, group.id)}
                        >
                            <Icon type={tab.icon} />
                            {tab.name}
                            <Icon
                                type={tab.modified ? 'primitive-dot' : 'close'}
                                className={classNames(
                                    variables.extra,
                                    tab.modified && variables.activeExtra
                                )}
                            />
                        </div>
                    </Dropdown>
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
