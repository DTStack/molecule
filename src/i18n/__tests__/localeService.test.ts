import 'reflect-metadata';
import { container } from 'tsyringe';
import { LocaleService } from '..';
import { BuiltInLocales, BuiltInZhCN, ILocale } from '../localization';

describe('The Locale Service', () => {
    const localeService = container.resolve(LocaleService);

    const TestLocale = {
        id: 'test',
        source: new Map(),
        name: 'test',
    };

    afterEach(() => {
        localeService.reset();
    });

    test('Get default Locale', () => {
        const defaultLocale = localeService.getDefaultLocale();
        expect(defaultLocale).toEqual(BuiltInZhCN);
    });

    test('Get default Locales', () => {
        const defaultLocale = localeService.getDefaultLocales();
        expect(defaultLocale).toEqual(BuiltInLocales);
    });

    test('The size of Built-in Locales should be 2', () => {
        const locales = localeService.getLocales();
        expect(locales.length).toBe(2);
    });

    test('Initialize the locales', () => {
        localeService.initialize([TestLocale]);
        expect(localeService.getCurrentLocale().id).toEqual(
            localeService.getDefaultLocale().id
        );
        expect(localeService.getLocales().length).toBe(3);
        localeService.initialize([], 'test');
        expect(localeService.getCurrentLocale().id).toEqual(BuiltInZhCN.id);
        // Clear the cached locale value
        localStorage.clear();
        localeService.initialize([], 'test');
        expect(localeService.getCurrentLocale().id).toEqual('test');
        localeService.initialize([]);
        // Get from the localStorage cache
        expect(localeService.getCurrentLocale().id).toEqual('test');
    });

    test('Get/Set current locale', () => {
        (localeService as any)._current = null;
        expect(localeService.getCurrentLocale()).toEqual(
            localeService.getDefaultLocale()
        );
        localeService.addLocales([TestLocale]);
        localeService.setCurrentLocale(TestLocale.id);
        expect(localeService.getCurrentLocale().id).toEqual(TestLocale.id);

        expect(localeService.setCurrentLocale('unknown')).toEqual(false);
    });

    test('Add locales', () => {
        expect(localeService.getLocales().length).toBe(2);
        localeService.addLocales([TestLocale]);
        expect(localeService.getLocales().length).toBe(3);
        localeService.addLocales([]);
        expect(localeService.getLocales().length).toBe(3);
        // Add an existed locale
        localeService.addLocales([TestLocale]);
        expect(localeService.getLocales().length).toBe(3);
    });

    test('Add an locale inherit the en', () => {
        expect(TestLocale.source.size).toBe(0);
        (TestLocale as ILocale).inherit = 'en';
        localeService.addLocales([TestLocale]);
        expect(localeService.getLocale(TestLocale.id)?.source.size).not.toBe(0);

        // Inherit an not exist locale
        localeService.removeLocale(TestLocale.id);
        (TestLocale as ILocale).inherit = 'unknown';
        localeService.addLocales([TestLocale]);
        expect(localeService.getLocale(TestLocale.id)?.source.size).toBe(0);
    });

    test('Get a specific locale', () => {
        localeService.addLocales([TestLocale]);
        expect(localeService.getLocale(TestLocale.id)).not.toBeNull();
        expect(localeService.getLocale(TestLocale.id)?.id).toEqual(
            TestLocale.id
        );
    });

    test('Remove a locale', () => {
        localeService.addLocales([TestLocale]);
        expect(localeService.getLocale(TestLocale.id)?.id).toEqual(
            TestLocale.id
        );
        localeService.removeLocale(TestLocale.id);
        expect(localeService.getLocale(TestLocale.id)).toBeUndefined();
        localeService.addLocales([TestLocale]);
        localeService.setCurrentLocale(TestLocale.id);

        //Remove the current locale
        expect(localeService.getCurrentLocale().id).toEqual(TestLocale.id);
        localeService.removeLocale(TestLocale.id);
        expect(localeService.getCurrentLocale().id).toEqual(
            localeService.getDefaultLocale().id
        );

        // Remove an undefined
        expect(localeService.removeLocale(TestLocale.id));
    });

    test('Listen to the current locale change event', () => {
        const fn = jest.fn();
        localeService.onChange(fn);
        localeService.setCurrentLocale('en');
        expect(fn).toBeCalledTimes(1);
        expect(localeService.getCurrentLocale().id).toEqual('en');
    });

    test('Localize the source key', () => {
        let res = localeService.localize('test');
        expect(res).toEqual('');

        res = localeService.localize('test', 'default');
        expect(res).toEqual('default');

        res = localeService.localize('molecule.welcome');
        expect(res).toEqual('欢迎!');

        res = localeService.localize('molecule.welcome', 'default');
        expect(res).toEqual('欢迎!');

        const map = new Map();
        map.set('test.id', 'hello ${i}');
        const mockData = {
            id: 'mock',
            name: 'mock',
            source: map,
        };
        localeService.addLocales([mockData]);
        localeService.setCurrentLocale(mockData.id);
        res = localeService.localize('test.id', '', 'world');
        expect(res).toEqual('hello world');

        (localeService as any)._current = null;
        res = localeService.localize('molecule.welcome', 'default');
        expect(res).toEqual('default');
    });
});
