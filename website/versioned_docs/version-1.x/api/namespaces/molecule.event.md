---
id: 'molecule.event'
title: 'Namespace: event'
sidebar_label: 'event'
custom_edit_url: null
---

[molecule](molecule).event

## Classes

-   [EventEmitter](../classes/molecule.event.EventEmitter)
-   [GlobalEvent](../classes/molecule.event.GlobalEvent)

## Interfaces

-   [ListenerEventContext](../interfaces/molecule.event.ListenerEventContext)

## Variables

### EventBus

• `Const` **EventBus**: [`EventEmitter`](../classes/molecule.event.EventEmitter)

#### Defined in

[common/event/eventBus.ts:3](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L3)

## Functions

### emit

▸ **emit**(`name`): (`target`: `any`, `property`: `string`, `descriptor`: `PropertyDescriptor`) => `PropertyDescriptor`

Emit decorator, when the function be called,
it's going to notify the listener

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | Event name  |

#### Returns

`fn`

▸ (`target`, `property`, `descriptor`): `PropertyDescriptor`

##### Parameters

| Name         | Type                 |
| :----------- | :------------------- |
| `target`     | `any`                |
| `property`   | `string`             |
| `descriptor` | `PropertyDescriptor` |

##### Returns

`PropertyDescriptor`

#### Defined in

[common/event/decorator.ts:8](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/decorator.ts#L8)

---

### subscribe

▸ **subscribe**(`name`): (`target`: `any`, `property`: `string`, `descriptor`: `PropertyDescriptor`) => `PropertyDescriptor`

When the event emitted, it's going to call target function

#### Parameters

| Name   | Type                   | Description |
| :----- | :--------------------- | :---------- |
| `name` | `string` \| `string`[] | Event name  |

#### Returns

`fn`

▸ (`target`, `property`, `descriptor`): `PropertyDescriptor`

##### Parameters

| Name         | Type                 |
| :----------- | :------------------- |
| `target`     | `any`                |
| `property`   | `string`             |
| `descriptor` | `PropertyDescriptor` |

##### Returns

`PropertyDescriptor`

#### Defined in

[common/event/decorator.ts:30](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/decorator.ts#L30)
