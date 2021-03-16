import 'mo/workbench/menuBar/style.scss';
import * as React from 'react';
import { getBEMElement, prefixClaName } from 'mo/common/className';
import { IMenuBar } from 'mo/model/workbench/menuBar';
import {
    MENU_FILE_REDO,
    MENU_FILE_UNDO,
    MENU_VIEW_ACTIVITYBAR,
    MENU_VIEW_MENUBAR,
    MENU_VIEW_STATUSBAR,
    MENU_VIEW_SIDEBAR,
} from 'mo/model/workbench/menuBar';
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
                id: MENU_FILE_UNDO,
                name: 'Undo',
            },
            {
                id: MENU_FILE_REDO,
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
                        id: MENU_VIEW_MENUBAR,
                        name: 'Show Menu Bar',
                    },
                    {
                        icon: 'check',
                        id: MENU_VIEW_SIDEBAR,
                        name: 'Show Side Bar',
                    },
                    {
                        icon: 'check',
                        id: MENU_VIEW_STATUSBAR,
                        name: 'Show Status Bar',
                    },
                    {
                        icon: 'check',
                        id: MENU_VIEW_ACTIVITYBAR,
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
    const childRef = React.useRef();
    const handleClick = (e: React.MouseEvent, item) => {
        onClick?.(e, item);
        (childRef.current as any)!.dispose();
    };
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
                ref={childRef}
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
