import './editor.scss';
import * as React from 'react';
import { memo } from 'react';

import MonacoEditor from 'dt-react-monaco-editor';
import SplitPane from 'react-split-pane';

import { prefixClaName } from '@/common/className';
import { IEditor } from '@/core/editor';
import { IEditorGroup } from '@/core/editor';

import Tabs from '@/components/tabs';
import { ITheme } from '@/core/theme';

interface IEditorProps extends IEditor {
    theme: ITheme
}

function renderEditorGroup(group: IEditorGroup, theme: ITheme) {
    const editor = group.activeTab;
    return (
        <div className={prefixClaName('editor-group')} key={group.id}>
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
                            value={editor.value}
                            language={editor.mode}
                            editorInstanceRef={(editorInstance) => {
                                // This assignment will trigger moleculeCtx update, and subNodes update
                                group.editorInstance = editorInstance;
                            } }
                            theme={theme.id}
                            options={editor.options}
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

export default memo(Editor, (prevProps: IEditorProps, nextProps: IEditorProps) => {
    return prevProps.groups !== nextProps.groups ||
    prevProps.render !== nextProps.render ||
    prevProps.current !== nextProps.current;
});
