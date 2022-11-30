import { expectFnCalled } from '@test/utils';
import { AuxiliaryEventKind, AuxiliaryModel } from 'mo/model';
import { container } from 'tsyringe';
import { AuxiliaryBarService } from '..';

const auxiliaryBarService = container.resolve(AuxiliaryBarService);

describe('The Auxiliary Bar Service', () => {
    afterEach(() => {
        auxiliaryBarService.reset();
    });

    test('Should with initial state', () => {
        expect(auxiliaryBarService.getState()).toEqual(new AuxiliaryModel());
    });

    test('Should support to add data with array or object', () => {
        expect(auxiliaryBarService.getState().data).toEqual([]);

        auxiliaryBarService.addAuxiliaryBar({ key: 1, title: 1 });
        expect(auxiliaryBarService.getState().data).toHaveLength(1);

        auxiliaryBarService.addAuxiliaryBar([
            { key: 2, title: 2 },
            { key: 3, title: 3 },
        ]);
        expect(auxiliaryBarService.getState().data).toHaveLength(3);
    });

    test('Should get current tab from data', () => {
        // Without data and current
        expect(auxiliaryBarService.getCurrentTab()).toBeUndefined();

        // Without current
        auxiliaryBarService.setActive(1);
        expect(auxiliaryBarService.getCurrentTab()).toBeUndefined();

        // With data and current
        auxiliaryBarService.addAuxiliaryBar({ key: 1, title: 1 });
        expect(auxiliaryBarService.getCurrentTab()).toEqual({
            key: 1,
            title: 1,
        });
    });

    test('Should support set active one', () => {
        expect(auxiliaryBarService.getState().current).toBeUndefined();

        auxiliaryBarService.setActive(1);

        expect(auxiliaryBarService.getState().current).toBe(1);
    });

    test('Should support set children', () => {
        expect(auxiliaryBarService.getState().children).toBeUndefined();

        auxiliaryBarService.setChildren(111);

        expect(auxiliaryBarService.getState().children).toBe(111);
    });

    test('Should support to change mode', () => {
        expect(auxiliaryBarService.getState().mode).toBe('default');

        auxiliaryBarService.setMode('tabs');
        expect(auxiliaryBarService.getState().mode).toBe('tabs');

        auxiliaryBarService.setMode((pre) =>
            pre === 'tabs' ? 'default' : 'tabs'
        );
        expect(auxiliaryBarService.getState().mode).toBe('default');
    });

    test('Should support call onTabClick', () => {
        expectFnCalled((fn) => {
            auxiliaryBarService.onTabClick(fn);

            // Call it in manual
            auxiliaryBarService.emit(AuxiliaryEventKind.onTabClick, 1);
        });
    });
});
