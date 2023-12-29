import { useEffect, useRef } from 'react';
import { Button } from '@dtinsight/molecule/esm/client/components/button';
import LocaleNotification from '@dtinsight/molecule/esm/client/components/localeNotification';
import { ScrollBar } from '@dtinsight/molecule/esm/client/components/scrollBar';
import { type IEditorTab, type IMoleculeContext } from '@dtinsight/molecule/esm/types';

import { getWorkspace } from '../utils';
import './testPane.css';

function randomId() {
    return Math.round(Math.random() * 1000);
}

export default function TestPane({ context: molecule }: { context: IMoleculeContext }) {
    const timeout = useRef<number | undefined>();
    // ================= Activity Bar Operation Region ====================
    const handleAddActivityBar = (disabled = false) => {
        const id = randomId();
        molecule.activityBar.add({
            id,
            name: `ActivityBarItem-${id}`,
            icon: 'edit',
            alignment: 'top',
            disabled,
        });
    };
    const handleAddGlobalActivityBar = () => {
        const id = randomId();
        molecule.activityBar.add({
            id,
            name: `ActivityBarItem-${id}`,
            icon: 'account',
            alignment: 'bottom',
        });
    };
    const handleHiddenActivityBar = () => {
        molecule.layout.setActivityBar((prev) => !prev);
    };
    // ====================================================================

    // ================= Sidebar Operation Region ====================
    const handleToggleLoading = () => {
        molecule.sidebar.setLoading((p) => !p);
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
            disabled: true,
        });
    };
    const removeStatusBar = () => {
        const data = molecule.statusBar.getState().data;
        if (data.length) {
            molecule.statusBar.remove(data.at(-1)!.id);
        }
    };
    const showHideStatusBar = () => {
        molecule.layout.setStatusBar((prev) => !prev);
    };
    // ====================================================================

    // ================= Menu Operation Region ====================
    const appendMenu = function () {
        if (molecule.menuBar.get('testPane')) {
            const id = randomId();
            molecule.menuBar.add(
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
        const parent = molecule.menuBar.get('testPane');
        if (!parent) return;
        if (parent.children?.length) {
            molecule.menuBar.remove(parent.children.at(-1)!.id);
        } else {
            molecule.menuBar.remove(parent.id);
        }
    };
    const updateMenu = function () {
        const parent = molecule.menuBar.get('testPane');
        if (!parent) return;
        if (!parent.children?.length) return;
        const last = parent.children.at(-1)!;
        molecule.menuBar.update({
            id: last.id,
            icon: last.icon === 'check' ? undefined : 'check',
        });
    };

    const showHideMenuBar = () => {
        molecule.layout.setMenuBar((prev) => !prev);
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
        molecule.explorer.add(panels);
    };
    // ====================================================================

    // ================= Folder Tree Operation Region ====================
    const addRootFolder = () => {
        getWorkspace().then((tree) => {
            molecule.folderTree.add(tree);
            molecule.explorer.update({
                id: molecule.builtin.getConstants().EXPLORER_ITEM_WORKSPACE,
                name: tree.name,
            });
        });
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
            disabled: true,
            sortIndex: 3,
            render: () => <div style={{ padding: 20 }}>Test {panelId}</div>,
        });
    };

    const showHidePanel = () => {
        molecule.layout.setPanel((prev) => !prev);
    };
    // ====================================================================

    // ================= Output Operation Region ====================
    const updateOutput = () => {
        molecule.panel.setCurrent(molecule.builtin.getConstants().PANEL_ITEM_OUTPUT);
        molecule.output.append('Number: ' + Math.random() * 10 + '\n');
    };
    // ====================================================================

    // ================= Editor Operation Region ====================
    const newEditor = function () {
        const key = randomId();
        const name = `editor-${key}.ts`;
        const tabData: IEditorTab<any> = {
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
        };
        molecule.editor.open(tabData, molecule.editor.getState().groups?.at(0)?.id);
    };

    const newCustomEditor = function () {
        const key = randomId();
        const name = `editor-${key}.ts`;
        const tabData: IEditorTab<any> = {
            id: key,
            name,
            icon: 'file',
            value: `This is Custom Editor`,
            language: 'typescript',
            breadcrumb: [
                { id: 'app', name: 'app' },
                { id: 'src', name: 'src' },
                { id: 'components', name: 'components' },
                { id: 'editor', name, icon: 'file' },
            ],
            render: ({ value }) => <pre>{JSON.stringify(value, null, 2)}</pre>,
        };
        molecule.editor.open(tabData, molecule.editor.getState().groups?.at(0)?.id);
    };

    const handleToggleEditorLoading = () => {
        molecule.editor.setLoading((p) => !p);
    };

    const updateWelcome = function () {
        molecule.editor.setEntry(<div>Update Welcome Page</div>);
    };

    const updateOptions = function () {
        molecule.editor.updateOptions({
            readOnly: !molecule.editor.getState().options.readOnly,
        });
    };

    const addAction = function () {
        if (!molecule.editor.getToolbar('testPane.excute')) {
            molecule.editor.addToolbars([
                {
                    id: 'testPane.excute',
                    icon: 'play',
                    group: 'inline',
                    sortIndex: 1,
                },
            ]);
        }
    };

    const updateAction = function () {
        if (molecule.editor.getToolbar('testPane.excute')) {
            molecule.editor.updateToolbar({
                id: 'testPane.excute',
                icon: 'loading~spin',
                disabled: true,
            });

            timeout.current = window.setTimeout(() => {
                molecule.editor.updateToolbar({
                    id: 'testPane.excute',
                    icon: 'play',
                    disabled: false,
                });
            }, 5000);
        }
    };

    const openFile = function () {
        const input = document.createElement('input');
        const getFile = (event: Event) => {
            const input = event.target as HTMLInputElement;
            const file = (input.files?.[0] || {
                arrayBuffer: Promise.resolve(null),
            }) as File;

            input?.remove();
            if (!file) return;

            file.arrayBuffer().then((res) => {
                if (!res) return;
                const decoder = new TextDecoder();
                const fileName = file.name;
                const nameArr = fileName?.split('.') || [];
                const typeAutomation: Record<string, string> = {
                    js: 'javascript',
                    jsx: 'javascript',
                    ts: 'typescript',
                    tsx: 'typescript',
                    html: 'html',
                    css: 'css',
                    scss: 'css',
                    less: 'css',
                    json: 'json',
                };
                const extName = nameArr[nameArr.length - 1] || '';
                const contentFile = {
                    id: file.lastModified.toString() + fileName,
                    name: fileName,
                    icon: 'file',
                    value: decoder.decode(res),
                    language: typeAutomation[extName] || '',
                    breadcrumb: [
                        { id: 'molecule', name: 'molecule' },
                        { id: 'editor', name: fileName, icon: 'file' },
                    ],
                };

                molecule.editor.open(contentFile);
            });
        };

        input.type = 'file';
        input.hidden = true;
        input.addEventListener('change', getFile, { once: true });
        document.body.append(input);
        input.click();
    };

    const toggleDirection = () => {
        molecule.layout.updateEditorDirection((prev) =>
            prev === 'vertical' ? 'horizontal' : 'vertical'
        );
    };

    const addNotification = function () {
        molecule.layout.setNotification(true);
        molecule.notification.add([
            {
                id: randomId(),
                value: 'Test Notification!',
            },
        ]);
    };

    const addLocaleNotification = function () {
        molecule.notification.add([
            {
                id: 'locale',
                value: 'test',
                render: () => <LocaleNotification />,
            },
        ]);
        molecule.layout.setNotification(true);
    };

    const removeNotification = function () {
        const { data = [] } = molecule.notification.getState();
        const lastItemId = data[data.length - 1]?.id;
        molecule.layout.setNotification(false);
        if (lastItemId) {
            molecule.notification.remove(lastItemId);
        }
    };

    const toggleNotification = function () {
        molecule.layout.setNotification((visible) => !visible);
    };

    // ====================================================================

    const updateLocale = () => {
        molecule.locale.setCurrent(
            molecule.locale.getCurrentLocale()?.id === 'zh-CN' ? 'en-US' : 'zh-CN'
        );
    };

    const handleAddEditorTreeToolbar = () => {
        molecule.editorTree.addToolbar({
            id: 'test',
            name: 'test',
            icon: 'debug',
            group: 'inline',
        });
    };

    const handleUpdateEditorTreeToolbar = () => {
        molecule.editorTree.updateToolbar({
            id: 'test',
            disabled: true,
        });
    };

    const handleRemoveEditorTreeToolbar = () => {
        molecule.editorTree.removeToolbar('test');
    };

    const addAuxiliary = () => {
        const id = randomId();
        molecule.layout.setAuxiliaryBar(true);
        molecule.auxiliaryBar.add({
            id,
            name: `Auxiliary-${id}`,
            icon: 'debug',
            render() {
                return <pre style={{ margin: 0 }}>{`Auxiliary-${id}`}</pre>;
            },
        });
        molecule.auxiliaryBar.setCurrent(id);
    };

    useEffect(() => {
        return () => {
            if (timeout) {
                clearTimeout(timeout.current);
            }
        };
    }, []);

    return (
        <ScrollBar isShowShadow>
            <div style={{ padding: '0 16px' }}>
                <h2>Editor:</h2>
                <div style={{ gap: 5, display: 'grid' }}>
                    <Button block onClick={newEditor}>
                        New Editor
                    </Button>
                    <Button block onClick={newCustomEditor}>
                        New Custom Editor
                    </Button>
                    <Button block onClick={handleToggleEditorLoading}>
                        Toggle Loading
                    </Button>
                    <Button block onClick={updateWelcome}>
                        Update Welcome Page
                    </Button>
                    <Button block onClick={updateOptions}>
                        Update ReadOnly
                    </Button>
                    <Button block onClick={addAction}>
                        Add Excute Action
                    </Button>
                    <Button block onClick={updateAction}>
                        Update Excute Action
                    </Button>
                    <Button block onClick={openFile}>
                        Open File
                    </Button>
                    <Button block onClick={toggleDirection}>
                        Toggle Direction
                    </Button>
                </div>
                <h2>Auxiliary</h2>
                <div style={{ gap: 5, display: 'grid' }}>
                    <Button block onClick={addAuxiliary}>
                        addAuxiliary
                    </Button>
                </div>
                <h2>Editor Tree:</h2>
                <div style={{ gap: 5, display: 'grid' }}>
                    <Button block onClick={handleAddEditorTreeToolbar}>
                        Add Toolbar
                    </Button>
                    <Button block onClick={handleUpdateEditorTreeToolbar}>
                        Update Toolbar
                    </Button>
                    <Button block onClick={handleRemoveEditorTreeToolbar}>
                        Remove Toolbar
                    </Button>
                </div>
                <h2>ActivityBar:</h2>
                <div style={{ gap: 5, display: 'grid' }}>
                    <Button block onClick={() => handleAddActivityBar()}>
                        Add ActivityBar Item
                    </Button>
                    <Button block onClick={() => handleAddActivityBar(true)}>
                        Add Disabled ActivityBar Item
                    </Button>
                    <Button block onClick={handleAddGlobalActivityBar}>
                        Add Global ActivityBar Item
                    </Button>
                    <Button block onClick={handleHiddenActivityBar}>
                        Show/Hide ActivityBar
                    </Button>
                </div>
                <h2>Sidebar:</h2>
                <div style={{ gap: 5, display: 'grid' }}>
                    <Button block onClick={handleToggleLoading}>
                        Toggle Loading
                    </Button>
                </div>
                <h2>StatusBar:</h2>
                <div style={{ gap: 5, display: 'grid' }}>
                    <Button block onClick={addStatusBar}>
                        Add StatusBar Item
                    </Button>
                    <Button block onClick={removeStatusBar}>
                        Remove Last StatusBar Item
                    </Button>
                    <Button block onClick={showHideStatusBar}>
                        Show/Hide StatusBar
                    </Button>
                </div>
                <h2>MenuBar:</h2>
                <div style={{ gap: 5, display: 'grid' }}>
                    <Button block onClick={appendMenu}>
                        Add MenuBar Item
                    </Button>
                    <Button block onClick={removeMenu}>
                        Remove MenuBar Item
                    </Button>
                    <Button block onClick={updateMenu}>
                        Update MenuBar Item
                    </Button>
                    <Button block onClick={showHideMenuBar}>
                        Show/Hide MenuBar
                    </Button>
                </div>
                <h2>Explorer:</h2>
                <div style={{ gap: 5, display: 'grid' }}>
                    <Button block onClick={addExplorer}>
                        Add Explorer Panel
                    </Button>
                </div>
                <h2>FolderTree:</h2>
                <div style={{ gap: 5, display: 'grid' }}>
                    <Button block onClick={addRootFolder}>
                        Add Root Folder
                    </Button>
                </div>
                <h2>Panel:</h2>
                <div style={{ gap: 5, display: 'grid' }}>
                    <Button block onClick={addPanel}>
                        Add Panel
                    </Button>
                    <Button block onClick={showHidePanel}>
                        Show/Hide Panel
                    </Button>
                </div>
                <h2>Output:</h2>
                <div style={{ gap: 5, display: 'grid' }}>
                    <Button block onClick={updateOutput}>
                        Update Output
                    </Button>
                </div>
                <h2>Notification:</h2>
                <div style={{ gap: 5, display: 'grid' }}>
                    <Button block onClick={addNotification}>
                        Add Notification Item
                    </Button>
                    <Button block onClick={addLocaleNotification}>
                        Add a locale Notification
                    </Button>
                    <Button block onClick={removeNotification}>
                        Remove Notification Item
                    </Button>
                    <Button block onClick={toggleNotification}>
                        Toggle Notification
                    </Button>
                </div>
                <h2>Locale:</h2>
                <div style={{ gap: 5, display: 'grid' }}>
                    <Button block onClick={updateLocale}>
                        Switch locale between English and Chinese
                    </Button>
                </div>
            </div>
        </ScrollBar>
    );
}
