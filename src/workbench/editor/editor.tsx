import 'mo/workbench/editor/style.scss';
import * as React from 'react';
import SplitPane from 'react-split-pane';

import MonacoEditor from 'mo/components/monaco-editor';
import { prefixClaName } from 'mo/common/className';
import { IEditor } from 'mo/core/workbench/editor';
import { IEditorGroup } from 'mo/core/workbench/editor';

import Tabs from 'mo/components/tabs';
import { ITheme } from 'mo/core/theme';
import Welcome from './welcome';

interface IEditorProps {
    theme: ITheme;
    editor: IEditor;
}

function renderEditorGroup(group: IEditorGroup, theme: ITheme) {
    const editor = group.activeTab;
    return (
        <div className={`editor-group`} key={`group-${group.id}`}>
            <div className="group-header">
                <div className="group-tabs">
                    <Tabs data={group.tabs} />
                </div>
                <div className="group-breadcrumbs"></div>
            </div>
            <div className="group-container">
                {
                    // Default we use monaco editor, but also you can customize by renderPane() function
                    editor.renderPane ?
                        editor.renderPane() :
                        <MonacoEditor
                            options={{
                                value: editor.value,
                                language: editor.mode || 'sql',
                                theme: theme.id,
                                automaticLayout: true,
                            }}
                            editorInstanceRef={(editorInstance) => {
                                // This assignment will trigger moleculeCtx update, and subNodes update
                                group.editorInstance = editorInstance;
                            } }
                        />
                }
            </div>
        </div>
    );
};

export function renderGroups(groups: IEditorGroup[], theme: ITheme) {
    if (groups.length === 1) {
        return renderEditorGroup(groups[0], theme);
    } else if (groups.length > 1) {
        const averageNum = Math.round(100 / groups.length);
        return (
            <SplitPane
                split={'vertical'}
                defaultSize={`${averageNum}%`}
                primary="first"
                allowResize={true}
            >
                {groups.map((g: IEditorGroup) => renderEditorGroup(g, theme))}
            </SplitPane>
        );
    }
    return null;
};

export function Editor(props: IEditorProps) {
    const { editor, theme } = props;
    const { groups, render } = editor;
    console.log('Editor render:', props);
    let content: React.ReactNode = <Welcome />;
    if (editor.current) {
        content = render ? render() : renderGroups(groups, theme);
    }

    return (
        <div className={prefixClaName('editor')}>
            { content }
        </div>
    );
};

export default Editor;
