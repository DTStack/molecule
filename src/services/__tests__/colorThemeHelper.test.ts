import { convertToCSSVars, getThemeData } from '../theme/helper';

describe('The helper for colorThemeService', () => {
    test('The convertToCSSVars function', () => {
        const cssObj = {
            'editor.background': '#1E1E1E',
            'editor.foreground': '#D4D4D4',
        };
        const result = convertToCSSVars(cssObj);
        expect(result).toContain(
            '--editor-background: #1E1E1E; \n--editor-foreground: #D4D4D4; \n'
        );
    });

    test('The different themes have different colors', () => {
        const vsdark = getThemeData({
            id: 'vs-dark',
            label: 'vs-dark',
            uiTheme: 'vs-dark',
        });
        expect(Object.keys(vsdark.colors)).toContain('workbenchBackground');
        expect(vsdark.colors['workbenchBackground']).toBe('#252526');

        const vs = getThemeData({
            id: 'vs',
            label: 'vs',
            uiTheme: 'vs',
        });
        expect(Object.keys(vs.colors)).toContain('workbenchBackground');
        expect(vs.colors['workbenchBackground']).toBe('#F3F3F3');

        const defaultTheme = getThemeData({
            id: 'default',
            label: 'default',
            uiTheme: 'default',
        });
        expect(Object.keys(defaultTheme.colors)).toContain(
            'workbenchBackground'
        );
        expect(defaultTheme.colors['workbenchBackground']).toBe('#000000');
    });

    test('The getThemeData function', () => {
        const theme = {
            id: 'vs-dark',
            label: 'va-dark',
            uiTheme: 'vs-dark',
            colors: {
                'editor.background': '#1E1E1E',
            },
            tokenColors: [
                {
                    name: 'Function declarations',
                    scope: 'entity.name.function',
                    settings: {
                        foreground: '#DCDCAA',
                    },
                },
            ],
        };
        const result = getThemeData(theme);

        expect(result.base).toBe(theme.uiTheme);
        expect(result.inherit).toBeTruthy();
        expect(result.rules).toEqual([
            {
                token: 'entity.name.function',
                foreground: '#DCDCAA',
            },
        ]);
        expect(Object.keys(result.colors)).toContain('editor.background');
        expect(Object.keys(result.colors)).toContain('workbenchBackground');
        expect(result.colors['editor.background']).toBe('#1E1E1E');
        expect(result.colors['workbenchBackground']).toBe('#252526');
    });

    test('The getThemeData function should support array scope', () => {
        const theme = {
            id: 'vs-dark',
            label: 'va-dark',
            uiTheme: 'vs-dark',
            colors: {
                'editor.background': '#1E1E1E',
            },
            tokenColors: [
                {
                    name: 'Function declarations',
                    scope: ['entity.name.function', 'support.function'],
                    settings: {
                        foreground: '#DCDCAA',
                    },
                },
            ],
        };
        const result = getThemeData(theme);
        expect(result.rules).toEqual([
            {
                token: 'entity.name.function',
                foreground: '#DCDCAA',
            },
            {
                token: 'support.function',
                foreground: '#DCDCAA',
            },
        ]);
    });

    test('The getThemeData function should not add duplicated scope into rules', () => {
        const theme = {
            id: 'vs-dark',
            label: 'va-dark',
            uiTheme: 'vs-dark',
            colors: {
                'editor.background': '#1E1E1E',
            },
            tokenColors: [
                {
                    name: 'Function declarations',
                    scope: ['entity.name.function', 'entity.name.function'],
                    settings: {
                        foreground: '#DCDCAA',
                    },
                },
            ],
        };
        const result = getThemeData(theme);
        expect(result.rules).toEqual([
            {
                token: 'entity.name.function',
                foreground: '#DCDCAA',
            },
        ]);
    });

    test('The getThemeData function should check scope valid', () => {
        const theme = {
            id: 'vs-dark',
            label: 'va-dark',
            uiTheme: 'vs-dark',
            colors: {
                'editor.background': '#1E1E1E',
            },
            tokenColors: [
                {
                    name: 'Function declarations',
                    scope: '',
                    settings: {
                        foreground: '#DCDCAA',
                    },
                },
            ],
        };
        const result = getThemeData(theme);
        expect(result.rules).toEqual([]);
    });
});
