import { Float } from 'mo/model';
import { MonacoService } from 'mo/monaco/monacoService';
import {
    PanelService,
    StatusBarService,
    ProblemsService,
    BuiltinService,
} from 'mo/services';
import { constants, modules } from 'mo/services/builtinService/const';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { ProblemsController } from '../problems';

const problemsController = container.resolve(ProblemsController);
const panelService = container.resolve(PanelService);
const statusBarService = container.resolve(StatusBarService);
const monacoService = container.resolve(MonacoService);
const problemsService = container.resolve(ProblemsService);
const builtinService = container.resolve(BuiltinService);

function serviceReset() {
    statusBarService.reset();
    panelService.reset();
}

describe('The problems controller', () => {
    test('Should support to inject default value into service', () => {
        problemsController.initView();

        const { id, name } = problemsService.getState();
        expect(id).toBe(constants.PROBLEM_MODEL_ID);
        expect(name).toBe(constants.PROBLEM_MODEL_NAME);

        const defaultStatus = statusBarService.getStatusBarItem(
            modules.builtInStatusProblems().id,
            Float.left
        );
        expect(defaultStatus).not.toBeNull();
        expect(defaultStatus).toEqual(
            expect.objectContaining(modules.builtInStatusProblems)
        );

        const defaultPanel = panelService.getPanel(
            modules.builtInPanelProblems().id
        );
        const { current } = panelService.getState();
        expect(defaultPanel).not.toBeNull();
        expect(current).toEqual(expect.objectContaining(defaultPanel));

        serviceReset();
    });

    test('Should support to adjust the default value', () => {
        builtinService.inactiveModule('builtInStatusProblems');
        builtinService.inactiveModule('builtInPanelProblems');

        problemsController.initView();
        const defaultStatus = statusBarService.getStatusBarItem(
            modules.builtInStatusProblems().id,
            Float.left
        );
        expect(defaultStatus).toBeNull();

        const defaultPanel = panelService.getPanel(
            modules.builtInPanelProblems().id
        );
        const { current } = panelService.getState();
        expect(defaultPanel).toBeUndefined();
        expect(current).toBeFalsy();

        serviceReset();
        builtinService.reset();
    });

    test('Should support to execute onClick', () => {
        problemsController.initView();
        const original = monacoService.commandService.executeCommand;
        const mockFn = jest.fn();
        monacoService.commandService.executeCommand = mockFn;

        problemsController.onClick({} as any, { id: 'test' });

        expect(mockFn).toBeCalled();

        const { current } = panelService.getState();
        expect(current).toEqual(
            expect.objectContaining(modules.builtInPanelProblems)
        );
        monacoService.commandService.executeCommand = original;
    });
});
