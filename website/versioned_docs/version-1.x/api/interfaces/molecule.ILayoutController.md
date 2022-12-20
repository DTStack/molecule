---
id: 'molecule.ILayoutController'
title: 'Interface: ILayoutController'
sidebar_label: 'ILayoutController'
custom_edit_url: null
---

[molecule](../namespaces/molecule).ILayoutController

## Hierarchy

-   `Partial`<[`Controller`](../classes/molecule.react.Controller)\>

    ↳ **`ILayoutController`**

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

### onHorizontalPaneSizeChange

▸ `Optional` **onHorizontalPaneSizeChange**(`horizontalSplitPanePos`): `void`

#### Parameters

| Name                     | Type       |
| :----------------------- | :--------- |
| `horizontalSplitPanePos` | `number`[] |

#### Returns

`void`

#### Defined in

[controller/layout.ts:8](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/layout.ts#L8)

---

### onPaneSizeChange

▸ `Optional` **onPaneSizeChange**(`splitPanePos`): `void`

#### Parameters

| Name           | Type       |
| :------------- | :--------- |
| `splitPanePos` | `number`[] |

#### Returns

`void`

#### Defined in

[controller/layout.ts:7](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/layout.ts#L7)

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
