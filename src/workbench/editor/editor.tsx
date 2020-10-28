import 'mo/workbench/editor/style.scss';
import * as React from 'react';
import SplitPane from 'react-split-pane';

import MonacoEditor from 'mo/components/monaco-editor';
import { prefixClaName } from 'mo/common/className';

import Tabs, { ITab } from 'mo/components/tabs';
import Welcome from './welcome';

export interface IEditor {
    current: IEditorGroup | undefined;
    groups: IEditorGroup [];
    closeAll?: () => void;
    onClose?: () => void;
    render?:() => React.ReactElement;
}

export interface IEditorGroup<E = any> {
    id: number;
    activeTab: ITab;
    tabs: ITab[];
    breadcrumb: any[];
    actions: any[];
    menu: any[];
    editorInstance?: E | null;
}
function renderEditorGroup(group: IEditorGroup) {
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

export function renderGroups(groups: IEditorGroup[]) {
    if (groups.length === 1) {
        return renderEditorGroup(groups[0]);
    } else if (groups.length > 1) {
        const averageNum = Math.round(100 / groups.length);
        return (
            <SplitPane
                split={'vertical'}
                defaultSize={`${averageNum}%`}
                primary="first"
                allowResize={true}
            >
                {groups.map((g: IEditorGroup) => renderEditorGroup(g))}
            </SplitPane>
        );
    }
    return null;
};

export function Editor(props: IEditor) {
    const { groups, render, current } = props;
    console.log('Editor render:', props);
    let content: React.ReactNode = <Welcome />;
    if (current) {
        content = render ? render() : renderGroups(groups);
    }

    return (
        <div className={prefixClaName('editor')}>
            { content }
        </div>
    );
};

export default Editor;
