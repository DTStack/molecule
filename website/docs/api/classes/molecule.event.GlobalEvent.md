---
id: 'molecule.event.GlobalEvent'
title: 'Class: GlobalEvent'
sidebar_label: 'GlobalEvent'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[event](../namespaces/molecule.event).GlobalEvent

## Hierarchy

-   **`GlobalEvent`**

    ↳ [`Component`](molecule.react.Component)

    ↳ [`Controller`](molecule.react.Controller)

    ↳ [`SettingsService`](molecule.SettingsService)

## Constructors

### constructor

• **new GlobalEvent**()

## Methods

### emit

▸ **emit**(`name`, ...`args`): `void`

Emit the service event

#### Parameters

| Name      | Type     | Description |
| :-------- | :------- | :---------- |
| `name`    | `string` | Event name  |
| `...args` | `any`    | Arguments   |

#### Returns

`void`

#### Defined in

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L20)

---

### subscribe

▸ **subscribe**(`name`, `callback`): `void`

Subscribe the service event

#### Parameters

| Name       | Type                   | Description       |
| :--------- | :--------------------- | :---------------- |
| `name`     | `string` \| `string`[] | Event name        |
| `callback` | `Function`             | Callback function |

#### Returns

`void`

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L11)
