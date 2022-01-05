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

[src/common/event/eventEmitter.ts:2](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventEmitter.ts#L2)

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

[src/common/event/eventEmitter.ts:46](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventEmitter.ts#L46)

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

[src/common/event/eventEmitter.ts:4](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventEmitter.ts#L4)

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

[src/common/event/eventEmitter.ts:9](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventEmitter.ts#L9)

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

[src/common/event/eventEmitter.ts:18](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventEmitter.ts#L18)

---

### unsubscribe

▸ **unsubscribe**(`name`): `void`

Unsubscribe the specific event by the name

TODO: The `unsubscribe` method delete the all events via the name directly, the developer
use the `subscribe` method could register many callbacks, so if the developer only want to delete the specific callback by the name,
this method is no work.

#### Parameters

| Name   | Type                   | Description            |
| :----- | :--------------------- | :--------------------- |
| `name` | `string` \| `string`[] | The removed event name |

#### Returns

`void`

#### Defined in

[src/common/event/eventEmitter.ts:36](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventEmitter.ts#L36)
