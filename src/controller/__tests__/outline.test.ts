import { BuiltinService, ExplorerService } from 'mo/services';
import { modules } from 'mo/services/builtinService/const';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { OutlineController } from '../explorer/outline';

const outlineController = container.resolve(OutlineController);

const explorerService = container.resolve(ExplorerService);
const builtinService = container.resolve(BuiltinService);

describe('The outline controller', () => {
    test('Should support to initialize the outline', () => {
        outlineController.initView();

        const { data } = explorerService.getState();
        expect(data).toHaveLength(1);
        expect(data[0]).toEqual(
            expect.objectContaining(modules.builtInExplorerOutlinePanel())
        );

        explorerService.reset();
    });

    test('Should support to controll the default value', () => {
        builtinService.inactiveModule('builtInExplorerOutlinePanel');
        outlineController.initView();

        const { data } = explorerService.getState();
        expect(data).toHaveLength(0);
    });
});
