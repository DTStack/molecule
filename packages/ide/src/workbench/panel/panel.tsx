import React from 'react';
import { getBEMElement, prefixClaName } from '@dtinsight/molecule-common';
import { IPanel, IPanelItem } from 'mo/model/workbench/panel';
import { IPanelController } from 'mo/controller/panel';
import { Tabs, ActionBar, Scrollable } from '@dtinsight/molecule-ui';

const defaultClassName = prefixClaName('panel');
const panelHeaderClassName = getBEMElement(defaultClassName, 'header');
const panelToolbarClassName = getBEMElement(defaultClassName, 'toolbar');
const panelContainerClassName = getBEMElement(defaultClassName, 'container');

export function Panel(props: IPanel & IPanelController) {
    const { data, current, toolbox, onTabChange, onToolbarClick, onClose } =
        props;
    let toolboxData = toolbox || [];
    if (current && current.toolbox) {
        toolboxData = current.toolbox.concat(toolboxData);
    }

    const content =
        typeof current?.renderPane === 'function'
            ? current?.renderPane?.(current)
            : current?.renderPane;

    const sortedPanels = data?.sort((a: IPanelItem, b: IPanelItem) => {
        if (a.sortIndex && b.sortIndex) {
            return a.sortIndex - b.sortIndex;
        }
        return 1;
    });

    return (
        <div className={defaultClassName}>
            <div className={panelHeaderClassName}>
                <Scrollable noScrollY>
                    <Tabs
                        activeTab={current?.id}
                        data={sortedPanels}
                        onSelectTab={onTabChange}
                        onCloseTab={onClose}
                    />
                </Scrollable>
                <ActionBar
                    className={panelToolbarClassName}
                    data={toolboxData}
                    onClick={onToolbarClick}
                />
            </div>
            <div className={panelContainerClassName} tabIndex={0}>
                {content}
            </div>
        </div>
    );
}

export default Panel;
