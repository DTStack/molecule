import 'mo/workbench/editor/style.scss';
import * as React from 'react';
import SplitPane from 'react-split-pane';

import MonacoEditor from 'mo/components/monaco-editor';
import { prefixClaName } from 'mo/common/className';
import { IEditor } from 'mo/core/editor';
import { IEditorGroup } from 'mo/core/editor';

import Tabs from 'mo/components/tabs';
import { ITheme } from 'mo/core/theme';

interface IEditorProps extends IEditor {
    theme: ITheme
}

function renderEditorGroup(group: IEditorGroup, theme: ITheme) {
    const editor = group.activeTab;
    return (
        <div className={prefixClaName('editor-group')} key={`group-${group.id}`}>
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
                                language: editor.mode,
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
    const { groups, theme } = props;
    console.log('Editor render:', props);

    return (
        <div className={prefixClaName('editor')}>
            { props.render ? props.render() : renderGroups(groups, theme) }
        </div>
    );
};

export default Editor;
