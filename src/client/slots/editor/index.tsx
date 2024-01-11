import { useMemo } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Progress, Split, Welcome } from 'mo/client/components';
import useConnector from 'mo/client/hooks/useConnector';
import useSettings from 'mo/client/hooks/useSettings';
import type { IEditorController } from 'mo/controllers/editor';

import Group from '../group';
import variables from './index.scss';

export default function Editor({
    onMount,
    onModelMount,
    onSelectTab,
    onPaneSizeChange,
    onContextMenu,
    onToolbarClick,
    onCloseTab,
    onDragStart,
    onDragEnd,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
}: IEditorController) {
    const editor = useConnector('editor');
    const layout = useConnector('layout');
    const settings = useSettings();

    const { groups = [], current, entry = <Welcome />, options: editorOptions, toolbar, loading } = editor;

    const options = useMemo(
        () => ({
            ...settings.editor,
            ...editorOptions,
        }),
        [editorOptions, settings.editor]
    );

    const renderGroups = () => {
        return (
            <DndProvider backend={HTML5Backend} context={window}>
                <Split sizes={layout.groupSplitPos} split={layout.editorDirection} onChange={onPaneSizeChange}>
                    {groups.map((g) => (
                        <Split.Pane key={g.id} minSize="220px">
                            <Group
                                group={g}
                                toolbar={toolbar}
                                options={options}
                                onMount={onMount}
                                onModelMount={onModelMount}
                                onSelectTab={onSelectTab}
                                onContextMenu={onContextMenu}
                                onToolbarClick={onToolbarClick}
                                onCloseTab={onCloseTab}
                                onDragStart={onDragStart}
                                onDragEnd={onDragEnd}
                                onDragEnter={onDragEnter}
                                onDragLeave={onDragLeave}
                                onDragOver={onDragOver}
                                onDrop={onDrop}
                            />
                        </Split.Pane>
                    ))}
                </Split>
            </DndProvider>
        );
    };

    return (
        <div className={variables.container}>
            <Progress active={loading} />
            {current ? renderGroups() : entry}
        </div>
    );
}
