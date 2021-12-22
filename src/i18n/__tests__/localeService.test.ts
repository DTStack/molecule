import 'reflect-metadata';
import { container } from 'tsyringe';
import { LocaleService } from '..';
import { BuiltInLocales, BuiltInDefault, ILocale } from '../localization';

describe('The Locale Service', () => {
    const TestLocale = {
        id: 'test',
        source: new Map(),
        name: 'test',
    };

    afterEach(() => {
        localStorage.clear();
    });

    test('Instance the LocaleService by IOC', () => {
        const localeService = container.resolve(LocaleService);
        expect(localeService).not.toBeUndefined();
    });

    test('Reset the LocaleService', () => {
        const localeService = new LocaleService();
        expect(localeService.getCurrentLocale()!.id).toBe(BuiltInDefault.id);
        localeService.reset();
        expect(localeService.getCurrentLocale()!.id).toBe(BuiltInDefault.id);
    });

    test('Get default Locale', () => {
        const localeService = new LocaleService();
        const defaultLocale = localeService.getDefaultLocale();
        expect(defaultLocale).toEqual(BuiltInDefault);
    });

    test('Get default Locales', () => {
        const localeService = new LocaleService();
        const defaultLocale = localeService.getDefaultLocales();
        expect(defaultLocale).toEqual(BuiltInLocales);
    });

    test('The size of Built-in Locales should be 3', () => {
        const localeService = new LocaleService();
        const locales = localeService.getLocales();
        expect(locales.length).toBe(3);
    });

    test('Initialize the locales', () => {
        const localeService = new LocaleService();
        localeService.initialize([TestLocale]);
        expect(localeService.getCurrentLocale()!.id).toEqual(
            localeService.getDefaultLocale().id
        );
        expect(localeService.getLocales().length).toBe(4);
        localeService.initialize([], 'test');
        expect(localeService.getCurrentLocale()!.id).toEqual(BuiltInDefault.id);
        // Clear the cached locale value
        localStorage.clear();
        localeService.initialize([], 'test');
        expect(localeService.getCurrentLocale()!.id).toEqual('test');
        localeService.initialize([]);
        // Get from the localStorage cache
        expect(localeService.getCurrentLocale()!.id).toEqual('test');
    });

    test('Get/Set current locale', () => {
        const localeService = new LocaleService();
        (localeService as any)._current = undefined;
        expect(localeService.getCurrentLocale()).toBe(BuiltInDefault);
        localeService.addLocales([TestLocale]);
        localeService.setCurrentLocale(TestLocale.id);
        expect(localeService.getCurrentLocale()!.id).toEqual(TestLocale.id);

        expect(localeService.setCurrentLocale('unknown')).toEqual(false);
    });

    test('Add locales', () => {
        const localeService = new LocaleService();
        expect(localeService.getLocales().length).toBe(3);
        localeService.addLocales([TestLocale]);
        expect(localeService.getLocales().length).toBe(4);
        localeService.addLocales([]);
        expect(localeService.getLocales().length).toBe(4);
        // Add an existed locale
        localeService.addLocales([TestLocale]);
        expect(localeService.getLocales().length).toBe(4);
    });

    test('Add an locale inherit the en', () => {
        const localeService = new LocaleService();
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
        const localeService = new LocaleService();
        localeService.addLocales([TestLocale]);
        expect(localeService.getLocale(TestLocale.id)).not.toBeNull();
        expect(localeService.getLocale(TestLocale.id)?.id).toEqual(
            TestLocale.id
        );
    });

    test('Remove a locale', () => {
        const localeService = new LocaleService();
        localeService.addLocales([TestLocale]);
        expect(localeService.getLocale(TestLocale.id)?.id).toEqual(
            TestLocale.id
        );
        localeService.removeLocale(TestLocale.id);
        expect(localeService.getLocale(TestLocale.id)).toBeUndefined();
        localeService.addLocales([TestLocale]);
        localeService.setCurrentLocale(TestLocale.id);

        //Remove the current locale
        expect(localeService.getCurrentLocale()!.id).toEqual(TestLocale.id);
        localeService.removeLocale(TestLocale.id);
        expect(localeService.getCurrentLocale()!.id).toEqual(
            localeService.getDefaultLocale().id
        );

        // Remove an undefined
        expect(localeService.removeLocale(TestLocale.id));
    });

    test('Listen to the current locale change to Chineses event', () => {
        const target = 'zh-CN';
        const localeService = new LocaleService();
        const fn = jest.fn();
        localeService.onChange(fn);
        localeService.setCurrentLocale(target);
        expect(fn).toBeCalledTimes(1);
        expect(localeService.getCurrentLocale()!.id).toEqual(target);
    });

    test('Listen to the current locale change to Korean event', () => {
        const target = 'ko-KR';
        const localeService = new LocaleService();
        const fn = jest.fn();
        localeService.onChange(fn);
        localeService.setCurrentLocale(target);
        expect(fn).toBeCalledTimes(1);
        expect(localeService.getCurrentLocale()!.id).toEqual(target);
    });

    test('Localize the source key', () => {
        const localeService = new LocaleService();
        let res = localeService.localize('test');
        expect(res).toEqual('');

        res = localeService.localize('test', 'default');
        expect(res).toEqual('default');

        res = localeService.localize('molecule.welcome');
        expect(res).toEqual('Welcome to Molecule');

        res = localeService.localize('molecule.welcome', 'default');
        expect(res).toEqual('Welcome to Molecule');

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
