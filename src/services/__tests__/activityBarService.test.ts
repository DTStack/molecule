import 'reflect-metadata';
import { container } from 'tsyringe';
import { ActivityBarService } from '../workbench';
import { ActivityBarEvent, IActivityBarItem } from 'mo/model';
import type { IMenuItemProps } from 'mo/components';
import { expectLoggerErrorToBeCalled } from '@test/utils';

const activityBarService = container.resolve(ActivityBarService);

const mockBarData: IActivityBarItem[] = [
    {
        id: '1',
        name: 'test1',
    },
    { id: '2', name: 'test2' },
];

const mockMenuData: IMenuItemProps[] = [
    {
        id: '1',
    },
    { id: '2' },
];

describe('The ActivityBar Services', () => {
    afterEach(() => {
        activityBarService.reset();
    });

    test('Should support to add a single bar data', () => {
        activityBarService.add(mockBarData[0]);

        const { data } = activityBarService.getState();
        expect(data).toHaveLength(1);
        expect(data![0]).toEqual(mockBarData[0]);
    });

    test('Should support to add a single bar data meanwhile active it', () => {
        activityBarService.add(mockBarData[0], true);

        const { selected } = activityBarService.getState();
        expect(selected).toBe('1');
    });

    test('Should support to batch add bars', () => {
        const batchData = [mockBarData[0], { id: '2', name: 'test' }];
        activityBarService.add(batchData);

        const { data } = activityBarService.getState();
        expect(data).toHaveLength(batchData.length);
    });

    test('Should support remove bar data', () => {
        const state = activityBarService.getState();
        activityBarService.add(mockBarData[0]);

        expect(state.data).toHaveLength(1);

        activityBarService.remove('1');
        expect(state.data).toHaveLength(0);
    });

    test('Should support remove bar array data', () => {
        const state = activityBarService.getState();
        activityBarService.add(mockBarData);

        expect(state.data).toHaveLength(2);

        activityBarService.remove(['1', '2']);
        expect(state.data).toHaveLength(0);
    });

    test('Should log error when remove failed', () => {
        expectLoggerErrorToBeCalled(() => {
            activityBarService.remove('1');
        });
    });

    test('Should support to hidden acitivity bar', () => {
        const state = activityBarService.getState();
        activityBarService.add(mockBarData[0]);
        expect(state.data![0].hidden).toBeFalsy();

        activityBarService.toggleBar('1');
        expect(state.data![0].hidden).toBeTruthy();
    });

    test('Should log error when toggleBar failed', () => {
        expectLoggerErrorToBeCalled(() => {
            activityBarService.toggleBar('1');
        });
    });

    test('Should select the following one if current bar is selected', () => {
        const state = activityBarService.getState();
        activityBarService.add(mockBarData[0], true);
        activityBarService.add({ id: '2', name: 'test' });

        expect(state.selected).toBe('1');

        activityBarService.toggleBar('1');
        expect(state.selected).toBe('2');
    });

    test('Should select the first one if current bar is selected and is last one', () => {
        const state = activityBarService.getState();
        activityBarService.add(mockBarData[0]);
        activityBarService.add({ id: '2', name: 'test' }, true);

        expect(state.selected).toBe('2');

        activityBarService.toggleBar('2');
        expect(state.selected).toBe('1');
    });

    test('Should support to add a context menu', () => {
        const state = activityBarService.getState();
        activityBarService.addContextMenu(mockMenuData[0]);

        expect(state.contextMenu).toHaveLength(1);
        expect(state.contextMenu![0]).toEqual(mockMenuData[0]);
    });

    test('Should support to batch add context menus', () => {
        const state = activityBarService.getState();
        const menus = [mockMenuData[0], { id: '2' }];
        activityBarService.addContextMenu(menus);

        expect(state.contextMenu).toHaveLength(menus.length);
        expect(state.contextMenu![0]).toEqual(mockMenuData[0]);
        expect(state.contextMenu![1]).toEqual(menus[1]);
    });

    test('Should support to toggle the status of context menus', () => {
        const state = activityBarService.getState();

        activityBarService.addContextMenu(mockMenuData[0]);
        expect(state.contextMenu![0].icon).toBeFalsy();

        activityBarService.toggleContextMenuChecked('1');
        expect(state.contextMenu![0].icon).toBe('check');
    });

    test('Should log error when toggle the status failed', () => {
        expectLoggerErrorToBeCalled(() => {
            activityBarService.toggleContextMenuChecked('1');
        });
    });

    test('Should support to remove context menus', () => {
        const state = activityBarService.getState();
        activityBarService.addContextMenu(mockMenuData[0]);

        activityBarService.removeContextMenu('1');
        expect(state.contextMenu).toHaveLength(0);
    });

    test('Should support to remove context menus array', () => {
        const state = activityBarService.getState();
        activityBarService.addContextMenu(mockMenuData);

        activityBarService.removeContextMenu(['1', '2']);
        expect(state.contextMenu).toHaveLength(0);
    });

    test('Should log error when remove context menus failed', () => {
        expectLoggerErrorToBeCalled(() => {
            activityBarService.removeContextMenu('1');
        });
    });

    test('Should support to subscribe onClick', () => {
        const mockFn = jest.fn();
        activityBarService.onClick(mockFn);

        activityBarService.emit(
            ActivityBarEvent.OnClick,
            mockBarData[0].id,
            mockBarData[0]
        );

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(mockBarData[0].id);
        expect(mockFn.mock.calls[0][1]).toBe(mockBarData[0]);
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
