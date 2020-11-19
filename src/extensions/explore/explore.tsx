import * as React from 'react';
import { useState } from 'react';
import Collapse, { Panel } from 'mo/components/collapse';
import TreeView from './tree';
import Toolbar from 'mo/components/toolbar';
import { IActionBarItem } from 'mo/components/actionbar';
import { prefixClaName, codIcon } from 'mo/common/className';
import { Header, Content } from 'mo/workbench/sidebar';
import { data } from './treeMock'
interface IExplorerProps {
    isActive?: boolean;
}

export interface IPanelItem extends IActionBarItem {
    renderPanel?: () => React.ReactNode | JSX.Element;
}
interface IState {
    activePanelKey: React.Key | React.Key[];
    panelSet: IPanelItem[];
    explorerToolbar: IActionBarItem[];
}

const initState = {
    activePanelKey: '',
    explorerToolbar: [
        {
            id: 'explorer-more',
            title: 'View and More Actions...',
            iconName: 'codicon-ellipsis',
        }
    ],
    panelSet: [
        {
            id: 'editors',
            name: 'OPEN EDITORS',
            toolbar: [
                {
                    id: 'toggle',
                    title: 'Toggle Vertical',
                    disabled: true,
                    iconName: 'codicon-editor-layout',
                },
                {
                    id: 'save',
                    title: 'Save All',
                    disabled: true,
                    iconName: 'codicon-save-all',
                },
                {
                    id: 'close',
                    title: 'Close All Editors',
                    iconName: 'codicon-close-all',
                },
            ],
            renderPanel: () => {
                return <span>editors</span>
            }
        },
        {
            id: 'sample_folder',
            name: 'Sample Folder',
            toolbar: [
                {
                    id: 'new_file',
                    title: 'New File',
                    iconName: 'codicon-new-file',
                },
                {
                    id: 'new_folder',
                    title: 'New Folder',
                    iconName: 'codicon-new-folder',
                },
                {
                    id: 'refresh',
                    title: 'Refresh Explorer',
                    iconName: 'codicon-refresh',
                },
                {
                    id: 'collapse',
                    title: 'Collapse Folders in Explorer',
                    iconName: 'codicon-collapse-all',
                },
            ],
            renderPanel: () => {
                return <TreeView data={data}/>
            }
        },
        {
            id: 'outline',
            name: 'OUTLINE',
            toolbar: [
                {
                    id: 'outline-collapse',
                    title: 'Collapse All',
                    iconName: 'codicon-collapse-all',
                },
                {
                    id: 'outline-more',
                    title: 'More Actions...',
                    iconName: 'codicon-ellipsis',
                },
            ]
        }
    ]
}
export const Explorer: React.FunctionComponent<IExplorerProps> = (
    IExplorerProps
) => {
    const [state, setState] = useState<IState>(initState)
    const onChangeCallback = (key: React.Key | React.Key[]) => {
        setState((state: IState) => ({ ...state, activePanelKey: key }))
    }
    const onClick = (e, item) => {
        e.stopPropagation()
        console.log('onClick:', e, item);
    };
    const render = (render) => {
        if (render) {
            return render()
        } else {
            return 'cannot provide...'
        }
    }
    const { panelSet, explorerToolbar, activePanelKey } = state;
    return (
        <div className={prefixClaName('explorer', 'sidebar')}>
            <Header
                title={'Explorer'}
                toolbar={<Toolbar data={explorerToolbar} onClick={onClick} />}
            />
            <Content>
                <Collapse
                    accordion={true}
                    activeKey={activePanelKey}
                    onChange={(activeKey: React.Key | React.Key[]) => { onChangeCallback(activeKey) }}
                    expandIcon={({ isActive }: IExplorerProps) =>
                        codIcon(isActive ? 'codicon-chevron-down' : 'codicon-chevron-right')}
                >
                    {
                        panelSet.map((panel: IPanelItem) => <Panel
                            key={panel.id}
                            header={panel.name}
                            extra={activePanelKey === panel.id && <Toolbar key={panel.id} data={panel.toolbar} onClick={onClick} />}
                        >
                            {render(panel.renderPanel)}
                        </Panel>)
                    }
                </Collapse>
            </Content>
        </div>
    );
};
