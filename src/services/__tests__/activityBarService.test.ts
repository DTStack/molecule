import 'reflect-metadata';
import { container } from 'tsyringe';
import { ActivityBarService } from '../workbench';
import { ActivityBarEvent, IActivityBarItem } from 'mo/model';
import logger from 'mo/common/logger';
import type { IMenuItemProps } from 'mo/components';

const activityBarService = container.resolve(ActivityBarService);

const mockBarData: IActivityBarItem = {
    id: '1',
    name: 'test',
};

const mockMenuData: IMenuItemProps = {
    id: '1',
};

/**
 * Test the action whether log error
 */
function logErrorFn(action: () => void) {
    const originalLog = logger.error;
    logger.error = jest.fn();

    action();
    expect(logger.error).toBeCalled();

    logger.error = originalLog;
}

describe('The ActivityBar Services', () => {
    afterEach(() => {
        activityBarService.reset();
    });

    test('Should support to add a single bar data', () => {
        activityBarService.add(mockBarData);

        const { data } = activityBarService.getState();
        expect(data).toHaveLength(1);
        expect(data![0]).toEqual(mockBarData);
    });

    test('Should support to add a single bar data meanwhile active it', () => {
        activityBarService.add(mockBarData, true);

        const { selected } = activityBarService.getState();
        expect(selected).toBe('1');
    });

    test('Should support to batch add bars', () => {
        const batchData = [mockBarData, { id: '2', name: 'test' }];
        activityBarService.add(batchData);

        const { data } = activityBarService.getState();
        expect(data).toHaveLength(batchData.length);
    });

    test('Should support remove bar data', () => {
        const state = activityBarService.getState();
        activityBarService.add(mockBarData);

        expect(state.data).toHaveLength(1);

        activityBarService.remove('1');
        expect(state.data).toHaveLength(0);
    });

    test('Should log error when remove failed', () => {
        logErrorFn(() => {
            activityBarService.remove('1');
        });
    });

    test('Should support to hidden acitivity bar', () => {
        const state = activityBarService.getState();
        activityBarService.add(mockBarData);
        expect(state.data![0].hidden).toBeFalsy();

        activityBarService.toggleBar('1');
        expect(state.data![0].hidden).toBeTruthy();
    });

    test('Should log error when toggleBar failed', () => {
        logErrorFn(() => {
            activityBarService.toggleBar('1');
        });
    });

    test('Should select the following one if current bar is selected', () => {
        const state = activityBarService.getState();
        activityBarService.add(mockBarData, true);
        activityBarService.add({ id: '2', name: 'test' });

        expect(state.selected).toBe('1');

        activityBarService.toggleBar('1');
        expect(state.selected).toBe('2');
    });

    test('Should select the first one if current bar is selected and is last one', () => {
        const state = activityBarService.getState();
        activityBarService.add(mockBarData);
        activityBarService.add({ id: '2', name: 'test' }, true);

        expect(state.selected).toBe('2');

        activityBarService.toggleBar('2');
        expect(state.selected).toBe('1');
    });

    test('Should support to add a context menu', () => {
        const state = activityBarService.getState();
        activityBarService.addContextMenu(mockMenuData);

        expect(state.contextMenu).toHaveLength(1);
        expect(state.contextMenu![0]).toEqual(mockMenuData);
    });

    test('Should support to batch add context menus', () => {
        const state = activityBarService.getState();
        const menus = [mockMenuData, { id: '2' }];
        activityBarService.addContextMenu(menus);

        expect(state.contextMenu).toHaveLength(menus.length);
        expect(state.contextMenu![0]).toEqual(mockMenuData);
        expect(state.contextMenu![1]).toEqual(menus[1]);
    });

    test('Should support to toggle the status of context menus', () => {
        const state = activityBarService.getState();

        activityBarService.addContextMenu(mockMenuData);
        expect(state.contextMenu![0].icon).toBeFalsy();

        activityBarService.toggleContextMenuChecked('1');
        expect(state.contextMenu![0].icon).toBe('check');
    });

    test('Should log error when toggle the status failed', () => {
        logErrorFn(() => {
            activityBarService.toggleContextMenuChecked('1');
        });
    });

    test('Should support to remove context menus', () => {
        const state = activityBarService.getState();
        activityBarService.addContextMenu(mockMenuData);

        activityBarService.removeContextMenu('1');
        expect(state.contextMenu).toHaveLength(0);
    });

    test('Should log error when remove context menus failed', () => {
        logErrorFn(() => {
            activityBarService.removeContextMenu('1');
        });
    });

    test('Should support to subscribe onClick', () => {
        const mockFn = jest.fn();
        activityBarService.onClick(mockFn);

        activityBarService.emit(
            ActivityBarEvent.OnClick,
            mockBarData.id,
            mockBarData
        );

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(mockBarData.id);
        expect(mockFn.mock.calls[0][1]).toBe(mockBarData);
    });

    test('Should support to subscribe onChange', () => {
        const mockFn = jest.fn();
        activityBarService.onChange(mockFn);

        const prevKey = '1';
        const nextKey = '2';

        activityBarService.emit(ActivityBarEvent.OnChange, prevKey, nextKey);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(prevKey);
        expect(mockFn.mock.calls[0][1]).toBe(nextKey);
    });
});
