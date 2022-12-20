---
id: 'molecule.IStatusBarController'
title: 'Interface: IStatusBarController'
sidebar_label: 'IStatusBarController'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IStatusBarController

## Hierarchy

-   `Partial`<[`Controller`](../classes/molecule.react.Controller)\>

    ↳ **`IStatusBarController`**

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

### initView

▸ `Optional` `Abstract` **initView**(): `void`

#### Returns

`void`

#### Inherited from

Partial.initView

#### Defined in

[react/controller.ts:4](https://github.com/DTStack/molecule/blob/927b7d39/src/react/controller.ts#L4)

---

### onClick

▸ `Optional` **onClick**(`e`, `item`): `void`

#### Parameters

| Name   | Type                                                      |
| :----- | :-------------------------------------------------------- |
| `e`    | `MouseEvent`<`Element`, `MouseEvent`\>                    |
| `item` | [`IStatusBarItem`](molecule.model.IStatusBarItem)<`any`\> |

#### Returns

`void`

#### Defined in

[controller/statusBar.tsx:18](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/statusBar.tsx#L18)

---

### onContextMenuClick

▸ `Optional` **onContextMenuClick**(`e`, `item`): `void`

#### Parameters

| Name   | Type                                                                 |
| :----- | :------------------------------------------------------------------- |
| `e`    | `MouseEvent`<`Element`, `MouseEvent`\>                               |
| `item` | `undefined` \| [`IMenuItemProps`](molecule.component.IMenuItemProps) |

#### Returns

`void`

#### Defined in

[controller/statusBar.tsx:19](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/statusBar.tsx#L19)

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
