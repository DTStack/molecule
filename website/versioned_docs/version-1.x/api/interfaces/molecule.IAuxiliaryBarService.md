---
id: 'molecule.IAuxiliaryBarService'
title: 'Interface: IAuxiliaryBarService'
sidebar_label: 'IAuxiliaryBarService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IAuxiliaryBarService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`IAuxiliaryBar`](molecule.model.IAuxiliaryBar)\>

    ↳ **`IAuxiliaryBarService`**

## Implemented by

-   [`AuxiliaryBarService`](../classes/molecule.AuxiliaryBarService)

## Properties

### state

• `Protected` `Abstract` **state**: [`IAuxiliaryBar`](molecule.model.IAuxiliaryBar)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[react/component.ts:44](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L44)

## Methods

### addAuxiliaryBar

▸ **addAuxiliaryBar**(`tabs`): `void`

#### Parameters

| Name   | Type                                                                                                                                 |
| :----- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `tabs` | [`IAuxiliaryData`](../namespaces/molecule.model#iauxiliarydata) \| [`IAuxiliaryData`](../namespaces/molecule.model#iauxiliarydata)[] |

#### Returns

`void`

#### Defined in

[services/workbench/auxiliaryBarService.ts:19](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/auxiliaryBarService.ts#L19)

---

### count

▸ **count**(`name`): `number`

Count the service event

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | Event name  |

#### Returns

`number`

#### Inherited from

[Component](../classes/molecule.react.Component).[count](../classes/molecule.react.Component#count)

#### Defined in

[common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L28)

---

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

#### Inherited from

[Component](../classes/molecule.react.Component).[emit](../classes/molecule.react.Component#emit)

#### Defined in

[common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[forceUpdate](../classes/molecule.react.Component#forceupdate)

#### Defined in

[react/component.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L81)

---

### getCurrentTab

▸ **getCurrentTab**(): `undefined` \| [`IAuxiliaryData`](../namespaces/molecule.model#iauxiliarydata)

Get the current tab

#### Returns

`undefined` \| [`IAuxiliaryData`](../namespaces/molecule.model#iauxiliarydata)

#### Defined in

[services/workbench/auxiliaryBarService.ts:18](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/auxiliaryBarService.ts#L18)

---

### getState

▸ **getState**(): [`IAuxiliaryBar`](molecule.model.IAuxiliaryBar)

Get the Component state

#### Returns

[`IAuxiliaryBar`](molecule.model.IAuxiliaryBar)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

---

### onTabClick

▸ **onTabClick**(`callback`): `void`

Called when auxiliary tab title clicked

#### Parameters

| Name       | Type                          |
| :--------- | :---------------------------- |
| `callback` | (`key`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[services/workbench/auxiliaryBarService.ts:39](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/auxiliaryBarService.ts#L39)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                   |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`IAuxiliaryBar`](molecule.model.IAuxiliaryBar), `nextState`: [`IAuxiliaryBar`](molecule.model.IAuxiliaryBar)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[react/component.ts:73](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L73)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(`listener?`): `void`

Remove the Component update event listening, default is remove all,
also you can remove one by pass the listener

#### Parameters

| Name        | Type       |
| :---------- | :--------- |
| `listener?` | `Function` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[removeOnUpdateState](../classes/molecule.react.Component#removeonupdatestate)

#### Defined in

[react/component.ts:77](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L77)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                            |
| :----------- | :---------------------------------------------- |
| `nextState?` | [`IAuxiliaryBar`](molecule.model.IAuxiliaryBar) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset all states

#### Returns

`void`

#### Defined in

[services/workbench/auxiliaryBarService.ts:43](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/auxiliaryBarService.ts#L43)

---

### setActive

▸ **setActive**(`current`): `void`

Set the active one on data

#### Parameters

| Name      | Type                      |
| :-------- | :------------------------ |
| `current` | `undefined` \| `UniqueId` |

#### Returns

`void`

#### Defined in

[services/workbench/auxiliaryBarService.ts:23](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/auxiliaryBarService.ts#L23)

---

### setChildren

▸ **setChildren**(`children`): `void`

Set the children of auxiliary bar

#### Parameters

| Name       | Type        |
| :--------- | :---------- |
| `children` | `ReactNode` |

#### Returns

`void`

#### Defined in

[services/workbench/auxiliaryBarService.ts:35](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/auxiliaryBarService.ts#L35)

---

### setMode

▸ **setMode**(`mode`): [`IAuxiliaryBarMode`](../namespaces/molecule.model#iauxiliarybarmode)

Set the mode of auxiliary bar

#### Parameters

| Name   | Type                                                                                                                                                                                                                                  |
| :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `mode` | [`IAuxiliaryBarMode`](../namespaces/molecule.model#iauxiliarybarmode) \| (`preState`: [`IAuxiliaryBarMode`](../namespaces/molecule.model#iauxiliarybarmode)) => [`IAuxiliaryBarMode`](../namespaces/molecule.model#iauxiliarybarmode) |

#### Returns

[`IAuxiliaryBarMode`](../namespaces/molecule.model#iauxiliarybarmode)

#### Defined in

[services/workbench/auxiliaryBarService.ts:27](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/auxiliaryBarService.ts#L27)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                                   | Description                |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IAuxiliaryBar`](molecule.model.IAuxiliaryBar)\>                                                                            | update target state values |
| `callback?` | (`prevState`: [`IAuxiliaryBar`](molecule.model.IAuxiliaryBar), `nextState`: [`IAuxiliaryBar`](molecule.model.IAuxiliaryBar)) => `void` | -                          |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[setState](../classes/molecule.react.Component#setstate)

#### Defined in

[react/component.ts:56](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L56)

---

### subscribe

▸ **subscribe**(`name`, `listener`): `void`

Subscribe the service event

#### Parameters

| Name       | Type                   | Description       |
| :--------- | :--------------------- | :---------------- |
| `name`     | `string` \| `string`[] | Event name        |
| `listener` | `Function`             | Listener function |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[subscribe](../classes/molecule.react.Component#subscribe)

#### Defined in

[common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L11)

---

### unsubscribe

▸ **unsubscribe**(`name`, `listener?`): `void`

Unsubscribe the specific event and the listener function

#### Parameters

| Name        | Type       | Description                                                                 |
| :---------- | :--------- | :-------------------------------------------------------------------------- |
| `name`      | `any`      | The event name                                                              |
| `listener?` | `Function` | optional, it unsubscribes events via name if not pass the listener function |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[unsubscribe](../classes/molecule.react.Component#unsubscribe)

#### Defined in

[common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L37)
