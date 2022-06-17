---
id: 'molecule.event.EventEmitter'
title: 'Class: EventEmitter'
sidebar_label: 'EventEmitter'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[event](../namespaces/molecule.event).EventEmitter

## Constructors

### constructor

• **new EventEmitter**()

## Properties

### \_events

• `Private` **\_events**: `Map`<`string`, `Function`[]\>

#### Defined in

[common/event/eventEmitter.ts:2](https://github.com/DTStack/molecule/blob/3e6bc450/src/common/event/eventEmitter.ts#L2)

## Methods

### assignEvent

▸ **assignEvent**<`T`\>(`name`, `listener`): `void`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `name`     | `string`   |
| `listener` | `Function` |

#### Returns

`void`

#### Defined in

[common/event/eventEmitter.ts:49](https://github.com/DTStack/molecule/blob/3e6bc450/src/common/event/eventEmitter.ts#L49)

---

### count

▸ **count**(`name`): `number`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`number`

#### Defined in

[common/event/eventEmitter.ts:4](https://github.com/DTStack/molecule/blob/3e6bc450/src/common/event/eventEmitter.ts#L4)

---

### deleteEvent

▸ **deleteEvent**(`name`, `listener?`): `void`

#### Parameters

| Name        | Type       |
| :---------- | :--------- |
| `name`      | `string`   |
| `listener?` | `Function` |

#### Returns

`void`

#### Defined in

[common/event/eventEmitter.ts:38](https://github.com/DTStack/molecule/blob/3e6bc450/src/common/event/eventEmitter.ts#L38)

---

### emit

▸ **emit**(`name`, ...`args`): `void`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `name`    | `string` |
| `...args` | `any`[]  |

#### Returns

`void`

#### Defined in

[common/event/eventEmitter.ts:9](https://github.com/DTStack/molecule/blob/3e6bc450/src/common/event/eventEmitter.ts#L9)

---

### subscribe

▸ **subscribe**(`name`, `listener`): `void`

#### Parameters

| Name       | Type                   |
| :--------- | :--------------------- |
| `name`     | `string` \| `string`[] |
| `listener` | `Function`             |

#### Returns

`void`

#### Defined in

[common/event/eventEmitter.ts:18](https://github.com/DTStack/molecule/blob/3e6bc450/src/common/event/eventEmitter.ts#L18)

---

### unsubscribe

▸ **unsubscribe**(`name`, `listener?`): `void`

#### Parameters

| Name        | Type                   |
| :---------- | :--------------------- |
| `name`      | `string` \| `string`[] |
| `listener?` | `Function`             |

#### Returns

`void`

#### Defined in

[common/event/eventEmitter.ts:28](https://github.com/DTStack/molecule/blob/3e6bc450/src/common/event/eventEmitter.ts#L28)
