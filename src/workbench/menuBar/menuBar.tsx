import 'mo/workbench/menuBar/style.scss';
import * as React from 'react';
import { getBEMElement, prefixClaName } from 'mo/common/className';
import { IMenuBar } from 'mo/model/workbench/menuBar';
import {
    EDITOR_MENU_FILE_REDO,
    EDITOR_MENU_FILE_UNDO,
} from 'mo/model/workbench/editor';
import { Menu } from 'mo/components/menu';
import { DropDown } from 'mo/components/dropdown';
import { Icon } from 'mo/components/icon';
import { IMenuBarController } from 'mo/controller/menuBar';

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
                id: EDITOR_MENU_FILE_UNDO,
                name: 'Undo',
            },
            {
                id: EDITOR_MENU_FILE_REDO,
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

function MenuBar(props: IMenuBar & IMenuBarController) {
    const { onClick } = props;
    const handleClick = (e: React.MouseEvent, item) => onClick?.(e, item);
    const overlay = (
        <Menu
            onClick={handleClick}
            style={{ width: 200 }}
            data={initialMenuData}
        />
    );
    return (
        <div className={defaultClassName}>
            <DropDown
                trigger="click"
                className={actionClassName}
                placement="right"
                overlay={overlay}
            >
                <Icon type="menu" />
            </DropDown>
        </div>
    );
}

export default MenuBar;
