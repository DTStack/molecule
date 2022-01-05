---
id: 'molecule.IProblemsController'
title: 'Interface: IProblemsController'
sidebar_label: 'IProblemsController'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IProblemsController

## Hierarchy

-   `Partial`<[`Controller`](../classes/molecule.react.Controller)\>

    ↳ **`IProblemsController`**

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

[src/controller/problems.tsx:22](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/problems.tsx#L22)

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
