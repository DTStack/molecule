import * as React from 'react';
import SplitPane from 'react-split-pane';
import { IEditor, IEditorGroup } from 'mo/model';
import { memo } from 'react';

import EditorGroup from './group';
import Welcome from './welcome';
import { defaultEditorClassName } from './base';
import { IEditorController } from 'mo/controller/editor';

export function Editor<T>(props: IEditor & IEditorController) {
    const {
        groups = [],
        current,
        onCloseTab,
        onMoveTab,
        onSelectTab,
        onSplitEditorRight,
        onUpdateEditorIns,
    } = props;

    const getEvents = (groupId: number) => {
        return {
            setMoveTab: (tabs) => onMoveTab?.(tabs, groupId),
            setCloseTab: (tabKey) => onCloseTab?.(tabKey, groupId),
            setSelectTab: (tabKey) => onSelectTab?.(tabKey, groupId),
            onSplitEditorRight,
            onUpdateEditorIns,
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
                <SplitPane split={'vertical'}>
                    {groups.map((g: IEditorGroup, index: number) => (
                        <EditorGroup
                            key={`group-${index}${g.id}`}
                            currentGroup={current!}
                            {...g}
                            {...getEvents(g.id!)}
                        />
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
