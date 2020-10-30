import * as React from 'react';
import Collapse, { Panel } from 'mo/components/collapse';
import { prefixClaName } from 'mo/common/className';
import { activityBar, editor, ActivityBarEvent } from 'mo/index';

interface IExplorerProps {
}

export const Explorer: React.FunctionComponent<IExplorerProps> = (IExplorerProps) => {
    const AddABar = function() {
        const id = Math.random() * 10 + 1;
        activityBar.push({
            id: id + '',
            name: 'folder' + id,
            iconName: 'codicon-edit',
        });
    };

    const NewEditor = function() {
        const id = Math.random() * 10 + 1;
        const tabData = {
            id: id,
            name: 'test-tab1',
            value: 'just test tab data',
        };
        console.log('open editor:', tabData);
        editor.open(tabData, 1);
    };

    const OpenCommand = function() {
        // MonacoEditor.editor.getModel().
    };

    activityBar.subscribe(ActivityBarEvent.OnClick, (data) => {
        console.log('Explore activityBar subscribe onClick:', data);
    });

    return (
        <div className={prefixClaName('explorer', 'sidebar')}>
            <Collapse className="dee">
                <Panel header="OPEN EDITORS">
                    OPEN EDITORS
                    <button onClick={AddABar}>Add Bar</button>
                    <button onClick={NewEditor}>New Editor</button>
                    <button onClick={OpenCommand}>Command Palette</button>
                </Panel>
                <Panel header="Sample-Folder"></Panel>
                <Panel header="OUTLINE">
                    OUTLINE
                </Panel>
            </Collapse>
        </div>
    );
};
