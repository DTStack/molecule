---
id: 'molecule.IEditorController'
title: 'Interface: IEditorController'
sidebar_label: 'IEditorController'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IEditorController

## Hierarchy

-   `Partial`<[`Controller`](../classes/molecule.react.Controller)\>

    ↳ **`IEditorController`**

## Properties

### groupSplitPos

• `Optional` **groupSplitPos**: `string`[]

#### Defined in

[src/controller/editor.tsx:26](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/editor.tsx#L26)

## Methods

### count

▸ `Optional` **count**(`name`): `number`

Count the service event

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | Event name  |

#### Returns

`number`

#### Inherited from

Partial.count

#### Defined in

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L28)

---

### emit

▸ `Optional` **emit**(`name`, ...`args`): `void`

Emit the service event

#### Parameters

| Name      | Type     | Description |
| :-------- | :------- | :---------- |
| `name`    | `string` | Event name  |
| `...args` | `any`    | Arguments   |

#### Returns

`void`

#### Inherited from

Partial.emit

#### Defined in

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L20)

---

### initView

▸ `Optional` `Abstract` **initView**(): `void`

#### Returns

`void`

#### Inherited from

Partial.initView

#### Defined in

[src/react/controller.ts:4](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/controller.ts#L4)

---

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

[src/controller/editor.tsx:39](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/editor.tsx#L39)

---

### onClickActions

▸ **onClickActions**(`action`): `void`

#### Parameters

| Name     | Type                                                        |
| :------- | :---------------------------------------------------------- |
| `action` | [`IEditorActionsProps`](molecule.model.IEditorActionsProps) |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:45](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/editor.tsx#L45)

---

### onClickContextMenu

▸ `Optional` **onClickContextMenu**(`e`, `item`, `tabItem?`): `void`

#### Parameters

| Name       | Type                                                                   |
| :--------- | :--------------------------------------------------------------------- |
| `e`        | `MouseEvent`<`Element`, `MouseEvent`\>                                 |
| `item`     | [`IMenuItemProps`](molecule.component.IMenuItemProps)                  |
| `tabItem?` | [`IEditorTab`](molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\> |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:28](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/editor.tsx#L28)

---

### onCloseAll

▸ `Optional` **onCloseAll**(`group`): `void`

#### Parameters

| Name    | Type       |
| :------ | :--------- |
| `group` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:33](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/editor.tsx#L33)

---

### onCloseOther

▸ `Optional` **onCloseOther**(`tab`, `group`): `void`

#### Parameters

| Name    | Type                                                                   |
| :------ | :--------------------------------------------------------------------- |
| `tab`   | [`IEditorTab`](molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\> |
| `group` | `UniqueId`                                                             |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/editor.tsx#L37)

---

### onCloseSaved

▸ `Optional` **onCloseSaved**(`group`): `void`

#### Parameters

| Name    | Type       |
| :------ | :--------- |
| `group` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:38](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/editor.tsx#L38)

---

### onCloseTab

▸ `Optional` **onCloseTab**(`tabId`, `group`): `void`

#### Parameters

| Name    | Type       |
| :------ | :--------- |
| `tabId` | `UniqueId` |
| `group` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:34](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/editor.tsx#L34)

---

### onCloseToLeft

▸ `Optional` **onCloseToLeft**(`tab`, `group`): `void`

#### Parameters

| Name    | Type                                                                   |
| :------ | :--------------------------------------------------------------------- |
| `tab`   | [`IEditorTab`](molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\> |
| `group` | `UniqueId`                                                             |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:35](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/editor.tsx#L35)

---

### onCloseToRight

▸ `Optional` **onCloseToRight**(`tab`, `group`): `void`

#### Parameters

| Name    | Type                                                                   |
| :------ | :--------------------------------------------------------------------- |
| `tab`   | [`IEditorTab`](molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\> |
| `group` | `UniqueId`                                                             |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:36](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/editor.tsx#L36)

---

### onMoveTab

▸ `Optional` **onMoveTab**<`T`\>(`updateTabs`, `group`): `void`

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name         | Type                                              |
| :----------- | :------------------------------------------------ |
| `updateTabs` | [`IEditorTab`](molecule.model.IEditorTab)<`T`\>[] |
| `group`      | `UniqueId`                                        |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:43](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/editor.tsx#L43)

---

### onPaneSizeChange

▸ `Optional` **onPaneSizeChange**(`newSize`): `void`

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `newSize` | `string`[] |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:47](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/editor.tsx#L47)

---

### onSelectTab

▸ `Optional` **onSelectTab**(`tabId`, `group`): `void`

#### Parameters

| Name    | Type       |
| :------ | :--------- |
| `tabId` | `UniqueId` |
| `group` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:44](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/editor.tsx#L44)

---

### onUpdateEditorIns

▸ `Optional` **onUpdateEditorIns**(`editorInstance`, `groupId`): `void`

#### Parameters

| Name             | Type       |
| :--------------- | :--------- |
| `editorInstance` | `any`      |
| `groupId`        | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:46](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/editor.tsx#L46)

---

### open

▸ `Optional` **open**<`T`\>(`tab`, `groupId?`): `void`

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `tab`      | [`IEditorTab`](molecule.model.IEditorTab)<`T`\> |
| `groupId?` | `UniqueId`                                      |

#### Returns

`void`

#### Defined in

[src/controller/editor.tsx:27](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/editor.tsx#L27)

---

### subscribe

▸ `Optional` **subscribe**(`name`, `callback`): `void`

Subscribe the service event

#### Parameters

| Name       | Type                   | Description       |
| :--------- | :--------------------- | :---------------- |
| `name`     | `string` \| `string`[] | Event name        |
| `callback` | `Function`             | Callback function |

#### Returns

`void`

#### Inherited from

Partial.subscribe

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L11)

---

### unsubscribe

▸ `Optional` **unsubscribe**(`name`): `void`

Unsubscribe the specific event

#### Parameters

| Name   | Type  | Description    |
| :----- | :---- | :------------- |
| `name` | `any` | The event name |

#### Returns

`void`

#### Inherited from

Partial.unsubscribe

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L37)
