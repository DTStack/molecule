import { cleanup } from '@testing-library/react';
import 'reflect-metadata';
import { container } from 'tsyringe';
import {
    BUILT_IN_THEME,
    ColorThemeService,
    DEFAULT_THEME_CLASS_NAME,
} from '../theme/colorThemeService';

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
        const service = new ColorThemeService([], BUILT_IN_THEME);
        expect(service.getColorTheme()).toEqual(BUILT_IN_THEME);
    });

    test('Should have default theme', () => {
        const currentColorTheme = colorThemeService.getColorTheme();
        const colorThemes = colorThemeService.getThemes();

        expect(currentColorTheme.id).toBe(BUILT_IN_THEME.id);
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
        const originalError = console.error;
        console.error = jest.fn();
        colorThemeService.setTheme(DarkTestTheme.id);

        expect(console.error).toBeCalled();
        console.error = originalError;
    });

    test('Should update specific theme', () => {
        colorThemeService.updateTheme({
            ...BUILT_IN_THEME,
            label: 'Dark Test',
        });

        expect(colorThemeService.getThemeById(BUILT_IN_THEME.id)?.label).toBe(
            'Dark Test'
        );
    });

    test('Should have log error message without id when update theme', () => {
        const originalError = console.error;
        console.error = jest.fn();
        colorThemeService.updateTheme({
            ...BUILT_IN_THEME,
            label: 'Dark Test',
            id: '',
        });

        expect(console.error).toBeCalled();
        console.error = originalError;
    });

    test('Should have log error message with no found theme', () => {
        const originalError = console.error;
        console.error = jest.fn();
        colorThemeService.updateTheme(DarkTestTheme);

        expect(console.error).toBeCalled();
        console.error = originalError;
    });
});
