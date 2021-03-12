import * as React from 'react';
import { memo } from 'react';
import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane/lib/Pane';
import { IEditor, IEditorGroup } from 'mo/model';

import EditorGroup from './group';
import Welcome from './welcome';
import { defaultEditorClassName } from './base';
import { IEditorController } from 'mo/controller/editor';

export function Editor(props: IEditor & IEditorController) {
    const {
        groups = [],
        current,
        onClickContextMenu,
        onCloseTab,
        onMoveTab,
        onSelectTab,
        groupSplitPos = [],
        onSplitEditorRight,
        onUpdateEditorIns,
        onTabContextMenu,
        onPaneSizeChange,
    } = props;

    const getEvents = (groupId: number) => {
        return {
            onMoveTab: (tabs) => onMoveTab?.(tabs, groupId),
            onCloseTab: (tabKey) => onCloseTab?.(tabKey, groupId),
            onSelectTab: (tabKey) => onSelectTab?.(tabKey, groupId),
            onSplitEditorRight,
            onUpdateEditorIns,
            onTabContextMenu,
            onClickContextMenu,
        };
    };

    const renderGroups = () => {
        if (groups.length === 1) {
            return (
                <EditorGroup
                    currentGroup={current!}
                    {...groups[0]}
                    {...getEvents(groups[0].id!)}
                />
            );
        } else if (groups.length > 1) {
            return (
                <SplitPane split={'vertical'} onChange={onPaneSizeChange}>
                    {groups.map((g: IEditorGroup, index: number) => (
                        <Pane
                            key={`group-${index}${g.id}`}
                            initialSize={
                                groupSplitPos[index]
                                    ? `${groupSplitPos[index]}ratio`
                                    : undefined
                            }
                            minSize="220px"
                        >
                            <EditorGroup
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
            {current ? renderGroups() : <Welcome />}
        </div>
    );
}

export default memo(Editor);