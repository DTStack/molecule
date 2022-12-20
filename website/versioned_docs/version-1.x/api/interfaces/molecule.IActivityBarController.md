---
id: 'molecule.IActivityBarController'
title: 'Interface: IActivityBarController'
sidebar_label: 'IActivityBarController'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IActivityBarController

## Hierarchy

-   `Partial`<[`Controller`](../classes/molecule.react.Controller)\>

    ↳ **`IActivityBarController`**

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

### onChange

▸ `Optional` **onChange**(`prevSelected?`, `nextSelected?`): `void`

Called when activity bar item which is not global is changed

#### Parameters

| Name            | Type       |
| :-------------- | :--------- |
| `prevSelected?` | `UniqueId` |
| `nextSelected?` | `UniqueId` |

#### Returns

`void`

#### Defined in

[controller/activityBar.ts:29](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/activityBar.ts#L29)

---

### onClick

▸ `Optional` **onClick**(`selectedKey`, `selectedNode`): `void`

Called when activity bar item is clicked

#### Parameters

| Name           | Type                                                  |
| :------------- | :---------------------------------------------------- |
| `selectedKey`  | `UniqueId`                                            |
| `selectedNode` | [`IActivityBarItem`](molecule.model.IActivityBarItem) |

#### Returns

`void`

#### Defined in

[controller/activityBar.ts:25](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/activityBar.ts#L25)

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

[controller/activityBar.ts:30](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/activityBar.ts#L30)

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
