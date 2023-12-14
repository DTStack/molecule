import { useMemo } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Progress from 'mo/client/components/progress';
import { Pane, SplitPane } from 'mo/client/components/split';
import Welcome from 'mo/client/components/welcome';
import useConnector from 'mo/client/hooks/useConnector';
import useSettings from 'mo/client/hooks/useSettings';
import type { IEditorController } from 'mo/controllers/editor';

import Group from '../group';
import variables from './index.scss';

export default function Editor({
    onMount,
    onSelectTab,
    onPaneSizeChange,
    onFocus,
    onContextMenu,
    onCursorSelection,
    onToolbarClick,
    onCloseTab,
    onChange,
    onDrag,
}: IEditorController) {
    const editor = useConnector('editor');
    const layout = useConnector('layout');
    const settings = useSettings();

    const { groups = [], current, entry = <Welcome />, editorOptions, toolbar, loading } = editor;

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
                <SplitPane
                    sizes={layout.groupSplitPos}
                    split={layout.editorGroupDirection}
                    onChange={onPaneSizeChange}
                >
                    {groups.map((g) => (
                        <Pane key={g.id} minSize="220px">
                            <Group
                                group={g}
                                isActive={current === g.id}
                                toolbar={toolbar}
                                options={options}
                                onMount={onMount}
                                onSelectTab={onSelectTab}
                                onFocus={onFocus}
                                onCursorSelection={onCursorSelection}
                                onContextMenu={onContextMenu}
                                onToolbarClick={onToolbarClick}
                                onCloseTab={onCloseTab}
                                onDrag={onDrag}
                                onChange={onChange}
                            />
                        </Pane>
                    ))}
                </SplitPane>
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
