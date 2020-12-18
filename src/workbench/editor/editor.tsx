import 'mo/workbench/editor/style.scss';
import * as React from 'react';
import SplitPane from 'react-split-pane';

import { getBEMElement, prefixClaName } from 'mo/common/className';
import MonacoEditor from 'mo/components/monaco-editor';
import Tabs from 'mo/components/tabs';
import { tabItemClassName } from 'mo/components/tabs/tabItem';
import { Icon } from 'mo/components/icon';
import Welcome from './welcome';
import { IEditor, IEditorGroup } from 'mo/model';

const defaultEditorClassName = prefixClaName('editor');
const groupClassName = getBEMElement(defaultEditorClassName, 'group');

function renderEditorGroup(
    group: IEditorGroup,
    onMoveTab,
    onCloseTab,
    onSelectTab
) {
    const editor = group.activeTab;
    const tabs = group.tabs?.map((item, index) => {
        return Object.assign({}, item, {
            key: item.key,
            tip: item.path,
            label: [
                <Icon type="new-file" />,
                <span className={getBEMElement(tabItemClassName, 'name')}>
                    {item.name}
                </span>,
            ],
            renderPanel: (
                <MonacoEditor
                    options={{
                        value: item.value,
                        language: item.language || 'sql',
                        automaticLayout: true,
                    }}
                    editorInstanceRef={(editorInstance) => {
                        // This assignment will trigger moleculeCtx update, and subNodes update
                        group.editorInstance = editorInstance;
                    }}
                />
            ),
        });
    });
    return (
        <div className={groupClassName} key={`group-${group.id}`}>
            <Tabs
                closable={true}
                type="editable-card"
                data={tabs}
                onMoveTab={onMoveTab}
                onSelectTab={onSelectTab}
                activeTab={editor.key}
                onCloseTab={onCloseTab}
            />
        </div>
    );
}

export function renderGroups(
    groups: IEditorGroup[],
    onCloseTab,
    onMoveTab,
    onSelectTab
) {
    if (groups.length === 1) {
        return renderEditorGroup(groups[0], onMoveTab, onCloseTab, onSelectTab);
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
                    renderEditorGroup(g, onMoveTab, onCloseTab, onSelectTab)
                )}
            </SplitPane>
        );
    }
    return null;
}

export function Editor(props: IEditor) {
    const {
        groups,
        render,
        current,
        onCloseTab,
        onMoveTab,
        onSelectTab,
    } = props;
    const setMoveTab = (tabs) => onMoveTab?.(tabs, 1);
    const setCloseTab = (tabKey) => onCloseTab?.(tabKey, 1);
    const setSelectTab = (tabKey) => onSelectTab?.(tabKey, 1);

    let content: React.ReactNode = <Welcome />;
    if (current) {
        content = render
            ? render()
            : renderGroups(groups, setCloseTab, setMoveTab, setSelectTab);
    }

    return <div className={defaultEditorClassName}>{content}</div>;
}

export default Editor;
