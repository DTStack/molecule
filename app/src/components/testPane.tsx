import { Button } from '@dtinsight/molecule/esm/client/components/button';
import { ScrollBar } from '@dtinsight/molecule/esm/client/components/scrollBar';
import type { IMoleculeContext } from '@dtinsight/molecule/esm/types';
import { TreeNodeModel } from '@dtinsight/molecule/esm/utils/tree';

function randomId() {
    return Math.round(Math.random() * 1000);
}

export default function TestPane({ context: molecule }: { context: IMoleculeContext }) {
    // ================= Activity Bar Operation Region ====================
    const handleAddActivityBar = () => {
        const id = randomId();
        molecule.activityBar.add({
            id,
            name: `ActivityBarItem-${id}`,
            icon: 'edit',
            alignment: 'top',
        });
    };
    const handleAddGloablActivityBar = () => {
        const id = randomId();
        molecule.activityBar.add({
            id,
            name: `ActivityBarItem-${id}`,
            icon: 'account',
            alignment: 'bottom',
        });
    };
    const handleHiddenActivityBar = () => {
        molecule.layout.setActivityBarVisibility((prev) => !prev);
    };
    // ====================================================================

    // ================= Status Bar Operation Region ====================
    const addStatusBar = function () {
        const id = randomId();
        molecule.statusBar.add({
            id,
            name: 'StatusBarItem-' + id,
            sortIndex: 2,
            alignment: 'right',
        });
    };
    const removeStatusBar = () => {
        const data = molecule.statusBar.getState().data;
        if (data.length) {
            molecule.statusBar.remove(data.at(-1)!.id);
        }
    };
    const showHideStatusBar = () => {
        molecule.layout.setStatusBarVisibility((prev) => !prev);
    };
    // ====================================================================

    // ================= Menu Operation Region ====================
    const appendMenu = function () {
        if (molecule.menuBar.getMenuById('testPane')) {
            const id = randomId();
            molecule.menuBar.append(
                {
                    id,
                    name: `MenuBarItem-${id}`,
                },
                'testPane'
            );
        } else {
            molecule.menuBar.setMenus([
                ...molecule.menuBar.getState().data,
                { id: 'testPane', name: 'testPane' },
            ]);
        }
    };
    const removeMenu = function () {
        const parent = molecule.menuBar.getMenuById('testPane');
        if (!parent) return;
        if (parent.children?.length) {
            molecule.menuBar.remove(parent.children.at(-1)!.id);
        } else {
            molecule.menuBar.remove(parent.id);
        }
    };
    const updateMenu = function () {
        const parent = molecule.menuBar.getMenuById('testPane');
        if (!parent) return;
        if (!parent.children?.length) return;
        const last = parent.children.at(-1)!;
        molecule.menuBar.update(last.id, {
            icon: last.icon === 'check' ? undefined : 'check',
        });
    };

    const showHideMenuBar = () => {
        molecule.layout.setMenuBarVisibility((prev) => !prev);
    };
    // ====================================================================

    // ================= Status Bar Operation Region ====================
    const addExplorer = () => {
        const id = randomId();
        const panels = [
            {
                id: `Panel-${id}`,
                name: 'Panel-' + id,
                toolbar: [
                    {
                        icon: 'remove',
                        id: `explorer.remove-${id}`,
                        title: 'remove this panel',
                    },
                ],
            },
        ];
        molecule.explorer.addPanel(panels);
    };
    // ====================================================================

    // ================= Folder Tree Operation Region ====================
    const addRootFolder = () => {
        const children = new Array(50)
            .fill(1)
            .map((_, index) => new TreeNodeModel(index, `test_sql_${index}.sql`, 'File'));
        molecule.folderTree.add(
            new TreeNodeModel(randomId(), 'Sample SQLs', 'RootFolder', children)
        );
    };
    // ====================================================================

    // ================= Panel Operation Region ====================
    const addPanel = () => {
        const id = randomId();
        const panelId = `Panel-${id}`;
        molecule.panel.open({
            id: panelId,
            name: panelId,
            closable: true,
            sortIndex: 3,
            render: () => <div style={{ padding: 20 }}>Test {panelId}</div>,
        });
    };

    const showHidePanel = () => {
        molecule.layout.setPanelVisibility((prev) => !prev);
    };
    // ====================================================================

    // ================= Output Operation Region ====================
    const updateOutput = () => {
        molecule.panel.setActive(molecule.builtin.getState().constants.PANEL_OUTPUT);
        molecule.output.append('Number: ' + Math.random() * 10 + '\n');
    };
    // ====================================================================

    // ================= Editor Operation Region ====================
    const newEditor = function () {
        const key = randomId();
        const name = `editor-${key}.ts`;
        molecule.editor.open(
            {
                id: key,
                name,
                icon: 'file',
                value: `// editor-${key}
            // export interface Type<T> { new (...args: any[]): T; }
            // export type GenericClassDecorator<T> = (target: T) => void;`,
                language: 'typescript',
                breadcrumb: [
                    { id: 'app', name: 'app' },
                    { id: 'src', name: 'src' },
                    { id: 'components', name: 'components' },
                    { id: 'editor', name, icon: 'file' },
                ],
            },
            molecule.editor.getState().groups?.at(0)?.id
        );
    };
    // ====================================================================

    return (
        <ScrollBar isShowShadow>
            <div style={{ padding: 16 }}>
                <h2>Editor:</h2>
                <Button onClick={newEditor}>New Editor</Button>
                <h2>ActivityBar:</h2>
                <Button onClick={handleAddActivityBar}>Add ActivityBar Item</Button>
                <Button onClick={handleAddGloablActivityBar}>Add Global ActivityBar Item</Button>
                <Button onClick={handleHiddenActivityBar}>Show/Hide ActivityBar</Button>
                <h2>StatusBar:</h2>
                <Button onClick={addStatusBar}>Add StatusBar Item</Button>
                <Button onClick={removeStatusBar}>Remove Last StatusBar Item</Button>
                <Button onClick={showHideStatusBar}>Show/Hide StatusBar</Button>
                <h2>MenuBar:</h2>
                <Button onClick={appendMenu}>Add MenuBar Item</Button>
                <Button onClick={removeMenu}>Remove MenuBar Item</Button>
                <Button onClick={updateMenu}>Update MenuBar Item</Button>
                <Button onClick={showHideMenuBar}>Show/Hide MenuBar</Button>
                <h2>Explorer:</h2>
                <Button onClick={addExplorer}>Add Explorer Panel</Button>
                <h2>FolderTree:</h2>
                <Button onClick={addRootFolder}>Add Root Folder</Button>
                <h2>Panel:</h2>
                <Button onClick={addPanel}>Add Panel</Button>
                <Button onClick={showHidePanel}>Show/Hide Panel</Button>
                <h2>Output:</h2>
                <Button onClick={updateOutput}>Update Output</Button>
            </div>
        </ScrollBar>
    );
}
