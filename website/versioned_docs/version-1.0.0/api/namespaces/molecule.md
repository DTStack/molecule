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
-   [model](molecule.model)
-   [monaco](molecule.monaco)
-   [react](molecule.react)

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
-   [LocaleService](../classes/molecule.LocaleService)
-   [MenuBarService](../classes/molecule.MenuBarService)
-   [NotificationService](../classes/molecule.NotificationService)
-   [PanelService](../classes/molecule.PanelService)
-   [ProblemsService](../classes/molecule.ProblemsService)
-   [SearchService](../classes/molecule.SearchService)
-   [SettingsService](../classes/molecule.SettingsService)
-   [SidebarService](../classes/molecule.SidebarService)
-   [StatusBarService](../classes/molecule.StatusBarService)

## Interfaces

-   [IActivityBarController](../interfaces/molecule.IActivityBarController)
-   [IActivityBarService](../interfaces/molecule.IActivityBarService)
-   [IBuiltinService](../interfaces/molecule.IBuiltinService)
-   [IColorThemeService](../interfaces/molecule.IColorThemeService)
-   [IEditorController](../interfaces/molecule.IEditorController)
-   [IEditorService](../interfaces/molecule.IEditorService)
-   [IEditorTreeService](../interfaces/molecule.IEditorTreeService)
-   [IExplorerService](../interfaces/molecule.IExplorerService)
-   [IExtensionService](../interfaces/molecule.IExtensionService)
-   [IFolderTreeService](../interfaces/molecule.IFolderTreeService)
-   [ILayoutController](../interfaces/molecule.ILayoutController)
-   [ILayoutService](../interfaces/molecule.ILayoutService)
-   [ILocale](../interfaces/molecule.ILocale)
-   [ILocaleService](../interfaces/molecule.ILocaleService)
-   [ILocalizeProps](../interfaces/molecule.ILocalizeProps)
-   [IMenuBarController](../interfaces/molecule.IMenuBarController)
-   [IMenuBarService](../interfaces/molecule.IMenuBarService)
-   [INotificationController](../interfaces/molecule.INotificationController)
-   [INotificationService](../interfaces/molecule.INotificationService)
-   [IPanelController](../interfaces/molecule.IPanelController)
-   [IPanelService](../interfaces/molecule.IPanelService)
-   [IProblemsController](../interfaces/molecule.IProblemsController)
-   [IProblemsService](../interfaces/molecule.IProblemsService)
-   [ISearchService](../interfaces/molecule.ISearchService)
-   [ISettingsController](../interfaces/molecule.ISettingsController)
-   [ISettingsService](../interfaces/molecule.ISettingsService)
-   [ISideBarController](../interfaces/molecule.ISideBarController)
-   [ISidebarService](../interfaces/molecule.ISidebarService)
-   [IStatusBarController](../interfaces/molecule.IStatusBarController)
-   [IStatusBarService](../interfaces/molecule.IStatusBarService)

## References

### IActivityBar

Re-exports [IActivityBar](../interfaces/molecule.model.IActivityBar)

---

### IActivityBarItem

Re-exports [IActivityBarItem](../interfaces/molecule.model.IActivityBarItem)

---

### IEditor

Re-exports [IEditor](../interfaces/molecule.model.IEditor)

---

### IEditorGroup

Re-exports [IEditorGroup](../interfaces/molecule.model.IEditorGroup)

---

### IMenuBar

Re-exports [IMenuBar](../interfaces/molecule.model.IMenuBar)

---

### INotification

Re-exports [INotification](../interfaces/molecule.model.INotification)

---

### INotificationItem

Re-exports [INotificationItem](../interfaces/molecule.model.INotificationItem)

---

### IPanel

Re-exports [IPanel](../interfaces/molecule.model.IPanel)

---

### IProblems

Re-exports [IProblems](../interfaces/molecule.model.IProblems)

---

### IProblemsItem

Re-exports [IProblemsItem](../interfaces/molecule.model.IProblemsItem)

---

### ISidebar

Re-exports [ISidebar](../interfaces/molecule.model.ISidebar)

---

### IStatusBar

Re-exports [IStatusBar](../interfaces/molecule.model.IStatusBar)

---

### IStatusBarItem

Re-exports [IStatusBarItem](../interfaces/molecule.model.IStatusBarItem)

---

### IWorkbench

Re-exports [IWorkbench](../interfaces/molecule.model.IWorkbench)

## Type aliases

### BuiltInSettingsTabType

Ƭ **BuiltInSettingsTabType**: `ReturnType`<typeof `modules.BuiltInSettingsTab`\>

#### Defined in

[services/settingsService.ts:21](https://github.com/DTStack/molecule/blob/ff1a27ef/src/services/settingsService.ts#L21)

---

### IBuiltinProps

Ƭ **IBuiltinProps**: `IBuiltinModuleProps` & `IBuiltinConstantProps`

#### Defined in

[services/builtinService/index.ts:23](https://github.com/DTStack/molecule/blob/ff1a27ef/src/services/builtinService/index.ts#L23)

## Variables

### activityBar

• **activityBar**: [`IActivityBarService`](../interfaces/molecule.IActivityBarService)

The activityBar service

#### Defined in

[molecule.api.ts:66](https://github.com/DTStack/molecule/blob/ff1a27ef/src/molecule.api.ts#L66)

---

### builtin

• **builtin**: [`BuiltinService`](../classes/molecule.BuiltinService)

#### Defined in

[molecule.api.ts:100](https://github.com/DTStack/molecule/blob/ff1a27ef/src/molecule.api.ts#L100)

---

### colorTheme

• **colorTheme**: [`IColorThemeService`](../interfaces/molecule.IColorThemeService)

The ColorTheme service

#### Defined in

[molecule.api.ts:92](https://github.com/DTStack/molecule/blob/ff1a27ef/src/molecule.api.ts#L92)

---

### editor

• **editor**: [`IEditorService`](../interfaces/molecule.IEditorService)

#### Defined in

[molecule.api.ts:81](https://github.com/DTStack/molecule/blob/ff1a27ef/src/molecule.api.ts#L81)

---

### editorTree

• **editorTree**: [`IEditorTreeService`](../interfaces/molecule.IEditorTreeService)

#### Defined in

[molecule.api.ts:75](https://github.com/DTStack/molecule/blob/ff1a27ef/src/molecule.api.ts#L75)

---

### explorer

• **explorer**: [`IExplorerService`](../interfaces/molecule.IExplorerService)

#### Defined in

[molecule.api.ts:69](https://github.com/DTStack/molecule/blob/ff1a27ef/src/molecule.api.ts#L69)

---

### extension

• **extension**: [`IExtensionService`](../interfaces/molecule.IExtensionService)

The Extension service

#### Defined in

[molecule.api.ts:105](https://github.com/DTStack/molecule/blob/ff1a27ef/src/molecule.api.ts#L105)

---

### folderTree

• **folderTree**: [`IFolderTreeService`](../interfaces/molecule.IFolderTreeService)

#### Defined in

[molecule.api.ts:72](https://github.com/DTStack/molecule/blob/ff1a27ef/src/molecule.api.ts#L72)

---

### i18n

• **i18n**: [`ILocaleService`](../interfaces/molecule.ILocaleService)

The locale service

#### Defined in

[molecule.api.ts:56](https://github.com/DTStack/molecule/blob/ff1a27ef/src/molecule.api.ts#L56)

---

### layout

• **layout**: [`ILayoutService`](../interfaces/molecule.ILayoutService)

The layout service

#### Defined in

[molecule.api.ts:61](https://github.com/DTStack/molecule/blob/ff1a27ef/src/molecule.api.ts#L61)

---

### menuBar

• **menuBar**: [`IMenuBarService`](../interfaces/molecule.IMenuBarService)

#### Defined in

[molecule.api.ts:80](https://github.com/DTStack/molecule/blob/ff1a27ef/src/molecule.api.ts#L80)

---

### monacoService

• **monacoService**: `IMonacoService`

#### Defined in

[molecule.api.ts:107](https://github.com/DTStack/molecule/blob/ff1a27ef/src/molecule.api.ts#L107)

---

### notification

• **notification**: [`INotificationService`](../interfaces/molecule.INotificationService)

#### Defined in

[molecule.api.ts:84](https://github.com/DTStack/molecule/blob/ff1a27ef/src/molecule.api.ts#L84)

---

### panel

• **panel**: [`IPanelService`](../interfaces/molecule.IPanelService)

#### Defined in

[molecule.api.ts:83](https://github.com/DTStack/molecule/blob/ff1a27ef/src/molecule.api.ts#L83)

---

### problems

• **problems**: [`IProblemsService`](../interfaces/molecule.IProblemsService)

#### Defined in

[molecule.api.ts:87](https://github.com/DTStack/molecule/blob/ff1a27ef/src/molecule.api.ts#L87)

---

### search

• **search**: [`ISearchService`](../interfaces/molecule.ISearchService)

#### Defined in

[molecule.api.ts:78](https://github.com/DTStack/molecule/blob/ff1a27ef/src/molecule.api.ts#L78)

---

### settings

• **settings**: [`ISettingsService`](../interfaces/molecule.ISettingsService)

The Settings service

#### Defined in

[molecule.api.ts:98](https://github.com/DTStack/molecule/blob/ff1a27ef/src/molecule.api.ts#L98)

---

### sidebar

• **sidebar**: [`ISidebarService`](../interfaces/molecule.ISidebarService)

#### Defined in

[molecule.api.ts:79](https://github.com/DTStack/molecule/blob/ff1a27ef/src/molecule.api.ts#L79)

---

### statusBar

• **statusBar**: [`IStatusBarService`](../interfaces/molecule.IStatusBarService)

#### Defined in

[molecule.api.ts:82](https://github.com/DTStack/molecule/blob/ff1a27ef/src/molecule.api.ts#L82)

## Functions

### ActivityBar

▸ **ActivityBar**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                                                                    |
| :------ | :-------------------------------------------------------------------------------------------------------------------------------------- |
| `props` | [`IActivityBar`](../interfaces/molecule.model.IActivityBar) & [`IActivityBarController`](../interfaces/molecule.IActivityBarController) |

#### Returns

`Element`

#### Defined in

[workbench/activityBar/activityBar.tsx:22](https://github.com/DTStack/molecule/blob/ff1a27ef/src/workbench/activityBar/activityBar.tsx#L22)

---

### ActivityBarItem

▸ **ActivityBarItem**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                                                                            |
| :------ | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| `props` | [`IActivityBarItem`](../interfaces/molecule.model.IActivityBarItem) & [`IActivityBarController`](../interfaces/molecule.IActivityBarController) |

#### Returns

`Element`

#### Defined in

[workbench/activityBar/activityBarItem.tsx:17](https://github.com/DTStack/molecule/blob/ff1a27ef/src/workbench/activityBar/activityBarItem.tsx#L17)

---

### Editor

▸ **Editor**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                                                                                      |
| :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `props` | { `editor?`: [`IEditor`](../interfaces/molecule.model.IEditor) ; `layout?`: `ILayout` } & [`IEditorController`](../interfaces/molecule.IEditorController) |

#### Returns

`Element`

#### Defined in

[workbench/editor/editor.tsx:14](https://github.com/DTStack/molecule/blob/ff1a27ef/src/workbench/editor/editor.tsx#L14)

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

[workbench/editor/group.tsx:28](https://github.com/DTStack/molecule/blob/ff1a27ef/src/workbench/editor/group.tsx#L28)

---

### MenuBar

▸ **MenuBar**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                                                    |
| :------ | :---------------------------------------------------------------------------------------------------------------------- |
| `props` | [`IMenuBar`](../interfaces/molecule.model.IMenuBar) & [`IMenuBarController`](../interfaces/molecule.IMenuBarController) |

#### Returns

`Element`

#### Defined in

[workbench/menuBar/menuBar.tsx:15](https://github.com/DTStack/molecule/blob/ff1a27ef/src/workbench/menuBar/menuBar.tsx#L15)

---

### Panel

▸ **Panel**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                                            |
| :------ | :-------------------------------------------------------------------------------------------------------------- |
| `props` | [`IPanel`](../interfaces/molecule.model.IPanel) & [`IPanelController`](../interfaces/molecule.IPanelController) |

#### Returns

`Element`

#### Defined in

[workbench/panel/panel.tsx:14](https://github.com/DTStack/molecule/blob/ff1a27ef/src/workbench/panel/panel.tsx#L14)

---

### Sidebar

▸ **Sidebar**(`props`): `Element`

#### Parameters

| Name    | Type                                                |
| :------ | :-------------------------------------------------- |
| `props` | [`ISidebar`](../interfaces/molecule.model.ISidebar) |

#### Returns

`Element`

#### Defined in

[workbench/sidebar/sidebar.tsx:33](https://github.com/DTStack/molecule/blob/ff1a27ef/src/workbench/sidebar/sidebar.tsx#L33)

---

### StatusBar

▸ **StatusBar**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                                                            |
| :------ | :------------------------------------------------------------------------------------------------------------------------------ |
| `props` | [`IStatusBar`](../interfaces/molecule.model.IStatusBar) & [`IStatusBarController`](../interfaces/molecule.IStatusBarController) |

#### Returns

`Element`

#### Defined in

[workbench/statusBar/statusBar.tsx:18](https://github.com/DTStack/molecule/blob/ff1a27ef/src/workbench/statusBar/statusBar.tsx#L18)

---

### StatusItem

▸ **StatusItem**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                                                                            |
| :------ | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| `props` | [`IStatusBarItem`](../interfaces/molecule.model.IStatusBarItem)<`any`\> & [`IStatusBarController`](../interfaces/molecule.IStatusBarController) |

#### Returns

`Element`

#### Defined in

[workbench/statusBar/item.tsx:8](https://github.com/DTStack/molecule/blob/ff1a27ef/src/workbench/statusBar/item.tsx#L8)

---

### Workbench

▸ **Workbench**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                                                                  |
| :------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| `props` | [`IWorkbench`](../interfaces/molecule.model.IWorkbench) & `ILayout` & [`ILayoutController`](../interfaces/molecule.ILayoutController) |

#### Returns

`Element`

#### Defined in

[workbench/workbench.tsx:53](https://github.com/DTStack/molecule/blob/ff1a27ef/src/workbench/workbench.tsx#L53)

---

### localize

▸ **localize**(`sourceKey`, `defaultValue`, ...`args`): `any`

Returns the international text located by source key，or the default value if it is not find
For examples:

```ts
localize('id', 'default value'); // hello ${i}, ${i}
localize('id', 'default value', 'world'); // hello world, ${i}
localize('id', 'default value', 'world', 'molecule'); // hello world, molecule
```

#### Parameters

| Name           | Type       | Description                                                                      |
| :------------- | :--------- | :------------------------------------------------------------------------------- |
| `sourceKey`    | `string`   | The key value located in the source international text                           |
| `defaultValue` | `string`   | The default value to be used when not find the international text                |
| `...args`      | `string`[] | If provided, it will used as the values to be replaced in the international text |

#### Returns

`any`

#### Defined in

[i18n/localize.tsx:24](https://github.com/DTStack/molecule/blob/ff1a27ef/src/i18n/localize.tsx#L24)
