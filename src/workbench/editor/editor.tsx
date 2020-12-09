import 'mo/workbench/editor/style.scss';
import * as React from 'react';
import SplitPane from 'react-split-pane';

import MonacoEditor from 'mo/components/monaco-editor';
import { getBEMElement, prefixClaName } from 'mo/common/className';

import Tabs from 'mo/components/tabs';
import Welcome from './welcome';
import { IEditor, IEditorGroup } from 'mo/model';

const defaultEditorClassName = prefixClaName('editor');
const groupClassName = getBEMElement(defaultEditorClassName, 'group');
const groupContainerClassName = getBEMElement(
    defaultEditorClassName,
    'group-container'
);
const groupHeaderClassName = getBEMElement(defaultEditorClassName, 'header');
const groupTabsClassName = getBEMElement(defaultEditorClassName, 'tabs');
const groupBreadcrumbsClassName = getBEMElement(
    defaultEditorClassName,
    'breadcrumbs'
);

function renderEditorGroup(group: IEditorGroup, onMoveTab, onSelectTab) {
    const editor = group.activeTab;
    return (
        <div className={groupClassName} key={`group-${group.id}`}>
            <div className={groupHeaderClassName}>
                <div className={groupTabsClassName}>
                    <Tabs
                        data={group.tabs}
                        onMoveTab={onMoveTab}
                        onTabChange={onSelectTab}
                    />
                </div>
                <div className={groupBreadcrumbsClassName}></div>
            </div>
            <div className={groupContainerClassName}>
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

export function renderGroups(groups: IEditorGroup[], onMoveTab, onSelectTab) {
    if (groups.length === 1) {
        return renderEditorGroup(groups[0], onMoveTab, onSelectTab);
    } else if (groups.length > 1) {
        const averageNum = Math.round(100 / groups.length);
        return (
            <SplitPane
                split={'vertical'}
                defaultSize={`${averageNum}%`}
                primary="first"
                allowResize={true}
            >
                {groups.map((g: IEditorGroup) =>
                    renderEditorGroup(g, onMoveTab, onSelectTab)
                )}
            </SplitPane>
        );
    }
    return null;
}

export function Editor(props: IEditor) {
    const { groups, render, current, onMoveTab, onSelectTab } = props;
    let content: React.ReactNode = <Welcome />;
    if (current) {
        content = render
            ? render()
            : renderGroups(groups, (tabs) => onMoveTab?.(tabs, 1), onSelectTab);
    }

    return <div className={defaultEditorClassName}>{content}</div>;
}

export default Editor;
