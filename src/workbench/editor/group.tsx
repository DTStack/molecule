import MonacoEditor from 'mo/components/monaco';
import { Scrollable } from 'mo/components/scrollable';
import { Tabs } from 'mo/components/tabs';
import { IEditorGroup } from 'mo/model';
import * as React from 'react';
import { memo } from 'react';
import {
    groupClassName,
    groupContainerClassName,
    groupHeaderClassName,
    groupTabsClassName,
} from './base';
import EditorAction from './action';
import EditorBreadcrumb from './breadcrumb';
import { IEditorController } from 'mo/controller/editor';

export interface IEditorGroupProps extends IEditorGroup {
    currentGroup?: IEditorGroup;
}

function EditorGroup(props: IEditorGroupProps & IEditorController) {
    const {
        id,
        data,
        tab = {},
        currentGroup,
        actions = [],
        menu = [],
        onMoveTab,
        onCloseTab,
        onSelectTab,
        onSplitEditorRight,
        onUpdateEditorIns,
    } = props;

    const isActiveGroup = id === currentGroup?.id;

    return (
        <div className={groupClassName}>
            <div className={groupHeaderClassName}>
                <div className={groupTabsClassName}>
                    <Scrollable>
                        <Tabs
                            closable={true}
                            type="card"
                            data={data}
                            style={{ overflow: 'hidden' }}
                            onMoveTab={onMoveTab}
                            onSelectTab={onSelectTab}
                            activeTab={tab.id}
                            onCloseTab={onCloseTab}
                        />
                    </Scrollable>
                </div>
                <EditorAction
                    isActiveGroup={isActiveGroup}
                    actions={actions}
                    menu={menu}
                    onSplitEditorRight={onSplitEditorRight}
                />
            </div>
            <EditorBreadcrumb breadcrumbs={tab.breadcrumb} />
            <div className={groupContainerClassName}>
                {
                    // Default we use monaco editor, but also you can customize by renderPanel() function
                    tab.renderPanel || (
                        <MonacoEditor
                            options={{
                                value: tab.data?.value,
                                language: tab.data?.language,
                                automaticLayout: true,
                            }}
                            key={tab.id}
                            editorInstanceRef={(editorInstance) => {
                                // This assignment will trigger moleculeCtx update, and subNodes update
                                onUpdateEditorIns?.(editorInstance, id!);
                            }}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default memo(EditorGroup);
