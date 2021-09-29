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

[src/react/component.ts:25](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L25)

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

[src/services/problemsService.ts:21](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/problemsService.ts#L21)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[forceUpdate](../classes/molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:58](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L58)

---

### getState

▸ **getState**(): [`IProblems`](molecule.IProblems)<`any`\>

#### Returns

[`IProblems`](molecule.IProblems)<`any`\>

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[onEvent](../classes/molecule.react.Component#onevent)

#### Defined in

[src/react/component.ts:66](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L66)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

#### Parameters

| Name       | Type                                                                                                                       |
| :--------- | :------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IProblems`](molecule.IProblems)<`any`\>, `nextState`: [`IProblems`](molecule.IProblems)<`any`\>) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L54)

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

[src/services/problemsService.ts:26](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/problemsService.ts#L26)

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

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

---

### reset

▸ **reset**(): `void`

Reset the ProblemsService state data

#### Returns

`void`

#### Defined in

[src/services/problemsService.ts:30](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/problemsService.ts#L30)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[subscribe](../classes/molecule.react.Component#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L11)

---

### toggleProblems

▸ **toggleProblems**(): `void`

Toggle the Problems view between display or hidden

#### Returns

`void`

#### Defined in

[src/services/problemsService.ts:39](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/problemsService.ts#L39)

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

[src/services/problemsService.ts:35](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/problemsService.ts#L35)
