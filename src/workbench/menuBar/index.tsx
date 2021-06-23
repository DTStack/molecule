import 'reflect-metadata';
import { connect } from 'mo/react';

import MenuBar from './menuBar';
import { MenuBarService } from 'mo/services';
import { container } from 'tsyringe';
import { MenuBarController } from 'mo/controller/menuBar';
import { KeybindingController } from 'mo/controller';

const menuBarService = container.resolve(MenuBarService);
const menuBarController = container.resolve(MenuBarController);
const keybindingController = container.resolve(KeybindingController);

const MenuBarView = connect(menuBarService, MenuBar, {
    menuBarController,
    keybindingController,
});

export { MenuBar, MenuBarView };
