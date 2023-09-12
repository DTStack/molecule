import { useRef } from 'react';
import { Editor, type EditorProps } from '@monaco-editor/react';
import { classNames } from 'mo/client/classNames';
import ActionBar from 'mo/client/components/actionBar';
import Breadcrumb from 'mo/client/components/breadcrumb';
import Header from 'mo/client/components/header';
import Icon from 'mo/client/components/icon';
import type { EditorGroupModel, EditorModel } from 'mo/models/editor';
import { ColorThemeService } from 'mo/services/colorTheme';
import { UniqueId } from 'mo/types';
import { searchById } from 'mo/utils';
import type { editor } from 'monaco-editor';

import variables from './index.scss';

export interface IGroupProps {
    group: EditorGroupModel;
    options: EditorModel['editorOptions'];
    onMount?: (tabId: UniqueId, groupId: UniqueId, model: editor.ITextModel) => void;
    onChange?: EditorProps['onChange'];
    onSelectTab?: (tabId: UniqueId, groupId: UniqueId) => void;
}

export default function Group({ group, options, onSelectTab, onMount, onChange }: IGroupProps) {
    const instance = useRef<editor.IStandaloneCodeEditor | undefined>(undefined);

    const tab = group.activeTab ? group.data.find(searchById(group.activeTab)) : undefined;

    const handleMount = (editor: editor.IStandaloneCodeEditor) => {
        instance.current = editor;

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
                extra={<ActionBar data={group.toolbar} />}
            >
                {group.data.map((tab) => (
                    <div
                        key={tab.id}
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
                ))}
            </Header>
            <Breadcrumb className={variables.breadcrumb} routes={tab?.breadcrumb || []} />
            <div className={variables.content}>
                {tab?.render?.(tab) || (
                    <Editor
                        height="100%"
                        defaultValue={tab?.value}
                        options={{
                            ...options,
                            automaticLayout: true,
                        }}
                        language={tab?.language}
                        theme={ColorThemeService.DEFAULT_THEME_CLASS_NAME}
                        keepCurrentModel
                        key={tab?.id}
                        onMount={handleMount}
                        onChange={onChange}
                    />
                )}
            </div>
        </div>
    );
}
