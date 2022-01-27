import { normalizeFlattedObject, colorLightOrDark } from '../utils';

describe('Test Utils', () => {
    test('The normalizeFlattedObject function', () => {
        const expected = {
            workbench: {
                colorTheme: 'vs',
                activityBar: {
                    hidden: false,
                    userAccountItem: true,
                },
                panel: {
                    hidden: false,
                },
                sidebar: {
                    hidden: false,
                },
                statusBar: {
                    hidden: false,
                },
                menuBar: {
                    hidden: false,
                },
            },
        };
        const testData = {
            'workbench.colorTheme': 'vs',
            'workbench.activityBar.hidden': false,
            'workbench.activityBar.userAccountItem': true,
            'workbench.panel.hidden': false,
            'workbench.sidebar.hidden': false,
            'workbench.statusBar.hidden': false,
            'workbench.menuBar.hidden': false,
        };
        const normalized = normalizeFlattedObject(testData);
        expect(normalized).toEqual(expected);
    });

    test('The colorLightOrDark function', () => {
        expect(colorLightOrDark('#000')).toBe('dark');
        expect(colorLightOrDark('rgb(255,255,255)')).toBe('light');
    });
});
