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

[src/controller/activityBar.ts:29](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/activityBar.ts#L29)

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

[src/controller/activityBar.ts:25](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/activityBar.ts#L25)

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

[src/controller/activityBar.ts:30](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/activityBar.ts#L30)

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
