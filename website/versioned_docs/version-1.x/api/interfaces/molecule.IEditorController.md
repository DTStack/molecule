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

[common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L28)

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

[common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L20)

---

### getViewState

▸ `Optional` **getViewState**(`id`): `ICodeEditorViewState`

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`ICodeEditorViewState`

#### Defined in

[controller/editor.tsx:53](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/editor.tsx#L53)

---

### initEditorEvents

▸ `Optional` **initEditorEvents**(`editorInstance`, `groupId`): `void`

#### Parameters

| Name             | Type                    |
| :--------------- | :---------------------- |
| `editorInstance` | `IStandaloneCodeEditor` |
| `groupId`        | `UniqueId`              |

#### Returns

`void`

#### Defined in

[controller/editor.tsx:49](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/editor.tsx#L49)

---

### initView

▸ `Optional` `Abstract` **initView**(): `void`

#### Returns

`void`

#### Inherited from

Partial.initView

#### Defined in

[react/controller.ts:4](https://github.com/DTStack/molecule/blob/927b7d39/src/react/controller.ts#L4)

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

[controller/editor.tsx:40](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/editor.tsx#L40)

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

[controller/editor.tsx:46](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/editor.tsx#L46)

---

### onClickContextMenu

▸ `Optional` **onClickContextMenu**(`e`, `item`, `tabItem?`): `void`

#### Parameters

| Name       | Type                                                                                                              |
| :--------- | :---------------------------------------------------------------------------------------------------------------- |
| `e`        | `MouseEvent`<`Element`, `MouseEvent`\>                                                                            |
| `item`     | [`IMenuItemProps`](molecule.component.IMenuItemProps)                                                             |
| `tabItem?` | [`IEditorTab`](molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](molecule.model.BuiltInEditorTabDataType)\> |

#### Returns

`void`

#### Defined in

[controller/editor.tsx:29](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/editor.tsx#L29)

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

[controller/editor.tsx:34](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/editor.tsx#L34)

---

### onCloseOther

▸ `Optional` **onCloseOther**(`tab`, `group`): `void`

#### Parameters

| Name    | Type                                                                                                              |
| :------ | :---------------------------------------------------------------------------------------------------------------- |
| `tab`   | [`IEditorTab`](molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](molecule.model.BuiltInEditorTabDataType)\> |
| `group` | `UniqueId`                                                                                                        |

#### Returns

`void`

#### Defined in

[controller/editor.tsx:38](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/editor.tsx#L38)

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

[controller/editor.tsx:39](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/editor.tsx#L39)

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

[controller/editor.tsx:35](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/editor.tsx#L35)

---

### onCloseToLeft

▸ `Optional` **onCloseToLeft**(`tab`, `group`): `void`

#### Parameters

| Name    | Type                                                                                                              |
| :------ | :---------------------------------------------------------------------------------------------------------------- |
| `tab`   | [`IEditorTab`](molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](molecule.model.BuiltInEditorTabDataType)\> |
| `group` | `UniqueId`                                                                                                        |

#### Returns

`void`

#### Defined in

[controller/editor.tsx:36](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/editor.tsx#L36)

---

### onCloseToRight

▸ `Optional` **onCloseToRight**(`tab`, `group`): `void`

#### Parameters

| Name    | Type                                                                                                              |
| :------ | :---------------------------------------------------------------------------------------------------------------- |
| `tab`   | [`IEditorTab`](molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](molecule.model.BuiltInEditorTabDataType)\> |
| `group` | `UniqueId`                                                                                                        |

#### Returns

`void`

#### Defined in

[controller/editor.tsx:37](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/editor.tsx#L37)

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

[controller/editor.tsx:44](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/editor.tsx#L44)

---

### onPaneSizeChange

▸ `Optional` **onPaneSizeChange**(`newSize`): `void`

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `newSize` | `number`[] |

#### Returns

`void`

#### Defined in

[controller/editor.tsx:48](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/editor.tsx#L48)

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

[controller/editor.tsx:45](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/editor.tsx#L45)

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

[controller/editor.tsx:47](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/editor.tsx#L47)

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

[controller/editor.tsx:28](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/editor.tsx#L28)

---

### subscribe

▸ `Optional` **subscribe**(`name`, `listener`): `void`

Subscribe the service event

#### Parameters

| Name       | Type                   | Description       |
| :--------- | :--------------------- | :---------------- |
| `name`     | `string` \| `string`[] | Event name        |
| `listener` | `Function`             | Listener function |

#### Returns

`void`

#### Inherited from

Partial.subscribe

#### Defined in

[common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L11)

---

### unsubscribe

▸ `Optional` **unsubscribe**(`name`, `listener?`): `void`

Unsubscribe the specific event and the listener function

#### Parameters

| Name        | Type       | Description                                                                 |
| :---------- | :--------- | :-------------------------------------------------------------------------- |
| `name`      | `any`      | The event name                                                              |
| `listener?` | `Function` | optional, it unsubscribes events via name if not pass the listener function |

#### Returns

`void`

#### Inherited from

Partial.unsubscribe

#### Defined in

[common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L37)
