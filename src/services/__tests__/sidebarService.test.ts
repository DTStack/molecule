import type { ISidebarPane } from 'mo/model';
import 'reflect-metadata';
import { logErrorFn } from '../../../test/utils';
import { container } from 'tsyringe';
import { SidebarService } from '../workbench';

const sidebarService = container.resolve(SidebarService);

const mockSide: ISidebarPane = {
    id: 'mock',
    title: 'mock',
};

describe('The Sidebar Service', () => {
    afterEach(() => {
        sidebarService.reset();
    });

    test('Should support to add a pane', () => {
        sidebarService.add(mockSide);

        const state = sidebarService.getState();
        expect(state.panes).toHaveLength(1);
        expect(state.panes![0]).toEqual(mockSide);
        expect(state.current).toBe('');
    });

    test('Should support to add a pane and meanwhile active it', () => {
        sidebarService.add(mockSide, true);

        const state = sidebarService.getState();
        expect(state.panes).toHaveLength(1);
        expect(state.panes![0]).toEqual(mockSide);
        expect(state.current).toBe(mockSide.id);
    });

    test('Should log error when add failed', () => {
        logErrorFn(() => {
            sidebarService.add(mockSide);
            sidebarService.add(mockSide);
        });
    });

    test('Should support to get a pane or get the undefined', () => {
        sidebarService.add(mockSide);
        const pane = sidebarService.get(mockSide.id);
        const nonExistPane = sidebarService.get('none');

        expect(pane).toEqual(mockSide);
        expect(nonExistPane).toBeUndefined();
    });

    test('Should support to active the specific pane and reset the current', () => {
        sidebarService.add(mockSide);

        const state = sidebarService.getState();
        expect(state.current).toBe('');

        sidebarService.setActive(mockSide.id);
        expect(state.current).toBe(mockSide.id);

        sidebarService.setActive();
        expect(state.current).toBe('');
    });

    test('Should log error when setActive failed', () => {
        logErrorFn(() => {
            sidebarService.setActive(mockSide.id);
        });
    });

    test('Should support to update the pane', () => {
        sidebarService.add(mockSide);

        expect(sidebarService.get(mockSide.id)).toEqual(mockSide);

        sidebarService.update({
            id: mockSide.id,
            title: 'update-title',
        });

        expect(sidebarService.get(mockSide.id)).toEqual({
            ...mockSide,
            title: 'update-title',
        });
    });

    test('Should log error when update failed', () => {
        logErrorFn(() => {
            sidebarService.update({
                id: mockSide.id,
                title: 'update-title',
            });
        });
    });

    test('Should support to remove a specific pane', () => {
        sidebarService.add(mockSide);

        expect(sidebarService.get(mockSide.id)).toEqual(mockSide);

        sidebarService.remove(mockSide.id);
        expect(sidebarService.get(mockSide.id)).toBeUndefined();
    });

    test('Should change the current pane if remove the current pane', () => {
        sidebarService.add({ id: 'prev' });
        sidebarService.add(mockSide, true);
        sidebarService.add({ id: 'next' });

        const state = sidebarService.getState();
        expect(sidebarService.get(mockSide.id)).toEqual(mockSide);
        expect(state.current).toBe(mockSide.id);

        sidebarService.remove(mockSide.id);
        expect(state.current).toBe('next');

        sidebarService.remove('next');
        expect(state.current).toBe('prev');

        sidebarService.remove('prev');
        expect(state.current).toBe('');
    });

    test('Should log error when remove failed', () => {
        logErrorFn(() => {
            sidebarService.remove(mockSide.id);
        });
    });
});
