import { Button } from '@dtinsight/molecule/esm/client/components/button';
import { ScrollBar } from '@dtinsight/molecule/esm/client/components/scrollBar';
import type { IMoleculeContext } from '@dtinsight/molecule/esm/types';

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

    return (
        <ScrollBar isShowShadow>
            <div style={{ padding: 16 }}>
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
            </div>
        </ScrollBar>
    );
}
