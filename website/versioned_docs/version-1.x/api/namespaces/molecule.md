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
-   [AuxiliaryBarService](../classes/molecule.AuxiliaryBarService)
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
-   [IAuxiliaryBarService](../interfaces/molecule.IAuxiliaryBarService)
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

## Type Aliases

### BuiltInSettingsTabType

Ƭ **BuiltInSettingsTabType**: `ReturnType`<typeof `modules.BuiltInSettingsTab`\>

#### Defined in

[services/settingsService.ts:21](https://github.com/DTStack/molecule/blob/927b7d39/src/services/settingsService.ts#L21)

---

### IBuiltinProps

Ƭ **IBuiltinProps**: `IBuiltinModuleProps` & `IBuiltinConstantProps`

#### Defined in

[services/builtinService/index.ts:23](https://github.com/DTStack/molecule/blob/927b7d39/src/services/builtinService/index.ts#L23)

## Variables

### activityBar

• `Const` **activityBar**: [`IActivityBarService`](../interfaces/molecule.IActivityBarService)

The activityBar service

#### Defined in

[molecule.api.ts:68](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L68)

---

### auxiliaryBar

• `Const` **auxiliaryBar**: [`IAuxiliaryBarService`](../interfaces/molecule.IAuxiliaryBarService)

#### Defined in

[molecule.api.ts:71](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L71)

---

### builtin

• `Const` **builtin**: [`BuiltinService`](../classes/molecule.BuiltinService)

#### Defined in

[molecule.api.ts:105](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L105)

---

### colorTheme

• `Const` **colorTheme**: [`IColorThemeService`](../interfaces/molecule.IColorThemeService)

The ColorTheme service

#### Defined in

[molecule.api.ts:97](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L97)

---

### editor

• `Const` **editor**: [`IEditorService`](../interfaces/molecule.IEditorService)

#### Defined in

[molecule.api.ts:86](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L86)

---

### editorTree

• `Const` **editorTree**: [`IEditorTreeService`](../interfaces/molecule.IEditorTreeService)

#### Defined in

[molecule.api.ts:80](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L80)

---

### explorer

• `Const` **explorer**: [`IExplorerService`](../interfaces/molecule.IExplorerService)

#### Defined in

[molecule.api.ts:74](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L74)

---

### extension

• `Const` **extension**: [`IExtensionService`](../interfaces/molecule.IExtensionService)

The Extension service

#### Defined in

[molecule.api.ts:110](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L110)

---

### folderTree

• `Const` **folderTree**: [`IFolderTreeService`](../interfaces/molecule.IFolderTreeService)

#### Defined in

[molecule.api.ts:77](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L77)

---

### i18n

• `Const` **i18n**: [`ILocaleService`](../interfaces/molecule.ILocaleService)

The locale service

#### Defined in

[molecule.api.ts:58](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L58)

---

### layout

• `Const` **layout**: [`ILayoutService`](../interfaces/molecule.ILayoutService)

The layout service

#### Defined in

[molecule.api.ts:63](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L63)

---

### menuBar

• `Const` **menuBar**: [`IMenuBarService`](../interfaces/molecule.IMenuBarService)

#### Defined in

[molecule.api.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L85)

---

### monacoService

• `Const` **monacoService**: `IMonacoService`

#### Defined in

[molecule.api.ts:112](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L112)

---

### notification

• `Const` **notification**: [`INotificationService`](../interfaces/molecule.INotificationService)

#### Defined in

[molecule.api.ts:89](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L89)

---

### panel

• `Const` **panel**: [`IPanelService`](../interfaces/molecule.IPanelService)

#### Defined in

[molecule.api.ts:88](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L88)

---

### problems

• `Const` **problems**: [`IProblemsService`](../interfaces/molecule.IProblemsService)

#### Defined in

[molecule.api.ts:92](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L92)

---

### search

• `Const` **search**: [`ISearchService`](../interfaces/molecule.ISearchService)

#### Defined in

[molecule.api.ts:83](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L83)

---

### settings

• `Const` **settings**: [`ISettingsService`](../interfaces/molecule.ISettingsService)

The Settings service

#### Defined in

[molecule.api.ts:103](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L103)

---

### sidebar

• `Const` **sidebar**: [`ISidebarService`](../interfaces/molecule.ISidebarService)

#### Defined in

[molecule.api.ts:84](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L84)

---

### statusBar

• `Const` **statusBar**: [`IStatusBarService`](../interfaces/molecule.IStatusBarService)

#### Defined in

[molecule.api.ts:87](https://github.com/DTStack/molecule/blob/927b7d39/src/molecule.api.ts#L87)

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

[workbench/activityBar/activityBar.tsx:22](https://github.com/DTStack/molecule/blob/927b7d39/src/workbench/activityBar/activityBar.tsx#L22)

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

[workbench/activityBar/activityBarItem.tsx:17](https://github.com/DTStack/molecule/blob/927b7d39/src/workbench/activityBar/activityBarItem.tsx#L17)

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

[workbench/editor/editor.tsx:14](https://github.com/DTStack/molecule/blob/927b7d39/src/workbench/editor/editor.tsx#L14)

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

[workbench/editor/group.tsx:24](https://github.com/DTStack/molecule/blob/927b7d39/src/workbench/editor/group.tsx#L24)

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

[workbench/menuBar/menuBar.tsx:15](https://github.com/DTStack/molecule/blob/927b7d39/src/workbench/menuBar/menuBar.tsx#L15)

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

[workbench/panel/panel.tsx:13](https://github.com/DTStack/molecule/blob/927b7d39/src/workbench/panel/panel.tsx#L13)

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

[workbench/sidebar/sidebar.tsx:33](https://github.com/DTStack/molecule/blob/927b7d39/src/workbench/sidebar/sidebar.tsx#L33)

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

[workbench/statusBar/statusBar.tsx:18](https://github.com/DTStack/molecule/blob/927b7d39/src/workbench/statusBar/statusBar.tsx#L18)

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

[workbench/statusBar/item.tsx:8](https://github.com/DTStack/molecule/blob/927b7d39/src/workbench/statusBar/item.tsx#L8)

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

[workbench/workbench.tsx:54](https://github.com/DTStack/molecule/blob/927b7d39/src/workbench/workbench.tsx#L54)

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

[i18n/localize.tsx:24](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localize.tsx#L24)
