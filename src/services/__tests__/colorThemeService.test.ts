import { cleanup } from '@testing-library/react';
import 'reflect-metadata';
import { expectLoggerErrorToBeCalled } from '@test/utils';
import { container } from 'tsyringe';
import {
    BuiltInColorTheme,
    ColorThemeService,
    DEFAULT_THEME_CLASS_NAME,
} from '../theme/colorThemeService';
import { ColorThemeMode, ColorScheme } from 'mo/model/colorTheme';

const DarkTestTheme = {
    id: 'Default Test',
    name: 'Default Test',
    label: 'Default Test',
    uiTheme: 'test-dark',
};

describe('The Color Theme Service', () => {
    const colorThemeService = container.resolve(ColorThemeService);

    afterEach(() => {
        colorThemeService.reset();
        cleanup();
    });

    test('Should when initialize', () => {
        const service = new ColorThemeService();
        expect(service.getColorTheme()).toEqual(BuiltInColorTheme);
    });

    test('Should have default theme', () => {
        const currentColorTheme = colorThemeService.getColorTheme();
        const colorThemes = colorThemeService.getThemes();

        expect(currentColorTheme.id).toBe(BuiltInColorTheme.id);
        expect(colorThemes).toHaveLength(1);
    });

    test('Should support to add a single theme into colorThemes', () => {
        const themes = DarkTestTheme;

        colorThemeService.addThemes(themes);
        expect(colorThemeService.getThemes()).toHaveLength(2);
        expect(colorThemeService.getThemeById(DarkTestTheme.id)).toEqual(
            DarkTestTheme
        );
    });

    test('Should add themes into colorThemes', () => {
        const themes = [DarkTestTheme];

        colorThemeService.addThemes(themes);
        expect(colorThemeService.getThemes()).toHaveLength(2);
        expect(colorThemeService.getThemeById(DarkTestTheme.id)).toEqual(
            DarkTestTheme
        );

        themes[0].uiTheme = 'test-dark+';
        colorThemeService.addThemes(themes);
        expect(colorThemeService.getThemes()).toHaveLength(2);
        expect(colorThemeService.getThemeById('Default Test')).toEqual({
            id: 'Default Test',
            name: 'Default Test',
            label: 'Default Test',
            uiTheme: 'test-dark+',
        });
    });

    test('Should set specific theme', () => {
        const themes = [
            {
                ...DarkTestTheme,
                colors: {
                    'editor.background': '#1E1E1E',
                },
            },
        ];

        colorThemeService.addThemes(themes);
        colorThemeService.setTheme(DarkTestTheme.id);
        const styleDom = document.querySelector<HTMLStyleElement>(
            `.${DEFAULT_THEME_CLASS_NAME}`
        );
        expect(styleDom?.innerHTML).toContain('--editor-background: #1E1E1E');
        expect(colorThemeService.getColorTheme().id).toBe(DarkTestTheme.id);
    });

    test('Should log error when set unrecognized theme', () => {
        expectLoggerErrorToBeCalled(() => {
            colorThemeService.setTheme(DarkTestTheme.id);
        });
    });

    test('Should update specific theme', () => {
        colorThemeService.updateTheme({
            ...BuiltInColorTheme,
            label: 'Dark Test',
        });

        expect(
            colorThemeService.getThemeById(BuiltInColorTheme.id)?.label
        ).toBe('Dark Test');
    });

    test('Should reload current theme if update the theme', () => {
        const styleDom = document.querySelector<HTMLStyleElement>(
            `.${DEFAULT_THEME_CLASS_NAME}`
        );
        expect(styleDom?.innerHTML).toContain('--editor-background: #1E1E1E');
        colorThemeService.updateTheme({
            ...BuiltInColorTheme,
            label: 'Dark Test',
            colors: {
                'editor.background': '#000',
            },
        });

        expect(styleDom?.innerHTML).toContain('--editor-background: #000');
    });

    test('Should have log error message without id when update theme', () => {
        expectLoggerErrorToBeCalled(() => {
            colorThemeService.updateTheme({
                ...BuiltInColorTheme,
                label: 'Dark Test',
                id: '',
            });
        });
    });

    test('Should have log error message with no found theme', () => {
        expectLoggerErrorToBeCalled(() => {
            colorThemeService.updateTheme(DarkTestTheme);
        });
    });

    test('Should support to get colorThemeMode', () => {
        colorThemeService.updateTheme({
            ...BuiltInColorTheme,
            type: ColorScheme.DARK,
        });
        expect(colorThemeService.getColorThemeMode()).toBe(ColorThemeMode.dark);

        colorThemeService.updateTheme({
            ...BuiltInColorTheme,
            type: ColorScheme.LIGHT,
        });
        expect(colorThemeService.getColorThemeMode()).toBe(
            ColorThemeMode.light
        );

        colorThemeService.updateTheme({
            ...BuiltInColorTheme,
            type: undefined,
            colors: {
                'molecule.welcomeBackground': '#252526',
            },
        });
        expect(colorThemeService.getColorThemeMode()).toBe(ColorThemeMode.dark);

        colorThemeService.updateTheme({
            ...BuiltInColorTheme,
            type: undefined,
            colors: {},
        });
        expect(colorThemeService.getColorThemeMode()).toBe(ColorThemeMode.dark);
    });

    test('Listen to the theme changed event', () => {
        const fn = jest.fn();
        colorThemeService.onChange(fn);
        colorThemeService.setTheme(BuiltInColorTheme.id);

        expect(fn).toBeCalledTimes(1);
        expect(colorThemeService.getColorTheme()!.id).toEqual(
            BuiltInColorTheme.id
        );
    });
});
