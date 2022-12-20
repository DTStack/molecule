---
id: 'molecule.component'
title: 'Namespace: component'
sidebar_label: 'component'
custom_edit_url: null
---

[molecule](molecule).component

## Enumerations

-   [DirectionKind](../enums/molecule.component.DirectionKind)
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
-   [IPaneConfigs](../interfaces/molecule.component.IPaneConfigs)
-   [IScrollEvent](../interfaces/molecule.component.IScrollEvent)
-   [IScrollRef](../interfaces/molecule.component.IScrollRef)
-   [IScrollbarProps](../interfaces/molecule.component.IScrollbarProps)
-   [ISearchProps](../interfaces/molecule.component.ISearchProps)
-   [ISelectOptionProps](../interfaces/molecule.component.ISelectOptionProps)
-   [ISelectProps](../interfaces/molecule.component.ISelectProps)
-   [ISplitProps](../interfaces/molecule.component.ISplitProps)
-   [ISubMenuProps](../interfaces/molecule.component.ISubMenuProps)
-   [ITabProps](../interfaces/molecule.component.ITabProps)
-   [ITabsProps](../interfaces/molecule.component.ITabsProps)
-   [ITextAreaProps](../interfaces/molecule.component.ITextAreaProps)
-   [IToolTipProps](../interfaces/molecule.component.IToolTipProps)
-   [IToolbarProps](../interfaces/molecule.component.IToolbarProps)
-   [ITreeNodeItemProps](../interfaces/molecule.component.ITreeNodeItemProps)
-   [ITreeProps](../interfaces/molecule.component.ITreeProps)

## Type Aliases

### IMenuProps

Ƭ **IMenuProps**: [`ISubMenuProps`](../interfaces/molecule.component.ISubMenuProps)

#### Defined in

[components/menu/menu.tsx:26](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menu.tsx#L26)

---

### TabsType

Ƭ **TabsType**: `"line"` \| `"card"`

#### Defined in

[components/tabs/index.tsx:19](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L19)

## Variables

### Button

• `Const` **Button**: `ForwardRefExoticComponent`<[`IButtonProps`](../interfaces/molecule.component.IButtonProps) & {} & `RefAttributes`<`HTMLButtonElement`\>\>

#### Defined in

[components/button/index.tsx:26](https://github.com/DTStack/molecule/blob/927b7d39/src/components/button/index.tsx#L26)

---

### DropDown

• `Const` **DropDown**: `ForwardRefExoticComponent`<`Pick`<[`IDropDownProps`](../interfaces/molecule.component.IDropDownProps), `"slot"` \| `"style"` \| `"title"` \| `"key"` \| `"defaultChecked"` \| `"defaultValue"` \| `"suppressContentEditableWarning"` \| `"suppressHydrationWarning"` \| `"accessKey"` \| `"className"` \| `"contentEditable"` \| `"contextMenu"` \| `"dir"` \| `"draggable"` \| `"hidden"` \| `"id"` \| `"lang"` \| `"placeholder"` \| `"spellCheck"` \| `"tabIndex"` \| `"translate"` \| `"radioGroup"` \| `"role"` \| `"about"` \| `"datatype"` \| `"inlist"` \| `"prefix"` \| `"property"` \| `"resource"` \| `"typeof"` \| `"vocab"` \| `"autoCapitalize"` \| `"autoCorrect"` \| `"autoSave"` \| `"color"` \| `"itemProp"` \| `"itemScope"` \| `"itemType"` \| `"itemID"` \| `"itemRef"` \| `"results"` \| `"security"` \| `"unselectable"` \| `"inputMode"` \| `"is"` \| `"aria-activedescendant"` \| `"aria-atomic"` \| `"aria-autocomplete"` \| `"aria-busy"` \| `"aria-checked"` \| `"aria-colcount"` \| `"aria-colindex"` \| `"aria-colspan"` \| `"aria-controls"` \| `"aria-current"` \| `"aria-describedby"` \| `"aria-details"` \| `"aria-disabled"` \| `"aria-dropeffect"` \| `"aria-errormessage"` \| `"aria-expanded"` \| `"aria-flowto"` \| `"aria-grabbed"` \| `"aria-haspopup"` \| `"aria-hidden"` \| `"aria-invalid"` \| `"aria-keyshortcuts"` \| `"aria-label"` \| `"aria-labelledby"` \| `"aria-level"` \| `"aria-live"` \| `"aria-modal"` \| `"aria-multiline"` \| `"aria-multiselectable"` \| `"aria-orientation"` \| `"aria-owns"` \| `"aria-placeholder"` \| `"aria-posinset"` \| `"aria-pressed"` \| `"aria-readonly"` \| `"aria-relevant"` \| `"aria-required"` \| `"aria-roledescription"` \| `"aria-rowcount"` \| `"aria-rowindex"` \| `"aria-rowspan"` \| `"aria-selected"` \| `"aria-setsize"` \| `"aria-sort"` \| `"aria-valuemax"` \| `"aria-valuemin"` \| `"aria-valuenow"` \| `"aria-valuetext"` \| `"children"` \| `"dangerouslySetInnerHTML"` \| `"onCopy"` \| `"onCopyCapture"` \| `"onCut"` \| `"onCutCapture"` \| `"onPaste"` \| `"onPasteCapture"` \| `"onCompositionEnd"` \| `"onCompositionEndCapture"` \| `"onCompositionStart"` \| `"onCompositionStartCapture"` \| `"onCompositionUpdate"` \| `"onCompositionUpdateCapture"` \| `"onFocus"` \| `"onFocusCapture"` \| `"onBlur"` \| `"onBlurCapture"` \| `"onChange"` \| `"onChangeCapture"` \| `"onBeforeInput"` \| `"onBeforeInputCapture"` \| `"onInput"` \| `"onInputCapture"` \| `"onReset"` \| `"onResetCapture"` \| `"onSubmit"` \| `"onSubmitCapture"` \| `"onInvalid"` \| `"onInvalidCapture"` \| `"onLoad"` \| `"onLoadCapture"` \| `"onError"` \| `"onErrorCapture"` \| `"onKeyDown"` \| `"onKeyDownCapture"` \| `"onKeyPress"` \| `"onKeyPressCapture"` \| `"onKeyUp"` \| `"onKeyUpCapture"` \| `"onAbort"` \| `"onAbortCapture"` \| `"onCanPlay"` \| `"onCanPlayCapture"` \| `"onCanPlayThrough"` \| `"onCanPlayThroughCapture"` \| `"onDurationChange"` \| `"onDurationChangeCapture"` \| `"onEmptied"` \| `"onEmptiedCapture"` \| `"onEncrypted"` \| `"onEncryptedCapture"` \| `"onEnded"` \| `"onEndedCapture"` \| `"onLoadedData"` \| `"onLoadedDataCapture"` \| `"onLoadedMetadata"` \| `"onLoadedMetadataCapture"` \| `"onLoadStart"` \| `"onLoadStartCapture"` \| `"onPause"` \| `"onPauseCapture"` \| `"onPlay"` \| `"onPlayCapture"` \| `"onPlaying"` \| `"onPlayingCapture"` \| `"onProgress"` \| `"onProgressCapture"` \| `"onRateChange"` \| `"onRateChangeCapture"` \| `"onSeeked"` \| `"onSeekedCapture"` \| `"onSeeking"` \| `"onSeekingCapture"` \| `"onStalled"` \| `"onStalledCapture"` \| `"onSuspend"` \| `"onSuspendCapture"` \| `"onTimeUpdate"` \| `"onTimeUpdateCapture"` \| `"onVolumeChange"` \| `"onVolumeChangeCapture"` \| `"onWaiting"` \| `"onWaitingCapture"` \| `"onAuxClick"` \| `"onAuxClickCapture"` \| `"onClick"` \| `"onClickCapture"` \| `"onContextMenu"` \| `"onContextMenuCapture"` \| `"onDoubleClick"` \| `"onDoubleClickCapture"` \| `"onDrag"` \| `"onDragCapture"` \| `"onDragEnd"` \| `"onDragEndCapture"` \| `"onDragEnter"` \| `"onDragEnterCapture"` \| `"onDragExit"` \| `"onDragExitCapture"` \| `"onDragLeave"` \| `"onDragLeaveCapture"` \| `"onDragOver"` \| `"onDragOverCapture"` \| `"onDragStart"` \| `"onDragStartCapture"` \| `"onDrop"` \| `"onDropCapture"` \| `"onMouseDown"` \| `"onMouseDownCapture"` \| `"onMouseEnter"` \| `"onMouseLeave"` \| `"onMouseMove"` \| `"onMouseMoveCapture"` \| `"onMouseOut"` \| `"onMouseOutCapture"` \| `"onMouseOver"` \| `"onMouseOverCapture"` \| `"onMouseUp"` \| `"onMouseUpCapture"` \| `"onSelect"` \| `"onSelectCapture"` \| `"onTouchCancel"` \| `"onTouchCancelCapture"` \| `"onTouchEnd"` \| `"onTouchEndCapture"` \| `"onTouchMove"` \| `"onTouchMoveCapture"` \| `"onTouchStart"` \| `"onTouchStartCapture"` \| `"onPointerDown"` \| `"onPointerDownCapture"` \| `"onPointerMove"` \| `"onPointerMoveCapture"` \| `"onPointerUp"` \| `"onPointerUpCapture"` \| `"onPointerCancel"` \| `"onPointerCancelCapture"` \| `"onPointerEnter"` \| `"onPointerEnterCapture"` \| `"onPointerLeave"` \| `"onPointerLeaveCapture"` \| `"onPointerOver"` \| `"onPointerOverCapture"` \| `"onPointerOut"` \| `"onPointerOutCapture"` \| `"onGotPointerCapture"` \| `"onGotPointerCaptureCapture"` \| `"onLostPointerCapture"` \| `"onLostPointerCaptureCapture"` \| `"onScroll"` \| `"onScrollCapture"` \| `"onWheel"` \| `"onWheelCapture"` \| `"onAnimationStart"` \| `"onAnimationStartCapture"` \| `"onAnimationEnd"` \| `"onAnimationEndCapture"` \| `"onAnimationIteration"` \| `"onAnimationIterationCapture"` \| `"onTransitionEnd"` \| `"onTransitionEndCapture"` \| `"overlay"` \| `"trigger"` \| `"placement"`\> & `RefAttributes`<`DropDownRef`\>\>

#### Defined in

[components/dropdown/index.tsx:23](https://github.com/DTStack/molecule/blob/927b7d39/src/components/dropdown/index.tsx#L23)

---

### Menu

• `Const` **Menu**: `ForwardRefExoticComponent`<`Pick`<`PropsWithChildren`<[`ISubMenuProps`](../interfaces/molecule.component.ISubMenuProps)\>, keyof [`ISubMenuProps`](../interfaces/molecule.component.ISubMenuProps)\> & `RefAttributes`<`MenuRef`\>\>

#### Defined in

[components/menu/menu.tsx:232](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menu.tsx#L232)

---

### Modal

• `Const` **Modal**: `ModalType`

#### Defined in

[components/dialog/index.tsx:20](https://github.com/DTStack/molecule/blob/927b7d39/src/components/dialog/index.tsx#L20)

---

### Scrollbar

• `Const` **Scrollbar**: `ForwardRefExoticComponent`<[`IScrollbarProps`](../interfaces/molecule.component.IScrollbarProps) & {} & `RefAttributes`<[`IScrollRef`](../interfaces/molecule.component.IScrollRef)\>\>

#### Defined in

[components/scrollBar/index.tsx:105](https://github.com/DTStack/molecule/blob/927b7d39/src/components/scrollBar/index.tsx#L105)

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

[components/actionBar/index.tsx:126](https://github.com/DTStack/molecule/blob/927b7d39/src/components/actionBar/index.tsx#L126)

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

[components/actionBar/index.tsx:55](https://github.com/DTStack/molecule/blob/927b7d39/src/components/actionBar/index.tsx#L55)

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

[components/breadcrumb/index.tsx:30](https://github.com/DTStack/molecule/blob/927b7d39/src/components/breadcrumb/index.tsx#L30)

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

[components/checkbox/checkbox.tsx:19](https://github.com/DTStack/molecule/blob/927b7d39/src/components/checkbox/checkbox.tsx#L19)

---

### Collapse

▸ **Collapse**(`__namedParameters`): `Element`

#### Parameters

| Name                | Type                                                                |
| :------------------ | :------------------------------------------------------------------ |
| `__namedParameters` | [`ICollapseProps`](../interfaces/molecule.component.ICollapseProps) |

#### Returns

`Element`

#### Defined in

[components/collapse/index.tsx:61](https://github.com/DTStack/molecule/blob/927b7d39/src/components/collapse/index.tsx#L61)

---

### Display

▸ **Display**(`props`): `Element`

#### Parameters

| Name    | Type                                                              |
| :------ | :---------------------------------------------------------------- |
| `props` | [`IDisplayProps`](../interfaces/molecule.component.IDisplayProps) |

#### Returns

`Element`

#### Defined in

[components/display/index.tsx:7](https://github.com/DTStack/molecule/blob/927b7d39/src/components/display/index.tsx#L7)

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

[components/icon/index.tsx:11](https://github.com/DTStack/molecule/blob/927b7d39/src/components/icon/index.tsx#L11)

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

[components/list/item.tsx:19](https://github.com/DTStack/molecule/blob/927b7d39/src/components/list/item.tsx#L19)

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

[components/list/list.tsx:45](https://github.com/DTStack/molecule/blob/927b7d39/src/components/list/list.tsx#L45)

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

[components/menu/menuItem.tsx:42](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menuItem.tsx#L42)

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

[components/select/option.tsx:20](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/option.tsx#L20)

---

### Pane

▸ **Pane**(`__namedParameters`): `Element`

#### Parameters

| Name                | Type                                                                                                 |
| :------------------ | :--------------------------------------------------------------------------------------------------- |
| `__namedParameters` | `PropsWithChildren`<`IPaneProps` & [`IPaneConfigs`](../interfaces/molecule.component.IPaneConfigs)\> |

#### Returns

`Element`

#### Defined in

[components/split/pane.tsx:11](https://github.com/DTStack/molecule/blob/927b7d39/src/components/split/pane.tsx#L11)

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

[components/search/index.tsx:40](https://github.com/DTStack/molecule/blob/927b7d39/src/components/search/index.tsx#L40)

---

### SplitPane

▸ **SplitPane**(`__namedParameters`): `Element`

#### Parameters

| Name                | Type                                                          |
| :------------------ | :------------------------------------------------------------ |
| `__namedParameters` | [`ISplitProps`](../interfaces/molecule.component.ISplitProps) |

#### Returns

`Element`

#### Defined in

[components/split/SplitPane.tsx:81](https://github.com/DTStack/molecule/blob/927b7d39/src/components/split/SplitPane.tsx#L81)

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

[components/menu/subMenu.tsx:41](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/subMenu.tsx#L41)

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

[components/tabs/tab.tsx:73](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/tab.tsx#L73)

---

### Tabs

▸ **Tabs**(`props`): `Element`

#### Parameters

| Name    | Type                                                        |
| :------ | :---------------------------------------------------------- |
| `props` | [`ITabsProps`](../interfaces/molecule.component.ITabsProps) |

#### Returns

`Element`

#### Defined in

[components/tabs/index.tsx:50](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L50)

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

[components/toolbar/index.tsx:10](https://github.com/DTStack/molecule/blob/927b7d39/src/components/toolbar/index.tsx#L10)

---

### Tooltip

▸ **Tooltip**(`__namedParameters`): `null` \| `Element`

#### Parameters

| Name                | Type                                                              |
| :------------------ | :---------------------------------------------------------------- |
| `__namedParameters` | [`IToolTipProps`](../interfaces/molecule.component.IToolTipProps) |

#### Returns

`null` \| `Element`

#### Defined in

[components/tooltip/index.tsx:9](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tooltip/index.tsx#L9)

---

### TreeView

▸ **TreeView**(`__namedParameters`): `Element`

#### Parameters

| Name                | Type                                                        |
| :------------------ | :---------------------------------------------------------- |
| `__namedParameters` | [`ITreeProps`](../interfaces/molecule.component.ITreeProps) |

#### Returns

`Element`

#### Defined in

[components/tree/index.tsx:83](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L83)

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

[components/contextMenu/index.tsx:12](https://github.com/DTStack/molecule/blob/927b7d39/src/components/contextMenu/index.tsx#L12)

---

### useContextView

▸ **useContextView**(`props?`): [`IContextView`](../interfaces/molecule.component.IContextView)

TODO: It's not a hook, don't begin with use

#### Parameters

| Name    | Type                                                                      |
| :------ | :------------------------------------------------------------------------ |
| `props` | [`IContextViewProps`](../interfaces/molecule.component.IContextViewProps) |

#### Returns

[`IContextView`](../interfaces/molecule.component.IContextView)

#### Defined in

[components/contextView/index.tsx:61](https://github.com/DTStack/molecule/blob/927b7d39/src/components/contextView/index.tsx#L61)

---

### useContextViewEle

▸ **useContextViewEle**(`props?`): `undefined` \| [`IContextView`](../interfaces/molecule.component.IContextView)

It's a hook used in functional component

#### Parameters

| Name     | Type                                                                      |
| :------- | :------------------------------------------------------------------------ |
| `props?` | [`IContextViewProps`](../interfaces/molecule.component.IContextViewProps) |

#### Returns

`undefined` \| [`IContextView`](../interfaces/molecule.component.IContextView)

#### Defined in

[components/contextView/index.tsx:46](https://github.com/DTStack/molecule/blob/927b7d39/src/components/contextView/index.tsx#L46)
