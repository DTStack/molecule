import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Pane, SplitPane } from 'mo/client/components/split';
import Welcome from 'mo/client/components/welcome';
import useConnector from 'mo/client/hooks/useConnector';
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
    const { data } = useConnector('contextMenu');

    const { groups = [], current, entry = <Welcome />, editorOptions, toolbar } = editor;

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
                                contextMenu={data.get('editorTab')}
                                toolbar={toolbar}
                                options={editorOptions}
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

    return <div className={variables.container}>{current ? renderGroups() : entry}</div>;
}
