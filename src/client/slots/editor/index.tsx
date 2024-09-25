import { useMemo } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Progress, Split, Welcome } from 'mo/client/components';
import { useConnector, useEditorPos, useSettings } from 'mo/client/hooks';
import type { IEditorController } from 'mo/controllers/editor';

import Group from '../group';
import variables from './index.scss';

export type IEditorProps = IEditorController;

export default function Editor({
    onMount,
    onModelMount,
    onDiffEditorMount,
    onDiffEditorModelMount,
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
}: IEditorProps) {
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

    const [ref, sizes, useRectResize] = useEditorPos(layout.groupSplitPos, groups.length, layout.editorDirection);

    useRectResize((data) => onPaneSizeChange?.(data));

    const renderGroups = () => {
        return (
            <DndProvider backend={HTML5Backend} context={window}>
                <Split ref={ref} sizes={sizes} split={layout.editorDirection} onChange={onPaneSizeChange}>
                    {groups.map((g) => (
                        <Split.Pane key={g.id} minSize={220}>
                            <Group
                                group={g}
                                toolbar={toolbar}
                                options={options}
                                onMount={onMount}
                                onModelMount={onModelMount}
                                onDiffEditorMount={onDiffEditorMount}
                                onDiffEditorModelMount={onDiffEditorModelMount}
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
