import * as React from 'react';
import Collapse, { Panel } from 'mo/components/collapse';
import ExploreActionItem from './exploreActionItem';
import { prefixClaName } from 'mo/common/className';
import { activityBarService, editorService } from 'mo';
import { classNames } from 'mo/common/className';
import './style.scss';
interface IExplorerProps {
}

export const Explorer: React.FunctionComponent<IExplorerProps> = (
    IExplorerProps
) => {
    const AddABar = function () {
        const id = Math.random() * 10 + 1;
        activityBarService.push({
            id: id + '',
            name: 'folder' + id,
            iconName: 'codicon-edit',
        });
    };

    const NewEditor = function () {
        const id = Math.random() * 10 + 1;
        const tabData = {
            id: id,
            name: 'test-tab1',
            value: 'just test tab data',
        };
        console.log('open editor:', tabData);
        editorService.open(tabData, 1);
    };

    const OpenCommand = function () {
        // MonacoEditor.editor.getModel().
    };
    /**
     * waiting service
     * Temporarily use mock data
     */
    const renderFileItems = () => {
        const data = [{
            id: 1,
            iconName: 'codicon-new-file',
            name: 'New File',
        }, {
            id: 2,
            iconName: 'codicon-new-folder',
            name: 'New Folder',
        }, {
            id: 3,
            iconName: 'codicon-refresh',
            name: 'Refresh Explorer',
        }, {
            id: 4,
            iconName: 'codicon-collapse-all',
            name: 'Collapse Folders in Explorer',
        }];
        return data.map((item: any) => <ExploreActionItem key={item.id} {...item} />);
    };
    return (
        <div className={prefixClaName('explorer', 'sidebar')}>
            <Collapse
                accordion={true}
                expandIcon={({ isActive }: any) => <a className={classNames('codicon', isActive ? 'codicon-chevron-down' : 'codicon-chevron-right')}></a>}
            >
                <Panel header={<div className={prefixClaName('explorer-item', 'sidebar')}>
                    <span>OPEN EDITORS</span>
                    <span>
                        {renderFileItems()}
                    </span>
                </div>} key='OPEN EDITORS'>
                    OPEN EDITORS
                    <button onClick={AddABar}>Add Bar</button>
                    <button onClick={NewEditor}>New Editor</button>
                    <button onClick={OpenCommand}>Command Palette</button>
                </Panel>
                <Panel header="Sample-Folder"></Panel>
                <Panel header="OUTLINE">OUTLINE</Panel>
            </Collapse>
        </div>
    );
};
