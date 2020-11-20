import 'mo/workbench/editor/style.scss';
import * as React from 'react';
import SplitPane from 'react-split-pane';

import MonacoEditor from 'mo/components/monaco-editor';
import { prefixClaName } from 'mo/common/className';

import Tabs from 'mo/components/tabs';
import Welcome from './welcome';
import { IEditor, IEditorGroup } from 'mo/model';

function renderEditorGroup(group: IEditorGroup, changeTab, selectTab) {
    const editor = group.activeTab;
    return (
        <div className={`editor-group`} key={`group-${group.id}`}>
            <div className="group-header">
                <div className="group-tabs">
                    <Tabs data={group.tabs} changeTab={changeTab} selectTab={selectTab}/>
                </div>
                <div className="group-breadcrumbs"></div>
            </div>
            <div className="group-container">
                {
                    // Default we use monaco editor, but also you can customize by renderPane() function
                    editor.renderPane ? (
                        editor.renderPane()
                    ) : (
                        <MonacoEditor
                            options={{
                                value: editor.value,
                                language: editor.mode || 'sql',
                                automaticLayout: true,
                            }}
                            editorInstanceRef={(editorInstance) => {
                                // This assignment will trigger moleculeCtx update, and subNodes update
                                group.editorInstance = editorInstance;
                            }}
                        />
                    )
                }
            </div>
        </div>
    );
}

export function renderGroups(groups: IEditorGroup[], changeTab, selectTab) {
    if (groups.length === 1) {
        return renderEditorGroup(groups[0], changeTab, selectTab);
    } else if (groups.length > 1) {
        const averageNum = Math.round(100 / groups.length);
        return (
            <SplitPane
                split={'vertical'}
                defaultSize={`${averageNum}%`}
                primary="first"
                allowResize={true}
            >
                {groups.map((g: IEditorGroup) => renderEditorGroup(g, changeTab, selectTab))}
            </SplitPane>
        );
    }
    return null;
}

export function Editor(props: IEditor) {
    const { groups, render, current, changeTab, selectTab } = props;
    console.log('Editor render:', props);
    let content: React.ReactNode = <Welcome />;
    if (current) {
        content = render ? render() : renderGroups(groups, (tabs) => changeTab(tabs, 1), selectTab);
    }

    return <div className={prefixClaName('editor')}>{content}</div>;
}

export default Editor;
