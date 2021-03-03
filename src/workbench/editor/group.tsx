import MonacoEditor from 'mo/components/monaco';
import { Scrollable } from 'mo/components/scrollable';
import { Tabs } from 'mo/components/tabs';
import { IEditorGroup } from 'mo/model';
import * as React from 'react';
import { memo, useEffect } from 'react';
import {
    groupClassName,
    groupContainerClassName,
    groupHeaderClassName,
    groupTabsClassName,
} from './base';
import EditorAction from './action';
import EditorBreadcrumb from './breadcrumb';
import { IEditorController } from 'mo/controller/editor';
import { IMenuItem, Menu } from 'mo/components/menu';
import { useContextView } from 'mo/components/contextView';
import { getEventPosition } from 'mo/common/dom';

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
        onClickContextMenu,
        onSelectTab,
        // onTabContextMenu,
        onSplitEditorRight,
        onUpdateEditorIns,
    } = props;

    const isActiveGroup = id === currentGroup?.id;

    const contextView = useContextView()

    const handleTabContextMenu = (e: React.MouseEvent, tabItem) => {

        const handleOnMenuClick = (e: React.MouseEvent, item) => {
            onClickContextMenu?.(e, item, tabItem);
            contextView.hide()
        };

        contextView?.show(getEventPosition(e), () => (
            <Menu data={menu} onClick={handleOnMenuClick}/>
        ))
    };

    useEffect(() => {
        return function cleanup() {
            contextView?.dispose();
        };
    });

    return (
        <div className={groupClassName}>
            <div className={groupHeaderClassName}>
                <div className={groupTabsClassName}>
                    <Scrollable>
                        <Tabs
                            closable={true}
                            type="card"
                            data={data}
                            onMoveTab={onMoveTab}
                            style={{ overflow: 'hidden' }}
                            onSelectTab={onSelectTab}
                            onContextMenu={handleTabContextMenu}
                            activeTab={isActiveGroup ? tab.id : ''}
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
