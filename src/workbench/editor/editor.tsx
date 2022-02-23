import React from 'react';
import { memo } from 'react';
import SplitPane from 'mo/components/split';
import Pane from 'mo/components/split/pane';
import { IEditor, IEditorGroup } from 'mo/model';

import EditorGroup from './group';
import Welcome from './welcome';
import { defaultEditorClassName } from './base';
import { IEditorController } from 'mo/controller/editor';
import type { UniqueId } from 'mo/common/types';
import { ILayout } from 'mo/model/workbench/layout';

export function Editor(
    props: { editor?: IEditor; layout?: ILayout } & IEditorController
) {
    const {
        onClickContextMenu,
        onCloseTab,
        onMoveTab,
        onSelectTab,
        onChangeEditorProps,
        onClickActions,
        onUpdateEditorIns,
        onPaneSizeChange,
        editor,
        layout,
    } = props;
    const {
        groups = [],
        current,
        entry = <Welcome />,
        editorOptions,
    } = editor || {};
    const { groupSplitPos } = layout || {};

    const getEvents = (groupId: UniqueId) => {
        return {
            onMoveTab: (tabs) => onMoveTab?.(tabs, groupId),
            onCloseTab: (tabKey) => onCloseTab?.(tabKey, groupId),
            onSelectTab: (tabKey) => onSelectTab?.(tabKey, groupId),
            onClickActions,
            onUpdateEditorIns,
            onChangeEditorProps,
            onClickContextMenu,
        };
    };

    const renderGroups = () => {
        if (groups.length === 1) {
            return (
                <EditorGroup
                    editorOptions={editorOptions}
                    currentGroup={current!}
                    {...groups[0]}
                    {...getEvents(groups[0].id!)}
                />
            );
        } else if (groups.length > 1) {
            return (
                <SplitPane
                    sizes={groupSplitPos!}
                    split="vertical"
                    onChange={onPaneSizeChange!}
                    allowResize={[false]}
                    onResizeStrategy={() => 'pave'}
                >
                    {groups.map((g: IEditorGroup, index: number) => (
                        <Pane key={`group-${index}${g.id}`} minSize="220px">
                            <EditorGroup
                                editorOptions={editorOptions}
                                currentGroup={current!}
                                {...g}
                                {...getEvents(g.id!)}
                            />
                        </Pane>
                    ))}
                </SplitPane>
            );
        }
        return null;
    };

    return (
        <div className={defaultEditorClassName}>
            {current ? renderGroups() : entry}
        </div>
    );
}

export default memo(Editor);
