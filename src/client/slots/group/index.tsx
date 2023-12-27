import { useContext, useRef } from 'react';
import { classNames } from 'mo/client/classNames';
import ActionBar from 'mo/client/components/actionBar';
import Breadcrumb from 'mo/client/components/breadcrumb';
import Header from 'mo/client/components/header';
import Icon from 'mo/client/components/icon';
import KeepAlive from 'mo/client/components/keepAlive';
import MonacoEditor from 'mo/client/components/monaco';
import { IScrollRef } from 'mo/client/components/scrollBar';
import Tab from 'mo/client/components/tab';
import { Context } from 'mo/client/context';
import type { EditorGroupModel, EditorModel } from 'mo/models/editor';
import type {
    ContextMenuHandler,
    GroupMenuHandler,
    IMenuItemProps,
    TabGroup,
    UniqueId,
} from 'mo/types';
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
    onChange?: (
        item: TabGroup & { value: string | undefined },
        ev: editor.IModelContentChangedEvent
    ) => void;
    onSelectTab?: (tabId: UniqueId, groupId: UniqueId) => void;
    onFocus?: (instance: editor.IStandaloneCodeEditor) => void;
    onCursorSelection?: (
        instance: editor.IStandaloneCodeEditor,
        ev: editor.ICursorSelectionChangedEvent
    ) => void;
    onContextMenu?: EditorContextMenu;
    onToolbarClick?: GroupMenuHandler;
    onCloseTab?: (tabId: UniqueId, groupId: UniqueId) => void;
    onDragStart?: (tabId: UniqueId, groupId: UniqueId) => void;
    onDragOver?: (from: TabGroup, to: TabGroup) => void;
    onDragEnd?: (tabId: UniqueId, groupId: UniqueId) => void;
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
    onDragOver,
    onDragEnd,
    onDrop,
}: IGroupProps) {
    const context = useContext(Context);
    const ref = useRef<IScrollRef>(null);
    const viewState = useRef(new WeakMap());

    const tab = group.activeTab ? group.data.find?.(searchById(group.activeTab)) : undefined;

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

    return (
        <div className={variables.group}>
            <Header
                scrollIntoViewDeps={{
                    dep: group.activeTab,
                    activeClassName: variables.active,
                }}
                className={variables.header}
                ref={ref}
                trackStyle={{ height: 3 }}
                extra={
                    <ActionBar
                        data={toolbar}
                        onClick={(item) => onToolbarClick?.(item, group.id)}
                    />
                }
            >
                {group.data.map((tab) => {
                    const active = group.activeTab === tab.id;
                    return (
                        <Tab<{ tabId: UniqueId; groupId: UniqueId }>
                            title={
                                <>
                                    <Icon type={tab.icon} />
                                    <span className={variables.name}>{tab.name}</span>
                                </>
                            }
                            className={classNames(active && variables.active)}
                            key={tab.id}
                            active={active}
                            closable
                            modified={tab.modified}
                            onContextMenu={(pos) => onContextMenu?.(pos, tab.id, group.id)}
                            onClose={() => onCloseTab?.(tab.id, group.id)}
                            onClick={() => onSelectTab?.(tab.id, group.id)}
                            onDragStart={() => {
                                onDragStart?.(tab.id, group.id);
                                return { tabId: tab.id, groupId: group.id };
                            }}
                            onDragOver={(source) =>
                                onDragOver?.(source, { tabId: tab.id, groupId: group.id })
                            }
                            onDragEnd={(source) => onDragEnd?.(source.tabId, source.groupId)}
                            onDrop={(source) =>
                                onDrop?.(source, { tabId: tab.id, groupId: group.id })
                            }
                        />
                    );
                })}
            </Header>
            <Breadcrumb className={variables.breadcrumb} routes={tab?.breadcrumb || []} />
            <div className={variables.content}>
                {tab?.render?.(tab)}
                <KeepAlive active={!tab?.render}>
                    {/* The KeepAlive component will block the context transfer between child components and the current component */}
                    <Context.Provider value={context}>
                        <MonacoEditor
                            options={{
                                ...options,
                                automaticLayout: true,
                            }}
                            model={tab?.model}
                            value={tab?.value}
                            language={tab?.language}
                            onMount={handleMount}
                            onModelMount={handleModelMount}
                        />
                    </Context.Provider>
                </KeepAlive>
            </div>
        </div>
    );
}
