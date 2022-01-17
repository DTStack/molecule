---
id: 'molecule.component'
title: 'Namespace: component'
sidebar_label: 'component'
custom_edit_url: null
---

[molecule](molecule).component

## Enumerations

-   [MenuMode](../enums/molecule.component.MenuMode)

## Classes

-   [Input](../classes/molecule.component.Input)
-   [MonacoEditor](../classes/molecule.component.MonacoEditor)
-   [Select](../classes/molecule.component.Select)

## Interfaces

-   [IActionBarItemProps](../interfaces/molecule.component.IActionBarItemProps)
-   [IActionBarProps](../interfaces/molecule.component.IActionBarProps)
-   [IBreadcrumbItemProps](../interfaces/molecule.component.IBreadcrumbItemProps)
-   [IBreadcrumbProps](../interfaces/molecule.component.IBreadcrumbProps)
-   [IButtonProps](../interfaces/molecule.component.IButtonProps)
-   [ICheckboxProps](../interfaces/molecule.component.ICheckboxProps)
-   [ICollapseProps](../interfaces/molecule.component.ICollapseProps)
-   [IContextMenuProps](../interfaces/molecule.component.IContextMenuProps)
-   [IContextView](../interfaces/molecule.component.IContextView)
-   [IContextViewProps](../interfaces/molecule.component.IContextViewProps)
-   [IDisplayProps](../interfaces/molecule.component.IDisplayProps)
-   [IDropDownProps](../interfaces/molecule.component.IDropDownProps)
-   [IIconProps](../interfaces/molecule.component.IIconProps)
-   [IInputProps](../interfaces/molecule.component.IInputProps)
-   [IItemProps](../interfaces/molecule.component.IItemProps)
-   [IListProps](../interfaces/molecule.component.IListProps)
-   [IMenuItemProps](../interfaces/molecule.component.IMenuItemProps)
-   [IModalFuncProps](../interfaces/molecule.component.IModalFuncProps)
-   [IModalProps](../interfaces/molecule.component.IModalProps)
-   [IMonacoEditorProps](../interfaces/molecule.component.IMonacoEditorProps)
-   [IScrollbarProps](../interfaces/molecule.component.IScrollbarProps)
-   [ISearchProps](../interfaces/molecule.component.ISearchProps)
-   [ISelectOptionProps](../interfaces/molecule.component.ISelectOptionProps)
-   [ISelectProps](../interfaces/molecule.component.ISelectProps)
-   [ISubMenuProps](../interfaces/molecule.component.ISubMenuProps)
-   [ITabProps](../interfaces/molecule.component.ITabProps)
-   [ITabsProps](../interfaces/molecule.component.ITabsProps)
-   [ITextAreaProps](../interfaces/molecule.component.ITextAreaProps)
-   [IToolTipProps](../interfaces/molecule.component.IToolTipProps)
-   [IToolbarProps](../interfaces/molecule.component.IToolbarProps)
-   [ITreeNodeItemProps](../interfaces/molecule.component.ITreeNodeItemProps)
-   [ITreeProps](../interfaces/molecule.component.ITreeProps)

## Type aliases

### IMenuProps

Ƭ **IMenuProps**: [`ISubMenuProps`](../interfaces/molecule.component.ISubMenuProps)

#### Defined in

[src/components/menu/menu.tsx:26](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/menu/menu.tsx#L26)

---

### TabsType

Ƭ **TabsType**: `"line"` \| `"card"`

#### Defined in

[src/components/tabs/index.tsx:16](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L16)

## Variables

### DropDown

• **DropDown**: `ForwardRefExoticComponent`<`Pick`<[`IDropDownProps`](../interfaces/molecule.component.IDropDownProps), `"children"` \| `"slot"` \| `"style"` \| `"title"` \| `"overlay"` \| `"trigger"` \| `"placement"` \| `"key"` \| `"defaultChecked"` \| `"defaultValue"` \| `"suppressContentEditableWarning"` \| `"suppressHydrationWarning"` \| `"accessKey"` \| `"className"` \| `"contentEditable"` \| `"contextMenu"` \| `"dir"` \| `"draggable"` \| `"hidden"` \| `"id"` \| `"lang"` \| `"placeholder"` \| `"spellCheck"` \| `"tabIndex"` \| `"translate"` \| `"radioGroup"` \| `"role"` \| `"about"` \| `"datatype"` \| `"inlist"` \| `"prefix"` \| `"property"` \| `"resource"` \| `"typeof"` \| `"vocab"` \| `"autoCapitalize"` \| `"autoCorrect"` \| `"autoSave"` \| `"color"` \| `"itemProp"` \| `"itemScope"` \| `"itemType"` \| `"itemID"` \| `"itemRef"` \| `"results"` \| `"security"` \| `"unselectable"` \| `"inputMode"` \| `"is"` \| `"aria-activedescendant"` \| `"aria-atomic"` \| `"aria-autocomplete"` \| `"aria-busy"` \| `"aria-checked"` \| `"aria-colcount"` \| `"aria-colindex"` \| `"aria-colspan"` \| `"aria-controls"` \| `"aria-current"` \| `"aria-describedby"` \| `"aria-details"` \| `"aria-disabled"` \| `"aria-dropeffect"` \| `"aria-errormessage"` \| `"aria-expanded"` \| `"aria-flowto"` \| `"aria-grabbed"` \| `"aria-haspopup"` \| `"aria-hidden"` \| `"aria-invalid"` \| `"aria-keyshortcuts"` \| `"aria-label"` \| `"aria-labelledby"` \| `"aria-level"` \| `"aria-live"` \| `"aria-modal"` \| `"aria-multiline"` \| `"aria-multiselectable"` \| `"aria-orientation"` \| `"aria-owns"` \| `"aria-placeholder"` \| `"aria-posinset"` \| `"aria-pressed"` \| `"aria-readonly"` \| `"aria-relevant"` \| `"aria-required"` \| `"aria-roledescription"` \| `"aria-rowcount"` \| `"aria-rowindex"` \| `"aria-rowspan"` \| `"aria-selected"` \| `"aria-setsize"` \| `"aria-sort"` \| `"aria-valuemax"` \| `"aria-valuemin"` \| `"aria-valuenow"` \| `"aria-valuetext"` \| `"dangerouslySetInnerHTML"` \| `"onCopy"` \| `"onCopyCapture"` \| `"onCut"` \| `"onCutCapture"` \| `"onPaste"` \| `"onPasteCapture"` \| `"onCompositionEnd"` \| `"onCompositionEndCapture"` \| `"onCompositionStart"` \| `"onCompositionStartCapture"` \| `"onCompositionUpdate"` \| `"onCompositionUpdateCapture"` \| `"onFocus"` \| `"onFocusCapture"` \| `"onBlur"` \| `"onBlurCapture"` \| `"onChange"` \| `"onChangeCapture"` \| `"onBeforeInput"` \| `"onBeforeInputCapture"` \| `"onInput"` \| `"onInputCapture"` \| `"onReset"` \| `"onResetCapture"` \| `"onSubmit"` \| `"onSubmitCapture"` \| `"onInvalid"` \| `"onInvalidCapture"` \| `"onLoad"` \| `"onLoadCapture"` \| `"onError"` \| `"onErrorCapture"` \| `"onKeyDown"` \| `"onKeyDownCapture"` \| `"onKeyPress"` \| `"onKeyPressCapture"` \| `"onKeyUp"` \| `"onKeyUpCapture"` \| `"onAbort"` \| `"onAbortCapture"` \| `"onCanPlay"` \| `"onCanPlayCapture"` \| `"onCanPlayThrough"` \| `"onCanPlayThroughCapture"` \| `"onDurationChange"` \| `"onDurationChangeCapture"` \| `"onEmptied"` \| `"onEmptiedCapture"` \| `"onEncrypted"` \| `"onEncryptedCapture"` \| `"onEnded"` \| `"onEndedCapture"` \| `"onLoadedData"` \| `"onLoadedDataCapture"` \| `"onLoadedMetadata"` \| `"onLoadedMetadataCapture"` \| `"onLoadStart"` \| `"onLoadStartCapture"` \| `"onPause"` \| `"onPauseCapture"` \| `"onPlay"` \| `"onPlayCapture"` \| `"onPlaying"` \| `"onPlayingCapture"` \| `"onProgress"` \| `"onProgressCapture"` \| `"onRateChange"` \| `"onRateChangeCapture"` \| `"onSeeked"` \| `"onSeekedCapture"` \| `"onSeeking"` \| `"onSeekingCapture"` \| `"onStalled"` \| `"onStalledCapture"` \| `"onSuspend"` \| `"onSuspendCapture"` \| `"onTimeUpdate"` \| `"onTimeUpdateCapture"` \| `"onVolumeChange"` \| `"onVolumeChangeCapture"` \| `"onWaiting"` \| `"onWaitingCapture"` \| `"onAuxClick"` \| `"onAuxClickCapture"` \| `"onClick"` \| `"onClickCapture"` \| `"onContextMenu"` \| `"onContextMenuCapture"` \| `"onDoubleClick"` \| `"onDoubleClickCapture"` \| `"onDrag"` \| `"onDragCapture"` \| `"onDragEnd"` \| `"onDragEndCapture"` \| `"onDragEnter"` \| `"onDragEnterCapture"` \| `"onDragExit"` \| `"onDragExitCapture"` \| `"onDragLeave"` \| `"onDragLeaveCapture"` \| `"onDragOver"` \| `"onDragOverCapture"` \| `"onDragStart"` \| `"onDragStartCapture"` \| `"onDrop"` \| `"onDropCapture"` \| `"onMouseDown"` \| `"onMouseDownCapture"` \| `"onMouseEnter"` \| `"onMouseLeave"` \| `"onMouseMove"` \| `"onMouseMoveCapture"` \| `"onMouseOut"` \| `"onMouseOutCapture"` \| `"onMouseOver"` \| `"onMouseOverCapture"` \| `"onMouseUp"` \| `"onMouseUpCapture"` \| `"onSelect"` \| `"onSelectCapture"` \| `"onTouchCancel"` \| `"onTouchCancelCapture"` \| `"onTouchEnd"` \| `"onTouchEndCapture"` \| `"onTouchMove"` \| `"onTouchMoveCapture"` \| `"onTouchStart"` \| `"onTouchStartCapture"` \| `"onPointerDown"` \| `"onPointerDownCapture"` \| `"onPointerMove"` \| `"onPointerMoveCapture"` \| `"onPointerUp"` \| `"onPointerUpCapture"` \| `"onPointerCancel"` \| `"onPointerCancelCapture"` \| `"onPointerEnter"` \| `"onPointerEnterCapture"` \| `"onPointerLeave"` \| `"onPointerLeaveCapture"` \| `"onPointerOver"` \| `"onPointerOverCapture"` \| `"onPointerOut"` \| `"onPointerOutCapture"` \| `"onGotPointerCapture"` \| `"onGotPointerCaptureCapture"` \| `"onLostPointerCapture"` \| `"onLostPointerCaptureCapture"` \| `"onScroll"` \| `"onScrollCapture"` \| `"onWheel"` \| `"onWheelCapture"` \| `"onAnimationStart"` \| `"onAnimationStartCapture"` \| `"onAnimationEnd"` \| `"onAnimationEndCapture"` \| `"onAnimationIteration"` \| `"onAnimationIterationCapture"` \| `"onTransitionEnd"` \| `"onTransitionEndCapture"` \| `"css"`\> & `RefAttributes`<`DropDownRef`\>\>

#### Defined in

[src/components/dropdown/index.tsx:23](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/dropdown/index.tsx#L23)

---

### Menu

• **Menu**: `ForwardRefExoticComponent`<`Pick`<`PropsWithChildren`<[`ISubMenuProps`](../interfaces/molecule.component.ISubMenuProps)\>, `string` \| `number`\> & `RefAttributes`<`MenuRef`\>\>

#### Defined in

[src/components/menu/menu.tsx:233](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/menu/menu.tsx#L233)

---

### Modal

• **Modal**: `ModalType`

#### Defined in

[src/components/dialog/index.tsx:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/dialog/index.tsx#L20)

---

### Scrollable

• **Scrollable**: `ForwardRefExoticComponent`<`Pick`<[`IScrollbarProps`](../interfaces/molecule.component.IScrollbarProps), `"children"` \| `"cite"` \| `"data"` \| `"form"` \| `"label"` \| `"slot"` \| `"span"` \| `"style"` \| `"summary"` \| `"title"` \| `"pattern"` \| `"list"` \| `"step"` \| `"key"` \| `"defaultChecked"` \| `"defaultValue"` \| `"suppressContentEditableWarning"` \| `"suppressHydrationWarning"` \| `"accessKey"` \| `"className"` \| `"contentEditable"` \| `"contextMenu"` \| `"dir"` \| `"draggable"` \| `"hidden"` \| `"id"` \| `"lang"` \| `"placeholder"` \| `"spellCheck"` \| `"tabIndex"` \| `"translate"` \| `"radioGroup"` \| `"role"` \| `"about"` \| `"datatype"` \| `"inlist"` \| `"prefix"` \| `"property"` \| `"resource"` \| `"typeof"` \| `"vocab"` \| `"autoCapitalize"` \| `"autoCorrect"` \| `"autoSave"` \| `"color"` \| `"itemProp"` \| `"itemScope"` \| `"itemType"` \| `"itemID"` \| `"itemRef"` \| `"results"` \| `"security"` \| `"unselectable"` \| `"inputMode"` \| `"is"` \| `"aria-activedescendant"` \| `"aria-atomic"` \| `"aria-autocomplete"` \| `"aria-busy"` \| `"aria-checked"` \| `"aria-colcount"` \| `"aria-colindex"` \| `"aria-colspan"` \| `"aria-controls"` \| `"aria-current"` \| `"aria-describedby"` \| `"aria-details"` \| `"aria-disabled"` \| `"aria-dropeffect"` \| `"aria-errormessage"` \| `"aria-expanded"` \| `"aria-flowto"` \| `"aria-grabbed"` \| `"aria-haspopup"` \| `"aria-hidden"` \| `"aria-invalid"` \| `"aria-keyshortcuts"` \| `"aria-label"` \| `"aria-labelledby"` \| `"aria-level"` \| `"aria-live"` \| `"aria-modal"` \| `"aria-multiline"` \| `"aria-multiselectable"` \| `"aria-orientation"` \| `"aria-owns"` \| `"aria-placeholder"` \| `"aria-posinset"` \| `"aria-pressed"` \| `"aria-readonly"` \| `"aria-relevant"` \| `"aria-required"` \| `"aria-roledescription"` \| `"aria-rowcount"` \| `"aria-rowindex"` \| `"aria-rowspan"` \| `"aria-selected"` \| `"aria-setsize"` \| `"aria-sort"` \| `"aria-valuemax"` \| `"aria-valuemin"` \| `"aria-valuenow"` \| `"aria-valuetext"` \| `"dangerouslySetInnerHTML"` \| `"onCopy"` \| `"onCopyCapture"` \| `"onCut"` \| `"onCutCapture"` \| `"onPaste"` \| `"onPasteCapture"` \| `"onCompositionEnd"` \| `"onCompositionEndCapture"` \| `"onCompositionStart"` \| `"onCompositionStartCapture"` \| `"onCompositionUpdate"` \| `"onCompositionUpdateCapture"` \| `"onFocus"` \| `"onFocusCapture"` \| `"onBlur"` \| `"onBlurCapture"` \| `"onChange"` \| `"onChangeCapture"` \| `"onBeforeInput"` \| `"onBeforeInputCapture"` \| `"onInput"` \| `"onInputCapture"` \| `"onReset"` \| `"onResetCapture"` \| `"onSubmit"` \| `"onSubmitCapture"` \| `"onInvalid"` \| `"onInvalidCapture"` \| `"onLoad"` \| `"onLoadCapture"` \| `"onError"` \| `"onErrorCapture"` \| `"onKeyDown"` \| `"onKeyDownCapture"` \| `"onKeyPress"` \| `"onKeyPressCapture"` \| `"onKeyUp"` \| `"onKeyUpCapture"` \| `"onAbort"` \| `"onAbortCapture"` \| `"onCanPlay"` \| `"onCanPlayCapture"` \| `"onCanPlayThrough"` \| `"onCanPlayThroughCapture"` \| `"onDurationChange"` \| `"onDurationChangeCapture"` \| `"onEmptied"` \| `"onEmptiedCapture"` \| `"onEncrypted"` \| `"onEncryptedCapture"` \| `"onEnded"` \| `"onEndedCapture"` \| `"onLoadedData"` \| `"onLoadedDataCapture"` \| `"onLoadedMetadata"` \| `"onLoadedMetadataCapture"` \| `"onLoadStart"` \| `"onLoadStartCapture"` \| `"onPause"` \| `"onPauseCapture"` \| `"onPlay"` \| `"onPlayCapture"` \| `"onPlaying"` \| `"onPlayingCapture"` \| `"onProgress"` \| `"onProgressCapture"` \| `"onRateChange"` \| `"onRateChangeCapture"` \| `"onSeeked"` \| `"onSeekedCapture"` \| `"onSeeking"` \| `"onSeekingCapture"` \| `"onStalled"` \| `"onStalledCapture"` \| `"onSuspend"` \| `"onSuspendCapture"` \| `"onTimeUpdate"` \| `"onTimeUpdateCapture"` \| `"onVolumeChange"` \| `"onVolumeChangeCapture"` \| `"onWaiting"` \| `"onWaitingCapture"` \| `"onAuxClick"` \| `"onAuxClickCapture"` \| `"onClick"` \| `"onClickCapture"` \| `"onContextMenu"` \| `"onContextMenuCapture"` \| `"onDoubleClick"` \| `"onDoubleClickCapture"` \| `"onDrag"` \| `"onDragCapture"` \| `"onDragEnd"` \| `"onDragEndCapture"` \| `"onDragEnter"` \| `"onDragEnterCapture"` \| `"onDragExit"` \| `"onDragExitCapture"` \| `"onDragLeave"` \| `"onDragLeaveCapture"` \| `"onDragOver"` \| `"onDragOverCapture"` \| `"onDragStart"` \| `"onDragStartCapture"` \| `"onDrop"` \| `"onDropCapture"` \| `"onMouseDown"` \| `"onMouseDownCapture"` \| `"onMouseEnter"` \| `"onMouseLeave"` \| `"onMouseMove"` \| `"onMouseMoveCapture"` \| `"onMouseOut"` \| `"onMouseOutCapture"` \| `"onMouseOver"` \| `"onMouseOverCapture"` \| `"onMouseUp"` \| `"onMouseUpCapture"` \| `"onSelect"` \| `"onSelectCapture"` \| `"onTouchCancel"` \| `"onTouchCancelCapture"` \| `"onTouchEnd"` \| `"onTouchEndCapture"` \| `"onTouchMove"` \| `"onTouchMoveCapture"` \| `"onTouchStart"` \| `"onTouchStartCapture"` \| `"onPointerDown"` \| `"onPointerDownCapture"` \| `"onPointerMove"` \| `"onPointerMoveCapture"` \| `"onPointerUp"` \| `"onPointerUpCapture"` \| `"onPointerCancel"` \| `"onPointerCancelCapture"` \| `"onPointerEnter"` \| `"onPointerEnterCapture"` \| `"onPointerLeave"` \| `"onPointerLeaveCapture"` \| `"onPointerOver"` \| `"onPointerOverCapture"` \| `"onPointerOut"` \| `"onPointerOutCapture"` \| `"onGotPointerCapture"` \| `"onGotPointerCaptureCapture"` \| `"onLostPointerCapture"` \| `"onLostPointerCaptureCapture"` \| `"onScroll"` \| `"onScrollCapture"` \| `"onWheel"` \| `"onWheelCapture"` \| `"onAnimationStart"` \| `"onAnimationStartCapture"` \| `"onAnimationEnd"` \| `"onAnimationEndCapture"` \| `"onAnimationIteration"` \| `"onAnimationIterationCapture"` \| `"onTransitionEnd"` \| `"onTransitionEndCapture"` \| `"css"` \| `"type"` \| `"maxLength"` \| `"autoComplete"` \| `"autoFocus"` \| `"cols"` \| `"disabled"` \| `"minLength"` \| `"name"` \| `"readOnly"` \| `"required"` \| `"rows"` \| `"value"` \| `"wrap"` \| `"size"` \| `"accept"` \| `"alt"` \| `"capture"` \| `"checked"` \| `"crossOrigin"` \| `"formAction"` \| `"formEncType"` \| `"formMethod"` \| `"formNoValidate"` \| `"formTarget"` \| `"height"` \| `"max"` \| `"min"` \| `"multiple"` \| `"src"` \| `"width"` \| `"isShowShadow"` \| `"trackStyle"` \| `"thumbStyle"` \| `"acceptCharset"` \| `"action"` \| `"allowFullScreen"` \| `"allowTransparency"` \| `"as"` \| `"async"` \| `"autoPlay"` \| `"cellPadding"` \| `"cellSpacing"` \| `"charSet"` \| `"challenge"` \| `"classID"` \| `"colSpan"` \| `"content"` \| `"controls"` \| `"coords"` \| `"dateTime"` \| `"default"` \| `"defer"` \| `"download"` \| `"encType"` \| `"frameBorder"` \| `"headers"` \| `"high"` \| `"href"` \| `"hrefLang"` \| `"htmlFor"` \| `"httpEquiv"` \| `"integrity"` \| `"keyParams"` \| `"keyType"` \| `"kind"` \| `"loop"` \| `"low"` \| `"manifest"` \| `"marginHeight"` \| `"marginWidth"` \| `"media"` \| `"mediaGroup"` \| `"method"` \| `"muted"` \| `"nonce"` \| `"noValidate"` \| `"open"` \| `"optimum"` \| `"playsInline"` \| `"poster"` \| `"preload"` \| `"rel"` \| `"reversed"` \| `"rowSpan"` \| `"sandbox"` \| `"scope"` \| `"scoped"` \| `"scrolling"` \| `"seamless"` \| `"selected"` \| `"shape"` \| `"sizes"` \| `"srcDoc"` \| `"srcLang"` \| `"srcSet"` \| `"start"` \| `"target"` \| `"useMap"` \| `"wmode"` \| `"elementRef"` \| `"renderer"` \| `"createContext"` \| `"rtl"` \| `"momentum"` \| `"native"` \| `"mobileNative"` \| `"noScrollX"` \| `"noScrollY"` \| `"noScroll"` \| `"permanentTrackX"` \| `"permanentTrackY"` \| `"permanentTracks"` \| `"removeTracksWhenNotUsed"` \| `"removeTrackYWhenNotUsed"` \| `"removeTrackXWhenNotUsed"` \| `"minimalThumbSize"` \| `"maximalThumbSize"` \| `"minimalThumbXSize"` \| `"maximalThumbXSize"` \| `"minimalThumbYSize"` \| `"maximalThumbYSize"` \| `"scrollbarWidth"` \| `"fallbackScrollbarWidth"` \| `"scrollTop"` \| `"scrollLeft"` \| `"scrollDetectionThreshold"` \| `"translateContentSizesToHolder"` \| `"translateContentSizeYToHolder"` \| `"translateContentSizeXToHolder"` \| `"noDefaultStyles"` \| `"disableTracksMousewheelScrolling"` \| `"disableTrackXMousewheelScrolling"` \| `"disableTrackYMousewheelScrolling"` \| `"disableTracksWidthCompensation"` \| `"disableTrackXWidthCompensation"` \| `"disableTrackYWidthCompensation"` \| `"trackClickBehavior"` \| `"wrapperProps"` \| `"scrollerProps"` \| `"contentProps"` \| `"trackXProps"` \| `"trackYProps"` \| `"thumbXProps"` \| `"thumbYProps"` \| `"onUpdate"` \| `"onScrollStart"` \| `"onScrollStop"`\> & `RefAttributes`<`default`\>\>

The react-scrollbars-custom component default not supports auto hide thumb option,
the below implementation from this issue:
https://github.com/xobotyi/react-scrollbars-custom/issues/46

#### Defined in

[src/components/scrollable/index.tsx:18](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/scrollable/index.tsx#L18)

## Functions

### ActionBar

▸ **ActionBar**<`T`\>(`props`): `Element`

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name    | Type                                                                        |
| :------ | :-------------------------------------------------------------------------- |
| `props` | [`IActionBarProps`](../interfaces/molecule.component.IActionBarProps)<`T`\> |

#### Returns

`Element`

#### Defined in

[src/components/actionBar/index.tsx:126](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/actionBar/index.tsx#L126)

---

### ActionBarItem

▸ **ActionBarItem**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                  |
| :------ | :------------------------------------------------------------------------------------ |
| `props` | [`IActionBarItemProps`](../interfaces/molecule.component.IActionBarItemProps)<`any`\> |

#### Returns

`Element`

#### Defined in

[src/components/actionBar/index.tsx:55](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/actionBar/index.tsx#L55)

---

### Breadcrumb

▸ **Breadcrumb**(`props`): `Element`

#### Parameters

| Name    | Type                                                                    |
| :------ | :---------------------------------------------------------------------- |
| `props` | [`IBreadcrumbProps`](../interfaces/molecule.component.IBreadcrumbProps) |

#### Returns

`Element`

#### Defined in

[src/components/breadcrumb/index.tsx:30](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/breadcrumb/index.tsx#L30)

---

### Button

▸ **Button**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                  |
| :------ | :------------------------------------------------------------------------------------ |
| `props` | `PropsWithChildren`<[`IButtonProps`](../interfaces/molecule.component.IButtonProps)\> |

#### Returns

`Element`

#### Defined in

[src/components/button/index.tsx:25](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/button/index.tsx#L25)

---

### Checkbox

▸ **Checkbox**(`props`): `Element`

#### Parameters

| Name    | Type                                                                |
| :------ | :------------------------------------------------------------------ |
| `props` | [`ICheckboxProps`](../interfaces/molecule.component.ICheckboxProps) |

#### Returns

`Element`

#### Defined in

[src/components/checkbox/checkbox.tsx:19](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/checkbox/checkbox.tsx#L19)

---

### Collapse

▸ **Collapse**(`props`): `Element`

#### Parameters

| Name    | Type                                                                |
| :------ | :------------------------------------------------------------------ |
| `props` | [`ICollapseProps`](../interfaces/molecule.component.ICollapseProps) |

#### Returns

`Element`

#### Defined in

[src/components/collapse/index.tsx:60](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/collapse/index.tsx#L60)

---

### Display

▸ `Const` **Display**(`props`): `Element`

#### Parameters

| Name    | Type                                                              |
| :------ | :---------------------------------------------------------------- |
| `props` | [`IDisplayProps`](../interfaces/molecule.component.IDisplayProps) |

#### Returns

`Element`

#### Defined in

[src/components/display/index.tsx:7](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/display/index.tsx#L7)

---

### Icon

▸ **Icon**(`props`): `null` \| `Element`

#### Parameters

| Name    | Type                                                                              |
| :------ | :-------------------------------------------------------------------------------- |
| `props` | `PropsWithChildren`<[`IIconProps`](../interfaces/molecule.component.IIconProps)\> |

#### Returns

`null` \| `Element`

#### Defined in

[src/components/icon/index.tsx:11](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/icon/index.tsx#L11)

---

### Item

▸ **Item**(`props`): `Element`

#### Parameters

| Name    | Type                                                                              |
| :------ | :-------------------------------------------------------------------------------- |
| `props` | `PropsWithChildren`<[`IItemProps`](../interfaces/molecule.component.IItemProps)\> |

#### Returns

`Element`

#### Defined in

[src/components/list/item.tsx:19](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/list/item.tsx#L19)

---

### List

▸ **List**(`props`): `Element`

#### Parameters

| Name    | Type                                                                              |
| :------ | :-------------------------------------------------------------------------------- |
| `props` | `PropsWithChildren`<[`IListProps`](../interfaces/molecule.component.IListProps)\> |

#### Returns

`Element`

#### Defined in

[src/components/list/list.tsx:45](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/list/list.tsx#L45)

---

### MenuItem

▸ **MenuItem**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                                       |
| :------ | :--------------------------------------------------------------------------------------------------------- |
| `props` | `PropsWithChildren`<`Omit`<[`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps), `"id"`\>\> |

#### Returns

`Element`

#### Defined in

[src/components/menu/menuItem.tsx:42](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/menu/menuItem.tsx#L42)

---

### Option

▸ **Option**(`props`): `Element`

#### Parameters

| Name    | Type                                                                        |
| :------ | :-------------------------------------------------------------------------- |
| `props` | [`ISelectOptionProps`](../interfaces/molecule.component.ISelectOptionProps) |

#### Returns

`Element`

#### Defined in

[src/components/select/option.tsx:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/select/option.tsx#L20)

---

### Search

▸ **Search**(`props`): `Element`

#### Parameters

| Name    | Type                                                            |
| :------ | :-------------------------------------------------------------- |
| `props` | [`ISearchProps`](../interfaces/molecule.component.ISearchProps) |

#### Returns

`Element`

#### Defined in

[src/components/search/index.tsx:40](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/search/index.tsx#L40)

---

### SubMenu

▸ **SubMenu**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                    |
| :------ | :-------------------------------------------------------------------------------------- |
| `props` | `PropsWithChildren`<[`ISubMenuProps`](../interfaces/molecule.component.ISubMenuProps)\> |

#### Returns

`Element`

#### Defined in

[src/components/menu/subMenu.tsx:41](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/menu/subMenu.tsx#L41)

---

### Tab

▸ **Tab**(`__namedParameters`): `Element`

#### Parameters

| Name                | Type            |
| :------------------ | :-------------- |
| `__namedParameters` | `ITabComponent` |

#### Returns

`Element`

#### Defined in

[src/components/tabs/tab.tsx:69](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L69)

---

### Tabs

▸ **Tabs**(`props`): `Element`

#### Parameters

| Name    | Type                                                                |
| :------ | :------------------------------------------------------------------ |
| `props` | [`ITabsProps`](../interfaces/molecule.component.ITabsProps)<`any`\> |

#### Returns

`Element`

#### Defined in

[src/components/tabs/index.tsx:47](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L47)

---

### Toolbar

▸ **Toolbar**<`T`\>(`props`): `Element`

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name    | Type                                                                    |
| :------ | :---------------------------------------------------------------------- |
| `props` | [`IToolbarProps`](../interfaces/molecule.component.IToolbarProps)<`T`\> |

#### Returns

`Element`

#### Defined in

[src/components/toolbar/index.tsx:10](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/toolbar/index.tsx#L10)

---

### Tooltip

▸ `Const` **Tooltip**(`__namedParameters`): `null` \| `Element`

#### Parameters

| Name                | Type                                                              |
| :------------------ | :---------------------------------------------------------------- |
| `__namedParameters` | [`IToolTipProps`](../interfaces/molecule.component.IToolTipProps) |

#### Returns

`null` \| `Element`

#### Defined in

[src/components/tooltip/index.tsx:9](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tooltip/index.tsx#L9)

---

### TreeView

▸ `Const` **TreeView**(`__namedParameters`): `Element`

#### Parameters

| Name                | Type                                                        |
| :------------------ | :---------------------------------------------------------- |
| `__namedParameters` | [`ITreeProps`](../interfaces/molecule.component.ITreeProps) |

#### Returns

`Element`

#### Defined in

[src/components/tree/index.tsx:75](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L75)

---

### useContextMenu

▸ **useContextMenu**(`props`): `IContextMenu` \| `undefined`

#### Parameters

| Name    | Type                                                                      |
| :------ | :------------------------------------------------------------------------ |
| `props` | [`IContextMenuProps`](../interfaces/molecule.component.IContextMenuProps) |

#### Returns

`IContextMenu` \| `undefined`

#### Defined in

[src/components/contextMenu/index.tsx:12](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/contextMenu/index.tsx#L12)

---

### useContextView

▸ **useContextView**(`props?`): [`IContextView`](../interfaces/molecule.component.IContextView)

#### Parameters

| Name    | Type                                                                      |
| :------ | :------------------------------------------------------------------------ |
| `props` | [`IContextViewProps`](../interfaces/molecule.component.IContextViewProps) |

#### Returns

[`IContextView`](../interfaces/molecule.component.IContextView)

#### Defined in

[src/components/contextView/index.tsx:43](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/contextView/index.tsx#L43)
