import { useRef } from 'react';
import { classNames } from 'mo/client/classNames';
import ActionBar from 'mo/client/components/actionBar';
import Breadcrumb from 'mo/client/components/breadcrumb';
import Header from 'mo/client/components/header';
import MonacoEditor from 'mo/client/components/monaco';
import Tab from 'mo/client/components/tab';
import type { EditorGroupModel, EditorModel } from 'mo/models/editor';
import type { ContextMenuHandler, GroupMenuHandler, IMenuItemProps, TabGroup, UniqueId } from 'mo/types';
import { searchById } from 'mo/utils';
import type { editor } from 'monaco-editor';

import variables from './index.scss';

type EditorContextMenu = ContextMenuHandler<[tabId: UniqueId, groupId: UniqueId]>;
export interface IGroupProps {
    group: EditorGroupModel;
    options: EditorModel['options'];
    toolbar?: IMenuItemProps[];
    onMount?: (groupId: UniqueId, editorInstance: editor.IStandaloneCodeEditor) => void;
    onModelMount?: (tabId: UniqueId, groupId: UniqueId, model: editor.ITextModel) => void;
    onChange?: (item: TabGroup & { value: string | undefined }, ev: editor.IModelContentChangedEvent) => void;
    onSelectTab?: (tabId: UniqueId, groupId: UniqueId) => void;
    onFocus?: (instance: editor.IStandaloneCodeEditor) => void;
    onCursorSelection?: (instance: editor.IStandaloneCodeEditor, ev: editor.ICursorSelectionChangedEvent) => void;
    onContextMenu?: EditorContextMenu;
    onToolbarClick?: GroupMenuHandler;
    onCloseTab?: (tabId: UniqueId, groupId: UniqueId) => void;
    onDragStart?: (tabId: UniqueId, groupId: UniqueId) => void;
    onDragEnd?: (tabId: UniqueId, groupId: UniqueId) => void;
    onDragEnter?: (from: TabGroup, to: TabGroup) => void;
    onDragLeave?: (from: TabGroup, to: TabGroup) => void;
    onDragOver?: (from: TabGroup, to: TabGroup) => void;
    onDrop?: (from: TabGroup, to: TabGroup) => void;
}

export default function Group({
    group,
    options,
    toolbar,
    onSelectTab,
    onMount,
    onModelMount,
    onContextMenu,
    onToolbarClick,
    onCloseTab,
    onDragStart,
    onDragEnd,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
}: IGroupProps) {
    const viewState = useRef(new WeakMap());
    const tab = group.data.find(searchById(group.activeTab));

    const handleMount = (editor: editor.IStandaloneCodeEditor) => {
        onMount?.(group.id, editor);

        editor.onDidChangeModel(() => {
            const model = editor.getModel();
            if (model) {
                const state = viewState.current.get(model);
                if (state) {
                    editor.restoreViewState(state);
                    editor.focus();
                }
            }
        });

        editor.onDidBlurEditorText(() => {
            const model = editor.getModel();
            if (model) {
                viewState.current.set(model, editor.saveViewState());
            }
        });
    };

    const handleModelMount = (model: editor.ITextModel) => {
        if (!tab) return;
        if (!tab.model) {
            onModelMount?.(tab.id, group.id, model);
        }
    };

    if (!tab) return null;

    return (
        <div className={variables.group}>
            <Header
                scrollIntoViewDeps={{
                    dep: group.activeTab,
                    activeClassName: variables.active,
                }}
                className={variables.header}
                trackStyle={{ height: 3 }}
                extra={<ActionBar data={toolbar} onClick={(item) => onToolbarClick?.(item, group.id)} />}
            >
                {group.data.map((tab) => {
                    const active = group.activeTab === tab.id;
                    return (
                        <Tab
                            key={tab.id}
                            data={tab}
                            groupId={group.id}
                            className={classNames(active && variables.active)}
                            active={active}
                            onContextMenu={onContextMenu}
                            onClose={onCloseTab}
                            onClick={onSelectTab}
                            onDragStart={onDragStart}
                            onDragEnd={onDragEnd}
                            onDragEnter={onDragEnter}
                            onDragLeave={onDragLeave}
                            onDragOver={onDragOver}
                            onDrop={onDrop}
                        />
                    );
                })}
            </Header>
            <Breadcrumb className={variables.breadcrumb} routes={tab?.breadcrumb || []} />
            <div className={variables.content}>
                {tab.render ? (
                    tab.render?.(tab)
                ) : (
                    <MonacoEditor
                        options={{
                            ...options,
                            automaticLayout: true,
                        }}
                        instance={group.editorInstance}
                        model={tab?.model}
                        value={tab?.value}
                        language={tab?.language}
                        onMount={handleMount}
                        onModelMount={handleModelMount}
                    />
                )}
            </div>
        </div>
    );
}
