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

[src/common/event/eventEmitter.ts:2](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventEmitter.ts#L2)

## Methods

### assignEvent

▸ **assignEvent**<`T`\>(`name`, `callback`): `void`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `name`     | `string`   |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[src/common/event/eventEmitter.ts:34](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventEmitter.ts#L34)

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

[src/common/event/eventEmitter.ts:4](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventEmitter.ts#L4)

---

### subscribe

▸ **subscribe**(`name`, `callback`): `void`

#### Parameters

| Name       | Type                   |
| :--------- | :--------------------- |
| `name`     | `string` \| `string`[] |
| `callback` | `Function`             |

#### Returns

`void`

#### Defined in

[src/common/event/eventEmitter.ts:14](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventEmitter.ts#L14)

---

### unsubscribe

▸ **unsubscribe**(`name`): `void`

#### Parameters

| Name   | Type                   |
| :----- | :--------------------- |
| `name` | `string` \| `string`[] |

#### Returns

`void`

#### Defined in

[src/common/event/eventEmitter.ts:24](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventEmitter.ts#L24)
