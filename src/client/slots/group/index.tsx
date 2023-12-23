import { useEffect, useRef } from 'react';
import { classNames } from 'mo/client/classNames';
import ActionBar from 'mo/client/components/actionBar';
import Breadcrumb from 'mo/client/components/breadcrumb';
import Header from 'mo/client/components/header';
import Icon from 'mo/client/components/icon';
import MonacoEditor from 'mo/client/components/monaco';
import { IScrollRef } from 'mo/client/components/scrollBar';
import Tab from 'mo/client/components/tab';
import type { EditorGroupModel, EditorModel } from 'mo/models/editor';
import type {
    ContextMenuGroupHandler,
    ContextMenuWithItemHandler,
    IMenuItemProps,
    UniqueId,
} from 'mo/types';
import { searchById } from 'mo/utils';
import type { editor, IDisposable } from 'monaco-editor';

import variables from './index.scss';

type EditorContextMenu = ContextMenuWithItemHandler<[tabId: UniqueId, groupId: UniqueId]>;
export interface IGroupProps {
    group: EditorGroupModel;
    options: EditorModel['options'];
    toolbar?: IMenuItemProps[];
    onMount?: (tabId: UniqueId, groupId: UniqueId, model: editor.ITextModel) => void;
    onChange?: (
        value: string | undefined,
        ev: editor.IModelContentChangedEvent,
        extraProps: { tabId?: UniqueId; groupId?: UniqueId }
    ) => void;
    onSelectTab?: (tabId: UniqueId, groupId: UniqueId) => void;
    onFocus?: (instance: editor.IStandaloneCodeEditor) => void;
    onCursorSelection?: (
        instance: editor.IStandaloneCodeEditor,
        ev: editor.ICursorSelectionChangedEvent
    ) => void;
    onContextMenu?: EditorContextMenu;
    onToolbarClick?: ContextMenuGroupHandler;
    onCloseTab?: (tabId: UniqueId, groupId: UniqueId) => void;
    onDragStart?: (tabId: UniqueId, groupId: UniqueId) => void;
    onDragOver?: (
        from: { tabId: UniqueId; groupId: UniqueId },
        to: { tabId: UniqueId; groupId: UniqueId }
    ) => void;
    onDragEnd?: (tabId: UniqueId, groupId: UniqueId) => void;
    onDrop?: (
        from: { tabId: UniqueId; groupId: UniqueId },
        to: { tabId: UniqueId; groupId: UniqueId }
    ) => void;
}

export default function Group({
    group,
    options,
    toolbar,
    onSelectTab,
    onMount,
    onChange,
    onFocus,
    onCursorSelection,
    onContextMenu,
    onToolbarClick,
    onCloseTab,
    onDragStart,
    onDragOver,
    onDragEnd,
    onDrop,
}: IGroupProps) {
    const instance = useRef<editor.IStandaloneCodeEditor | undefined>(undefined);
    const disposesRef = useRef<IDisposable[]>([]);
    const ref = useRef<IScrollRef>(null);

    const tab = group.activeTab ? group.data.find?.(searchById(group.activeTab)) : undefined;

    const handleMount = (editor: editor.IStandaloneCodeEditor) => {
        instance.current = editor;
        if (instance.current) {
            while (disposesRef?.current?.length) {
                disposesRef.current.pop()?.dispose();
            }
        }

        const disposes: IDisposable[] = [];

        disposes.push(
            instance.current.onDidChangeModelContent((ev) => {
                onChange?.(instance.current?.getModel()?.getValue(), ev, {
                    tabId: tab?.id,
                    groupId: group?.id,
                });
            })
        );

        disposes.push(
            instance.current.onDidFocusEditorText(() => {
                onFocus?.(instance.current!);
            })
        );

        disposes.push(
            instance.current.onDidChangeCursorSelection((ev) => {
                onCursorSelection?.(instance.current!, ev);
            })
        );
        disposesRef.current = disposes;

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
                {tab?.render ? (
                    tab?.render?.(tab)
                ) : (
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
