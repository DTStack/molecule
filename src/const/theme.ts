/* eslint-disable @typescript-eslint/no-unused-vars */
import { Color } from 'mo/monaco';

const enum ColorTransformType {
    Darken,
    Lighten,
    Transparent,
    Opaque,
    OneOf,
    LessProminent,
    IfDefinedThenElse,
}

type ColorTransform =
    | { op: ColorTransformType.Darken; value: ColorDefined; factor: number }
    | { op: ColorTransformType.Lighten; value: ColorDefined; factor: number }
    | { op: ColorTransformType.Transparent; value: ColorDefined; factor: number }
    | { op: ColorTransformType.OneOf; values: ColorDefined[] }
    | {
          op: ColorTransformType.LessProminent;
          value: ColorDefined;
          background: ColorDefined;
          factor: number;
          transparency: number;
      }
    | {
          op: ColorTransformType.IfDefinedThenElse;
          if: ColorDefined;
          then: ColorDefined;
          else: ColorDefined;
      };

function transparent(colorValue: ColorDefined, factor: number): ColorTransform {
    return { op: ColorTransformType.Transparent, value: colorValue, factor };
}
function lighten(colorValue: string, factor: number): ColorTransform {
    return { op: ColorTransformType.Lighten, value: colorValue, factor };
}
function darken(colorValue: string, factor: number): ColorTransform {
    return { op: ColorTransformType.Darken, value: colorValue, factor };
}
function oneOf(...colorValues: string[]): ColorTransform {
    return { op: ColorTransformType.OneOf, values: colorValues };
}
function lessProminent(
    colorValue: string,
    backgroundColorValue: string,
    factor: number,
    transparency: number
): ColorTransform {
    return {
        op: ColorTransformType.LessProminent,
        value: colorValue,
        background: backgroundColorValue,
        factor,
        transparency,
    };
}
function ifDefinedThenElse(ifArg: string, thenArg: string, elseArg: string): ColorTransform {
    return { op: ColorTransformType.IfDefinedThenElse, if: ifArg, then: thenArg, else: elseArg };
}

type ColorDefined = string | ColorTransform | Color['white'] | null;
type ColorMap = {
    dark: ColorDefined;
    light: ColorDefined;
    hcDark: ColorDefined;
    hcLight: ColorDefined;
};

export class DefaultColor {
    private colors = new Map<string, ColorMap>();
    private registerColor = (id: string, defaults: ColorMap) => {
        this.colors.set(id, defaults);
        return id;
    };
    // prettier-ignore
    constructor() {
        this.registerColor('workbenchBackground',{ dark: '#f3f3f3', light: '#252526', hcDark: '#000000', hcLight: '#ffffff' });
        const foreground = this.registerColor('foreground', { dark: '#CCCCCC', light: '#616161', hcDark: '#FFFFFF', hcLight: '#292929' });
        this.registerColor('disabledForeground', { dark: '#CCCCCC80', light: '#61616180', hcDark: '#A5A5A5', hcLight: '#7F7F7F' });
        const errorForeground = this.registerColor('errorForeground', { dark: '#F48771', light: '#A1260D', hcDark: '#F48771', hcLight: '#B5200D' });
        this.registerColor('descriptionForeground', { light: '#717171', dark: transparent(foreground, 0.7), hcDark: transparent(foreground, 0.7), hcLight: transparent(foreground, 0.7) });
        const iconForeground = this.registerColor('icon.foreground', { dark: '#C5C5C5', light: '#424242', hcDark: '#FFFFFF', hcLight: '#292929' });

        const focusBorder = this.registerColor('focusBorder', { dark: '#007FD4', light: '#0090F1', hcDark: '#F38518', hcLight: '#006BBD' });

        const contrastBorder = this.registerColor('contrastBorder', { light: null, dark: null, hcDark: '#6FC3DF', hcLight: '#0F4A85' });
        const activeContrastBorder = this.registerColor('contrastActiveBorder', { light: null, dark: null, hcDark: focusBorder, hcLight: focusBorder });

        this.registerColor('selection.background', { light: null, dark: null, hcDark: null, hcLight: null });

        // ------ text colors

        this.registerColor('textSeparator.foreground', { light: '#0000002e', dark: '#ffffff2e', hcDark: Color.black, hcLight: '#292929' });
        const textLinkForeground = this.registerColor('textLink.foreground', { light: '#006AB1', dark: '#3794FF', hcDark: '#3794FF', hcLight: '#0F4A85' });
        this.registerColor('textLink.activeForeground', { light: '#006AB1', dark: '#3794FF', hcDark: '#3794FF', hcLight: '#0F4A85' });
        this.registerColor('textPreformat.foreground', { light: '#A31515', dark: '#D7BA7D', hcDark: '#D7BA7D', hcLight: '#292929' });
        this.registerColor('textBlockQuote.background', { light: '#7f7f7f1a', dark: '#7f7f7f1a', hcDark: null, hcLight: '#F2F2F2' });
        this.registerColor('textBlockQuote.border', { light: '#007acc80', dark: '#007acc80', hcDark: Color.white, hcLight: '#292929' });
        this.registerColor('textCodeBlock.background', { light: '#dcdcdc66', dark: '#0a0a0a66', hcDark: Color.black, hcLight: '#F2F2F2' });

        // ----- widgets
        const widgetShadow = this.registerColor('widget.shadow', { dark: transparent(Color.black, 0.36), light: transparent(Color.black, 0.16), hcDark: null, hcLight: null });
        const widgetBorder = this.registerColor('widget.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder });

        this.registerColor('input.background', { dark: '#3C3C3C', light: Color.white, hcDark: Color.black, hcLight: Color.white });
        this.registerColor('input.foreground', { dark: foreground, light: foreground, hcDark: foreground, hcLight: foreground });
        const inputBorder = this.registerColor('input.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder });
        this.registerColor('inputOption.activeBorder', { dark: '#007ACC', light: '#007ACC', hcDark: contrastBorder, hcLight: contrastBorder });
        this.registerColor('inputOption.hoverBackground', { dark: '#5a5d5e80', light: '#b8b8b850', hcDark: null, hcLight: null });
        this.registerColor('inputOption.activeBackground', { dark: transparent(focusBorder, 0.4), light: transparent(focusBorder, 0.2), hcDark: Color.transparent, hcLight: Color.transparent });
        this.registerColor('inputOption.activeForeground', { dark: Color.white, light: Color.black, hcDark: foreground, hcLight: foreground });
        this.registerColor('input.placeholderForeground', { light: transparent(foreground, 0.5), dark: transparent(foreground, 0.5), hcDark: transparent(foreground, 0.7), hcLight: transparent(foreground, 0.7) });

        this.registerColor('inputValidation.infoBackground', { dark: '#063B49', light: '#D6ECF2', hcDark: Color.black, hcLight: Color.white });
        this.registerColor('inputValidation.infoForeground', { dark: null, light: null, hcDark: null, hcLight: foreground });
        this.registerColor('inputValidation.infoBorder', { dark: '#007acc', light: '#007acc', hcDark: contrastBorder, hcLight: contrastBorder });
        this.registerColor('inputValidation.warningBackground', { dark: '#352A05', light: '#F6F5D2', hcDark: Color.black, hcLight: Color.white });
        this.registerColor('inputValidation.warningForeground', { dark: null, light: null, hcDark: null, hcLight: foreground });
        this.registerColor('inputValidation.warningBorder', { dark: '#B89500', light: '#B89500', hcDark: contrastBorder, hcLight: contrastBorder });
        this.registerColor('inputValidation.errorBackground', { dark: '#5A1D1D', light: '#F2DEDE', hcDark: Color.black, hcLight: Color.white });
        this.registerColor('inputValidation.errorForeground', { dark: null, light: null, hcDark: null, hcLight: foreground });
        this.registerColor('inputValidation.errorBorder', { dark: '#BE1100', light: '#BE1100', hcDark: contrastBorder, hcLight: contrastBorder });

        const selectBackground = this.registerColor('dropdown.background', { dark: '#3C3C3C', light: Color.white, hcDark: Color.black, hcLight: Color.white });
        this.registerColor('dropdown.listBackground', { dark: null, light: null, hcDark: Color.black, hcLight: Color.white });
        const selectForeground = this.registerColor('dropdown.foreground', { dark: '#F0F0F0', light: foreground, hcDark: Color.white, hcLight: foreground });
        const selectBorder = this.registerColor('dropdown.border', { dark: selectBackground, light: '#CECECE', hcDark: contrastBorder, hcLight: contrastBorder });

        const buttonForeground = this.registerColor('button.foreground', { dark: Color.white, light: Color.white, hcDark: Color.white, hcLight: Color.white });
        this.registerColor('button.separator', { dark: transparent(buttonForeground, 0.4), light: transparent(buttonForeground, 0.4), hcDark: transparent(buttonForeground, 0.4), hcLight: transparent(buttonForeground, 0.4) });
        const buttonBackground = this.registerColor('button.background', { dark: '#0E639C', light: '#007ACC', hcDark: null, hcLight: '#0F4A85' });
        this.registerColor('button.hoverBackground', { dark: lighten(buttonBackground, 0.2), light: darken(buttonBackground, 0.2), hcDark: buttonBackground, hcLight: buttonBackground });
        this.registerColor('button.border', { dark: contrastBorder, light: contrastBorder, hcDark: contrastBorder, hcLight: contrastBorder });

        this.registerColor('button.secondaryForeground', { dark: Color.white, light: Color.white, hcDark: Color.white, hcLight: foreground });
        const buttonSecondaryBackground = this.registerColor('button.secondaryBackground', { dark: '#3A3D41', light: '#5F6A79', hcDark: null, hcLight: Color.white });
        this.registerColor('button.secondaryHoverBackground', { dark: lighten(buttonSecondaryBackground, 0.2), light: darken(buttonSecondaryBackground, 0.2), hcDark: null, hcLight: null });

        const badgeBackground = this.registerColor('badge.background', { dark: '#4D4D4D', light: '#C4C4C4', hcDark: Color.black, hcLight: '#0F4A85' });
        this.registerColor('badge.foreground', { dark: Color.white, light: '#333', hcDark: Color.white, hcLight: Color.white });

        this.registerColor('scrollbar.shadow', { dark: '#000000', light: '#DDDDDD', hcDark: null, hcLight: null });
        const scrollbarSliderBackground = this.registerColor('scrollbarSlider.background', { dark: Color.fromHex('#797979').transparent(0.4), light: Color.fromHex('#646464').transparent(0.4), hcDark: transparent(contrastBorder, 0.6), hcLight: transparent(contrastBorder, 0.4) });
        const scrollbarSliderHoverBackground = this.registerColor('scrollbarSlider.hoverBackground', { dark: Color.fromHex('#646464').transparent(0.7), light: Color.fromHex('#646464').transparent(0.7), hcDark: transparent(contrastBorder, 0.8), hcLight: transparent(contrastBorder, 0.8) });
        const scrollbarSliderActiveBackground = this.registerColor('scrollbarSlider.activeBackground', { dark: Color.fromHex('#BFBFBF').transparent(0.4), light: Color.fromHex('#000000').transparent(0.6), hcDark: contrastBorder, hcLight: contrastBorder });

        this.registerColor('progressBar.background', { dark: Color.fromHex('#0E70C0'), light: Color.fromHex('#0E70C0'), hcDark: contrastBorder, hcLight: contrastBorder });

        this.registerColor('editorError.background', { dark: null, light: null, hcDark: null, hcLight: null });
        const editorErrorForeground = this.registerColor('editorError.foreground', { dark: '#F14C4C', light: '#E51400', hcDark: '#F48771', hcLight: '#B5200D' });
        this.registerColor('editorError.border', { dark: null, light: null, hcDark: Color.fromHex('#E47777').transparent(0.8), hcLight: '#B5200D' });

        this.registerColor('editorWarning.background', { dark: null, light: null, hcDark: null, hcLight: null });
        const editorWarningForeground = this.registerColor('editorWarning.foreground', { dark: '#CCA700', light: '#BF8803', hcDark: '#FFD370', hcLight: '#895503' });
        const editorWarningBorder = this.registerColor('editorWarning.border', { dark: null, light: null, hcDark: Color.fromHex('#FFCC00').transparent(0.8), hcLight: Color.fromHex('#FFCC00').transparent(0.8) });

        this.registerColor('editorInfo.background', { dark: null, light: null, hcDark: null, hcLight: null });
        const editorInfoForeground = this.registerColor('editorInfo.foreground', { dark: '#3794FF', light: '#1a85ff', hcDark: '#3794FF', hcLight: '#1a85ff' });
        const editorInfoBorder = this.registerColor('editorInfo.border', { dark: null, light: null, hcDark: Color.fromHex('#3794FF').transparent(0.8), hcLight: '#292929' });

        this.registerColor('editorHint.foreground', { dark: Color.fromHex('#eeeeee').transparent(0.7), light: '#6c6c6c', hcDark: null, hcLight: null });
        this.registerColor('editorHint.border', { dark: null, light: null, hcDark: Color.fromHex('#eeeeee').transparent(0.8), hcLight: '#292929' });

        this.registerColor('sash.hoverBorder', { dark: focusBorder, light: focusBorder, hcDark: focusBorder, hcLight: focusBorder });

        /**
         * Editor background color.
         */
        const editorBackground = this.registerColor('editor.background', { light: '#ffffff', dark: '#1E1E1E', hcDark: Color.black, hcLight: Color.white });

        /**
         * Editor foreground color.
         */
        const editorForeground = this.registerColor('editor.foreground', { light: '#333333', dark: '#BBBBBB', hcDark: Color.white, hcLight: foreground });

        /**
         * Sticky scroll
         */
        this.registerColor('editorStickyScroll.background', { light: editorBackground, dark: editorBackground, hcDark: editorBackground, hcLight: editorBackground });
        this.registerColor('editorStickyScrollHover.background', { dark: '#2A2D2E', light: '#F0F0F0', hcDark: null, hcLight: Color.fromHex('#0F4A85').transparent(0.1) });

        /**
         * Editor widgets
         */
        const editorWidgetBackground = this.registerColor('editorWidget.background', { dark: '#252526', light: '#F3F3F3', hcDark: '#0C141F', hcLight: Color.white });
        const editorWidgetForeground = this.registerColor('editorWidget.foreground', { dark: foreground, light: foreground, hcDark: foreground, hcLight: foreground });
        const editorWidgetBorder = this.registerColor('editorWidget.border', { dark: '#454545', light: '#C8C8C8', hcDark: contrastBorder, hcLight: contrastBorder });
        this.registerColor('editorWidget.resizeBorder', { light: null, dark: null, hcDark: null, hcLight: null });

        /**
         * Quick pick widget
         */
        this.registerColor('quickInput.background', { dark: editorWidgetBackground, light: editorWidgetBackground, hcDark: editorWidgetBackground, hcLight: editorWidgetBackground });
        this.registerColor('quickInput.foreground', { dark: editorWidgetForeground, light: editorWidgetForeground, hcDark: editorWidgetForeground, hcLight: editorWidgetForeground });
        this.registerColor('quickInputTitle.background', { dark: '#ffffff1b', light: '#0000000f', hcDark: '#000000', hcLight: Color.white });
        this.registerColor('pickerGroup.foreground', { dark: '#3794FF', light: '#0066BF', hcDark: Color.white, hcLight: '#0F4A85' });
        this.registerColor('pickerGroup.border', { dark: '#3F3F46', light: '#CCCEDB', hcDark: Color.white, hcLight: '#0F4A85' });

        /**
         * Keybinding label
         */
        this.registerColor('keybindingLabel.background', { dark: '#8080802b', light: '#dddddd66', hcDark: Color.transparent, hcLight: Color.transparent });
        this.registerColor('keybindingLabel.foreground', { dark: Color.fromHex('#CCCCCC'), light: Color.fromHex('#555555'), hcDark: Color.white, hcLight: foreground });
        this.registerColor('keybindingLabel.border', { dark: '#33333399', light: '#cccccc66', hcDark: '#6fc3df', hcLight: contrastBorder });
        this.registerColor('keybindingLabel.bottomBorder', { dark: '#44444499', light: '#bbbbbb66', hcDark: '#6fc3df', hcLight: foreground });

        /**
         * Editor selection colors.
         */
        const editorSelectionBackground = this.registerColor('editor.selectionBackground', { light: '#ADD6FF', dark: '#264F78', hcDark: '#f3f518', hcLight: '#0F4A85' });
        this.registerColor('editor.selectionForeground', { light: null, dark: null, hcDark: '#000000', hcLight: Color.white });
        this.registerColor('editor.inactiveSelectionBackground', { light: transparent(editorSelectionBackground, 0.5), dark: transparent(editorSelectionBackground, 0.5), hcDark: transparent(editorSelectionBackground, 0.7), hcLight: transparent(editorSelectionBackground, 0.5) });
        this.registerColor('editor.selectionHighlightBackground', { light: lessProminent(editorSelectionBackground, editorBackground, 0.3, 0.6), dark: lessProminent(editorSelectionBackground, editorBackground, 0.3, 0.6), hcDark: null, hcLight: null });
        this.registerColor('editor.selectionHighlightBorder', { light: null, dark: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder });

        /**
         * Editor find match colors.
         */
        this.registerColor('editor.findMatchBackground', { light: '#A8AC94', dark: '#515C6A', hcDark: null, hcLight: null });
        const editorFindMatchHighlight = this.registerColor('editor.findMatchHighlightBackground', { light: '#EA5C0055', dark: '#EA5C0055', hcDark: null, hcLight: null });
        this.registerColor('editor.findRangeHighlightBackground', { dark: '#3a3d4166', light: '#b4b4b44d', hcDark: null, hcLight: null });
        this.registerColor('editor.findMatchBorder', { light: null, dark: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder });
        const editorFindMatchHighlightBorder = this.registerColor('editor.findMatchHighlightBorder', { light: null, dark: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder });
        this.registerColor('editor.findRangeHighlightBorder', { dark: null, light: null, hcDark: transparent(activeContrastBorder, 0.4), hcLight: transparent(activeContrastBorder, 0.4) });

        /**
         * Search Editor query match colors.
         *
         * Distinct from normal editor find match to allow for better differentiation
         */
        this.registerColor('searchEditor.findMatchBackground', { light: transparent(editorFindMatchHighlight, 0.66), dark: transparent(editorFindMatchHighlight, 0.66), hcDark: editorFindMatchHighlight, hcLight: editorFindMatchHighlight });
        this.registerColor('searchEditor.findMatchBorder', { light: transparent(editorFindMatchHighlightBorder, 0.66), dark: transparent(editorFindMatchHighlightBorder, 0.66), hcDark: editorFindMatchHighlightBorder, hcLight: editorFindMatchHighlightBorder });

        /**
         * Search Viewlet colors.
         */
        this.registerColor('search.resultsInfoForeground', { light: foreground, dark: transparent(foreground, 0.65), hcDark: foreground, hcLight: foreground });

        /**
         * Editor hover
         */
        this.registerColor('editor.hoverHighlightBackground', { light: '#ADD6FF26', dark: '#264f7840', hcDark: '#ADD6FF26', hcLight: null });
        const editorHoverBackground = this.registerColor('editorHoverWidget.background', { light: editorWidgetBackground, dark: editorWidgetBackground, hcDark: editorWidgetBackground, hcLight: editorWidgetBackground });
        this.registerColor('editorHoverWidget.foreground', { light: editorWidgetForeground, dark: editorWidgetForeground, hcDark: editorWidgetForeground, hcLight: editorWidgetForeground });
        this.registerColor('editorHoverWidget.border', { light: editorWidgetBorder, dark: editorWidgetBorder, hcDark: editorWidgetBorder, hcLight: editorWidgetBorder });
        this.registerColor('editorHoverWidget.statusBarBackground', { dark: lighten(editorHoverBackground, 0.2), light: darken(editorHoverBackground, 0.05), hcDark: editorWidgetBackground, hcLight: editorWidgetBackground });
        /**
         * Editor link colors
         */
        this.registerColor('editorLink.activeForeground', { dark: '#4E94CE', light: Color.blue, hcDark: Color.cyan, hcLight: '#292929' });

        /**
         * Inline hints
         */
        const editorInlayHintForeground = this.registerColor('editorInlayHint.foreground', { dark: '#969696', light: '#969696', hcDark: Color.white, hcLight: Color.black });
        const editorInlayHintBackground = this.registerColor('editorInlayHint.background', { dark: transparent(badgeBackground, 0.1), light: transparent(badgeBackground, 0.1), hcDark: transparent(Color.white, 0.1), hcLight: transparent(badgeBackground, 0.1) });
        this.registerColor('editorInlayHint.typeForeground', { dark: editorInlayHintForeground, light: editorInlayHintForeground, hcDark: editorInlayHintForeground, hcLight: editorInlayHintForeground });
        this.registerColor('editorInlayHint.typeBackground', { dark: editorInlayHintBackground, light: editorInlayHintBackground, hcDark: editorInlayHintBackground, hcLight: editorInlayHintBackground });
        this.registerColor('editorInlayHint.parameterForeground', { dark: editorInlayHintForeground, light: editorInlayHintForeground, hcDark: editorInlayHintForeground, hcLight: editorInlayHintForeground });
        this.registerColor('editorInlayHint.parameterBackground', { dark: editorInlayHintBackground, light: editorInlayHintBackground, hcDark: editorInlayHintBackground, hcLight: editorInlayHintBackground });

        /**
         * Editor lightbulb icon colors
         */
        this.registerColor('editorLightBulb.foreground', { dark: '#FFCC00', light: '#DDB100', hcDark: '#FFCC00', hcLight: '#007ACC' });
        this.registerColor('editorLightBulbAutoFix.foreground', { dark: '#75BEFF', light: '#007ACC', hcDark: '#75BEFF', hcLight: '#007ACC' });

        /**
         * Diff Editor Colors
         */
        const defaultInsertColor = '#9bb95533';
        const defaultRemoveColor = '#ff000033';

        this.registerColor('diffEditor.insertedTextBackground', { dark: '#9ccc2c33', light: '#9ccc2c40', hcDark: null, hcLight: null });
        this.registerColor('diffEditor.removedTextBackground', { dark: '#ff000033', light: '#ff000033', hcDark: null, hcLight: null });

        this.registerColor('diffEditor.insertedLineBackground', { dark: defaultInsertColor, light: defaultInsertColor, hcDark: null, hcLight: null });
        this.registerColor('diffEditor.removedLineBackground', { dark: defaultRemoveColor, light: defaultRemoveColor, hcDark: null, hcLight: null });

        this.registerColor('diffEditorGutter.insertedLineBackground', { dark: null, light: null, hcDark: null, hcLight: null });
        this.registerColor('diffEditorGutter.removedLineBackground', { dark: null, light: null, hcDark: null, hcLight: null });

        this.registerColor('diffEditorOverview.insertedForeground', { dark: null, light: null, hcDark: null, hcLight: null });
        this.registerColor('diffEditorOverview.removedForeground', { dark: null, light: null, hcDark: null, hcLight: null });

        this.registerColor('diffEditor.insertedTextBorder', { dark: null, light: null, hcDark: '#33ff2eff', hcLight: '#374E06' });
        this.registerColor('diffEditor.removedTextBorder', { dark: null, light: null, hcDark: '#FF008F', hcLight: '#AD0707' });

        this.registerColor('diffEditor.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder });
        this.registerColor('diffEditor.diagonalFill', { dark: '#cccccc33', light: '#22222233', hcDark: null, hcLight: null });

        this.registerColor('diffEditor.unchangedRegionBackground', { dark: '#3e3e3e', light: '#e4e4e4', hcDark: null, hcLight: null });
        this.registerColor('diffEditor.unchangedRegionForeground', { dark: '#a3a2a2', light: '#4d4c4c', hcDark: null, hcLight: null });
        this.registerColor('diffEditor.unchangedCodeBackground', { dark: '#74747429', light: '#b8b8b829', hcDark: null, hcLight: null });

        /**
         * List and tree colors
         */
        this.registerColor('list.focusBackground', { dark: null, light: null, hcDark: null, hcLight: null });
        this.registerColor('list.focusForeground', { dark: null, light: null, hcDark: null, hcLight: null });
        this.registerColor('list.focusOutline', { dark: focusBorder, light: focusBorder, hcDark: activeContrastBorder, hcLight: activeContrastBorder });
        this.registerColor('list.focusAndSelectionOutline', { dark: null, light: null, hcDark: null, hcLight: null });
        const listActiveSelectionBackground = this.registerColor('list.activeSelectionBackground', { dark: '#04395E', light: '#0060C0', hcDark: null, hcLight: Color.fromHex('#0F4A85').transparent(0.1) });
        const listActiveSelectionForeground = this.registerColor('list.activeSelectionForeground', { dark: Color.white, light: Color.white, hcDark: null, hcLight: null });
        const listActiveSelectionIconForeground = this.registerColor('list.activeSelectionIconForeground', { dark: null, light: null, hcDark: null, hcLight: null });
        this.registerColor('list.inactiveSelectionBackground', { dark: '#37373D', light: '#E4E6F1', hcDark: null, hcLight: Color.fromHex('#0F4A85').transparent(0.1) });
        this.registerColor('list.inactiveSelectionForeground', { dark: null, light: null, hcDark: null, hcLight: null });
        this.registerColor('list.inactiveSelectionIconForeground', { dark: null, light: null, hcDark: null, hcLight: null });
        this.registerColor('list.inactiveFocusBackground', { dark: null, light: null, hcDark: null, hcLight: null });
        this.registerColor('list.inactiveFocusOutline', { dark: null, light: null, hcDark: null, hcLight: null });
        this.registerColor('list.hoverBackground', { dark: '#2A2D2E', light: '#F0F0F0', hcDark: Color.white.transparent(0.1), hcLight: Color.fromHex('#0F4A85').transparent(0.1) });
        this.registerColor('list.hoverForeground', { dark: null, light: null, hcDark: null, hcLight: null });
        this.registerColor('list.dropBackground', { dark: '#062F4A', light: '#D6EBFF', hcDark: null, hcLight: null });
        const listHighlightForeground = this.registerColor('list.highlightForeground', { dark: '#2AAAFF', light: '#0066BF', hcDark: focusBorder, hcLight: focusBorder });
        this.registerColor('list.focusHighlightForeground', { dark: listHighlightForeground, light: ifDefinedThenElse(listActiveSelectionBackground, listHighlightForeground, '#BBE7FF'), hcDark: listHighlightForeground, hcLight: listHighlightForeground });
        this.registerColor('list.invalidItemForeground', { dark: '#B89500', light: '#B89500', hcDark: '#B89500', hcLight: '#B5200D' });
        this.registerColor('list.errorForeground', { dark: '#F88070', light: '#B01011', hcDark: null, hcLight: null });
        this.registerColor('list.warningForeground', { dark: '#CCA700', light: '#855F00', hcDark: null, hcLight: null });
        this.registerColor('listFilterWidget.background', { light: darken(editorWidgetBackground, 0), dark: lighten(editorWidgetBackground, 0), hcDark: editorWidgetBackground, hcLight: editorWidgetBackground });
        this.registerColor('listFilterWidget.outline', { dark: Color.transparent, light: Color.transparent, hcDark: '#f38518', hcLight: '#007ACC' });
        this.registerColor('listFilterWidget.noMatchesOutline', { dark: '#BE1100', light: '#BE1100', hcDark: contrastBorder, hcLight: contrastBorder });
        this.registerColor('listFilterWidget.shadow', { dark: widgetShadow, light: widgetShadow, hcDark: widgetShadow, hcLight: widgetShadow });
        this.registerColor('list.filterMatchBackground', { dark: editorFindMatchHighlight, light: editorFindMatchHighlight, hcDark: null, hcLight: null });
        this.registerColor('list.filterMatchBorder', { dark: editorFindMatchHighlightBorder, light: editorFindMatchHighlightBorder, hcDark: contrastBorder, hcLight: activeContrastBorder });
        const treeIndentGuidesStroke = this.registerColor('tree.indentGuidesStroke', { dark: '#585858', light: '#a9a9a9', hcDark: '#a9a9a9', hcLight: '#a5a5a5' });
        this.registerColor('tree.inactiveIndentGuidesStroke', { dark: transparent(treeIndentGuidesStroke, 0.4), light: transparent(treeIndentGuidesStroke, 0.4), hcDark: transparent(treeIndentGuidesStroke, 0.4), hcLight: transparent(treeIndentGuidesStroke, 0.4) });
        this.registerColor('tree.tableColumnsBorder', { dark: '#CCCCCC20', light: '#61616120', hcDark: null, hcLight: null });
        this.registerColor('tree.tableOddRowsBackground', { dark: transparent(foreground, 0.04), light: transparent(foreground, 0.04), hcDark: null, hcLight: null });
        this.registerColor('list.deemphasizedForeground', { dark: '#8C8C8C', light: '#8E8E90', hcDark: '#A7A8A9', hcLight: '#666666' });

        /**
         * Checkboxes
         */
        this.registerColor('checkbox.background', { dark: selectBackground, light: selectBackground, hcDark: selectBackground, hcLight: selectBackground });
        this.registerColor('checkbox.selectBackground', { dark: editorWidgetBackground, light: editorWidgetBackground, hcDark: editorWidgetBackground, hcLight: editorWidgetBackground });
        this.registerColor('checkbox.foreground', { dark: selectForeground, light: selectForeground, hcDark: selectForeground, hcLight: selectForeground });
        this.registerColor('checkbox.border', { dark: selectBorder, light: selectBorder, hcDark: selectBorder, hcLight: selectBorder });
        this.registerColor('checkbox.selectBorder', { dark: iconForeground, light: iconForeground, hcDark: iconForeground, hcLight: iconForeground });

        /**
         * Quick pick widget (dependent on List and tree colors)
         */
        const _deprecatedQuickInputListFocusBackground = this.registerColor('quickInput.list.focusBackground', { dark: null, light: null, hcDark: null, hcLight: null });
        this.registerColor('quickInputList.focusForeground', { dark: listActiveSelectionForeground, light: listActiveSelectionForeground, hcDark: listActiveSelectionForeground, hcLight: listActiveSelectionForeground });
        this.registerColor('quickInputList.focusIconForeground', { dark: listActiveSelectionIconForeground, light: listActiveSelectionIconForeground, hcDark: listActiveSelectionIconForeground, hcLight: listActiveSelectionIconForeground });
        this.registerColor('quickInputList.focusBackground', { dark: oneOf(_deprecatedQuickInputListFocusBackground, listActiveSelectionBackground), light: oneOf(_deprecatedQuickInputListFocusBackground, listActiveSelectionBackground), hcDark: null, hcLight: null });

        /**
         * Menu colors
         */
        this.registerColor('menu.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder });
        this.registerColor('menu.foreground', { dark: selectForeground, light: selectForeground, hcDark: selectForeground, hcLight: selectForeground });
        this.registerColor('menu.background', { dark: selectBackground, light: selectBackground, hcDark: selectBackground, hcLight: selectBackground });
        this.registerColor('menu.selectionForeground', { dark: listActiveSelectionForeground, light: listActiveSelectionForeground, hcDark: listActiveSelectionForeground, hcLight: listActiveSelectionForeground });
        this.registerColor('menu.selectionBackground', { dark: listActiveSelectionBackground, light: listActiveSelectionBackground, hcDark: listActiveSelectionBackground, hcLight: listActiveSelectionBackground });
        this.registerColor('menu.selectionBorder', { dark: null, light: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder });
        this.registerColor('menu.separatorBackground', { dark: '#606060', light: '#D4D4D4', hcDark: contrastBorder, hcLight: contrastBorder });

        /**
         * Toolbar colors
         */
        const toolbarHoverBackground = this.registerColor('toolbar.hoverBackground', { dark: '#5a5d5e50', light: '#b8b8b850', hcDark: null, hcLight: null });
        this.registerColor('toolbar.hoverOutline', { dark: null, light: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder });
        this.registerColor('toolbar.activeBackground', { dark: lighten(toolbarHoverBackground, 0.1), light: darken(toolbarHoverBackground, 0.1), hcDark: null, hcLight: null });

        /**
         * Snippet placeholder colors
         */
        this.registerColor('editor.snippetTabstopHighlightBackground', { dark: '#7c7c7c4d', light: '#0a326433', hcDark: '#7c7c7c4d', hcLight: '#0a326433' });
        this.registerColor('editor.snippetTabstopHighlightBorder', { dark: null, light: null, hcDark: null, hcLight: null });
        this.registerColor('editor.snippetFinalTabstopHighlightBackground', { dark: null, light: null, hcDark: null, hcLight: null });
        this.registerColor('editor.snippetFinalTabstopHighlightBorder', { dark: '#525252', light: '#0a326480', hcDark: '#525252', hcLight: '#292929' });

        /**
         * Breadcrumb colors
         */
        this.registerColor('breadcrumb.foreground', { light: transparent(foreground, 0.8), dark: transparent(foreground, 0.8), hcDark: transparent(foreground, 0.8), hcLight: transparent(foreground, 0.8) });
        this.registerColor('breadcrumb.background', { light: editorBackground, dark: editorBackground, hcDark: editorBackground, hcLight: editorBackground });
        this.registerColor('breadcrumb.focusForeground', { light: darken(foreground, 0.2), dark: lighten(foreground, 0.1), hcDark: lighten(foreground, 0.1), hcLight: lighten(foreground, 0.1) });
        this.registerColor('breadcrumb.activeSelectionForeground', { light: darken(foreground, 0.2), dark: lighten(foreground, 0.1), hcDark: lighten(foreground, 0.1), hcLight: lighten(foreground, 0.1) });
        this.registerColor('breadcrumbPicker.background', { light: editorWidgetBackground, dark: editorWidgetBackground, hcDark: editorWidgetBackground, hcLight: editorWidgetBackground });

        /**
         * Merge-conflict colors
         */
        const headerTransparency = 0.5;
        const currentBaseColor = Color.fromHex('#40C8AE').transparent(headerTransparency);
        const incomingBaseColor = Color.fromHex('#40A6FF').transparent(headerTransparency);
        const commonBaseColor = Color.fromHex('#606060').transparent(0.4);
        const contentTransparency = 0.4;
        const rulerTransparency = 1;

        const mergeCurrentHeaderBackground = this.registerColor('merge.currentHeaderBackground', { dark: currentBaseColor, light: currentBaseColor, hcDark: null, hcLight: null });
        this.registerColor('merge.currentContentBackground', { dark: transparent(mergeCurrentHeaderBackground, contentTransparency), light: transparent(mergeCurrentHeaderBackground, contentTransparency), hcDark: transparent(mergeCurrentHeaderBackground, contentTransparency), hcLight: transparent(mergeCurrentHeaderBackground, contentTransparency) });
        const mergeIncomingHeaderBackground = this.registerColor('merge.incomingHeaderBackground', { dark: incomingBaseColor, light: incomingBaseColor, hcDark: null, hcLight: null });
        this.registerColor('merge.incomingContentBackground', { dark: transparent(mergeIncomingHeaderBackground, contentTransparency), light: transparent(mergeIncomingHeaderBackground, contentTransparency), hcDark: transparent(mergeIncomingHeaderBackground, contentTransparency), hcLight: transparent(mergeIncomingHeaderBackground, contentTransparency) });
        const mergeCommonHeaderBackground = this.registerColor('merge.commonHeaderBackground', { dark: commonBaseColor, light: commonBaseColor, hcDark: null, hcLight: null });
        this.registerColor('merge.commonContentBackground', { dark: transparent(mergeCommonHeaderBackground, contentTransparency), light: transparent(mergeCommonHeaderBackground, contentTransparency), hcDark: transparent(mergeCommonHeaderBackground, contentTransparency), hcLight: transparent(mergeCommonHeaderBackground, contentTransparency) });

        const mergeBorder = this.registerColor('merge.border', { dark: null, light: null, hcDark: '#C3DF6F', hcLight: '#007ACC' });

        this.registerColor('editorOverviewRuler.currentContentForeground', { dark: transparent(mergeCurrentHeaderBackground, rulerTransparency), light: transparent(mergeCurrentHeaderBackground, rulerTransparency), hcDark: mergeBorder, hcLight: mergeBorder });
        this.registerColor('editorOverviewRuler.incomingContentForeground', { dark: transparent(mergeIncomingHeaderBackground, rulerTransparency), light: transparent(mergeIncomingHeaderBackground, rulerTransparency), hcDark: mergeBorder, hcLight: mergeBorder });
        this.registerColor('editorOverviewRuler.commonContentForeground', { dark: transparent(mergeCommonHeaderBackground, rulerTransparency), light: transparent(mergeCommonHeaderBackground, rulerTransparency), hcDark: mergeBorder, hcLight: mergeBorder });

        this.registerColor('editorOverviewRuler.findMatchForeground', { dark: '#d186167e', light: '#d186167e', hcDark: '#AB5A00', hcLight: '' });

        this.registerColor('editorOverviewRuler.selectionHighlightForeground', { dark: '#A0A0A0CC', light: '#A0A0A0CC', hcDark: '#A0A0A0CC', hcLight: '#A0A0A0CC' });

        const minimapFindMatch = this.registerColor('minimap.findMatchHighlight', { light: '#d18616', dark: '#d18616', hcDark: '#AB5A00', hcLight: '#0F4A85' });
        this.registerColor('minimap.selectionOccurrenceHighlight', { light: '#c9c9c9', dark: '#676767', hcDark: '#ffffff', hcLight: '#0F4A85' });
        this.registerColor('minimap.selectionHighlight', { light: '#ADD6FF', dark: '#264F78', hcDark: '#ffffff', hcLight: '#0F4A85' });
        this.registerColor('minimap.infoHighlight', { dark: editorInfoForeground, light: editorInfoForeground, hcDark: editorInfoBorder, hcLight: editorInfoBorder });
        this.registerColor('minimap.warningHighlight', { dark: editorWarningForeground, light: editorWarningForeground, hcDark: editorWarningBorder, hcLight: editorWarningBorder });
        this.registerColor('minimap.errorHighlight', { dark: '#ff1212b3', light: '#ff1212b3', hcDark: '#ff3232', hcLight: '#B5200D' });
        this.registerColor('minimap.background', { dark: null, light: null, hcDark: null, hcLight: null });
        this.registerColor('minimap.foregroundOpacity', { dark: Color.fromHex('#000f'), light: Color.fromHex('#000f'), hcDark: Color.fromHex('#000f'), hcLight: Color.fromHex('#000f') });

        this.registerColor('minimapSlider.background', { light: transparent(scrollbarSliderBackground, 0.5), dark: transparent(scrollbarSliderBackground, 0.5), hcDark: transparent(scrollbarSliderBackground, 0.5), hcLight: transparent(scrollbarSliderBackground, 0.5) });
        this.registerColor('minimapSlider.hoverBackground', { light: transparent(scrollbarSliderHoverBackground, 0.5), dark: transparent(scrollbarSliderHoverBackground, 0.5), hcDark: transparent(scrollbarSliderHoverBackground, 0.5), hcLight: transparent(scrollbarSliderHoverBackground, 0.5) });
        this.registerColor('minimapSlider.activeBackground', { light: transparent(scrollbarSliderActiveBackground, 0.5), dark: transparent(scrollbarSliderActiveBackground, 0.5), hcDark: transparent(scrollbarSliderActiveBackground, 0.5), hcLight: transparent(scrollbarSliderActiveBackground, 0.5) });

        this.registerColor('problemsErrorIcon.foreground', { dark: editorErrorForeground, light: editorErrorForeground, hcDark: editorErrorForeground, hcLight: editorErrorForeground });
        this.registerColor('problemsWarningIcon.foreground', { dark: editorWarningForeground, light: editorWarningForeground, hcDark: editorWarningForeground, hcLight: editorWarningForeground });
        this.registerColor('problemsInfoIcon.foreground', { dark: editorInfoForeground, light: editorInfoForeground, hcDark: editorInfoForeground, hcLight: editorInfoForeground });

        /**
         * Chart colors
         */
        this.registerColor('charts.foreground', { dark: foreground, light: foreground, hcDark: foreground, hcLight: foreground });
        this.registerColor('charts.lines', { dark: transparent(foreground, 0.5), light: transparent(foreground, 0.5), hcDark: transparent(foreground, 0.5), hcLight: transparent(foreground, 0.5) });
        this.registerColor('charts.red', { dark: editorErrorForeground, light: editorErrorForeground, hcDark: editorErrorForeground, hcLight: editorErrorForeground });
        this.registerColor('charts.blue', { dark: editorInfoForeground, light: editorInfoForeground, hcDark: editorInfoForeground, hcLight: editorInfoForeground });
        this.registerColor('charts.yellow', { dark: editorWarningForeground, light: editorWarningForeground, hcDark: editorWarningForeground, hcLight: editorWarningForeground });
        this.registerColor('charts.orange', { dark: minimapFindMatch, light: minimapFindMatch, hcDark: minimapFindMatch, hcLight: minimapFindMatch });
        this.registerColor('charts.green', { dark: '#89D185', light: '#388A34', hcDark: '#89D185', hcLight: '#374e06' });
        this.registerColor('charts.purple', { dark: '#B180D7', light: '#652D90', hcDark: '#B180D7', hcLight: '#652D90' });

        /**
         * Tab Background
         */
        const TAB_ACTIVE_BACKGROUND = this.registerColor('tab.activeBackground', { dark: editorBackground, light: editorBackground, hcDark: editorBackground, hcLight: editorBackground });
        this.registerColor('tab.unfocusedActiveBackground', { dark: TAB_ACTIVE_BACKGROUND, light: TAB_ACTIVE_BACKGROUND, hcDark: TAB_ACTIVE_BACKGROUND, hcLight: TAB_ACTIVE_BACKGROUND });
        const TAB_INACTIVE_BACKGROUND = this.registerColor('tab.inactiveBackground', { dark: '#2D2D2D', light: '#ECECEC', hcDark: null, hcLight: null });
        this.registerColor('tab.unfocusedInactiveBackground', { dark: TAB_INACTIVE_BACKGROUND, light: TAB_INACTIVE_BACKGROUND, hcDark: TAB_INACTIVE_BACKGROUND, hcLight: TAB_INACTIVE_BACKGROUND });

        /**
         * Tab Foreground
         */
        const TAB_ACTIVE_FOREGROUND = this.registerColor('tab.activeForeground', { dark: Color.white, light: '#333333', hcDark: Color.white, hcLight: '#292929' });
        const TAB_INACTIVE_FOREGROUND = this.registerColor('tab.inactiveForeground', { dark: transparent(TAB_ACTIVE_FOREGROUND, 0.5), light: transparent(TAB_ACTIVE_FOREGROUND, 0.7), hcDark: Color.white, hcLight: '#292929' });
        this.registerColor('tab.unfocusedActiveForeground', { dark: transparent(TAB_ACTIVE_FOREGROUND, 0.5), light: transparent(TAB_ACTIVE_FOREGROUND, 0.7), hcDark: Color.white, hcLight: '#292929' });
        this.registerColor('tab.unfocusedInactiveForeground', { dark: transparent(TAB_INACTIVE_FOREGROUND, 0.5), light: transparent(TAB_INACTIVE_FOREGROUND, 0.5), hcDark: Color.white, hcLight: '#292929' });

        /**
         * Tab Hover Foreground/Background
         */
        const TAB_HOVER_BACKGROUND = this.registerColor('tab.hoverBackground', { dark: null, light: null, hcDark: null, hcLight: null });
        this.registerColor('tab.unfocusedHoverBackground', { dark: transparent(TAB_HOVER_BACKGROUND, 0.5), light: transparent(TAB_HOVER_BACKGROUND, 0.7), hcDark: null, hcLight: null });
        const TAB_HOVER_FOREGROUND = this.registerColor('tab.hoverForeground', { dark: null, light: null, hcDark: null, hcLight: null });
        this.registerColor('tab.unfocusedHoverForeground', { dark: transparent(TAB_HOVER_FOREGROUND, 0.5), light: transparent(TAB_HOVER_FOREGROUND, 0.5), hcDark: null, hcLight: null });

        /**
         * Tab Borders
         */
        const TAB_BORDER = this.registerColor('tab.border', { dark: '#252526', light: '#F3F3F3', hcDark: contrastBorder, hcLight: contrastBorder });
        const TAB_LAST_PINNED_BORDER = this.registerColor('tab.lastPinnedBorder', { dark: treeIndentGuidesStroke, light: treeIndentGuidesStroke, hcDark: contrastBorder, hcLight: contrastBorder });
        const TAB_ACTIVE_BORDER = this.registerColor('tab.activeBorder', { dark: null, light: null, hcDark: null, hcLight: null });
        const TAB_UNFOCUSED_ACTIVE_BORDER = this.registerColor('tab.unfocusedActiveBorder', { dark: transparent(TAB_ACTIVE_BORDER, 0.5), light: transparent(TAB_ACTIVE_BORDER, 0.7), hcDark: null, hcLight: null });
        const TAB_ACTIVE_BORDER_TOP = this.registerColor('tab.activeBorderTop', { dark: null, light: null, hcDark: null, hcLight: '#B5200D' });
        const TAB_UNFOCUSED_ACTIVE_BORDER_TOP = this.registerColor('tab.unfocusedActiveBorderTop', { dark: transparent(TAB_ACTIVE_BORDER_TOP, 0.5), light: transparent(TAB_ACTIVE_BORDER_TOP, 0.7), hcDark: null, hcLight: '#B5200D' });
        const TAB_HOVER_BORDER = this.registerColor('tab.hoverBorder', { dark: null, light: null, hcDark: null, hcLight: null });
        const TAB_UNFOCUSED_HOVER_BORDER = this.registerColor('tab.unfocusedHoverBorder', { dark: transparent(TAB_HOVER_BORDER, 0.5), light: transparent(TAB_HOVER_BORDER, 0.7), hcDark: null, hcLight: contrastBorder });

        /**
         * Tab Modified Border
         */
        const TAB_ACTIVE_MODIFIED_BORDER = this.registerColor('tab.activeModifiedBorder', { dark: '#3399CC', light: '#33AAEE', hcDark: null, hcLight: contrastBorder });
        const TAB_INACTIVE_MODIFIED_BORDER = this.registerColor('tab.inactiveModifiedBorder', { dark: transparent(TAB_ACTIVE_MODIFIED_BORDER, 0.5), light: transparent(TAB_ACTIVE_MODIFIED_BORDER, 0.5), hcDark: Color.white, hcLight: contrastBorder });
        const TAB_UNFOCUSED_ACTIVE_MODIFIED_BORDER = this.registerColor('tab.unfocusedActiveModifiedBorder', { dark: transparent(TAB_ACTIVE_MODIFIED_BORDER, 0.5), light: transparent(TAB_ACTIVE_MODIFIED_BORDER, 0.7), hcDark: Color.white, hcLight: contrastBorder });
        const TAB_UNFOCUSED_INACTIVE_MODIFIED_BORDER = this.registerColor('tab.unfocusedInactiveModifiedBorder', { dark: transparent(TAB_INACTIVE_MODIFIED_BORDER, 0.5), light: transparent(TAB_INACTIVE_MODIFIED_BORDER, 0.5), hcDark: Color.white, hcLight: contrastBorder });

        /**
         * Editors
         */
        const EDITOR_PANE_BACKGROUND = this.registerColor('editorPane.background', { dark: editorBackground, light: editorBackground, hcDark: editorBackground, hcLight: editorBackground });
        const EDITOR_GROUP_EMPTY_BACKGROUND = this.registerColor('editorGroup.emptyBackground', { dark: null, light: null, hcDark: null, hcLight: null });
        const EDITOR_GROUP_FOCUSED_EMPTY_BORDER = this.registerColor('editorGroup.focusedEmptyBorder', { dark: null, light: null, hcDark: focusBorder, hcLight: focusBorder });
        const EDITOR_GROUP_HEADER_TABS_BACKGROUND = this.registerColor('editorGroupHeader.tabsBackground', { dark: '#252526', light: '#F3F3F3', hcDark: null, hcLight: null });
        const EDITOR_GROUP_HEADER_TABS_BORDER = this.registerColor('editorGroupHeader.tabsBorder', { dark: null, light: null, hcDark: null, hcLight: null });
        const EDITOR_GROUP_HEADER_NO_TABS_BACKGROUND = this.registerColor('editorGroupHeader.noTabsBackground', { dark: editorBackground, light: editorBackground, hcDark: editorBackground, hcLight: editorBackground });
        const EDITOR_GROUP_HEADER_BORDER = this.registerColor('editorGroupHeader.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder });
        const EDITOR_GROUP_BORDER = this.registerColor('editorGroup.border', { dark: '#444444', light: '#E7E7E7', hcDark: contrastBorder, hcLight: contrastBorder });
        const EDITOR_DRAG_AND_DROP_BACKGROUND = this.registerColor('editorGroup.dropBackground', { dark: Color.fromHex('#53595D').transparent(0.5), light: Color.fromHex('#2677CB').transparent(0.18), hcDark: null, hcLight: Color.fromHex('#0F4A85').transparent(0.5) });
        const EDITOR_DROP_INTO_PROMPT_FOREGROUND = this.registerColor('editorGroup.dropIntoPromptForeground', { dark: editorWidgetForeground, light: editorWidgetForeground, hcDark: editorWidgetForeground, hcLight: editorWidgetForeground });
        const EDITOR_DROP_INTO_PROMPT_BACKGROUND = this.registerColor('editorGroup.dropIntoPromptBackground', { dark: editorWidgetBackground, light: editorWidgetBackground, hcDark: editorWidgetBackground, hcLight: editorWidgetBackground });
        const EDITOR_DROP_INTO_PROMPT_BORDER = this.registerColor('editorGroup.dropIntoPromptBorder', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder });
        const SIDE_BY_SIDE_EDITOR_HORIZONTAL_BORDER = this.registerColor('sideBySideEditor.horizontalBorder', { dark: EDITOR_GROUP_BORDER, light: EDITOR_GROUP_BORDER, hcDark: EDITOR_GROUP_BORDER, hcLight: EDITOR_GROUP_BORDER });
        const SIDE_BY_SIDE_EDITOR_VERTICAL_BORDER = this.registerColor('sideBySideEditor.verticalBorder', { dark: EDITOR_GROUP_BORDER, light: EDITOR_GROUP_BORDER, hcDark: EDITOR_GROUP_BORDER, hcLight: EDITOR_GROUP_BORDER });

        /**
         * Panels
         */
        const PANEL_BACKGROUND = this.registerColor('panel.background', { dark: editorBackground, light: editorBackground, hcDark: editorBackground, hcLight: editorBackground });
        const PANEL_BORDER = this.registerColor('panel.border', { dark: Color.fromHex('#808080').transparent(0.35), light: Color.fromHex('#808080').transparent(0.35), hcDark: contrastBorder, hcLight: contrastBorder });
        const PANEL_ACTIVE_TITLE_FOREGROUND = this.registerColor('panelTitle.activeForeground', { dark: '#E7E7E7', light: '#424242', hcDark: Color.white, hcLight: editorForeground });
        const PANEL_INACTIVE_TITLE_FOREGROUND = this.registerColor('panelTitle.inactiveForeground', { dark: transparent(PANEL_ACTIVE_TITLE_FOREGROUND, 0.6), light: transparent(PANEL_ACTIVE_TITLE_FOREGROUND, 0.75), hcDark: Color.white, hcLight: editorForeground });
        const PANEL_ACTIVE_TITLE_BORDER = this.registerColor('panelTitle.activeBorder', { dark: PANEL_ACTIVE_TITLE_FOREGROUND, light: PANEL_ACTIVE_TITLE_FOREGROUND, hcDark: contrastBorder, hcLight: '#B5200D' });
        const PANEL_INPUT_BORDER = this.registerColor('panelInput.border', { dark: inputBorder, light: Color.fromHex('#ddd'), hcDark: inputBorder, hcLight: inputBorder });
        const PANEL_DRAG_AND_DROP_BORDER = this.registerColor('panel.dropBorder', { dark: PANEL_ACTIVE_TITLE_FOREGROUND, light: PANEL_ACTIVE_TITLE_FOREGROUND, hcDark: PANEL_ACTIVE_TITLE_FOREGROUND, hcLight: PANEL_ACTIVE_TITLE_FOREGROUND });
        const PANEL_SECTION_DRAG_AND_DROP_BACKGROUND = this.registerColor('panelSection.dropBackground', { dark: EDITOR_DRAG_AND_DROP_BACKGROUND, light: EDITOR_DRAG_AND_DROP_BACKGROUND, hcDark: EDITOR_DRAG_AND_DROP_BACKGROUND, hcLight: EDITOR_DRAG_AND_DROP_BACKGROUND });
        const PANEL_SECTION_HEADER_BACKGROUND = this.registerColor('panelSectionHeader.background', { dark: Color.fromHex('#808080').transparent(0.2), light: Color.fromHex('#808080').transparent(0.2), hcDark: null, hcLight: null });
        const PANEL_SECTION_HEADER_FOREGROUND = this.registerColor('panelSectionHeader.foreground', { dark: null, light: null, hcDark: null, hcLight: null });
        const PANEL_SECTION_HEADER_BORDER = this.registerColor('panelSectionHeader.border', { dark: contrastBorder, light: contrastBorder, hcDark: contrastBorder, hcLight: contrastBorder });
        const PANEL_SECTION_BORDER = this.registerColor('panelSection.border', { dark: PANEL_BORDER, light: PANEL_BORDER, hcDark: PANEL_BORDER, hcLight: PANEL_BORDER });

        /**
         * Status
         */
        const STATUS_BAR_FOREGROUND = this.registerColor('statusBar.foreground', { dark: '#FFFFFF', light: '#FFFFFF', hcDark: '#FFFFFF', hcLight: editorForeground });
        const STATUS_BAR_NO_FOLDER_FOREGROUND = this.registerColor('statusBar.noFolderForeground', { dark: STATUS_BAR_FOREGROUND, light: STATUS_BAR_FOREGROUND, hcDark: STATUS_BAR_FOREGROUND, hcLight: STATUS_BAR_FOREGROUND });
        const STATUS_BAR_BACKGROUND = this.registerColor('statusBar.background', { dark: '#007ACC', light: '#007ACC', hcDark: null, hcLight: null });
        const STATUS_BAR_NO_FOLDER_BACKGROUND = this.registerColor('statusBar.noFolderBackground', { dark: '#68217A', light: '#68217A', hcDark: null, hcLight: null });
        const STATUS_BAR_BORDER = this.registerColor('statusBar.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder });
        const STATUS_BAR_FOCUS_BORDER = this.registerColor('statusBar.focusBorder', { dark: STATUS_BAR_FOREGROUND, light: STATUS_BAR_FOREGROUND, hcDark: null, hcLight: STATUS_BAR_FOREGROUND });
        const STATUS_BAR_NO_FOLDER_BORDER = this.registerColor('statusBar.noFolderBorder', { dark: STATUS_BAR_BORDER, light: STATUS_BAR_BORDER, hcDark: STATUS_BAR_BORDER, hcLight: STATUS_BAR_BORDER });
        const STATUS_BAR_ITEM_ACTIVE_BACKGROUND = this.registerColor('statusBarItem.activeBackground', { dark: Color.white.transparent(0.18), light: Color.white.transparent(0.18), hcDark: Color.white.transparent(0.18), hcLight: Color.black.transparent(0.18) });
        const STATUS_BAR_ITEM_FOCUS_BORDER = this.registerColor('statusBarItem.focusBorder', { dark: STATUS_BAR_FOREGROUND, light: STATUS_BAR_FOREGROUND, hcDark: null, hcLight: activeContrastBorder });
        const STATUS_BAR_ITEM_HOVER_BACKGROUND = this.registerColor('statusBarItem.hoverBackground', { dark: Color.white.transparent(0.12), light: Color.white.transparent(0.12), hcDark: Color.white.transparent(0.12), hcLight: Color.black.transparent(0.12) });
        const STATUS_BAR_ITEM_HOVER_FOREGROUND = this.registerColor('statusBarItem.hoverForeground', { dark: STATUS_BAR_FOREGROUND, light: STATUS_BAR_FOREGROUND, hcDark: STATUS_BAR_FOREGROUND, hcLight: STATUS_BAR_FOREGROUND });
        const STATUS_BAR_ITEM_COMPACT_HOVER_BACKGROUND = this.registerColor('statusBarItem.compactHoverBackground', { dark: Color.white.transparent(0.2), light: Color.white.transparent(0.2), hcDark: Color.white.transparent(0.2), hcLight: Color.black.transparent(0.2) });
        const STATUS_BAR_PROMINENT_ITEM_FOREGROUND = this.registerColor('statusBarItem.prominentForeground', { dark: STATUS_BAR_FOREGROUND, light: STATUS_BAR_FOREGROUND, hcDark: STATUS_BAR_FOREGROUND, hcLight: STATUS_BAR_FOREGROUND });
        const STATUS_BAR_PROMINENT_ITEM_BACKGROUND = this.registerColor('statusBarItem.prominentBackground', { dark: Color.black.transparent(0.5), light: Color.black.transparent(0.5), hcDark: Color.black.transparent(0.5), hcLight: Color.black.transparent(0.5) });
        const STATUS_BAR_PROMINENT_ITEM_HOVER_FOREGROUND = this.registerColor('statusBarItem.prominentHoverForeground', { dark: STATUS_BAR_ITEM_HOVER_FOREGROUND, light: STATUS_BAR_ITEM_HOVER_FOREGROUND, hcDark: STATUS_BAR_ITEM_HOVER_FOREGROUND, hcLight: STATUS_BAR_ITEM_HOVER_FOREGROUND });
        const STATUS_BAR_PROMINENT_ITEM_HOVER_BACKGROUND = this.registerColor('statusBarItem.prominentHoverBackground', { dark: Color.black.transparent(0.3), light: Color.black.transparent(0.3), hcDark: Color.black.transparent(0.3), hcLight: null });
        const STATUS_BAR_ERROR_ITEM_BACKGROUND = this.registerColor('statusBarItem.errorBackground', { dark: darken(errorForeground, 0.4), light: darken(errorForeground, 0.4), hcDark: null, hcLight: '#B5200D' });
        const STATUS_BAR_ERROR_ITEM_FOREGROUND = this.registerColor('statusBarItem.errorForeground', { dark: Color.white, light: Color.white, hcDark: Color.white, hcLight: Color.white });
        const STATUS_BAR_ERROR_ITEM_HOVER_FOREGROUND = this.registerColor('statusBarItem.errorHoverForeground', { dark: STATUS_BAR_ITEM_HOVER_FOREGROUND, light: STATUS_BAR_ITEM_HOVER_FOREGROUND, hcDark: STATUS_BAR_ITEM_HOVER_FOREGROUND, hcLight: STATUS_BAR_ITEM_HOVER_FOREGROUND });
        const STATUS_BAR_ERROR_ITEM_HOVER_BACKGROUND = this.registerColor('statusBarItem.errorHoverBackground', { dark: STATUS_BAR_ITEM_HOVER_BACKGROUND, light: STATUS_BAR_ITEM_HOVER_BACKGROUND, hcDark: STATUS_BAR_ITEM_HOVER_BACKGROUND, hcLight: STATUS_BAR_ITEM_HOVER_BACKGROUND });
        const STATUS_BAR_WARNING_ITEM_BACKGROUND = this.registerColor('statusBarItem.warningBackground', { dark: darken(editorWarningForeground, 0.4), light: darken(editorWarningForeground, 0.4), hcDark: null, hcLight: '#895503' });
        const STATUS_BAR_WARNING_ITEM_FOREGROUND = this.registerColor('statusBarItem.warningForeground', { dark: Color.white, light: Color.white, hcDark: Color.white, hcLight: Color.white });
        const STATUS_BAR_WARNING_ITEM_HOVER_FOREGROUND = this.registerColor('statusBarItem.warningHoverForeground', { dark: STATUS_BAR_ITEM_HOVER_FOREGROUND, light: STATUS_BAR_ITEM_HOVER_FOREGROUND, hcDark: STATUS_BAR_ITEM_HOVER_FOREGROUND, hcLight: STATUS_BAR_ITEM_HOVER_FOREGROUND });
        const STATUS_BAR_WARNING_ITEM_HOVER_BACKGROUND = this.registerColor('statusBarItem.warningHoverBackground', { dark: STATUS_BAR_ITEM_HOVER_BACKGROUND, light: STATUS_BAR_ITEM_HOVER_BACKGROUND, hcDark: STATUS_BAR_ITEM_HOVER_BACKGROUND, hcLight: STATUS_BAR_ITEM_HOVER_BACKGROUND });

        /**
         * Activity Bar
         */
        const ACTIVITY_BAR_BACKGROUND = this.registerColor('activityBar.background', { dark: '#333333', light: '#2C2C2C', hcDark: '#000000', hcLight: '#FFFFFF' });
        const ACTIVITY_BAR_FOREGROUND = this.registerColor('activityBar.foreground', { dark: Color.white, light: Color.white, hcDark: Color.white, hcLight: editorForeground });
        const ACTIVITY_BAR_INACTIVE_FOREGROUND = this.registerColor('activityBar.inactiveForeground', { dark: transparent(ACTIVITY_BAR_FOREGROUND, 0.4), light: transparent(ACTIVITY_BAR_FOREGROUND, 0.4), hcDark: Color.white, hcLight: editorForeground });
        const ACTIVITY_BAR_BORDER = this.registerColor('activityBar.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder });
        const ACTIVITY_BAR_ACTIVE_BORDER = this.registerColor('activityBar.activeBorder', { dark: ACTIVITY_BAR_FOREGROUND, light: ACTIVITY_BAR_FOREGROUND, hcDark: null, hcLight: contrastBorder });
        const ACTIVITY_BAR_ACTIVE_FOCUS_BORDER = this.registerColor('activityBar.activeFocusBorder', { dark: null, light: null, hcDark: null, hcLight: '#B5200D' });
        const ACTIVITY_BAR_ACTIVE_BACKGROUND = this.registerColor('activityBar.activeBackground', { dark: null, light: null, hcDark: null, hcLight: null });
        const ACTIVITY_BAR_DRAG_AND_DROP_BORDER = this.registerColor('activityBar.dropBorder', { dark: ACTIVITY_BAR_FOREGROUND, light: ACTIVITY_BAR_FOREGROUND, hcDark: null, hcLight: null });
        const ACTIVITY_BAR_BADGE_BACKGROUND = this.registerColor('activityBarBadge.background', { dark: '#007ACC', light: '#007ACC', hcDark: '#000000', hcLight: '#0F4A85' });
        const ACTIVITY_BAR_BADGE_FOREGROUND = this.registerColor('activityBarBadge.foreground', { dark: Color.white, light: Color.white, hcDark: Color.white, hcLight: Color.white });

        /**
         * Side Bar
         */
        const SIDE_BAR_BACKGROUND = this.registerColor('sideBar.background', { dark: '#252526', light: '#F3F3F3', hcDark: '#000000', hcLight: '#FFFFFF' });
        const SIDE_BAR_FOREGROUND = this.registerColor('sideBar.foreground', { dark: null, light: null, hcDark: null, hcLight: null });
        const SIDE_BAR_BORDER = this.registerColor('sideBar.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder });
        const SIDE_BAR_TITLE_FOREGROUND = this.registerColor('sideBarTitle.foreground', { dark: SIDE_BAR_FOREGROUND, light: SIDE_BAR_FOREGROUND, hcDark: SIDE_BAR_FOREGROUND, hcLight: SIDE_BAR_FOREGROUND });
        const SIDE_BAR_DRAG_AND_DROP_BACKGROUND = this.registerColor('sideBar.dropBackground', { dark: EDITOR_DRAG_AND_DROP_BACKGROUND, light: EDITOR_DRAG_AND_DROP_BACKGROUND, hcDark: EDITOR_DRAG_AND_DROP_BACKGROUND, hcLight: EDITOR_DRAG_AND_DROP_BACKGROUND });
        const SIDE_BAR_SECTION_HEADER_BACKGROUND = this.registerColor('sideBarSectionHeader.background', { dark: Color.fromHex('#808080').transparent(0.2), light: Color.fromHex('#808080').transparent(0.2), hcDark: null, hcLight: null });
        const SIDE_BAR_SECTION_HEADER_FOREGROUND = this.registerColor('sideBarSectionHeader.foreground', { dark: SIDE_BAR_FOREGROUND, light: SIDE_BAR_FOREGROUND, hcDark: SIDE_BAR_FOREGROUND, hcLight: SIDE_BAR_FOREGROUND });
        const SIDE_BAR_SECTION_HEADER_BORDER = this.registerColor('sideBarSectionHeader.border', { dark: contrastBorder, light: contrastBorder, hcDark: contrastBorder, hcLight: contrastBorder });

        /**
         * Title Bar
         */
        const TITLE_BAR_ACTIVE_FOREGROUND = this.registerColor('titleBar.activeForeground', { dark: '#CCCCCC', light: '#333333', hcDark: '#FFFFFF', hcLight: '#292929' });
        const TITLE_BAR_INACTIVE_FOREGROUND = this.registerColor('titleBar.inactiveForeground', { dark: transparent(TITLE_BAR_ACTIVE_FOREGROUND, 0.6), light: transparent(TITLE_BAR_ACTIVE_FOREGROUND, 0.6), hcDark: null, hcLight: '#292929' });
        const TITLE_BAR_ACTIVE_BACKGROUND = this.registerColor('titleBar.activeBackground', { dark: '#3C3C3C', light: '#DDDDDD', hcDark: '#000000', hcLight: '#FFFFFF' });
        const TITLE_BAR_INACTIVE_BACKGROUND = this.registerColor('titleBar.inactiveBackground', { dark: transparent(TITLE_BAR_ACTIVE_BACKGROUND, 0.6), light: transparent(TITLE_BAR_ACTIVE_BACKGROUND, 0.6), hcDark: null, hcLight: null });
        const TITLE_BAR_BORDER = this.registerColor('titleBar.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder });

        /**
         * Menubar
         */
        const MENUBAR_SELECTION_FOREGROUND = this.registerColor('menubar.selectionForeground', { dark: TITLE_BAR_ACTIVE_FOREGROUND, light: TITLE_BAR_ACTIVE_FOREGROUND, hcDark: TITLE_BAR_ACTIVE_FOREGROUND, hcLight: TITLE_BAR_ACTIVE_FOREGROUND });
        const MENUBAR_SELECTION_BACKGROUND = this.registerColor('menubar.selectionBackground', { dark: toolbarHoverBackground, light: toolbarHoverBackground, hcDark: null, hcLight: null });
        const MENUBAR_SELECTION_BORDER = this.registerColor('menubar.selectionBorder', { dark: null, light: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder });

        /**
         * Notifications
         */
        const NOTIFICATIONS_CENTER_BORDER = this.registerColor('notificationCenter.border', { dark: widgetBorder, light: widgetBorder, hcDark: contrastBorder, hcLight: contrastBorder });
        const NOTIFICATIONS_TOAST_BORDER = this.registerColor('notificationToast.border', { dark: widgetBorder, light: widgetBorder, hcDark: contrastBorder, hcLight: contrastBorder });
        const NOTIFICATIONS_FOREGROUND = this.registerColor('notifications.foreground', { dark: editorWidgetForeground, light: editorWidgetForeground, hcDark: editorWidgetForeground, hcLight: editorWidgetForeground });
        const NOTIFICATIONS_BACKGROUND = this.registerColor('notifications.background', { dark: editorWidgetBackground, light: editorWidgetBackground, hcDark: editorWidgetBackground, hcLight: editorWidgetBackground });
        const NOTIFICATIONS_LINKS = this.registerColor('notificationLink.foreground', { dark: textLinkForeground, light: textLinkForeground, hcDark: textLinkForeground, hcLight: textLinkForeground });
        const NOTIFICATIONS_CENTER_HEADER_FOREGROUND = this.registerColor('notificationCenterHeader.foreground', { dark: null, light: null, hcDark: null, hcLight: null });
        const NOTIFICATIONS_CENTER_HEADER_BACKGROUND = this.registerColor('notificationCenterHeader.background', { dark: lighten(NOTIFICATIONS_BACKGROUND, 0.3), light: darken(NOTIFICATIONS_BACKGROUND, 0.05), hcDark: NOTIFICATIONS_BACKGROUND, hcLight: NOTIFICATIONS_BACKGROUND });
        const NOTIFICATIONS_BORDER = this.registerColor('notifications.border', { dark: NOTIFICATIONS_CENTER_HEADER_BACKGROUND, light: NOTIFICATIONS_CENTER_HEADER_BACKGROUND, hcDark: NOTIFICATIONS_CENTER_HEADER_BACKGROUND, hcLight: NOTIFICATIONS_CENTER_HEADER_BACKGROUND });
        const NOTIFICATIONS_ERROR_ICON_FOREGROUND = this.registerColor('notificationsErrorIcon.foreground', { dark: editorErrorForeground, light: editorErrorForeground, hcDark: editorErrorForeground, hcLight: editorErrorForeground });
        const NOTIFICATIONS_WARNING_ICON_FOREGROUND = this.registerColor('notificationsWarningIcon.foreground', { dark: editorWarningForeground, light: editorWarningForeground, hcDark: editorWarningForeground, hcLight: editorWarningForeground });
        const NOTIFICATIONS_INFO_ICON_FOREGROUND = this.registerColor('notificationsInfoIcon.foreground', { dark: editorInfoForeground, light: editorInfoForeground, hcDark: editorInfoForeground, hcLight: editorInfoForeground });
        const WINDOW_ACTIVE_BORDER = this.registerColor('window.activeBorder', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder });
        const WINDOW_INACTIVE_BORDER = this.registerColor('window.inactiveBorder', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder });
    }

    private isTransformType(color: any): color is ColorTransform {
        return 'op' in color;
    }

    private getHexColor(
        hex: ColorDefined,
        uiTheme: keyof ColorMap
    ): Exclude<ColorDefined, ColorTransform | string> {
        if (hex === null) return hex;
        if (typeof hex === 'string') {
            if (hex.startsWith('#')) return Color.fromHex(hex);
            if (!this.colors.has(hex)) return null;
            return this.getHexColor(this.colors.get(hex)?.[uiTheme] || null, uiTheme);
        }
        if (this.isTransformType(hex)) {
            switch (hex.op) {
                case ColorTransformType.Lighten: {
                    const source = this.getHexColor(hex.value, uiTheme);
                    if (!source) return source;
                    return source.lighten(hex.factor);
                }
                case ColorTransformType.Darken: {
                    const source = this.getHexColor(hex.value, uiTheme);
                    if (!source) return source;
                    return source.darken(hex.factor);
                }
                case ColorTransformType.Transparent: {
                    const source = this.getHexColor(hex.value, uiTheme);
                    if (!source) return source;
                    return source.transparent(hex.factor);
                }
                case ColorTransformType.IfDefinedThenElse: {
                    const ifArg = this.getHexColor(hex.if, uiTheme);
                    const thenArg = this.getHexColor(hex.then, uiTheme);
                    const elseArg = this.getHexColor(hex.else, uiTheme);
                    return ifArg ? thenArg : elseArg;
                }
                case ColorTransformType.OneOf: {
                    return hex.values.reduce<ReturnType<typeof this.getHexColor>>((acc, cur) => {
                        if (acc !== null) return acc;
                        return this.getHexColor(cur, uiTheme);
                    }, null);
                }
                case ColorTransformType.LessProminent: {
                    const source = this.getHexColor(hex.value, uiTheme);
                    if (!source) return null;
                    const backgroundColor = this.getHexColor(hex.background, uiTheme);
                    if (!backgroundColor) {
                        return source.transparent(hex.factor * hex.transparency);
                    }
                    return source.isDarkerThan(backgroundColor)
                        ? Color.getLighterColor(source, backgroundColor, hex.factor).transparent(
                              hex.transparency
                          )
                        : Color.getDarkerColor(source, backgroundColor, hex.factor).transparent(
                              hex.transparency
                          );
                }
                default:
                    return null;
            }
        }

        return hex;
    }

    public getDefaultColor(uiTheme: keyof ColorMap) {
        const tmp: Record<string, string | null> = {};

        this.colors.forEach((value, key) => {
            const color = value[uiTheme];
            const hex = this.getHexColor(color, uiTheme);
            // Have to translate color to hex, since call editor.setTheme() will call Color.Format.CSS.parseHex to parse color, rgba color will be parsed failed
            tmp[key] = hex ? Color.Format.CSS.formatHexA(hex) : hex;
        });
        return tmp;
    }
}
