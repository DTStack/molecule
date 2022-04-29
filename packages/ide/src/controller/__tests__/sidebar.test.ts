import 'reflect-metadata';
import { container } from 'tsyringe';
import { SidebarController } from '..';

const siderbarController = container.resolve(SidebarController);

describe('The sidebar controller', () => {
    test('Should support to onClick', () => {
        siderbarController.onClick({} as any);
    });
});
