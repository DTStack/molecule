import { IColorTheme } from 'mo/model/colorTheme';
import { getBuiltInColors } from 'mo/services/theme/colorRegistry';
import { editor as MonacoEditor } from 'monaco-editor';

/**
 * This function convert colors object to CSS variables, and add it to the :root {}.
 * The default color id default contains dot punctuation, so there we convert the `.` to `-`.
 * More about the color token id, you need visit: https://code.visualstudio.com/api/references/theme-color
 * @param colors
 */
export function convertToCSSVars(colors: object) {
    let cssVars = '';
    for (const id in colors) {
        if (id) {
            const color = colors[id];
            if (color) {
                const colorName = id.replace('.', '-');
                cssVars += `--${colorName}: ${color}; \n`;
            }
        }
    }

    return `
        :root {
            ${cssVars}
        }
    `;
}

export function getThemeData(
    theme: IColorTheme
): MonacoEditor.IStandaloneThemeData {
    const builtInColors = getBuiltInColors(theme);
    const colors = Object.assign({}, builtInColors, theme.colors);

    const convertColors = {};
    for (const colorId in colors) {
        if (colorId) {
            const colorHex: any = colors[colorId];
            if (colorHex && typeof colorHex === 'object') {
                convertColors[colorId] = colorHex.toString();
            } else if (typeof colorHex === 'string') {
                convertColors[colorId] = colorHex;
            }
        }
    }

    const tokens = theme.tokenColors;
    const rules: MonacoEditor.ITokenThemeRule[] = [];

    const updateRules = (s, token) => {
        const index = rules.findIndex((r) => r.token === s);
        if (index > 0) {
            Object.assign(rules[index], {
                ...token.settings,
            });
        } else {
            if (s) {
                rules.push({
                    token: s,
                    ...token.settings,
                });
            }
        }
    };

    tokens?.forEach((token) => {
        if (Array.isArray(token.scope)) {
            token.scope.forEach((s) => updateRules(s, token));
        } else {
            updateRules(token.scope, token);
        }
    });

    return {
        base: theme.uiTheme as any,
        rules: rules,
        inherit: true,
        colors: convertColors,
    };
}
