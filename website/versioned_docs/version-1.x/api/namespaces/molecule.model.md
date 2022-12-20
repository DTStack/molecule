---
id: 'molecule.model'
title: 'Namespace: model'
sidebar_label: 'model'
custom_edit_url: null
---

[molecule](molecule).model

## Enumerations

-   [ActivityBarEvent](../enums/molecule.model.ActivityBarEvent)
-   [AuxiliaryEventKind](../enums/molecule.model.AuxiliaryEventKind)
-   [ColorScheme](../enums/molecule.model.ColorScheme)
-   [ColorThemeEvent](../enums/molecule.model.ColorThemeEvent)
-   [ColorThemeMode](../enums/molecule.model.ColorThemeMode)
-   [EditorEvent](../enums/molecule.model.EditorEvent)
-   [EditorTreeEvent](../enums/molecule.model.EditorTreeEvent)
-   [ExplorerEvent](../enums/molecule.model.ExplorerEvent)
-   [FileTypes](../enums/molecule.model.FileTypes)
-   [Float](../enums/molecule.model.Float)
-   [FolderTreeEvent](../enums/molecule.model.FolderTreeEvent)
-   [IContributeType](../enums/molecule.model.IContributeType)
-   [IExtensionType](../enums/molecule.model.IExtensionType)
-   [MarkerSeverity](../enums/molecule.model.MarkerSeverity)
-   [MenuBarEvent](../enums/molecule.model.MenuBarEvent)
-   [NotificationStatus](../enums/molecule.model.NotificationStatus)
-   [PanelEvent](../enums/molecule.model.PanelEvent)
-   [ProblemsEvent](../enums/molecule.model.ProblemsEvent)
-   [SearchEvent](../enums/molecule.model.SearchEvent)
-   [SettingsEvent](../enums/molecule.model.SettingsEvent)
-   [StatusBarEvent](../enums/molecule.model.StatusBarEvent)

## Classes

-   [ActivityBarModel](../classes/molecule.model.ActivityBarModel)
-   [AuxiliaryModel](../classes/molecule.model.AuxiliaryModel)
-   [EditorGroupModel](../classes/molecule.model.EditorGroupModel)
-   [EditorModel](../classes/molecule.model.EditorModel)
-   [EditorTree](../classes/molecule.model.EditorTree)
-   [IExplorerModel](../classes/molecule.model.IExplorerModel)
-   [IFolderTreeModel](../classes/molecule.model.IFolderTreeModel)
-   [MenuBarModel](../classes/molecule.model.MenuBarModel)
-   [NotificationModel](../classes/molecule.model.NotificationModel)
-   [PanelModel](../classes/molecule.model.PanelModel)
-   [ProblemsModel](../classes/molecule.model.ProblemsModel)
-   [SearchModel](../classes/molecule.model.SearchModel)
-   [SettingsModel](../classes/molecule.model.SettingsModel)
-   [SidebarModel](../classes/molecule.model.SidebarModel)
-   [StatusBarModel](../classes/molecule.model.StatusBarModel)
-   [TreeNodeModel](../classes/molecule.model.TreeNodeModel)

## Interfaces

-   [BuiltInEditorTabDataType](../interfaces/molecule.model.BuiltInEditorTabDataType)
-   [IActivityBar](../interfaces/molecule.model.IActivityBar)
-   [IActivityBarItem](../interfaces/molecule.model.IActivityBarItem)
-   [IActivityMenuItemProps](../interfaces/molecule.model.IActivityMenuItemProps)
-   [IAuxiliaryBar](../interfaces/molecule.model.IAuxiliaryBar)
-   [IColorTheme](../interfaces/molecule.model.IColorTheme)
-   [IColors](../interfaces/molecule.model.IColors)
-   [IContribute](../interfaces/molecule.model.IContribute)
-   [IEditor](../interfaces/molecule.model.IEditor)
-   [IEditorAction](../interfaces/molecule.model.IEditorAction)
-   [IEditorActionsProps](../interfaces/molecule.model.IEditorActionsProps)
-   [IEditorGroup](../interfaces/molecule.model.IEditorGroup)
-   [IEditorTab](../interfaces/molecule.model.IEditorTab)
-   [IExplorer](../interfaces/molecule.model.IExplorer)
-   [IExplorerPanelItem](../interfaces/molecule.model.IExplorerPanelItem)
-   [IExtension](../interfaces/molecule.model.IExtension)
-   [IFolderInputEvent](../interfaces/molecule.model.IFolderInputEvent)
-   [IFolderTree](../interfaces/molecule.model.IFolderTree)
-   [IFolderTreeNodeProps](../interfaces/molecule.model.IFolderTreeNodeProps)
-   [IFolderTreeSubItem](../interfaces/molecule.model.IFolderTreeSubItem)
-   [IIconTheme](../interfaces/molecule.model.IIconTheme)
-   [IMenuBar](../interfaces/molecule.model.IMenuBar)
-   [IMenuBarItem](../interfaces/molecule.model.IMenuBarItem)
-   [INotification](../interfaces/molecule.model.INotification)
-   [INotificationItem](../interfaces/molecule.model.INotificationItem)
-   [IOutput](../interfaces/molecule.model.IOutput)
-   [IPanel](../interfaces/molecule.model.IPanel)
-   [IPanelItem](../interfaces/molecule.model.IPanelItem)
-   [IProblems](../interfaces/molecule.model.IProblems)
-   [IProblemsItem](../interfaces/molecule.model.IProblemsItem)
-   [IProblemsTreeNode](../interfaces/molecule.model.IProblemsTreeNode)
-   [IRelatedInformation](../interfaces/molecule.model.IRelatedInformation)
-   [ISearchProps](../interfaces/molecule.model.ISearchProps)
-   [ISettings](../interfaces/molecule.model.ISettings)
-   [ISidebar](../interfaces/molecule.model.ISidebar)
-   [ISidebarPane](../interfaces/molecule.model.ISidebarPane)
-   [ISimpleKeybinding](../interfaces/molecule.model.ISimpleKeybinding)
-   [IStatusBar](../interfaces/molecule.model.IStatusBar)
-   [IStatusBarItem](../interfaces/molecule.model.IStatusBarItem)
-   [IWorkbench](../interfaces/molecule.model.IWorkbench)
-   [TokenColor](../interfaces/molecule.model.TokenColor)

## Type Aliases

### FileType

Ƭ **FileType**: keyof typeof [`FileTypes`](../enums/molecule.model.FileTypes)

#### Defined in

[model/workbench/explorer/folderTree.tsx:13](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/explorer/folderTree.tsx#L13)

---

### IAuxiliaryBarMode

Ƭ **IAuxiliaryBarMode**: `"default"` \| `"tabs"`

#### Defined in

[model/workbench/auxiliaryBar.ts:8](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/auxiliaryBar.ts#L8)

---

### IAuxiliaryData

Ƭ **IAuxiliaryData**: `Object`

#### Type declaration

| Name    | Type              |
| :------ | :---------------- |
| `key`   | `UniqueId`        |
| `title` | `React.ReactNode` |

#### Defined in

[model/workbench/auxiliaryBar.ts:10](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/auxiliaryBar.ts#L10)

---

### IEditorOptions

Ƭ **IEditorOptions**: `MonacoEditor.IEditorOptions` & `MonacoEditor.IGlobalEditorOptions`

#### Defined in

[model/workbench/editor.ts:30](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/editor.ts#L30)

---

### RenderFunctionProps

Ƭ **RenderFunctionProps**: (`props`: `any`) => `React.ReactNode`

#### Type declaration

▸ (`props`): `React.ReactNode`

##### Parameters

| Name    | Type  |
| :------ | :---- |
| `props` | `any` |

##### Returns

`React.ReactNode`

#### Defined in

[model/workbench/explorer/explorer.tsx:13](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/explorer/explorer.tsx#L13)

## Variables

### KeyCodeString

• `Const` **KeyCodeString**: `Partial`<{ [key in KeyCode]: string }\>

#### Defined in

[model/keybinding.ts:3](https://github.com/DTStack/molecule/blob/927b7d39/src/model/keybinding.ts#L3)
