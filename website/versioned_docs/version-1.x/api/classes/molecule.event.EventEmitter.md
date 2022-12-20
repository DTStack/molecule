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

[common/event/eventEmitter.ts:6](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventEmitter.ts#L6)

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

[common/event/eventEmitter.ts:63](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventEmitter.ts#L63)

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

[common/event/eventEmitter.ts:8](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventEmitter.ts#L8)

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

[common/event/eventEmitter.ts:52](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventEmitter.ts#L52)

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

[common/event/eventEmitter.ts:13](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventEmitter.ts#L13)

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

[common/event/eventEmitter.ts:32](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventEmitter.ts#L32)

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

[common/event/eventEmitter.ts:42](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventEmitter.ts#L42)
