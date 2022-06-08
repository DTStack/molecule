import { MonacoEditor } from 'mo/components/monaco';
import { Scrollable } from 'mo/components/scrollable';
import { Tabs } from 'mo/components/tabs';
import { IEditorGroup, IEditorOptions } from 'mo/model';
import React, { useRef, useLayoutEffect } from 'react';
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
import { Menu } from 'mo/components/menu';
import { useContextView } from 'mo/components/contextView';
import { getEventPosition } from 'mo/common/dom';
import Scrollbar from 'react-scrollbars-custom';
import { tabItemActiveClassName } from 'mo/components/tabs/tab';

export interface IEditorGroupProps extends IEditorGroup {
    currentGroup?: IEditorGroup;
    editorOptions?: IEditorOptions;
    group?: IEditorGroup;
}

export function EditorGroup(props: IEditorGroupProps & IEditorController) {
    const {
        id,
        data,
        tab,
        currentGroup,
        group,
        actions = [],
        menu = [],
        onMoveTab,
        onCloseTab,
        onClickContextMenu,
        onChangeEditorProps,
        onSelectTab,
        onClickActions,
        editorOptions,
        onUpdateEditorIns,
    } = props;

    const scrollable = useRef<Scrollbar>(null);
    const groupTabs = useRef<HTMLDivElement>(null);

    const isActiveGroup = id === currentGroup?.id;

    const contextView = useContextView();

    const handleTabContextMenu = (e: React.MouseEvent, tabItem) => {
        const handleOnMenuClick = (e: React.MouseEvent, item) => {
            onClickContextMenu?.(e, item, tabItem);
            contextView.hide();
        };

        contextView?.show(getEventPosition(e), () => (
            <Menu data={menu} onClick={handleOnMenuClick} />
        ));
    };

    useEffect(() => {
        return function cleanup() {
            contextView?.dispose();
        };
    });

    // scoller into view
    useLayoutEffect(() => {
        const activeItem = groupTabs.current?.querySelector<HTMLDivElement>(
            `.${tabItemActiveClassName}`
        );
        if (activeItem) {
            const width = groupTabs.current?.clientWidth || 0;
            const left = activeItem.offsetLeft;
            if (left > width) {
                scrollable.current?.scrollTo(left, 0);
            }
        }
    }, [currentGroup?.id && currentGroup.tab?.id]);

    return (
        <div className={groupClassName}>
            <div className={groupHeaderClassName}>
                <div className={groupTabsClassName} ref={groupTabs}>
                    <Scrollable
                        noScrollY
                        trackStyle={{ height: 3 }}
                        ref={scrollable}
                    >
                        <Tabs
                            editable={true}
                            type="card"
                            data={data}
                            onMoveTab={onMoveTab}
                            onSelectTab={onSelectTab}
                            onContextMenu={handleTabContextMenu}
                            activeTab={isActiveGroup ? tab?.id : ''}
                            onCloseTab={onCloseTab}
                        />
                    </Scrollable>
                </div>
                <EditorAction
                    isActiveGroup={isActiveGroup}
                    actions={actions}
                    menu={menu}
                    onClickActions={onClickActions}
                />
            </div>
            <EditorBreadcrumb breadcrumbs={tab?.breadcrumb || []} />
            <div className={groupContainerClassName}>
                {
                    // Default we use monaco editor, but also you can customize by renderPanel() function or a react element
                    tab?.renderPane ? (
                        typeof tab.renderPane === 'function' ? (
                            tab.renderPane(
                                {
                                    ...tab.data,
                                },
                                tab,
                                group
                            )
                        ) : (
                            tab.renderPane
                        )
                    ) : (
                        <MonacoEditor
                            options={{
                                ...editorOptions,
                                value: tab?.data?.value,
                                language: tab?.data?.language,
                                automaticLayout: true,
                            }}
                            path={tab?.id.toString()}
                            editorInstanceRef={(editorInstance) => {
                                // This assignment will trigger moleculeCtx update, and subNodes update
                                onUpdateEditorIns?.(editorInstance, id!);
                            }}
                            onChangeEditorProps={(preProps, props) => {
                                // Listener event for Editor property update
                                onChangeEditorProps?.(preProps, props);
                            }}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default memo(EditorGroup);
