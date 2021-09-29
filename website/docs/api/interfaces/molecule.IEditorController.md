---
id: 'molecule.IEditorController'
title: 'Interface: IEditorController'
sidebar_label: 'IEditorController'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IEditorController

## Properties

### groupSplitPos

• `Optional` **groupSplitPos**: `string`[]

#### Defined in

[src/controller/editor.tsx:31](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/editor.tsx#L31)

## Methods

### onChangeEditorProps

▸ `Optional` **onChangeEditorProps**(`preProps`, `nextProps`): `void`

#### Parameters

| Name        | Type                                                          |
| :---------- | :------------------------------------------------------------ |
| `preProps`  | [`IMonacoEditorProps`](molecule.component.IMonacoEditorProps) |
| `nextProps` | [`IMonacoEditorProps`](molecule.component.IMonacoEditorProps) |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:44](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/editor.tsx#L44)

---

### onClickActions

▸ **onClickActions**(`action`): `void`

#### Parameters

| Name     | Type                  |
| :------- | :-------------------- |
| `action` | `IEditorActionsProps` |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/editor.tsx#L50)

---

### onClickContextMenu

▸ `Optional` **onClickContextMenu**(`e`, `item`, `tabItem?`): `void`

#### Parameters

| Name       | Type                                                  |
| :--------- | :---------------------------------------------------- |
| `e`        | `MouseEvent`<`Element`, `MouseEvent`\>                |
| `item`     | [`IMenuItemProps`](molecule.component.IMenuItemProps) |
| `tabItem?` | `IEditorTab`<`BuiltInEditorTabDataType`\>             |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:33](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/editor.tsx#L33)

---

### onCloseAll

▸ `Optional` **onCloseAll**(`group`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `group` | `number` |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:38](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/editor.tsx#L38)

---

### onCloseOther

▸ `Optional` **onCloseOther**(`tab`, `group`): `void`

#### Parameters

| Name    | Type                                      |
| :------ | :---------------------------------------- |
| `tab`   | `IEditorTab`<`BuiltInEditorTabDataType`\> |
| `group` | `number`                                  |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:42](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/editor.tsx#L42)

---

### onCloseSaved

▸ `Optional` **onCloseSaved**(`group`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `group` | `number` |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:43](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/editor.tsx#L43)

---

### onCloseTab

▸ `Optional` **onCloseTab**(`tabId`, `group`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `tabId` | `string` |
| `group` | `number` |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:39](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/editor.tsx#L39)

---

### onCloseToLeft

▸ `Optional` **onCloseToLeft**(`tab`, `group`): `void`

#### Parameters

| Name    | Type                                      |
| :------ | :---------------------------------------- |
| `tab`   | `IEditorTab`<`BuiltInEditorTabDataType`\> |
| `group` | `number`                                  |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:40](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/editor.tsx#L40)

---

### onCloseToRight

▸ `Optional` **onCloseToRight**(`tab`, `group`): `void`

#### Parameters

| Name    | Type                                      |
| :------ | :---------------------------------------- |
| `tab`   | `IEditorTab`<`BuiltInEditorTabDataType`\> |
| `group` | `number`                                  |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:41](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/editor.tsx#L41)

---

### onMoveTab

▸ `Optional` **onMoveTab**<`T`\>(`updateTabs`, `group`): `void`

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name         | Type                 |
| :----------- | :------------------- |
| `updateTabs` | `IEditorTab`<`T`\>[] |
| `group`      | `number`             |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:48](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/editor.tsx#L48)

---

### onPaneSizeChange

▸ `Optional` **onPaneSizeChange**(`newSize`): `void`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `newSize` | `number` |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:52](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/editor.tsx#L52)

---

### onSelectTab

▸ `Optional` **onSelectTab**(`tabId`, `group`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `tabId` | `string` |
| `group` | `number` |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:49](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/editor.tsx#L49)

---

### onUpdateEditorIns

▸ `Optional` **onUpdateEditorIns**(`editorInstance`, `groupId`): `void`

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `editorInstance` | `any`    |
| `groupId`        | `number` |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:51](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/editor.tsx#L51)

---

### open

▸ `Optional` **open**<`T`\>(`tab`, `groupId?`): `void`

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name       | Type               |
| :--------- | :----------------- |
| `tab`      | `IEditorTab`<`T`\> |
| `groupId?` | `number`           |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:32](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/editor.tsx#L32)
