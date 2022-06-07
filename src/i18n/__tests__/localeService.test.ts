import 'reflect-metadata';
import { container } from 'tsyringe';
import { expectLoggerErrorToBeCalled } from '@test/utils';
import { ILocale } from '../localization';
import { LocaleService } from '..';

describe('The Locale Service', () => {
    const TestLocale: ILocale = {
        id: 'test',
        source: new Map(),
        name: 'test',
    };

    // LocaleService is support to add an object source but ILocale is banned
    const TestEnLocale: ILocale = {
        id: 'en',
        name: 'English',
        source: {
            // @ts-ignore
            'molecule.welcome': 'Welcome to Molecule',
            'test.id': 'hello ${i}',
        },
    };

    afterEach(() => {
        localStorage.clear();
    });

    test('Instance the LocaleService by IOC', () => {
        const localeService = container.resolve(LocaleService);
        expect(localeService).not.toBeUndefined();
    });

    test('Initialize the locales with testLocale', () => {
        const localeService = new LocaleService();
        localeService.initialize([TestLocale], TestLocale.id);

        expect(localeService.getCurrentLocale()?.id).toEqual(TestLocale.id);
        expect(localeService.getLocales().length).toBe(1);

        localeService.reset();
        expectLoggerErrorToBeCalled(() => {
            // @ts-ignore
            localeService.initialize([TestEnLocale, TestLocale]);
        });
    });

    test('Reset the LocaleService', () => {
        const localeService = new LocaleService();
        expect(localeService.getCurrentLocale()).toBeUndefined();

        localeService.initialize([TestLocale], TestLocale.id);
        expect(localeService.getCurrentLocale()).toEqual(TestLocale);

        localeService.reset();
        expect(localeService.getCurrentLocale()).toBeUndefined();
    });

    test('Get/Set current locale', () => {
        const localeService = new LocaleService();
        expect(localeService.getCurrentLocale()).toBeUndefined();

        localeService.initialize([TestLocale, TestEnLocale], TestLocale.id);

        expect(localeService.getCurrentLocale()?.id).toEqual(TestLocale.id);

        localeService.setCurrentLocale(TestEnLocale.id);
        expect(localeService.getCurrentLocale()?.id).toEqual(TestEnLocale.id);
        // set an unknow locale will fail
        expect(localeService.setCurrentLocale('unknown')).toEqual(false);
    });

    test('Add locales', () => {
        const localeService = new LocaleService();
        expect(localeService.getLocales().length).toBe(0);

        localeService.addLocales([TestLocale]);
        expect(localeService.getLocales().length).toBe(1);

        localeService.addLocales([]);
        expect(localeService.getLocales().length).toBe(1);

        // Add an existed locale
        localeService.addLocales([TestLocale]);
        expect(localeService.getLocales().length).toBe(1);
    });

    test('Add an locale inherit the en', () => {
        const localeService = new LocaleService();
        localeService.initialize([TestEnLocale], TestEnLocale.id);

        expect(TestLocale.source.size).toBe(0);
        TestLocale.inherit = 'en';
        localeService.addLocales([TestLocale]);
        expect(localeService.getLocale(TestLocale.id)?.source.size).not.toBe(0);

        // Inherit an not exist locale
        localeService.removeLocale(TestLocale.id);
        TestLocale.inherit = 'unknown';
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
        localeService.initialize([TestLocale, TestEnLocale], TestLocale.id);
        expect(localeService.getLocale(TestLocale.id)?.id).toEqual(
            TestLocale.id
        );

        const removedLocale = localeService.removeLocale(TestLocale.id);
        expect(localeService.getLocale(TestLocale.id)).toBeUndefined();
        expect(removedLocale).toEqual(TestLocale);

        localeService.addLocales([TestLocale]);
        localeService.setCurrentLocale(TestLocale.id);

        //Remove the current locale
        expect(localeService.getCurrentLocale()?.id).toEqual(TestLocale.id);
        localeService.removeLocale(TestLocale.id);
        expect(localeService.getCurrentLocale()!.id).toEqual(TestEnLocale.id);

        // Remove an undefined
        expect(localeService.removeLocale(TestLocale.id));

        expect(localeService.getLocales().length).toBe(1);
        // The last one couldn't be removed
        expect(localeService.removeLocale(TestEnLocale.id)).toBeFalsy();
    });

    test('Listen to the current locale change event', () => {
        const localeService = new LocaleService();
        const fn = jest.fn();
        localeService.onChange(fn);

        localeService.initialize([TestLocale, TestEnLocale], TestLocale.id);
        localeService.setCurrentLocale(TestEnLocale.id);

        expect(fn).toBeCalledTimes(1);
        expect(localeService.getCurrentLocale()!.id).toEqual(TestEnLocale.id);
    });

    test('Localize the source key', () => {
        const localeService = new LocaleService();

        localeService.initialize([TestLocale, TestEnLocale], TestEnLocale.id);
        let res = localeService.localize('test');
        expect(res).toEqual('');

        res = localeService.localize('test', 'default');
        expect(res).toEqual('default');

        res = localeService.localize('molecule.welcome');
        expect(res).toEqual('Welcome to Molecule');

        res = localeService.localize('molecule.welcome', 'default');
        expect(res).toEqual('Welcome to Molecule');

        res = localeService.localize('test.id', '', 'world');
        expect(res).toEqual('hello world');

        localeService.setCurrentLocale(TestLocale.id);
        res = localeService.localize('molecule.welcome', 'default');
        expect(res).toEqual('default');
    });
});
