import 'mo/workbench/menuBar/style.scss';
import * as React from 'react';
import { getBEMElement, prefixClaName } from 'mo/common/className';
import { IMenuBar } from 'mo/model/workbench/menuBar';
import { Menu } from 'mo/components/menu';
import { DropDown } from 'mo/components/dropdown';
import { Icon } from 'mo/components/icon';

export interface IMenuBarProps {
    // menuBar: IMenuBar;
}

const initialMenuData = [
    {
        id: 'File',
        name: 'File',
        data: [
            {
                id: 'New File',
                name: 'New File',
            },
            {
                id: 'OpenFile',
                name: 'Open',
            },
        ],
    },
    {
        id: 'Edit',
        name: 'Edit',
        data: [
            {
                id: 'Undo',
                name: 'Undo',
            },
            {
                id: 'Redo',
                name: 'Redo',
            },
        ],
    },
    {
        id: 'Selection',
        name: 'Selection',
        data: [
            {
                id: 'SelectAll',
                name: 'Select All',
            },
            {
                id: 'CopyLineUp',
                name: 'Copy Line Up',
            },
        ],
    },
    {
        id: 'View',
        name: 'View',
        data: [
            {
                id: 'Command Palette',
                name: 'Command Palette',
            },
            {
                id: 'OpenView',
                name: 'Open View',
            },
            {
                id: 'Appearance',
                name: 'Appearance',
                data: [
                    {
                        icon: 'check',
                        id: 'ShowMenuBar',
                        name: 'Show Menu Bar',
                    },
                    {
                        icon: 'check',
                        id: 'ShowSideBar',
                        name: 'Show Side Bar',
                    },
                    {
                        icon: 'check',
                        id: 'ShowStatusBar',
                        name: 'Show Status Bar',
                    },
                    {
                        icon: 'check',
                        id: 'ShowActivityBar',
                        name: 'Show Activity Bar',
                    },
                ],
            },
        ],
    },
    {
        id: 'Run',
        name: 'Run',
        data: [
            {
                id: 'RunTask',
                name: 'Run Task',
            },
        ],
    },
    {
        id: 'Help',
        name: 'Help',
        data: [
            {
                id: 'About',
                name: 'About',
            },
        ],
    },
];

const defaultClassName = prefixClaName('menuBar');
const actionClassName = getBEMElement(defaultClassName, 'action');

function MenuBar(props: IMenuBar) {
    const menuBar = props;
    const click = function (e) {
        menuBar.onClick(e, {
            name: 'test',
        });
    };
    const menu = (
        <Menu onClick={click} style={{ width: 200 }} data={initialMenuData} />
    );
    return (
        <div className={defaultClassName}>
            <DropDown className={actionClassName} placement="right" overlay={menu}>
                <Icon type="menu" />
            </DropDown>
        </div>
    );
}

export default MenuBar;
