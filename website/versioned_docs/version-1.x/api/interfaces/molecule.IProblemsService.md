---
id: 'molecule.IProblemsService'
title: 'Interface: IProblemsService'
sidebar_label: 'IProblemsService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IProblemsService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`IProblems`](molecule.model.IProblems)\>

    ↳ **`IProblemsService`**

## Implemented by

-   [`ProblemsService`](../classes/molecule.ProblemsService)

## Properties

### state

• `Protected` `Abstract` **state**: [`IProblems`](molecule.model.IProblems)<`any`\>

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[react/component.ts:44](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L44)

## Methods

### add

▸ **add**(`data`): `void`

Add single or multiple items data

#### Parameters

| Name   | Type                                                                                                                 |
| :----- | :------------------------------------------------------------------------------------------------------------------- |
| `data` | [`IProblemsItem`](molecule.model.IProblemsItem)<`any`\> \| [`IProblemsItem`](molecule.model.IProblemsItem)<`any`\>[] |

#### Returns

`void`

#### Defined in

[services/problemsService.ts:28](https://github.com/DTStack/molecule/blob/927b7d39/src/services/problemsService.ts#L28)

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

### getState

▸ **getState**(): [`IProblems`](molecule.model.IProblems)<`any`\>

Get the Component state

#### Returns

[`IProblems`](molecule.model.IProblems)<`any`\>

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

---

### onSelect

▸ **onSelect**(`callback`): `void`

Listen to select a problem tree node

#### Parameters

| Name       | Type                                                                                |
| :--------- | :---------------------------------------------------------------------------------- |
| `callback` | (`node`: [`IProblemsTreeNode`](molecule.model.IProblemsTreeNode)<`any`\>) => `void` |

#### Returns

`void`

#### Defined in

[services/problemsService.ts:51](https://github.com/DTStack/molecule/blob/927b7d39/src/services/problemsService.ts#L51)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                   |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`IProblems`](molecule.model.IProblems)<`any`\>, `nextState`: [`IProblems`](molecule.model.IProblems)<`any`\>) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[react/component.ts:73](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L73)

---

### remove

▸ **remove**(`id`): `void`

Remove the specific problem items

#### Parameters

| Name | Type                       | Description            |
| :--- | :------------------------- | :--------------------- |
| `id` | `UniqueId` \| `UniqueId`[] | single or multiple ids |

#### Returns

`void`

#### Defined in

[services/problemsService.ts:33](https://github.com/DTStack/molecule/blob/927b7d39/src/services/problemsService.ts#L33)

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
| `nextState?` | [`IProblems`](molecule.model.IProblems)<`any`\> |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset the ProblemsService state data

#### Returns

`void`

#### Defined in

[services/problemsService.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/services/problemsService.ts#L37)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                                   | Description                |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IProblems`](molecule.model.IProblems)<`any`\>\>                                                                            | update target state values |
| `callback?` | (`prevState`: [`IProblems`](molecule.model.IProblems)<`any`\>, `nextState`: [`IProblems`](molecule.model.IProblems)<`any`\>) => `void` | -                          |

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

### toggleProblems

▸ **toggleProblems**(): `void`

Toggle the Problems view between display or hidden

#### Returns

`void`

#### Defined in

[services/problemsService.ts:46](https://github.com/DTStack/molecule/blob/927b7d39/src/services/problemsService.ts#L46)

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

---

### update

▸ **update**<`T`\>(`data`): `void`

Update the specific data

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name   | Type                                                                                                             | Description                 |
| :----- | :--------------------------------------------------------------------------------------------------------------- | :-------------------------- |
| `data` | [`IProblemsItem`](molecule.model.IProblemsItem)<`T`\> \| [`IProblemsItem`](molecule.model.IProblemsItem)<`T`\>[] | single or multiple problems |

#### Returns

`void`

#### Defined in

[services/problemsService.ts:42](https://github.com/DTStack/molecule/blob/927b7d39/src/services/problemsService.ts#L42)
