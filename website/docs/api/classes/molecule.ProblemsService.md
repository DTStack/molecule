---
id: 'molecule.ProblemsService'
title: 'Class: ProblemsService'
sidebar_label: 'ProblemsService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).ProblemsService

## Hierarchy

-   [`Component`](molecule.react.Component)<[`IProblems`](../interfaces/molecule.IProblems)\>

    ↳ **`ProblemsService`**

## Implements

-   [`IProblemsService`](../interfaces/molecule.IProblemsService)

## Constructors

### constructor

• **new ProblemsService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[src/services/problemsService.ts:53](https://github.com/DTStack/molecule/blob/b675cb9/src/services/problemsService.ts#L53)

## Properties

### builtinService

• `Private` `Readonly` **builtinService**: [`IBuiltinService`](../interfaces/molecule.IBuiltinService)

#### Defined in

[src/services/problemsService.ts:52](https://github.com/DTStack/molecule/blob/b675cb9/src/services/problemsService.ts#L52)

---

### state

• `Protected` **state**: [`IProblems`](../interfaces/molecule.IProblems)<`any`\>

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[state](../interfaces/molecule.IProblemsService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/problemsService.ts:50](https://github.com/DTStack/molecule/blob/b675cb9/src/services/problemsService.ts#L50)

---

### statusBarService

• `Private` `Readonly` **statusBarService**: [`IStatusBarService`](../interfaces/molecule.IStatusBarService)

#### Defined in

[src/services/problemsService.ts:51](https://github.com/DTStack/molecule/blob/b675cb9/src/services/problemsService.ts#L51)

## Methods

### add

▸ **add**<`T`\>(`item`): `void`

Add single or multiple items data

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name   | Type                                                                                                                             |
| :----- | :------------------------------------------------------------------------------------------------------------------------------- |
| `item` | [`IProblemsItem`](../interfaces/molecule.IProblemsItem)<`T`\> \| [`IProblemsItem`](../interfaces/molecule.IProblemsItem)<`T`\>[] |

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[add](../interfaces/molecule.IProblemsService#add)

#### Defined in

[src/services/problemsService.ts:66](https://github.com/DTStack/molecule/blob/b675cb9/src/services/problemsService.ts#L66)

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

[IProblemsService](../interfaces/molecule.IProblemsService).[count](../interfaces/molecule.IProblemsService#count)

#### Inherited from

[Component](molecule.react.Component).[count](molecule.react.Component#count)

#### Defined in

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/b675cb9/src/common/event/eventBus.ts#L28)

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

[IProblemsService](../interfaces/molecule.IProblemsService).[emit](../interfaces/molecule.IProblemsService#emit)

#### Inherited from

[Component](molecule.react.Component).[emit](molecule.react.Component#emit)

#### Defined in

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/b675cb9/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[forceUpdate](../interfaces/molecule.IProblemsService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L79)

---

### getProblemsMarkers

▸ `Private` **getProblemsMarkers**(`data`): `Object`

#### Parameters

| Name   | Type                                                              |
| :----- | :---------------------------------------------------------------- |
| `data` | [`IProblemsItem`](../interfaces/molecule.IProblemsItem)<`any`\>[] |

#### Returns

`Object`

| Name       | Type     |
| :--------- | :------- |
| `errors`   | `number` |
| `infos`    | `number` |
| `warnings` | `number` |

#### Defined in

[src/services/problemsService.ts:166](https://github.com/DTStack/molecule/blob/b675cb9/src/services/problemsService.ts#L166)

---

### getState

▸ **getState**(): [`IProblems`](../interfaces/molecule.IProblems)<`any`\>

Get the Component state

#### Returns

[`IProblems`](../interfaces/molecule.IProblems)<`any`\>

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[getState](../interfaces/molecule.IProblemsService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L83)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                                   |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IProblems`](../interfaces/molecule.IProblems)<`any`\>, `nextState`: [`IProblems`](../interfaces/molecule.IProblems)<`any`\>) => `void` |

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[onUpdateState](../interfaces/molecule.IProblemsService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L71)

---

### remove

▸ **remove**(`id`): `void`

Remove the specific problem items

#### Parameters

| Name | Type                   |
| :--- | :--------------------- |
| `id` | `number` \| `number`[] |

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[remove](../interfaces/molecule.IProblemsService#remove)

#### Defined in

[src/services/problemsService.ts:112](https://github.com/DTStack/molecule/blob/b675cb9/src/services/problemsService.ts#L112)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[removeOnUpdateState](../interfaces/molecule.IProblemsService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L75)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                                    |
| :----------- | :------------------------------------------------------ |
| `nextState?` | [`IProblems`](../interfaces/molecule.IProblems)<`any`\> |

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[render](../interfaces/molecule.IProblemsService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset the ProblemsService state data

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[reset](../interfaces/molecule.IProblemsService#reset)

#### Defined in

[src/services/problemsService.ts:137](https://github.com/DTStack/molecule/blob/b675cb9/src/services/problemsService.ts#L137)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                                                   | Description                |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IProblems`](../interfaces/molecule.IProblems)<`any`\>\>                                                                                    | update target state values |
| `callback?` | (`prevState`: [`IProblems`](../interfaces/molecule.IProblems)<`any`\>, `nextState`: [`IProblems`](../interfaces/molecule.IProblems)<`any`\>) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[setState](../interfaces/molecule.IProblemsService#setstate)

#### Inherited from

[Component](molecule.react.Component).[setState](molecule.react.Component#setstate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L54)

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

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[subscribe](../interfaces/molecule.IProblemsService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/b675cb9/src/common/event/eventBus.ts#L11)

---

### toggleProblems

▸ **toggleProblems**(): `void`

Toggle the Problems view between display or hidden

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[toggleProblems](../interfaces/molecule.IProblemsService#toggleproblems)

#### Defined in

[src/services/problemsService.ts:60](https://github.com/DTStack/molecule/blob/b675cb9/src/services/problemsService.ts#L60)

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

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[unsubscribe](../interfaces/molecule.IProblemsService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b675cb9/src/common/event/eventBus.ts#L37)

---

### update

▸ **update**<`T`\>(`item`): `void`

Update the specific data

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name   | Type                                                                                                                             |
| :----- | :------------------------------------------------------------------------------------------------------------------------------- |
| `item` | [`IProblemsItem`](../interfaces/molecule.IProblemsItem)<`T`\> \| [`IProblemsItem`](../interfaces/molecule.IProblemsItem)<`T`\>[] |

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[update](../interfaces/molecule.IProblemsService#update)

#### Defined in

[src/services/problemsService.ts:88](https://github.com/DTStack/molecule/blob/b675cb9/src/services/problemsService.ts#L88)

---

### updateStatus

▸ `Private` **updateStatus**<`T`\>(`item`): `void`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name   | Type                                                            |
| :----- | :-------------------------------------------------------------- |
| `item` | [`IStatusBarItem`](../interfaces/molecule.IStatusBarItem)<`T`\> |

#### Returns

`void`

#### Defined in

[src/services/problemsService.ts:162](https://github.com/DTStack/molecule/blob/b675cb9/src/services/problemsService.ts#L162)

---

### updateStatusBar

▸ `Private` **updateStatusBar**<`T`\>(): `void`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Returns

`void`

#### Defined in

[src/services/problemsService.ts:148](https://github.com/DTStack/molecule/blob/b675cb9/src/services/problemsService.ts#L148)
