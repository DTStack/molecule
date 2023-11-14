---
id: 'molecule.BuiltinService'
title: 'Class: BuiltinService'
sidebar_label: 'BuiltinService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).BuiltinService

## Implements

-   [`IBuiltinService`](../interfaces/molecule.IBuiltinService)

## Constructors

### constructor

• **new BuiltinService**()

#### Defined in

[src/services/builtinService/index.ts:61](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/builtinService/index.ts#L61)

## Properties

### builtinConstants

• `Private` **builtinConstants**: `Map`<`string`, `IBuiltinConstantProps`\>

#### Defined in

[src/services/builtinService/index.ts:59](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/builtinService/index.ts#L59)

---

### builtinModules

• `Private` **builtinModules**: `Map`<`string`, `IBuiltinModuleProps`<`any`\>\>

#### Defined in

[src/services/builtinService/index.ts:60](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/builtinService/index.ts#L60)

## Methods

### addConstant

▸ `Private` **addConstant**(`constant`): `void`

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `constant`       | `Object` |
| `constant.id`    | `string` |
| `constant.value` | `string` |

#### Returns

`void`

#### Defined in

[src/services/builtinService/index.ts:77](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/builtinService/index.ts#L77)

---

### addModules

▸ `Private` **addModules**<`T`\>(`module`): `void`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name            | Type      |
| :-------------- | :-------- |
| `module`        | `Object`  |
| `module.id`     | `string`  |
| `module.module` | () => `T` |

#### Returns

`void`

#### Defined in

[src/services/builtinService/index.ts:85](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/builtinService/index.ts#L85)

---

### getConstant

▸ **getConstant**(`id`): `undefined` \| `IBuiltinConstantProps`

Get the specific constant by id

#### Parameters

| Name | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :--- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id` | `"PANEL_PROBLEMS"` \| `"STATUS_PROBLEMS"` \| `"SAMPLE_FOLDER_PANEL_ID"` \| `"EDITOR_PANEL_ID"` \| `"OUTLINE_PANEL_ID"` \| `"OUTLINE_PANEL_MORE_DESC"` \| `"EXPLORER_ACTIVITY_ITEM"` \| `"EXPLORER_ACTION_TITLE"` \| `"EXPLORER_TOGGLE_VERTICAL"` \| `"EXPLORER_TOGGLE_SAVE_ALL"` \| `"EXPLORER_TOGGLE_CLOSE_ALL_EDITORS"` \| `"EXPLORER_TOGGLE_SAVE_GROUP"` \| `"EXPLORER_TOGGLE_CLOSE_GROUP_EDITORS"` \| `"NEW_FILE_COMMAND_ID"` \| `"NEW_FOLDER_COMMAND_ID"` \| `"RENAME_COMMAND_ID"` \| `"REMOVE_COMMAND_ID"` \| `"DELETE_COMMAND_ID"` \| `"OPEN_TO_SIDE_COMMAND_ID"` \| `"FIND_IN_WORKSPACE_ID"` \| `"DOWNLOAD_COMMAND_ID"` \| `"EDITOR_MENU_CLOSE_TO_RIGHT"` \| `"EDITOR_MENU_CLOSE_TO_LEFT"` \| `"EDITOR_MENU_CLOSE_ALL"` \| `"EDITOR_MENU_CLOSE_OTHERS"` \| `"EDITOR_MENU_CLOSE_SAVED"` \| `"EDITOR_MENU_CLOSE"` \| `"EDITOR_MENU_SHOW_OPENEDITORS"` \| `"EDITOR_MENU_SPLIT"` \| `"SETTING_ID"` \| `"PROBLEM_MODEL_ID"` \| `"PROBLEM_MODEL_NAME"` \| `"NOTIFICATION_CLEAR_ALL_ID"` \| `"NOTIFICATION_HIDE_ID"` \| `"NOTIFICATION_MODEL_ID"` \| `"NOTIFICATION_MODEL_NAME"` \| `"STATUS_BAR_HIDE_ID"` \| `"SEARCH_CASE_SENSITIVE_COMMAND_ID"` \| `"SEARCH_WHOLE_WORD_COMMAND_ID"` \| `"SEARCH_REGULAR_EXPRESSION_COMMAND_ID"` \| `"SEARCH_PRESERVE_CASE_COMMAND_ID"` \| `"SEARCH_REPLACE_ALL_COMMAND_ID"` \| `"SEARCH_ACTIVITY_ITEM"` \| `"SEARCH_TOOLBAR_REFRESH"` \| `"SEARCH_TOOLBAR_CLEAR"` \| `"SEARCH_TOOLBAR_COLLAPSE"` \| `"PANEL_TOOLBOX_CLOSE"` \| `"PANEL_TOOLBOX_RESIZE"` \| `"PANEL_TOOLBOX_RESTORE_SIZE"` \| `"PANEL_OUTPUT"` \| `"MENU_FILE_OPEN"` \| `"MENU_QUICK_COMMAND"` \| `"MENU_VIEW_MENUBAR"` \| `"MENU_VIEW_ACTIVITYBAR"` \| `"MENU_VIEW_STATUSBAR"` \| `"MENU_VIEW_PANEL"` \| `"ACTION_QUICK_COMMAND"` \| `"ACTION_QUICK_SELECT_ALL"` \| `"ACTION_QUICK_COPY_LINE_UP"` \| `"ACTION_QUICK_UNDO"` \| `"ACTION_QUICK_REDO"` \| `"ACTION_QUICK_CREATE_FILE"` \| `"ACTION_QUICK_CREATE_FOLDER"` \| `"ACTION_QUICK_ACCESS_SETTINGS"` \| `"ACTION_SELECT_THEME"` \| `"ACTION_SELECT_LOCALE"` \| `"ACTIVITY_BAR_GLOBAL_SETTINGS"` \| `"ACTIVITY_BAR_GLOBAL_ACCOUNT"` \| `"CONTEXT_MENU_MENU"` \| `"CONTEXT_MENU_EXPLORER"` \| `"CONTEXT_MENU_SEARCH"` \| `"CONTEXT_MENU_HIDE"` \| `"MENUBAR_MODE_HORIZONTAL"` \| `"MENUBAR_MODE_VERTICAL"` \| `"MENUBAR_MENU_MODE_DIVIDER"` |

#### Returns

`undefined` \| `IBuiltinConstantProps`

#### Implementation of

[IBuiltinService](../interfaces/molecule.IBuiltinService).[getConstant](../interfaces/molecule.IBuiltinService#getconstant)

#### Defined in

[src/services/builtinService/index.ts:93](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/builtinService/index.ts#L93)

---

### getConstants

▸ **getConstants**(): `Record`<`Partial`<`"PANEL_PROBLEMS"` \| `"STATUS_PROBLEMS"` \| `"SAMPLE_FOLDER_PANEL_ID"` \| `"EDITOR_PANEL_ID"` \| `"OUTLINE_PANEL_ID"` \| `"OUTLINE_PANEL_MORE_DESC"` \| `"EXPLORER_ACTIVITY_ITEM"` \| `"EXPLORER_ACTION_TITLE"` \| `"EXPLORER_TOGGLE_VERTICAL"` \| `"EXPLORER_TOGGLE_SAVE_ALL"` \| `"EXPLORER_TOGGLE_CLOSE_ALL_EDITORS"` \| `"EXPLORER_TOGGLE_SAVE_GROUP"` \| `"EXPLORER_TOGGLE_CLOSE_GROUP_EDITORS"` \| `"NEW_FILE_COMMAND_ID"` \| `"NEW_FOLDER_COMMAND_ID"` \| `"RENAME_COMMAND_ID"` \| `"REMOVE_COMMAND_ID"` \| `"DELETE_COMMAND_ID"` \| `"OPEN_TO_SIDE_COMMAND_ID"` \| `"FIND_IN_WORKSPACE_ID"` \| `"DOWNLOAD_COMMAND_ID"` \| `"EDITOR_MENU_CLOSE_TO_RIGHT"` \| `"EDITOR_MENU_CLOSE_TO_LEFT"` \| `"EDITOR_MENU_CLOSE_ALL"` \| `"EDITOR_MENU_CLOSE_OTHERS"` \| `"EDITOR_MENU_CLOSE_SAVED"` \| `"EDITOR_MENU_CLOSE"` \| `"EDITOR_MENU_SHOW_OPENEDITORS"` \| `"EDITOR_MENU_SPLIT"` \| `"SETTING_ID"` \| `"PROBLEM_MODEL_ID"` \| `"PROBLEM_MODEL_NAME"` \| `"NOTIFICATION_CLEAR_ALL_ID"` \| `"NOTIFICATION_HIDE_ID"` \| `"NOTIFICATION_MODEL_ID"` \| `"NOTIFICATION_MODEL_NAME"` \| `"STATUS_BAR_HIDE_ID"` \| `"SEARCH_CASE_SENSITIVE_COMMAND_ID"` \| `"SEARCH_WHOLE_WORD_COMMAND_ID"` \| `"SEARCH_REGULAR_EXPRESSION_COMMAND_ID"` \| `"SEARCH_PRESERVE_CASE_COMMAND_ID"` \| `"SEARCH_REPLACE_ALL_COMMAND_ID"` \| `"SEARCH_ACTIVITY_ITEM"` \| `"SEARCH_TOOLBAR_REFRESH"` \| `"SEARCH_TOOLBAR_CLEAR"` \| `"SEARCH_TOOLBAR_COLLAPSE"` \| `"PANEL_TOOLBOX_CLOSE"` \| `"PANEL_TOOLBOX_RESIZE"` \| `"PANEL_TOOLBOX_RESTORE_SIZE"` \| `"PANEL_OUTPUT"` \| `"MENU_FILE_OPEN"` \| `"MENU_QUICK_COMMAND"` \| `"MENU_VIEW_MENUBAR"` \| `"MENU_VIEW_ACTIVITYBAR"` \| `"MENU_VIEW_STATUSBAR"` \| `"MENU_VIEW_PANEL"` \| `"ACTION_QUICK_COMMAND"` \| `"ACTION_QUICK_SELECT_ALL"` \| `"ACTION_QUICK_COPY_LINE_UP"` \| `"ACTION_QUICK_UNDO"` \| `"ACTION_QUICK_REDO"` \| `"ACTION_QUICK_CREATE_FILE"` \| `"ACTION_QUICK_CREATE_FOLDER"` \| `"ACTION_QUICK_ACCESS_SETTINGS"` \| `"ACTION_SELECT_THEME"` \| `"ACTION_SELECT_LOCALE"` \| `"ACTIVITY_BAR_GLOBAL_SETTINGS"` \| `"ACTIVITY_BAR_GLOBAL_ACCOUNT"` \| `"CONTEXT_MENU_MENU"` \| `"CONTEXT_MENU_EXPLORER"` \| `"CONTEXT_MENU_SEARCH"` \| `"CONTEXT_MENU_HIDE"` \| `"MENUBAR_MODE_HORIZONTAL"` \| `"MENUBAR_MODE_VERTICAL"` \| `"MENUBAR_MENU_MODE_DIVIDER"`\>, `undefined` \| `string`\>

Get all constants

#### Returns

`Record`<`Partial`<`"PANEL_PROBLEMS"` \| `"STATUS_PROBLEMS"` \| `"SAMPLE_FOLDER_PANEL_ID"` \| `"EDITOR_PANEL_ID"` \| `"OUTLINE_PANEL_ID"` \| `"OUTLINE_PANEL_MORE_DESC"` \| `"EXPLORER_ACTIVITY_ITEM"` \| `"EXPLORER_ACTION_TITLE"` \| `"EXPLORER_TOGGLE_VERTICAL"` \| `"EXPLORER_TOGGLE_SAVE_ALL"` \| `"EXPLORER_TOGGLE_CLOSE_ALL_EDITORS"` \| `"EXPLORER_TOGGLE_SAVE_GROUP"` \| `"EXPLORER_TOGGLE_CLOSE_GROUP_EDITORS"` \| `"NEW_FILE_COMMAND_ID"` \| `"NEW_FOLDER_COMMAND_ID"` \| `"RENAME_COMMAND_ID"` \| `"REMOVE_COMMAND_ID"` \| `"DELETE_COMMAND_ID"` \| `"OPEN_TO_SIDE_COMMAND_ID"` \| `"FIND_IN_WORKSPACE_ID"` \| `"DOWNLOAD_COMMAND_ID"` \| `"EDITOR_MENU_CLOSE_TO_RIGHT"` \| `"EDITOR_MENU_CLOSE_TO_LEFT"` \| `"EDITOR_MENU_CLOSE_ALL"` \| `"EDITOR_MENU_CLOSE_OTHERS"` \| `"EDITOR_MENU_CLOSE_SAVED"` \| `"EDITOR_MENU_CLOSE"` \| `"EDITOR_MENU_SHOW_OPENEDITORS"` \| `"EDITOR_MENU_SPLIT"` \| `"SETTING_ID"` \| `"PROBLEM_MODEL_ID"` \| `"PROBLEM_MODEL_NAME"` \| `"NOTIFICATION_CLEAR_ALL_ID"` \| `"NOTIFICATION_HIDE_ID"` \| `"NOTIFICATION_MODEL_ID"` \| `"NOTIFICATION_MODEL_NAME"` \| `"STATUS_BAR_HIDE_ID"` \| `"SEARCH_CASE_SENSITIVE_COMMAND_ID"` \| `"SEARCH_WHOLE_WORD_COMMAND_ID"` \| `"SEARCH_REGULAR_EXPRESSION_COMMAND_ID"` \| `"SEARCH_PRESERVE_CASE_COMMAND_ID"` \| `"SEARCH_REPLACE_ALL_COMMAND_ID"` \| `"SEARCH_ACTIVITY_ITEM"` \| `"SEARCH_TOOLBAR_REFRESH"` \| `"SEARCH_TOOLBAR_CLEAR"` \| `"SEARCH_TOOLBAR_COLLAPSE"` \| `"PANEL_TOOLBOX_CLOSE"` \| `"PANEL_TOOLBOX_RESIZE"` \| `"PANEL_TOOLBOX_RESTORE_SIZE"` \| `"PANEL_OUTPUT"` \| `"MENU_FILE_OPEN"` \| `"MENU_QUICK_COMMAND"` \| `"MENU_VIEW_MENUBAR"` \| `"MENU_VIEW_ACTIVITYBAR"` \| `"MENU_VIEW_STATUSBAR"` \| `"MENU_VIEW_PANEL"` \| `"ACTION_QUICK_COMMAND"` \| `"ACTION_QUICK_SELECT_ALL"` \| `"ACTION_QUICK_COPY_LINE_UP"` \| `"ACTION_QUICK_UNDO"` \| `"ACTION_QUICK_REDO"` \| `"ACTION_QUICK_CREATE_FILE"` \| `"ACTION_QUICK_CREATE_FOLDER"` \| `"ACTION_QUICK_ACCESS_SETTINGS"` \| `"ACTION_SELECT_THEME"` \| `"ACTION_SELECT_LOCALE"` \| `"ACTIVITY_BAR_GLOBAL_SETTINGS"` \| `"ACTIVITY_BAR_GLOBAL_ACCOUNT"` \| `"CONTEXT_MENU_MENU"` \| `"CONTEXT_MENU_EXPLORER"` \| `"CONTEXT_MENU_SEARCH"` \| `"CONTEXT_MENU_HIDE"` \| `"MENUBAR_MODE_HORIZONTAL"` \| `"MENUBAR_MODE_VERTICAL"` \| `"MENUBAR_MENU_MODE_DIVIDER"`\>, `undefined` \| `string`\>

#### Implementation of

[IBuiltinService](../interfaces/molecule.IBuiltinService).[getConstants](../interfaces/molecule.IBuiltinService#getconstants)

#### Defined in

[src/services/builtinService/index.ts:97](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/builtinService/index.ts#L97)

---

### getModule

▸ **getModule**(`id`): `undefined` \| `IBuiltinModuleProps`<`any`\>

Get the specific module by id

#### Parameters

| Name | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id` | `"builtInExplorerActivityItem"` \| `"builtInExplorerFolderPanel"` \| `"builtInExplorerHeaderToolbar"` \| `"builtInExplorerEditorPanel"` \| `"builtInExplorerOutlinePanel"` \| `"BuiltInEditorOptions"` \| `"builtInEditorInitialActions"` \| `"builtInEditorInitialMenu"` \| `"builtInEditorTreeHeaderContextMenu"` \| `"builtInEditorTreeContextMenu"` \| `"BuiltInSettingsTab"` \| `"builtInStatusProblems"` \| `"builtInPanelProblems"` \| `"NOTIFICATION_CLEAR_ALL"` \| `"NOTIFICATION_HIDE"` \| `"builtInNotification"` \| `"STATUS_EDITOR_INFO"` \| `"CONTEXT_MENU_HIDE_STATUS_BAR"` \| `"builtInSearchActivityItem"` \| `"builtInHeaderToolbar"` \| `"builtInSearchAddons"` \| `"builtInReplaceAddons"` \| `"builtInOutputPanel"` \| `"builtInPanelToolboxResize"` \| `"builtInPanelToolboxReStore"` \| `"builtInPanelToolbox"` \| `"builtInMenuBarData"` \| `"quickAcessViewAction"` \| `"quickSelectColorThemeAction"` \| `"quickAccessSettingsAction"` \| `"quickSelectLocaleAction"` \| `"quickTogglePanelAction"` \| `"quickSelectAllAction"` \| `"quickCopyLineUpAction"` \| `"quickUndoAction"` \| `"quickRedoAction"` \| `"quickCreateFileAction"` \| `"COMMON_CONTEXT_MENU"` \| `"BASE_CONTEXT_MENU"` \| `"ROOT_FOLDER_CONTEXT_MENU"` \| `"FILE_CONTEXT_MENU"` \| `"FOLDER_PANEL_CONTEXT_MENU"` \| `"activityBarData"` \| `"contextMenuData"` |

#### Returns

`undefined` \| `IBuiltinModuleProps`<`any`\>

#### Implementation of

[IBuiltinService](../interfaces/molecule.IBuiltinService).[getModule](../interfaces/molecule.IBuiltinService#getmodule)

#### Defined in

[src/services/builtinService/index.ts:133](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/builtinService/index.ts#L133)

---

### getModules

▸ **getModules**(): `any`

Get all modules

#### Returns

`any`

#### Implementation of

[IBuiltinService](../interfaces/molecule.IBuiltinService).[getModules](../interfaces/molecule.IBuiltinService#getmodules)

#### Defined in

[src/services/builtinService/index.ts:146](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/builtinService/index.ts#L146)

---

### inactiveConstant

▸ **inactiveConstant**(`id`): `boolean`

Mark the specific constant as inactive

#### Parameters

| Name | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :--- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id` | `"PANEL_PROBLEMS"` \| `"STATUS_PROBLEMS"` \| `"SAMPLE_FOLDER_PANEL_ID"` \| `"EDITOR_PANEL_ID"` \| `"OUTLINE_PANEL_ID"` \| `"OUTLINE_PANEL_MORE_DESC"` \| `"EXPLORER_ACTIVITY_ITEM"` \| `"EXPLORER_ACTION_TITLE"` \| `"EXPLORER_TOGGLE_VERTICAL"` \| `"EXPLORER_TOGGLE_SAVE_ALL"` \| `"EXPLORER_TOGGLE_CLOSE_ALL_EDITORS"` \| `"EXPLORER_TOGGLE_SAVE_GROUP"` \| `"EXPLORER_TOGGLE_CLOSE_GROUP_EDITORS"` \| `"NEW_FILE_COMMAND_ID"` \| `"NEW_FOLDER_COMMAND_ID"` \| `"RENAME_COMMAND_ID"` \| `"REMOVE_COMMAND_ID"` \| `"DELETE_COMMAND_ID"` \| `"OPEN_TO_SIDE_COMMAND_ID"` \| `"FIND_IN_WORKSPACE_ID"` \| `"DOWNLOAD_COMMAND_ID"` \| `"EDITOR_MENU_CLOSE_TO_RIGHT"` \| `"EDITOR_MENU_CLOSE_TO_LEFT"` \| `"EDITOR_MENU_CLOSE_ALL"` \| `"EDITOR_MENU_CLOSE_OTHERS"` \| `"EDITOR_MENU_CLOSE_SAVED"` \| `"EDITOR_MENU_CLOSE"` \| `"EDITOR_MENU_SHOW_OPENEDITORS"` \| `"EDITOR_MENU_SPLIT"` \| `"SETTING_ID"` \| `"PROBLEM_MODEL_ID"` \| `"PROBLEM_MODEL_NAME"` \| `"NOTIFICATION_CLEAR_ALL_ID"` \| `"NOTIFICATION_HIDE_ID"` \| `"NOTIFICATION_MODEL_ID"` \| `"NOTIFICATION_MODEL_NAME"` \| `"STATUS_BAR_HIDE_ID"` \| `"SEARCH_CASE_SENSITIVE_COMMAND_ID"` \| `"SEARCH_WHOLE_WORD_COMMAND_ID"` \| `"SEARCH_REGULAR_EXPRESSION_COMMAND_ID"` \| `"SEARCH_PRESERVE_CASE_COMMAND_ID"` \| `"SEARCH_REPLACE_ALL_COMMAND_ID"` \| `"SEARCH_ACTIVITY_ITEM"` \| `"SEARCH_TOOLBAR_REFRESH"` \| `"SEARCH_TOOLBAR_CLEAR"` \| `"SEARCH_TOOLBAR_COLLAPSE"` \| `"PANEL_TOOLBOX_CLOSE"` \| `"PANEL_TOOLBOX_RESIZE"` \| `"PANEL_TOOLBOX_RESTORE_SIZE"` \| `"PANEL_OUTPUT"` \| `"MENU_FILE_OPEN"` \| `"MENU_QUICK_COMMAND"` \| `"MENU_VIEW_MENUBAR"` \| `"MENU_VIEW_ACTIVITYBAR"` \| `"MENU_VIEW_STATUSBAR"` \| `"MENU_VIEW_PANEL"` \| `"ACTION_QUICK_COMMAND"` \| `"ACTION_QUICK_SELECT_ALL"` \| `"ACTION_QUICK_COPY_LINE_UP"` \| `"ACTION_QUICK_UNDO"` \| `"ACTION_QUICK_REDO"` \| `"ACTION_QUICK_CREATE_FILE"` \| `"ACTION_QUICK_CREATE_FOLDER"` \| `"ACTION_QUICK_ACCESS_SETTINGS"` \| `"ACTION_SELECT_THEME"` \| `"ACTION_SELECT_LOCALE"` \| `"ACTIVITY_BAR_GLOBAL_SETTINGS"` \| `"ACTIVITY_BAR_GLOBAL_ACCOUNT"` \| `"CONTEXT_MENU_MENU"` \| `"CONTEXT_MENU_EXPLORER"` \| `"CONTEXT_MENU_SEARCH"` \| `"CONTEXT_MENU_HIDE"` \| `"MENUBAR_MODE_HORIZONTAL"` \| `"MENUBAR_MODE_VERTICAL"` \| `"MENUBAR_MENU_MODE_DIVIDER"` |

#### Returns

`boolean`

#### Implementation of

[IBuiltinService](../interfaces/molecule.IBuiltinService).[inactiveConstant](../interfaces/molecule.IBuiltinService#inactiveconstant)

#### Defined in

[src/services/builtinService/index.ts:110](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/builtinService/index.ts#L110)

---

### inactiveModule

▸ **inactiveModule**(`id`): `boolean`

Mark the specific module as inactive

#### Parameters

| Name | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id` | `"builtInExplorerActivityItem"` \| `"builtInExplorerFolderPanel"` \| `"builtInExplorerHeaderToolbar"` \| `"builtInExplorerEditorPanel"` \| `"builtInExplorerOutlinePanel"` \| `"BuiltInEditorOptions"` \| `"builtInEditorInitialActions"` \| `"builtInEditorInitialMenu"` \| `"builtInEditorTreeHeaderContextMenu"` \| `"builtInEditorTreeContextMenu"` \| `"BuiltInSettingsTab"` \| `"builtInStatusProblems"` \| `"builtInPanelProblems"` \| `"NOTIFICATION_CLEAR_ALL"` \| `"NOTIFICATION_HIDE"` \| `"builtInNotification"` \| `"STATUS_EDITOR_INFO"` \| `"CONTEXT_MENU_HIDE_STATUS_BAR"` \| `"builtInSearchActivityItem"` \| `"builtInHeaderToolbar"` \| `"builtInSearchAddons"` \| `"builtInReplaceAddons"` \| `"builtInOutputPanel"` \| `"builtInPanelToolboxResize"` \| `"builtInPanelToolboxReStore"` \| `"builtInPanelToolbox"` \| `"builtInMenuBarData"` \| `"quickAcessViewAction"` \| `"quickSelectColorThemeAction"` \| `"quickAccessSettingsAction"` \| `"quickSelectLocaleAction"` \| `"quickTogglePanelAction"` \| `"quickSelectAllAction"` \| `"quickCopyLineUpAction"` \| `"quickUndoAction"` \| `"quickRedoAction"` \| `"quickCreateFileAction"` \| `"COMMON_CONTEXT_MENU"` \| `"BASE_CONTEXT_MENU"` \| `"ROOT_FOLDER_CONTEXT_MENU"` \| `"FILE_CONTEXT_MENU"` \| `"FOLDER_PANEL_CONTEXT_MENU"` \| `"activityBarData"` \| `"contextMenuData"` |

#### Returns

`boolean`

#### Implementation of

[IBuiltinService](../interfaces/molecule.IBuiltinService).[inactiveModule](../interfaces/molecule.IBuiltinService#inactivemodule)

#### Defined in

[src/services/builtinService/index.ts:121](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/builtinService/index.ts#L121)

---

### initialize

▸ `Private` **initialize**(): `void`

#### Returns

`void`

#### Defined in

[src/services/builtinService/index.ts:65](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/builtinService/index.ts#L65)

---

### reset

▸ **reset**(): `void`

Reset all constants and modules

#### Returns

`void`

#### Implementation of

[IBuiltinService](../interfaces/molecule.IBuiltinService).[reset](../interfaces/molecule.IBuiltinService#reset)

#### Defined in

[src/services/builtinService/index.ts:160](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/builtinService/index.ts#L160)
