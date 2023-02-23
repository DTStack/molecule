import 'reflect-metadata';
import { container } from 'tsyringe';
import { LayoutController } from '../layout';
import { LayoutService } from 'mo/services';

const layoutController = container.resolve(LayoutController);
const layoutService = container.resolve(LayoutService);

describe('The layout controller', () => {
    test('Should support to listen to the Workbench did mount event', () => {
        const mockFn = jest.fn();
        layoutService.onWorkbenchDidMount(mockFn);
        layoutController.onWorkbenchDidMount();

        expect(mockFn).toBeCalled();
    });

    test('Should support to execute onPaneSizeChange', () => {
        const original = layoutService.setPaneSize;
        const mockFn = jest.fn();
        layoutService.setPaneSize = mockFn;
        const splitPanePos = [20, 20];
        layoutController.onPaneSizeChange(splitPanePos);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(splitPanePos);
        layoutService.setPaneSize = original;
    });

    test('Should support to execute onHorizontalPaneSizeChange', () => {
        const original = layoutService.setHorizontalPaneSize;
        const mockFn = jest.fn();
        layoutService.setHorizontalPaneSize = mockFn;
        const splitPanePos = [20, 20];
        layoutController.onHorizontalPaneSizeChange(splitPanePos);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(splitPanePos);
        layoutService.setHorizontalPaneSize = original;
    });
});
