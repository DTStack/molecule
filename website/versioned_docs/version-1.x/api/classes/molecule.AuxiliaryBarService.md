---
id: 'molecule.AuxiliaryBarService'
title: 'Class: AuxiliaryBarService'
sidebar_label: 'AuxiliaryBarService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).AuxiliaryBarService

## Hierarchy

-   [`Component`](molecule.react.Component)<[`IAuxiliaryBar`](../interfaces/molecule.model.IAuxiliaryBar)\>

    ↳ **`AuxiliaryBarService`**

## Implements

-   [`IAuxiliaryBarService`](../interfaces/molecule.IAuxiliaryBarService)

## Constructors

### constructor

• **new AuxiliaryBarService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[services/workbench/auxiliaryBarService.ts:53](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/auxiliaryBarService.ts#L53)

## Properties

### state

• **state**: [`IAuxiliaryBar`](../interfaces/molecule.model.IAuxiliaryBar)

#### Implementation of

[IAuxiliaryBarService](../interfaces/molecule.IAuxiliaryBarService).[state](../interfaces/molecule.IAuxiliaryBarService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[services/workbench/auxiliaryBarService.ts:51](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/auxiliaryBarService.ts#L51)

## Methods

### addAuxiliaryBar

▸ **addAuxiliaryBar**(`tabs`): `void`

#### Parameters

| Name   | Type                                                                                                                                 |
| :----- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `tabs` | [`IAuxiliaryData`](../namespaces/molecule.model#iauxiliarydata) \| [`IAuxiliaryData`](../namespaces/molecule.model#iauxiliarydata)[] |

#### Returns

`void`

#### Implementation of

[IAuxiliaryBarService](../interfaces/molecule.IAuxiliaryBarService).[addAuxiliaryBar](../interfaces/molecule.IAuxiliaryBarService#addauxiliarybar)

#### Defined in

[services/workbench/auxiliaryBarService.ts:64](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/auxiliaryBarService.ts#L64)

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

#### Implementation of

[IAuxiliaryBarService](../interfaces/molecule.IAuxiliaryBarService).[count](../interfaces/molecule.IAuxiliaryBarService#count)

#### Inherited from

[Component](molecule.react.Component).[count](molecule.react.Component#count)

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

#### Implementation of

[IAuxiliaryBarService](../interfaces/molecule.IAuxiliaryBarService).[emit](../interfaces/molecule.IAuxiliaryBarService#emit)

#### Inherited from

[Component](molecule.react.Component).[emit](molecule.react.Component#emit)

#### Defined in

[common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Implementation of

[IAuxiliaryBarService](../interfaces/molecule.IAuxiliaryBarService).[forceUpdate](../interfaces/molecule.IAuxiliaryBarService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[react/component.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L81)

---

### getCurrentTab

▸ **getCurrentTab**(): `undefined` \| [`IAuxiliaryData`](../namespaces/molecule.model#iauxiliarydata)

Get the current tab

#### Returns

`undefined` \| [`IAuxiliaryData`](../namespaces/molecule.model#iauxiliarydata)

#### Implementation of

[IAuxiliaryBarService](../interfaces/molecule.IAuxiliaryBarService).[getCurrentTab](../interfaces/molecule.IAuxiliaryBarService#getcurrenttab)

#### Defined in

[services/workbench/auxiliaryBarService.ts:58](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/auxiliaryBarService.ts#L58)

---

### getState

▸ **getState**(): [`IAuxiliaryBar`](../interfaces/molecule.model.IAuxiliaryBar)

Get the Component state

#### Returns

[`IAuxiliaryBar`](../interfaces/molecule.model.IAuxiliaryBar)

#### Implementation of

[IAuxiliaryBarService](../interfaces/molecule.IAuxiliaryBarService).[getState](../interfaces/molecule.IAuxiliaryBarService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

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

#### Implementation of

[IAuxiliaryBarService](../interfaces/molecule.IAuxiliaryBarService).[onTabClick](../interfaces/molecule.IAuxiliaryBarService#ontabclick)

#### Defined in

[services/workbench/auxiliaryBarService.ts:106](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/auxiliaryBarService.ts#L106)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                                               |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`IAuxiliaryBar`](../interfaces/molecule.model.IAuxiliaryBar), `nextState`: [`IAuxiliaryBar`](../interfaces/molecule.model.IAuxiliaryBar)) => `void` |

#### Returns

`void`

#### Implementation of

[IAuxiliaryBarService](../interfaces/molecule.IAuxiliaryBarService).[onUpdateState](../interfaces/molecule.IAuxiliaryBarService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

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

#### Implementation of

[IAuxiliaryBarService](../interfaces/molecule.IAuxiliaryBarService).[removeOnUpdateState](../interfaces/molecule.IAuxiliaryBarService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[react/component.ts:77](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L77)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                                          |
| :----------- | :------------------------------------------------------------ |
| `nextState?` | [`IAuxiliaryBar`](../interfaces/molecule.model.IAuxiliaryBar) |

#### Returns

`void`

#### Implementation of

[IAuxiliaryBarService](../interfaces/molecule.IAuxiliaryBarService).[render](../interfaces/molecule.IAuxiliaryBarService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset all states

#### Returns

`void`

#### Implementation of

[IAuxiliaryBarService](../interfaces/molecule.IAuxiliaryBarService).[reset](../interfaces/molecule.IAuxiliaryBarService#reset)

#### Defined in

[services/workbench/auxiliaryBarService.ts:101](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/auxiliaryBarService.ts#L101)

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

#### Implementation of

[IAuxiliaryBarService](../interfaces/molecule.IAuxiliaryBarService).[setActive](../interfaces/molecule.IAuxiliaryBarService#setactive)

#### Defined in

[services/workbench/auxiliaryBarService.ts:71](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/auxiliaryBarService.ts#L71)

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

#### Implementation of

[IAuxiliaryBarService](../interfaces/molecule.IAuxiliaryBarService).[setChildren](../interfaces/molecule.IAuxiliaryBarService#setchildren)

#### Defined in

[services/workbench/auxiliaryBarService.ts:75](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/auxiliaryBarService.ts#L75)

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

#### Implementation of

[IAuxiliaryBarService](../interfaces/molecule.IAuxiliaryBarService).[setMode](../interfaces/molecule.IAuxiliaryBarService#setmode)

#### Defined in

[services/workbench/auxiliaryBarService.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/auxiliaryBarService.ts#L81)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                                                               | Description                |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IAuxiliaryBar`](../interfaces/molecule.model.IAuxiliaryBar)\>                                                                                          | update target state values |
| `callback?` | (`prevState`: [`IAuxiliaryBar`](../interfaces/molecule.model.IAuxiliaryBar), `nextState`: [`IAuxiliaryBar`](../interfaces/molecule.model.IAuxiliaryBar)) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[IAuxiliaryBarService](../interfaces/molecule.IAuxiliaryBarService).[setState](../interfaces/molecule.IAuxiliaryBarService#setstate)

#### Inherited from

[Component](molecule.react.Component).[setState](molecule.react.Component#setstate)

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

#### Implementation of

[IAuxiliaryBarService](../interfaces/molecule.IAuxiliaryBarService).[subscribe](../interfaces/molecule.IAuxiliaryBarService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

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

#### Implementation of

[IAuxiliaryBarService](../interfaces/molecule.IAuxiliaryBarService).[unsubscribe](../interfaces/molecule.IAuxiliaryBarService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L37)
