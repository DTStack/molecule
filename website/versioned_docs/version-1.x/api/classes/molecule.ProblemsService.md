---
id: 'molecule.ProblemsService'
title: 'Class: ProblemsService'
sidebar_label: 'ProblemsService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).ProblemsService

## Hierarchy

-   [`Component`](molecule.react.Component)<[`IProblems`](../interfaces/molecule.model.IProblems)\>

    ↳ **`ProblemsService`**

## Implements

-   [`IProblemsService`](../interfaces/molecule.IProblemsService)

## Constructors

### constructor

• **new ProblemsService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[services/problemsService.ts:62](https://github.com/DTStack/molecule/blob/927b7d39/src/services/problemsService.ts#L62)

## Properties

### builtinService

• `Private` `Readonly` **builtinService**: [`IBuiltinService`](../interfaces/molecule.IBuiltinService)

#### Defined in

[services/problemsService.ts:61](https://github.com/DTStack/molecule/blob/927b7d39/src/services/problemsService.ts#L61)

---

### state

• `Protected` **state**: [`IProblems`](../interfaces/molecule.model.IProblems)<`any`\>

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[state](../interfaces/molecule.IProblemsService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[services/problemsService.ts:59](https://github.com/DTStack/molecule/blob/927b7d39/src/services/problemsService.ts#L59)

---

### statusBarService

• `Private` `Readonly` **statusBarService**: [`IStatusBarService`](../interfaces/molecule.IStatusBarService)

#### Defined in

[services/problemsService.ts:60](https://github.com/DTStack/molecule/blob/927b7d39/src/services/problemsService.ts#L60)

## Methods

### add

▸ **add**<`T`\>(`item`): `void`

Add single or multiple items data

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name   | Type                                                                                                                                         |
| :----- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| `item` | [`IProblemsItem`](../interfaces/molecule.model.IProblemsItem)<`T`\> \| [`IProblemsItem`](../interfaces/molecule.model.IProblemsItem)<`T`\>[] |

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[add](../interfaces/molecule.IProblemsService#add)

#### Defined in

[services/problemsService.ts:75](https://github.com/DTStack/molecule/blob/927b7d39/src/services/problemsService.ts#L75)

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

[IProblemsService](../interfaces/molecule.IProblemsService).[emit](../interfaces/molecule.IProblemsService#emit)

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

[IProblemsService](../interfaces/molecule.IProblemsService).[forceUpdate](../interfaces/molecule.IProblemsService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[react/component.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L81)

---

### getProblemsMarkers

▸ `Private` **getProblemsMarkers**(`data`): `Object`

#### Parameters

| Name   | Type                                                                    |
| :----- | :---------------------------------------------------------------------- |
| `data` | [`IProblemsItem`](../interfaces/molecule.model.IProblemsItem)<`any`\>[] |

#### Returns

`Object`

| Name       | Type     |
| :--------- | :------- |
| `errors`   | `number` |
| `infos`    | `number` |
| `warnings` | `number` |

#### Defined in

[services/problemsService.ts:179](https://github.com/DTStack/molecule/blob/927b7d39/src/services/problemsService.ts#L179)

---

### getState

▸ **getState**(): [`IProblems`](../interfaces/molecule.model.IProblems)<`any`\>

Get the Component state

#### Returns

[`IProblems`](../interfaces/molecule.model.IProblems)<`any`\>

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[getState](../interfaces/molecule.IProblemsService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

---

### onSelect

▸ **onSelect**(`callback`): `void`

Listen to select a problem tree node

#### Parameters

| Name       | Type                                                                                              |
| :--------- | :------------------------------------------------------------------------------------------------ |
| `callback` | (`node`: [`IProblemsTreeNode`](../interfaces/molecule.model.IProblemsTreeNode)<`any`\>) => `void` |

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[onSelect](../interfaces/molecule.IProblemsService#onselect)

#### Defined in

[services/problemsService.ts:157](https://github.com/DTStack/molecule/blob/927b7d39/src/services/problemsService.ts#L157)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                                               |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`IProblems`](../interfaces/molecule.model.IProblems)<`any`\>, `nextState`: [`IProblems`](../interfaces/molecule.model.IProblems)<`any`\>) => `void` |

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[onUpdateState](../interfaces/molecule.IProblemsService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[react/component.ts:73](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L73)

---

### remove

▸ **remove**(`id`): `void`

Remove the specific problem items

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `id` | `UniqueId` \| `UniqueId`[] |

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[remove](../interfaces/molecule.IProblemsService#remove)

#### Defined in

[services/problemsService.ts:121](https://github.com/DTStack/molecule/blob/927b7d39/src/services/problemsService.ts#L121)

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

[IProblemsService](../interfaces/molecule.IProblemsService).[removeOnUpdateState](../interfaces/molecule.IProblemsService#removeonupdatestate)

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
| `nextState?` | [`IProblems`](../interfaces/molecule.model.IProblems)<`any`\> |

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[render](../interfaces/molecule.IProblemsService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset the ProblemsService state data

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[reset](../interfaces/molecule.IProblemsService#reset)

#### Defined in

[services/problemsService.ts:146](https://github.com/DTStack/molecule/blob/927b7d39/src/services/problemsService.ts#L146)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                                                               | Description                |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IProblems`](../interfaces/molecule.model.IProblems)<`any`\>\>                                                                                          | update target state values |
| `callback?` | (`prevState`: [`IProblems`](../interfaces/molecule.model.IProblems)<`any`\>, `nextState`: [`IProblems`](../interfaces/molecule.model.IProblems)<`any`\>) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[setState](../interfaces/molecule.IProblemsService#setstate)

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

[IProblemsService](../interfaces/molecule.IProblemsService).[subscribe](../interfaces/molecule.IProblemsService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L11)

---

### toggleProblems

▸ **toggleProblems**(): `void`

Toggle the Problems view between display or hidden

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[toggleProblems](../interfaces/molecule.IProblemsService#toggleproblems)

#### Defined in

[services/problemsService.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/services/problemsService.ts#L69)

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

[IProblemsService](../interfaces/molecule.IProblemsService).[unsubscribe](../interfaces/molecule.IProblemsService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L37)

---

### update

▸ **update**<`T`\>(`item`): `void`

Update the specific data

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name   | Type                                                                                                                                         |
| :----- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| `item` | [`IProblemsItem`](../interfaces/molecule.model.IProblemsItem)<`T`\> \| [`IProblemsItem`](../interfaces/molecule.model.IProblemsItem)<`T`\>[] |

#### Returns

`void`

#### Implementation of

[IProblemsService](../interfaces/molecule.IProblemsService).[update](../interfaces/molecule.IProblemsService#update)

#### Defined in

[services/problemsService.ts:97](https://github.com/DTStack/molecule/blob/927b7d39/src/services/problemsService.ts#L97)

---

### updateStatus

▸ `Private` **updateStatus**<`T`\>(`item`): `void`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name   | Type                                                                  |
| :----- | :-------------------------------------------------------------------- |
| `item` | [`IStatusBarItem`](../interfaces/molecule.model.IStatusBarItem)<`T`\> |

#### Returns

`void`

#### Defined in

[services/problemsService.ts:175](https://github.com/DTStack/molecule/blob/927b7d39/src/services/problemsService.ts#L175)

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

[services/problemsService.ts:161](https://github.com/DTStack/molecule/blob/927b7d39/src/services/problemsService.ts#L161)
