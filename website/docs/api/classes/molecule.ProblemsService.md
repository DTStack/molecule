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

[src/services/problemsService.ts:48](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/problemsService.ts#L48)

## Properties

### state

• `Protected` **state**: [`IProblems`](../interfaces/molecule.IProblems)<`any`\>

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[state](../interfaces/molecule.IProblemsService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/problemsService.ts:46](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/problemsService.ts#L46)

---

### statusBarService

• `Private` `Readonly` **statusBarService**: [`IStatusBarService`](../interfaces/molecule.IStatusBarService)

#### Defined in

[src/services/problemsService.ts:47](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/problemsService.ts#L47)

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

[src/services/problemsService.ts:60](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/problemsService.ts#L60)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[forceUpdate](../interfaces/molecule.IProblemsService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:58](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L58)

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

[src/services/problemsService.ts:153](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/problemsService.ts#L153)

---

### getState

▸ **getState**(): [`IProblems`](../interfaces/molecule.IProblems)<`any`\>

#### Returns

[`IProblems`](../interfaces/molecule.IProblems)<`any`\>

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[getState](../interfaces/molecule.IProblemsService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:62](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L62)

---

### onEvent

▸ **onEvent**(`name`, `callback`): `void`

Subscribe the component event

#### Parameters

| Name       | Type  |
| :--------- | :---- |
| `name`     | `any` |
| `callback` | `any` |

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[onEvent](../interfaces/molecule.IProblemsService#onevent)

#### Inherited from

[Component](molecule.react.Component).[onEvent](molecule.react.Component#onevent)

#### Defined in

[src/react/component.ts:66](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L66)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

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

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L54)

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

[src/services/problemsService.ts:106](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/problemsService.ts#L106)

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

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

---

### reset

▸ **reset**(): `void`

Reset the ProblemsService state data

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[reset](../interfaces/molecule.IProblemsService#reset)

#### Defined in

[src/services/problemsService.ts:131](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/problemsService.ts#L131)

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

[src/react/component.ts:37](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L37)

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

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L11)

---

### toggleProblems

▸ **toggleProblems**(): `void`

Toggle the Problems view between display or hidden

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[toggleProblems](../interfaces/molecule.IProblemsService#toggleproblems)

#### Defined in

[src/services/problemsService.ts:54](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/problemsService.ts#L54)

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

[src/services/problemsService.ts:82](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/problemsService.ts#L82)

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

[src/services/problemsService.ts:149](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/problemsService.ts#L149)

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

[src/services/problemsService.ts:139](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/problemsService.ts#L139)
