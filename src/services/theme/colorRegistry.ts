/**
 * Builtin colors
 */
import { IColorTheme } from 'mo/model/colorTheme';
import { Color } from 'monaco-editor/esm/vs/base/common/color';

const defaultVS = {
    workbenchBackground: '#F3F3F3',
    foreground: '#616161',
    errorForeground: '#A1260D',
    descriptionForeground: '#717171',
    'icon.foreground': '#424242',
    focusBorder: '#0090F1',
    'widget.shadow': '#A8A8A8',

    'textSeparator.foreground': '#0000002e',
    'textLink.foreground': '#006AB1',
    'textLink.activeForeground': '#006AB1',
    'textBlockQuote.background': '#7f7f7f1a',
    'textBlockQuote.border': '#007acc80',
    'textCodeBlock.background': '#dcdcdc66',

    'input.background': Color.white,
    'input.foreground': '#616161',
    'input.border': '#616161',
    'inputOption.activeBorder': '#007ACC00',
    'inputOption.activeBackground': Color.fromHex('#007ACC').transparent(0.3),
    'input.placeholderForeground': Color.fromHex('#616161').transparent(0.5),

    'dropdown.background': Color.white,
    'dropdown.border': Color.white,

    'checkbox.background': Color.white,
    'checkbox.border': Color.white,
    'button.background': '#007ACC',
    'button.foreground': Color.white,

    'badge.background': '#C4C4C4',
    'badge.foreground': '#333',

    'scrollbar.shadow': '#DDDDDD',
    'scrollbarSlider.background': Color.fromHex('#646464').transparent(0.4),
    'scrollbarSlider.hoverBackground':
        Color.fromHex('#646464').transparent(0.7),
    'scrollbarSlider.activeBackground':
        Color.fromHex('#000000').transparent(0.6),

    'progressBar.background': Color.fromHex('#0E70C0'),

    'editorError.background': '#E51400',
    'editorWarning.foreground': '#E51400',
    'editorInfo.foreground': '#E9A700',
    'editorHint.foreground': '#6c6c6c',
    'editor.background': '#fffffe',
    'editor.foreground': '#333333',
    'editor.selectionBackground': '#ADD6FF',
    'editor.findMatchBackground': '#A8AC94',

    'list.dropBackground': '#E4E6F1',
    'list.hoverBackground': '#F0F0F0',
    'list.activeSelectionBackground': '#0074E8',
    'list.activeSelectionForeground': Color.white,

    'menu.foreground': '#616161',
    'menu.background': Color.white,
    'menu.separatorBackground': '#888888',

    'panel.background': Color.white,
    'panel.border': 'rgba(128, 128, 128, 0.35)',
    'panelTitle.activeForeground': 'rgb(66, 66, 66)',
    'panelTitle.activeBorder': 'rgb(66, 66, 66)',

    'activityBar.background': 'rgb(51, 51, 51)',
    'activityBar.activeBorder': '#fff',
    'activityBar.foreground': 'rgba(255, 255, 255, 0.4)',

    'statusBar.background': 'rgb(0, 122, 204)',
    'statusBar.foreground': 'rgb(255, 255, 255)',
};

const defaultDark = {
    workbenchBackground: '#252526',
    foreground: '#CCCCCC',
    'widget.shadow': '#000000',
    errorForeground: '#F48771',
    descriptionForeground: Color.fromHex('#CCCCCC').transparent(0.7),
    'icon.foreground': '#C5C5C5',
    focusBorder: '#007FD4',

    'textSeparator.foreground': '#ffffff2e',
    'textLink.foreground': '#3794FF',
    'textLink.activeForeground': '#3794FF',
    'textBlockQuote.background': '#7f7f7f1a',
    'textBlockQuote.border': '#007acc80',
    'textCodeBlock.background': '#0a0a0a66',

    'input.background': '#3C3C3C',
    'input.foreground': '#CCCCCC',
    'inputOption.activeBorder': '#007ACC00',
    'inputOption.activeBackground': Color.fromHex('#0E639C').transparent(0.5),
    'input.placeholderForeground': Color.fromHex('#616161').transparent(0.5),

    'dropdown.background': '#3C3C3C',
    'dropdown.foreground': '#F0F0F0',
    'dropdown.border': '#CECECE',

    'checkbox.border': '#CECECE',
    'button.background': '#0E639C',
    'button.foreground': Color.white,
    'button.hoverBackground': Color.fromHex('#0E639C').transparent(0.2),

    'badge.background': '#4D4D4D',
    'badge.foreground': Color.white,

    'scrollbar.shadow': '#000000',
    'scrollbarSlider.background': Color.fromHex('#797979').transparent(0.4),
    'scrollbarSlider.hoverBackground':
        Color.fromHex('#646464').transparent(0.7),
    'scrollbarSlider.activeBackground':
        Color.fromHex('#BFBFBF').transparent(0.4),

    'progressBar.background': Color.fromHex('#0E70C0'),

    'editorError.background': '#F48771',
    'editorWarning.foreground': '#CCA700',
    'editorInfo.foreground': '#75BEFF',
    'editorHint.foreground': Color.fromHex('#eeeeee').transparent(0.7),
    'editor.background': '#1E1E1E',
    'editor.foreground': '#BBBBBB',
    'editor.selectionBackground': '#264F78',
    'editor.selectionForeground': '#000000',

    'list.dropBackground': '#37373D',
    'list.hoverBackground': '#2A2D2E',
    'list.activeSelectionBackground': '#37373D',
    'list.activeSelectionForeground': Color.white,

    'menu.foreground': '#F0F0F0',
    'menu.background': '#3C3C3C',
    'menu.separatorBackground': '#BBBBBB',

    'panel.background': 'rgb(30, 30, 30)',
    'panel.border': '#3C3C3C',
    'panelTitle.activeBorder': 'rgb(231, 231, 231)',
    'panelTitle.activeForeground': 'rgb(231, 231, 231)',

    'activityBar.background': 'rgb(51, 51, 51)',
    'activityBar.activeBorder': '#fff',
    'activityBar.foreground': 'rgba(255, 255, 255, 0.4)',

    'statusBar.background': 'rgb(0, 122, 204)',
    'statusBar.foreground': 'rgb(255, 255, 255)',
};

const defaultHc = {
    workbenchBackground: '#000000',
    foreground: '#FFFFFF',
    errorForeground: '#F48771',
    descriptionForeground: Color.fromHex('#FFFFFF').transparent(0.7),
    'icon.foreground': '#FFFFFF',
    focusBorder: '#F38518',
    contrastBorder: '#6FC3DF',
    contrastActiveBorder: '#F38518',

    'textSeparator.foreground': Color.black,
    'textLink.foreground': '#3794FF',
    'textLink.activeForeground': '#3794FF',
    'textBlockQuote.border': Color.white,
    'textCodeBlock.background': Color.black,

    'input.background': Color.black,
    'input.foreground': '#FFFFFF',
    'input.border': '#6FC3DF',
    'inputOption.activeBorder': '#6FC3DF',
    'input.placeholderForeground': Color.fromHex('#616161').transparent(0.7),

    'dropdown.background': Color.black,
    'dropdown.listBackground': Color.black,
    'dropdown.foreground': Color.white,
    'dropdown.border': '#6FC3DF',

    'checkbox.border': '#6FC3DF',
    'button.foreground': Color.white,

    'badge.background': Color.black,
    'badge.foreground': Color.white,
    'scrollbarSlider.background': Color.fromHex('#6FC3DF').transparent(0.6),
    'scrollbarSlider.hoverBackground':
        Color.fromHex('#6FC3DF').transparent(0.8),
    'scrollbarSlider.activeBackground': '#6FC3DF',

    'progressBar.background': '#6FC3DF',
    'editorError.border': Color.fromHex('#E47777').transparent(0.8),
    'editorWarning.border': Color.fromHex('#FFCC00').transparent(0.8),
    'editorInfo.border': Color.fromHex('#FFCC00').transparent(0.8),
    'editorHint.border': Color.fromHex('#eeeeee').transparent(0.8),
    'editor.background': Color.black,
    'editor.foreground': Color.white,
    'editor.selectionForeground': '#000000',

    'menu.foreground': Color.white,
    'menu.background': Color.black,
    'menu.separatorBackground': '#6FC3DF',

    'panel.border': '#6FC3DF',
    'panelTitle.activeBorder': 'rgb(231, 231, 231)',
    'panelTitle.activeForeground': 'rgb(231, 231, 231)',

    'activityBar.background': 'rgb(51, 51, 51)',
    'activityBar.activeBorder': '#fff',
    'activityBar.foreground': 'rgba(255, 255, 255, 0.4)',

    'statusBar.background': 'rgb(0, 122, 204)',
    'statusBar.foreground': 'rgb(255, 255, 255)',
};

export function getBuiltInColors(theme: IColorTheme) {
    switch (theme.uiTheme) {
        case 'vs-dark': {
            return { ...defaultDark };
        }
        case 'vs': {
            return { ...defaultVS };
        }
        default: {
            return { ...defaultHc };
        }
    }
}
