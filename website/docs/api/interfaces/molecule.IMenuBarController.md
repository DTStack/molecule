---
id: 'molecule.IMenuBarController'
title: 'Interface: IMenuBarController'
sidebar_label: 'IMenuBarController'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IMenuBarController

## Hierarchy

-   `Partial`<[`Controller`](../classes/molecule.react.Controller)\>

    ↳ **`IMenuBarController`**

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

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L28)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L20)

---

### initView

▸ `Optional` `Abstract` **initView**(): `void`

#### Returns

`void`

#### Inherited from

Partial.initView

#### Defined in

[src/react/controller.ts:4](https://github.com/DTStack/molecule/blob/3c64296/src/react/controller.ts#L4)

---

### onClick

▸ **onClick**(`event`, `item`): `void`

#### Parameters

| Name    | Type                        |
| :------ | :-------------------------- |
| `event` | `MouseEvent`<`any`, `any`\> |
| `item`  | `IMenuBarItem`              |

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:21](https://github.com/DTStack/molecule/blob/3c64296/src/controller/menuBar.ts#L21)

---

### onSelect

▸ `Optional` **onSelect**(`key`, `item?`): `void`

#### Parameters

| Name    | Type                                            |
| :------ | :---------------------------------------------- |
| `key`   | `string`                                        |
| `item?` | [`IActivityBarItem`](molecule.IActivityBarItem) |

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:20](https://github.com/DTStack/molecule/blob/3c64296/src/controller/menuBar.ts#L20)

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

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L11)

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

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L37)

---

### updateActivityBar

▸ `Optional` **updateActivityBar**(): `void`

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:25](https://github.com/DTStack/molecule/blob/3c64296/src/controller/menuBar.ts#L25)

---

### updateFocusinEle

▸ `Optional` **updateFocusinEle**(`ele`): `void`

#### Parameters

| Name  | Type                    |
| :---- | :---------------------- |
| `ele` | `null` \| `HTMLElement` |

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:22](https://github.com/DTStack/molecule/blob/3c64296/src/controller/menuBar.ts#L22)

---

### updateMenuBar

▸ `Optional` **updateMenuBar**(): `void`

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:24](https://github.com/DTStack/molecule/blob/3c64296/src/controller/menuBar.ts#L24)

---

### updateSideBar

▸ `Optional` **updateSideBar**(): `void`

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:26](https://github.com/DTStack/molecule/blob/3c64296/src/controller/menuBar.ts#L26)

---

### updateStatusBar

▸ `Optional` **updateStatusBar**(): `void`

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:23](https://github.com/DTStack/molecule/blob/3c64296/src/controller/menuBar.ts#L23)
