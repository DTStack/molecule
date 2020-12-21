/**
 * Builtin colors
 */
import { IColorTheme } from 'mo/model/colorTheme';
import { Color } from 'monaco-editor/esm/vs/base/common/color';


// Workbench not customizable
export const WorkbenchColors = {
    workbenchBackground: 'workbenchBackground'
}

export const ContrastColors = {
    contrastActiveBorder:  'contrastActiveBorder',
    contrastBorder:  'contrastBorder'
}

/**
 * The basic colors definition, for overall application
 */
export const BaseColors = {
    focusBorder:  'focusBorder',
    foreground : 'foreground',
    widgetShadow:  'widget.shadow',
    selectionBackground:  'selection.background',
    descriptionForeground:  'descriptionForeground',
    errorForeground:  'errorForeground',
    iconForeground:  'icon.foreground',
    sashHoverBorder:  'sash.hoverBorder',
}

export const WindowColors = {
    windowActiveBorder:  'window.activeBorder',
    windowInactiveBorder:  'window.inactiveBorder',
}

export const TextColors = {
    textBlockQuoteBackground:  'textBlockQuote.background',
    textBlockQuoteBorder:  'textBlockQuote.border',
    textCodeBlockBackground:  'textCodeBlock.background',
    textLinkActiveForeground:  'textLink.activeForeground',
    textLinkForeground:  'textLink.foreground',
    textPreformatForeground:  'textPreformat.foreground',
    textSeparatorForeground:  'textSeparator.foreground',
}

export const ButtonControl = {
    buttonBackground:  'button.background',
    buttonForeground:  'button.foreground',
    buttonHoverBackground:  'button.hoverBackground',
    buttonSecondaryForeground:  'button.secondaryForeground',
    buttonSecondaryBackground:  'button.secondaryBackground',
    buttonSecondaryHoverBackground:  'button.secondaryHoverBackground',
    checkboxBackground:  'checkbox.background',
    checkboxForeground:  'checkbox.foreground',
    checkboxBorder:  'checkbox.border',
}

export const DropdownControl = {
    dropdownBackground:  'dropdown.background',
    dropdownListBackground:  'dropdown.listBackground',
    dropdownBorder:  'dropdown.border',
    dropdownForeground:  'dropdown.foreground',
}

export const InputControl = {
    inputBackground:  'input.background',
    inputBorder:  'input.border',
    inputForeground:  'input.foreground',
    inputPlaceholderForeground:  'input.placeholderForeground',
    inputOptionActiveBackground:  'inputOption.activeBackground',
    inputOptionActiveBorder:  'inputOption.activeBorder',
    inputOptionActiveForeground:  'inputOption.activeForeground',
    inputValidationErrorBackground:  'inputValidation.errorBackground',
    inputValidationErrorForeground:  'inputValidation.errorForeground',
    inputValidationErrorBorder:  'inputValidation.errorBorder',
    inputValidationInfoBackground:  'inputValidation.infoBackground',
    inputValidationInfoForeground:  'inputValidation.infoForeground',
    inputValidationInfoBorder:  'inputValidation.infoBorder',
    inputValidationWarningBackground:  'inputValidation.warningBackground',
    inputValidationWarningForeground:  'inputValidation.warningForeground',
    inputValidationWarningBorder:  'inputValidation.warningBorder',
}

export const ScrollbarControl = {
    scrollbarShadow:  'scrollbar.shadow',
    scrollbarSliderActiveBackground:  'scrollbarSlider.activeBackground',
    scrollbarSliderBackground:  'scrollbarSlider.background',
    scrollbarSliderHoverBackground:  'scrollbarSlider.hoverBackground',
}

export const BadgeColors = {
    badgeForeground:  'badge.foreground',
    badgeBackground:  'badge.background',
}

export const ProgressBar = {
    progressBarBackground:  'progressBar.background',
}

export const ListAndTreeColors = {
    listActiveSelectionBackground:  'list.activeSelectionBackground',
    listActiveSelectionForeground:  'list.activeSelectionForeground',
    listDropBackground:  'list.dropBackground',
    listFocusBackground:  'list.focusBackground',
    listFocusForeground:  'list.focusForeground',
    listHighlightForeground:  'list.highlightForeground',
    listHoverBackground:  'list.hoverBackground',
    listHoverForeground:  'list.hoverForeground',
    listInactiveSelectionBackground:  'list.inactiveSelectionBackground',
    listInactiveFocusBackground:  'list.inactiveFocusBackground',
    listInvalidItemForeground:  'list.invalidItemForeground',
    listErrorForeground:  'list.errorForeground',
    listWarningForeground:  'list.warningForeground',
    listFilterWidgetBackground:  'listFilterWidget.background',
    listFilterWidgetOutline:  'listFilterWidget.outline',
    listFilterWidgetNoMatchesOutline:  'listFilterWidget.noMatchesOutline',
    listFilterMatchBackground:  'list.filterMatchBackground',
    listFilterMatchBorder:  'list.filterMatchBorder',
    treeIndentGuidesStroke:  'tree.indentGuidesStroke',
    listDeemphasizedForeground:  'list.deemphasizedForeground',
}

export const ActivityBarColors = {
    activityBarBackground:  'activityBar.background',
    activityBarDropBorder:  'activityBar.dropBorder',
    activityBarForeground:  'activityBar.foreground',
    activityBarInactiveForeground:  'activityBar.inactiveForeground',
    activityBarBorder:  'activityBar.border',
    activityBarBadgeBackground:  'activityBarBadge.background',
    activityBarBadgeForeground:  'activityBarBadge.foreground',
    activityBarActiveBorder:  'activityBar.activeBorder',
    activityBarActiveBackground:  'activityBar.activeBackground',
    activityBarActiveFocusBorder:  'activityBar.activeFocusBorder',
}

export const SideBarColors = {
    sideBarBackground:  'sideBar.background',
    sideBarForeground:  'sideBar.foreground',
    sideBarBorder:  'sideBar.border',
    sideBarDropBackground:  'sideBar.dropBackground',
    sideBarTitleForeground:  'sideBarTitle.foreground',
    sideBarSectionHeaderBackground:  'sideBarSectionHeader.background',
    sideBarSectionHeaderForeground:  'sideBarSectionHeader.foreground',
    sideBarSectionHeaderBorder:  'sideBarSectionHeader.border'
}

export const MiniMapColors = {
    minimapFindMatchHighlight:  'minimap.findMatchHighlight',
    minimapSelectionHighlight:  'minimap.selectionHighlight',
    minimapErrorHighlight:  'minimap.errorHighlight',
    minimapWarningHighlight:  'minimap.warningHighlight',
    minimapBackground:  'minimap.background',
    minimapSliderBackground:  'minimapSlider.background',
    minimapSliderHoverBackground:  'minimapSlider.hoverBackground',
    minimapSliderActiveBackground:  'minimapSlider.activeBackground',
    minimapGutterAddedBackground:  'minimapGutter.addedBackground',
    minimapGutterModifiedBackground:  'minimapGutter.modifiedBackground',
    minimapGutterDeletedBackground:  'minimapGutter.deletedBackground'
}

export const EditorGroupAndTabsColors = {
    editorGroupBorder:  'editorGroup.border',
    editorGroupDropBackground:  'editorGroup.dropBackground',
    editorGroupHeaderNoTabsBackground:  'editorGroupHeader.noTabsBackground',
    editorGroupHeaderTabsBackground:  'editorGroupHeader.tabsBackground',
    editorGroupHeaderTabsBorder:  'editorGroupHeader.tabsBorder',
    editorGroupHeaderBorder:  'editorGroupHeader.border',
    editorGroupEmptyBackground:  'editorGroup.emptyBackground',
    editorGroupFocusedEmptyBorder:  'editorGroup.focusedEmptyBorder',
    tabActiveBackground:  'tab.activeBackground',
    tabUnfocusedActiveBackground:  'tab.unfocusedActiveBackground',
    tabActiveForeground:  'tab.activeForeground',
    tabBorder:  'tab.border',
    tabActiveBorder:  'tab.activeBorder',
    tabUnfocusedActiveBorder:  'tab.unfocusedActiveBorder',
    tabActiveBorderTop:  'tab.activeBorderTop',
    tabUnfocusedActiveBorderTop:  'tab.unfocusedActiveBorderTop',
    tabLastPinnedBorder:  'tab.lastPinnedBorder',
    tabInactiveBackground:  'tab.inactiveBackground',
    tabUnfocusedInactiveBackground:  'tab.unfocusedInactiveBackground',
    tabInactiveForeground:  'tab.inactiveForeground',
    tabUnfocusedActiveForeground:  'tab.unfocusedActiveForeground',
    tabUnfocusedInactiveForeground:  'tab.unfocusedInactiveForeground',
    tabHoverBackground:  'tab.hoverBackground',
    tabUnfocusedHoverBackground:  'tab.unfocusedHoverBackground',
    tabHoverForeground:  'tab.hoverForeground',
    tabUnfocusedHoverForeground:  'tab.unfocusedHoverForeground',
    tabHoverBorder:  'tab.hoverBorder',
    tabUnfocusedHoverBorder:  'tab.unfocusedHoverBorder',
    tabActiveModifiedBorder:  'tab.activeModifiedBorder',
    tabInactiveModifiedBorder:  'tab.inactiveModifiedBorder',
    tabUnfocusedActiveModifiedBorder:  'tab.unfocusedActiveModifiedBorder',
    tabUnfocusedInactiveModifiedBorder:  'tab.unfocusedInactiveModifiedBorder',
    editorPaneBackground:  'editorPane.background',
}

export const EditorColors = {
    editorBackground:  'editor.background',
    editorForeground:  'editor.foreground',
    editorLineNumberForeground:  'editorLineNumber.foreground',
    editorLineNumberActiveForeground:  'editorLineNumber.activeForeground',
    editorCursorBackground:  'editorCursor.background',
    editorCursorForeground:  'editorCursor.foreground',
    editorSelectionBackground:  'editor.selectionBackground',
    editorSelectionForeground:  'editor.selectionForeground',
    editorInactiveSelectionBackground:  'editor.inactiveSelectionBackground',
    editorSelectionHighlightBackground:  'editor.selectionHighlightBackground',
    editorSelectionHighlightBorder:  'editor.selectionHighlightBorder',
    editorWordHighlightBackground:  'editor.wordHighlightBackground',
    editorWordHighlightBorder:  'editor.wordHighlightBorder',
    editorWordHighlightStrongBackground:  'editor.wordHighlightStrongBackground',
    editorWordHighlightStrongBorder:  'editor.wordHighlightStrongBorder',
    editorFindMatchBackground:  'editor.findMatchBackground',
    editorFindMatchHighlightBackground:  'editor.findMatchHighlightBackground',
    editorFindRangeHighlightBackground:  'editor.findRangeHighlightBackground',
    editorFindMatchBorder:  'editor.findMatchBorder',
    editorFindMatchHighlightBorder:  'editor.findMatchHighlightBorder',
    editorFindRangeHighlightBorder:  'editor.findRangeHighlightBorder',
    searchEditorFindMatchBackground:  'searchEditor.findMatchBackground',
    searchEditorFindMatchBorder:  'searchEditor.findMatchBorder',
    searchEditorTextInputBorder:  'searchEditor.textInputBorder',
    editorHoverHighlightBackground:  'editor.hoverHighlightBackground',
    editorLineHighlightBackground:  'editor.lineHighlightBackground',
    editorLineHighlightBorder:  'editor.lineHighlightBorder',
    editorLinkActiveForeground:  'editorLink.activeForeground',
    editorRangeHighlightBackground:  'editor.rangeHighlightBackground',
    editorRangeHighlightBorder:  'editor.rangeHighlightBorder',
    editorSymbolHighlightBackground:  'editor.symbolHighlightBackground',
    editorSymbolHighlightBorder:  'editor.symbolHighlightBorder',
    editorWhitespaceForeground:  'editorWhitespace.foreground',
    editorIndentGuideBackground:  'editorIndentGuide.background',
    editorIndentGuideActiveBackground:  'editorIndentGuide.activeBackground',
    editorRulerForeground:  'editorRuler.foreground',
    editorLinkedEditingBackground:  'editor.linkedEditingBackground',

    // Notice Start: Molecule not implements the below extensions
    editorCodeLensForeground:  'editorCodeLens.foreground',
    editorLightBulbForeground:  'editorLightBulb.foreground',
    editorLightBulbAutoFixForeground:  'editorLightBulbAutoFix.foreground',
    // Notice End
    editorBracketMatchBackground:  'editorBracketMatch.background',
    editorBracketMatchBorder:  'editorBracketMatch.border',
    editorFoldBackground:  'editor.foldBackground',
    editorOverviewRulerBackground:  'editorOverviewRuler.background',
    editorOverviewRulerBorder:  'editorOverviewRuler.border',
    editorOverviewRulerFindMatchForeground :  'editorOverviewRuler.findMatchForeground',
    editorOverviewRulerRangeHighlightForeground:  'editorOverviewRuler.rangeHighlightForeground',
    editorOverviewRulerSelectionHighlightForeground:  'editorOverviewRuler.selectionHighlightForeground',
    editorOverviewRulerWordHighlightForeground:  'editorOverviewRuler.wordHighlightForeground',
    editorOverviewRulerWordHighlightStrongForeground:  'editorOverviewRuler.wordHighlightStrongForeground',
    editorOverviewRulerModifiedForeground:  'editorOverviewRuler.modifiedForeground',
    editorOverviewRulerAddedForeground:  'editorOverviewRuler.addedForeground',
    editorOverviewRulerDeletedForeground:  'editorOverviewRuler.deletedForeground',
    editorOverviewRulerErrorForeground:  'editorOverviewRuler.errorForeground',
    editorOverviewRulerWarningForeground:  'editorOverviewRuler.warningForeground',
    editorOverviewRulerInfoForeground:  'editorOverviewRuler.infoForeground',
    editorOverviewRulerBracketMatchForeground:  'editorOverviewRuler.bracketMatchForeground',
    editorErrorForeground:  'editorError.foreground',
    editorErrorBackground:  'editorError.background',
    editorErrorBorder:  'editorError.border',
    editorWarningForeground:  'editorWarning.foreground',
    editorWarningBorder:  'editorWarning.border',
    editorWarningBackground:  'editorWarning.background',
    editorInfoForeground:  'editorInfo.foreground',
    editorInfoBorder:  'editorInfo.border',
    editorInfoBackground:  'editorInfo.background',
    editorHintForeground:  'editorHint.foreground',
    editorHintBorder:  'editorHint.border',
    problemsErrorIconForeground:  'problemsErrorIcon.foreground',
    problemsWarningIconForeground:  'problemsWarningIcon.foreground',
    problemsInfoIconForeground:  'problemsInfoIcon.foreground',
}

// Peek View Editor

export const PanelColors = {
    panelBackground:  'panel.background',
    panelForeground:  'panel.foreground',
    panelBorder:  'panel.border',
    panelDropBorder:  'panel.dropBorder',
    panelTitleActiveBorder:  'panelTitle.activeBorder',
    panelTitleActiveForeground:  'panelTitle.activeForeground',
    panelTitleInactiveForeground:  'panelTitle.inactiveForeground',
    panelInputBorder:  'panelInput.border',
    panelSectionBorder:  'panelSection.border',
    panelSectionDropBackground:  'panelSection.dropBackground',
    panelSectionHeaderBackground:  'panelSectionHeader.background',
    panelSectionHeaderForeground:  'panelSectionHeader.foreground',
    panelSectionHeaderBorder:  'panelSectionHeader.border',
    imagePreviewBorder:  'imagePreview.border'
}

export const StatusBarColors = {
    statusBarBackground:  'statusBar.background',
    statusBarForeground:  'statusBar.foreground',
    statusBarBorder:  'statusBar.border',
    statusBarDebuggingBackground:  'statusBar.debuggingBackground',
    statusBarDebuggingForeground:  'statusBar.debuggingForeground',
    statusBarDebuggingBorder:  'statusBar.debuggingBorder',
    statusBarNoFolderForeground:  'statusBar.noFolderForeground',
    statusBarNoFolderBackground:  'statusBar.noFolderBackground',
    statusBarNoFolderBorder:  'statusBar.noFolderBorder',
    statusBarItemActiveBackground:  'statusBarItem.activeBackground',
    statusBarItemHoverBackground:  'statusBarItem.hoverBackground',
    statusBarItemProminentForeground:  'statusBarItem.prominentForeground',
    statusBarItemProminentBackground:  'statusBarItem.prominentBackground',
    statusBarItemProminentHoverBackground:  'statusBarItem.prominentHoverBackground',
    statusBarItemRemoteBackground:  'statusBarItem.remoteBackground',
    statusBarItemRemoteForeground:  'statusBarItem.remoteForeground',
    statusBarItemErrorBackground:  'statusBarItem.errorBackground',
    statusBarItemErrorForeground:  'statusBarItem.errorForeground',
}

export const TitleBarColors = {
    titleBarActiveBackground:  'titleBar.activeBackground',
    titleBarActiveForeground:  'titleBar.activeForeground',
    titleBarInactiveBackground:  'titleBar.inactiveBackground',
    titleBarInactiveForeground:  'titleBar.inactiveForeground',
    titleBarBorder:  'titleBar.border',
}

export const MenuBarColors = {
    menubarSelectionForeground:  'menubar.selectionForeground',
    menubarSelectionBackground:  'menubar.selectionBackground',
    menubarSelectionBorder:  'menubar.selectionBorder',
    menuForeground:  'menu.foreground',
    menuBackground:  'menu.background',
    menuSelectionForeground:  'menu.selectionForeground',
    menuSelectionBackground:  'menu.selectionBackground',
    menuSelectionBorder:  'menu.selectionBorder',
    menuSeparatorBackground:  'menu.separatorBackground',
    menuBorder:  'menu.border',
}

export const NotificationColors = {
    notificationCenterBorder:  'notificationCenter.border',
    notificationCenterHeaderForeground:  'notificationCenterHeader.foreground',
    notificationCenterHeaderBackground:  'notificationCenterHeader.background',
    notificationToastBorder:  'notificationToast.border',
    notificationsForeground:  'notifications.foreground',
    notificationsBackground:  'notifications.background',
    notificationsBorder:  'notifications.border',
    notificationLinkForeground:  'notificationLink.foreground',
    notificationsErrorIconForeground:  'notificationsErrorIcon.foreground',
    notificationsWarningIconForeground:  'notificationsWarningIcon.foreground',
    notificationsInfoIconForeground :  'notificationsInfoIcon.foreground',
}

// Ignore Quick picker
// Ignore Terminal colors
// Ignore Source Control colors
// Ignore Git colors

export const WelcomePageColors = {
    welcomePageBackground:  'welcomePage.background',
    welcomePageButtonBackground:  'welcomePage.buttonBackground',
    welcomePageButtonHoverBackground:  'welcomePage.buttonHoverBackground',
    walkThroughEmbeddedEditorBackground:  'walkThrough.embeddedEditorBackground',
}

export const SettingsColors = {
    settingsHeaderForeground:  'settings.headerForeground',
    settingsModifiedItemIndicator:  'settings.modifiedItemIndicator',
    settingsDropdownBackground:  'settings.dropdownBackground',
    settingsDropdownForeground:  'settings.dropdownForeground',
    settingsDropdownBorder:  'settings.dropdownBorder',
    settingsDropdownListBorder:  'settings.dropdownListBorder',
    settingsCheckboxBackground:  'settings.checkboxBackground',
    settingsCheckboxForeground:  'settings.checkboxForeground',
    settingsCheckboxBorder:  'settings.checkboxBorder',
    settingsTextInputBackground:  'settings.textInputBackground',
    settingsTextInputForeground :  'settings.textInputForeground',
    settingsTextInputBorder:  'settings.textInputBorder',
    settingsNumberInputBackground:  'settings.numberInputBackground',
    settingsNumberInputForeground:  'settings.numberInputForeground',
    settingsNumberInputBorder:  'settings.numberInputBorder',
    settingsFocusedRowBackground:  'settings.focusedRowBackground',
    notebookFocusedRowBorder:  'notebook.focusedRowBorder',
    notebookRowHoverBackground:  'notebook.rowHoverBackground',
}

export const BreadcrumbsColors = {
    breadcrumbForeground:  'breadcrumb.foreground',
    breadcrumbBackground:  'breadcrumb.background',
    breadcrumbFocusForeground:  'breadcrumb.focusForeground',
    breadcrumbActiveSelectionForeground:  'breadcrumb.activeSelectionForeground',
    breadcrumbPickerBackground:  'breadcrumbPicker.background'
}

export const ThemeMap = Object.assign(
    WorkbenchColors,
    ContrastColors,
    BaseColors,
    WindowColors,
    TextColors,
    ButtonControl,
    DropdownControl,
    InputControl,
    ScrollbarControl,
    BadgeColors,
    ProgressBar,
    ListAndTreeColors,
    ActivityBarColors,
    SideBarColors,
    MiniMapColors,
    EditorGroupAndTabsColors,
    EditorColors,
    PanelColors,
    StatusBarColors,
    TitleBarColors,
    MenuBarColors,
    NotificationColors,
    WelcomePageColors,
    SettingsColors,
    BreadcrumbsColors,
)

const defaultVS = {
    [WorkbenchColors.workbenchBackground]: '#F3F3F3',

    [BaseColors.foreground]: '#616161',
    [BaseColors.errorForeground]: '#A1260D',
    [BaseColors.descriptionForeground]: '#717171',
    [BaseColors.iconForeground]: '#424242',
    [BaseColors.focusBorder]: Color.fromHex('#007ACC').transparent(0.4),
    [BaseColors.widgetShadow]: '#A8A8A8',

    [TextColors.textSeparatorForeground]: '#0000002e',
    [TextColors.textLinkForeground]: '#006AB1',
    [TextColors.textLinkActiveForeground]: '#006AB1',
    [TextColors.textBlockQuoteBackground]: '#7f7f7f1a',
    [TextColors.textBlockQuoteBorder]: '#007acc80',
    [TextColors.textCodeBlockBackground]: '#dcdcdc66',

    [InputControl.inputBackground]: Color.white,
    [InputControl.inputForeground]: '#616161',
    [InputControl.inputBorder]: '#616161',
    [InputControl.inputOptionActiveBorder]: '#007ACC00',
    [InputControl.inputOptionActiveBackground]: Color.fromHex('#007ACC').transparent(0.3),
    [InputControl.inputPlaceholderForeground]: Color.fromHex('#616161').transparent(0.5),

    [DropdownControl.dropdownBackground]: Color.white,
    [DropdownControl.dropdownBorder]: Color.white,

    [ButtonControl.checkboxBackground]: Color.white,
    [ButtonControl.checkboxBorder]: Color.white,
    [ButtonControl.buttonBackground]: '#007ACC',
    [ButtonControl.buttonForeground]: Color.white,
    [ButtonControl.buttonHoverBackground]: Color.fromHex('#007ACC').transparent(0.2),

    [BadgeColors.badgeBackground]: '#C4C4C4',
    [BadgeColors.badgeForeground]: '#333',

    [ScrollbarControl.scrollbarShadow]: '#DDDDDD',
    [ScrollbarControl.scrollbarSliderBackground]: Color.fromHex('#646464').transparent(0.4),
    [ScrollbarControl.scrollbarSliderHoverBackground]: Color.fromHex('#646464').transparent(0.7),
    [ScrollbarControl.scrollbarSliderActiveBackground]: Color.fromHex('#000000').transparent(0.6),

    [ProgressBar.progressBarBackground]: Color.fromHex('#0E70C0'),

    [EditorColors.editorErrorBackground]: '#E51400',
    [EditorColors.editorWarningForeground]: '#E51400',
    [EditorColors.editorInfoForeground]: '#E9A700',
    [EditorColors.editorHintForeground]: '#6c6c6c',
    [EditorColors.editorBackground]: '#fffffe',
    [EditorColors.editorForeground]: '#333333',
    [EditorColors.editorSelectionBackground]: '#ADD6FF',
    [EditorColors.editorFindMatchBackground]: '#A8AC94',

    [ListAndTreeColors.listDropBackground]: '#E4E6F1',
    [ListAndTreeColors.listHoverBackground]: '#F0F0F0',
    [ListAndTreeColors.listActiveSelectionBackground]: '#0074E8',
    [ListAndTreeColors.listActiveSelectionForeground]: Color.white,

    [MenuBarColors.menuForeground]: '#616161',
    [MenuBarColors.menuBackground]: Color.white,
    [MenuBarColors.menuSeparatorBackground]: '#888888',

}

const defaultDark = {
    [WorkbenchColors.workbenchBackground]: '#252526',
    [BaseColors.foreground]: '#CCCCCC',
    [BaseColors.widgetShadow]: '#000000',
    [BaseColors.errorForeground]: '#F48771',
    [BaseColors.descriptionForeground]: Color.fromHex('#CCCCCC').transparent(0.7),
    [BaseColors.iconForeground]: '#C5C5C5',
    [BaseColors.focusBorder]: Color.fromHex('#0E639C').transparent(0.8),

    [TextColors.textSeparatorForeground]: '#ffffff2e',
    [TextColors.textLinkForeground]: '#3794FF',
    [TextColors.textLinkActiveForeground]: '#3794FF',
    [TextColors.textBlockQuoteBackground]: '#7f7f7f1a',
    [TextColors.textBlockQuoteBorder]: '#007acc80',
    [TextColors.textCodeBlockBackground]: '#0a0a0a66',

    [InputControl.inputBackground]: '#3C3C3C',
    [InputControl.inputForeground]: '#CCCCCC',
    [InputControl.inputOptionActiveBorder]: '#007ACC00',
    [InputControl.inputOptionActiveBackground]: Color.fromHex('#0E639C').transparent(0.5),
    [InputControl.inputPlaceholderForeground]: Color.fromHex('#616161').transparent(0.5),

    [DropdownControl.dropdownBackground]: '#3C3C3C',
    [DropdownControl.dropdownForeground]: '#F0F0F0',
    [DropdownControl.dropdownBorder]: '#CECECE',

    [ButtonControl.checkboxBorder]: '#CECECE',
    [ButtonControl.buttonBackground]: '#0E639C',
    [ButtonControl.buttonForeground]: Color.white,
    [ButtonControl.buttonHoverBackground]: Color.fromHex('#0E639C').transparent(0.2),
    
    [BadgeColors.badgeBackground]: '#4D4D4D',
    [BadgeColors.badgeForeground]: Color.white,

    [ScrollbarControl.scrollbarShadow]: '#000000',
    [ScrollbarControl.scrollbarSliderBackground]: Color.fromHex('#797979').transparent(0.4),
    [ScrollbarControl.scrollbarSliderHoverBackground]: Color.fromHex('#646464').transparent(0.7),
    [ScrollbarControl.scrollbarSliderActiveBackground]: Color.fromHex('#BFBFBF').transparent(0.4),

    [ProgressBar.progressBarBackground]: Color.fromHex('#0E70C0'),

    [EditorColors.editorErrorBackground]: '#F48771',
    [EditorColors.editorWarningForeground]: '#CCA700',
    [EditorColors.editorInfoForeground]: '#75BEFF',
    [EditorColors.editorHintForeground]: Color.fromHex('#eeeeee').transparent(0.7),
    [EditorColors.editorBackground]: '#1E1E1E',
    [EditorColors.editorForeground]: '#BBBBBB',
    [EditorColors.editorSelectionBackground]: '#264F78',
    [EditorColors.editorSelectionForeground]: '#000000',

    [ListAndTreeColors.listDropBackground]: '#37373D',
    [ListAndTreeColors.listHoverBackground]: '#2A2D2E',
    [ListAndTreeColors.listActiveSelectionBackground]: '#37373D',
    [ListAndTreeColors.listActiveSelectionForeground]: Color.white,

    [MenuBarColors.menuForeground]: '#F0F0F0',
    [MenuBarColors.menuBackground]: '#3C3C3C',
    [MenuBarColors.menuSeparatorBackground]: '#BBBBBB',

    [PanelColors.panelBackground]: 'rgb(37, 37, 38);',
    [PanelColors.panelForeground]: Color.white,
    [PanelColors.panelBorder]: '#CECECE',
}

const defaultHc = {
    [WorkbenchColors.workbenchBackground]: '#000000',
    [BaseColors.foreground]: '#FFFFFF',
    [BaseColors.errorForeground]: '#F48771',
    [BaseColors.descriptionForeground]: Color.fromHex('#FFFFFF').transparent(0.7),
    [BaseColors.iconForeground]: '#FFFFFF',
    [BaseColors.focusBorder]: '#F38518',
    [ContrastColors.contrastBorder]: '#6FC3DF',
    [ContrastColors.contrastActiveBorder]: '#F38518',

    [TextColors.textSeparatorForeground]: Color.black,
    [TextColors.textLinkForeground]: '#3794FF',
    [TextColors.textLinkActiveForeground]: '#3794FF',
    [TextColors.textBlockQuoteBorder]: Color.white,
    [TextColors.textCodeBlockBackground]: Color.black,

    [InputControl.inputBackground]: Color.black,
    [InputControl.inputForeground]: '#FFFFFF',
    [InputControl.inputBorder]: '#6FC3DF',
    [InputControl.inputOptionActiveBorder]: '#6FC3DF',
    [InputControl.inputPlaceholderForeground]: Color.fromHex('#616161').transparent(0.7),

    [DropdownControl.dropdownBackground]: Color.black,
    [DropdownControl.dropdownListBackground]: Color.black,
    [DropdownControl.dropdownForeground]: Color.white,
    [DropdownControl.dropdownBorder]: '#6FC3DF',

    [ButtonControl.checkboxBorder]: '#6FC3DF',
    [ButtonControl.buttonForeground]: Color.white,

    [BadgeColors.badgeBackground]: Color.black,
    [BadgeColors.badgeForeground]: Color.white,
    [ScrollbarControl.scrollbarSliderBackground]: Color.fromHex('#6FC3DF').transparent(0.6),
    [ScrollbarControl.scrollbarSliderHoverBackground]: Color.fromHex('#6FC3DF').transparent(0.8),
    [ScrollbarControl.scrollbarSliderActiveBackground]: '#6FC3DF',

    [ProgressBar.progressBarBackground]: '#6FC3DF',
    [EditorColors.editorErrorBorder]: Color.fromHex('#E47777').transparent(0.8),
    [EditorColors.editorWarningBorder]: Color.fromHex('#FFCC00').transparent(0.8),
    [EditorColors.editorInfoBorder]: Color.fromHex('#FFCC00').transparent(0.8),
    [EditorColors.editorHintBorder]: Color.fromHex('#eeeeee').transparent(0.8),
    [EditorColors.editorBackground]:  Color.black,
    [EditorColors.editorForeground]:  Color.white,
    [EditorColors.editorSelectionForeground]: '#000000',

    [MenuBarColors.menuForeground]: Color.white,
    [MenuBarColors.menuBackground]: Color.black,
    [MenuBarColors.menuSeparatorBackground]: '#6FC3DF',

    [PanelColors.panelBorder]: '#6FC3DF',

}

export function getBuiltInColors(theme: IColorTheme) {
    switch (theme.uiTheme) {
        case 'vs-dark': {
            return defaultDark;
        }
        case 'vs': {
            return defaultVS;
        }
        default: {
            return defaultHc;
        }
    }
}
