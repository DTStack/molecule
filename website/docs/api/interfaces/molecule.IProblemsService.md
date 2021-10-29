---
id: 'molecule.IProblemsService'
title: 'Interface: IProblemsService'
sidebar_label: 'IProblemsService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IProblemsService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`IProblems`](molecule.IProblems)\>

    ↳ **`IProblemsService`**

## Implemented by

-   [`ProblemsService`](../classes/molecule.ProblemsService)

## Properties

### state

• `Protected` `Abstract` **state**: [`IProblems`](molecule.IProblems)<`any`\>

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:42](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L42)

## Methods

### add

▸ **add**(`data`): `void`

Add single or multiple items data

#### Parameters

| Name   | Type                                                                                                     |
| :----- | :------------------------------------------------------------------------------------------------------- |
| `data` | [`IProblemsItem`](molecule.IProblemsItem)<`any`\> \| [`IProblemsItem`](molecule.IProblemsItem)<`any`\>[] |

#### Returns

`void`

#### Defined in

[src/services/problemsService.ts:25](https://github.com/DTStack/molecule/blob/22a59c7/src/services/problemsService.ts#L25)

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

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/22a59c7/src/common/event/eventBus.ts#L28)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/22a59c7/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[forceUpdate](../classes/molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L79)

---

### getState

▸ **getState**(): [`IProblems`](molecule.IProblems)<`any`\>

Get the Component state

#### Returns

[`IProblems`](molecule.IProblems)<`any`\>

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L83)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                       |
| :--------- | :------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IProblems`](molecule.IProblems)<`any`\>, `nextState`: [`IProblems`](molecule.IProblems)<`any`\>) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L71)

---

### remove

▸ **remove**(`id`): `void`

Remove the specific problem items

#### Parameters

| Name | Type                   | Description            |
| :--- | :--------------------- | :--------------------- |
| `id` | `number` \| `number`[] | single or multiple ids |

#### Returns

`void`

#### Defined in

[src/services/problemsService.ts:30](https://github.com/DTStack/molecule/blob/22a59c7/src/services/problemsService.ts#L30)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[removeOnUpdateState](../classes/molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L75)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                      |
| :----------- | :---------------------------------------- |
| `nextState?` | [`IProblems`](molecule.IProblems)<`any`\> |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset the ProblemsService state data

#### Returns

`void`

#### Defined in

[src/services/problemsService.ts:34](https://github.com/DTStack/molecule/blob/22a59c7/src/services/problemsService.ts#L34)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                       | Description                |
| :---------- | :------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IProblems`](molecule.IProblems)<`any`\>\>                                                                      | update target state values |
| `callback?` | (`prevState`: [`IProblems`](molecule.IProblems)<`any`\>, `nextState`: [`IProblems`](molecule.IProblems)<`any`\>) => `void` | -                          |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[setState](../classes/molecule.react.Component#setstate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L54)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[subscribe](../classes/molecule.react.Component#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/22a59c7/src/common/event/eventBus.ts#L11)

---

### toggleProblems

▸ **toggleProblems**(): `void`

Toggle the Problems view between display or hidden

#### Returns

`void`

#### Defined in

[src/services/problemsService.ts:43](https://github.com/DTStack/molecule/blob/22a59c7/src/services/problemsService.ts#L43)

---

### unsubscribe

▸ **unsubscribe**(`name`): `void`

Unsubscribe the specific event

#### Parameters

| Name   | Type  | Description    |
| :----- | :---- | :------------- |
| `name` | `any` | The event name |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[unsubscribe](../classes/molecule.react.Component#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/22a59c7/src/common/event/eventBus.ts#L37)

---

### update

▸ **update**<`T`\>(`data`): `void`

Update the specific data

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name   | Type                                                                                                 | Description                 |
| :----- | :--------------------------------------------------------------------------------------------------- | :-------------------------- |
| `data` | [`IProblemsItem`](molecule.IProblemsItem)<`T`\> \| [`IProblemsItem`](molecule.IProblemsItem)<`T`\>[] | single or multiple problems |

#### Returns

`void`

#### Defined in

[src/services/problemsService.ts:39](https://github.com/DTStack/molecule/blob/22a59c7/src/services/problemsService.ts#L39)
