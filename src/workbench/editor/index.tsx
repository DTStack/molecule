import * as React from 'react';
import MonacoEditor from 'dt-react-monaco-editor';
import SplitPane from 'react-split-pane';

import { prefixClaName } from '@/common/className';
import { IEditor } from '@/core/editor';
import { IEditorInstance } from '@/core/editor';

import { MoleculeCtx } from '@/provider/molecule';

interface IEditorProps extends IEditor {
}

import './editor.scss';
import Tabs from '@/components/tabs';
import { IMolecule } from '@/core/molecule';

const renderEditorGroup = function(group: IEditorInstance) {
    const moleculeCtx: IMolecule = React.useContext(MoleculeCtx);

    const editor = group.activeTab;
    return (
        <div className={prefixClaName('editor-group')}>
            <div className="group-header">
                <div className="group-tabs">
                    <Tabs data={group.tabs} />
                </div>
                <div className="group-breadcrumbs"></div>
            </div>
            <div className="group-container">
                {
                    editor.renderPane ?
                        editor.renderPane() :
                        <MonacoEditor
                            value={editor.value}
                            language={editor.mode}
                            editorInstanceRef={(editorInstance) => {
                                group.editorInstance = editorInstance;
                            } }
                            theme={moleculeCtx.theme.id}
                            options={editor.options}
                        />
                }
            </div>
        </div>
    );
};

const renderGroup = function(group: IEditorInstance[]) {
    if (group.length === 1) {
        return renderEditorGroup(group[0]);
    } else if (group.length > 1) {
        const averageNum = Math.round(100 / group.length);
        return (
            <SplitPane
                split={'vertical'}
                defaultSize={`${averageNum}%`}
                // minSize={220}
                primary="first"
                allowResize={true}
            >
                {group.map((g: IEditorInstance) => renderEditorGroup(g))}
            </SplitPane>
        );
    }
    return null;
};

export const Editor = function(editor: IEditorProps) {
    const { group } = editor;
    return (
        <div className={prefixClaName('editor')}>
            { editor.render ? editor.render() : renderGroup(group) }
        </div>
    );
};

export default Editor;
