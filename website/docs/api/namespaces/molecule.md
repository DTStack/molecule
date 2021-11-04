---
id: 'molecule'
title: 'Namespace: molecule'
sidebar_label: 'molecule'
sidebar_position: 0
custom_edit_url: null
---

## Namespaces

-   [component](molecule.component)
-   [event](molecule.event)
-   [i18n](molecule.i18n)
-   [react](molecule.react)

## Enumerations

-   [ColorScheme](../enums/molecule.ColorScheme)

## Classes

-   [ActivityBarService](../classes/molecule.ActivityBarService)
-   [BuiltinService](../classes/molecule.BuiltinService)
-   [ColorThemeService](../classes/molecule.ColorThemeService)
-   [EditorService](../classes/molecule.EditorService)
-   [EditorTreeService](../classes/molecule.EditorTreeService)
-   [ExplorerService](../classes/molecule.ExplorerService)
-   [ExtensionService](../classes/molecule.ExtensionService)
-   [FolderTreeService](../classes/molecule.FolderTreeService)
-   [LayoutService](../classes/molecule.LayoutService)
-   [MenuBarService](../classes/molecule.MenuBarService)
-   [NotificationService](../classes/molecule.NotificationService)
-   [PanelService](../classes/molecule.PanelService)
-   [ProblemsService](../classes/molecule.ProblemsService)
-   [SearchService](../classes/molecule.SearchService)
-   [SettingsService](../classes/molecule.SettingsService)
-   [SidebarService](../classes/molecule.SidebarService)
-   [StatusBarService](../classes/molecule.StatusBarService)

## Interfaces

-   [IActivityBar](../interfaces/molecule.IActivityBar)
-   [IActivityBarController](../interfaces/molecule.IActivityBarController)
-   [IActivityBarItem](../interfaces/molecule.IActivityBarItem)
-   [IActivityBarService](../interfaces/molecule.IActivityBarService)
-   [IBuiltinService](../interfaces/molecule.IBuiltinService)
-   [IColorTheme](../interfaces/molecule.IColorTheme)
-   [IColorThemeService](../interfaces/molecule.IColorThemeService)
-   [IColors](../interfaces/molecule.IColors)
-   [IEditor](../interfaces/molecule.IEditor)
-   [IEditorController](../interfaces/molecule.IEditorController)
-   [IEditorGroup](../interfaces/molecule.IEditorGroup)
-   [IEditorService](../interfaces/molecule.IEditorService)
-   [IEditorTreeService](../interfaces/molecule.IEditorTreeService)
-   [IExplorerService](../interfaces/molecule.IExplorerService)
-   [IExtension](../interfaces/molecule.IExtension)
-   [IExtensionService](../interfaces/molecule.IExtensionService)
-   [IFolderTreeService](../interfaces/molecule.IFolderTreeService)
-   [ILayoutController](../interfaces/molecule.ILayoutController)
-   [ILayoutService](../interfaces/molecule.ILayoutService)
-   [IMenuBar](../interfaces/molecule.IMenuBar)
-   [IMenuBarController](../interfaces/molecule.IMenuBarController)
-   [IMenuBarService](../interfaces/molecule.IMenuBarService)
-   [INotification](../interfaces/molecule.INotification)
-   [INotificationController](../interfaces/molecule.INotificationController)
-   [INotificationItem](../interfaces/molecule.INotificationItem)
-   [INotificationService](../interfaces/molecule.INotificationService)
-   [IPanel](../interfaces/molecule.IPanel)
-   [IPanelController](../interfaces/molecule.IPanelController)
-   [IPanelService](../interfaces/molecule.IPanelService)
-   [IProblems](../interfaces/molecule.IProblems)
-   [IProblemsController](../interfaces/molecule.IProblemsController)
-   [IProblemsItem](../interfaces/molecule.IProblemsItem)
-   [IProblemsService](../interfaces/molecule.IProblemsService)
-   [ISearchService](../interfaces/molecule.ISearchService)
-   [ISettings](../interfaces/molecule.ISettings)
-   [ISettingsController](../interfaces/molecule.ISettingsController)
-   [ISettingsService](../interfaces/molecule.ISettingsService)
-   [ISideBarController](../interfaces/molecule.ISideBarController)
-   [ISidebar](../interfaces/molecule.ISidebar)
-   [ISidebarService](../interfaces/molecule.ISidebarService)
-   [IStatusBar](../interfaces/molecule.IStatusBar)
-   [IStatusBarController](../interfaces/molecule.IStatusBarController)
-   [IStatusBarItem](../interfaces/molecule.IStatusBarItem)
-   [IStatusBarService](../interfaces/molecule.IStatusBarService)
-   [IWorkbench](../interfaces/molecule.IWorkbench)
-   [TokenColor](../interfaces/molecule.TokenColor)

## Type aliases

### BuiltInSettingsTabType

Ƭ **BuiltInSettingsTabType**: `ReturnType`<typeof `modules.BuiltInSettingsTab`\>

#### Defined in

[src/services/settingsService.ts:21](https://github.com/DTStack/molecule/blob/b675cb9/src/services/settingsService.ts#L21)

---

### IBuiltinProps

Ƭ **IBuiltinProps**: `IBuiltinModuleProps` & `IBuiltinConstantProps`

#### Defined in

[src/services/builtinService/index.ts:23](https://github.com/DTStack/molecule/blob/b675cb9/src/services/builtinService/index.ts#L23)

## Variables

### BuiltInColorTheme

• **BuiltInColorTheme**: [`IColorTheme`](../interfaces/molecule.IColorTheme)

#### Defined in

[src/services/theme/colorThemeService.ts:58](https://github.com/DTStack/molecule/blob/b675cb9/src/services/theme/colorThemeService.ts#L58)

---

### DEFAULT_THEME_CLASS_NAME

• **DEFAULT_THEME_CLASS_NAME**: `string`

#### Defined in

[src/services/theme/colorThemeService.ts:64](https://github.com/DTStack/molecule/blob/b675cb9/src/services/theme/colorThemeService.ts#L64)

---

### activityBar

• **activityBar**: [`IActivityBarService`](../interfaces/molecule.IActivityBarService)

The activityBar service

#### Defined in

[src/molecule.api.ts:71](https://github.com/DTStack/molecule/blob/b675cb9/src/molecule.api.ts#L71)

---

### builtin

• **builtin**: [`BuiltinService`](../classes/molecule.BuiltinService)

#### Defined in

[src/molecule.api.ts:111](https://github.com/DTStack/molecule/blob/b675cb9/src/molecule.api.ts#L111)

---

### colorTheme

• **colorTheme**: [`IColorThemeService`](../interfaces/molecule.IColorThemeService)

The ColorTheme service

#### Defined in

[src/molecule.api.ts:102](https://github.com/DTStack/molecule/blob/b675cb9/src/molecule.api.ts#L102)

---

### editor

• **editor**: [`IEditorService`](../interfaces/molecule.IEditorService)

#### Defined in

[src/molecule.api.ts:90](https://github.com/DTStack/molecule/blob/b675cb9/src/molecule.api.ts#L90)

---

### editorTree

• **editorTree**: [`IEditorTreeService`](../interfaces/molecule.IEditorTreeService)

#### Defined in

[src/molecule.api.ts:83](https://github.com/DTStack/molecule/blob/b675cb9/src/molecule.api.ts#L83)

---

### explorer

• **explorer**: [`IExplorerService`](../interfaces/molecule.IExplorerService)

#### Defined in

[src/molecule.api.ts:75](https://github.com/DTStack/molecule/blob/b675cb9/src/molecule.api.ts#L75)

---

### extension

• **extension**: [`IExtensionService`](../interfaces/molecule.IExtensionService)

The Extension service

#### Defined in

[src/molecule.api.ts:116](https://github.com/DTStack/molecule/blob/b675cb9/src/molecule.api.ts#L116)

---

### folderTree

• **folderTree**: [`IFolderTreeService`](../interfaces/molecule.IFolderTreeService)

#### Defined in

[src/molecule.api.ts:79](https://github.com/DTStack/molecule/blob/b675cb9/src/molecule.api.ts#L79)

---

### il8n

• **il8n**: [`ILocaleService`](../interfaces/molecule.i18n.ILocaleService)

The locale service

#### Defined in

[src/molecule.api.ts:61](https://github.com/DTStack/molecule/blob/b675cb9/src/molecule.api.ts#L61)

---

### layout

• **layout**: [`ILayoutService`](../interfaces/molecule.ILayoutService)

The layout service

#### Defined in

[src/molecule.api.ts:66](https://github.com/DTStack/molecule/blob/b675cb9/src/molecule.api.ts#L66)

---

### menuBar

• **menuBar**: [`IMenuBarService`](../interfaces/molecule.IMenuBarService)

#### Defined in

[src/molecule.api.ts:89](https://github.com/DTStack/molecule/blob/b675cb9/src/molecule.api.ts#L89)

---

### notification

• **notification**: [`INotificationService`](../interfaces/molecule.INotificationService)

#### Defined in

[src/molecule.api.ts:93](https://github.com/DTStack/molecule/blob/b675cb9/src/molecule.api.ts#L93)

---

### panel

• **panel**: [`IPanelService`](../interfaces/molecule.IPanelService)

#### Defined in

[src/molecule.api.ts:92](https://github.com/DTStack/molecule/blob/b675cb9/src/molecule.api.ts#L92)

---

### problems

• **problems**: [`IProblemsService`](../interfaces/molecule.IProblemsService)

#### Defined in

[src/molecule.api.ts:97](https://github.com/DTStack/molecule/blob/b675cb9/src/molecule.api.ts#L97)

---

### search

• **search**: [`ISearchService`](../interfaces/molecule.ISearchService)

#### Defined in

[src/molecule.api.ts:87](https://github.com/DTStack/molecule/blob/b675cb9/src/molecule.api.ts#L87)

---

### settings

• **settings**: [`ISettingsService`](../interfaces/molecule.ISettingsService)

The Settings service

#### Defined in

[src/molecule.api.ts:109](https://github.com/DTStack/molecule/blob/b675cb9/src/molecule.api.ts#L109)

---

### sidebar

• **sidebar**: [`ISidebarService`](../interfaces/molecule.ISidebarService)

#### Defined in

[src/molecule.api.ts:88](https://github.com/DTStack/molecule/blob/b675cb9/src/molecule.api.ts#L88)

---

### statusBar

• **statusBar**: [`IStatusBarService`](../interfaces/molecule.IStatusBarService)

#### Defined in

[src/molecule.api.ts:91](https://github.com/DTStack/molecule/blob/b675cb9/src/molecule.api.ts#L91)

## Functions

### ActivityBar

▸ **ActivityBar**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                                                              |
| :------ | :-------------------------------------------------------------------------------------------------------------------------------- |
| `props` | [`IActivityBar`](../interfaces/molecule.IActivityBar) & [`IActivityBarController`](../interfaces/molecule.IActivityBarController) |

#### Returns

`Element`

#### Defined in

[src/workbench/activityBar/activityBar.tsx:21](https://github.com/DTStack/molecule/blob/b675cb9/src/workbench/activityBar/activityBar.tsx#L21)

---

### ActivityBarItem

▸ **ActivityBarItem**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                                                                      |
| :------ | :---------------------------------------------------------------------------------------------------------------------------------------- |
| `props` | [`IActivityBarItem`](../interfaces/molecule.IActivityBarItem) & [`IActivityBarController`](../interfaces/molecule.IActivityBarController) |

#### Returns

`Element`

#### Defined in

[src/workbench/activityBar/activityBarItem.tsx:19](https://github.com/DTStack/molecule/blob/b675cb9/src/workbench/activityBar/activityBarItem.tsx#L19)

---

### Editor

▸ **Editor**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                                          |
| :------ | :------------------------------------------------------------------------------------------------------------ |
| `props` | [`IEditor`](../interfaces/molecule.IEditor) & [`IEditorController`](../interfaces/molecule.IEditorController) |

#### Returns

`Element`

#### Defined in

[src/workbench/editor/editor.tsx:12](https://github.com/DTStack/molecule/blob/b675cb9/src/workbench/editor/editor.tsx#L12)

---

### EditorGroup

▸ **EditorGroup**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                  |
| :------ | :------------------------------------------------------------------------------------ |
| `props` | `IEditorGroupProps` & [`IEditorController`](../interfaces/molecule.IEditorController) |

#### Returns

`Element`

#### Defined in

[src/workbench/editor/group.tsx:27](https://github.com/DTStack/molecule/blob/b675cb9/src/workbench/editor/group.tsx#L27)

---

### MenuBar

▸ **MenuBar**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                                              |
| :------ | :---------------------------------------------------------------------------------------------------------------- |
| `props` | [`IMenuBar`](../interfaces/molecule.IMenuBar) & [`IMenuBarController`](../interfaces/molecule.IMenuBarController) |

#### Returns

`Element`

#### Defined in

[src/workbench/menuBar/menuBar.tsx:13](https://github.com/DTStack/molecule/blob/b675cb9/src/workbench/menuBar/menuBar.tsx#L13)

---

### Panel

▸ **Panel**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                                      |
| :------ | :-------------------------------------------------------------------------------------------------------- |
| `props` | [`IPanel`](../interfaces/molecule.IPanel) & [`IPanelController`](../interfaces/molecule.IPanelController) |

#### Returns

`Element`

#### Defined in

[src/workbench/panel/panel.tsx:14](https://github.com/DTStack/molecule/blob/b675cb9/src/workbench/panel/panel.tsx#L14)

---

### Sidebar

▸ **Sidebar**(`props`): `Element`

#### Parameters

| Name    | Type                                          |
| :------ | :-------------------------------------------- |
| `props` | [`ISidebar`](../interfaces/molecule.ISidebar) |

#### Returns

`Element`

#### Defined in

[src/workbench/sidebar/sidebar.tsx:33](https://github.com/DTStack/molecule/blob/b675cb9/src/workbench/sidebar/sidebar.tsx#L33)

---

### StatusBar

▸ **StatusBar**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                                                      |
| :------ | :------------------------------------------------------------------------------------------------------------------------ |
| `props` | [`IStatusBar`](../interfaces/molecule.IStatusBar) & [`IStatusBarController`](../interfaces/molecule.IStatusBarController) |

#### Returns

`Element`

#### Defined in

[src/workbench/statusBar/statusBar.tsx:18](https://github.com/DTStack/molecule/blob/b675cb9/src/workbench/statusBar/statusBar.tsx#L18)

---

### StatusItem

▸ **StatusItem**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                                                                      |
| :------ | :---------------------------------------------------------------------------------------------------------------------------------------- |
| `props` | [`IStatusBarItem`](../interfaces/molecule.IStatusBarItem)<`any`\> & [`IStatusBarController`](../interfaces/molecule.IStatusBarController) |

#### Returns

`Element`

#### Defined in

[src/workbench/statusBar/item.tsx:7](https://github.com/DTStack/molecule/blob/b675cb9/src/workbench/statusBar/item.tsx#L7)

---

### Workbench

▸ **Workbench**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                                                            |
| :------ | :------------------------------------------------------------------------------------------------------------------------------ |
| `props` | [`IWorkbench`](../interfaces/molecule.IWorkbench) & `ILayout` & [`ILayoutController`](../interfaces/molecule.ILayoutController) |

#### Returns

`Element`

#### Defined in

[src/workbench/workbench.tsx:34](https://github.com/DTStack/molecule/blob/b675cb9/src/workbench/workbench.tsx#L34)
